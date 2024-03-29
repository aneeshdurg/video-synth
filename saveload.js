const saveload_script = document.currentScript;
function loaddata(savedatas, ui_container, synth, into_current) {
    // TODO validation
    const chan_count = synth.channels.length;

    let start_chan = chan_count - 1;

    if (into_current) {
        start_chan = synth.active_channel;
    } else {
        // find last channel that's empty
        while (start_chan >= 0 && synth.channels[start_chan].stages.length == 0)
            start_chan--;
        start_chan += 1;
    }

    savedatas.forEach((savedata, chan_id) => {
        let curr_chan = start_chan + chan_id;
        if (curr_chan >= synth.channels.length) {
            synth.add_channel();
            ui_container.dispatchEvent(new Event("add_channel"));
        }

        synth.active_channel = curr_chan;
        for (let elem of savedata) {
            if (elem.module) {
                // if (!meta_modules[elem.module.name])
                //     throw new Error("Unexpected module"); // TODO ui for this error
                const count = elem.module.selection.length;
                console.group(`ADD ${elem.module.name}`);
                // TODO take in MetaModuleManager obj or smth
                append_meta_module(elem.module.name, elem.args, count, ui_container, synth);
                console.groupEnd(`ADD ${elem.module.name}`);
            } else {
                const moduleElem = eval(elem.title + 'Element');
                const new_elem = new moduleElem(synth);
                let container = ui_container.querySelector(`#ui-${curr_chan}`);
                if (!container && __suffix) // standalone mode
                    container = ui_container;
                container.appendChild(new_elem);
                new_elem.load(elem);
                console.log('ADD', new_elem.get_title());
            }
        }
    });
}

function load_meta_modules(moduledata_descs) {
    for (let module_name of Object.keys(moduledata_descs)) {
        if (meta_modules[module_name])
            throw new Error("Conflicting module name"); // TODO ui for this error
    }

    for (let module_name of Object.keys(moduledata_descs))
        register_module(module_name, moduledata_descs[module_name]);
}

const MAGIC = "SYN".split('').map(x => x.charCodeAt(0));
MAGIC.push(255);
const header_len = MAGIC.length + 4;

function decode_stego(stegodata, LZString) {
    console.log(stegodata);
    // const stegodata = new Uint8Array(reader.result);
    for (let i = 0; i < MAGIC.length; i++) {
        if (stegodata[i] != MAGIC[i]) {
            console.log(stegodata);
            throw new Error("File is not synth data");
        }
    }

    let length = 0;
    for (let i = 2; i >= 0; i--) {
        length *= 256;
        const newdata = stegodata[MAGIC.length + i];
        console.log(length, '*', 256, '+', newdata);
        length += newdata;
    }

    console.log("len", length);
    const data = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        const idx = 4 * i;
        if (i == 0) {
            console.log(stegodata[header_len + idx + 0]);
            console.log(stegodata[header_len + idx + 0] & 0x0f);
            console.log(stegodata[header_len + idx + 1]);
            console.log(stegodata[header_len + idx + 1] & 0x0f);
        }
        const entry = (stegodata[header_len + idx + 0] & 0x0f) * 16 +
                        (stegodata[header_len + idx + 1] & 0x0f);
        data[i] = entry;
    }

    console.log(data);

    const result = LZString.decompressFromUint8Array(data);
    console.log(result);

    return result;
}

function _download(data_blob, filename) {
    const downloader = document.createElement('a');
    downloader.setAttribute('href', URL.createObjectURL(data_blob));
    downloader.setAttribute('download', filename);
    downloader.style.display = "none";
    document.body.appendChild(downloader);

    downloader.click();

    document.body.removeChild(downloader);
}

