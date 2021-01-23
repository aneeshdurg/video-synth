// ---------- twgl-full.min.js ----------
/*!
 * @license twgl.js 4.18.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.twgl=r():e.twgl=r()}("undefined"!=typeof self?self:this,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=8)}([function(e,r,t){"use strict";r.__esModule=!0,r.copyExistingProperties=function(e,r){Object.keys(r).forEach((function(t){r.hasOwnProperty(t)&&e.hasOwnProperty(t)&&(r[t]=e[t])}))},r.copyNamedProperties=function(e,r,t){e.forEach((function(e){var n=r[e];void 0!==n&&(t[e]=n)}))},r.error=function(){var e;(e=console).error.apply(e,arguments)},r.warn=function(){var e;(e=console).warn.apply(e,arguments)},r.isBuffer=function(e,r){return"undefined"!=typeof WebGLBuffer&&r instanceof WebGLBuffer},r.isRenderbuffer=function(e,r){return"undefined"!=typeof WebGLRenderbuffer&&r instanceof WebGLRenderbuffer},r.isShader=function(e,r){return"undefined"!=typeof WebGLShader&&r instanceof WebGLShader},r.isTexture=function(e,r){return"undefined"!=typeof WebGLTexture&&r instanceof WebGLTexture},r.isSampler=function(e,r){return"undefined"!=typeof WebGLSampler&&r instanceof WebGLSampler}},function(e,r,t){"use strict";r.__esModule=!0,r.getGLTypeForTypedArray=function(e){if(e instanceof Int8Array)return n;if(e instanceof Uint8Array)return o;if(e instanceof Uint8ClampedArray)return o;if(e instanceof Int16Array)return u;if(e instanceof Uint16Array)return i;if(e instanceof Int32Array)return a;if(e instanceof Uint32Array)return f;if(e instanceof Float32Array)return c;throw new Error("unsupported typed array type")},r.getGLTypeForTypedArrayType=function(e){if(e===Int8Array)return n;if(e===Uint8Array)return o;if(e===Uint8ClampedArray)return o;if(e===Int16Array)return u;if(e===Uint16Array)return i;if(e===Int32Array)return a;if(e===Uint32Array)return f;if(e===Float32Array)return c;throw new Error("unsupported typed array type")},r.getTypedArrayTypeForGLType=function(e){var r=l[e];if(!r)throw new Error("unknown gl type");return r},r.isArrayBuffer=void 0;var n=5120,o=5121,u=5122,i=5123,a=5124,f=5125,c=5126,l={},s=l;s[n]=Int8Array,s[5121]=Uint8Array,s[5122]=Int16Array,s[5123]=Uint16Array,s[a]=Int32Array,s[5125]=Uint32Array,s[5126]=Float32Array,s[32819]=Uint16Array,s[32820]=Uint16Array,s[33635]=Uint16Array,s[5131]=Uint16Array,s[33640]=Uint32Array,s[35899]=Uint32Array,s[35902]=Uint32Array,s[36269]=Uint32Array,s[34042]=Uint32Array;var y="undefined"!=typeof SharedArrayBuffer?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};r.isArrayBuffer=y},function(e,r,t){"use strict";r.__esModule=!0,r.add=function(e,r,t){return(t=t||new n(3))[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},r.copy=function(e,r){return(r=r||new n(3))[0]=e[0],r[1]=e[1],r[2]=e[2],r},r.create=function(e,r,t){var o=new n(3);e&&(o[0]=e);r&&(o[1]=r);t&&(o[2]=t);return o},r.cross=function(e,r,t){t=t||new n(3);var o=e[2]*r[0]-e[0]*r[2],u=e[0]*r[1]-e[1]*r[0];return t[0]=e[1]*r[2]-e[2]*r[1],t[1]=o,t[2]=u,t},r.distance=function(e,r){var t=e[0]-r[0],n=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(t*t+n*n+o*o)},r.distanceSq=function(e,r){var t=e[0]-r[0],n=e[1]-r[1],o=e[2]-r[2];return t*t+n*n+o*o},r.divide=function(e,r,t){return(t=t||new n(3))[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t},r.divScalar=function(e,r,t){return(t=t||new n(3))[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r,t},r.dot=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]},r.lerp=function(e,r,t,o){return(o=o||new n(3))[0]=e[0]+t*(r[0]-e[0]),o[1]=e[1]+t*(r[1]-e[1]),o[2]=e[2]+t*(r[2]-e[2]),o},r.lerpV=function(e,r,t,o){return(o=o||new n(3))[0]=e[0]+t[0]*(r[0]-e[0]),o[1]=e[1]+t[1]*(r[1]-e[1]),o[2]=e[2]+t[2]*(r[2]-e[2]),o},r.length=function(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])},r.lengthSq=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},r.max=function(e,r,t){return(t=t||new n(3))[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t},r.min=function(e,r,t){return(t=t||new n(3))[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t},r.mulScalar=function(e,r,t){return(t=t||new n(3))[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},r.multiply=function(e,r,t){return(t=t||new n(3))[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t},r.negate=function(e,r){return(r=r||new n(3))[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r},r.normalize=function(e,r){r=r||new n(3);var t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=Math.sqrt(t);o>1e-5?(r[0]=e[0]/o,r[1]=e[1]/o,r[2]=e[2]/o):(r[0]=0,r[1]=0,r[2]=0);return r},r.setDefaultType=function(e){var r=n;return n=e,r},r.subtract=function(e,r,t){return(t=t||new n(3))[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t};var n=Float32Array},function(e,r,t){"use strict";r.__esModule=!0,r.isWebGL1=function(e){return!e.texStorage2D},r.isWebGL2=function(e){return!!e.texStorage2D},r.glEnumToString=void 0;var n,o,u=(n={},o={},function(e,r){return function(e){var r=e.constructor.name;if(!n[r]){for(var t in e)if("number"==typeof e[t]){var u=o[e[t]];o[e[t]]=u?"".concat(u," | ").concat(t):t}n[r]=!0}}(e),o[r]||"0x"+r.toString(16)});r.glEnumToString=u},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.createAttributeSetters=oe,r.createProgram=H,r.createProgramFromScripts=function(e,r,t,n,o){for(var u=G(t,n,o),i=[],a=0;a<r.length;++a){var f=q(e,r[a],e[X[a]],u.errorCallback);if(!f)return null;i.push(f)}return H(e,i,u)},r.createProgramFromSources=V,r.createProgramInfo=function(e,r,t,n,o){var u=G(t,n,o),i=!0;if(r=r.map((function(e){if(e.indexOf("\n")<0){var r=y(e);r?e=r.text:(u.errorCallback("no element with id: "+e),i=!1)}return e})),!i)return null;var a=V(e,r,u);if(!a)return null;return ie(e,a)},r.createProgramInfoFromProgram=ie,r.createUniformSetters=$,r.createUniformBlockSpecFromProgram=J,r.createUniformBlockInfoFromProgram=ee,r.createUniformBlockInfo=function(e,r,t){return ee(e,r.program,r.uniformBlockSpec,t)},r.createTransformFeedback=function(e,r,t){var n=e.createTransformFeedback();return e.bindTransformFeedback(36386,n),e.useProgram(r.program),Z(e,r,t),e.bindTransformFeedback(36386,null),n},r.createTransformFeedbackInfo=K,r.bindTransformFeedbackInfo=Z,r.setAttributes=ue,r.setBuffersAndAttributes=function(e,r,t){t.vertexArrayObject?e.bindVertexArray(t.vertexArrayObject):(ue(r.attribSetters||r,t.attribs),t.indices&&e.bindBuffer(34963,t.indices))},r.setUniforms=te,r.setUniformBlock=function(e,r,t){re(e,r,t)&&e.bufferData(m,t.array,35048)},r.setBlockUniforms=function(e,r){var t=e.setters;for(var n in r){var o=t[n];if(o){var u=r[n];o(u)}}},r.bindUniformBlock=re,r.setUniformsAndBindTextures=void 0;var o=a(t(3)),u=a(t(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(t,u,a):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}function f(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=u.error,s=u.warn;function y(e){return"undefined"!=typeof document&&document.getElementById?document.getElementById(e):null}var v=33984,b=34962,m=35345,p=5126,d=5124,x=5125,w=3553,h=34067,F=32879,E=35866,A={};function j(e,r){return A[r].bindPoint}function O(e,r){return function(t){e.uniform1i(r,t)}}function _(e,r){return function(t){e.uniform1iv(r,t)}}function S(e,r){return function(t){e.uniform2iv(r,t)}}function M(e,r){return function(t){e.uniform3iv(r,t)}}function R(e,r){return function(t){e.uniform4iv(r,t)}}function P(e,r,t,n){var i=j(0,r);return o.isWebGL2(e)?function(r){var o,a;u.isTexture(e,r)?(o=r,a=null):(o=r.texture,a=r.sampler),e.uniform1i(n,t),e.activeTexture(v+t),e.bindTexture(i,o),e.bindSampler(t,a)}:function(r){e.uniform1i(n,t),e.activeTexture(v+t),e.bindTexture(i,r)}}function T(e,r,t,n,i){for(var a=j(0,r),f=new Int32Array(i),c=0;c<i;++c)f[c]=t+c;return o.isWebGL2(e)?function(r){e.uniform1iv(n,f),r.forEach((function(r,n){var o,i;e.activeTexture(v+f[n]),u.isTexture(e,r)?(o=r,i=null):(o=r.texture,i=r.sampler),e.bindSampler(t,i),e.bindTexture(a,o)}))}:function(r){e.uniform1iv(n,f),r.forEach((function(r,t){e.activeTexture(v+f[t]),e.bindTexture(a,r)}))}}function g(e,r){return function(t){if(t.value)switch(e.disableVertexAttribArray(r),t.value.length){case 4:e.vertexAttrib4fv(r,t.value);break;case 3:e.vertexAttrib3fv(r,t.value);break;case 2:e.vertexAttrib2fv(r,t.value);break;case 1:e.vertexAttrib1fv(r,t.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(b,t.buffer),e.enableVertexAttribArray(r),e.vertexAttribPointer(r,t.numComponents||t.size,t.type||p,t.normalize||!1,t.stride||0,t.offset||0),void 0!==t.divisor&&e.vertexAttribDivisor(r,t.divisor)}}function z(e,r){return function(t){if(t.value){if(e.disableVertexAttribArray(r),4!==t.value.length)throw new Error("The length of an integer constant value must be 4!");e.vertexAttrib4iv(r,t.value)}else e.bindBuffer(b,t.buffer),e.enableVertexAttribArray(r),e.vertexAttribIPointer(r,t.numComponents||t.size,t.type||d,t.stride||0,t.offset||0),void 0!==t.divisor&&e.vertexAttribDivisor(r,t.divisor)}}function U(e,r){return function(t){if(t.value){if(e.disableVertexAttribArray(r),4!==t.value.length)throw new Error("The length of an unsigned integer constant value must be 4!");e.vertexAttrib4uiv(r,t.value)}else e.bindBuffer(b,t.buffer),e.enableVertexAttribArray(r),e.vertexAttribIPointer(r,t.numComponents||t.size,t.type||x,t.stride||0,t.offset||0),void 0!==t.divisor&&e.vertexAttribDivisor(r,t.divisor)}}function C(e,r,t){var n=t.size,o=t.count;return function(t){e.bindBuffer(b,t.buffer);for(var u=t.size||t.numComponents||n,i=u/o,a=t.type||p,f=A[a].size*u,c=t.normalize||!1,l=t.offset||0,s=f/o,y=0;y<o;++y)e.enableVertexAttribArray(r+y),e.vertexAttribPointer(r+y,i,a,c,f,l+s*y),void 0!==t.divisor&&e.vertexAttribDivisor(r+y,t.divisor)}}A[5126]={Type:Float32Array,size:4,setter:function(e,r){return function(t){e.uniform1f(r,t)}},arraySetter:function(e,r){return function(t){e.uniform1fv(r,t)}}},A[35664]={Type:Float32Array,size:8,setter:function(e,r){return function(t){e.uniform2fv(r,t)}}},A[35665]={Type:Float32Array,size:12,setter:function(e,r){return function(t){e.uniform3fv(r,t)}}},A[35666]={Type:Float32Array,size:16,setter:function(e,r){return function(t){e.uniform4fv(r,t)}}},A[d]={Type:Int32Array,size:4,setter:O,arraySetter:_},A[35667]={Type:Int32Array,size:8,setter:S},A[35668]={Type:Int32Array,size:12,setter:M},A[35669]={Type:Int32Array,size:16,setter:R},A[5125]={Type:Uint32Array,size:4,setter:function(e,r){return function(t){e.uniform1ui(r,t)}},arraySetter:function(e,r){return function(t){e.uniform1uiv(r,t)}}},A[36294]={Type:Uint32Array,size:8,setter:function(e,r){return function(t){e.uniform2uiv(r,t)}}},A[36295]={Type:Uint32Array,size:12,setter:function(e,r){return function(t){e.uniform3uiv(r,t)}}},A[36296]={Type:Uint32Array,size:16,setter:function(e,r){return function(t){e.uniform4uiv(r,t)}}},A[35670]={Type:Uint32Array,size:4,setter:O,arraySetter:_},A[35671]={Type:Uint32Array,size:8,setter:S},A[35672]={Type:Uint32Array,size:12,setter:M},A[35673]={Type:Uint32Array,size:16,setter:R},A[35674]={Type:Float32Array,size:16,setter:function(e,r){return function(t){e.uniformMatrix2fv(r,!1,t)}}},A[35675]={Type:Float32Array,size:36,setter:function(e,r){return function(t){e.uniformMatrix3fv(r,!1,t)}}},A[35676]={Type:Float32Array,size:64,setter:function(e,r){return function(t){e.uniformMatrix4fv(r,!1,t)}}},A[35685]={Type:Float32Array,size:24,setter:function(e,r){return function(t){e.uniformMatrix2x3fv(r,!1,t)}}},A[35686]={Type:Float32Array,size:32,setter:function(e,r){return function(t){e.uniformMatrix2x4fv(r,!1,t)}}},A[35687]={Type:Float32Array,size:24,setter:function(e,r){return function(t){e.uniformMatrix3x2fv(r,!1,t)}}},A[35688]={Type:Float32Array,size:48,setter:function(e,r){return function(t){e.uniformMatrix3x4fv(r,!1,t)}}},A[35689]={Type:Float32Array,size:32,setter:function(e,r){return function(t){e.uniformMatrix4x2fv(r,!1,t)}}},A[35690]={Type:Float32Array,size:48,setter:function(e,r){return function(t){e.uniformMatrix4x3fv(r,!1,t)}}},A[35678]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[35680]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[35679]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[35682]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36289]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36292]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36293]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36298]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36299]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[36300]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36303]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36306]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36307]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[36308]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36311]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E};var k={};k[5126]={size:4,setter:g},k[35664]={size:8,setter:g},k[35665]={size:12,setter:g},k[35666]={size:16,setter:g},k[d]={size:4,setter:z},k[35667]={size:8,setter:z},k[35668]={size:12,setter:z},k[35669]={size:16,setter:z},k[5125]={size:4,setter:U},k[36294]={size:8,setter:U},k[36295]={size:12,setter:U},k[36296]={size:16,setter:U},k[35670]={size:4,setter:z},k[35671]={size:8,setter:z},k[35672]={size:12,setter:z},k[35673]={size:16,setter:z},k[35674]={size:4,setter:C,count:2},k[35675]={size:9,setter:C,count:3},k[35676]={size:16,setter:C,count:4};var W=/ERROR:\s*\d+:(\d+)/gi;function I(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=f(r.matchAll(W)),o=new Map(n.map((function(e,t){var o=parseInt(e[1]),u=n[t+1],i=u?u.index:r.length;return[o-1,r.substring(e.index,i)]})));return e.split("\n").map((function(e,r){var n=o.get(r);return"".concat(r+1+t,": ").concat(e).concat(n?"\n\n^^^ ".concat(n):"")})).join("\n")}var B=/^[ \t]*\n/;function L(e,r,t,n){var u=n||l,i=e.createShader(t),a=0;if(B.test(r)&&(a=1,r=r.replace(B,"")),e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,35713)){var f=e.getShaderInfoLog(i);return u("".concat(I(r,f,a),"\nError compiling ").concat(o.glEnumToString(e,t),": ").concat(f)),e.deleteShader(i),null}return i}function G(e,r,t){var n,o;if("function"==typeof r&&(t=r,r=void 0),"function"==typeof e)t=e,e=void 0;else if(e&&!Array.isArray(e)){if(e.errorCallback)return e;var u=e;t=u.errorCallback,e=u.attribLocations,n=u.transformFeedbackVaryings,o=u.transformFeedbackMode}var i={errorCallback:t||l,transformFeedbackVaryings:n,transformFeedbackMode:o};if(e){var a={};Array.isArray(e)?e.forEach((function(e,t){a[e]=r?r[t]:t})):a=e,i.attribLocations=a}return i}var X=["VERTEX_SHADER","FRAGMENT_SHADER"];function D(e,r){return r.indexOf("frag")>=0?35632:r.indexOf("vert")>=0?35633:void 0}function N(e,r){r.forEach((function(r){e.deleteShader(r)}))}function H(e,r,t,n,i){for(var a=G(t,n,i),f=[],c=[],l=0;l<r.length;++l){var s=r[l];if("string"==typeof s){var v=y(s),b=v?v.text:s,m=e[X[l]];v&&v.type&&(m=D(0,v.type)||m),s=L(e,b,m,a.errorCallback),c.push(s)}u.isShader(e,s)&&f.push(s)}if(f.length!==r.length)return a.errorCallback("not enough shaders for program"),N(e,c),null;var p=e.createProgram();f.forEach((function(r){e.attachShader(p,r)})),a.attribLocations&&Object.keys(a.attribLocations).forEach((function(r){e.bindAttribLocation(p,a.attribLocations[r],r)}));var d=a.transformFeedbackVaryings;if(d&&(d.attribs&&(d=d.attribs),Array.isArray(d)||(d=Object.keys(d)),e.transformFeedbackVaryings(p,d,a.transformFeedbackMode||35981)),e.linkProgram(p),!e.getProgramParameter(p,35714)){var x=e.getProgramInfoLog(p);return a.errorCallback("".concat(f.map((function(r){var t=I(e.getShaderSource(r),"",0),n=e.getShaderParameter(r,e.SHADER_TYPE);return"".concat(o.glEnumToString(e,n),"\n").concat(t,"}")})).join("\n"),"\nError in program linking: ").concat(x)),e.deleteProgram(p),N(e,c),null}return p}function q(e,r,t,n){var o,u=y(r);if(!u)throw new Error("unknown script element: ".concat(r));o=u.text;var i=t||D(0,u.type);if(!i)throw new Error("unknown shader type");return L(e,o,i,n)}function V(e,r,t,n,o){for(var u=G(t,n,o),i=[],a=0;a<r.length;++a){var f=L(e,r[a],e[X[a]],u.errorCallback);if(!f)return null;i.push(f)}return H(e,i,u)}function Y(e){var r=e.name;return r.startsWith("gl_")||r.startsWith("webgl_")}function $(e,r){var t=0;function n(r,n,o){var u,i=n.name.endsWith("[0]"),a=n.type,f=A[a];if(!f)throw new Error("unknown type: 0x".concat(a.toString(16)));if(f.bindPoint){var c=t;t+=n.size,u=i?f.arraySetter(e,a,c,o,n.size):f.setter(e,a,c,o,n.size)}else u=f.arraySetter&&i?f.arraySetter(e,o):f.setter(e,o);return u.location=o,u}for(var o={},u=e.getProgramParameter(r,35718),i=0;i<u;++i){var a=e.getActiveUniform(r,i);if(!Y(a)){var f=a.name;f.endsWith("[0]")&&(f=f.substr(0,f.length-3));var c=e.getUniformLocation(r,a.name);c&&(o[f]=n(0,a,c))}}return o}function K(e,r){for(var t={},n=e.getProgramParameter(r,35971),o=0;o<n;++o){var u=e.getTransformFeedbackVarying(r,o);t[u.name]={index:o,type:u.type,size:u.size}}return t}function Z(e,r,t){for(var n in r.transformFeedbackInfo&&(r=r.transformFeedbackInfo),t.attribs&&(t=t.attribs),t){var o=r[n];if(o){var u=t[n];u.offset?e.bindBufferRange(35982,o.index,u.buffer,u.offset,u.size):e.bindBufferBase(35982,o.index,u.buffer)}}}function J(e,r){for(var t=e.getProgramParameter(r,35718),n=[],o=[],u=0;u<t;++u){o.push(u),n.push({});var i=e.getActiveUniform(r,u);if(Y(i))break;n[u].name=i.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach((function(t){var u=t[0],i=t[1];e.getActiveUniforms(r,o,e[u]).forEach((function(e,r){n[r][i]=e}))}));for(var a={},f=e.getProgramParameter(r,35382),c=0;c<f;++c){var l=e.getActiveUniformBlockName(r,c),s={index:e.getUniformBlockIndex(r,l),usedByVertexShader:e.getActiveUniformBlockParameter(r,c,35396),usedByFragmentShader:e.getActiveUniformBlockParameter(r,c,35398),size:e.getActiveUniformBlockParameter(r,c,35392),uniformIndices:e.getActiveUniformBlockParameter(r,c,35395)};s.used=s.usedByVertexShader||s.usedByFragmentShader,a[l]=s}return{blockSpecs:a,uniformData:n}}var Q=/\[\d+\]\.$/;function ee(e,r,t,n){var o=t.blockSpecs,u=t.uniformData,i=o[n];if(!i)return s("no uniform block object named:",n),{name:n,uniforms:{}};var a=new ArrayBuffer(i.size),f=e.createBuffer(),c=i.index;e.bindBuffer(m,f),e.uniformBlockBinding(r,i.index,c);var l=n+".";Q.test(l)&&(l=l.replace(Q,"."));var y={},v={};return i.uniformIndices.forEach((function(e){var r,t=u[e],n=A[t.type],o=n.Type,i=((n.size+((r=16)-1))/r|0)*r,f=n.size+(t.size-1)*i,c=t.name;c.startsWith(l)&&(c=c.substr(l.length));var s=c.endsWith("[0]");s&&(c=c.substr(0,c.length-3));var b=new o(a,t.offset,f/o.BYTES_PER_ELEMENT);y[c]=b,v[c]=function(e,r,t,n,o){if(o){var u=t/r.BYTES_PER_ELEMENT,i=n/r.BYTES_PER_ELEMENT;return function(r){for(var t=0,n=0;n<r.length;n+=u){for(var o=0;o<u;++o)e[t+o]=r[n+o];t+=i}}}return function(r){r.length?e.set(r):e[0]=r}}(b,o,n.size,i,s)})),{name:n,array:a,asFloat:new Float32Array(a),buffer:f,uniforms:y,setters:v}}function re(e,r,t){var n=(r.uniformBlockSpec||r).blockSpecs[t.name];if(n){var o=n.index;return e.bindBufferRange(m,o,t.buffer,t.offset||0,t.array.byteLength),!0}return!1}function te(e,r){for(var t=e.uniformSetters||e,n=arguments.length,o=1;o<n;++o){var u=arguments[o];if(Array.isArray(u))for(var i=u.length,a=0;a<i;++a)te(t,u[a]);else for(var f in u){var c=t[f];c&&c(u[f])}}}var ne=te;function oe(e,r){for(var t={},n=e.getProgramParameter(r,35721),o=0;o<n;++o){var u=e.getActiveAttrib(r,o);if(!Y(u)){var i=e.getAttribLocation(r,u.name),a=k[u.type],f=a.setter(e,i,a);f.location=i,t[u.name]=f}}return t}function ue(e,r){for(var t in r){var n=e[t];n&&n(r[t])}}function ie(e,r){var t={program:r,uniformSetters:$(e,r),attribSetters:oe(e,r)};return o.isWebGL2(e)&&(t.uniformBlockSpec=J(e,r),t.transformFeedbackInfo=K(e,r)),t}r.setUniformsAndBindTextures=ne},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.axisRotate=function(e,r,t,n){n=n||new c(16);var o=r[0],u=r[1],i=r[2],a=Math.sqrt(o*o+u*u+i*i),f=(o/=a)*o,l=(u/=a)*u,s=(i/=a)*i,y=Math.cos(t),v=Math.sin(t),b=1-y,m=f+(1-f)*y,p=o*u*b+i*v,d=o*i*b-u*v,x=o*u*b-i*v,w=l+(1-l)*y,h=u*i*b+o*v,F=o*i*b+u*v,E=u*i*b-o*v,A=s+(1-s)*y,j=e[0],O=e[1],_=e[2],S=e[3],M=e[4],R=e[5],P=e[6],T=e[7],g=e[8],z=e[9],U=e[10],C=e[11];n[0]=m*j+p*M+d*g,n[1]=m*O+p*R+d*z,n[2]=m*_+p*P+d*U,n[3]=m*S+p*T+d*C,n[4]=x*j+w*M+h*g,n[5]=x*O+w*R+h*z,n[6]=x*_+w*P+h*U,n[7]=x*S+w*T+h*C,n[8]=F*j+E*M+A*g,n[9]=F*O+E*R+A*z,n[10]=F*_+E*P+A*U,n[11]=F*S+E*T+A*C,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]);return n},r.axisRotation=function(e,r,t){t=t||new c(16);var n=e[0],o=e[1],u=e[2],i=Math.sqrt(n*n+o*o+u*u),a=(n/=i)*n,f=(o/=i)*o,l=(u/=i)*u,s=Math.cos(r),y=Math.sin(r),v=1-s;return t[0]=a+(1-a)*s,t[1]=n*o*v+u*y,t[2]=n*u*v-o*y,t[3]=0,t[4]=n*o*v-u*y,t[5]=f+(1-f)*s,t[6]=o*u*v+n*y,t[7]=0,t[8]=n*u*v+o*y,t[9]=o*u*v-n*y,t[10]=l+(1-l)*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},r.copy=l,r.frustum=function(e,r,t,n,o,u,i){i=i||new c(16);var a=r-e,f=n-t,l=o-u;return i[0]=2*o/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/f,i[6]=0,i[7]=0,i[8]=(e+r)/a,i[9]=(n+t)/f,i[10]=u/l,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*u/l,i[15]=0,i},r.getAxis=function(e,r,t){t=t||o.create();var n=4*r;return t[0]=e[n+0],t[1]=e[n+1],t[2]=e[n+2],t},r.getTranslation=function(e,r){return(r=r||o.create())[0]=e[12],r[1]=e[13],r[2]=e[14],r},r.identity=s,r.inverse=y,r.lookAt=function(e,r,t,n){return n=n||new c(16),i=i||o.create(),a=a||o.create(),f=f||o.create(),o.normalize(o.subtract(e,r,f),f),o.normalize(o.cross(t,f,i),i),o.normalize(o.cross(f,i,a),a),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=0,n[4]=a[0],n[5]=a[1],n[6]=a[2],n[7]=0,n[8]=f[0],n[9]=f[1],n[10]=f[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n},r.multiply=function(e,r,t){t=t||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=e[8],v=e[9],b=e[10],m=e[11],p=e[12],d=e[13],x=e[14],w=e[15],h=r[0],F=r[1],E=r[2],A=r[3],j=r[4],O=r[5],_=r[6],S=r[7],M=r[8],R=r[9],P=r[10],T=r[11],g=r[12],z=r[13],U=r[14],C=r[15];return t[0]=n*h+a*F+y*E+p*A,t[1]=o*h+f*F+v*E+d*A,t[2]=u*h+l*F+b*E+x*A,t[3]=i*h+s*F+m*E+w*A,t[4]=n*j+a*O+y*_+p*S,t[5]=o*j+f*O+v*_+d*S,t[6]=u*j+l*O+b*_+x*S,t[7]=i*j+s*O+m*_+w*S,t[8]=n*M+a*R+y*P+p*T,t[9]=o*M+f*R+v*P+d*T,t[10]=u*M+l*R+b*P+x*T,t[11]=i*M+s*R+m*P+w*T,t[12]=n*g+a*z+y*U+p*C,t[13]=o*g+f*z+v*U+d*C,t[14]=u*g+l*z+b*U+x*C,t[15]=i*g+s*z+m*U+w*C,t},r.negate=function(e,r){return(r=r||new c(16))[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r[4]=-e[4],r[5]=-e[5],r[6]=-e[6],r[7]=-e[7],r[8]=-e[8],r[9]=-e[9],r[10]=-e[10],r[11]=-e[11],r[12]=-e[12],r[13]=-e[13],r[14]=-e[14],r[15]=-e[15],r},r.ortho=function(e,r,t,n,o,u,i){return(i=i||new c(16))[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(n-t),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-u),i[11]=0,i[12]=(r+e)/(e-r),i[13]=(n+t)/(t-n),i[14]=(u+o)/(o-u),i[15]=1,i},r.perspective=function(e,r,t,n,o){o=o||new c(16);var u=Math.tan(.5*Math.PI-.5*e),i=1/(t-n);return o[0]=u/r,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=u,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(t+n)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=t*n*i*2,o[15]=0,o},r.rotateX=function(e,r,t){t=t||new c(16);var n=e[4],o=e[5],u=e[6],i=e[7],a=e[8],f=e[9],l=e[10],s=e[11],y=Math.cos(r),v=Math.sin(r);t[4]=y*n+v*a,t[5]=y*o+v*f,t[6]=y*u+v*l,t[7]=y*i+v*s,t[8]=y*a-v*n,t[9]=y*f-v*o,t[10]=y*l-v*u,t[11]=y*s-v*i,e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]);return t},r.rotateY=function(e,r,t){t=t||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[8],f=e[9],l=e[10],s=e[11],y=Math.cos(r),v=Math.sin(r);t[0]=y*n-v*a,t[1]=y*o-v*f,t[2]=y*u-v*l,t[3]=y*i-v*s,t[8]=y*a+v*n,t[9]=y*f+v*o,t[10]=y*l+v*u,t[11]=y*s+v*i,e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]);return t},r.rotateZ=function(e,r,t){t=t||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=Math.cos(r),v=Math.sin(r);t[0]=y*n+v*a,t[1]=y*o+v*f,t[2]=y*u+v*l,t[3]=y*i+v*s,t[4]=y*a-v*n,t[5]=y*f-v*o,t[6]=y*l-v*u,t[7]=y*s-v*i,e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]);return t},r.rotationX=function(e,r){r=r||new c(16);var t=Math.cos(e),n=Math.sin(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},r.rotationY=function(e,r){r=r||new c(16);var t=Math.cos(e),n=Math.sin(e);return r[0]=t,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},r.rotationZ=function(e,r){r=r||new c(16);var t=Math.cos(e),n=Math.sin(e);return r[0]=t,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},r.scale=function(e,r,t){t=t||new c(16);var n=r[0],o=r[1],u=r[2];t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=n*e[3],t[4]=o*e[4],t[5]=o*e[5],t[6]=o*e[6],t[7]=o*e[7],t[8]=u*e[8],t[9]=u*e[9],t[10]=u*e[10],t[11]=u*e[11],e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]);return t},r.scaling=function(e,r){return(r=r||new c(16))[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},r.setAxis=function(e,r,t,n){n!==e&&(n=l(e,n));var o=4*t;return n[o+0]=r[0],n[o+1]=r[1],n[o+2]=r[2],n},r.setDefaultType=function(e){var r=c;return c=e,r},r.setTranslation=function(e,r,t){t=t||s(),e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11]);return t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},r.transformDirection=function(e,r,t){t=t||o.create();var n=r[0],u=r[1],i=r[2];return t[0]=n*e[0]+u*e[4]+i*e[8],t[1]=n*e[1]+u*e[5]+i*e[9],t[2]=n*e[2]+u*e[6]+i*e[10],t},r.transformNormal=function(e,r,t){t=t||o.create();var n=y(e),u=r[0],i=r[1],a=r[2];return t[0]=u*n[0]+i*n[1]+a*n[2],t[1]=u*n[4]+i*n[5]+a*n[6],t[2]=u*n[8]+i*n[9]+a*n[10],t},r.transformPoint=function(e,r,t){t=t||o.create();var n=r[0],u=r[1],i=r[2],a=n*e[3]+u*e[7]+i*e[11]+e[15];return t[0]=(n*e[0]+u*e[4]+i*e[8]+e[12])/a,t[1]=(n*e[1]+u*e[5]+i*e[9]+e[13])/a,t[2]=(n*e[2]+u*e[6]+i*e[10]+e[14])/a,t},r.translate=function(e,r,t){t=t||new c(16);var n=r[0],o=r[1],u=r[2],i=e[0],a=e[1],f=e[2],l=e[3],s=e[4],y=e[5],v=e[6],b=e[7],m=e[8],p=e[9],d=e[10],x=e[11],w=e[12],h=e[13],F=e[14],E=e[15];e!==t&&(t[0]=i,t[1]=a,t[2]=f,t[3]=l,t[4]=s,t[5]=y,t[6]=v,t[7]=b,t[8]=m,t[9]=p,t[10]=d,t[11]=x);return t[12]=i*n+s*o+m*u+w,t[13]=a*n+y*o+p*u+h,t[14]=f*n+v*o+d*u+F,t[15]=l*n+b*o+x*u+E,t},r.translation=function(e,r){return(r=r||new c(16))[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r},r.transpose=function(e,r){if((r=r||new c(16))===e){var t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,r}var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=e[8],v=e[9],b=e[10],m=e[11],p=e[12],d=e[13],x=e[14],w=e[15];return r[0]=n,r[1]=a,r[2]=y,r[3]=p,r[4]=o,r[5]=f,r[6]=v,r[7]=d,r[8]=u,r[9]=l,r[10]=b,r[11]=x,r[12]=i,r[13]=s,r[14]=m,r[15]=w,r};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}t.default=e,r&&r.set(e,t);return t}(t(2));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var i,a,f,c=Float32Array;function l(e,r){return(r=r||new c(16))[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function s(e){return(e=e||new c(16))[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function y(e,r){r=r||new c(16);var t=e[0],n=e[1],o=e[2],u=e[3],i=e[4],a=e[5],f=e[6],l=e[7],s=e[8],y=e[9],v=e[10],b=e[11],m=e[12],p=e[13],d=e[14],x=e[15],w=v*x,h=d*b,F=f*x,E=d*l,A=f*b,j=v*l,O=o*x,_=d*u,S=o*b,M=v*u,R=o*l,P=f*u,T=s*p,g=m*y,z=i*p,U=m*a,C=i*y,k=s*a,W=t*p,I=m*n,B=t*y,L=s*n,G=t*a,X=i*n,D=w*a+E*y+A*p-(h*a+F*y+j*p),N=h*n+O*y+M*p-(w*n+_*y+S*p),H=F*n+_*a+R*p-(E*n+O*a+P*p),q=j*n+S*a+P*y-(A*n+M*a+R*y),V=1/(t*D+i*N+s*H+m*q);return r[0]=V*D,r[1]=V*N,r[2]=V*H,r[3]=V*q,r[4]=V*(h*i+F*s+j*m-(w*i+E*s+A*m)),r[5]=V*(w*t+_*s+S*m-(h*t+O*s+M*m)),r[6]=V*(E*t+O*i+P*m-(F*t+_*i+R*m)),r[7]=V*(A*t+M*i+R*s-(j*t+S*i+P*s)),r[8]=V*(T*l+U*b+C*x-(g*l+z*b+k*x)),r[9]=V*(g*u+W*b+L*x-(T*u+I*b+B*x)),r[10]=V*(z*u+I*l+G*x-(U*u+W*l+X*x)),r[11]=V*(k*u+B*l+X*b-(C*u+L*l+G*b)),r[12]=V*(z*v+k*d+g*f-(C*d+T*f+U*v)),r[13]=V*(B*d+T*o+I*v-(W*v+L*d+g*o)),r[14]=V*(W*f+X*d+U*o-(G*d+z*o+I*f)),r[15]=V*(G*v+C*o+L*f-(B*f+X*v+k*o)),r}},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.createAttribsFromArrays=w,r.createBuffersFromArrays=function(e,r){var t={};Object.keys(r).forEach((function(n){t[n]=F(e,r[n],n)})),r.indices?(t.numElements=r.indices.length,t.elementType=o.getGLTypeForTypedArray(x(r.indices),"indices")):t.numElements=function(e){var r,t;for(t=0;t<h.length&&!((r=h[t])in e);++t);t===h.length&&(r=Object.keys(e)[0]);var n=e[r],o=v(n).length,u=d(n,r),i=o/u;if(o%u>0)throw new Error("numComponents ".concat(u," not correct for length ").concat(o));return i}(r);return t},r.createBufferFromArray=F,r.createBufferFromTypedArray=s,r.createBufferInfoFromArrays=function(e,r,t){var n=w(e,r),u=Object.assign({},t||{});u.attribs=Object.assign({},t?t.attribs:{},n);var i=r.indices;if(i){var a=x(i,"indices");u.indices=s(e,a,34963),u.numElements=a.length,u.elementType=o.getGLTypeForTypedArray(a)}else u.numElements||(u.numElements=function(e,r){var t,n;for(n=0;n<h.length&&!((t=h[n])in r)&&!((t=c.attribPrefix+t)in r);++n);n===h.length&&(t=Object.keys(r)[0]);var o=r[t];e.bindBuffer(f,o.buffer);var u=e.getBufferParameter(f,34660);e.bindBuffer(f,null);var i=(y=o.type,5120===y||5121===y?1:5122===y||5123===y?2:5124===y||5125===y||5126===y?4:0),a=u/i,l=o.numComponents||o.size,s=a/l;var y;if(s%1!=0)throw new Error("numComponents ".concat(l," not correct for length ").concat(length));return s}(e,u.attribs));return u},r.setAttribInfoBufferFromArray=function(e,r,t,n){t=x(t),void 0!==n?(e.bindBuffer(f,r.buffer),e.bufferSubData(f,n,t)):l(e,f,r.buffer,t,r.drawType)},r.setAttributePrefix=function(e){c.attribPrefix=e},r.setAttributeDefaults_=function(e){u.copyExistingProperties(e,c)},r.getNumComponents_=d,r.getArray_=v;var o=a(t(1)),u=a(t(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(t,u,a):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}var f=34962,c={attribPrefix:""};function l(e,r,t,n,o){e.bindBuffer(r,t),e.bufferData(r,n,o||35044)}function s(e,r,t,n){if(u.isBuffer(e,r))return r;t=t||f;var o=e.createBuffer();return l(e,t,o,r,n),o}function y(e){return"indices"===e}function v(e){return e.length?e:e.data}var b=/coord|texture/i,m=/color|colour/i;function p(e,r){var t;if(r%(t=b.test(e)?2:m.test(e)?4:3)>0)throw new Error("Can not guess numComponents for attribute '".concat(e,"'. Tried ").concat(t," but ").concat(r," values is not evenly divisible by ").concat(t,". You should specify it."));return t}function d(e,r){return e.numComponents||e.size||p(r,v(e).length)}function x(e,r){if(o.isArrayBuffer(e))return e;if(o.isArrayBuffer(e.data))return e.data;Array.isArray(e)&&(e={data:e});var t=e.type;return t||(t=y(r)?Uint16Array:Float32Array),new t(e.data)}function w(e,r){var t={};return Object.keys(r).forEach((function(n){if(!y(n)){var u=r[n],i=u.attrib||u.name||u.attribName||c.attribPrefix+n;if(u.value){if(!Array.isArray(u.value)&&!o.isArrayBuffer(u.value))throw new Error("array.value is not array or typedarray");t[i]={value:u.value}}else{var a,l,v,b;if(u.buffer&&u.buffer instanceof WebGLBuffer)a=u.buffer,b=u.numComponents||u.size,l=u.type,v=u.normalize;else if("number"==typeof u||"number"==typeof u.data){var m=u.data||u,w=u.type||Float32Array,h=m*w.BYTES_PER_ELEMENT;l=o.getGLTypeForTypedArrayType(w),v=void 0!==u.normalize?u.normalize:(E=w)===Int8Array||E===Uint8Array,b=u.numComponents||u.size||p(n,m),a=e.createBuffer(),e.bindBuffer(f,a),e.bufferData(f,h,u.drawType||35044)}else{var F=x(u,n);a=s(e,F,void 0,u.drawType),l=o.getGLTypeForTypedArray(F),v=void 0!==u.normalize?u.normalize:function(e){return e instanceof Int8Array||e instanceof Uint8Array}(F),b=d(u,n)}t[i]={buffer:a,numComponents:b,type:l,normalize:v,stride:u.stride||0,offset:u.offset||0,divisor:void 0===u.divisor?void 0:u.divisor,drawType:u.drawType}}}var E})),e.bindBuffer(f,null),t}var h=["position","positions","a_position"];function F(e,r,t){var n="indices"===t?34963:f;return s(e,x(r,t),n)}},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.setTextureDefaults_=function(e){i.copyExistingProperties(e,s),e.textureColor&&ye(e.textureColor)},r.createSampler=Fe,r.createSamplers=function(e,r){var t={};return Object.keys(r).forEach((function(n){t[n]=Fe(e,r[n])})),t},r.setSamplerParameters=he,r.createTexture=We,r.setEmptyTexture=ke,r.setTextureFromArray=Ce,r.loadTextureFromUrl=ge,r.setTextureFromElement=_e,r.setTextureFilteringForSize=Ee,r.setTextureParameters=we,r.setDefaultTextureColor=ye,r.createTextures=function(e,r,t){t=t||Se;var n=0,o=[],u={},i={};function a(){0===n&&setTimeout((function(){t(o.length?o:void 0,u,i)}),0)}return Object.keys(r).forEach((function(t){var f,c,l=r[t];("string"==typeof(c=l.src)||Array.isArray(c)&&"string"==typeof c[0])&&(f=function(e,r,u){i[t]=u,--n,e&&o.push(e),a()},++n),u[t]=We(e,l,f)})),a(),u},r.resizeTexture=function(e,r,t,n,o,u){n=n||t.width,o=o||t.height,u=u||t.depth;var i=t.target||E;e.bindTexture(i,r);var a,f=t.level||0,c=t.internalFormat||t.format||p,l=ie(c),s=t.format||l.format,v=t.src;a=v&&(y(v)||Array.isArray(v)&&"number"==typeof v[0])?t.type||le(e,v,l.type):t.type||l.type;if(i===A)for(var b=0;b<6;++b)e.texImage2D(_+b,f,c,n,o,0,s,a,null);else i===j||i===O?e.texImage3D(i,f,c,n,o,u,0,s,a,null):e.texImage2D(i,f,c,n,o,0,s,a,null)},r.canGenerateMipmap=fe,r.canFilter=ce,r.getNumComponentsForFormat=function(e){var r=te[e];if(!r)throw"unknown format: "+e;return r.u},r.getBytesPerElementForInternalFormat=ue,r.getFormatAndTypeForInternalFormat=ie;var o=f(t(3)),u=f(t(1)),i=f(t(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=a();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(t,u,i):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}var c,l,s={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},y=u.isArrayBuffer,v=function(){return c=c||("undefined"!=typeof document&&document.createElement?document.createElement("canvas").getContext("2d"):null)},b=6406,m=6407,p=6408,d=6409,x=6410,w=6402,h=34041,F=33071,E=3553,A=34067,j=32879,O=35866,_=34069,S=10241,M=10240,R=10242,P=10243,T=3317,g=3314,z=32878,U=3316,C=3315,k=32877,W=37443,I=37441,B=37440,L=5120,G=5121,X=5122,D=5123,N=5124,H=5125,q=5126,V=5131,Y=36193,$=33640,K=33319,Z=33320,J=6403,Q=36244,ee=36248,re=36249,te={},ne=te;function oe(e){if(!l){var r={};r[6406]={v:b,h:!0,F:!0,A:[1,2,2,4],type:[G,V,Y,q]},r[6409]={v:d,h:!0,F:!0,A:[1,2,2,4],type:[G,V,Y,q]},r[6410]={v:x,h:!0,F:!0,A:[2,4,4,8],type:[G,V,Y,q]},r[m]={v:m,h:!0,F:!0,A:[3,6,6,12,2],type:[G,V,Y,q,33635]},r[p]={v:p,h:!0,F:!0,A:[4,8,8,16,2,2],type:[G,V,Y,q,32819,32820]},r[6402]={v:w,h:!0,F:!1,A:[2,4],type:[H,D]},r[33321]={v:J,h:!0,F:!0,A:[1],type:[G]},r[36756]={v:J,h:!1,F:!0,A:[1],type:[L]},r[33325]={v:J,h:!1,F:!0,A:[4,2],type:[q,V]},r[33326]={v:J,h:!1,F:!1,A:[4],type:[q]},r[33330]={v:Q,h:!0,F:!1,A:[1],type:[G]},r[33329]={v:Q,h:!0,F:!1,A:[1],type:[L]},r[33332]={v:Q,h:!0,F:!1,A:[2],type:[D]},r[33331]={v:Q,h:!0,F:!1,A:[2],type:[X]},r[33334]={v:Q,h:!0,F:!1,A:[4],type:[H]},r[33333]={v:Q,h:!0,F:!1,A:[4],type:[N]},r[33323]={v:K,h:!0,F:!0,A:[2],type:[G]},r[36757]={v:K,h:!1,F:!0,A:[2],type:[L]},r[33327]={v:K,h:!1,F:!0,A:[8,4],type:[q,V]},r[33328]={v:K,h:!1,F:!1,A:[8],type:[q]},r[33336]={v:Z,h:!0,F:!1,A:[2],type:[G]},r[33335]={v:Z,h:!0,F:!1,A:[2],type:[L]},r[33338]={v:Z,h:!0,F:!1,A:[4],type:[D]},r[33337]={v:Z,h:!0,F:!1,A:[4],type:[X]},r[33340]={v:Z,h:!0,F:!1,A:[8],type:[H]},r[33339]={v:Z,h:!0,F:!1,A:[8],type:[N]},r[32849]={v:m,h:!0,F:!0,A:[3],type:[G]},r[35905]={v:m,h:!1,F:!0,A:[3],type:[G]},r[36194]={v:m,h:!0,F:!0,A:[3,2],type:[G,33635]},r[36758]={v:m,h:!1,F:!0,A:[3],type:[L]},r[35898]={v:m,h:!1,F:!0,A:[12,6,4],type:[q,V,35899]},r[35901]={v:m,h:!1,F:!0,A:[12,6,4],type:[q,V,35902]},r[34843]={v:m,h:!1,F:!0,A:[12,6],type:[q,V]},r[34837]={v:m,h:!1,F:!1,A:[12],type:[q]},r[36221]={v:ee,h:!1,F:!1,A:[3],type:[G]},r[36239]={v:ee,h:!1,F:!1,A:[3],type:[L]},r[36215]={v:ee,h:!1,F:!1,A:[6],type:[D]},r[36233]={v:ee,h:!1,F:!1,A:[6],type:[X]},r[36209]={v:ee,h:!1,F:!1,A:[12],type:[H]},r[36227]={v:ee,h:!1,F:!1,A:[12],type:[N]},r[32856]={v:p,h:!0,F:!0,A:[4],type:[G]},r[35907]={v:p,h:!0,F:!0,A:[4],type:[G]},r[36759]={v:p,h:!1,F:!0,A:[4],type:[L]},r[32855]={v:p,h:!0,F:!0,A:[4,2,4],type:[G,32820,$]},r[32854]={v:p,h:!0,F:!0,A:[4,2],type:[G,32819]},r[32857]={v:p,h:!0,F:!0,A:[4],type:[$]},r[34842]={v:p,h:!1,F:!0,A:[16,8],type:[q,V]},r[34836]={v:p,h:!1,F:!1,A:[16],type:[q]},r[36220]={v:re,h:!0,F:!1,A:[4],type:[G]},r[36238]={v:re,h:!0,F:!1,A:[4],type:[L]},r[36975]={v:re,h:!0,F:!1,A:[4],type:[$]},r[36214]={v:re,h:!0,F:!1,A:[8],type:[D]},r[36232]={v:re,h:!0,F:!1,A:[8],type:[X]},r[36226]={v:re,h:!0,F:!1,A:[16],type:[N]},r[36208]={v:re,h:!0,F:!1,A:[16],type:[H]},r[33189]={v:w,h:!0,F:!1,A:[2,4],type:[D,H]},r[33190]={v:w,h:!0,F:!1,A:[4],type:[H]},r[36012]={v:w,h:!0,F:!1,A:[4],type:[q]},r[35056]={v:h,h:!0,F:!1,A:[4],type:[34042]},r[36013]={v:h,h:!0,F:!1,A:[4],type:[36269]},Object.keys(r).forEach((function(e){var t=r[e];t.bytesPerElementMap={},t.A.forEach((function(e,r){var n=t.type[r];t.bytesPerElementMap[n]=e}))})),l=r}return l[e]}function ue(e,r){var t=oe(e);if(!t)throw"unknown internal format";var n=t.bytesPerElementMap[r];if(void 0===n)throw"unknown internal format";return n}function ie(e){var r=oe(e);if(!r)throw"unknown internal format";return{format:r.v,type:r.type[0]}}function ae(e){return 0==(e&e-1)}function fe(e,r,t,n){if(!o.isWebGL2(e))return ae(r)&&ae(t);var u=oe(n);if(!u)throw"unknown internal format";return u.h&&u.F}function ce(e){var r=oe(e);if(!r)throw"unknown internal format";return r.F}function le(e,r,t){return y(r)?u.getGLTypeForTypedArray(r):t||G}function se(e,r,t,n,o){if(o%1!=0)throw"can't guess dimensions";if(t||n){if(n){if(!t&&(t=o/n)%1)throw"can't guess dimensions"}else if((n=o/t)%1)throw"can't guess dimensions"}else{var u=Math.sqrt(o/(r===A?6:1));u%1==0?(t=u,n=u):(t=o,n=1)}return{width:t,height:n}}function ye(e){s.textureColor=new Uint8Array([255*e[0],255*e[1],255*e[2],255*e[3]])}ne[6406]={u:1},ne[6409]={u:1},ne[6410]={u:2},ne[m]={u:3},ne[p]={u:4},ne[J]={u:1},ne[36244]={u:1},ne[K]={u:2},ne[33320]={u:2},ne[m]={u:3},ne[36248]={u:3},ne[p]={u:4},ne[36249]={u:4},ne[6402]={u:1},ne[34041]={u:2};var ve={};function be(e,r){void 0!==r.colorspaceConversion&&(ve.colorspaceConversion=e.getParameter(W),e.pixelStorei(W,r.colorspaceConversion)),void 0!==r.premultiplyAlpha&&(ve.premultiplyAlpha=e.getParameter(I),e.pixelStorei(I,r.premultiplyAlpha)),void 0!==r.flipY&&(ve.flipY=e.getParameter(B),e.pixelStorei(B,r.flipY))}function me(e,r){void 0!==r.colorspaceConversion&&e.pixelStorei(W,ve.colorspaceConversion),void 0!==r.premultiplyAlpha&&e.pixelStorei(I,ve.premultiplyAlpha),void 0!==r.flipY&&e.pixelStorei(B,ve.flipY)}function pe(e){ve.unpackAlignment=e.getParameter(T),o.isWebGL2(e)&&(ve.unpackRowLength=e.getParameter(g),ve.unpackImageHeight=e.getParameter(z),ve.unpackSkipPixels=e.getParameter(U),ve.unpackSkipRows=e.getParameter(C),ve.unpackSkipImages=e.getParameter(k))}function de(e){e.pixelStorei(T,ve.unpackAlignment),o.isWebGL2(e)&&(e.pixelStorei(g,ve.unpackRowLength),e.pixelStorei(z,ve.unpackImageHeight),e.pixelStorei(U,ve.unpackSkipPixels),e.pixelStorei(C,ve.unpackSkipRows),e.pixelStorei(k,ve.unpackSkipImages))}function xe(e,r,t,n){n.minMag&&(t.call(e,r,S,n.minMag),t.call(e,r,M,n.minMag)),n.min&&t.call(e,r,S,n.min),n.mag&&t.call(e,r,M,n.mag),n.wrap&&(t.call(e,r,R,n.wrap),t.call(e,r,P,n.wrap),(r===j||i.isSampler(e,r))&&t.call(e,r,32882,n.wrap)),n.wrapR&&t.call(e,r,32882,n.wrapR),n.wrapS&&t.call(e,r,R,n.wrapS),n.wrapT&&t.call(e,r,P,n.wrapT),n.minLod&&t.call(e,r,33082,n.minLod),n.maxLod&&t.call(e,r,33083,n.maxLod),n.baseLevel&&t.call(e,r,33084,n.baseLevel),n.maxLevel&&t.call(e,r,33085,n.maxLevel)}function we(e,r,t){var n=t.target||E;e.bindTexture(n,r),xe(e,n,e.texParameteri,t)}function he(e,r,t){xe(e,r,e.samplerParameteri,t)}function Fe(e,r){var t=e.createSampler();return he(e,t,r),t}function Ee(e,r,t,n,o,u){t=t||s.textureOptions,u=u||p;var i=t.target||E;if(n=n||t.width,o=o||t.height,e.bindTexture(i,r),fe(e,n,o,u))e.generateMipmap(i);else{var a=ce(u)?9729:9728;e.texParameteri(i,S,a),e.texParameteri(i,M,a),e.texParameteri(i,R,F),e.texParameteri(i,P,F)}}function Ae(e){return!0===e.auto||void 0===e.auto&&void 0===e.level}function je(e,r){return(r=r||{}).cubeFaceOrder||[_,34070,34071,34072,34073,34074]}function Oe(e,r){var t=je(0,r).map((function(e,r){return{face:e,ndx:r}}));return t.sort((function(e,r){return e.face-r.face})),t}function _e(e,r,t,n){var o=(n=n||s.textureOptions).target||E,u=n.level||0,i=t.width,a=t.height,f=n.internalFormat||n.format||p,c=ie(f),l=n.format||c.format,y=n.type||c.type;if(be(e,n),e.bindTexture(o,r),o===A){var b,m,d=t.width,x=t.height;if(d/6===x)b=x,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===d)b=d,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(d/3==x/2)b=d/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else{if(d/2!=x/3)throw"can't figure out cube map from element: "+(t.src?t.src:t.nodeName);b=d/2,m=[0,0,1,0,0,1,1,1,0,2,1,2]}var w=v();w?(w.canvas.width=b,w.canvas.height=b,i=b,a=b,Oe(0,n).forEach((function(r){var n=m[2*r.ndx+0]*b,o=m[2*r.ndx+1]*b;w.drawImage(t,n,o,b,b,0,0,b,b),e.texImage2D(r.face,u,f,l,y,w.canvas)})),w.canvas.width=1,w.canvas.height=1):"undefined"!=typeof createImageBitmap&&(i=b,a=b,Oe(0,n).forEach((function(c){var s=m[2*c.ndx+0]*b,v=m[2*c.ndx+1]*b;e.texImage2D(c.face,u,f,b,b,0,l,y,null),createImageBitmap(t,s,v,b,b,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then((function(t){be(e,n),e.bindTexture(o,r),e.texImage2D(c.face,u,f,l,y,t),me(e,n),Ae(n)&&Ee(e,r,n,i,a,f)}))})))}else if(o===j||o===O){var h=Math.min(t.width,t.height),F=Math.max(t.width,t.height),_=F/h;if(_%1!=0)throw"can not compute 3D dimensions of element";var S=t.width===F?1:0,M=t.height===F?1:0;pe(e),e.pixelStorei(T,1),e.pixelStorei(g,t.width),e.pixelStorei(z,0),e.pixelStorei(k,0),e.texImage3D(o,u,f,h,h,h,0,l,y,null);for(var R=0;R<_;++R){var P=R*h*S,W=R*h*M;e.pixelStorei(U,P),e.pixelStorei(C,W),e.texSubImage3D(o,u,0,0,R,h,h,1,l,y,t)}de(e)}else e.texImage2D(o,u,f,l,y,t);me(e,n),Ae(n)&&Ee(e,r,n,i,a,f),we(e,r,n)}function Se(){}function Me(e,r){return void 0!==r||function(e){if("undefined"!=typeof document){var r=document.createElement("a");return r.href=e,r.hostname===location.hostname&&r.port===location.port&&r.protocol===location.protocol}var t=new URL(location.href).origin;return new URL(e,location.href).origin===t}(e)?r:"anonymous"}function Re(e){return"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof ImageData&&e instanceof ImageData||"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}function Pe(e,r,t){return Re(e)?(setTimeout((function(){t(null,e)})),e):function(e,r,t){var n;if(t=t||Se,r=void 0!==r?r:s.crossOrigin,r=Me(e,r),"undefined"!=typeof Image){n=new Image,void 0!==r&&(n.crossOrigin=r);var o=function(){n.removeEventListener("error",u),n.removeEventListener("load",a),n=null},u=function(){var r="couldn't load image: "+e;i.error(r),t(r,n),o()},a=function(){t(null,n),o()};return n.addEventListener("error",u),n.addEventListener("load",a),n.src=e,n}if("undefined"!=typeof ImageBitmap){var f,c,l=function(){t(f,c)},y={};r&&(y.mode="cors"),fetch(e,y).then((function(e){if(!e.ok)throw e;return e.blob()})).then((function(e){return createImageBitmap(e,{premultiplyAlpha:"none",colorSpaceConversion:"none"})})).then((function(e){c=e,setTimeout(l)})).catch((function(e){f=e,setTimeout(l)})),n=null}return n}(e,r,t)}function Te(e,r,t){var n=(t=t||s.textureOptions).target||E;if(e.bindTexture(n,r),!1!==t.color){var o=function(e){return e=e||s.textureColor,y(e)?e:new Uint8Array([255*e[0],255*e[1],255*e[2],255*e[3]])}(t.color);if(n===A)for(var u=0;u<6;++u)e.texImage2D(_+u,0,p,1,1,0,p,G,o);else n===j||n===O?e.texImage3D(n,0,p,1,1,1,0,p,G,o):e.texImage2D(n,0,p,1,1,0,p,G,o)}}function ge(e,r,t,n){return n=n||Se,t=t||s.textureOptions,Te(e,r,t),Pe((t=Object.assign({},t)).src,t.crossOrigin,(function(o,u){o?n(o,r,u):(_e(e,r,u,t),n(null,r,u))}))}function ze(e,r,t,n){n=n||Se;var o=t.src;if(6!==o.length)throw"there must be 6 urls for a cubemap";var u=t.level||0,i=t.internalFormat||t.format||p,a=ie(i),f=t.format||a.format,c=t.type||G,l=t.target||E;if(l!==A)throw"target must be TEXTURE_CUBE_MAP";Te(e,r,t),t=Object.assign({},t);var s,y=6,v=[],b=je(0,t);s=o.map((function(o,a){return Pe(o,t.crossOrigin,(m=b[a],function(o,a){--y,o?v.push(o):a.width!==a.height?v.push("cubemap face img is not a square: "+a.src):(be(e,t),e.bindTexture(l,r),5===y?je().forEach((function(r){e.texImage2D(r,u,i,f,c,a)})):e.texImage2D(m,u,i,f,c,a),me(e,t),Ae(t)&&e.generateMipmap(l)),0===y&&n(v.length?v:void 0,r,s)}));var m}))}function Ue(e,r,t,n){n=n||Se;var o=t.src,u=t.internalFormat||t.format||p,i=ie(u),a=t.format||i.format,f=t.type||G,c=t.target||O;if(c!==j&&c!==O)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Te(e,r,t),t=Object.assign({},t);var l,s=o.length,y=[],b=t.level||0,m=t.width,d=t.height,x=o.length,w=!0;l=o.map((function(o,i){return Pe(o,t.crossOrigin,(p=i,function(o,i){if(--s,o)y.push(o);else{if(be(e,t),e.bindTexture(c,r),w){w=!1,m=t.width||i.width,d=t.height||i.height,e.texImage3D(c,b,u,m,d,x,0,a,f,null);for(var h=0;h<x;++h)e.texSubImage3D(c,b,0,0,h,m,d,1,a,f,i)}else{var F,E=i;i.width===m&&i.height===d||(E=(F=v()).canvas,F.canvas.width=m,F.canvas.height=d,F.drawImage(i,0,0,m,d)),e.texSubImage3D(c,b,0,0,p,m,d,1,a,f,E),F&&E===F.canvas&&(F.canvas.width=0,F.canvas.height=0)}me(e,t),Ae(t)&&e.generateMipmap(c)}0===s&&n(y.length?y:void 0,r,l)}));var p}))}function Ce(e,r,t,n){var i=(n=n||s.textureOptions).target||E;e.bindTexture(i,r);var a=n.width,f=n.height,c=n.depth,l=n.level||0,v=n.internalFormat||n.format||p,b=ie(v),m=n.format||b.format,d=n.type||le(0,t,b.type);if(y(t))t instanceof Uint8ClampedArray&&(t=new Uint8Array(t.buffer));else{var x=u.getTypedArrayTypeForGLType(d);t=new x(t)}var w,h=ue(v,d),F=t.byteLength/h;if(F%1)throw"length wrong size for format: "+o.glEnumToString(e,m);if(i===j||i===O)if(a||f||c)!a||f&&c?!f||a&&c?(w=se(0,i,a,f,F/c),a=w.width,f=w.height):(w=se(0,i,a,c,F/f),a=w.width,c=w.height):(w=se(0,i,f,c,F/a),f=w.width,c=w.height);else{var _=Math.cbrt(F);if(_%1!=0)throw"can't guess cube size of array of numElements: "+F;a=_,f=_,c=_}else w=se(0,i,a,f,F),a=w.width,f=w.height;if(pe(e),e.pixelStorei(T,n.unpackAlignment||1),be(e,n),i===A){var S=F/6*(h/t.BYTES_PER_ELEMENT);Oe(0,n).forEach((function(r){var n=S*r.ndx,o=t.subarray(n,n+S);e.texImage2D(r.face,l,v,a,f,0,m,d,o)}))}else i===j||i===O?e.texImage3D(i,l,v,a,f,c,0,m,d,t):e.texImage2D(i,l,v,a,f,0,m,d,t);return me(e,n),de(e),{width:a,height:f,depth:c,type:d}}function ke(e,r,t){var n=t.target||E;e.bindTexture(n,r);var o=t.level||0,u=t.internalFormat||t.format||p,i=ie(u),a=t.format||i.format,f=t.type||i.type;if(be(e,t),n===A)for(var c=0;c<6;++c)e.texImage2D(_+c,o,u,t.width,t.height,0,a,f,null);else n===j||n===O?e.texImage3D(n,o,u,t.width,t.height,t.depth,0,a,f,null):e.texImage2D(n,o,u,t.width,t.height,0,a,f,null);me(e,t)}function We(e,r,t){t=t||Se,r=r||s.textureOptions;var n=e.createTexture(),o=r.target||E,u=r.width||1,i=r.height||1,a=r.internalFormat||p;e.bindTexture(o,n),o===A&&(e.texParameteri(o,R,F),e.texParameteri(o,P,F));var f=r.src;if(f)if("function"==typeof f&&(f=f(e,r)),"string"==typeof f)ge(e,n,r,t);else if(y(f)||Array.isArray(f)&&("number"==typeof f[0]||Array.isArray(f[0])||y(f[0]))){var c=Ce(e,n,f,r);u=c.width,i=c.height}else Array.isArray(f)&&("string"==typeof f[0]||Re(f[0]))?o===A?ze(e,n,r,t):Ue(e,n,r,t):(_e(e,n,f,r),u=f.width,i=f.height);else ke(e,n,r);return Ae(r)&&Ee(e,n,r,u,i,a),we(e,n,r),n}},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0;var o={m4:!0,v3:!0,primitives:!0};r.primitives=r.v3=r.m4=void 0;var u=l(t(5));r.m4=u;var i=l(t(2));r.v3=i;var a=l(t(9));r.primitives=a;var f=t(10);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(t,u,i):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=f[e]))}))},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.create3DFVertices=R,r.createAugmentedTypedArray=b,r.createCubeVertices=_,r.createPlaneVertices=A,r.createSphereVertices=j,r.createTruncatedConeVertices=S,r.createXYQuadVertices=E,r.createCrescentVertices=P,r.createCylinderVertices=T,r.createTorusVertices=g,r.createDiscVertices=z,r.deindexVertices=function(e){var r=e.indices,t={},n=r.length;return Object.keys(e).filter(m).forEach((function(o){for(var u=e[o],i=u.numComponents,a=b(i,n,u.constructor),f=0;f<n;++f)for(var c=r[f]*i,l=0;l<i;++l)a.push(u[c+l]);t[o]=a})),t},r.flattenNormals=function(e){if(e.indices)throw new Error("can not flatten normals of indexed vertices. deindex them first");for(var r=e.normal,t=r.length,n=0;n<t;n+=9){var o=r[n+0],u=r[n+1],i=r[n+2],a=r[n+3],f=r[n+4],c=r[n+5],l=r[n+6],s=r[n+7],y=r[n+8],v=o+a+l,b=u+f+s,m=i+c+y,p=Math.sqrt(v*v+b*b+m*m);v/=p,b/=p,m/=p,r[n+0]=v,r[n+1]=b,r[n+2]=m,r[n+3]=v,r[n+4]=b,r[n+5]=m,r[n+6]=v,r[n+7]=b,r[n+8]=m}return e},r.makeRandomVertexColors=function(e,r){r=r||{};var t=e.position.numElements,n=b(4,t,Uint8Array),o=r.rand||function(e,r){return r<3?(t=256,Math.random()*t|0):255;var t};if(e.color=n,e.indices)for(var u=0;u<t;++u)n.push(o(u,0),o(u,1),o(u,2),o(u,3));else for(var i=r.vertsPerColor||3,a=t/i,f=0;f<a;++f)for(var c=[o(f,0),o(f,1),o(f,2),o(f,3)],l=0;l<i;++l)n.push(c);return e},r.reorientDirections=x,r.reorientNormals=w,r.reorientPositions=h,r.reorientVertices=F,r.concatVertices=function(e){for(var r,t={},n=function(n){var o=e[n];Object.keys(o).forEach((function(e){t[e]||(t[e]=[]),r||"indices"===e||(r=e);var n=o[e],u=y(n,e),i=s(n).length/u;t[e].push(i)}))},o=0;o<e.length;++o)n(o);var u=t[r],i={};return Object.keys(t).forEach((function(r){var t=function(r){for(var t,n=0,o=0;o<e.length;++o){var u=e[o][r];n+=s(u).length,t&&!u.data||(t=u)}return{length:n,spec:t}}(r),n=I(t.spec,t.length);!function(r,t,n){for(var o=0,u=0,i=0;i<e.length;++i){var a=e[i][r],f=s(a);"indices"===r?(W(f,n,u,o),o+=t[i]):W(f,n,u),u+=f.length}}(r,u,s(n)),i[r]=n})),i},r.duplicateVertices=function(e){var r={};return Object.keys(e).forEach((function(t){var n=e[t],o=s(n),u=I(n,o.length);W(o,s(u),0),r[t]=u})),r},r.createDiscBuffers=r.createDiscBufferInfo=r.createTorusBuffers=r.createTorusBufferInfo=r.createCylinderBuffers=r.createCylinderBufferInfo=r.createCrescentBuffers=r.createCrescentBufferInfo=r.createCresentVertices=r.createCresentBuffers=r.createCresentBufferInfo=r.createXYQuadBuffers=r.createXYQuadBufferInfo=r.createTruncatedConeBuffers=r.createTruncatedConeBufferInfo=r.createSphereBuffers=r.createSphereBufferInfo=r.createPlaneBuffers=r.createPlaneBufferInfo=r.createCubeBuffers=r.createCubeBufferInfo=r.create3DFBuffers=r.create3DFBufferInfo=void 0;var o=l(t(6)),u=l(t(0)),i=l(t(1)),a=l(t(5)),f=l(t(2));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(t,u,i):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}var s=o.getArray_,y=o.getNumComponents_;function v(e,r){var t=0;return e.push=function(){for(var r=0;r<arguments.length;++r){var n=arguments[r];if(n instanceof Array||i.isArrayBuffer(n))for(var o=0;o<n.length;++o)e[t++]=n[o];else e[t++]=n}},e.reset=function(e){t=e||0},e.numComponents=r,Object.defineProperty(e,"numElements",{get:function(){return this.length/this.numComponents|0}}),e}function b(e,r,t){return v(new(t||Float32Array)(e*r),e)}function m(e){return"indices"!==e}function p(e,r,t){for(var n=e.length,o=new Float32Array(3),u=0;u<n;u+=3)t(r,[e[u],e[u+1],e[u+2]],o),e[u]=o[0],e[u+1]=o[1],e[u+2]=o[2]}function d(e,r,t){t=t||f.create();var n=r[0],o=r[1],u=r[2];return t[0]=n*e[0]+o*e[1]+u*e[2],t[1]=n*e[4]+o*e[5]+u*e[6],t[2]=n*e[8]+o*e[9]+u*e[10],t}function x(e,r){return p(e,r,a.transformDirection),e}function w(e,r){return p(e,a.inverse(r),d),e}function h(e,r){return p(e,r,a.transformPoint),e}function F(e,r){return Object.keys(e).forEach((function(t){var n=e[t];t.indexOf("pos")>=0?h(n,r):t.indexOf("tan")>=0||t.indexOf("binorm")>=0?x(n,r):t.indexOf("norm")>=0&&w(n,r)})),e}function E(e,r,t){return e=e||2,{position:{numComponents:2,data:[(r=r||0)+-1*(e*=.5),(t=t||0)+-1*e,r+1*e,t+-1*e,r+-1*e,t+1*e,r+1*e,t+1*e]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function A(e,r,t,n,o){e=e||1,r=r||1,t=t||1,n=n||1,o=o||a.identity();for(var u=(t+1)*(n+1),i=b(3,u),f=b(3,u),c=b(2,u),l=0;l<=n;l++)for(var s=0;s<=t;s++){var y=s/t,v=l/n;i.push(e*y-.5*e,0,r*v-.5*r),f.push(0,1,0),c.push(y,v)}for(var m=t+1,p=b(3,t*n*2,Uint16Array),d=0;d<n;d++)for(var x=0;x<t;x++)p.push((d+0)*m+x,(d+1)*m+x,(d+0)*m+x+1),p.push((d+1)*m+x,(d+1)*m+x+1,(d+0)*m+x+1);return F({position:i,normal:f,texcoord:c,indices:p},o)}function j(e,r,t,n,o,u,i){if(r<=0||t<=0)throw new Error("subdivisionAxis and subdivisionHeight must be > 0");n=n||0,u=u||0;for(var a=(o=o||Math.PI)-n,f=(i=i||2*Math.PI)-u,c=(r+1)*(t+1),l=b(3,c),s=b(3,c),y=b(2,c),v=0;v<=t;v++)for(var m=0;m<=r;m++){var p=m/r,d=v/t,x=f*p+u,w=a*d+n,h=Math.sin(x),F=Math.cos(x),E=Math.sin(w),A=F*E,j=Math.cos(w),O=h*E;l.push(e*A,e*j,e*O),s.push(A,j,O),y.push(1-p,d)}for(var _=r+1,S=b(3,r*t*2,Uint16Array),M=0;M<r;M++)for(var R=0;R<t;R++)S.push((R+0)*_+M,(R+0)*_+M+1,(R+1)*_+M),S.push((R+1)*_+M,(R+0)*_+M+1,(R+1)*_+M+1);return{position:l,normal:s,texcoord:y,indices:S}}var O=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];function _(e){for(var r=(e=e||1)/2,t=[[-r,-r,-r],[+r,-r,-r],[-r,+r,-r],[+r,+r,-r],[-r,-r,+r],[+r,-r,+r],[-r,+r,+r],[+r,+r,+r]],n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],o=[[1,0],[0,0],[0,1],[1,1]],u=b(3,24),i=b(3,24),a=b(2,24),f=b(3,12,Uint16Array),c=0;c<6;++c){for(var l=O[c],s=0;s<4;++s){var y=t[l[s]],v=n[c],m=o[s];u.push(y),i.push(v),a.push(m)}var p=4*c;f.push(p+0,p+1,p+2),f.push(p+0,p+2,p+3)}return{position:u,normal:i,texcoord:a,indices:f}}function S(e,r,t,n,o,u,i){if(n<3)throw new Error("radialSubdivisions must be 3 or greater");if(o<1)throw new Error("verticalSubdivisions must be 1 or greater");for(var a=void 0===u||u,f=void 0===i||i,c=(a?2:0)+(f?2:0),l=(n+1)*(o+1+c),s=b(3,l),y=b(3,l),v=b(2,l),m=b(3,n*(o+c/2)*2,Uint16Array),p=n+1,d=Math.atan2(e-r,t),x=Math.cos(d),w=Math.sin(d),h=o+(f?2:0),F=a?-2:0;F<=h;++F){var E=F/o,A=t*E,j=void 0;F<0?(A=0,E=1,j=e):F>o?(A=t,E=1,j=r):j=e+F/o*(r-e),-2!==F&&F!==o+2||(j=0,E=0),A-=t/2;for(var O=0;O<p;++O){var _=Math.sin(O*Math.PI*2/n),S=Math.cos(O*Math.PI*2/n);s.push(_*j,A,S*j),F<0?y.push(0,-1,0):F>o?y.push(0,1,0):0===j?y.push(0,0,0):y.push(_*x,w,S*x),v.push(O/n,1-E)}}for(var M=0;M<o+c;++M)if(!(1===M&&a||M===o+c-2&&f))for(var R=0;R<n;++R)m.push(p*(M+0)+0+R,p*(M+0)+1+R,p*(M+1)+1+R),m.push(p*(M+0)+0+R,p*(M+1)+1+R,p*(M+1)+0+R);return{position:s,normal:y,texcoord:v,indices:m}}function M(e,r){r=r||[];for(var t=[],n=0;n<e.length;n+=4){var o=e[n],u=e.slice(n+1,n+4);u.push.apply(u,r);for(var i=0;i<o;++i)t.push.apply(t,u)}return t}function R(){var e=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],r=M([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),t=M([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),n=e.length/3,o={position:b(3,n),texcoord:b(2,n),normal:b(3,n),color:b(4,n,Uint8Array),indices:b(3,n/3,Uint16Array)};o.position.push(e),o.texcoord.push([.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0]),o.normal.push(r),o.color.push(t);for(var u=0;u<n;++u)o.indices.push(u);return o}function P(e,r,t,n,o,u,i){if(o<=0)throw new Error("subdivisionDown must be > 0");var a=(i=i||1)-(u=u||0),c=2*(o+1)*4,l=b(3,c),s=b(3,c),y=b(2,c);function v(e,r,t){return e+(r-e)*t}function m(r,t,i,c,b,m){for(var p=0;p<=o;p++){var d=t/1,x=p/o,w=2*(d-.5),h=(u+x*a)*Math.PI,F=Math.sin(h),E=Math.cos(h),A=v(e,r,F),j=w*n,O=E*e,_=F*A;l.push(j,O,_);var S=f.add(f.multiply([0,F,E],i),c);s.push(S),y.push(d*b+m,x)}}for(var p=0;p<2;p++){var d=2*(p/1-.5);m(r,p,[1,1,1],[0,0,0],1,0),m(r,p,[0,0,0],[d,0,0],0,0),m(t,p,[1,1,1],[0,0,0],1,0),m(t,p,[0,0,0],[d,0,0],0,1)}var x=b(3,2*o*4,Uint16Array);function w(e,r){for(var t=0;t<o;++t)x.push(e+t+0,e+t+1,r+t+0),x.push(e+t+1,r+t+1,r+t+0)}var h=o+1;return w(0*h,4*h),w(5*h,7*h),w(6*h,2*h),w(3*h,1*h),{position:l,normal:s,texcoord:y,indices:x}}function T(e,r,t,n,o,u){return S(e,e,r,t,n,o,u)}function g(e,r,t,n,o,u){if(t<3)throw new Error("radialSubdivisions must be 3 or greater");if(n<3)throw new Error("verticalSubdivisions must be 3 or greater");o=o||0;for(var i=(u=u||2*Math.PI)-o,a=t+1,f=n+1,c=a*f,l=b(3,c),s=b(3,c),y=b(2,c),v=b(3,t*n*2,Uint16Array),m=0;m<f;++m)for(var p=m/n,d=p*Math.PI*2,x=Math.sin(d),w=e+x*r,h=Math.cos(d),F=h*r,E=0;E<a;++E){var A=E/t,j=o+A*i,O=Math.sin(j),_=Math.cos(j),S=O*w,M=_*w,R=O*x,P=_*x;l.push(S,F,M),s.push(R,h,P),y.push(A,1-p)}for(var T=0;T<n;++T)for(var g=0;g<t;++g){var z=1+g,U=1+T;v.push(a*T+g,a*U+g,a*T+z),v.push(a*U+g,a*U+z,a*T+z)}return{position:l,normal:s,texcoord:y,indices:v}}function z(e,r,t,n,o){if(r<3)throw new Error("divisions must be at least 3");o=o||1,n=n||0;for(var u=(r+1)*((t=t||1)+1),i=b(3,u),a=b(3,u),f=b(2,u),c=b(3,t*r*2,Uint16Array),l=0,s=e-n,y=r+1,v=0;v<=t;++v){for(var m=n+s*Math.pow(v/t,o),p=0;p<=r;++p){var d=2*Math.PI*p/r,x=m*Math.cos(d),w=m*Math.sin(d);if(i.push(x,0,w),a.push(0,1,0),f.push(1-p/r,v/t),v>0&&p!==r){var h=l+(p+1),F=l+p,E=l+p-y,A=l+(p+1)-y;c.push(h,F,E),c.push(h,E,A)}}l+=r+1}return{position:i,normal:a,texcoord:f,indices:c}}function U(e){return function(r){var t=e.apply(this,Array.prototype.slice.call(arguments,1));return o.createBuffersFromArrays(r,t)}}function C(e){return function(r){var t=e.apply(null,Array.prototype.slice.call(arguments,1));return o.createBufferInfoFromArrays(r,t)}}var k=["numComponents","size","type","normalize","stride","offset","attrib","name","attribName"];function W(e,r,t,n){n=n||0;for(var o=e.length,u=0;u<o;++u)r[t+u]=e[u]+n}function I(e,r){var t=s(e),n=new t.constructor(r),o=n;return t.numComponents&&t.numElements&&v(n,t.numComponents),e.data&&(o={data:n},u.copyNamedProperties(k,e,o)),o}var B=C(R);r.create3DFBufferInfo=B;var L=U(R);r.create3DFBuffers=L;var G=C(_);r.createCubeBufferInfo=G;var X=U(_);r.createCubeBuffers=X;var D=C(A);r.createPlaneBufferInfo=D;var N=U(A);r.createPlaneBuffers=N;var H=C(j);r.createSphereBufferInfo=H;var q=U(j);r.createSphereBuffers=q;var V=C(S);r.createTruncatedConeBufferInfo=V;var Y=U(S);r.createTruncatedConeBuffers=Y;var $=C(E);r.createXYQuadBufferInfo=$;var K=U(E);r.createXYQuadBuffers=K;var Z=C(P);r.createCrescentBufferInfo=Z;var J=U(P);r.createCrescentBuffers=J;var Q=C(T);r.createCylinderBufferInfo=Q;var ee=U(T);r.createCylinderBuffers=ee;var re=C(g);r.createTorusBufferInfo=re;var te=U(g);r.createTorusBuffers=te;var ne=C(z);r.createDiscBufferInfo=ne;var oe=U(z);r.createDiscBuffers=oe;var ue=Z;r.createCresentBufferInfo=ue;var ie=J;r.createCresentBuffers=ie;var ae=P;r.createCresentVertices=ae},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0;var o={addExtensionsToContext:!0,getContext:!0,getWebGLContext:!0,resizeCanvasToDisplaySize:!0,setDefaults:!0,attributes:!0,textures:!0,utils:!0,draw:!0,framebuffers:!0,programs:!0,typedarrays:!0,vertexArrays:!0};r.addExtensionsToContext=h,r.getContext=function(e,r){return function(e,r){for(var t=["webgl2","webgl","experimental-webgl"],n=null,o=0;o<t.length;++o)if(n=e.getContext(t[o],r)){p.addExtensionsToContext&&h(n);break}return n}(e,r)},r.getWebGLContext=function(e,r){return function(e,r){for(var t=["webgl","experimental-webgl"],n=null,o=0;o<t.length;++o)if(n=e.getContext(t[o],r)){p.addExtensionsToContext&&h(n);break}return n}(e,r)},r.resizeCanvasToDisplaySize=function(e,r){r=r||1,r=Math.max(0,r);var t=e.clientWidth*r|0,n=e.clientHeight*r|0;if(e.width!==t||e.height!==n)return e.width=t,e.height=n,!0;return!1},r.setDefaults=function(e){a.copyExistingProperties(e,p),u.setAttributeDefaults_(e),i.setTextureDefaults_(e)},r.vertexArrays=r.typedarrays=r.programs=r.framebuffers=r.draw=r.utils=r.textures=r.attributes=void 0;var u=m(t(6));r.attributes=u,Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=u[e]))}));var i=m(t(7));r.textures=i,Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=i[e]))}));var a=m(t(0)),f=m(t(3));r.utils=f,Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=f[e]))}));var c=m(t(11));r.draw=c,Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=c[e]))}));var l=m(t(12));r.framebuffers=l,Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=l[e]))}));var s=m(t(4));r.programs=s,Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=s[e]))}));var y=m(t(1));r.typedarrays=y,Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=y[e]))}));var v=m(t(13));function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=b();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(t,u,i):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}r.vertexArrays=v,Object.keys(v).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(r[e]=v[e]))}));var p={addExtensionsToContext:!0};var d=/^(.*?)_/;function x(e,r){f.glEnumToString(e,0);var t=e.getExtension(r);if(t){var n={},o=d.exec(r)[1],u="_"+o;for(var i in t){var c=t[i],l="function"==typeof c,s=l?o:u,y=i;i.endsWith(s)&&(y=i.substring(0,i.length-s.length)),void 0!==e[y]?l||e[y]===c||a.warn(y,e[y],c,i):l?e[y]=function(e){return function(){return e.apply(t,arguments)}}(c):(e[y]=c,n[y]=c)}n.constructor={name:t.constructor.name},f.glEnumToString(n,0)}return t}var w=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_float","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_disjoint_timer_query_webgl2","EXT_frag_depth","EXT_sRGB","EXT_shader_texture_lod","EXT_texture_filter_anisotropic","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_atc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_depth_texture","WEBGL_draw_buffers"];function h(e){for(var r=0;r<w.length;++r)x(e,w[r])}},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.drawBufferInfo=i,r.drawObjectList=function(e,r){var t=null,n=null;r.forEach((function(r){if(!1!==r.active){var u=r.programInfo,a=r.vertexArrayInfo||r.bufferInfo,f=!1,c=void 0===r.type?4:r.type;u!==t&&(t=u,e.useProgram(u.program),f=!0),(f||a!==n)&&(n&&n.vertexArrayObject&&!a.vertexArrayObject&&e.bindVertexArray(null),n=a,o.setBuffersAndAttributes(e,u,a)),o.setUniforms(u,r.uniforms),i(e,a,c,r.count,r.offset,r.instanceCount)}})),n&&n.vertexArrayObject&&e.bindVertexArray(null)};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}t.default=e,r&&r.set(e,t);return t}(t(4));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e,r,t,n,o,u){t=void 0===t?4:t;var i=r.indices,a=r.elementType,f=void 0===n?r.numElements:n;o=void 0===o?0:o,a||i?void 0!==u?e.drawElementsInstanced(t,f,void 0===a?5123:r.elementType,o,u):e.drawElements(t,f,void 0===a?5123:r.elementType,o):void 0!==u?e.drawArraysInstanced(t,o,f,u):e.drawArrays(t,o,f)}},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.bindFramebufferInfo=function(e,r,t){t=t||36160,r?(e.bindFramebuffer(t,r.framebuffer),e.viewport(0,0,r.width,r.height)):(e.bindFramebuffer(t,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))},r.createFramebufferInfo=function(e,r,t,n){var i=36160,a=e.createFramebuffer();e.bindFramebuffer(i,a),t=t||e.drawingBufferWidth,n=n||e.drawingBufferHeight;var c=0,m={framebuffer:a,attachments:[],width:t,height:n};return(r=r||y).forEach((function(r){var a=r.attachment,y=r.format,p=function(e){return v[e]}(y);if(p||(p=36064+c++),!a)if(function(e){return b[e]}(y))a=e.createRenderbuffer(),e.bindRenderbuffer(f,a),e.renderbufferStorage(f,y,t,n);else{var d=Object.assign({},r);d.width=t,d.height=n,void 0===d.auto&&(d.auto=!1,d.min=d.min||d.minMag||s,d.mag=d.mag||d.minMag||s,d.wrapS=d.wrapS||d.wrap||l,d.wrapT=d.wrapT||d.wrap||l),a=o.createTexture(e,d)}if(u.isRenderbuffer(e,a))e.framebufferRenderbuffer(i,p,f,a);else{if(!u.isTexture(e,a))throw new Error("unknown attachment type");void 0!==r.layer?e.framebufferTextureLayer(i,p,a,r.level||0,r.layer):e.framebufferTexture2D(i,p,r.target||3553,a,r.level||0)}m.attachments.push(a)})),m},r.resizeFramebufferInfo=function(e,r,t,n,i){n=n||e.drawingBufferWidth,i=i||e.drawingBufferHeight,r.width=n,r.height=i,(t=t||y).forEach((function(t,a){var c=r.attachments[a],l=t.format;if(u.isRenderbuffer(e,c))e.bindRenderbuffer(f,c),e.renderbufferStorage(f,l,n,i);else{if(!u.isTexture(e,c))throw new Error("unknown attachment type");o.resizeTexture(e,c,t,n,i)}}))};var o=a(t(7)),u=a(t(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(t,u,a):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}var f=36161,c=34041,l=33071,s=9729,y=[{format:6408,type:5121,min:s,wrap:l},{format:c}],v={};v[34041]=33306,v[6401]=36128,v[36168]=36128,v[6402]=36096,v[33189]=36096;var b={};b[32854]=!0,b[32855]=!0,b[36194]=!0,b[34041]=!0,b[33189]=!0,b[6401]=!0,b[36168]=!0},function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.__esModule=!0,r.createVertexArrayInfo=function(e,r,t){var n=e.createVertexArray();e.bindVertexArray(n),r.length||(r=[r]);return r.forEach((function(r){o.setBuffersAndAttributes(e,r,t)})),e.bindVertexArray(null),{numElements:t.numElements,elementType:t.elementType,vertexArrayObject:n}},r.createVAOAndSetAttributes=i,r.createVAOFromBufferInfo=function(e,r,t){return i(e,r.attribSetters||r,t.attribs,t.indices)};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}t.default=e,r&&r.set(e,t);return t}(t(4));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e,r,t,n){var u=e.createVertexArray();return e.bindVertexArray(u),o.setAttributes(r,t),n&&e.bindBuffer(34963,n),e.bindVertexArray(null),u}}])}));// ---------- END twgl-full.min.js ------

// ---------- lz-string/libs/lz-string.min.js ----------
var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);
// ---------- END lz-string/libs/lz-string.min.js ------

// ---------- webgl-common/common.js ----------
async function loadTwgl() {
    const p = new Promise((resolve) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://twgljs.org/dist/4.x/twgl-full.min.js";
        script.onreadystatechange = resolve;
        script.onload = resolve;
        document.head.appendChild(script);
    });
    return p;
}

_fileCache = {}
async function getFile(url) {
    if (url in _fileCache)
        return _fileCache[url];

    const resp = await fetch(url);
    if (resp.status !== 200)
        throw("Could not find shader " + url);

    let fileContents = "";
    const reader = resp.body.getReader();
    let done = false;
    while (!done) {
        let fileBody = await reader.read();
        if (!fileBody.value) {
            done = true;
        } else {
            for (let v of fileBody.value)
                fileContents += String.fromCharCode(v);
        }
    }
    _fileCache[url] = fileContents;
    return fileContents;
}

/**
 * @param gl webgl2 instance
 * @param dimensions [width, height] tuple for texture dimensions
 * @param data - can be null, if not will be used as the source for the texture
 */
