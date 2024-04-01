import {
  RemixBrowser
} from "/build/_shared/chunk-TIZJ7IZH.js";
import {
  require_react_dom
} from "/build/_shared/chunk-LQ53JVGW.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.client.react-stream.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.client.react-stream.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.client.react-stream.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this)
  );
});
//# sourceMappingURL=/build/entry.client-YO5IXV4Z.js.map
