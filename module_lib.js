        class Blur extends Function {
            id = 1
            params = {}

            constructor(blur_stride_x, blur_stride_y, feedback) {
                super(feedback || 0);
                this.params.blur_stride_x = blur_stride_x;
this.params.blur_stride_y = blur_stride_y;

            }
        }

        class BlurElement extends SynthElementBase {
            get_title() {
                return "Blur";
            }

            get_fn() {
                return Blur;
            }

            get_args() {
                return {
                    blur_stride_x: new IntEntry([1,100], 1),blur_stride_y: new IntEntry([1,100], 1)
                }
            }
        }
        defineEl('synth-blur', BlurElement);
        class Checkerfill extends Function {
            id = 2
            params = {}

            constructor(checkerfill_strength, checkerfill_size, feedback) {
                super(feedback || 0);
                this.params.checkerfill_strength = checkerfill_strength;
this.params.checkerfill_size = checkerfill_size;

            }
        }

        class CheckerfillElement extends SynthElementBase {
            get_title() {
                return "Checkerfill";
            }

            get_fn() {
                return Checkerfill;
            }

            get_args() {
                return {
                    checkerfill_strength: new FloatBar([-1,10], 2),checkerfill_size: new IntEntry([1,100], 5)
                }
            }
        }
        defineEl('synth-checkerfill', CheckerfillElement);
        class Chromakey extends Function {
            id = 3
            params = {}

            constructor(chromakey_key, chromakey_strength, chromakey_map, feedback) {
                super(feedback || 0);
                this.params.chromakey_key = chromakey_key;
this.params.chromakey_strength = chromakey_strength;
this.params.chromakey_map = chromakey_map;

            }
        }

        class ChromakeyElement extends SynthElementBase {
            get_title() {
                return "Chromakey";
            }

            get_fn() {
                return Chromakey;
            }

            get_args() {
                return {
                    chromakey_key: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [0,1,0]),chromakey_strength: new FloatBar([0,2], 0.25),chromakey_map: new ChannelSelect(this.synth)
                }
            }
        }
        defineEl('synth-chromakey', ChromakeyElement);
        class Composite extends Function {
            id = 4
            params = {}

            constructor(composite_map_1, composite_map_2, feedback) {
                super(feedback || 0);
                this.params.composite_map_1 = composite_map_1;
this.params.composite_map_2 = composite_map_2;

            }
        }

        class CompositeElement extends SynthElementBase {
            get_title() {
                return "Composite";
            }

            get_fn() {
                return Composite;
            }

            get_args() {
                return {
                    composite_map_1: new ChannelSelect(this.synth),composite_map_2: new ChannelSelect(this.synth)
                }
            }
        }
        defineEl('synth-composite', CompositeElement);
        class Condzoom extends Function {
            id = 5
            params = {}

            constructor(condzoom_strength, condzoom_map, feedback) {
                super(feedback || 0);
                this.params.condzoom_strength = condzoom_strength;
this.params.condzoom_map = condzoom_map;

            }
        }

        class CondzoomElement extends SynthElementBase {
            get_title() {
                return "Condzoom";
            }

            get_fn() {
                return Condzoom;
            }

            get_args() {
                return {
                    condzoom_strength: new FloatBar([-1,10], 2),condzoom_map: new ChannelSelect(this.synth)
                }
            }
        }
        defineEl('synth-condzoom', CondzoomElement);
class Copy extends Function {
    id = 6
    params = {}

    constructor(copy_map, feedback) {
        super(feedback || 0);
        this.params.copy_map = copy_map;

    }
}

class CopyElement extends SynthElementBase {
    get_title() {
        return "Copy";
    }

    get_fn() {
        return Copy;
    }

    get_args() {
        return {
            copy_map: new ChannelSelect(this.synth)
        }
    }
}
defineEl('synth-copy', CopyElement);
class Enhance extends Function {
    id = 7
    params = {}