function createTexture(gl, dimensions, data) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0, // level
        gl.RGBA32F, // internal format
        dimensions[0], // width
        dimensions[1], // height
        0, // border
        gl.RGBA, // format
        gl.FLOAT, // type
        data, /* source */);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    return tex;
}

function updateTexture(gl, dimensions, texture, data) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
        gl.TEXTURE_2D,
        0, // level
        gl.RGBA32F, // internal format
        dimensions[0], // width
        dimensions[1], // height
        0, // border
        gl.RGBA, // format
        gl.FLOAT, // type
        data, /* source */)
}

function render(gl) {
    // draw the quad (2 triangles)
    const offset = 0;
    const numVertices = 6;
    gl.drawArrays(gl.TRIANGLES, offset, numVertices);
}

function setupProgram(gl, programInfo, bufferInfo) {
    gl.useProgram(programInfo.program);

    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

}

function enableGlExts(gl) {
    gl.getExtension('OES_texture_float');        // just in case
    gl.getExtension('OES_texture_float_linear');
    ext = gl.getExtension('EXT_color_buffer_float');
    if (!ext) {
        alert("no ext color...");
        throw new Error("!");
    }
}

const vs = `
    #version 300 es
    in vec4 position;
    void main() {
      gl_Position = position;
    }`;