function setup_save_load(ui_container, synth, settingsui) {
    // magic + 4 byte length + 1 byte per RGBA values
    // this is because we can't use the A channel because of premultiplied
    // stuff, TODO fix that
    const max_stego_size = Math.min(
        0xffffff,
        (4 * synth.dimensions[0] * synth.dimensions[1] - header_len) / 4);

  const getSaveData = () => {
      const channels = [];
      for (let i = 0; i < ui_container.children.length; i++) {
          const ui = ui_container.children[i];
          const channel = [];
          for (let j = 0; j < ui.children.length; j++)
              channel.push(ui.children[j].save());
          channels.push(channel);
      }

      const saveobj = {
          channels: channels,
          modules: meta_modules,
          settings: settingsui.save()
      };

      const savestr = JSON.stringify(saveobj);
      return savestr;
    };

  document.getElementById("save").addEventListener('click', () => {
        const savedata = getSaveData();
        console.log("DATA", savedata);
        const compressed = LZString.compressToUint8Array(savedata)
        console.log(compressed.length);
        console.log(compressed);

        const stego_possible = compressed.length < max_stego_size;
        if (compressed.length <= 0xffffff) {
            const required_px = compressed.length + header_len / 4;
            console.log("req scale factor", required_px / (synth.dimensions[0] * synth.dimensions[1]));
        }
        console.log("sp", stego_possible);
        if (stego_possible) {
            const output_canvas = document.createElement("canvas");
            output_canvas.width = synth.dimensions[0];
            output_canvas.height = synth.dimensions[1];

            const output_ctx = output_canvas.getContext("2d");
            const img = output_ctx.createImageData(...synth.dimensions);
            synth.get_frame_data(img.data);

            for (let i = 0; i < (synth.dimensions[1] / 2); i++) {
                //swap rows i and (synth.dimensions[1] - 1 -i)
                // TODO why is this upside down in the first place?
                const curr_row = 4 * i * synth.dimensions[0];
                const other_row = 4 * (synth.dimensions[1] - 1 - i) * synth.dimensions[0];
                for (let j = 0; j < 4 * synth.dimensions[0]; j++) {
                    const curr_idx = curr_row + j
                    const other_idx = other_row + j
                    const temp = img.data[curr_idx];
                    img.data[curr_idx] = img.data[other_idx];
                    img.data[other_idx] = temp;
                }
            }

            console.log("encoding MAGIC");
            for (let i = 0; i < MAGIC.length; i++)
                img.data[i] = MAGIC[i];

            console.log("encoding len");
            let length = compressed.length;
            for (let i = 0; i < 3; i++) {
                img.data[MAGIC.length + i] = length % 256;
                length = Math.floor(length / 256);
            }


            console.log("encoding data");
            for (let i = 0; i < compressed.length; i++) {
                const idx = i * 4;
                img.data[header_len + idx + 0] &= 0xf0;
                img.data[header_len + idx + 0] += (0xf0 & compressed[i]) / 16;

                img.data[header_len + idx + 1] &= 0xf0;
                img.data[header_len + idx + 1] += 0x0f & compressed[i];
            }

            output_ctx.putImageData(img, 0, 0);
            output_canvas.toBlob((b) => {
              _download(b, `${synth.name}.savedata.png`);
            });
        } else {
            const blob = new Blob([savedata], {type: 'text/plan;charset=utf-8,'});
            _download(blob, `${synth.name}.savedata`);
        }
    });

    document.getElementById("savestandalone").addEventListener('click', async () => {
      const script_base = await getFile(saveload_script.src);
      let wrapper = "const load_synth = (canvas, cb) => {"
      wrapper += script_base;
      wrapper += "return loadStaticSynth(canvas, " + getSaveData() + ", cb); };"
      const blob = new Blob([wrapper], {type: 'text/plan;charset=utf-8,'});
      _download(blob, `${synth.name}.standalone.js`);
    });

    const do_load = (name, savedata) => {
        if (savedata.modules)
            load_meta_modules(savedata.modules);
        if (savedata.stages)
            loaddata([savedata.stages], ui_container, synth);
        if (savedata.channels)
            loaddata(savedata.channels, ui_container, synth);
        if (savedata.settings)
            settingsui.load(savedata.settings);
        if (synth.name === "") {
            synth.name = name;
            ui.dispatchEvent(new Event("namechange"));
        }
    };

    const loadUpload = document.getElementById("load");
    loadUpload.addEventListener("change", () => {
        let file = loadUpload.files[0];
        let reader = new FileReader();
        console.log(file, reader);
        const name = file.name.split(".")[0];
        if (file.name.endsWith(".png")) {
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                const img = new Image();
                img.src = reader.result;
                await new Promise(r => { img.onload = r; });

                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const ctxdata = ctx.getImageData(0, 0, ...synth.dimensions);
                const stegodata = ctxdata.data;
                const result = decode_stego(stegodata, LZString);

                do_load(name, JSON.parse(result));
            }
        } else {
            reader.readAsText(file)
            reader.onloadend = () => {
                do_load(name, JSON.parse(reader.result));
            };
        }
    });
}

try {
    exports.decode_stego = decode_stego;
} catch (e) { }
