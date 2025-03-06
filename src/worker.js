import * as wasm from '../wasm/wasm_bindgen_template.js';

self.onmessage = ({ data: bytes }) => {
  /**
   * When we receive the bytes as an `ArrayBuffer` we can use that to
   * synchronously initialize the module as opposed to asynchronously
   * via the default export. The synchronous method internally uses
   * `new WebAssembly.Module()` and `new WebAssembly.Instance()`.
   */

  console.log(new WebAssembly.Module(bytes));

  wasm.initSync({ module: bytes });

  /**
   * Once initialized we can call our exported `greet()` functions.
   */
  console.log(wasm.test())
};

self.postMessage({ type: "FETCH_WASM" });
