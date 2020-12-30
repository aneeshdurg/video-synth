class HueShift extends Function {
    id = 1
    params = {}

    constructor(hue_shift, feedback) {
        super(feedback || 0);
        this.params.hue_shift = hue_shift;

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
            hue_shift: new FloatBar([0.0,360.0], 180.0)
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
        class Reflector extends Function {
            id = 4
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
    id = 5
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
        class Zoom extends Function {
            id = 6
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
const MODULE_IDS = {module: { class: HueShift },module: { class: Noise },module: { class: Oscillator },module: { class: Reflector },module: { class: Rotate },module: { class: Zoom },}