const bufferArrays = {
    position: {
        data: [
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1,
        ],
        numComponents: 2,
    },
};

class FrameBufferManager {
    constructor(gl, dimensions) {
        this.computeDsts = [
            createTexture(gl, dimensions, null),
            createTexture(gl, dimensions, null)
        ];
        this.fb = gl.createFramebuffer();

        this.counter = 0;
        this.gl = gl;
    }

    src() {
        return this.computeDsts[this.counter];
    }

    dst() {
        return this.computeDsts[(this.counter + 1) % 2];
    }

    flipflop() {
        this.counter = this.counter + 1;
        this.counter %= 2;
    }

    bind_dst() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
        this.gl.framebufferTexture2D(
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this.dst(),
            0 /* level */
        );
    }
}
// ---------- END webgl-common/common.js ------

// ---------- build/synth.frag.js ----------
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
uniform int u_stage;

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

vec2 t_coords;

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


/// modulefn: enhance
/// moduletag: color

uniform vec3 u_enhance; /// { "start": [0, 0, 0], "end": [10, 10, 10], "default": [1, 1, 1], "names": ["r", "g", "b"] }

void enhance() {
    color_out.rgb *= u_enhance;
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

    if (abs(r - super_r) < u_sf_thickness) {
        float factor = 1.;
        if (u_sf_smooth_edges) {
            factor = 1. - abs(r - super_r) / u_sf_thickness;
        }

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
    blur();
    break;
case 2:
    enhance();
    break;
case 3:
    gamma_correct();
    break;
case 4:
    hue_shift();
    break;
case 5:
    invert_color();
    break;
case 6:
    noise();
    break;
case 7:
    offset();
    break;
case 8:
    oscillator();
    break;
case 9:
    picture();
    break;
case 10:
    pixelate();
    break;
case 11:
    recolor();
    break;
case 12:
    reduce_colors();
    break;
case 13:
    reflector();
    break;
case 14:
    ripple();
    break;
case 15:
    rotate();
    break;
case 16:
    superformula();
    break;
case 17:
    swirl();
    break;
case 18:
    threshold();
    break;
case 19:
    tile();
    break;
case 20:
    webcam();
    break;
case 21:
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
// ---------- END build/synth.frag.js ------

// ---------- ui.js ----------
function defineEl(name, class_) {
    customElements.define(name + (window.globalprefix || ""), class_);
}

class Function {
    id = 0;
    feedback = 0;
    params = {};
    enable = true;

    constructor(feedback) {
        this.feedback = feedback;
    }
}

function createModal(resolver) {
    const modal = document.createElement('div');
    modal.addEventListener('click', (e) => {
        if (e.target != modal)
            return;
        resolver(undefined);
        modal.remove();
    });

    modal.style.background = "#2b2b2b50";
    modal.style.position = "absolute";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";

    document.body.appendChild(modal);
    return modal;
}

class Type extends HTMLElement {
    name = ""
    range = []
    defaultValue = 0
    shadow = null;
    value = 0

    constructor(range, defaultValue) {
        super();
        this.range = range;
        this.defaultValue = defaultValue;
        this.shadow = this.attachShadow({mode: 'open'});
    }

    save() {
        return undefined;
    }

    load() {
    }
}

class BoolEntry extends Type {
    constructor(defaultValue) {
        super([0, 0], defaultValue);

        this.input = document.createElement('input');
        this.input.id = "generate";
        this.input.type = 'checkbox';
        this.input.checked = defaultValue;
        this.input.addEventListener('change', () => {
            this.value = this.input.checked;
            this.dispatchEvent(new Event('change'));
        });

        this.shadow.appendChild(this.input);
    }

    save() {
        return this.value;
    }

    load(data) {
        // console.log("loading bool", data);
        this.value = data;
        this.input.checked = data;
        this.dispatchEvent(new Event('change'));
    }
}
defineEl('bool-entry', BoolEntry);

class Slider extends Type {
    constructor(range, defaultValue) {
        super(range, defaultValue);

        const container = document.createElement('div');
        container.style = "padding-bottom: 0.5em;"
        const bar = document.createElement('div');
        bar.style = "background: black; width: 10em; height: 1em;";
        this.slider = document.createElement('div');
        this.slider.style = "background: white; height: 1em; width: 1%; position: relative; left: 0em";

        const handler = (e) => {
            if (e.target != bar)
                return;
            const rect = e.target.getBoundingClientRect();
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;

            const x = (clientX - rect.left) / rect.width;
            this.value = x * (this.range[1] - this.range[0]) + this.range[0];
            this.dispatchEvent(new Event('change'));
        };
        bar.addEventListener('mousemove', (e) => { if (e.buttons & 1) handler(e); });
        bar.addEventListener('touchmove', handler);

        bar.appendChild(this.slider);
        container.appendChild(bar);
        this.shadow.appendChild(container);
    }

    set_value(value) {
        const x = (value - this.range[0]) / (this.range[1] - this.range[0]);
        this.slider.style.left = `${x * 10}em`;
    }
}
defineEl('slider-elem', Slider);

class FloatBar extends Type {
    validate(entry) {
        return !isNaN(entry) && entry >= this.range[0] && entry <= this.range[1];
    }

    _set_value(value) {
        this.value = value;
        this.input.value = this.value;
        this.slider.set_value(value);
    }

    set_value(value) {
        this._set_value(value);
        this.dispatchEvent(new Event('change'));
    }

    constructor(range, defaultValue, supressFunctionGen) {
        super(range, defaultValue);

        const container = document.createElement('div');

        this.slider = new Slider(range, defaultValue);
        this.input = document.createElement('input');
        this.input.style.boxShadow = "none";
        this.input.type = "number";
        this.input.min = this.range[0];
        this.input.max = this.range[1];
        this.input.step = (this.range[1] - this.range[0]) / 1000;

        this._set_value(this.defaultValue);

        this.input.addEventListener('change', () => {
            const value = parseFloat(this.input.value);
            if (!this.validate(value)) {
                this.input.style = "color: red";
            } else {
                this.input.style = "";
                this.set_value(value);
            }
        });
        this.slider.addEventListener('change', () => { this.set_value(this.slider.value); });

        const gen_label = document.createElement('label');
        gen_label.for = "generate";
        gen_label.innerText = "function: ";
        this.func_gen = document.createElement('input');
        this.func_gen.id = "generate";
        this.func_gen.type = 'checkbox';
        this.func_select = document.createElement('select');
        const func_modal = document.createElement('button');
        func_modal.innerText = "Edit function";
        Object.keys(generators).forEach((k, i) => {
            const opt = document.createElement('option');
            opt.value = k;
            opt.innerText = k;
            this.func_select.appendChild(opt);
        });

        this.generate = false;
        this.func = generators[this.func_select.value].func;
        this.params = generators[this.func_select.value].params;

        this.func_select.addEventListener('change', () => {
            this.func = generators[this.func_select.value].func;
            this.params = generators[this.func_select.value].params;
        });
        this.func_gen.addEventListener('change', () => {
            this.generate = this.func_gen.checked;
            if (this.generate)
                this.start_generation(0);
        });

        func_modal.addEventListener('click', async () => {
            let resolver = null;
            const p = new Promise(r => { resolver = r; });
            const modal = createModal(resolver);
            const generator = new FunctionGenerator(modal, this.func_select.value, resolver);
            const params = await p;
            generator.remove();
            modal.remove();
            if (!params)
                return;

            this.params = params;
            let needs_restart = false;
            if (!this.generate)
                needs_restart = true;
            this.generate = true;
            this.func_gen.checked = true;
            if (needs_restart)
                this.start_generation(0);
        });

        container.appendChild(this.slider);
        container.appendChild(this.input);
        container.appendChild(document.createElement('br'));
        if (!supressFunctionGen) {
            container.appendChild(gen_label);
            container.appendChild(this.func_gen);
            container.appendChild(this.func_select);
            container.appendChild(func_modal);
        }
        this.shadow.appendChild(container);
    }

    start_generation(time) {
        if (this.generate) {
            this.set_value(this.func(time, this.range, this.params));
            requestAnimationFrame(this.start_generation.bind(this));
        }
    }

    save() {
        const savedata = {
            value: this.value,
        }

        if (this.generate) {
            savedata.generate = this.generate;
            savedata.func = this.func_select.value;
            savedata.params = this.params.save();
        } else {
            savedata.generate = false;
        }
        return savedata;
    }

    load(data) {
        if (data === undefined)
            return;
        // console.log("loading float", data);
        this.set_value(data.value);

        if (data.generate) {
            this.params = new GenParams();
            this.params.load(data.params);

            this.func_select.value = data.func;
            this.func = generators[this.func_select.value].func;
            this.func_gen.checked = true;

            this.generate = true;
            this.start_generation(0);
        }
    }
}
defineEl('float-bar', FloatBar);

class IntEntry extends FloatBar {
    _set_value(value) {
        value = Math.round(value);
        super._set_value(value);
    }

    constructor(range, defaultValue, supressFunctionGen) {
        super(range, defaultValue, supressFunctionGen);
        this.input.step = 1;
    }
}
defineEl('int-entry', IntEntry);

class VecEntry extends Type {
    floats = []

    constructor(nelem, names, range, defaultValue) {
        super(range, defaultValue);
        this.nelem = nelem;
        this.names = names;

        for (let i = 0; i < this.nelem; i++) {
            const entry = new FloatBar(this.range[i], this.defaultValue[i])
            entry.addEventListener('change', () => {
                for (let i = 0; i < this.nelem; i++) {
                    this.value[i] = this.floats[i].value;
                }
                this.dispatchEvent(new Event('change'));
            });
            this.floats.push(entry);

            const container = document.createElement('div');
            const label = document.createElement('label');
            label.for = names[i];
            label.innerText = `${names[i]}: `;
            entry.id = names[i];

            container.appendChild(label);
            container.appendChild(entry);
            this.shadow.appendChild(container);
        }

        this.value = this.defaultValue;
    }

    save() {
        const values = {}
        for (let i = 0; i < this.nelem; i++) {
            values[this.names[i]] = this.floats[i].save();
        }
        return values;
    }

    load(data) {
        if (data === undefined)
            return;
        // console.log("loading vec", data);
        for (let name of Object.keys(data)) {
            const i = this.names.indexOf(name);
            // TODO validate i
            this.floats[i].load(data[name]);
        }
    }
}
defineEl('vec-entry', VecEntry);
// ---------- END ui.js ------

// ---------- customui.js ----------
class Picture_picture_texture extends Type {
    validate() {
        return true;
    }

    customonchange(element) {
        this.synth.stageModules[element.name].params['picture_texture'] = this.tex;
        this.synth.stageModules[element.name].params['picture_dimensions'] = this.dimensions;

        element.args.picture_dimensions.set_value(this.dimensions);
    }

    imgload() {
        this.dimensions = [this.img.width, this.img.height];
        this.tex = createTexture(this.synth.gl, this.dimensions, this.img)
        this.dispatchEvent(new Event('change'));
    }

    constructor(synth) {
        const img = new Image();
        const tex = createTexture(synth.gl, synth.dimensions);
        super(undefined, tex);

        this.tex = tex;
        this.synth = synth;
        this.dimensions = [...synth.dimensions];
        this.img = img;
        this.img.addEventListener('load', () => { this.imgload(); });

        this.el = document.createElement("div");

        this.fileSelect = document.createElement("input");
        this.fileSelect.type = "file";
        this.fileSelect.accept = "image/*";
        this.fileSelect.addEventListener("change", this.uploadImage.bind(this));
        this.el.appendChild(this.fileSelect);

        this.shadow.appendChild(this.el);
    }

    uploadImage() {
        let file = this.fileSelect.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            this.img.src = reader.result;
        };
    }

    save() {
        return this.img.src;
    }

    load(data) {
        this.img.src = data;
    }
}
defineEl('picture-picture-texture', Picture_picture_texture);

class Picture_picture_dimensions extends Type {
    validate() {
        return true;
    }

    constructor(synth) {
        super(undefined, [0, 0]);
        this.data = document.createElement('code');
        this.data.style = 'border: solid 1px; padding: 2px';
        this.data.innerText = synth.dimensions;
        this.shadow.appendChild(this.data);
    }

    set_value(value) {
        this.data.innerText = value;
    }

    save() {
        return undefined;
    }
}
defineEl('picture-picture-dimensions', Picture_picture_dimensions);

class Webcam_webcam_texture extends Type {
    customonchange(element) {
        this.synth.stageModules[element.name].params['webcam_texture'] = this.tex;
        this.synth.stageModules[element.name].params['webcam_dimensions'] = this.dimensions;

        element.args.webcam_dimensions.set_value(this.dimensions);
    }

    constructor(synth) {
        const tex = createTexture(synth.gl, synth.dimensions);
        super(undefined, tex);

        this.tex = tex;
        this.synth = synth;
        this.dimensions = synth.dimensions;
        this.setup();
    }

    async setup() {
        this.video = document.createElement("video");

        let devices = undefined;
        try {
            devices = await navigator.mediaDevices.enumerateDevices();
        } catch (err) {
            alert("Error initializing webcam!");
            throw err;
        }

        devices = devices.filter(d => d.kind === "videoinput");

        this.container = document.createElement("div");

        this.container.innerHTML = `<label for="webcamSelector">Choose a webcam: </label>`
        const selector = document.createElement("select");
        selector.id = "webcamSelector";
        this.container.appendChild(selector);

        devices.forEach(device => {
            const entry = document.createElement("option");
            entry.value = device.deviceId;
            entry.innerHTML = device.label || device.deviceId.substr(0, 10);
            selector.appendChild(entry)
        });

        this.needsUpdate = false;
        const selectVideo = async () => {
            const deviceId = selector.value;

            const constraints = {
                video: { deviceId: deviceId }
            }

            try {
                if (this.video.srcObject) {
                    const stream = this.video.srcObject;
                    stream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                    this.video.srcObject = null;
                }

                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                this.video.srcObject = stream;
                this.video.play();
                this.needsUpdate = true;
            } catch (err) {
                alert("Error initializing webcam! " + err);
                console.log(err);
            }
        }
        selector.onchange = selectVideo;
        selectVideo();

        this.generate = true;
        let f = () => {
            if (!this.video.paused && !this.video.ended) {
                const dimensions = [this.video.videoWidth, this.video.videoHeight];
                if (dimensions[0] && dimensions[1]) {
                    if (this.needsUpdate) {
                        this.dimensions = [this.video.videoWidth, this.video.videoHeight];
                        console.log("UPDATE", this.dimensions, this.video);
                        this.tex = createTexture(this.synth.gl, this.dimensions);
                    }
                    updateTexture(this.synth.gl, this.dimensions, this.tex, this.video);
                    if (this.needsUpdate) {
                        this.needsUpdate = false;
                        this.dispatchEvent(new Event('change'));
                    }
                }
            }

            if (this.generate)
                requestAnimationFrame(f);
        };
        f();

        this.shadow.appendChild(this.container);
    }

    save() {
        return undefined;
    }
}
defineEl('webcam-webcam-texture', Webcam_webcam_texture);

class Webcam_webcam_dimensions extends Picture_picture_dimensions { }
defineEl('webcam-webcam-dimensions', Webcam_webcam_dimensions);

class ReduceColors_reduce_colors_data extends Type {
    customonchange(element) {
        try {
            this.synth.stageModules[element.name].params['reduce_colors_data'] = this.tex;
            this.synth.stageModules[element.name].params['reduce_colors_count'] = this.count;
        } catch (e) {
            console.log("!!!", ...this.synth.stages);
            // TODO custom elements break with meta modules
        }

        element.args.reduce_colors_count.set_value(this.dimensions);
    }

    constructor(synth) {
        const limit = 256;
        const img = new Image();
        const tex = createTexture(synth.gl, [256, 1]);
        super(undefined, tex);

        this.tex = tex;
        this.synth = synth;

        // we waste 1 float for the alpha channel - TODO
        this.data = new Float32Array(4 * 256);
        // this.count = 100;
        this.count = 100;
        this.generate_colors();

        updateTexture(synth.gl, [256, 1], this.tex, this.data);

        this.el = document.createElement("div");
        const btn = document.createElement("button");
        btn.addEventListener('click', () => {
            this.generate_colors();
            this.dispatchEvent(new Event('change'));
        });
        btn.innerText = "Re-pick colors";
        this.el.appendChild(btn);

        this.el.appendChild(document.createElement('br'));
        const label = document.createElement("label");
        label.innerText = "Number of colors: ";
        label.for = "num_colors";
        const input = new IntEntry([1, 256], 100);
        input.id = "num_colors";
        input.addEventListener('change', () => { this.set_count(input.value); });
        this.el.appendChild(label);
        this.el.appendChild(input);

        this.shadow.appendChild(this.el);
    }

    set_count(value) {
        this.count = value;
        this.generate_colors();
        // console.log("New count", input.value);
        this.dispatchEvent(new Event('change'));

    }

    generate_colors() {
        // console.log("Regenerating", this.count);
        for (let i = 0; i < 4 * this.count; i++)
            this.data[i] = Math.random();
        updateTexture(this.synth.gl, [256, 1], this.tex, this.data);
    }

    save() {
        const data = [];
        for (let i = 0; i < 4 * this.count; i++)
            data.push(this.data[i])
        return [...data];
    }

    load(data) {
        for (let i = 0; i < data.length; i++)
            this.data[i] = data[i];
        this.count = data.length / 4;
        updateTexture(this.synth.gl, [256, 1], this.tex, this.data);
        this.dispatchEvent(new Event('change'));
    }
}
defineEl('reducecolors-reduce-colors-data', ReduceColors_reduce_colors_data);

class ReduceColors_reduce_colors_count extends Type {
    constructor(synth) {
        super(undefined, 100);
        this.data = document.createElement('code');
        this.data.style = 'border: solid 1px; padding: 2px';
        this.data.innerText = 100;
        this.shadow.appendChild(this.data);
    }

    set_value(value) {
        this.data.innerText = value;
    }

    save() {
        return undefined;
    }
}
defineEl('reducecolors-reduce-colors-count', ReduceColors_reduce_colors_count);
// ---------- END customui.js ------

// ---------- function_generator.js ----------
class GenParams {
    params = {}
    get() {
        return this.params;
    }

    save() {
        return this.params;
    }

    load(params) {
        this.params = params;
    }
}

class DefaultSinParams extends GenParams {
    params = {freq: 1, c: 0};
}


class DefaultStepParams extends GenParams {
    params = {freq: 1};
}

const sin_generator = (t, range, genparams) => {
    const params = genparams.get();
    let value = Math.sin(params.freq * 2 * Math.PI * t / 1000 + params.c);
    value = (value + 1) / 2;
    value = value * (range[1] - range[0]) + range[0];
    return value;
};

const step_generator = (t, range, genparams) => {
    const params = genparams.get();
    return ((t / 1000 * params.freq) % (range[1] - range[0])) + range[0];
};

const generators = {
    sin: { func: sin_generator, params: new DefaultSinParams() },
    step: { func: step_generator, params: new DefaultStepParams() }
}

class FunctionGenerator{
    cancel = false;

    constructor (parentEl, current, resolver) {
        const container = document.createElement('div');
        container.className = "functiongen";

        const header = document.createElement("h1");
        header.innerText = "Function Generator";
        container.appendChild(header);
        container.appendChild(document.createElement('hr'));

        this.graph = document.createElement('canvas');
        this.graph.className = "functioncanvas";
        this.graph.width = 1000;
        this.graph.height = 1000;
        container.appendChild(this.graph);

        this.ctx = this.graph.getContext("2d");

        this.freq = 1;
        this.c = 0;

        this.draw_axes();

        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));

        const function_ui = document.createElement('div');
        function_ui.className = 'function-ui';

        function_ui.appendChild(document.createElement('br'));
        const freq_label = document.createElement('label');
        freq_label.for = "freq_input";
        freq_label.innerText = "Frequency: ";
        const freq_input = new FloatBar([0, 100], 1, true);
        freq_input.id = "freq_input";
        function_ui.appendChild(freq_label);
        function_ui.appendChild(freq_input);

        function_ui.appendChild(document.createElement('br'));
        const c_label = document.createElement('label');
        c_label.for = "c_input";
        c_label.innerText = "Phase shift: ";
        const c_input = new FloatBar([0, 2 * Math.PI], 0, true);
        c_input.id = "c_input";
        function_ui.appendChild(c_label);
        function_ui.appendChild(c_input);

        if (current === "sin") {
            this.func = sin_generator;
            this.params = new DefaultSinParams();
            c_label.style.display = "";
            c_input.style.display = "";
            c_input.value = 0;
            freq_input.value = 1;
        } else {
            this.func = step_generator;
            this.params = new DefaultStepParams();
            c_label.style.display = "none";
            c_input.style.display = "none";
            freq_input.value = 1;
        }

        freq_input.addEventListener('change', () => {
            this.params.params.freq = parseFloat(freq_input.value);
        });
        c_input.addEventListener('change', () => {
            this.params.params.c = parseFloat(c_input.value);
        });

        const f = () => {
            this.draw_axes();
            this.draw_function();
            this.draw_labels();
            if (!this.cancel)
                requestAnimationFrame(f);
        };
        f();

        function_ui.appendChild(document.createElement('br'));
        function_ui.appendChild(document.createElement('br'));
        const done_button = document.createElement('button');
        done_button.innerText = 'done';
        function_ui.appendChild(done_button);
        done_button.addEventListener('click', () => {
            resolver(this.params);
        });

        container.appendChild(function_ui);
        parentEl.appendChild(container);

    }

    draw_axes() {
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.rect(0, 0, 1000, 1000);
        this.ctx.fill();

        this.ctx.fillStyle = "#ffffff50";
        const count = 20;
        for (let i = 1; i < count; i++) {
            const start = i * (this.graph.width / count);
            this.ctx.beginPath();
            this.ctx.rect(start, 0, 5, 1000);
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.rect(0, start, 1000, 5);
            this.ctx.fill();
        }
    }

    draw_function() {
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        const maxy = this.graph.height / 2;
        this.ctx.moveTo(0, maxy);
        for (let i = 0; i < this.graph.width; i++) {
            this.ctx.lineTo(i, maxy - maxy * this.func(i, [-1, 1], this.params));
        }
        this.ctx.stroke();
    }

    draw_labels() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, 1000, 1000);
        this.ctx.fill();
    }

    remove() {
        this.cancel = true;
    }
}
// ---------- END function_generator.js ------

