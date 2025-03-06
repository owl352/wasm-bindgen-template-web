import * as wasm from '../wasm/wasm_bindgen_template.js';
import wasmBytes from "../wasm/wasm_bindgen_template_bg"


var binaryString = atob(wasmBytes);
var bytes = new Uint8Array(binaryString.length);
for (var i = 0; i < binaryString.length; i++) {
  bytes[i] = binaryString.charCodeAt(i);
}
wasm.initSync({module: bytes.buffer})

console.log(wasm.test())
