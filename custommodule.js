CirclePackingElement.prototype.custom_step = function(time, synth) {
  let init = false;
  if (!this.random_buffer ||
      this.fn_params.dimensions[0] != synth.dimensions[0] || this.fn_params.dimensions[1] != synth.dimensions[1]) {
    this.random_buffer = new Float32Array(4 * synth.dimensions[0] * synth.dimensions[1]);
    this.fn_params.random_buffer = new FrameBufferManager(synth.gl, synth.dimensions);

    this.fn_params.dimensions = synth.dimensions;
    init = true;
  }
  if (init || this.fn_params.params.cp_randomize) {
    for (let i = 0; i < this.random_buffer.length; i++) {
      this.random_buffer[i] = Math.random();
    }
    updateTexture(synth.gl, synth.dimensions, this.fn_params.random_buffer.src(), this.random_buffer);
  }
}

CirclePacking.prototype.custom_render = function(gl, programInfo, params, fbs) {
  twgl.setUniforms(programInfo, {
    u_cp_data_texture: this.random_buffer.src(),
    u_cp_opcode: 1,
    u_no_clamp: true,
  });
  this.random_buffer.bind_dst();
  render(gl);

  twgl.setUniforms(programInfo, {
    u_cp_data_texture: this.random_buffer.dst(),
    u_cp_opcode: 2,
    u_no_clamp: false,
  });
  fbs.bind_dst();
  render(gl);

  return true;
}