// ---------- synth_element_base.js ----------
const globalCounters = {};

class SynthStageBase extends HTMLElement {
    get_title() {
        return "";
    }

    constructor(synth, pre_setup) {
        super();
        if (pre_setup)
            pre_setup(this);

        this.synth = synth;

        const shadow = this.attachShadow({mode: 'open'});
        this.shadow = shadow;

        const box = document.createElement('div');
        box.style = "border: solid 1px; padding: 0.5em; border-radius: 25px";
        const title = document.createElement('h2')
        title.innerText = this.get_title();
        box.appendChild(title);

        const enable_label = document.createElement('label');
        enable_label.for = "enable";
        enable_label.innerText = "Enable: ";
        this.enable_el = document.createElement('input');
        this.enable_el.id = "enable";
        this.enable_el.type = 'checkbox';
        this.enable_el.checked = true;

        box.appendChild(enable_label);
        box.appendChild(this.enable_el);

        const container = document.createElement('div');
        container.style.display = "none";
        this.container = container;
        box.appendChild(container);

        this.container_visible = false;
        title.onclick = () => {
            if (this.container_visible) {
                container.style.display = "none";
            } else {
                container.style.display = "";
            }

            this.container_visible = !this.container_visible;
        }

        const moveup = document.createElement('button');
        moveup.innerText = 'Move up';
        container.appendChild(moveup);

        const movedn = document.createElement('button');
        movedn.innerText = 'Move down';
        container.appendChild(movedn);

        this.remove_btn = document.createElement('button');
        this.remove_btn.innerText = 'Remove';
        container.appendChild(this.remove_btn);

        container.appendChild(document.createElement('br'));


        shadow.appendChild(box);

        moveup.addEventListener('click', () => {
            const idx = this.synth.stages.indexOf(this.name);
            if (idx != 0) {
                const other = this.synth.stages[idx - 1];
                this.synth.stages[idx] = other;
                this.synth.stages[idx - 1] = this.name;
                const parentEl =this.parentElement;
                this.remove();
                parentEl.insertBefore(this, parentEl.childNodes[idx - 1]);
            }
        });

        movedn.addEventListener('click', () => {
            const idx = this.synth.stages.indexOf(this.name);
            if (idx != (this.synth.stages.length - 1)) {
                const other = this.synth.stages[idx + 1];
                this.synth.stages[idx] = other;
                this.synth.stages[idx + 1] = this.name;

                const parentEl =this.parentElement;
                this.remove();
                parentEl.insertBefore(this, parentEl.childNodes[idx + 1]);
            }
        });

        this.remove_btn.addEventListener('click', () => {
            this.synth.remove_stage(this.name);
            this.remove();

            for (let arg of Object.keys(args))
                args[arg].generate = false;
            this.feedback_el.generate = false;
        });

        this.enable_el.addEventListener('change', () => {
            this.synth.toggle_stage(this.name, this.enable_el.checked);
            this.synth.toggle_stage(this.name, this.enable_el.checked);
        });
    }