    constructor(enhance, feedback) {
        super(feedback || 0);
        this.params.enhance = enhance;

    }
}

class EnhanceElement extends SynthElementBase {
    get_title() {
        return "Enhance";
    }

    get_fn() {
        return Enhance;
    }

    get_args() {
        return {
            enhance: new VecEntry(3, ["r","g","b"], [[0, 10],[0, 10],[0, 10],], [1,1,1])
        }
    }
}
defineEl('synth-enhance', EnhanceElement);
class GammaCorrect extends Function {
    id = 8
    params = {}

    constructor(gamma_correction, feedback) {
        super(feedback || 0);
        this.params.gamma_correction = gamma_correction;

    }
}

class GammaCorrectElement extends SynthElementBase {
    get_title() {
        return "GammaCorrect";
    }

    get_fn() {
        return GammaCorrect;
    }

    get_args() {
        return {
            gamma_correction: new FloatBar([2,4], 2)
        }
    }
}
defineEl('synth-gammacorrect', GammaCorrectElement);
class Greyscale extends Function {
    id = 9
    params = {}

    constructor(greyscale_luminance, feedback) {
        super(feedback || 0);
        this.params.greyscale_luminance = greyscale_luminance;

    }
}

class GreyscaleElement extends SynthElementBase {
    get_title() {
        return "Greyscale";
    }

    get_fn() {
        return Greyscale;
    }

    get_args() {
        return {
            greyscale_luminance: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [0.2126,0.7152,0.0722])
        }
    }
}
defineEl('synth-greyscale', GreyscaleElement);
        class Halftone extends Function {
            id = 10
            params = {}

            constructor(halftone_factor, halftone_invert, halftone_strength, feedback) {
                super(feedback || 0);
                this.params.halftone_factor = halftone_factor;
this.params.halftone_invert = halftone_invert;
this.params.halftone_strength = halftone_strength;

            }
        }

        class HalftoneElement extends SynthElementBase {
            get_title() {
                return "Halftone";
            }

            get_fn() {
                return Halftone;
            }

            get_args() {
                return {
                    halftone_factor: new IntEntry([0,500], 10),halftone_invert: new BoolEntry(false),halftone_strength: new FloatBar([0,2], 1)
                }
            }
        }
        defineEl('synth-halftone', HalftoneElement);
        class HueShift extends Function {
            id = 11
            params = {}

            constructor(hue_shift, saturate_shift, feedback) {
                super(feedback || 0);
                this.params.hue_shift = hue_shift;
this.params.saturate_shift = saturate_shift;

            }
        }

        class HueShiftElement extends SynthElementBase {
            get_title() {
                return "HueShift";
            }

            get_fn() {
                return HueShift;
            }

            get_args() {
                return {
                    hue_shift: new FloatBar([0,360], 180),saturate_shift: new FloatBar([0,1], 0)
                }
            }
        }
        defineEl('synth-hueshift', HueShiftElement);
class InvertColor extends Function {
    id = 12
    params = {}

    constructor(feedback) {
        super(feedback || 0);

    }
}

class InvertColorElement extends SynthElementBase {
    get_title() {
        return "InvertColor";
    }

    get_fn() {
        return InvertColor;
    }

    get_args() {
        return {

        }
    }
}
defineEl('synth-invertcolor', InvertColorElement);
class Multiply extends Function {
    id = 13
    params = {}

    constructor(multiply_map, feedback) {
        super(feedback || 0);
        this.params.multiply_map = multiply_map;

    }
}

class MultiplyElement extends SynthElementBase {
    get_title() {
        return "Multiply";
    }

    get_fn() {
        return Multiply;
    }

