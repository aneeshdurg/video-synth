const MODULE_IDS = {hue_shift: 1, noise: 2, oscillator: 3, reflect: 4, rotate: 5, zoom: 6, }
class HueShift extends Function {
    id = 1
    params = {}

    constructor(hue_shift, feedback) {
        super(feedback || 0);
        this.params.hue_shift = hue_shift;

    }
}
        class Noise extends Function {
            id = 2
            params = {}

            constructor(noise_r, noise_g, noise_b, feedback) {
                super(feedback || 0);
                this.params.noise_r = noise_r;
this.params.noise_g = noise_g;
this.params.noise_b = noise_b;

            }
        }
        class Oscillator extends Function {
            id = 3
            params = {}

            constructor(osc_f, osc_c, osc_color, feedback) {
                super(feedback || 0);
                this.params.osc_f = osc_f;
this.params.osc_c = osc_c;
this.params.osc_color = osc_color;

            }
        }
        class Reflect extends Function {
            id = 4
            params = {}

            constructor(reflect_theta, reflect_y, feedback) {
                super(feedback || 0);
                this.params.reflect_theta = reflect_theta;
this.params.reflect_y = reflect_y;

            }
        }
class Rotate extends Function {
    id = 5
    params = {}

    constructor(rotation, feedback) {
        super(feedback || 0);
        this.params.rotation = rotation;

    }
}
        class Zoom extends Function {
            id = 6
            params = {}

            constructor(zoom, zoom_center, feedback) {
                super(feedback || 0);
                this.params.zoom = zoom;
this.params.zoom_center = zoom_center;

            }
        }