    reparent_to_module(module) {
        this.remove_btn.style.display = "none";
        this.synth = module;
        // this.parentElement = module;
    }
}

class SynthElementBase extends SynthStageBase {
    get_args() {
        //returns a map of str -> Type
        return {};
    }

    get_type() {
        return Type;
    }

    get_feedback() {
        return 0;
    }

    constructor(synth) {
        super(synth);
        const args = this.get_args();
        this.args = args;

        const params = [];
        const createElement = (arg, type) => {
            const label = document.createElement('label');
            this.container.appendChild(label);
            label.for = arg;
            label.innerText = `${arg}: `;

            const el = document.createElement('div');
            this.container.appendChild(el);
            el.id = arg;
            el.style = "padding-left: 2em;";

            el.appendChild(type);
            type.addEventListener('change', () => {
                if (type.customonchange) {
                    type.customonchange(this);
                } else {
                    this.onchange(arg, type.value);
                }
            });

            this.container.appendChild(document.createElement('br'));
        };

        this.constrain_el = new BoolEntry(false);
        createElement('constrain to transform', this.constrain_el);
        for (let arg of Object.keys(args)) {
            params.push(args[arg].defaultValue);
            createElement(arg, args[arg]);
        }
        this.feedback_el = new FloatBar([0, 10], 1);
        createElement('feedback', this.feedback_el);

        const counter = globalCounters[this.get_title()] || 0;
        globalCounters[this.get_title()] = counter + 1;
        this.name = `${this.get_title()}-${counter}`;

        synth.add_stage(this.name, this.build_stage(params));

    }

