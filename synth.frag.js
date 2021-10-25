const SYNTHFRAGSHADER = `
#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
precision highp int;
#else
precision mediump float;
precision mediump int;
#endif

#define PI 3.1415926538
#define GOLDEN_RATIO 1.6180339887

#define FN_RENDER    0

uniform vec2 u_dimensions;
uniform vec2 u_tex_dimensions;
uniform sampler2D u_texture;
uniform float u_transform_scale;
uniform vec2 u_transform_center;
uniform float u_transform_rotation;
uniform int u_function;

uniform float u_feedback;
uniform bool u_constrain_to_transform;

out vec4 color_out;

vec3 hsv_to_rgb(vec3 hsv) {
    float h = hsv.r;
    while (h > 360.)
        h -= 360.;

    float s = hsv.g;
    float v = hsv.b;

    float c = v * s;
    float x = c * float(1 - abs(int(h / 60.) % 2 - 1));
    float m = v - c;

    vec3 rgb = vec3(0.);
    if (h < 60.)
        rgb = vec3(c, x, 0.);
    else if (h < 120.)
        rgb = vec3(x, c, 0.);
    else if (h < 180.)
        rgb = vec3(0., c, x);
    else if (h < 240.)
        rgb = vec3(0., x, c);
    else if (h < 300.)
        rgb = vec3(x, 0., c);
    else
        rgb = vec3(c, 0., x);

    rgb += m;
    return rgb;
}

vec3 rgb_to_hsv(vec3 rgb) {
    float c_max = max(max(rgb.r, rgb.g), rgb.b);
    float c_min = min(min(rgb.r, rgb.g), rgb.b);
    float delta = c_max - c_min;
    float h = 0.;
    if (delta == 0.)
        h = 0.;
    else if (c_max == rgb.r)
        h = 60. * float(int((rgb.g - rgb.b) / delta) % 6);
    else if (c_max == rgb.g)
        h = 60. * (((rgb.b - rgb.r) / delta) + 2.);
    else if (c_max == rgb.b)
        h = 60. * (((rgb.r - rgb.g) / delta) + 4.);

    float s = 0.;
    if (c_max != 0.)
        s = delta / c_max;
    float v = c_max;

    return vec3(h, s, v);
}

float isGEq(float a, float b) {
    return sign(sign(a - b) + 1.0);
}

vec2 get_hex_origin(vec2 coords, float hex_size) {
    float n = max(hex_size, 0.01);
    float halfn = n / 2.0;

    float sqrt3 = 1.732;

    float W = sqrt3 * n;
    float halfW = W/2.0;

    float H = 3.0 * halfn;

    float xidx = floor(coords.x / W);
    float yidx = floor(coords.y / H);

    // Get top left corner of bounding square
    vec2 o = vec2(W * xidx, H * yidx);

    // transform coordinates to make square begin at origin
    vec2 t = coords - o;

    // Hexagon targets in transformed space
    vec2 vertA = vec2(0.0, 0.0);
    vec2 vertB = vec2(W, 0.0);
    vec2 vertC = vec2(halfW, H);

    vec2 vertInvalid = vec2(-1.0, 0.0);

    // pattern alternates every other row
    if (mod(yidx, 2.0) != 0.0) {
        t.y = H - t.y;
    }

    float xLeHalfW = isGEq(halfW, t.x);
    float yLehalfN = isGEq(halfn, t.y);
    float yGeN = isGEq(t.y, n);

    float yt = t.y - halfn;
    float xt = (t.x - halfW) / sqrt3;
    float xnt = (halfW - t.x) / sqrt3;

    float xntGeYt = isGEq(xnt, yt);
    float xtGeYt = isGEq(xt, yt);

    vec2 hex =
        yLehalfN * (
             xLeHalfW * vertA +
             (1.0 - xLeHalfW) * vertB) +
        yGeN * vertC +
        (1.0 - yLehalfN) * (1.0 - yGeN) * (
             xLeHalfW * (
                xntGeYt * vertA +
                (1.0 - xntGeYt) * vertC) +
             (1.0 - xLeHalfW) * (
                xtGeYt * vertB +
                (1.0 - xtGeYt) * vertC));

    if (mod(yidx, 2.0) != 0.0) {
        hex.y = H - hex.y;
    }

   hex += o;

   return hex;
}



vec2 t_coords;

/// modulefn: bitfield
/// moduletag: generator

uniform vec3 u_bf_fg_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 1, 1], "names": ["r", "g", "b"] }
uniform vec3 u_bf_bg_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [0, 0, 0], "names": ["r", "g", "b"] }
uniform vec2 u_bf_offset; /// { "start": [-1, -1], "end": [1, 1], "default": [0, 0], "names": ["x", "y"] }
uniform float u_bf_operator_a; /// { "start": 0, "end": 100, "default": 9 }
uniform float u_bf_operator_b; /// { "start": 0, "end": 100, "default": 4 }
uniform bool u_bf_destructive; /// { "default": false }

void bitfield() {
    // vec2 coords = t_coords.xy;
    // vec2 c = coords / u_dimensions;
    // c = 2. * c - 1.;
    // c *= vec2(u_bf_x_scale, u_bf_y_scale);
    ivec2 ic = ivec2(t_coords.xy + u_bf_offset * u_dimensions);
    vec3 color = u_bf_bg_color;
    float factor = mod(float(ic.x ^ ic.y), u_bf_operator_a) / u_bf_operator_b;
    color = factor * u_bf_fg_color + (1. - factor) * u_bf_bg_color;

    if (u_bf_destructive) {
        color_out.rgb = color;
    } else {
        color_out.rgb += color;
    }
}


/// modulefn: blur
/// moduletag: space

uniform int u_blur_stride_x; /// { "start": 1, "end": 100, "default": 1 }
uniform int u_blur_stride_y; /// { "start": 1, "end": 100, "default": 1 }

void blur() {
    ivec2 c = ivec2(t_coords.xy);
    vec3 color = vec3(0);
    float size = float(u_blur_stride_y * u_blur_stride_x * 4);
    for (int y = -u_blur_stride_y + 1; y < u_blur_stride_y; y++) {
        for (int x = -u_blur_stride_x + 1; x < u_blur_stride_x; x++) {
            color += texelFetch(u_texture, c + ivec2(x, y), 0).xyz / size ;
        }
    }
    color_out = vec4(u_feedback * color, 1.);
}


/// modulefn: chromakey
/// moduletag: channels

uniform vec3 u_chromakey_key; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [0, 1, 0], "names": ["r", "g", "b"] }
uniform float u_chromakey_strength; /// { "start": 0, "end": 2, "default": 0.25 }
uniform sampler2D u_chromakey_map; /// channel

void chromakey() {
    vec2 coords = u_tex_dimensions * t_coords.xy / u_dimensions;
    if (length(color_out.rgb - u_chromakey_key) <= u_chromakey_strength)
        color_out.xyz = texelFetch(u_chromakey_map, ivec2(coords), 0).rgb;
}


/// modulefn: composite
/// moduletag: channels

uniform sampler2D u_composite_map_1; /// channel
uniform sampler2D u_composite_map_2; /// channel

void composite() {
    vec2 coords = u_tex_dimensions * t_coords.xy / u_dimensions;
    color_out.xyz =
        color_out.rgb * texelFetch(u_composite_map_1, ivec2(coords), 0).rgb +
        (1. - color_out.rgb) * texelFetch(u_composite_map_2, ivec2(coords), 0).rgb;
}


/// modulefn: condzoom
/// moduletag: channels

uniform float u_condzoom_strength; /// { "start": -1, "end": 10, "default": 2 }
uniform sampler2D u_condzoom_map; /// channel

void condzoom() {
    vec2 coords = t_coords.xy / u_dimensions;
    vec2 c = 2. * coords - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);

    vec3 lumc = vec3(0.2126, 0.7152, 0.0722);
    float lum = dot(color_out.rgb, lumc);
    float z = u_condzoom_strength * lum;

    if (z > 0.)
        c /= z;

    c = (c + 1.) / 2.;
    c *= u_tex_dimensions;

    ivec2 ic = ivec2(c);

    color_out.xyz = texelFetch(u_condzoom_map, ic, 0).rgb;
}


/// modulefn: copy
/// moduletag: channels

uniform sampler2D u_copy_map; /// channel

void copy() {
    vec2 coords = u_tex_dimensions * t_coords.xy / u_dimensions;
    color_out.xyz += texelFetch(u_copy_map, ivec2(coords), 0).rgb;
}


/// modulefn: checkerfill
/// moduletag: space

uniform int u_checkerfill_size; /// { "start": 1, "end": 100, "default": 5 }

void checkerfill() {
    vec2 coords = t_coords.xy / u_dimensions;
    ivec2 ic = ivec2(coords);

    int m = 0;
    if ((ic.x / u_checkerfill_size) % 2 == 0)
        m += 1;
    if ((ic.y / u_checkerfill_size) % 2 == 0)
        m += 1;
    m = m % 2;

    color_out = vec4(float(m) * vec3(1.), 1.);
}


/// modulefn: enhance
/// moduletag: color

uniform vec3 u_enhance; /// { "start": [0, 0, 0], "end": [10, 10, 10], "default": [1, 1, 1], "names": ["r", "g", "b"] }

void enhance() {
    color_out.rgb *= u_enhance;
}


/// modulefn: fourierdraw
/// moduletag: generator

// sin(dot(f, x) + c) * color
uniform vec3 u_fd_r; /// { "start": [-10, -10, -10], "end": [10, 10, 10], "default": [0, 0, 0], "names": ["1", "2", "3"] }
uniform vec3 u_fd_theta; /// { "start": [0, 0, 0], "end": ["2 * math.pi", "2 * math.pi", "2 * math.pi"], "default": [0, 0, 0], "names": ["1", "2", "3"] }
uniform float u_fd_draw_r; /// { "start": 0, "end": 2, "default": 0.25 }
uniform vec3 u_fd_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 0, 0], "names": ["r", "g", "b"] }
uniform float u_fd_thickness; /// { "start": 0, "end": 1, "default": 0.025 }
uniform bool u_fd_smooth_edges; /// { "default": true }
uniform bool u_fd_fill; /// { "default": false }
uniform bool u_fd_destructive; /// { "default": false }

void fourierdraw() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;

    float x = dot(u_fd_r * cos(u_fd_theta), vec3(1.));
    float y = dot(u_fd_r * sin(u_fd_theta), vec3(1.));

    vec2 pos = vec2(x, y);
    float r = length(pos - c);
    if ((u_fd_fill &&  r < u_fd_draw_r) ||
        (!u_fd_fill && abs(r - u_fd_draw_r) < u_fd_thickness )) {
        float factor = 1.;
        if (u_fd_smooth_edges && (!u_fd_fill || r >= u_fd_draw_r)) {
            factor = 1. - abs(r - u_fd_draw_r) / u_fd_thickness;
        }

        if (u_fd_destructive && factor > 0.)
            color_out.rgb = factor * u_fd_color;
        else
            color_out.rgb += factor * u_fd_color;

    }
}


/// modulefn: gamma_correct
/// moduletag: color

uniform float u_gamma_correction; /// { "start": 2, "end": 4, "default": 2 }

void gamma_correct() {
    float r = pow(color_out.r, 1. / u_gamma_correction);
    float g = pow(color_out.g, 1. / u_gamma_correction);
    float b = pow(color_out.b, 1. / u_gamma_correction);
    color_out.xyz = vec3(r, g, b);
}


/// modulefn: greyscale
/// moduletag: color

uniform vec3 u_greyscale_luminance; /// { "start": [0,0,0], "end": [1,1,1], "default": [0.2126, 0.7152, 0.0722], "names": ["r", "g", "b"] }

void greyscale() {
    vec2 coords = t_coords.xy;
    vec3 color = u_feedback * texelFetch(u_texture, ivec2(coords), 0).xyz;
    color_out.rgb = vec3(dot(color.rgb, u_greyscale_luminance));
}


/// modulefn: halftone
/// moduletag: space

uniform int u_halftone_factor; /// { "start": 0, "end": 500, "default": 10 }
uniform bool u_halftone_invert; /// { "default": false }
uniform float u_halftone_strength; /// { "start": 0, "end": 2, "default": 1 }

void halftone() {
    vec2 coords = t_coords.xy;
    float f = float(u_halftone_factor);
    vec2 f_coords = floor(coords / f) * f + f / 2.;
    vec3 color = texelFetch(u_texture, ivec2(f_coords), 0).xyz;
    vec3 lumc = vec3(0.2126, 0.7152, 0.0722);
    float lum = dot(color.rgb, lumc);
    float intensity = length(coords - f_coords) / (sqrt(2.) * f / 2.);
    if (intensity < u_halftone_strength * lum)
        intensity = 1.;
    else
        intensity = 0.;
    if (u_halftone_invert)
        intensity = 1. - intensity;
    color *= intensity;

    color_out = vec4(u_feedback * color, 1.);
}



/// modulefn: hexswirl
/// moduletag: space

uniform float u_hexswirl_factor; /// { "start": 0, "end": "2 * math.pi", "default": 0 }
uniform float u_hexswirl_size; /// { "start": 0, "end": "100", "default": 5 }

void hexswirl() {
    vec2 hex_coords = get_hex_origin(t_coords.xy, u_hexswirl_size);
    float hex_r = (u_hexswirl_size / 2.)/ cos(5. * PI / 12.);
    vec2 c = (t_coords.xy - hex_coords) / hex_r;
    c = 2. * c - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);
    theta += r * u_hexswirl_factor;
    c = r * vec2(cos(theta), sin(theta));

    c  = (c + 1.) / 2.;

    c *= hex_r;
    c += hex_coords;

    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}


/// modulefn: hue_shift
/// moduletag: color

uniform float u_hue_shift; /// { "start": 0, "end": 360, "default": 180 }
uniform float u_saturate_shift; /// { "start": 0, "end": 1, "default": 0 }

void hue_shift() {
    color_out.rgb = hsv_to_rgb(
        rgb_to_hsv(color_out.rgb) + vec3(u_hue_shift, u_saturate_shift, 0.));
}


/// modulefn: invert_color
/// moduletag: color

void invert_color() {
    color_out.rgb = 1. - color_out.rgb;
}


/// modulefn: invert_phase
/// moduletag: color

void invert_phase() {
    color_out.rgb = -1. * color_out.rgb;
}


/// modulefn: multiply
/// moduletag: channels

uniform sampler2D u_multiply_map; /// channel

void multiply() {
    vec2 coords = u_tex_dimensions * t_coords.xy / u_dimensions;
    color_out.xyz *= texelFetch(u_multiply_map, ivec2(coords), 0).rgb;
}


/// modulefn: noise
/// moduletag: generator

uniform float u_noise_r; /// { "start": 0, "end": 10000, "default": 0 }
uniform float u_noise_g; /// { "start": 0, "end": 10000, "default": 0 }
uniform float u_noise_b; /// { "start": 0, "end": 10000, "default": 0 }

// 2D Random
float random (in vec2 st, float noise_param) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * noise_param);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise_1d (float noise_param) {
    vec2 st = t_coords.xy / u_dimensions;
    st *= 5.;

    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i, noise_param);
    float b = random(i + vec2(1.0, 0.0), noise_param);
    float c = random(i + vec2(0.0, 1.0), noise_param);
    float d = random(i + vec2(1.0, 1.0), noise_param);

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void noise() {
    float r = noise_1d(u_noise_r);
    float g = noise_1d(u_noise_g);
    float b = noise_1d(u_noise_b);
    color_out.xyz += vec3(r, g, b);
}


/// modulefn: offset
/// moduletag: color

uniform vec3 u_offsets_x; /// { "start": [-1, -1, -1], "end": [1, 1, 1], "default": [0, 0, 0], "names": ["r", "g", "b"] }
uniform vec3 u_offsets_y; /// { "start": [-1, -1, -1], "end": [1, 1, 1], "default": [0, 0, 0], "names": ["r", "g", "b"] }

vec2 offset_fix_range(vec2 c) {
    vec2 res = c;
    if (res.x > 1.)
        res.x = res.x - 1.;
    if (res.x < 0.)
        res.x = 1. + res.x;

    if (res.y > 1.)
        res.y = res.y - 1.;
    if (res.y < 0.)
        res.y = 1. + res.y;

    return res;
}

void offset() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;

    vec2 c_r = c + vec2(u_offsets_x.r, u_offsets_y.r);
    c_r = offset_fix_range(c_r);
    vec2 c_g = c + vec2(u_offsets_x.g, u_offsets_y.g);
    c_g = offset_fix_range(c_g);
    vec2 c_b = c + vec2(u_offsets_x.b, u_offsets_y.b);
    c_b = offset_fix_range(c_b);

    color_out.r = texelFetch(u_texture, ivec2(c_r * u_tex_dimensions), 0).r;
    color_out.g = texelFetch(u_texture, ivec2(c_g * u_tex_dimensions), 0).g;
    color_out.b = texelFetch(u_texture, ivec2(c_b * u_tex_dimensions), 0).b;
    color_out *= u_feedback;
    color_out.a = 1.;
}


/// modulefn: oscillator
/// moduletag: generator

// sin(dot(f, x) + c) * color
uniform vec2 u_osc_f; /// { "start": [0, 0], "end": [1, 1], "default": [0.25, 0], "names": ["x", "y"] }
uniform float u_osc_c; /// { "start": 0, "end": "2 * math.pi", "default": 0 }
uniform vec3 u_osc_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 0, 0], "names": ["r", "g", "b"] }

void oscillator() {
    vec2 coords = t_coords.xy;
    color_out.xyz += sin(dot(u_osc_f, coords) + u_osc_c) * u_osc_color;
    color_out.a = 1.;
}


/// modulefn: picture
/// moduletag: generator

uniform sampler2D u_picture_texture; /// custom
uniform vec2 u_picture_dimensions; /// custom

void picture() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c.y = 1. - c.y;
    c *= u_picture_dimensions;

    color_out.xyz += texelFetch(u_picture_texture, ivec2(c), 0).xyz;
}


/// modulefn: pixelate
/// moduletag: space

uniform int u_pixelate_factor; /// { "start": 0, "end": 500, "default": 10 }

void pixelate() {
    vec2 coords = t_coords.xy;
    float f = float(u_pixelate_factor);
    coords = floor(coords / f) * f;
    vec3 color = vec3(0);
    for (int i = 0; i < u_pixelate_factor; i++) {
        for (int j = 0; j < u_pixelate_factor; j++) {
            color += texelFetch(
                u_texture,
                ivec2(coords) + ivec2(i, j),
                0
            ).xyz / f;
        }
    }
    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(coords), 0).xyz, 1.);
}


/// modulefn: polygon
/// moduletag: generator

uniform vec3 u_polygon_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 0, 0], "names": ["r", "g", "b"] }
uniform int u_polygon_n; /// { "start": 3, "end": 100, "default": 4 }
uniform float u_polygon_r; /// { "start": 0, "end": 1, "default": 0.49999 }
uniform float u_polygon_thickness; /// { "start": 0, "end": 1, "default": 0.025 }
uniform bool u_polygon_smooth_edges; /// { "default": true }
uniform bool u_polygon_fill; /// { "default": false }
uniform bool u_polygon_destructive; /// { "default": false }

void polygon() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);
    if (theta < 0.)
        theta += 2. * PI;

    float angle = 2. * PI / float(u_polygon_n);
    float lower = floor(theta / angle) * angle;
    float higher = ceil(theta / angle) * angle;

    vec2 lower_c = u_polygon_r * vec2(cos(lower), sin(lower));
    vec2 higher_c = u_polygon_r * vec2(cos(higher), sin(higher));
    // if (length(lower_c - c) < 0.1)
    //     color_out.rgb = vec3(1.);
    // if (length(higher_c - c) < 0.1)
    //     color_out.rgb = vec3(1.);

    // return;
    // a + (b - a) * t = r' * (cos x, sin x)
    // a.x + (b.x - a.x) * t = r' * cos x
    // a.y + (b.y - a.y) * t = r' * sin x
    //
    // t = (r' * cos x - a.x) / (b.x - a.x)
    // r' * sin x = (a.y + (r' * cos x - a.x) (b.y - a.y) / (b.x - a.x))
    // r' * sin x - (r' * cos x) (b.y - a.y) / (b.x - a.x) = a.y - a.x * (b.y - a.y) / (b.x - a.x)
    // r' * (sin x - (cos x - a.x) (b.y - a.y) / (b.x - a.x) = a.y - a.x * (b.y - a.y) / (b.x - a.x)
    // where a = lower_c, b = higher_c, x = theta, r' = radius along pg edge

    vec2 s = higher_c - lower_c;
    float lhs = 1. - (cos(theta) * s.y / (sin(theta) * s.x));
    float rhs = (lower_c.y * s.x - lower_c.x * s.y) / (sin(theta) * s.x);
    // float lhs = (
    //     sin(theta) - (cos(theta) - lower_c.x) * (
    //         (higher_c.y - lower_c.y) / (higher_c.x - lower_c.x)
    //     ));

    // float rhs = (
    //     lower_c.y - lower_c.x * (
    //         (higher_c.y - lower_c.y) / (higher_c.x - lower_c.x)
    //     ));
    float pg_r = rhs / lhs;

    // float base = length(higher_c - lower_c);
    // float h = sqrt(u_polygon_r * u_polygon_r - base * base);
    // float pg_r = 0.;
    // float avg = (lower + higher) / 2.;
    // if (theta < avg)
    //     pg_r = mix(u_polygon_r, h, (theta - lower) / (avg - lower));
    // else
    //     pg_r = mix(h, u_polygon_r, (theta - avg) / (avg - lower));


    if (abs(r - pg_r) < u_polygon_thickness || (u_polygon_fill && r < pg_r)) {
        float factor = 1.;
        if (u_polygon_smooth_edges && (!u_polygon_fill || r >= pg_r)) {
            factor = 1. - abs(r - pg_r) / u_polygon_thickness;
        }

        if (u_polygon_destructive && factor > 0.)
            color_out.rgb = factor * u_polygon_color;
        else
            color_out.rgb += factor * u_polygon_color;
    }
}


/// modulefn: radial
/// moduletag: color

uniform float u_radial_strength; /// { "start": 0, "end": 10, "default": -1 }
uniform vec2 u_radial_center;  /// { "start": [0, 0], "end": [1, 1], "default": [0.5, 0.5], "names": ["x", "y"] }

void radial() {
    vec2 coords = t_coords.xy / u_dimensions;

    float r = length(coords - u_radial_center);
    float f = 1. - pow(r, u_radial_strength);

    color_out.rgb *= f;
}


/// modulefn: recolor
/// moduletag: color

uniform vec3 u_recolor_new_r; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 0, 0], "names": ["r", "g", "b"] }
uniform vec3 u_recolor_new_g; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [0, 1, 0], "names": ["r", "g", "b"] }
uniform vec3 u_recolor_new_b; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [0, 0, 1], "names": ["r", "g", "b"] }

void recolor() {
    color_out.xyz =
        color_out.r * u_recolor_new_r +
        color_out.g * u_recolor_new_g +
        color_out.b * u_recolor_new_b;
}


/// modulefn: reduce_colors
/// moduletag: color

uniform sampler2D u_reduce_colors_data; /// custom
uniform int u_reduce_colors_count; /// custom

void reduce_colors() {
    vec3 closest_color = vec3(0.);
    float dist = -1.;
    for (int i = 0; i < u_reduce_colors_count; i++) {
        vec3 candidate = texelFetch(u_reduce_colors_data, ivec2(i, 0), 0).rgb;
        vec3 dists = abs(candidate - color_out.rgb);
        float curr_dist = dists.r + dists.g + dists.b;
        if (dist < 0. || curr_dist < dist) {
            dist = curr_dist;
            closest_color = candidate;
        }
    }

    color_out.xyz = closest_color;
}


/// modulefn: reflector
/// moduletag: space

uniform float u_reflect_theta; /// { "start": 0, "end": "2 * math.pi", "default": "math.pi / 2" }
uniform float u_reflect_y; /// { "start": -1, "end": 1, "default": 0 }
uniform float u_reflect_x; /// { "start": -1, "end": 1, "default": 0 }

void reflector() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;
    c.y -= u_reflect_y;
    c.x -= u_reflect_x;

    float r = length(c);
    float theta = atan(c.y, c.x);
    float pos_theta = theta;
    if (pos_theta < 0.)
        pos_theta = 2. * PI + pos_theta;

    vec3 color = vec3(0.);

    if (pos_theta > (u_reflect_theta - PI) &&
            (pos_theta < u_reflect_theta ||
             pos_theta > (u_reflect_theta + PI))) {
        color = texelFetch(u_texture, ivec2(coords), 0).xyz;
    } else {
        theta = -(theta - u_reflect_theta) + u_reflect_theta;

        c = r * vec2(cos(theta), sin(theta));

        c.y += u_reflect_y;
        c.x += u_reflect_x;
        c = (c + 1.) / 2.;
        c *= u_dimensions;
        color = texelFetch(u_texture, ivec2(c), 0).xyz;
    }

    color_out = vec4(u_feedback * color, 1.);
}


/// modulefn: ripple
/// moduletag: space

uniform float u_ripple_freq; /// { "start": 0, "end": 100, "default": 1 }
uniform float u_ripple_c; /// { "start": 0, "end": "2 * math.pi", "default": 0 }
uniform float u_ripple_strength; /// { "start": -1, "end": 10, "default": 2 }
uniform vec2 u_ripple_center;  /// { "start": [0, 0], "end": [1, 1], "default": [0.5, 0.5], "names": ["x", "y"] }

void ripple() {
    vec2 coords = t_coords.xy / u_dimensions;
    vec2 c = 2. * coords - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);

    float z = u_ripple_strength * abs(cos(r * u_ripple_freq + u_ripple_c)) + 1.;

    c = c - (u_ripple_center - 0.5);
    if (z > 0.)
        c /= z;
    c = c + (u_ripple_center - 0.5);

    c = (c + 1.) / 2.;
    c *= u_tex_dimensions;
    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}


/// modulefn: rotate
/// moduletag: space

uniform float u_rotation; /// { "start": 0, "end": "2 * math.pi", "default": 0 }

void rotate() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);
    theta += u_rotation;
    c = r * vec2(cos(theta), sin(theta));

    c  = (c + 1.) / 2.;
    c *= u_tex_dimensions;

    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}


/// modulefn: superformula
/// moduletag: generator

uniform vec3 u_sf_color; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [1, 0, 0], "names": ["r", "g", "b"] }
uniform float u_sf_m; /// { "start": 1, "end": 10, "default": 1 }
uniform vec3 u_sf_n; /// { "start": [0, 0, 0], "end": [20, 20, 20], "default": [20,20,20], "names": ["n1", "n2", "n3"] }
uniform float u_sf_thickness; /// { "start": 0, "end": 1, "default": 0.5 }
uniform bool u_sf_smooth_edges; /// { "default": true }
uniform bool u_sf_fill; /// { "default": false }
uniform bool u_sf_destructive; /// { "default": false }

void superformula() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;

    float a = 1.;
    float b = 1.;

    float zoom = u_sf_m / 2.;

    c *= zoom;

    float r = length(c);
    float theta = atan(c.y, c.x);

    float super_r = pow(
        pow(abs(cos(u_sf_m * theta / 4.)/a), u_sf_n.y) +
        pow(abs(sin(u_sf_m * theta / 4.)/b), u_sf_n.z),
        -1./u_sf_n.x);

    if (abs(r - super_r) < u_sf_thickness || (u_sf_fill && r < super_r)) {
        float factor = 1.;
        if (u_sf_smooth_edges && (!u_sf_fill || r >= super_r)) {
            factor = 1. - abs(r - super_r) / u_sf_thickness;
        }

        if (u_sf_destructive && factor > 0.)
            color_out.rgb = factor * u_sf_color;
        else
            color_out.rgb += factor * u_sf_color;
    }
}


/// modulefn: swirl
/// moduletag: space

uniform float u_factor; /// { "start": 0, "end": "2 * math.pi", "default": 0 }

void swirl() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    c = 2. * c - 1.;

    float r = length(c);
    float theta = atan(c.y, c.x);
    theta += r * u_factor;
    c = r * vec2(cos(theta), sin(theta));

    c  = (c + 1.) / 2.;
    c *= u_tex_dimensions;

    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}


/// modulefn: threshold
/// moduletag: color

uniform bool u_threshold_high_r; /// { "default": true }
uniform bool u_threshold_high_g; /// { "default": true }
uniform bool u_threshold_high_b; /// { "default": true }
uniform vec3 u_thresholds; /// { "start": [0, 0, 0], "end": [1, 1, 1], "default": [0, 0, 0], "names": ["r", "g", "b"] }

void threshold() {
    color_out.rgb = sign(sign(color_out.rgb - u_thresholds) + 1.);
    if (u_threshold_high_r)
        color_out.r = 1. - color_out.r;
    if (u_threshold_high_g)
        color_out.g = 1. - color_out.g;
    if (u_threshold_high_b)
        color_out.b = 1. - color_out.b;
}


/// modulefn: tile
/// moduletag: space

uniform int u_tile_x; /// { "start": 1, "end": 100, "default": 1 }
uniform int u_tile_y; /// { "start": 1, "end": 100, "default": 1 }

void tile() {
    vec2 coords = t_coords.xy;
    float tile_x_size = u_dimensions.x / float(u_tile_x);
    float tile_y_size = u_dimensions.y / float(u_tile_y);

    coords.x = mod(coords.x, tile_x_size) * float(u_tile_x);
    coords.y = mod(coords.y, tile_y_size) * float(u_tile_y);
    // vec2 c = coords / u_dimensions;

    vec3 color = texelFetch(u_texture, ivec2(coords), 0).xyz;
    color_out = vec4(u_feedback * color, 1.);
}


/// modulefn: voronoi
/// moduletag: color

uniform sampler2D u_voronoi_data; /// custom
uniform int u_voronoi_count; /// custom

void voronoi() {
    vec2 pt = t_coords / u_dimensions;
    vec2 cell_pt = vec2(0.);
    float dist = -1.;
    for (int i = 0; i < u_voronoi_count; i++) {
        vec4 candidate_ = texelFetch(u_voronoi_data, ivec2(i / 2, 0), 0);
        vec2 candidate = (i % 2 == 0) ? candidate_.rg : candidate_.ba;
        float curr_dist = length(candidate - pt);
        if (dist < 0. || curr_dist < dist) {
            dist = curr_dist;
            cell_pt = candidate;
        }
    }

    color_out.xyz = texelFetch(u_texture, ivec2(cell_pt * u_dimensions), 0).rgb;
}


/// modulefn: voronoiswirl
/// moduletag: space

uniform sampler2D u_voronoiswirl_data; /// custom
uniform int u_voronoiswirl_count; /// custom
uniform float u_voronoiswirl_factor; /// { "start": 0, "end": "2 * math.pi", "default": 0 }

void voronoiswirl() {
    vec2 pt = t_coords / u_dimensions;
    vec2 cell_pt = vec2(0.);
    float dist = -1.;
    for (int i = 0; i < u_voronoiswirl_count; i++) {
        vec4 candidate_ = texelFetch(u_voronoiswirl_data, ivec2(i / 2, 0), 0);
        vec2 candidate = (i % 2 == 0) ? candidate_.rg : candidate_.ba;
        float curr_dist = length(candidate - pt);
        if (dist < 0. || curr_dist < dist) {
            dist = curr_dist;
            cell_pt = candidate;
        }
    }

    pt = 2. * pt - 1.;
    vec2 c = pt - cell_pt;
    c = (c + 1.) / 2.;
    // c = 2. * c - 1.;

    // float r = length(c);
    // float theta = atan(c.y, c.x);
    // theta += r * u_voronoiswirl_factor;
    // c = r * vec2(cos(theta), sin(theta));

    // c  = (c + 1.) / 2.;

    // c += cell_pt;

    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c *u_dimensions), 0).xyz, 1.);

}


/// modulefn: waveify
/// moduletag: color

uniform vec3 u_waveify_a; /// {"start": [0, 0, 0], "end": [10, 10, 10], "default": [1, 1, 1], "names": ["r", "g", "b"]}
uniform vec3 u_waveify_f; /// {"start": [0, 0, 0], "end": [1000, 1000, 1000], "default": [100, 100, 100], "names": ["r", "g", "b"]}
uniform vec3 u_waveify_c; /// {"start": [0, 0, 0], "end": ["2 * math.pi", "2 * math.pi", "2 * math.pi"], "default": [0, 0, 0], "names": ["r", "g", "b"]}

void waveify() {
    color_out.xyz *=
        u_waveify_a * sin(color_out.xyz * u_waveify_f + u_waveify_c);
}


/// modulefn: wavy
/// moduletag: space

uniform float u_wavy_freq_x; /// { "start": 0, "end": 100, "default": 1 }
uniform float u_wavy_c_x; /// { "start": 0, "end": "2 * math.pi", "default": 0 }
uniform float u_wavy_strength_x; /// { "start": 0, "end": 100, "default": 1 }

uniform float u_wavy_freq_y; /// { "start": 0, "end": 100, "default": 1 }
uniform float u_wavy_c_y; /// { "start": 0, "end": "2 * math.pi", "default": 0 }
uniform float u_wavy_strength_y; /// { "start": 0, "end": 100, "default": 1 }


void wavy() {
    vec2 coords = t_coords.xy / u_dimensions;
    vec2 c = 2. * coords - 1.;

    float x_mod =
        u_wavy_strength_x * sin(u_wavy_freq_x * c.y + u_wavy_c_x);
    float y_mod =
        u_wavy_strength_y * sin(u_wavy_freq_y * c.x + u_wavy_c_y);

    c = (c + 1.) / 2.;
    c *= u_tex_dimensions;

    c.x = mod(c.x + x_mod, u_tex_dimensions.x);
    c.y = mod(c.y + y_mod, u_tex_dimensions.y);

    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}


/// modulefn: webcam
/// moduletag: generator

uniform sampler2D u_webcam_texture; /// custom
uniform vec2 u_webcam_dimensions; /// custom
uniform bool u_webcam_invert_x; ///  { "default": true }
uniform bool u_webcam_invert_y; ///  { "default": true }

void webcam() {
    vec2 coords = t_coords.xy;
    vec2 c = coords / u_dimensions;
    if (u_webcam_invert_y)
        c.y = 1. - c.y;
    if (u_webcam_invert_x)
        c.x = 1. - c.x;
    c *= u_webcam_dimensions;

    color_out.xyz += texelFetch(u_webcam_texture, ivec2(c), 0).xyz;
}


/// modulefn: zoom
/// moduletag: space

uniform float u_zoom; /// { "start": 0, "end": 10, "default": 1 }
uniform vec2 u_zoom_center;  /// { "start": [0, 0], "end": [1, 1], "default": [0.5, 0.5], "names": ["x", "y"] }

void zoom() {
    vec2 coords = t_coords.xy / u_dimensions;

    coords = coords - u_zoom_center;
    if (u_zoom > 0.)
        coords /= u_zoom;
    coords += u_zoom_center;

    vec2 c = coords * u_tex_dimensions;
    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);
}



void main() {
    vec2 coords = gl_FragCoord.xy;
    vec2 c = coords * u_tex_dimensions / u_dimensions;
    color_out = vec4(u_feedback * texelFetch(u_texture, ivec2(c), 0).xyz, 1.);

    t_coords = gl_FragCoord.xy / u_dimensions - vec2(0.5) + u_transform_center;
    t_coords -= vec2(0.5);

    t_coords /= u_transform_scale;
    mat2 rot_mat = mat2(
            cos(u_transform_rotation), sin(u_transform_rotation),
            -sin(u_transform_rotation), cos(u_transform_rotation));
    t_coords = rot_mat * t_coords;

    t_coords += vec2(0.5);
    t_coords *= u_dimensions;

    if (u_constrain_to_transform) {
        if (t_coords.x < 0. || t_coords.x > u_dimensions.x ||
                t_coords.y < 0. || t_coords.y > u_dimensions.y) {
            return;
        }
    }

    switch(u_function) {
    case FN_RENDER:
        break;
case 1:
    bitfield();
    break;
case 2:
    blur();
    break;
case 3:
    checkerfill();
    break;
case 4:
    chromakey();
    break;
case 5:
    composite();
    break;
case 6:
    condzoom();
    break;
case 7:
    copy();
    break;
case 8:
    enhance();
    break;
case 9:
    fourierdraw();
    break;
case 10:
    gamma_correct();
    break;
case 11:
    greyscale();
    break;
case 12:
    halftone();
    break;
case 13:
    hexswirl();
    break;
case 14:
    hue_shift();
    break;
case 15:
    invert_color();
    break;
case 16:
    invert_phase();
    break;
case 17:
    multiply();
    break;
case 18:
    noise();
    break;
case 19:
    offset();
    break;
case 20:
    oscillator();
    break;
case 21:
    picture();
    break;
case 22:
    pixelate();
    break;
case 23:
    polygon();
    break;
case 24:
    radial();
    break;
case 25:
    recolor();
    break;
case 26:
    reduce_colors();
    break;
case 27:
    reflector();
    break;
case 28:
    ripple();
    break;
case 29:
    rotate();
    break;
case 30:
    superformula();
    break;
case 31:
    swirl();
    break;
case 32:
    threshold();
    break;
case 33:
    tile();
    break;
case 34:
    voronoi();
    break;
case 35:
    voronoiswirl();
    break;
case 36:
    waveify();
    break;
case 37:
    wavy();
    break;
case 38:
    webcam();
    break;
case 39:
    zoom();
    break;

    default:
        // shouldn't happen
        color_out = vec4(1., 0., 1., 1.);
        break;
    }

   color_out = clamp(color_out, -1., 1.);
}
`;