    get_args() {
        return {
            multiply_map: new ChannelSelect(this.synth)
        }
    }
}
defineEl('synth-multiply', MultiplyElement);
        class Noise extends Function {
            id = 14
            params = {}

            constructor(noise_r, noise_g, noise_b, feedback) {
                super(feedback || 0);
                this.params.noise_r = noise_r;
this.params.noise_g = noise_g;
this.params.noise_b = noise_b;

            }
        }

        class NoiseElement extends SynthElementBase {
            get_title() {
                return "Noise";
            }

            get_fn() {
                return Noise;
            }

            get_args() {
                return {
                    noise_r: new FloatBar([0,10000], 0),noise_g: new FloatBar([0,10000], 0),noise_b: new FloatBar([0,10000], 0)
                }
            }
        }
        defineEl('synth-noise', NoiseElement);
        class Offset extends Function {
            id = 15
            params = {}

            constructor(offsets_x, offsets_y, feedback) {
                super(feedback || 0);
                this.params.offsets_x = offsets_x;
this.params.offsets_y = offsets_y;

            }
        }

        class OffsetElement extends SynthElementBase {
            get_title() {
                return "Offset";
            }

            get_fn() {
                return Offset;
            }

            get_args() {
                return {
                    offsets_x: new VecEntry(3, ["r","g","b"], [[-1, 1],[-1, 1],[-1, 1],], [0,0,0]),offsets_y: new VecEntry(3, ["r","g","b"], [[-1, 1],[-1, 1],[-1, 1],], [0,0,0])
                }
            }
        }
        defineEl('synth-offset', OffsetElement);
        class Oscillator extends Function {
            id = 16
            params = {}

            constructor(osc_f, osc_c, osc_color, feedback) {
                super(feedback || 0);
                this.params.osc_f = osc_f;
this.params.osc_c = osc_c;
this.params.osc_color = osc_color;

            }
        }

        class OscillatorElement extends SynthElementBase {
            get_title() {
                return "Oscillator";
            }

            get_fn() {
                return Oscillator;
            }

            get_args() {
                return {
                    osc_f: new VecEntry(2, ["x","y"], [[0, 1],[0, 1],], [0.25,0]),osc_c: new FloatBar([0,6.283185307179586], 0),osc_color: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0])
                }
            }
        }
        defineEl('synth-oscillator', OscillatorElement);
        class Picture extends Function {
            id = 17
            params = {}

            constructor(picture_texture, picture_dimensions, feedback) {
                super(feedback || 0);
                this.params.picture_texture = picture_texture;
this.params.picture_dimensions = picture_dimensions;

            }
        }

        class PictureElement extends SynthElementBase {
            get_title() {
                return "Picture";
            }

            get_fn() {
                return Picture;
            }

            get_args() {
                return {
                    picture_texture: new Picture_picture_texture(this.synth),picture_dimensions: new Picture_picture_dimensions(this.synth)
                }
            }
        }
        defineEl('synth-picture', PictureElement);
class Pixelate extends Function {
    id = 18
    params = {}

    constructor(pixelate_factor, feedback) {
        super(feedback || 0);
        this.params.pixelate_factor = pixelate_factor;

    }
}

class PixelateElement extends SynthElementBase {
    get_title() {
        return "Pixelate";
    }

    get_fn() {
        return Pixelate;
    }