    build_stage(params) {
        const constructor = this.get_type();
        return new constructor(...params, 1);
    }

    onchange(arg, val) {
        if (arg === "feedback")
            this.synth.stageModules[this.name].feedback = val;
        else if (arg === "constrain to transform")
            this.synth.stageModules[this.name].constrain = val;
        else
            this.synth.stageModules[this.name].params[arg] = val;
    }

    save() {
        const saved_args = {};
        for (let arg of Object.keys(this.args)) {
            saved_args[arg] = this.args[arg].save();
        }
        saved_args.feedback = this.feedback_el.save();
        saved_args.constrain = this.constrain_el.save();

        return {
            title: this.get_title(),
            enabled: this.enable_el.checked,
            args: saved_args
        }
    }

    load(data) {
        this.enable_el.checked = data.enabled;
        for (let arg of Object.keys(this.args)) {
            // console.log("Loading", arg, data.args[arg]);
            this.args[arg].load(data.args[arg]);
        }

        // console.log("Loading feedback", data.args.feedback);
        if (data.args.feedback)
            this.feedback_el.load(data.args.feedback);
        if (data.args.constrain)
            this.constrain_el.load(data.args.constrain);
    }
}

class TransformElement extends SynthElementBase {
    enable = true;

    get_title() {
        return "Transform";
    }

