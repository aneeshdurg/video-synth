        class HueShift extends Function {
            id = 1
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

            get_type() {
                return HueShift;
            }

            get_args() {
                return {
                    hue_shift: new FloatBar([0.0,360.0], 180.0),saturate_shift: new FloatBar([0.0,1.0], 0.0)
                }
            }
        }
        customElements.define('synth-hueshift', HueShiftElement);
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

        class NoiseElement extends SynthElementBase {
            get_title() {
                return "Noise";
            }

            get_type() {
                return Noise;
            }

            get_args() {
                return {
                    noise_r: new FloatBar([0.0,10000.0], 0.0),noise_g: new FloatBar([0.0,10000.0], 0.0),noise_b: new FloatBar([0.0,10000.0], 0.0)
                }
            }
        }
        customElements.define('synth-noise', NoiseElement);
        class Offset extends Function {
            id = 3
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

            get_type() {
                return Offset;
            }

            get_args() {
                return {
                    offsets_x: new VecEntry(3, ["r","g","b"], [[-1.0, 1.0],[-1.0, 1.0],[-1.0, 1.0],], [0.0,0.0,0.0]),offsets_y: new VecEntry(3, ["r","g","b"], [[-1.0, 1.0],[-1.0, 1.0],[-1.0, 1.0],], [0.0,0.0,0.0])
                }
            }
        }
        customElements.define('synth-offset', OffsetElement);
        class Oscillator extends Function {
            id = 4
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

            get_type() {
                return Oscillator;
            }

            get_args() {
                return {
                    osc_f: new VecEntry(2, ["x","y"], [[0.0, 1.0],[0.0, 1.0],], [0.25,0.0]),osc_c: new FloatBar([0.0,6.283185307179586], 0.0),osc_color: new VecEntry(3, ["r","g","b"], [[0.0, 1.0],[0.0, 1.0],[0.0, 1.0],], [1.0,0.0,0.0])
                }
            }
        }
        customElements.define('synth-oscillator', OscillatorElement);
        class Picture extends Function {
            id = 5
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

            get_type() {
                return Picture;
            }

            get_args() {
                return {
                    picture_texture: new Picture_picture_texture(this.synth),picture_dimensions: new Picture_picture_dimensions(this.synth)
                }
            }
        }
        customElements.define('synth-picture', PictureElement);
        class Reflector extends Function {
            id = 6
            params = {}

            constructor(reflect_theta, reflect_y, feedback) {
                super(feedback || 0);
                this.params.reflect_theta = reflect_theta;
this.params.reflect_y = reflect_y;

            }
        }

        class ReflectorElement extends SynthElementBase {
            get_title() {
                return "Reflector";
            }

            get_type() {
                return Reflector;
            }

            get_args() {
                return {
                    reflect_theta: new FloatBar([0.0,3.141592653589793], 1.5707963267948966),reflect_y: new FloatBar([0.0,1.0], 0.0)
                }
            }
        }
        customElements.define('synth-reflector', ReflectorElement);
class Rotate extends Function {
    id = 7
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

    get_type() {
        return Rotate;
    }

    get_args() {
        return {
            rotation: new FloatBar([0.0,6.283185307179586], 0.0)
        }
    }
}
customElements.define('synth-rotate', RotateElement);
class Swirl extends Function {
    id = 8
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

    get_type() {
        return Swirl;
    }

    get_args() {
        return {
            factor: new FloatBar([0.0,6.283185307179586], 0.0)
        }
    }
}
customElements.define('synth-swirl', SwirlElement);
        class Threshold extends Function {
            id = 9
            params = {}

            constructor(theshold_high_r, theshold_high_g, theshold_high_b, thresholds, feedback) {
                super(feedback || 0);
                this.params.theshold_high_r = theshold_high_r;
this.params.theshold_high_g = theshold_high_g;
this.params.theshold_high_b = theshold_high_b;
this.params.thresholds = thresholds;

            }
        }

        class ThresholdElement extends SynthElementBase {
            get_title() {
                return "Threshold";
            }

            get_type() {
                return Threshold;
            }

            get_args() {
                return {
                    theshold_high_r: new BoolEntry(true),theshold_high_g: new BoolEntry(true),theshold_high_b: new BoolEntry(true),thresholds: new VecEntry(3, ["r","g","b"], [[0.0, 1.0],[0.0, 1.0],[0.0, 1.0],], [0.0,0.0,0.0])
                }
            }
        }
        customElements.define('synth-threshold', ThresholdElement);
        class Zoom extends Function {
            id = 10
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

            get_type() {
                return Zoom;
            }

            get_args() {
                return {
                    zoom: new FloatBar([0.0,10.0], 1.0),zoom_center: new VecEntry(2, ["x","y"], [[0.0, 1.0],[0.0, 1.0],], [0.5,0.5])
                }
            }
        }
        customElements.define('synth-zoom', ZoomElement);
const MODULE_IDS = {"hue shift": "HueShiftElement","noise": "NoiseElement","offset": "OffsetElement","oscillator": "OscillatorElement","picture": "PictureElement","reflector": "ReflectorElement","rotate": "RotateElement","swirl": "SwirlElement","threshold": "ThresholdElement","zoom": "ZoomElement",}