    get_args() {
        return {
            pixelate_factor: new IntEntry([0,500], 10)
        }
    }
}
defineEl('synth-pixelate', PixelateElement);
        class Polygon extends Function {
            id = 19
            params = {}

            constructor(polygon_color, polygon_n, polygon_r, polygon_thickness, polygon_smooth_edges, polygon_fill, polygon_destructive, feedback) {
                super(feedback || 0);
                this.params.polygon_color = polygon_color;
this.params.polygon_n = polygon_n;
this.params.polygon_r = polygon_r;
this.params.polygon_thickness = polygon_thickness;
this.params.polygon_smooth_edges = polygon_smooth_edges;
this.params.polygon_fill = polygon_fill;
this.params.polygon_destructive = polygon_destructive;

            }
        }

        class PolygonElement extends SynthElementBase {
            get_title() {
                return "Polygon";
            }

            get_fn() {
                return Polygon;
            }

            get_args() {
                return {
                    polygon_color: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0]),polygon_n: new IntEntry([3,100], 4),polygon_r: new FloatBar([0,1], 0.49999),polygon_thickness: new FloatBar([0,1], 0.025),polygon_smooth_edges: new BoolEntry(true),polygon_fill: new BoolEntry(false),polygon_destructive: new BoolEntry(false)
                }
            }
        }
        defineEl('synth-polygon', PolygonElement);
        class Recolor extends Function {
            id = 20
            params = {}

            constructor(recolor_new_r, recolor_new_g, recolor_new_b, feedback) {
                super(feedback || 0);
                this.params.recolor_new_r = recolor_new_r;
this.params.recolor_new_g = recolor_new_g;
this.params.recolor_new_b = recolor_new_b;

            }
        }

        class RecolorElement extends SynthElementBase {
            get_title() {
                return "Recolor";
            }

            get_fn() {
                return Recolor;
            }

            get_args() {
                return {
                    recolor_new_r: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0]),recolor_new_g: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [0,1,0]),recolor_new_b: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [0,0,1])
                }
            }
        }
        defineEl('synth-recolor', RecolorElement);
        class ReduceColors extends Function {
            id = 21
            params = {}

            constructor(reduce_colors_data, reduce_colors_count, feedback) {
                super(feedback || 0);
                this.params.reduce_colors_data = reduce_colors_data;
this.params.reduce_colors_count = reduce_colors_count;

            }
        }

        class ReduceColorsElement extends SynthElementBase {
            get_title() {
                return "ReduceColors";
            }

            get_fn() {
                return ReduceColors;
            }

            get_args() {
                return {
                    reduce_colors_data: new ReduceColors_reduce_colors_data(this.synth),reduce_colors_count: new ReduceColors_reduce_colors_count(this.synth)
                }
            }
        }
        defineEl('synth-reducecolors', ReduceColorsElement);
        class Reflector extends Function {
            id = 22
            params = {}

            constructor(reflect_theta, reflect_y, reflect_x, feedback) {
                super(feedback || 0);
                this.params.reflect_theta = reflect_theta;
this.params.reflect_y = reflect_y;
this.params.reflect_x = reflect_x;

            }
        }

        class ReflectorElement extends SynthElementBase {
            get_title() {
                return "Reflector";
            }

            get_fn() {
                return Reflector;
            }

            get_args() {
                return {
                    reflect_theta: new FloatBar([0,6.283185307179586], 1.5707963267948966),reflect_y: new FloatBar([-1,1], 0),reflect_x: new FloatBar([-1,1], 0)
                }
            }
        }
        defineEl('synth-reflector', ReflectorElement);
        class Ripple extends Function {
            id = 23
            params = {}

            constructor(ripple_freq, ripple_c, ripple_strength, ripple_center, feedback) {
                super(feedback || 0);
                this.params.ripple_freq = ripple_freq;
this.params.ripple_c = ripple_c;
this.params.ripple_strength = ripple_strength;
this.params.ripple_center = ripple_center;

            }
        }

        class RippleElement extends SynthElementBase {
            get_title() {
                return "Ripple";
            }

            get_fn() {
                return Ripple;
            }

            get_args() {
                return {
                    ripple_freq: new FloatBar([0,100], 1),ripple_c: new FloatBar([0,6.283185307179586], 0),ripple_strength: new FloatBar([-1,10], 2),ripple_center: new VecEntry(2, ["x","y"], [[0, 1],[0, 1],], [0.5,0.5])
                }
            }
        }
        defineEl('synth-ripple', RippleElement);
class Rotate extends Function {
    id = 24
    params = {}

    constructor(rotation, feedback) {
        super(feedback || 0);
        this.params.rotation = rotation;

    }
}

class RotateElement extends SynthElementBase {
    get_title() {
        return "Rotate";
    }

    get_fn() {
        return Rotate;
    }