    build_stage() {
        return this;
    }

    get_args() {
        // TODO clear transform should hide other inputs
        // This can be done if we override onchange here and store the results of
        // createElement in SynthElementBase
        return {
            scale: new FloatBar([0,10], 1),
            center: new VecEntry(2, ["x", "y"], [[-0.5,1.5], [-0.5,1.5]], [0.5, 0.5]),
            rotation: new FloatBar([0, 2 * Math.PI], 0),
        }
    }

    constructor(synth) {
        super(synth);
        this.feedback_el.style.display = "none";
        this.constrain_el.style.display = "none";
        this.params = {
            scale: 1,
            center: [0.5, 0.5],
            rotation: 0,
        };
    }
}
defineEl('transform-element', TransformElement);
// ---------- END synth_element_base.js ------

// ---------- build/module_lib.js ----------
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

            get_type() {
                return Blur;
            }

            get_args() {
                return {
                    blur_stride_x: new IntEntry([1,100], 1),blur_stride_y: new IntEntry([1,100], 1)
                }
            }
        }
        defineEl('synth-blur', BlurElement);
class Enhance extends Function {
    id = 2
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

    get_type() {
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
    id = 3
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

    get_type() {
        return GammaCorrect;
    }

    get_args() {
        return {
            gamma_correction: new FloatBar([2,4], 2)
        }
    }
}
defineEl('synth-gammacorrect', GammaCorrectElement);
        class HueShift extends Function {
            id = 4
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
                    hue_shift: new FloatBar([0,360], 180),saturate_shift: new FloatBar([0,1], 0)
                }
            }
        }
        defineEl('synth-hueshift', HueShiftElement);
class InvertColor extends Function {
    id = 5
    params = {}

    constructor(feedback) {
        super(feedback || 0);

    }
}

class InvertColorElement extends SynthElementBase {
    get_title() {
        return "InvertColor";
    }

    get_type() {
        return InvertColor;
    }

    get_args() {
        return {

        }
    }
}
defineEl('synth-invertcolor', InvertColorElement);
        class Noise extends Function {
            id = 6
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
                    noise_r: new FloatBar([0,10000], 0),noise_g: new FloatBar([0,10000], 0),noise_b: new FloatBar([0,10000], 0)
                }
            }
        }
        defineEl('synth-noise', NoiseElement);
        class Offset extends Function {
            id = 7
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
                    offsets_x: new VecEntry(3, ["r","g","b"], [[-1, 1],[-1, 1],[-1, 1],], [0,0,0]),offsets_y: new VecEntry(3, ["r","g","b"], [[-1, 1],[-1, 1],[-1, 1],], [0,0,0])
                }
            }
        }
        defineEl('synth-offset', OffsetElement);
        class Oscillator extends Function {
            id = 8
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
                    osc_f: new VecEntry(2, ["x","y"], [[0, 1],[0, 1],], [0.25,0]),osc_c: new FloatBar([0,6.283185307179586], 0),osc_color: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0])
                }
            }
        }
        defineEl('synth-oscillator', OscillatorElement);
        class Picture extends Function {
            id = 9
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
        defineEl('synth-picture', PictureElement);
class Pixelate extends Function {
    id = 10
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

    get_type() {
        return Pixelate;
    }

    get_args() {
        return {
            pixelate_factor: new IntEntry([0,500], 10)
        }
    }
}
defineEl('synth-pixelate', PixelateElement);
        class Recolor extends Function {
            id = 11
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

            get_type() {
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
            id = 12
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

            get_type() {
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
            id = 13
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

            get_type() {
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
            id = 14
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

            get_type() {
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
    id = 15
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
            rotation: new FloatBar([0,6.283185307179586], 0)
        }
    }
}
defineEl('synth-rotate', RotateElement);
        class Superformula extends Function {
            id = 16
            params = {}

            constructor(sf_color, sf_m, sf_n, sf_thickness, sf_smooth_edges, feedback) {
                super(feedback || 0);
                this.params.sf_color = sf_color;
this.params.sf_m = sf_m;
this.params.sf_n = sf_n;
this.params.sf_thickness = sf_thickness;
this.params.sf_smooth_edges = sf_smooth_edges;

            }
        }

        class SuperformulaElement extends SynthElementBase {
            get_title() {
                return "Superformula";
            }

            get_type() {
                return Superformula;
            }

            get_args() {
                return {
                    sf_color: new VecEntry(3, ["r","g","b"], [[0, 1],[0, 1],[0, 1],], [1,0,0]),sf_m: new FloatBar([1,10], 1),sf_n: new VecEntry(3, ["n1","n2","n3"], [[0, 20],[0, 20],[0, 20],], [20,20,20]),sf_thickness: new FloatBar([0,1], 0.5),sf_smooth_edges: new BoolEntry(true)
                }
            }
        }
        defineEl('synth-superformula', SuperformulaElement);
class Swirl extends Function {
    id = 17
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
            factor: new FloatBar([0,6.283185307179586], 0)
        }
    }
}
defineEl('synth-swirl', SwirlElement);
        class Threshold extends Function {
            id = 18
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

            get_type() {
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
            id = 19
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

            get_type() {
                return Tile;
            }

            get_args() {
                return {
                    tile_x: new IntEntry([1,100], 1),tile_y: new IntEntry([1,100], 1)
                }
            }
        }
        defineEl('synth-tile', TileElement);
        class Webcam extends Function {
            id = 20
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

            get_type() {
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
            id = 21
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
                    zoom: new FloatBar([0,10], 1),zoom_center: new VecEntry(2, ["x","y"], [[0, 1],[0, 1],], [0.5,0.5])
                }
            }
        }
        defineEl('synth-zoom', ZoomElement);
const MODULE_IDS = {"blur": {class: "BlurElement", tag: "space"},"enhance": {class: "EnhanceElement", tag: "color"},"gamma correct": {class: "GammaCorrectElement", tag: "color"},"hue shift": {class: "HueShiftElement", tag: "color"},"invert color": {class: "InvertColorElement", tag: "color"},"noise": {class: "NoiseElement", tag: "generator"},"offset": {class: "OffsetElement", tag: "color"},"oscillator": {class: "OscillatorElement", tag: "generator"},"picture": {class: "PictureElement", tag: "generator"},"pixelate": {class: "PixelateElement", tag: "space"},"recolor": {class: "RecolorElement", tag: "color"},"reduce colors": {class: "ReduceColorsElement", tag: "color"},"reflector": {class: "ReflectorElement", tag: "space"},"ripple": {class: "RippleElement", tag: "space"},"rotate": {class: "RotateElement", tag: "space"},"superformula": {class: "SuperformulaElement", tag: "generator"},"swirl": {class: "SwirlElement", tag: "space"},"threshold": {class: "ThresholdElement", tag: "color"},"tile": {class: "TileElement", tag: "space"},"webcam": {class: "WebcamElement", tag: "generator"},"zoom": {class: "ZoomElement", tag: "space"},}
// ---------- END build/module_lib.js ------

// ---------- meta_module.js ----------
class ModuleElement extends SynthStageBase {
    stages = [];
    stageModules = {};

    enable = true;

    get_title() {
        return `Meta-${this.module.name}`;
    }

    setup_synth_state(synth, module) {
        for (let idx of module.selection) {
            const name = synth.stages[idx];
            this.stages.push(name);
            this.stageModules[name] = synth.stageModules[name];
        }

        const counter = globalCounters[this.get_title()] || 0;
        globalCounters[this.get_title()] = counter + 1;
        this.name = `${this.get_title()}-${counter}`;

        let old_name = synth.stages[module.selection[0]];
        synth.stages[module.selection[0]] = this.name;
        delete synth.stageModules[old_name];
        synth.stageModules[this.name] = this;

        console.log("removed stage", old_name, module.selection);

        for (let _i = 1; _i < module.selection.length; _i++) {
            console.log("removing stage", synth.stages[module.selection[1]]);
            synth.remove_stage(synth.stages[module.selection[1]]);
        }
    }

    constructor(synth, module) {
        super(synth, (self_) => {
            self_.module = module;
        });
        this.setup_synth_state(synth, module);
        this.synth_container = document.createElement('div');
        this.container.appendChild(this.synth_container);
    }

    appendChild(child) {
        this.synth_container.appendChild(child);
    }

    toggle_stage(name, state) {
        this.stageModules[name].enable = state;
    }

    save() {
        const saved = [];
        for (let i = 0; i < this.synth_container.children.length; i++)
            saved.push(this.synth_container.children[i].save());
        return {
            title: this.get_title(),
            module: this.module,
            enabled: this.enable_el.checked,
            args: saved,
        }
    }
}
defineEl('module-element', ModuleElement);

const meta_modules = { };

class ModuleCreator {
    selection = new Set();

    constructor(modal, synth, resolver) {
        this.container = document.createElement('div');
        this.container.className = "functiongen";
        this.container.style['text-align'] = "left";

        const header = document.createElement('h1');
        header.innerText = "Module Creator";
        const subheading = document.createElement('h3');
        subheading.innerText = "Select consecutive stages to create a meta module";
        this.container.appendChild(header);
        this.container.appendChild(subheading);
        this.container.appendChild(document.createElement('hr'));
        this.container.appendChild(document.createElement('br'));

        this.error = document.createElement('p');
        this.error.className = 'errors';

        const name_label = document.createElement("label");
        name_label.for = "module-name";
        name_label.innerText = "Name of module: ";
        const name = document.createElement("input");
        name.id = "module-name";
        this.container.appendChild(name_label);
        this.container.appendChild(name);
        this.container.appendChild(document.createElement("br"));

        if (synth.stages.length == 0) {
            this.error.innerText = "No stages in synth! Please add some stages before creating a new module.";
        } else {
            const selection_container = document.createElement('div');
            selection_container.className = 'create-module-selection';
            for (let i = 0; i < synth.stages.length; i++) {
                const stage = synth.stages[i];
                const label = document.createElement('label');
                label.for = stage;
                label.innerText = stage;
                const option = document.createElement('input');
                option.type = 'checkbox';
                option.id = stage;
                option.addEventListener('change', () => {
                    this.selected(stage, i, option.checked);
                });

                selection_container.appendChild(label);
                selection_container.appendChild(option);
                selection_container.appendChild(document.createElement('br'));
            }

            this.container.appendChild(selection_container);
        }

        this.save = document.createElement('button');
        this.save.innerText = "Save";
        this.save.style.display = "";
        this.save.addEventListener("click", () => {
            if (name.value === "") {
                this.error.innerText = "Please enter a valid name!";
            } else if (meta_modules[name.value] === "") {
                this.error.innerText = "That name is already taken!";
            } else {
                const selection = Array.from(this.selection);
                selection.sort((x, y) => x - y);
                resolver({
                    name: name.value,
                    selection: selection
                });
            }
        });

        const cancel = document.createElement('button');
        cancel.innerText = "Cancel";
        cancel.addEventListener("click", () => {
            resolver();
        });
        this.container.appendChild(document.createElement('br'));
        this.container.appendChild(this.error);
        this.container.appendChild(cancel);
        this.container.appendChild(this.save);
        modal.appendChild(this.container);
    }

    remove() {
        this.container.remove();
    }

    selected(name, id, state) {
        if (state)
            this.selection.add(id);
        else
            this.selection.delete(id);
        console.log(name, id, state);

        this.validate();
    }

    validate() {
        let seen_true = false;
        let expect_absent = false;
        let invalid = false;
        for (let i = 0; i < synth.stages.length; i++) {
            if (this.selection.has(i)) {
                if (expect_absent) {
                    invalid = true;
                    break;
                }
                seen_true = true;
            } else if (seen_true) {
                expect_absent = true;
            }
        }

        if (invalid) {
            this.save.style.display = "none";
            this.error.innerText = "Invalid selection! Must choose consecutive stages"
        } else if (this.selection.size) {
            this.save.style.display = "";
            this.error.innerText = ""
        } else {
            this.save.style.display = "none";
        }
    }
}

function append_meta_module(name, initializer, length, ui, synth) {
    loaddata(initializer, ui, synth);
    const meta_module = {
        name: name,
        selection: [...Array(length).keys()].map(x => synth.stages.length - length + x)
    };
    add_meta_module(meta_module, ui, synth);
}

function register_module(name, meta_module_desc) {
    if (meta_modules[name])
        return;
    meta_modules[name] = meta_module_desc;
    document.getElementById('add-meta-module').style.display = "";
    const new_option = document.createElement('option');
    new_option.innerText = name;
    new_option.value = name;
    document.getElementById('add-meta-select').appendChild(new_option);

}

function add_meta_module(module, ui, synth) {
    console.log(...synth.stages);
    const synth_module = new ModuleElement(synth, module);
    for (let idx of module.selection)
        ui.children[idx].reparent_to_module(synth_module);

    ui.insertBefore(synth_module, ui.children[module.selection[0]]);
    for (let i = 0; i < module.selection.length; i++) {
        const child = ui.children[module.selection[0] + 1];
        child.remove();
        synth_module.appendChild(child);
    }
    console.log(...synth.stages);
}

function setup_meta_module(ui, synth) {
    const createbtn = document.getElementById("create-module");
    createbtn.addEventListener('click', async () => {
        let resolver = null;
        const p = new Promise(r => { resolver = r; });
        const modal = createModal(resolver);
        const creator = new ModuleCreator(modal, synth, resolver);

        const meta_module_defn = await p;
        creator.remove();
        modal.remove();
        if (!meta_module_defn)
            return;

        const module_initializer = [];
        for (let idx of meta_module_defn.selection) {
            module_initializer.push(ui.children[idx].save());
        }

        register_module(
            meta_module_defn.name,
            {
                init: module_initializer,
                count: meta_module_defn.selection.length
            }
        );

        add_meta_module(meta_module_defn, ui, synth);
    });

    document.getElementById("add-meta").addEventListener("click", () => {
        console.log("onclick");
        const name = document.getElementById('add-meta-select').value;
        const data = meta_modules[name];
        append_meta_module(name, data.init, data.count, ui, synth);
    });

    // TODO "delete" module ui
}
// ---------- END meta_module.js ------

// ---------- saveload.js ----------
function loaddata(savedata, ui, synth) {
    // TODO validation
    for (let elem of savedata) {
        if (elem.module) {
            // if (!meta_modules[elem.module.name])
            //     throw new Error("Unexpected module"); // TODO ui for this error
            const count = elem.module.selection.length;
            console.group(`ADD ${elem.module.name}`);
            // TODO take in MetaModuleManager obj or smth
            append_meta_module(elem.module.name, elem.args, count, ui, synth);
            console.groupEnd(`ADD ${elem.module.name}`);
        } else {
            const moduleElem = eval(elem.title + 'Element');
            const new_elem = new moduleElem(synth);
            ui.appendChild(new_elem);
            new_elem.load(elem);
            console.log('ADD', new_elem.get_title());
        }
    }
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

function setup_save_load(ui, synth) {
    // magic + 4 byte length + 1 byte per RGBA values
    // this is because we can't use the A channel because of premultiplied
    // stuff, TODO fix that
    const max_stego_size = Math.min(
        0xffffff,
        (4 * synth.dimensions[0] * synth.dimensions[1] - header_len) / 4);

    document.getElementById("save").addEventListener('click', () => {
        const saved = [];
        for (let i = 0; i < ui.children.length; i++) {
            saved.push(ui.children[i].save());
        }

        const saveobj = {
            stages: saved,
            modules: meta_modules,
        };

        const savestr = JSON.stringify(saveobj);

        const compressed = LZString.compressToUint8Array(savestr)
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
            const out_data = output_ctx.canvas.toDataURL();

            const downloader = document.createElement('a');
            downloader.setAttribute('href', out_data);
            downloader.setAttribute('download', 'synth.savedata.png');
            downloader.style.display = "none";
            document.body.appendChild(downloader);

            downloader.click();

            document.body.removeChild(downloader);
        } else {
            const savedata = encodeURI(savestr);
            const downloader = document.createElement('a');
            downloader.setAttribute('href', 'data:text/plain;charset=utf-8,' + savedata);
            downloader.setAttribute('download', 'videoSynth.savedata');
            downloader.style.display = "none";
            document.body.appendChild(downloader);

            downloader.click();

            document.body.removeChild(downloader);
        }
    });

    const loadUpload = document.getElementById("load");
    loadUpload.addEventListener("change", () => {
        let file = loadUpload.files[0];
        let reader = new FileReader();
        console.log(file, reader);
        if (file.name.endsWith(".png")) {
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                const img = new Image();
                img.src = reader.result;
                await new Promise(r => { img.onload = r; });
                console.log(img);

                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const ctxdata = ctx.getImageData(0, 0, ...synth.dimensions);
                const stegodata = ctxdata.data;
                const result = decode_stego(stegodata, LZString);

                const savedata = JSON.parse(result);
                load_meta_modules(savedata.modules, ui, synth);
                loaddata(savedata.stages, ui, synth);
            }
        } else {
            reader.readAsText(file)
            reader.onloadend = () => {
                const savedata = JSON.parse(reader.result);
                if (savedata.stages) {
                    load_meta_modules(savedata.modules, ui, synth);
                    loaddata(savedata.stages, ui, synth);
                } else { // older version for compat
                    loaddata(savedata, ui, synth);
                }
            };
        }
    });
}

try {
    exports.decode_stego = decode_stego;
} catch (e) { }
// ---------- END saveload.js ------

// ---------- synth.js ----------
class Synth {
    recording = [];
    record_frames = 0;

    dimensions = [1000, 1000];

    stages = [];
    stageModules = {};

    transform = {
        center: [ 0.5, 0.5 ],
        scale: 1,
        rotation: 0,
    }

    reset_transform() {
        this.transform = {
            center: [ 0.5, 0.5 ],
            scale: 1,
            rotation: 0,
        }
    }

    enable = true;

    constructor(canvas) {
        this.dimensions = [1000, 1000];

        canvas.width = this.dimensions[0];
        canvas.height = this.dimensions[1];
        this.gl = canvas.getContext("webgl2", {'preserveDrawingBuffer': true});
        if (!this.gl)
            throw new Error("Could not initialize webgl2 context! Does your browser support webgl2?");
        enableGlExts(this.gl);

        this.programInfo = twgl.createProgramInfo(this.gl, [vs, SYNTHFRAGSHADER]);
        const bufferInfo = twgl.createBufferInfoFromArrays(this.gl, bufferArrays);
        setupProgram(this.gl, this.programInfo, bufferInfo);

        this.fbs = new FrameBufferManager(this.gl, this.dimensions);
        this.canvas = canvas;
    }

    render(time) {
        const process_stages = (fn_params, stage) => {
            if (!fn_params.enable) {
                return;
            }

            if (stage == 0)
                this.reset_transform();

            if (fn_params instanceof Synth || fn_params instanceof ModuleElement) {
                fn_params.stages.forEach((name, stage_) => {
                    const fn_params_ = fn_params.stageModules[name];
                    process_stages(fn_params_, stage + 1 + stage_);
                });
                return;
            } else if (fn_params instanceof TransformElement) {
                // if (fn_params.params["clear transform"]) {
                //     this.reset_transform();
                // } else {
                    this.transform.scale = fn_params.params.scale;
                    this.transform.center = [...fn_params.params.center];
                    this.transform.rotation = fn_params.params.rotation;
                // }
                return;
            }

            this.fbs.bind_dst();
            const params = {
                u_dimensions: this.dimensions,
                u_tex_dimensions: this.dimensions,
                u_texture: this.fbs.src(),
                u_transform_center: this.transform.center,
                u_transform_scale: this.transform.scale,
                u_transform_rotation: this.transform.rotation,
                u_function: fn_params.id,
                u_stage: stage,
                u_feedback: fn_params.feedback,
                u_constrain_to_transform: fn_params.constrain,
            };
            for (let key of Object.keys(fn_params.params)) {
                params['u_' + key] = fn_params.params[key];
            }

            twgl.setUniforms(this.programInfo, params);
            render(this.gl);
            this.fbs.flipflop();
        };

        process_stages(this, -1);

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        twgl.setUniforms(this.programInfo, {
            u_tex_dimensions: this.dimensions,
            u_texture: this.fbs.src(),
            u_function: 0,
            u_stage: this.stages.length + 1,
            u_feedback: 1,
        });
        render(this.gl);

        if (this.record_frames) {
            this.recording.push(this.canvas.toDataURL());
            this.record_frames--;
        }

    }

    get_frame_data(array) {
        this.gl.readPixels(0, 0, ...this.dimensions, this.gl.RGBA, this.gl.UNSIGNED_BYTE, array);
    }

    add_stage(name, module) {
        if (this.stages.indexOf(name) != -1)
            throw new Error("name collision");
        this.stageModules[name] = module;
        this.stages.push(name);
    }

    remove_stage(name) {
        const idx = this.stages.indexOf(name);
        if (idx == -1)
            throw new Error("no such stage");
        delete this.stageModules[name];
        this.stages.splice(idx, 1);
    }

    toggle_stage(name, state) {
        this.stageModules[name].enable = state;
    }

    running = null;
    cancel = false;
    run() {
        if (this.running)
            return;

        this.running = new Promise(r => {
            const runner = async (time) => {
                this.render(time);
                // TODO custom framerate?
                await new Promise(r => setTimeout(r, 10));
                if (!this.cancel)
                    requestAnimationFrame(runner);
                else
                    r();
            }
            requestAnimationFrame(runner);
        });
    }

    async stop() {
        if (!this.running)
            return;

        this.cancel = true;
        await this.running;
        this.running = null;
        this.cancel = false;
    }
}

function setup_controler() {
    let current_controls = 0;
    const num_controls = 3;
    document.getElementById("controls-next").addEventListener("click", () => {
        document.getElementById(`controls-${current_controls}`).style.display = "none";
        current_controls += 1;
        current_controls %= num_controls;
        document.getElementById(`controls-${current_controls}`).style.display = "";
    });
    document.getElementById("controls-prev").addEventListener("click", () => {
        document.getElementById(`controls-${current_controls}`).style.display = "none";
        current_controls -= 1;
        if (current_controls < 0)
            current_controls += num_controls;
        document.getElementById(`controls-${current_controls}`).style.display = "";
    });
}

const add_new_tags = ["generator", "space", "color"];
let current_add_new_tag = 0;
function setup_add_new_stage(ui, synth) {
    const update_add_new = (new_tag) => {
        new_tag = (new_tag + add_new_tags.length) % add_new_tags.length;

        const old_obj = document.getElementById(`add_new_${add_new_tags[current_add_new_tag]}_container`);
        old_obj.style.display = "none";
        const new_obj = document.getElementById(`add_new_${add_new_tags[new_tag]}_container`);
        new_obj.style.display = "";

        current_add_new_tag = new_tag;
    };

    document.getElementById("add_new-prev").addEventListener('click', () => {
        update_add_new(current_add_new_tag - 1);
    });
    document.getElementById("add_new-next").addEventListener('click', () => {
        update_add_new(current_add_new_tag + 1);
    });

    const buttons = {};
    const selectors = {};
    for (let tag of add_new_tags) {
        buttons[tag] = document.getElementById(`add_new_${tag}`);
        selectors[tag] = document.getElementById(`add_new_${tag}_select`);
        buttons[tag].addEventListener('click', () => {
            const stageElem = eval(selectors[tag].value);
            ui.appendChild(new stageElem(synth));
        });
    }

    for (let module of Object.keys(MODULE_IDS)) {
        const module_info = MODULE_IDS[module];

        const opt = document.createElement('option');
        opt.innerText = module;
        opt.value = module_info.class;

        selectors[module_info.tag].appendChild(opt);
    }

    const opt = document.createElement('option');
    opt.innerText = 'transform';
    opt.value = 'TransformElement';
    selectors['space'].appendChild(opt);
}

async function synth_main(canvas) {
    const synth = new Synth(canvas);
    window.synth = synth;
    synth.run();

    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
    const burgerbtn = document.getElementById("burgerbtn");
    const title = document.getElementById("title");

    const showmenu = () => {
        sidebar.style.display = "";
        burgerbtn.style.display = "none";
    };
    const hidemenu = () => {
        sidebar.style.display = "none";
        burgerbtn.style.display = "";
    };

    burgerbtn.addEventListener('click', showmenu);
    title.addEventListener('click', hidemenu);
    document.getElementById("display-container").addEventListener("click", hidemenu);

    const ui = document.getElementById("ui-container");

    setup_controler();
    setup_add_new_stage(ui, synth);
    setup_meta_module(ui, synth);
    setup_save_load(ui, synth);
}

function loadStaticSynth(canvas, data, cb) {
    const synth = new Synth(canvas)
    synth.run();

    // note that meta-modules don't need to be loaded
    const ui = document.createElement('div');
    loaddata(data.stages, ui, synth);
    if (cb) {
        cb(ui);
    }

    return synth;
}
// ---------- END synth.js ------