    get_args() {
        return {
            rotation: new FloatBar([0,6.283185307179586], 0)
        }
    }
}
defineEl('synth-rotate', RotateElement);
        class Superformula extends Function {
            id = 25
            params = {}

            constructor(sf_color, sf_m, sf_n, sf_thickness, sf_smooth_edges, sf_fill, sf_destructive, feedback) {
                super(feedback || 0);
                this.params.sf_color = sf_color;
this.params.sf_m = sf_m;
this.params.sf_n = sf_n;
this.params.sf_thickness = sf_thickness;
this.params.sf_smooth_edges = sf_smooth_edges;
this.params.sf_fill = sf_fill;
this.params.sf_destructive = sf_destructive;

            }
        }

        class SuperformulaElement extends SynthElementBase {
            get_title() {
                return "Superformula";
            }

            get_fn() {
                return Superformula;
            }

            get_args() {
                return {
                    sf_color: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0]),sf_m: new FloatBar([1,10], 1),sf_n: new VecEntry(3, ["n1","n2","n3"], [[0, 20],[0, 20],[0, 20],], [20,20,20]),sf_thickness: new FloatBar([0,1], 0.5),sf_smooth_edges: new BoolEntry(true),sf_fill: new BoolEntry(false),sf_destructive: new BoolEntry(false)
                }
            }
        }
        defineEl('synth-superformula', SuperformulaElement);
class Swirl extends Function {
    id = 26
    params = {}

    constructor(factor, feedback) {
        super(feedback || 0);
        this.params.factor = factor;

    }
}

class SwirlElement extends SynthElementBase {
    get_title() {
        return "Swirl";
    }

    get_fn() {
        return Swirl;
    }

    get_args() {
        return {
            factor: new FloatBar([0,6.283185307179586], 0)
        }
    }
}
defineEl('synth-swirl', SwirlElement);
        class Threshold extends Function {
            id = 27
            params = {}

            constructor(threshold_high_r, threshold_high_g, threshold_high_b, thresholds, feedback) {
                super(feedback || 0);
                this.params.threshold_high_r = threshold_high_r;
this.params.threshold_high_g = threshold_high_g;
this.params.threshold_high_b = threshold_high_b;
this.params.thresholds = thresholds;

            }
        }

        class ThresholdElement extends SynthElementBase {
            get_title() {
                return "Threshold";
            }

            get_fn() {
                return Threshold;
            }

            get_args() {
                return {
                    threshold_high_r: new BoolEntry(true),threshold_high_g: new BoolEntry(true),threshold_high_b: new BoolEntry(true),thresholds: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [0,0,0])
                }
            }
        }
        defineEl('synth-threshold', ThresholdElement);
        class Tile extends Function {
            id = 28
            params = {}

            constructor(tile_x, tile_y, feedback) {
                super(feedback || 0);
                this.params.tile_x = tile_x;
this.params.tile_y = tile_y;

            }
        }

        class TileElement extends SynthElementBase {
            get_title() {
                return "Tile";
            }

            get_fn() {
                return Tile;
            }

            get_args() {
                return {
                    tile_x: new IntEntry([1,100], 1),tile_y: new IntEntry([1,100], 1)
                }
            }
        }
        defineEl('synth-tile', TileElement);
        class Wavy extends Function {
            id = 29
            params = {}

            constructor(wavy_freq_x, wavy_c_x, wavy_strength_x, wavy_freq_y, wavy_c_y, wavy_strength_y, feedback) {
                super(feedback || 0);
                this.params.wavy_freq_x = wavy_freq_x;
this.params.wavy_c_x = wavy_c_x;
this.params.wavy_strength_x = wavy_strength_x;
this.params.wavy_freq_y = wavy_freq_y;
this.params.wavy_c_y = wavy_c_y;
this.params.wavy_strength_y = wavy_strength_y;

            }
        }

        class WavyElement extends SynthElementBase {
            get_title() {
                return "Wavy";
            }

            get_fn() {
                return Wavy;
            }

            get_args() {
                return {
                    wavy_freq_x: new FloatBar([0,100], 1),wavy_c_x: new FloatBar([0,6.283185307179586], 0),wavy_strength_x: new FloatBar([0,100], 1),wavy_freq_y: new FloatBar([0,100], 1),wavy_c_y: new FloatBar([0,6.283185307179586], 0),wavy_strength_y: new FloatBar([0,100], 1)
                }
            }
        }
        defineEl('synth-wavy', WavyElement);
        class Webcam extends Function {
            id = 30
            params = {}

            constructor(webcam_texture, webcam_dimensions, webcam_invert_x, webcam_invert_y, feedback) {
                super(feedback || 0);
                this.params.webcam_texture = webcam_texture;
this.params.webcam_dimensions = webcam_dimensions;
this.params.webcam_invert_x = webcam_invert_x;
this.params.webcam_invert_y = webcam_invert_y;

            }
        }

        class WebcamElement extends SynthElementBase {
            get_title() {
                return "Webcam";
            }

            get_fn() {
                return Webcam;
            }

            get_args() {
                return {
                    webcam_texture: new Webcam_webcam_texture(this.synth),webcam_dimensions: new Webcam_webcam_dimensions(this.synth),webcam_invert_x: new BoolEntry(true),webcam_invert_y: new BoolEntry(true)
                }
            }
        }
        defineEl('synth-webcam', WebcamElement);
        class Zoom extends Function {
            id = 31
            params = {}

            constructor(zoom, zoom_center, feedback) {
                super(feedback || 0);
                this.params.zoom = zoom;
this.params.zoom_center = zoom_center;

            }
        }

        class ZoomElement extends SynthElementBase {
            get_title() {
                return "Zoom";
            }

            get_fn() {
                return Zoom;
            }

            get_args() {
                return {
                    zoom: new FloatBar([0,10], 1),zoom_center: new VecEntry(2, ["x","y"], [[0, 1],[0, 1],], [0.5,0.5])
                }
            }
        }
        defineEl('synth-zoom', ZoomElement);
const MODULE_IDS = {"blur": {class: "BlurElement", tag: "space"},"checkerfill": {class: "CheckerfillElement", tag: "space"},"chromakey": {class: "ChromakeyElement", tag: "channels"},"composite": {class: "CompositeElement", tag: "channels"},"condzoom": {class: "CondzoomElement", tag: "channels"},"copy": {class: "CopyElement", tag: "channels"},"enhance": {class: "EnhanceElement", tag: "color"},"gamma correct": {class: "GammaCorrectElement", tag: "color"},"greyscale": {class: "GreyscaleElement", tag: "color"},"halftone": {class: "HalftoneElement", tag: "space"},"hue shift": {class: "HueShiftElement", tag: "color"},"invert color": {class: "InvertColorElement", tag: "color"},"multiply": {class: "MultiplyElement", tag: "channels"},"noise": {class: "NoiseElement", tag: "generator"},"offset": {class: "OffsetElement", tag: "color"},"oscillator": {class: "OscillatorElement", tag: "generator"},"picture": {class: "PictureElement", tag: "generator"},"pixelate": {class: "PixelateElement", tag: "space"},"polygon": {class: "PolygonElement", tag: "generator"},"recolor": {class: "RecolorElement", tag: "color"},"reduce colors": {class: "ReduceColorsElement", tag: "color"},"reflector": {class: "ReflectorElement", tag: "space"},"ripple": {class: "RippleElement", tag: "space"},"rotate": {class: "RotateElement", tag: "space"},"superformula": {class: "SuperformulaElement", tag: "generator"},"swirl": {class: "SwirlElement", tag: "space"},"threshold": {class: "ThresholdElement", tag: "color"},"tile": {class: "TileElement", tag: "space"},"wavy": {class: "WavyElement", tag: "space"},"webcam": {class: "WebcamElement", tag: "generator"},"zoom": {class: "ZoomElement", tag: "space"},}
