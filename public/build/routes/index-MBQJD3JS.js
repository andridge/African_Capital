import {
  require_react_dom
} from "/build/_shared/chunk-LQ53JVGW.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// app/img/Logo.png
var Logo_default = "/build/_assets/Logo-K4PZ2HRR.png";

// app/components/Header.jsx
var import_react32 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t14, e5, n6) => e5 in t14 ? i(t14, e5, { enumerable: true, configurable: true, writable: true, value: n6 }) : t14[e5] = n6;
var r = (t14, e5, n6) => (d(t14, typeof e5 != "symbol" ? e5 + "" : e5, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f9) => {
  s.isServer ? (0, import_react.useEffect)(e5, f9) : (0, import_react.useLayoutEffect)(e5, f9);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e5) {
  let r9 = (0, import_react2.useRef)(e5);
  return l(() => {
    r9.current = e5;
  }, [e5]), r9;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r9 = { addEventListener(e5, t14, s13, a10) {
    return e5.addEventListener(t14, s13, a10), r9.add(() => e5.removeEventListener(t14, s13, a10));
  }, requestAnimationFrame(...e5) {
    let t14 = requestAnimationFrame(...e5);
    return r9.add(() => cancelAnimationFrame(t14));
  }, nextFrame(...e5) {
    return r9.requestAnimationFrame(() => r9.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t14 = setTimeout(...e5);
    return r9.add(() => clearTimeout(t14));
  }, microTask(...e5) {
    let t14 = { current: true };
    return t3(() => {
      t14.current && e5[0]();
    }), r9.add(() => {
      t14.current = false;
    });
  }, style(e5, t14, s13) {
    let a10 = e5.style.getPropertyValue(t14);
    return Object.assign(e5.style, { [t14]: s13 }), this.add(() => {
      Object.assign(e5.style, { [t14]: a10 });
    });
  }, group(e5) {
    let t14 = o2();
    return e5(t14), this.add(() => t14.dispose());
  }, add(e5) {
    return n6.push(e5), () => {
      let t14 = n6.indexOf(e5);
      if (t14 >= 0)
        for (let s13 of n6.splice(t14, 1))
          s13();
    };
  }, dispose() {
    for (let e5 of n6.splice(0))
      e5();
  } };
  return r9;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t14) {
  let e5 = s2(t14);
  return import_react4.default.useCallback((...r9) => e5.current(...r9), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react5 = __toESM(require_react(), 1);
function l2() {
  let [e5, f9] = (0, import_react5.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f9(false), (0, import_react5.useEffect)(() => {
    e5 !== true && f9(true);
  }, [e5]), (0, import_react5.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react6.default.useId) != null ? o6 : function() {
  let n6 = l2(), [e5, u8] = import_react6.default.useState(n6 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u8(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r9, n6, ...a10) {
  if (r9 in n6) {
    let e5 = n6[r9];
    return typeof e5 == "function" ? e5(...a10) : e5;
  }
  let t14 = new Error(`Tried to handle "${r9}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t14, u), t14;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r9) {
  return s.isServer ? null : r9 instanceof Node ? r9.ownerDocument : r9 != null && r9.hasOwnProperty("current") && r9.current instanceof Node ? r9.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(N || {});
var F = ((t14) => (t14[t14.Previous = -1] = "Previous", t14[t14.Next = 1] = "Next", t14))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c2)).sort((r9, t14) => Math.sign((r9.tabIndex || Number.MAX_SAFE_INTEGER) - (t14.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t14) => (t14[t14.Strict = 0] = "Strict", t14[t14.Loose = 1] = "Loose", t14))(T || {});
function h(e5, r9 = 0) {
  var t14;
  return e5 === ((t14 = e(e5)) == null ? void 0 : t14.body) ? false : u(r9, { [0]() {
    return e5.matches(c2);
  }, [1]() {
    let l10 = e5;
    for (; l10 !== null; ) {
      if (l10.matches(c2))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
var w = ((t14) => (t14[t14.Keyboard = 0] = "Keyboard", t14[t14.Mouse = 1] = "Mouse", t14))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e5) {
  var r9, t14;
  return (t14 = (r9 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r9.call(e5, S)) != null ? t14 : false;
}
function I2(e5, r9 = (t14) => t14) {
  return e5.slice().sort((t14, l10) => {
    let o9 = r9(t14), i6 = r9(l10);
    if (o9 === null || i6 === null)
      return 0;
    let n6 = o9.compareDocumentPosition(i6);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e5, r9, { sorted: t14 = true, relativeTo: l10 = null, skipElements: o9 = [] } = {}) {
  let i6 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n6 = Array.isArray(e5) ? t14 ? I2(e5) : e5 : f(e5);
  o9.length > 0 && n6.length > 1 && (n6 = n6.filter((s13) => !o9.includes(s13))), l10 = l10 != null ? l10 : i6.activeElement;
  let E6 = (() => {
    if (r9 & 5)
      return 1;
    if (r9 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x4 = (() => {
    if (r9 & 1)
      return 0;
    if (r9 & 2)
      return Math.max(0, n6.indexOf(l10)) - 1;
    if (r9 & 4)
      return Math.max(0, n6.indexOf(l10)) + 1;
    if (r9 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = r9 & 32 ? { preventScroll: true } : {}, d12 = 0, a10 = n6.length, u8;
  do {
    if (d12 >= a10 || d12 + a10 <= 0)
      return 0;
    let s13 = x4 + d12;
    if (r9 & 16)
      s13 = (s13 + a10) % a10;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a10)
        return 1;
    }
    u8 = n6[s13], u8 == null || u8.focus(p8), d12 += E6;
  } while (u8 !== i6.activeElement);
  return r9 & 6 && H(u8) && u8.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react7 = __toESM(require_react(), 1);
function d2(e5, r9, n6) {
  let o9 = s2(r9);
  (0, import_react7.useEffect)(() => {
    function t14(u8) {
      o9.current(u8);
    }
    return document.addEventListener(e5, t14, n6), () => document.removeEventListener(e5, t14, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s4(e5, r9, n6) {
  let o9 = s2(r9);
  (0, import_react8.useEffect)(() => {
    function t14(i6) {
      o9.current(i6);
    }
    return window.addEventListener(e5, t14, n6), () => window.removeEventListener(e5, t14, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s13, m9, a10 = true) {
  let i6 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      i6.current = a10;
    });
  }, [a10]);
  function c13(e5, r9) {
    if (!i6.current || e5.defaultPrevented)
      return;
    let t14 = r9(e5);
    if (t14 === null || !t14.getRootNode().contains(t14) || !t14.isConnected)
      return;
    let E6 = function u8(n6) {
      return typeof n6 == "function" ? u8(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(s13);
    for (let u8 of E6) {
      if (u8 === null)
        continue;
      let n6 = u8 instanceof HTMLElement ? u8 : u8.current;
      if (n6 != null && n6.contains(t14) || e5.composed && e5.composedPath().includes(n6))
        return;
    }
    return !h(t14, T.Loose) && t14.tabIndex !== -1 && e5.preventDefault(), m9(e5, t14);
  }
  let o9 = (0, import_react9.useRef)(null);
  d2("pointerdown", (e5) => {
    var r9, t14;
    i6.current && (o9.current = ((t14 = (r9 = e5.composedPath) == null ? void 0 : r9.call(e5)) == null ? void 0 : t14[0]) || e5.target);
  }, true), d2("mousedown", (e5) => {
    var r9, t14;
    i6.current && (o9.current = ((t14 = (r9 = e5.composedPath) == null ? void 0 : r9.call(e5)) == null ? void 0 : t14[0]) || e5.target);
  }, true), d2("click", (e5) => {
    o9.current && (c13(e5, () => o9.current), o9.current = null);
  }, true), d2("touchend", (e5) => c13(e5, () => e5.target instanceof HTMLElement ? e5.target : null), true), s4("blur", (e5) => c13(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i2(t14) {
  var n6;
  if (t14.type)
    return t14.type;
  let e5 = (n6 = t14.as) != null ? n6 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s5(t14, e5) {
  let [n6, u8] = (0, import_react10.useState)(() => i2(t14));
  return l(() => {
    u8(i2(t14));
  }, [t14.type, t14.as]), l(() => {
    n6 || e5.current && e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u8("button");
  }, [n6, e5]), n6;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t14, n6 = true) {
  return Object.assign(t14, { [u2]: n6 });
}
function y2(...t14) {
  let n6 = (0, import_react11.useRef)(t14);
  (0, import_react11.useEffect)(() => {
    n6.current = t14;
  }, [t14]);
  let c13 = o4((e5) => {
    for (let o9 of n6.current)
      o9 != null && (typeof o9 == "function" ? o9(e5) : o9.current = e5);
  });
  return t14.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n6) {
  return n6.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a10) => (a10[a10.None = 0] = "None", a10[a10.RenderStrategy = 1] = "RenderStrategy", a10[a10.Static = 2] = "Static", a10))(S2 || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r9, theirProps: t14, slot: e5, defaultTag: a10, features: s13, visible: n6 = true, name: f9 }) {
  let o9 = N2(t14, r9);
  if (n6)
    return c3(o9, e5, a10, f9);
  let u8 = s13 != null ? s13 : 0;
  if (u8 & 2) {
    let { static: l10 = false, ...p8 } = o9;
    if (l10)
      return c3(p8, e5, a10, f9);
  }
  if (u8 & 1) {
    let { unmount: l10 = true, ...p8 } = o9;
    return u(l10 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p8, hidden: true, style: { display: "none" } }, e5, a10, f9);
    } });
  }
  return c3(o9, e5, a10, f9);
}
function c3(r9, t14 = {}, e5, a10) {
  let { as: s13 = e5, children: n6, refName: f9 = "ref", ...o9 } = g(r9, ["unmount", "static"]), u8 = r9.ref !== void 0 ? { [f9]: r9.ref } : {}, l10 = typeof n6 == "function" ? n6(t14) : n6;
  "className" in o9 && o9.className && typeof o9.className == "function" && (o9.className = o9.className(t14));
  let p8 = {};
  if (t14) {
    let i6 = false, m9 = [];
    for (let [y8, d12] of Object.entries(t14))
      typeof d12 == "boolean" && (i6 = true), d12 === true && m9.push(y8);
    i6 && (p8["data-headlessui-state"] = m9.join(" "));
  }
  if (s13 === import_react12.Fragment && Object.keys(R(o9)).length > 0) {
    if (!(0, import_react12.isValidElement)(l10) || Array.isArray(l10) && l10.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a10} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o9).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
    let i6 = l10.props, m9 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d12) => e2(i6 == null ? void 0 : i6.className(...d12), o9.className) : e2(i6 == null ? void 0 : i6.className, o9.className), y8 = m9 ? { className: m9 } : {};
    return (0, import_react12.cloneElement)(l10, Object.assign({}, N2(l10.props, R(g(o9, ["ref"]))), p8, u8, w2(l10.ref, u8.ref), y8));
  }
  return (0, import_react12.createElement)(s13, Object.assign({}, g(o9, ["ref"]), s13 !== import_react12.Fragment && u8, s13 !== import_react12.Fragment && p8), l10);
}
function w2(...r9) {
  return { ref: r9.every((t14) => t14 == null) ? void 0 : (t14) => {
    for (let e5 of r9)
      e5 != null && (typeof e5 == "function" ? e5(t14) : e5.current = t14);
  } };
}
function N2(...r9) {
  var a10;
  if (r9.length === 0)
    return {};
  if (r9.length === 1)
    return r9[0];
  let t14 = {}, e5 = {};
  for (let s13 of r9)
    for (let n6 in s13)
      n6.startsWith("on") && typeof s13[n6] == "function" ? ((a10 = e5[n6]) != null || (e5[n6] = []), e5[n6].push(s13[n6])) : t14[n6] = s13[n6];
  if (t14.disabled || t14["aria-disabled"])
    return Object.assign(t14, Object.fromEntries(Object.keys(e5).map((s13) => [s13, void 0])));
  for (let s13 in e5)
    Object.assign(t14, { [s13](n6, ...f9) {
      let o9 = e5[s13];
      for (let u8 of o9) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u8(n6, ...f9);
      }
    } });
  return t14;
}
function D(r9) {
  var t14;
  return Object.assign((0, import_react12.forwardRef)(r9), { displayName: (t14 = r9.displayName) != null ? t14 : r9.name });
}
function R(r9) {
  let t14 = Object.assign({}, r9);
  for (let e5 in t14)
    t14[e5] === void 0 && delete t14[e5];
  return t14;
}
function g(r9, t14 = []) {
  let e5 = Object.assign({}, r9);
  for (let a10 of t14)
    a10 in e5 && delete e5[a10];
  return e5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n6) {
  let e5 = n6.parentElement, l10 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l10 = e5), e5 = e5.parentElement;
  let t14 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t14 && i4(l10) ? false : t14;
}
function i4(n6) {
  if (!n6)
    return false;
  let e5 = n6.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p2 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p2 || {});
function s6(t14, o9) {
  let { features: n6 = 1, ...e5 } = t14, d12 = { ref: o9, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d12, theirProps: e5, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c4 = D(s6);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react13 = __toESM(require_react(), 1);
var n = (0, import_react13.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d5 || {});
function C() {
  return (0, import_react13.useContext)(n);
}
function c5({ value: o9, children: r9 }) {
  return import_react13.default.createElement(n.Provider, { value: o9 }, r9);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r9) => (r9.Space = " ", r9.Enter = "Enter", r9.Escape = "Escape", r9.Backspace = "Backspace", r9.Delete = "Delete", r9.ArrowLeft = "ArrowLeft", r9.ArrowUp = "ArrowUp", r9.ArrowRight = "ArrowRight", r9.ArrowDown = "ArrowDown", r9.Home = "Home", r9.End = "End", r9.PageUp = "PageUp", r9.PageDown = "PageDown", r9.Tab = "Tab", r9))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react14 = __toESM(require_react(), 1);
function m2(u8, t14) {
  let e5 = (0, import_react14.useRef)([]), r9 = o4(u8);
  (0, import_react14.useEffect)(() => {
    let o9 = [...e5.current];
    for (let [n6, a10] of t14.entries())
      if (e5.current[n6] !== a10) {
        let l10 = r9(t14, o9);
        return e5.current = t14, l10;
      }
  }, [r9, ...t14]);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react26 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react15 = __toESM(require_react(), 1);
var s8 = ((r9) => (r9[r9.Forwards = 0] = "Forwards", r9[r9.Backwards = 1] = "Backwards", r9))(s8 || {});
function n2() {
  let e5 = (0, import_react15.useRef)(0);
  return s4("keydown", (o9) => {
    o9.key === "Tab" && (e5.current = o9.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react16 = __toESM(require_react(), 1);
function f4() {
  let e5 = (0, import_react16.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react17 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react17.useMemo)(() => e(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react18 = __toESM(require_react(), 1);
function E2(n6, e5, a10, t14) {
  let i6 = s2(a10);
  (0, import_react18.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r9(o9) {
      i6.current(o9);
    }
    return n6.addEventListener(e5, r9, t14), () => n6.removeEventListener(e5, r9, t14);
  }, [n6, e5, t14]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t9(n6) {
  function e5() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react19 = __toESM(require_react(), 1);
function c6(t14) {
  let r9 = o4(t14), e5 = (0, import_react19.useRef)(false);
  (0, import_react19.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t3(() => {
      e5.current && r9();
    });
  }), [r9]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t14) {
  if (!t14)
    return /* @__PURE__ */ new Set();
  if (typeof t14 == "function")
    return new Set(t14());
  let r9 = /* @__PURE__ */ new Set();
  for (let e5 of t14.current)
    e5.current instanceof HTMLElement && r9.add(e5.current);
  return r9;
}
var J = "div";
var h4 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h4 || {});
function X2(t14, r9) {
  let e5 = (0, import_react20.useRef)(null), o9 = y2(e5, r9), { initialFocus: u8, containers: i6, features: n6 = 30, ...l10 } = t14;
  l2() || (n6 = 1);
  let m9 = n3(e5);
  Y({ ownerDocument: m9 }, Boolean(n6 & 16));
  let c13 = Z({ ownerDocument: m9, container: e5, initialFocus: u8 }, Boolean(n6 & 2));
  $({ ownerDocument: m9, container: e5, containers: i6, previousActiveElement: c13 }, Boolean(n6 & 8));
  let v4 = n2(), y8 = o4((s13) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B) => B())(() => {
      u(v4.current, { [s8.Forwards]: () => {
        O(T6, M.First, { skipElements: [s13.relatedTarget] });
      }, [s8.Backwards]: () => {
        O(T6, M.Last, { skipElements: [s13.relatedTarget] });
      } });
    });
  }), _2 = p(), b4 = (0, import_react20.useRef)(false), j4 = { ref: o9, onKeyDown(s13) {
    s13.key == "Tab" && (b4.current = true, _2.requestAnimationFrame(() => {
      b4.current = false;
    }));
  }, onBlur(s13) {
    let T6 = P(i6);
    e5.current instanceof HTMLElement && T6.add(e5.current);
    let d12 = s13.relatedTarget;
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (S3(T6, d12) || (b4.current ? O(e5.current, u(v4.current, { [s8.Forwards]: () => M.Next, [s8.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s13.target }) : s13.target instanceof HTMLElement && y(s13.target)));
  } };
  return import_react20.default.createElement(import_react20.default.Fragment, null, Boolean(n6 & 4) && import_react20.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }), X({ ourProps: j4, theirProps: l10, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react20.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h4 });
var a3 = [];
t9(() => {
  function t14(r9) {
    r9.target instanceof HTMLElement && r9.target !== document.body && a3[0] !== r9.target && (a3.unshift(r9.target), a3 = a3.filter((e5) => e5 != null && e5.isConnected), a3.splice(10));
  }
  window.addEventListener("click", t14, { capture: true }), window.addEventListener("mousedown", t14, { capture: true }), window.addEventListener("focus", t14, { capture: true }), document.body.addEventListener("click", t14, { capture: true }), document.body.addEventListener("mousedown", t14, { capture: true }), document.body.addEventListener("focus", t14, { capture: true });
});
function Q(t14 = true) {
  let r9 = (0, import_react20.useRef)(a3.slice());
  return m2(([e5], [o9]) => {
    o9 === true && e5 === false && t3(() => {
      r9.current.splice(0);
    }), o9 === false && e5 === true && (r9.current = a3.slice());
  }, [t14, a3, r9]), o4(() => {
    var e5;
    return (e5 = r9.current.find((o9) => o9 != null && o9.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t14 }, r9) {
  let e5 = Q(r9);
  m2(() => {
    r9 || (t14 == null ? void 0 : t14.activeElement) === (t14 == null ? void 0 : t14.body) && y(e5());
  }, [r9]), c6(() => {
    r9 && y(e5());
  });
}
function Z({ ownerDocument: t14, container: r9, initialFocus: e5 }, o9) {
  let u8 = (0, import_react20.useRef)(null), i6 = f4();
  return m2(() => {
    if (!o9)
      return;
    let n6 = r9.current;
    n6 && t3(() => {
      if (!i6.current)
        return;
      let l10 = t14 == null ? void 0 : t14.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l10) {
          u8.current = l10;
          return;
        }
      } else if (n6.contains(l10)) {
        u8.current = l10;
        return;
      }
      e5 != null && e5.current ? y(e5.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t14 == null ? void 0 : t14.activeElement;
    });
  }, [o9]), u8;
}
function $({ ownerDocument: t14, container: r9, containers: e5, previousActiveElement: o9 }, u8) {
  let i6 = f4();
  E2(t14 == null ? void 0 : t14.defaultView, "focus", (n6) => {
    if (!u8 || !i6.current)
      return;
    let l10 = P(e5);
    r9.current instanceof HTMLElement && l10.add(r9.current);
    let m9 = o9.current;
    if (!m9)
      return;
    let c13 = n6.target;
    c13 && c13 instanceof HTMLElement ? S3(l10, c13) ? (o9.current = c13, y(c13)) : (n6.preventDefault(), n6.stopPropagation(), y(m9)) : y(o9.current);
  }, true);
}
function S3(t14, r9) {
  for (let e5 of t14)
    if (e5.contains(r9))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react22 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react21 = __toESM(require_react(), 1);
var e3 = (0, import_react21.createContext)(false);
function l5() {
  return (0, import_react21.useContext)(e3);
}
function P2(o9) {
  return import_react21.default.createElement(e3.Provider, { value: o9.force }, o9.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F2(p8) {
  let l10 = l5(), n6 = (0, import_react22.useContext)(v), e5 = n3(p8), [a10, o9] = (0, import_react22.useState)(() => {
    if (!l10 && n6 !== null || s.isServer)
      return null;
    let t14 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t14)
      return t14;
    if (e5 === null)
      return null;
    let r9 = e5.createElement("div");
    return r9.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r9);
  });
  return (0, import_react22.useEffect)(() => {
    a10 !== null && (e5 != null && e5.body.contains(a10) || e5 == null || e5.body.appendChild(a10));
  }, [a10, e5]), (0, import_react22.useEffect)(() => {
    l10 || n6 !== null && o9(n6.current);
  }, [n6, o9, l10]), a10;
}
var U = import_react22.Fragment;
function N3(p8, l10) {
  let n6 = p8, e5 = (0, import_react22.useRef)(null), a10 = y2(T2((u8) => {
    e5.current = u8;
  }), l10), o9 = n3(e5), t14 = F2(e5), [r9] = (0, import_react22.useState)(() => {
    var u8;
    return s.isServer ? null : (u8 = o9 == null ? void 0 : o9.createElement("div")) != null ? u8 : null;
  }), i6 = (0, import_react22.useContext)(f5), C4 = l2();
  return l(() => {
    !t14 || !r9 || t14.contains(r9) || (r9.setAttribute("data-headlessui-portal", ""), t14.appendChild(r9));
  }, [t14, r9]), l(() => {
    if (r9 && i6)
      return i6.register(r9);
  }, [i6, r9]), c6(() => {
    var u8;
    !t14 || !r9 || (r9 instanceof Node && t14.contains(r9) && t14.removeChild(r9), t14.childNodes.length <= 0 && ((u8 = t14.parentElement) == null || u8.removeChild(t14)));
  }), C4 ? !t14 || !r9 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a10 }, theirProps: n6, defaultTag: U, name: "Portal" }), r9) : null;
}
var S4 = import_react22.Fragment;
var v = (0, import_react22.createContext)(null);
function j2(p8, l10) {
  let { target: n6, ...e5 } = p8, o9 = { ref: y2(l10) };
  return import_react22.default.createElement(v.Provider, { value: n6 }, X({ ourProps: o9, theirProps: e5, defaultTag: S4, name: "Popover.Group" }));
}
var f5 = (0, import_react22.createContext)(null);
function ae() {
  let p8 = (0, import_react22.useContext)(f5), l10 = (0, import_react22.useRef)([]), n6 = o4((o9) => (l10.current.push(o9), p8 && p8.register(o9), () => e5(o9))), e5 = o4((o9) => {
    let t14 = l10.current.indexOf(o9);
    t14 !== -1 && l10.current.splice(t14, 1), p8 && p8.unregister(o9);
  }), a10 = (0, import_react22.useMemo)(() => ({ register: n6, unregister: e5, portals: l10 }), [n6, e5, l10]);
  return [l10, (0, import_react22.useMemo)(() => function({ children: t14 }) {
    return import_react22.default.createElement(f5.Provider, { value: a10 }, t14);
  }, [a10])];
}
var D2 = D(N3);
var I3 = D(j2);
var pe = Object.assign(D2, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react23 = __toESM(require_react(), 1);
var d8 = (0, import_react23.createContext)(null);
function f6() {
  let r9 = (0, import_react23.useContext)(d8);
  if (r9 === null) {
    let t14 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t14, f6), t14;
  }
  return r9;
}
function M2() {
  let [r9, t14] = (0, import_react23.useState)([]);
  return [r9.length > 0 ? r9.join(" ") : void 0, (0, import_react23.useMemo)(() => function(e5) {
    let i6 = o4((s13) => (t14((o9) => [...o9, s13]), () => t14((o9) => {
      let p8 = o9.slice(), c13 = p8.indexOf(s13);
      return c13 !== -1 && p8.splice(c13, 1), p8;
    }))), n6 = (0, import_react23.useMemo)(() => ({ register: i6, slot: e5.slot, name: e5.name, props: e5.props }), [i6, e5.slot, e5.name, e5.props]);
    return import_react23.default.createElement(d8.Provider, { value: n6 }, e5.children);
  }, [t14])];
}
var S5 = "p";
function h5(r9, t14) {
  let a10 = I(), { id: e5 = `headlessui-description-${a10}`, ...i6 } = r9, n6 = f6(), s13 = y2(t14);
  l(() => n6.register(e5), [e5, n6.register]);
  let o9 = { ref: s13, ...n6.props, id: e5 };
  return X({ ourProps: o9, theirProps: i6, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D(h5);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react24 = __toESM(require_react(), 1);
var a4 = (0, import_react24.createContext)(() => {
});
a4.displayName = "StackContext";
var s10 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s10 || {});
function x2() {
  return (0, import_react24.useContext)(a4);
}
function M3({ children: i6, onUpdate: r9, type: e5, element: n6, enabled: u8 }) {
  let l10 = x2(), o9 = o4((...t14) => {
    r9 == null || r9(...t14), l10(...t14);
  });
  return l(() => {
    let t14 = u8 === void 0 || u8 === true;
    return t14 && o9(0, e5, n6), () => {
      t14 && o9(1, e5, n6);
    };
  }, [o9, e5, n6, u8]), import_react24.default.createElement(a4.Provider, { value: o9 }, i6);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i5(e5, t14) {
  return e5 === t14 && (e5 !== 0 || 1 / e5 === 1 / t14) || e5 !== e5 && t14 !== t14;
}
var d10 = typeof Object.is == "function" ? Object.is : i5;
var { useState: u5, useEffect: h6, useLayoutEffect: f7, useDebugValue: p4 } = l7;
function y4(e5, t14, c13) {
  const a10 = t14(), [{ inst: n6 }, o9] = u5({ inst: { value: a10, getSnapshot: t14 } });
  return f7(() => {
    n6.value = a10, n6.getSnapshot = t14, r6(n6) && o9({ inst: n6 });
  }, [e5, a10, t14]), h6(() => (r6(n6) && o9({ inst: n6 }), e5(() => {
    r6(n6) && o9({ inst: n6 });
  })), [e5]), p4(a10), a10;
}
function r6(e5) {
  const t14 = e5.getSnapshot, c13 = e5.value;
  try {
    const a10 = t14();
    return !d10(c13, a10);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t11(r9, e5, n6) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s11 = !r7;
var c9 = s11 ? t11 : y4;
var a5 = "useSyncExternalStore" in e4 ? ((n6) => n6.useSyncExternalStore)(e4) : c9;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t14) {
  return a5(t14.subscribe, t14.getSnapshot, t14.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o9, r9) {
  let t14 = o9(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t14;
  }, subscribe(e5) {
    return n6.add(e5), () => n6.delete(e5);
  }, dispatch(e5, ...s13) {
    let i6 = r9[e5].call(t14, ...s13);
    i6 && (t14 = i6, n6.forEach((c13) => c13()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c10() {
  let o9;
  return { before({ doc: e5 }) {
    var l10;
    let n6 = e5.documentElement;
    o9 = ((l10 = e5.defaultView) != null ? l10 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e5, d: n6 }) {
    let t14 = e5.documentElement, l10 = t14.clientWidth - t14.offsetWidth, r9 = o9 - l10;
    n6.style(t14, "paddingRight", `${r9}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t6())
    return {};
  let o9;
  return { before() {
    o9 = window.pageYOffset;
  }, after({ doc: r9, d: l10, meta: s13 }) {
    function i6(e5) {
      return s13.containers.flatMap((t14) => t14()).some((t14) => t14.contains(e5));
    }
    l10.style(r9.body, "marginTop", `-${o9}px`), window.scrollTo(0, 0);
    let n6 = null;
    l10.addEventListener(r9, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t14 = e5.target.closest("a");
          if (!t14)
            return;
          let { hash: c13 } = new URL(t14.href), a10 = r9.querySelector(c13);
          a10 && !i6(a10) && (n6 = a10);
        } catch {
        }
    }, true), l10.addEventListener(r9, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i6(e5.target) && e5.preventDefault();
    }, { passive: false }), l10.add(() => {
      window.scrollTo(0, window.pageYOffset + o9), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o9 }) {
    o9.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m6(e5) {
  let n6 = {};
  for (let t14 of e5)
    Object.assign(n6, t14(n6));
  return n6;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e5, n6) {
  var o9;
  let t14 = (o9 = this.get(e5)) != null ? o9 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t14.count++, t14.meta.add(n6), this.set(e5, t14), this;
}, POP(e5, n6) {
  let t14 = this.get(e5);
  return t14 && (t14.count--, t14.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e5, d: n6, meta: t14 }) {
  let o9 = { doc: e5, d: n6, meta: m6(t14) }, c13 = [p5(), c10(), l8()];
  c13.forEach(({ before: r9 }) => r9 == null ? void 0 : r9(o9)), c13.forEach(({ after: r9 }) => r9 == null ? void 0 : r9(o9));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a7.subscribe(() => {
  let e5 = a7.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t14] of e5)
    n6.set(t14, t14.documentElement.style.overflow);
  for (let t14 of e5.values()) {
    let o9 = n6.get(t14.doc) === "hidden", c13 = t14.count !== 0;
    (c13 && !o9 || !c13 && o9) && a7.dispatch(t14.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t14), t14.count === 0 && a7.dispatch("TEARDOWN", t14);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r9, n6) {
  let f9 = S6(a7), o9 = e5 ? f9.get(e5) : void 0, i6 = o9 ? o9.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r9))
      return a7.dispatch("PUSH", e5, n6), () => a7.dispatch("POP", e5, n6);
  }, [r9, e5]), i6;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t12 = /* @__PURE__ */ new Map();
function h7(r9, l10 = true) {
  l(() => {
    var o9;
    if (!l10)
      return;
    let e5 = typeof r9 == "function" ? r9() : r9.current;
    if (!e5)
      return;
    function a10() {
      var d12;
      if (!e5)
        return;
      let i6 = (d12 = t12.get(e5)) != null ? d12 : 1;
      if (i6 === 1 ? t12.delete(e5) : t12.set(e5, i6 - 1), i6 !== 1)
        return;
      let n6 = u6.get(e5);
      n6 && (n6["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n6["aria-hidden"]), e5.inert = n6.inert, u6.delete(e5));
    }
    let f9 = (o9 = t12.get(e5)) != null ? o9 : 0;
    return t12.set(e5, f9 + 1), f9 !== 0 || (u6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a10;
  }, [r9, l10]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react25 = __toESM(require_react(), 1);
function p7({ defaultContainers: f9 = [], portals: o9 } = {}) {
  let t14 = (0, import_react25.useRef)(null), i6 = n3(t14), u8 = o4(() => {
    var r9;
    let n6 = [];
    for (let e5 of f9)
      e5 !== null && (e5 instanceof HTMLElement ? n6.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n6.push(e5.current));
    if (o9 != null && o9.current)
      for (let e5 of o9.current)
        n6.push(e5);
    for (let e5 of (r9 = i6 == null ? void 0 : i6.querySelectorAll("html > *, body > *")) != null ? r9 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(t14.current) || n6.some((c13) => e5.contains(c13)) || n6.push(e5));
    return n6;
  });
  return { resolveContainers: u8, contains: o4((n6) => u8().some((r9) => r9.contains(n6))), mainTreeNodeRef: t14, MainTreeNode: (0, import_react25.useMemo)(() => function() {
    return import_react25.default.createElement(c4, { features: p2.Hidden, ref: t14 });
  }, [t14]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o9) => (o9[o9.Open = 0] = "Open", o9[o9.Closed = 1] = "Closed", o9))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t14, e5) {
  return t14.titleId === e5.id ? t14 : { ...t14, titleId: e5.id };
} };
var I4 = (0, import_react26.createContext)(null);
I4.displayName = "DialogContext";
function b3(t14) {
  let e5 = (0, import_react26.useContext)(I4);
  if (e5 === null) {
    let o9 = new Error(`<${t14} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o9, b3), o9;
  }
  return e5;
}
function we(t14, e5, o9 = () => [document.body]) {
  p6(t14, e5, (i6) => {
    var n6;
    return { containers: [...(n6 = i6.containers) != null ? n6 : [], o9] };
  });
}
function Be(t14, e5) {
  return u(e5.type, Me, t14, e5);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t14, e5) {
  var X4;
  let o9 = I(), { id: i6 = `headlessui-dialog-${o9}`, open: n6, onClose: l10, initialFocus: s13, __demoMode: g4 = false, ...T6 } = t14, [m9, h9] = (0, import_react26.useState)(0), a10 = C();
  n6 === void 0 && a10 !== null && (n6 = (a10 & d5.Open) === d5.Open);
  let D5 = (0, import_react26.useRef)(null), Q5 = y2(D5, e5), f9 = n3(D5), N5 = t14.hasOwnProperty("open") || a10 !== null, U2 = t14.hasOwnProperty("onClose");
  if (!N5 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let p8 = n6 ? 0 : 1, [S8, Z5] = (0, import_react26.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react26.createRef)() }), P4 = o4(() => l10(false)), W2 = o4((r9) => Z5({ type: 0, id: r9 })), L2 = l2() ? g4 ? false : p8 === 0 : false, F5 = m9 > 1, Y4 = (0, import_react26.useContext)(I4) !== null, [ee3, te2] = ae(), { resolveContainers: M6, mainTreeNodeRef: k2, MainTreeNode: oe4 } = p7({ portals: ee3, defaultContainers: [(X4 = S8.panelRef.current) != null ? X4 : D5.current] }), re4 = F5 ? "parent" : "leaf", $2 = a10 !== null ? (a10 & d5.Closing) === d5.Closing : false, ne2 = (() => Y4 || $2 ? false : L2)(), le2 = (0, import_react26.useCallback)(() => {
    var r9, c13;
    return (c13 = Array.from((r9 = f9 == null ? void 0 : f9.querySelectorAll("body > *")) != null ? r9 : []).find((d12) => d12.id === "headlessui-portal-root" ? false : d12.contains(k2.current) && d12 instanceof HTMLElement)) != null ? c13 : null;
  }, [k2]);
  h7(le2, ne2);
  let ae2 = (() => F5 ? true : L2)(), ie4 = (0, import_react26.useCallback)(() => {
    var r9, c13;
    return (c13 = Array.from((r9 = f9 == null ? void 0 : f9.querySelectorAll("[data-headlessui-portal]")) != null ? r9 : []).find((d12) => d12.contains(k2.current) && d12 instanceof HTMLElement)) != null ? c13 : null;
  }, [k2]);
  h7(ie4, ae2);
  let se3 = (() => !(!L2 || F5))();
  h2(M6, P4, se3);
  let pe2 = (() => !(F5 || p8 !== 0))();
  E2(f9 == null ? void 0 : f9.defaultView, "keydown", (r9) => {
    pe2 && (r9.defaultPrevented || r9.key === o8.Escape && (r9.preventDefault(), r9.stopPropagation(), P4()));
  });
  let de2 = (() => !($2 || p8 !== 0 || Y4))();
  we(f9, de2, M6), (0, import_react26.useEffect)(() => {
    if (p8 !== 0 || !D5.current)
      return;
    let r9 = new ResizeObserver((c13) => {
      for (let d12 of c13) {
        let x4 = d12.target.getBoundingClientRect();
        x4.x === 0 && x4.y === 0 && x4.width === 0 && x4.height === 0 && P4();
      }
    });
    return r9.observe(D5.current), () => r9.disconnect();
  }, [p8, D5, P4]);
  let [ue3, fe2] = M2(), ge2 = (0, import_react26.useMemo)(() => [{ dialogState: p8, close: P4, setTitleId: W2 }, S8], [p8, S8, P4, W2]), J3 = (0, import_react26.useMemo)(() => ({ open: p8 === 0 }), [p8]), Te = { ref: Q5, id: i6, role: "dialog", "aria-modal": p8 === 0 ? true : void 0, "aria-labelledby": S8.titleId, "aria-describedby": ue3 };
  return import_react26.default.createElement(M3, { type: "Dialog", enabled: p8 === 0, element: D5, onUpdate: o4((r9, c13) => {
    c13 === "Dialog" && u(r9, { [s10.Add]: () => h9((d12) => d12 + 1), [s10.Remove]: () => h9((d12) => d12 - 1) });
  }) }, import_react26.default.createElement(P2, { force: true }, import_react26.default.createElement(pe, null, import_react26.default.createElement(I4.Provider, { value: ge2 }, import_react26.default.createElement(pe.Group, { target: D5 }, import_react26.default.createElement(P2, { force: false }, import_react26.default.createElement(fe2, { slot: J3, name: "Dialog.Description" }, import_react26.default.createElement(ge, { initialFocus: s13, containers: M6, features: L2 ? u(re4, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react26.default.createElement(te2, null, X({ ourProps: Te, theirProps: T6, slot: J3, defaultTag: He, features: Ge, visible: p8 === 0, name: "Dialog" }))))))))), import_react26.default.createElement(oe4, null));
}
var Ue = "div";
function We(t14, e5) {
  let o9 = I(), { id: i6 = `headlessui-dialog-overlay-${o9}`, ...n6 } = t14, [{ dialogState: l10, close: s13 }] = b3("Dialog.Overlay"), g4 = y2(e5), T6 = o4((a10) => {
    if (a10.target === a10.currentTarget) {
      if (r3(a10.currentTarget))
        return a10.preventDefault();
      a10.preventDefault(), a10.stopPropagation(), s13();
    }
  }), m9 = (0, import_react26.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g4, id: i6, "aria-hidden": true, onClick: T6 }, theirProps: n6, slot: m9, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t14, e5) {
  let o9 = I(), { id: i6 = `headlessui-dialog-backdrop-${o9}`, ...n6 } = t14, [{ dialogState: l10 }, s13] = b3("Dialog.Backdrop"), g4 = y2(e5);
  (0, import_react26.useEffect)(() => {
    if (s13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s13.panelRef]);
  let T6 = (0, import_react26.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react26.default.createElement(P2, { force: true }, import_react26.default.createElement(pe, null, X({ ourProps: { ref: g4, id: i6, "aria-hidden": true }, theirProps: n6, slot: T6, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t14, e5) {
  let o9 = I(), { id: i6 = `headlessui-dialog-panel-${o9}`, ...n6 } = t14, [{ dialogState: l10 }, s13] = b3("Dialog.Panel"), g4 = y2(e5, s13.panelRef), T6 = (0, import_react26.useMemo)(() => ({ open: l10 === 0 }), [l10]), m9 = o4((a10) => {
    a10.stopPropagation();
  });
  return X({ ourProps: { ref: g4, id: i6, onClick: m9 }, theirProps: n6, slot: T6, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t14, e5) {
  let o9 = I(), { id: i6 = `headlessui-dialog-title-${o9}`, ...n6 } = t14, [{ dialogState: l10, setTitleId: s13 }] = b3("Dialog.Title"), g4 = y2(e5);
  (0, import_react26.useEffect)(() => (s13(i6), () => s13(null)), [i6, s13]);
  let T6 = (0, import_react26.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g4, id: i6 }, theirProps: n6, slot: T6, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react28 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react27 = __toESM(require_react(), 1);
var t13;
var a9 = (t13 = import_react27.default.startTransition) != null ? t13 : function(i6) {
  i6();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o9) => (o9[o9.Open = 0] = "Open", o9[o9.Closed = 1] = "Closed", o9))(q || {});
var z2 = ((t14) => (t14[t14.ToggleDisclosure = 0] = "ToggleDisclosure", t14[t14.CloseDisclosure = 1] = "CloseDisclosure", t14[t14.SetButtonId = 2] = "SetButtonId", t14[t14.SetPanelId = 3] = "SetPanelId", t14[t14.LinkPanel = 4] = "LinkPanel", t14[t14.UnlinkPanel = 5] = "UnlinkPanel", t14))(z2 || {});
var Q2 = { [0]: (e5) => ({ ...e5, disclosureState: u(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, n6) {
  return e5.buttonId === n6.buttonId ? e5 : { ...e5, buttonId: n6.buttonId };
}, [3](e5, n6) {
  return e5.panelId === n6.panelId ? e5 : { ...e5, panelId: n6.panelId };
} };
var k = (0, import_react28.createContext)(null);
k.displayName = "DisclosureContext";
function M4(e5) {
  let n6 = (0, import_react28.useContext)(k);
  if (n6 === null) {
    let o9 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o9, M4), o9;
  }
  return n6;
}
var v2 = (0, import_react28.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w4(e5) {
  let n6 = (0, import_react28.useContext)(v2);
  if (n6 === null) {
    let o9 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o9, w4), o9;
  }
  return n6;
}
var H3 = (0, import_react28.createContext)(null);
H3.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react28.useContext)(H3);
}
function Y2(e5, n6) {
  return u(n6.type, Q2, e5, n6);
}
var Z2 = import_react28.Fragment;
function ee(e5, n6) {
  let { defaultOpen: o9 = false, ...u8 } = e5, T6 = (0, import_react28.useRef)(null), l10 = y2(n6, T2((a10) => {
    T6.current = a10;
  }, e5.as === void 0 || e5.as === import_react28.Fragment)), t14 = (0, import_react28.useRef)(null), f9 = (0, import_react28.useRef)(null), s13 = (0, import_react28.useReducer)(Y2, { disclosureState: o9 ? 0 : 1, linkedPanel: false, buttonRef: f9, panelRef: t14, buttonId: null, panelId: null }), [{ disclosureState: i6, buttonId: c13 }, D5] = s13, d12 = o4((a10) => {
    D5({ type: 1 });
    let r9 = e(T6);
    if (!r9 || !c13)
      return;
    let p8 = (() => a10 ? a10 instanceof HTMLElement ? a10 : a10.current instanceof HTMLElement ? a10.current : r9.getElementById(c13) : r9.getElementById(c13))();
    p8 == null || p8.focus();
  }), P4 = (0, import_react28.useMemo)(() => ({ close: d12 }), [d12]), b4 = (0, import_react28.useMemo)(() => ({ open: i6 === 0, close: d12 }), [i6, d12]), y8 = { ref: l10 };
  return import_react28.default.createElement(k.Provider, { value: s13 }, import_react28.default.createElement(v2.Provider, { value: P4 }, import_react28.default.createElement(c5, { value: u(i6, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: y8, theirProps: u8, slot: b4, defaultTag: Z2, name: "Disclosure" }))));
}
var te = "button";
function ne(e5, n6) {
  let o9 = I(), { id: u8 = `headlessui-disclosure-button-${o9}`, ...T6 } = e5, [l10, t14] = M4("Disclosure.Button"), f9 = V(), s13 = f9 === null ? false : f9 === l10.panelId, i6 = (0, import_react28.useRef)(null), c13 = y2(i6, n6, s13 ? null : l10.buttonRef);
  (0, import_react28.useEffect)(() => {
    if (!s13)
      return t14({ type: 2, buttonId: u8 }), () => {
        t14({ type: 2, buttonId: null });
      };
  }, [u8, t14, s13]);
  let D5 = o4((r9) => {
    var p8;
    if (s13) {
      if (l10.disclosureState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t14({ type: 0 }), (p8 = l10.buttonRef.current) == null || p8.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t14({ type: 0 });
          break;
      }
  }), d12 = o4((r9) => {
    switch (r9.key) {
      case o8.Space:
        r9.preventDefault();
        break;
    }
  }), P4 = o4((r9) => {
    var p8;
    r3(r9.currentTarget) || e5.disabled || (s13 ? (t14({ type: 0 }), (p8 = l10.buttonRef.current) == null || p8.focus()) : t14({ type: 0 }));
  }), b4 = (0, import_react28.useMemo)(() => ({ open: l10.disclosureState === 0 }), [l10]), y8 = s5(e5, i6), a10 = s13 ? { ref: c13, type: y8, onKeyDown: D5, onClick: P4 } : { ref: c13, id: u8, type: y8, "aria-expanded": l10.disclosureState === 0, "aria-controls": l10.linkedPanel ? l10.panelId : void 0, onKeyDown: D5, onKeyUp: d12, onClick: P4 };
  return X({ ourProps: a10, theirProps: T6, slot: b4, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S2.RenderStrategy | S2.Static;
function re(e5, n6) {
  let o9 = I(), { id: u8 = `headlessui-disclosure-panel-${o9}`, ...T6 } = e5, [l10, t14] = M4("Disclosure.Panel"), { close: f9 } = w4("Disclosure.Panel"), s13 = y2(n6, l10.panelRef, (P4) => {
    a9(() => t14({ type: P4 ? 4 : 5 }));
  });
  (0, import_react28.useEffect)(() => (t14({ type: 3, panelId: u8 }), () => {
    t14({ type: 3, panelId: null });
  }), [u8, t14]);
  let i6 = C(), c13 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : l10.disclosureState === 0)(), D5 = (0, import_react28.useMemo)(() => ({ open: l10.disclosureState === 0, close: f9 }), [l10, f9]), d12 = { ref: s13, id: u8 };
  return import_react28.default.createElement(H3.Provider, { value: l10.panelId }, X({ ourProps: d12, theirProps: T6, slot: D5, defaultTag: le, features: oe, visible: c13, name: "Disclosure.Panel" }));
}
var se = D(ee);
var ue = D(ne);
var ie = D(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react29 = __toESM(require_react(), 1);
var De2 = ((u8) => (u8[u8.Open = 0] = "Open", u8[u8.Closed = 1] = "Closed", u8))(De2 || {});
var he = ((e5) => (e5[e5.TogglePopover = 0] = "TogglePopover", e5[e5.ClosePopover = 1] = "ClosePopover", e5[e5.SetButton = 2] = "SetButton", e5[e5.SetButtonId = 3] = "SetButtonId", e5[e5.SetPanel = 4] = "SetPanel", e5[e5.SetPanelId = 5] = "SetPanelId", e5))(he || {});
var He2 = { [0]: (t14) => {
  let o9 = { ...t14, popoverState: u(t14.popoverState, { [0]: 1, [1]: 0 }) };
  return o9.popoverState === 0 && (o9.__demoMode = false), o9;
}, [1](t14) {
  return t14.popoverState === 1 ? t14 : { ...t14, popoverState: 1 };
}, [2](t14, o9) {
  return t14.button === o9.button ? t14 : { ...t14, button: o9.button };
}, [3](t14, o9) {
  return t14.buttonId === o9.buttonId ? t14 : { ...t14, buttonId: o9.buttonId };
}, [4](t14, o9) {
  return t14.panel === o9.panel ? t14 : { ...t14, panel: o9.panel };
}, [5](t14, o9) {
  return t14.panelId === o9.panelId ? t14 : { ...t14, panelId: o9.panelId };
} };
var ue2 = (0, import_react29.createContext)(null);
ue2.displayName = "PopoverContext";
function oe2(t14) {
  let o9 = (0, import_react29.useContext)(ue2);
  if (o9 === null) {
    let u8 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u8, oe2), u8;
  }
  return o9;
}
var ie2 = (0, import_react29.createContext)(null);
ie2.displayName = "PopoverAPIContext";
function fe(t14) {
  let o9 = (0, import_react29.useContext)(ie2);
  if (o9 === null) {
    let u8 = new Error(`<${t14} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u8, fe), u8;
  }
  return o9;
}
var Pe2 = (0, import_react29.createContext)(null);
Pe2.displayName = "PopoverGroupContext";
function Ee() {
  return (0, import_react29.useContext)(Pe2);
}
var re2 = (0, import_react29.createContext)(null);
re2.displayName = "PopoverPanelContext";
function _e2() {
  return (0, import_react29.useContext)(re2);
}
function Ge2(t14, o9) {
  return u(o9.type, He2, t14, o9);
}
var ke = "div";
function we2(t14, o9) {
  var I7;
  let { __demoMode: u8 = false, ...A } = t14, O2 = (0, import_react29.useRef)(null), n6 = y2(o9, T2((l10) => {
    O2.current = l10;
  })), e5 = (0, import_react29.useRef)([]), T6 = (0, import_react29.useReducer)(Ge2, { __demoMode: u8, popoverState: u8 ? 0 : 1, buttons: e5, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react29.createRef)(), afterPanelSentinel: (0, import_react29.createRef)() }), [{ popoverState: P4, button: p8, buttonId: F5, panel: a10, panelId: m9, beforePanelSentinel: y8, afterPanelSentinel: s13 }, i6] = T6, d12 = n3((I7 = O2.current) != null ? I7 : p8), g4 = (0, import_react29.useMemo)(() => {
    if (!p8 || !a10)
      return false;
    for (let K2 of document.querySelectorAll("body > *"))
      if (Number(K2 == null ? void 0 : K2.contains(p8)) ^ Number(K2 == null ? void 0 : K2.contains(a10)))
        return true;
    let l10 = f(), R3 = l10.indexOf(p8), q2 = (R3 + l10.length - 1) % l10.length, W2 = (R3 + 1) % l10.length, z4 = l10[q2], ge2 = l10[W2];
    return !a10.contains(z4) && !a10.contains(ge2);
  }, [p8, a10]), L2 = s2(F5), h9 = s2(m9), _2 = (0, import_react29.useMemo)(() => ({ buttonId: L2, panelId: h9, close: () => i6({ type: 1 }) }), [L2, h9, i6]), B = Ee(), D5 = B == null ? void 0 : B.registerPopover, f9 = o4(() => {
    var l10;
    return (l10 = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? l10 : (d12 == null ? void 0 : d12.activeElement) && ((p8 == null ? void 0 : p8.contains(d12.activeElement)) || (a10 == null ? void 0 : a10.contains(d12.activeElement)));
  });
  (0, import_react29.useEffect)(() => D5 == null ? void 0 : D5(_2), [D5, _2]);
  let [E6, b4] = ae(), c13 = p7({ portals: E6, defaultContainers: [p8, a10] });
  E2(d12 == null ? void 0 : d12.defaultView, "focus", (l10) => {
    var R3, q2, W2, z4;
    l10.target !== window && l10.target instanceof HTMLElement && P4 === 0 && (f9() || p8 && a10 && (c13.contains(l10.target) || (q2 = (R3 = y8.current) == null ? void 0 : R3.contains) != null && q2.call(R3, l10.target) || (z4 = (W2 = s13.current) == null ? void 0 : W2.contains) != null && z4.call(W2, l10.target) || i6({ type: 1 })));
  }, true), h2(c13.resolveContainers, (l10, R3) => {
    i6({ type: 1 }), h(R3, T.Loose) || (l10.preventDefault(), p8 == null || p8.focus());
  }, P4 === 0);
  let M6 = o4((l10) => {
    i6({ type: 1 });
    let R3 = (() => l10 ? l10 instanceof HTMLElement ? l10 : "current" in l10 && l10.current instanceof HTMLElement ? l10.current : p8 : p8)();
    R3 == null || R3.focus();
  }), r9 = (0, import_react29.useMemo)(() => ({ close: M6, isPortalled: g4 }), [M6, g4]), v4 = (0, import_react29.useMemo)(() => ({ open: P4 === 0, close: M6 }), [P4, M6]), x4 = { ref: n6 };
  return import_react29.default.createElement(re2.Provider, { value: null }, import_react29.default.createElement(ue2.Provider, { value: T6 }, import_react29.default.createElement(ie2.Provider, { value: r9 }, import_react29.default.createElement(c5, { value: u(P4, { [0]: d5.Open, [1]: d5.Closed }) }, import_react29.default.createElement(b4, null, X({ ourProps: x4, theirProps: A, slot: v4, defaultTag: ke, name: "Popover" }), import_react29.default.createElement(c13.MainTreeNode, null))))));
}
var Ne2 = "button";
function Ue2(t14, o9) {
  let u8 = I(), { id: A = `headlessui-popover-button-${u8}`, ...O2 } = t14, [n6, e5] = oe2("Popover.Button"), { isPortalled: T6 } = fe("Popover.Button"), P4 = (0, import_react29.useRef)(null), p8 = `headlessui-focus-sentinel-${I()}`, F5 = Ee(), a10 = F5 == null ? void 0 : F5.closeOthers, y8 = _e2() !== null;
  (0, import_react29.useEffect)(() => {
    if (!y8)
      return e5({ type: 3, buttonId: A }), () => {
        e5({ type: 3, buttonId: null });
      };
  }, [y8, A, e5]);
  let [s13] = (0, import_react29.useState)(() => Symbol()), i6 = y2(P4, o9, y8 ? null : (r9) => {
    if (r9)
      n6.buttons.current.push(s13);
    else {
      let v4 = n6.buttons.current.indexOf(s13);
      v4 !== -1 && n6.buttons.current.splice(v4, 1);
    }
    n6.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r9 && e5({ type: 2, button: r9 });
  }), d12 = y2(P4, o9), g4 = n3(P4), L2 = o4((r9) => {
    var v4, x4, I7;
    if (y8) {
      if (n6.popoverState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), (x4 = (v4 = r9.target).click) == null || x4.call(v4), e5({ type: 1 }), (I7 = n6.button) == null || I7.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), n6.popoverState === 1 && (a10 == null || a10(n6.buttonId)), e5({ type: 0 });
          break;
        case o8.Escape:
          if (n6.popoverState !== 0)
            return a10 == null ? void 0 : a10(n6.buttonId);
          if (!P4.current || g4 != null && g4.activeElement && !P4.current.contains(g4.activeElement))
            return;
          r9.preventDefault(), r9.stopPropagation(), e5({ type: 1 });
          break;
      }
  }), h9 = o4((r9) => {
    y8 || r9.key === o8.Space && r9.preventDefault();
  }), _2 = o4((r9) => {
    var v4, x4;
    r3(r9.currentTarget) || t14.disabled || (y8 ? (e5({ type: 1 }), (v4 = n6.button) == null || v4.focus()) : (r9.preventDefault(), r9.stopPropagation(), n6.popoverState === 1 && (a10 == null || a10(n6.buttonId)), e5({ type: 0 }), (x4 = n6.button) == null || x4.focus()));
  }), B = o4((r9) => {
    r9.preventDefault(), r9.stopPropagation();
  }), D5 = n6.popoverState === 0, f9 = (0, import_react29.useMemo)(() => ({ open: D5 }), [D5]), E6 = s5(t14, P4), b4 = y8 ? { ref: d12, type: E6, onKeyDown: L2, onClick: _2 } : { ref: i6, id: n6.buttonId, type: E6, "aria-expanded": n6.popoverState === 0, "aria-controls": n6.panel ? n6.panelId : void 0, onKeyDown: L2, onKeyUp: h9, onClick: _2, onMouseDown: B }, c13 = n2(), M6 = o4(() => {
    let r9 = n6.panel;
    if (!r9)
      return;
    function v4() {
      u(c13.current, { [s8.Forwards]: () => O(r9, M.First), [s8.Backwards]: () => O(r9, M.Last) }) === N.Error && O(f().filter((I7) => I7.dataset.headlessuiFocusGuard !== "true"), u(c13.current, { [s8.Forwards]: M.Next, [s8.Backwards]: M.Previous }), { relativeTo: n6.button });
    }
    v4();
  });
  return import_react29.default.createElement(import_react29.default.Fragment, null, X({ ourProps: b4, theirProps: O2, slot: f9, defaultTag: Ne2, name: "Popover.Button" }), D5 && !y8 && T6 && import_react29.default.createElement(c4, { id: p8, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M6 }));
}
var We2 = "div";
var Ke2 = S2.RenderStrategy | S2.Static;
function je2(t14, o9) {
  let u8 = I(), { id: A = `headlessui-popover-overlay-${u8}`, ...O2 } = t14, [{ popoverState: n6 }, e5] = oe2("Popover.Overlay"), T6 = y2(o9), P4 = C(), p8 = (() => P4 !== null ? (P4 & d5.Open) === d5.Open : n6 === 0)(), F5 = o4((y8) => {
    if (r3(y8.currentTarget))
      return y8.preventDefault();
    e5({ type: 1 });
  }), a10 = (0, import_react29.useMemo)(() => ({ open: n6 === 0 }), [n6]);
  return X({ ourProps: { ref: T6, id: A, "aria-hidden": true, onClick: F5 }, theirProps: O2, slot: a10, defaultTag: We2, features: Ke2, visible: p8, name: "Popover.Overlay" });
}
var Ve2 = "div";
var $e2 = S2.RenderStrategy | S2.Static;
function Je2(t14, o9) {
  let u8 = I(), { id: A = `headlessui-popover-panel-${u8}`, focus: O2 = false, ...n6 } = t14, [e5, T6] = oe2("Popover.Panel"), { close: P4, isPortalled: p8 } = fe("Popover.Panel"), F5 = `headlessui-focus-sentinel-before-${I()}`, a10 = `headlessui-focus-sentinel-after-${I()}`, m9 = (0, import_react29.useRef)(null), y8 = y2(m9, o9, (f9) => {
    T6({ type: 4, panel: f9 });
  }), s13 = n3(m9);
  l(() => (T6({ type: 5, panelId: A }), () => {
    T6({ type: 5, panelId: null });
  }), [A, T6]);
  let i6 = C(), d12 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : e5.popoverState === 0)(), g4 = o4((f9) => {
    var E6;
    switch (f9.key) {
      case o8.Escape:
        if (e5.popoverState !== 0 || !m9.current || s13 != null && s13.activeElement && !m9.current.contains(s13.activeElement))
          return;
        f9.preventDefault(), f9.stopPropagation(), T6({ type: 1 }), (E6 = e5.button) == null || E6.focus();
        break;
    }
  });
  (0, import_react29.useEffect)(() => {
    var f9;
    t14.static || e5.popoverState === 1 && ((f9 = t14.unmount) == null || f9) && T6({ type: 4, panel: null });
  }, [e5.popoverState, t14.unmount, t14.static, T6]), (0, import_react29.useEffect)(() => {
    if (e5.__demoMode || !O2 || e5.popoverState !== 0 || !m9.current)
      return;
    let f9 = s13 == null ? void 0 : s13.activeElement;
    m9.current.contains(f9) || O(m9.current, M.First);
  }, [e5.__demoMode, O2, m9, e5.popoverState]);
  let L2 = (0, import_react29.useMemo)(() => ({ open: e5.popoverState === 0, close: P4 }), [e5, P4]), h9 = { ref: y8, id: A, onKeyDown: g4, onBlur: O2 && e5.popoverState === 0 ? (f9) => {
    var b4, c13, M6, r9, v4;
    let E6 = f9.relatedTarget;
    E6 && m9.current && ((b4 = m9.current) != null && b4.contains(E6) || (T6({ type: 1 }), ((M6 = (c13 = e5.beforePanelSentinel.current) == null ? void 0 : c13.contains) != null && M6.call(c13, E6) || (v4 = (r9 = e5.afterPanelSentinel.current) == null ? void 0 : r9.contains) != null && v4.call(r9, E6)) && E6.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _2 = n2(), B = o4(() => {
    let f9 = m9.current;
    if (!f9)
      return;
    function E6() {
      u(_2.current, { [s8.Forwards]: () => {
        var c13;
        O(f9, M.First) === N.Error && ((c13 = e5.afterPanelSentinel.current) == null || c13.focus());
      }, [s8.Backwards]: () => {
        var b4;
        (b4 = e5.button) == null || b4.focus({ preventScroll: true });
      } });
    }
    E6();
  }), D5 = o4(() => {
    let f9 = m9.current;
    if (!f9)
      return;
    function E6() {
      u(_2.current, { [s8.Forwards]: () => {
        var x4;
        if (!e5.button)
          return;
        let b4 = f(), c13 = b4.indexOf(e5.button), M6 = b4.slice(0, c13 + 1), v4 = [...b4.slice(c13 + 1), ...M6];
        for (let I7 of v4.slice())
          if (I7.dataset.headlessuiFocusGuard === "true" || (x4 = e5.panel) != null && x4.contains(I7)) {
            let l10 = v4.indexOf(I7);
            l10 !== -1 && v4.splice(l10, 1);
          }
        O(v4, M.First, { sorted: false });
      }, [s8.Backwards]: () => {
        var c13;
        O(f9, M.Previous) === N.Error && ((c13 = e5.button) == null || c13.focus());
      } });
    }
    E6();
  });
  return import_react29.default.createElement(re2.Provider, { value: A }, d12 && p8 && import_react29.default.createElement(c4, { id: F5, ref: e5.beforePanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B }), X({ ourProps: h9, theirProps: n6, slot: L2, defaultTag: Ve2, features: $e2, visible: d12, name: "Popover.Panel" }), d12 && p8 && import_react29.default.createElement(c4, { id: a10, ref: e5.afterPanelSentinel, features: p2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D5 }));
}
var Xe2 = "div";
function Ye2(t14, o9) {
  let u8 = (0, import_react29.useRef)(null), A = y2(u8, o9), [O2, n6] = (0, import_react29.useState)([]), e5 = o4((s13) => {
    n6((i6) => {
      let d12 = i6.indexOf(s13);
      if (d12 !== -1) {
        let g4 = i6.slice();
        return g4.splice(d12, 1), g4;
      }
      return i6;
    });
  }), T6 = o4((s13) => (n6((i6) => [...i6, s13]), () => e5(s13))), P4 = o4(() => {
    var d12;
    let s13 = e(u8);
    if (!s13)
      return false;
    let i6 = s13.activeElement;
    return (d12 = u8.current) != null && d12.contains(i6) ? true : O2.some((g4) => {
      var L2, h9;
      return ((L2 = s13.getElementById(g4.buttonId.current)) == null ? void 0 : L2.contains(i6)) || ((h9 = s13.getElementById(g4.panelId.current)) == null ? void 0 : h9.contains(i6));
    });
  }), p8 = o4((s13) => {
    for (let i6 of O2)
      i6.buttonId.current !== s13 && i6.close();
  }), F5 = (0, import_react29.useMemo)(() => ({ registerPopover: T6, unregisterPopover: e5, isFocusWithinPopoverGroup: P4, closeOthers: p8 }), [T6, e5, P4, p8]), a10 = (0, import_react29.useMemo)(() => ({}), []), m9 = t14, y8 = { ref: A };
  return import_react29.default.createElement(Pe2.Provider, { value: F5 }, X({ ourProps: y8, theirProps: m9, slot: a10, defaultTag: Xe2, name: "Popover.Group" }));
}
var qe2 = D(we2);
var ze2 = D(Ue2);
var Qe2 = D(je2);
var Ze2 = D(Je2);
var et = D(Ye2);
var kt = Object.assign(qe2, { Button: ze2, Overlay: Qe2, Panel: Ze2, Group: et });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react30 = __toESM(require_react(), 1);
function c11(a10 = 0) {
  let [l10, r9] = (0, import_react30.useState)(a10), t14 = f4(), o9 = (0, import_react30.useCallback)((e5) => {
    t14.current && r9((u8) => u8 | e5);
  }, [l10, t14]), m9 = (0, import_react30.useCallback)((e5) => Boolean(l10 & e5), [l10]), s13 = (0, import_react30.useCallback)((e5) => {
    t14.current && r9((u8) => u8 & ~e5);
  }, [r9, t14]), g4 = (0, import_react30.useCallback)((e5) => {
    t14.current && r9((u8) => u8 ^ e5);
  }, [r9]);
  return { flags: l10, addFlag: o9, hasFlag: m9, removeFlag: s13, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l9(r9) {
  let e5 = { called: false };
  return (...t14) => {
    if (!e5.called)
      return e5.called = true, r9(...t14);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d11(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.add(...e5);
}
function v3(t14, ...e5) {
  t14 && e5.length > 0 && t14.classList.remove(...e5);
}
function F4(t14, e5) {
  let n6 = o2();
  if (!t14)
    return n6.dispose;
  let { transitionDuration: m9, transitionDelay: o9 } = getComputedStyle(t14), [u8, p8] = [m9, o9].map((a10) => {
    let [r9 = 0] = a10.split(",").filter(Boolean).map((i6) => i6.includes("ms") ? parseFloat(i6) : parseFloat(i6) * 1e3).sort((i6, f9) => f9 - i6);
    return r9;
  }), l10 = u8 + p8;
  if (l10 !== 0) {
    n6.group((r9) => {
      r9.setTimeout(() => {
        e5(), r9.dispose();
      }, l10), r9.addEventListener(t14, "transitionrun", (i6) => {
        i6.target === i6.currentTarget && r9.dispose();
      });
    });
    let a10 = n6.addEventListener(t14, "transitionend", (r9) => {
      r9.target === r9.currentTarget && (e5(), a10());
    });
  } else
    e5();
  return n6.add(() => e5()), n6.dispose;
}
function y6(t14, e5, n6, m9) {
  let o9 = n6 ? "enter" : "leave", u8 = o2(), p8 = m9 !== void 0 ? l9(m9) : () => {
  };
  o9 === "enter" && (t14.removeAttribute("hidden"), t14.style.display = "");
  let l10 = u(o9, { enter: () => e5.enter, leave: () => e5.leave }), a10 = u(o9, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r9 = u(o9, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v3(t14, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), d11(t14, ...l10, ...r9), u8.nextFrame(() => {
    v3(t14, ...r9), d11(t14, ...a10), F4(t14, () => (v3(t14, ...l10), d11(t14, ...e5.entered), p8()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D4({ container: i6, direction: t14, classes: o9, onStart: s13, onStop: u8 }) {
  let a10 = f4(), c13 = p(), r9 = s2(t14);
  l(() => {
    let e5 = o2();
    c13.add(e5.dispose);
    let n6 = i6.current;
    if (n6 && r9.current !== "idle" && a10.current)
      return e5.dispose(), s13.current(r9.current), e5.add(y6(n6, o9.current, r9.current === "enter", () => {
        e5.dispose(), u8.current(r9.current);
      })), e5.dispose;
  }, [t14]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x3(t14 = "") {
  return t14.split(" ").filter((n6) => n6.trim().length > 1);
}
var I6 = (0, import_react31.createContext)(null);
I6.displayName = "TransitionContext";
var Ce = ((r9) => (r9.Visible = "visible", r9.Hidden = "hidden", r9))(Ce || {});
function Ee2() {
  let t14 = (0, import_react31.useContext)(I6);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
function be2() {
  let t14 = (0, import_react31.useContext)(_);
  if (t14 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t14;
}
var _ = (0, import_react31.createContext)(null);
_.displayName = "NestingContext";
function M5(t14) {
  return "children" in t14 ? M5(t14.children) : t14.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function re3(t14, n6) {
  let r9 = s2(t14), o9 = (0, import_react31.useRef)([]), N5 = f4(), H5 = p(), p8 = o4((s13, e5 = j.Hidden) => {
    let a10 = o9.current.findIndex(({ el: i6 }) => i6 === s13);
    a10 !== -1 && (u(e5, { [j.Unmount]() {
      o9.current.splice(a10, 1);
    }, [j.Hidden]() {
      o9.current[a10].state = "hidden";
    } }), H5.microTask(() => {
      var i6;
      !M5(o9) && N5.current && ((i6 = r9.current) == null || i6.call(r9));
    }));
  }), P4 = o4((s13) => {
    let e5 = o9.current.find(({ el: a10 }) => a10 === s13);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : o9.current.push({ el: s13, state: "visible" }), () => p8(s13, j.Unmount);
  }), h9 = (0, import_react31.useRef)([]), v4 = (0, import_react31.useRef)(Promise.resolve()), T6 = (0, import_react31.useRef)({ enter: [], leave: [], idle: [] }), g4 = o4((s13, e5, a10) => {
    h9.current.splice(0), n6 && (n6.chains.current[e5] = n6.chains.current[e5].filter(([i6]) => i6 !== s13)), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      h9.current.push(i6);
    })]), n6 == null || n6.chains.current[e5].push([s13, new Promise((i6) => {
      Promise.all(T6.current[e5].map(([l10, R3]) => R3)).then(() => i6());
    })]), e5 === "enter" ? v4.current = v4.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a10(e5)) : a10(e5);
  }), f9 = o4((s13, e5, a10) => {
    Promise.all(T6.current[e5].splice(0).map(([i6, l10]) => l10)).then(() => {
      var i6;
      (i6 = h9.current.shift()) == null || i6();
    }).then(() => a10(e5));
  });
  return (0, import_react31.useMemo)(() => ({ children: o9, register: P4, unregister: p8, onStart: g4, onStop: f9, wait: v4, chains: T6 }), [P4, p8, o9, g4, f9, T6, v4]);
}
function Se() {
}
var xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie3(t14) {
  var r9;
  let n6 = {};
  for (let o9 of xe)
    n6[o9] = (r9 = t14[o9]) != null ? r9 : Se;
  return n6;
}
function Pe3(t14) {
  let n6 = (0, import_react31.useRef)(ie3(t14));
  return (0, import_react31.useEffect)(() => {
    n6.current = ie3(t14);
  }, [t14]), n6;
}
var Re = "div";
var oe3 = S2.RenderStrategy;
function ye2(t14, n6) {
  let { beforeEnter: r9, afterEnter: o9, beforeLeave: N5, afterLeave: H5, enter: p8, enterFrom: P4, enterTo: h9, entered: v4, leave: T6, leaveFrom: g4, leaveTo: f9, ...s13 } = t14, e5 = (0, import_react31.useRef)(null), a10 = y2(e5, n6), i6 = s13.unmount ? j.Unmount : j.Hidden, { show: l10, appear: R3, initial: d12 } = Ee2(), [u8, U2] = (0, import_react31.useState)(l10 ? "visible" : "hidden"), K2 = be2(), { register: L2, unregister: w5 } = K2, j4 = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(() => L2(e5), [L2, e5]), (0, import_react31.useEffect)(() => {
    if (i6 === j.Hidden && e5.current) {
      if (l10 && u8 !== "visible") {
        U2("visible");
        return;
      }
      return u(u8, { ["hidden"]: () => w5(e5), ["visible"]: () => L2(e5) });
    }
  }, [u8, e5, L2, w5, l10, i6]);
  let k2 = s2({ enter: x3(p8), enterFrom: x3(P4), enterTo: x3(h9), entered: x3(v4), leave: x3(T6), leaveFrom: x3(g4), leaveTo: x3(f9) }), O2 = Pe3({ beforeEnter: r9, afterEnter: o9, beforeLeave: N5, afterLeave: H5 }), G = l2();
  (0, import_react31.useEffect)(() => {
    if (G && u8 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, u8, G]);
  let B = d12 && !R3, ae2 = (() => !G || B || j4.current === l10 ? "idle" : l10 ? "enter" : "leave")(), D5 = c11(0), le2 = o4((C4) => u(C4, { enter: () => {
    D5.addFlag(d5.Opening), O2.current.beforeEnter();
  }, leave: () => {
    D5.addFlag(d5.Closing), O2.current.beforeLeave();
  }, idle: () => {
  } })), ue3 = o4((C4) => u(C4, { enter: () => {
    D5.removeFlag(d5.Opening), O2.current.afterEnter();
  }, leave: () => {
    D5.removeFlag(d5.Closing), O2.current.afterLeave();
  }, idle: () => {
  } })), V2 = re3(() => {
    U2("hidden"), w5(e5);
  }, K2);
  D4({ container: e5, classes: k2, direction: ae2, onStart: s2((C4) => {
    V2.onStart(e5, C4, le2);
  }), onStop: s2((C4) => {
    V2.onStop(e5, C4, ue3), C4 === "leave" && !M5(V2) && (U2("hidden"), w5(e5));
  }) }), (0, import_react31.useEffect)(() => {
    B && (i6 === j.Hidden ? j4.current = null : j4.current = l10);
  }, [l10, B, u8]);
  let J3 = s13, Te = { ref: a10 };
  return R3 && l10 && d12 && (J3 = { ...J3, className: e2(s13.className, ...k2.current.enter, ...k2.current.enterFrom) }), import_react31.default.createElement(_.Provider, { value: V2 }, import_react31.default.createElement(c5, { value: u(u8, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | D5.flags }, X({ ourProps: Te, theirProps: J3, defaultTag: Re, features: oe3, visible: u8 === "visible", name: "Transition.Child" })));
}
function Ne3(t14, n6) {
  let { show: r9, appear: o9 = false, unmount: N5, ...H5 } = t14, p8 = (0, import_react31.useRef)(null), P4 = y2(p8, n6);
  l2();
  let h9 = C();
  if (r9 === void 0 && h9 !== null && (r9 = (h9 & d5.Open) === d5.Open), ![true, false].includes(r9))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v4, T6] = (0, import_react31.useState)(r9 ? "visible" : "hidden"), g4 = re3(() => {
    T6("hidden");
  }), [f9, s13] = (0, import_react31.useState)(true), e5 = (0, import_react31.useRef)([r9]);
  l(() => {
    f9 !== false && e5.current[e5.current.length - 1] !== r9 && (e5.current.push(r9), s13(false));
  }, [e5, r9]);
  let a10 = (0, import_react31.useMemo)(() => ({ show: r9, appear: o9, initial: f9 }), [r9, o9, f9]);
  (0, import_react31.useEffect)(() => {
    if (r9)
      T6("visible");
    else if (!M5(g4))
      T6("hidden");
    else {
      let d12 = p8.current;
      if (!d12)
        return;
      let u8 = d12.getBoundingClientRect();
      u8.x === 0 && u8.y === 0 && u8.width === 0 && u8.height === 0 && T6("hidden");
    }
  }, [r9, g4]);
  let i6 = { unmount: N5 }, l10 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t14.beforeEnter) == null || d12.call(t14);
  }), R3 = o4(() => {
    var d12;
    f9 && s13(false), (d12 = t14.beforeLeave) == null || d12.call(t14);
  });
  return import_react31.default.createElement(_.Provider, { value: g4 }, import_react31.default.createElement(I6.Provider, { value: a10 }, X({ ourProps: { ...i6, as: import_react31.Fragment, children: import_react31.default.createElement(se2, { ref: P4, ...i6, ...H5, beforeEnter: l10, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react31.Fragment, features: oe3, visible: v4 === "visible", name: "Transition" })));
}
function He3(t14, n6) {
  let r9 = (0, import_react31.useContext)(I6) !== null, o9 = C() !== null;
  return import_react31.default.createElement(import_react31.default.Fragment, null, !r9 && o9 ? import_react31.default.createElement(z3, { ref: n6, ...t14 }) : import_react31.default.createElement(se2, { ref: n6, ...t14 }));
}
var z3 = D(Ne3);
var se2 = D(ye2);
var De3 = D(He3);
var $e3 = Object.assign(z3, { Child: De3, Root: z3 });

// node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js
var React = __toESM(require_react(), 1);
function ArrowPathIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
var ForwardRef = React.forwardRef(ArrowPathIcon);
var ArrowPathIcon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React2 = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef2 = React2.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/ChartPieIcon.js
var React3 = __toESM(require_react(), 1);
function ChartPieIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
  }), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
  }));
}
var ForwardRef3 = React3.forwardRef(ChartPieIcon);
var ChartPieIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/CursorArrowRaysIcon.js
var React4 = __toESM(require_react(), 1);
function CursorArrowRaysIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
  }));
}
var ForwardRef4 = React4.forwardRef(CursorArrowRaysIcon);
var CursorArrowRaysIcon_default = ForwardRef4;

// node_modules/@heroicons/react/24/outline/esm/FingerPrintIcon.js
var React5 = __toESM(require_react(), 1);
function FingerPrintIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
  }));
}
var ForwardRef5 = React5.forwardRef(FingerPrintIcon);
var FingerPrintIcon_default = ForwardRef5;

// node_modules/@heroicons/react/24/outline/esm/SquaresPlusIcon.js
var React6 = __toESM(require_react(), 1);
function SquaresPlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React6.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React6.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React6.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
  }));
}
var ForwardRef6 = React6.forwardRef(SquaresPlusIcon);
var SquaresPlusIcon_default = ForwardRef6;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React7 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React7.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React7.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React7.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef7 = React7.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef7;

// node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
var React8 = __toESM(require_react(), 1);
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React8.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React8.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
    clipRule: "evenodd"
  }));
}
var ForwardRef8 = React8.forwardRef(ChevronDownIcon);
var ChevronDownIcon_default = ForwardRef8;

// node_modules/@heroicons/react/20/solid/esm/PhoneIcon.js
var React9 = __toESM(require_react(), 1);
function PhoneIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React9.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React9.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React9.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef9 = React9.forwardRef(PhoneIcon);
var PhoneIcon_default = ForwardRef9;

// node_modules/@heroicons/react/20/solid/esm/PlayCircleIcon.js
var React10 = __toESM(require_react(), 1);
function PlayCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React10.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React10.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React10.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z",
    clipRule: "evenodd"
  }));
}
var ForwardRef10 = React10.forwardRef(PlayCircleIcon);
var PlayCircleIcon_default = ForwardRef10;

// app/components/Header.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var products = [
  { name: "School Fees", description: "Cover educational expenses effortlessly.", href: "/Schoolfees", icon: ChartPieIcon_default },
  { name: "Medical", description: "Financial support for healthcare needs.", href: "#", icon: CursorArrowRaysIcon_default },
  { name: "Personal", description: "Flexible funds for your individual needs", href: "#", icon: FingerPrintIcon_default },
  { name: "Emergency", description: "Quick cash for unexpected situations.", href: "#", icon: SquaresPlusIcon_default },
  { name: "Home Improvements", description: "Upgrade your living space hassle-free.", href: "#", icon: ArrowPathIcon_default },
  { name: "Construction", description: "Funding for building your dream project..", href: "#", icon: ArrowPathIcon_default },
  { name: "Business", description: "Boost your business with tailored financing.", href: "#", icon: ArrowPathIcon_default },
  { name: "Short Term", description: "Temporary financial assistance made easy.", href: "#", icon: ArrowPathIcon_default }
];
var callsToAction = [
  { name: "Watch HowToApply", href: "#", icon: PlayCircleIcon_default },
  { name: "Contact Front Desk", href: "#", icon: PhoneIcon_default }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header_default() {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react32.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-19 w-auto", src: Logo_default, alt: "" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(true),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/Header.jsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Group, { className: "hidden lg:flex lg:gap-x-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt, { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Button, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
            "Loans",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 60,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            $e3,
            {
              as: import_react32.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Panel, { className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: products.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-6 w-6 text-gray-600 group-hover:text-indigo-600", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/components/Header.jsx",
                        lineNumber: 80,
                        columnNumber: 25
                      }, this) }, void 0, false, {
                        fileName: "app/components/Header.jsx",
                        lineNumber: 79,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-auto", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "block font-semibold text-gray-900", children: [
                          item.name,
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                            fileName: "app/components/Header.jsx",
                            lineNumber: 85,
                            columnNumber: 27
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/Header.jsx",
                          lineNumber: 83,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-gray-600", children: item.description }, void 0, false, {
                          fileName: "app/components/Header.jsx",
                          lineNumber: 87,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/Header.jsx",
                        lineNumber: 82,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  item.name,
                  true,
                  {
                    fileName: "app/components/Header.jsx",
                    lineNumber: 75,
                    columnNumber: 21
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/components/Header.jsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50", children: callsToAction.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: item.href,
                    className: "flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/components/Header.jsx",
                        lineNumber: 99,
                        columnNumber: 23
                      }, this),
                      item.name
                    ]
                  },
                  item.name,
                  true,
                  {
                    fileName: "app/components/Header.jsx",
                    lineNumber: 94,
                    columnNumber: 21
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/components/Header.jsx",
                  lineNumber: 92,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/Header.jsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 63,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "Faq" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "Contact" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "apply loan" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Log in ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 120,
          columnNumber: 20
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-10" }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 129,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "h-8 w-auto",
                src: Logo_default,
                alt: ""
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "-m-2.5 rounded-md p-2.5 text-gray-700",
              onClick: () => setMobileMenuOpen(false),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                  fileName: "app/components/Header.jsx",
                  lineNumber: 141,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/Header.jsx",
                  lineNumber: 142,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 136,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", className: "-mx-3", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: [
                "Product",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  ChevronDownIcon_default,
                  {
                    className: classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none"),
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Header.jsx",
                    lineNumber: 153,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/Header.jsx",
                lineNumber: 151,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "mt-2 space-y-2", children: [...products, ...callsToAction].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                ve.Button,
                {
                  as: "a",
                  href: item.href,
                  className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name,
                false,
                {
                  fileName: "app/components/Header.jsx",
                  lineNumber: 160,
                  columnNumber: 27
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/Header.jsx",
                lineNumber: 158,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Header.jsx",
              lineNumber: 150,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 148,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Features"
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 173,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Marketplace"
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 179,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Company"
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 185,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
              children: "Log in"
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 193,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 192,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.jsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

// app/img/easy-loans.png
var easy_loans_default = "/build/_assets/easy-loans-L3BYY7DN.png";

// app/components/Hero.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Hero_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center hdrtopinfo", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hdrtoplft", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "tel:+254717 513000", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "26", height: "26", viewBox: "0 -0.5 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 mr-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z", stroke: "#fff", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 9,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z", fill: "#fff" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 10,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 8,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Nairobi, Kenya. Tel: 0718 210519 / 0717 513000" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 12,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:info@africancapital.net", className: "flex items-center ml-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 17,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "info@africancapital.net" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 6,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-auto flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "soc mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.facebook.com/phoenixofswaziland", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 28,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 27,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 26,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 25,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.instagram.com/phoenix.of.swaziland.assurance", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185 c-0.23-0.592-0.538-1.094-1.038-1.594c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418 C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 35,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 34,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 33,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://twitter.com/PhoenixSwazila1", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 41,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 40,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.linkedin.com/in/phoenix-of-swaziland-assurance-company-limited-982699260", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.674,1.225-1.387,2.522-1.387c2.695,0,3.195,1.774,3.195,4.08L18.339,18.338L18.339,18.338z" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 49,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 47,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 46,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline", children: "Get a quote" }, void 0, false, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 22,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 5,
    columnNumber: 8
  }, this) }, void 0, false, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this);
}

// app/img/education4.jpg
var education4_default = "/build/_assets/education4-HUKRS7QA.jpg";

// app/img/housing.png
var housing_default = "/build/_assets/housing-AML73QFP.png";

// app/img/landmachines.jpg
var landmachines_default = "/build/_assets/landmachines-HVT2T2CG.jpg";

// app/img/medical1.jpg
var medical1_default = "/build/_assets/medical1-NJWBQ76I.jpg";

// app/components/Body.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Body_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "carouselDarkVariant", className: "relative", "data-twe-carousel-init": true, "data-twe-ride": "carousel", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 z-20 mx-[15%] mb-4 flex items-center justify-center p-0", "data-twe-carousel-indicators": true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "0", "data-twe-carousel-active": true, className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-current": "true", "aria-label": "Slide 1" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "1", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 2" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "2", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 3" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 13,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "2", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 3" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 14,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Body.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative w-full overflow-hidden after:clear-both after:block after:content-['']", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative float-left -mr-full w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": true, "data-twe-carousel-item": true, "data-twe-carousel-active": true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: education4_default, alt: "Education" }, void 0, false, {
          fileName: "app/components/Body.jsx",
          lineNumber: 19,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "text-xl", children: "First slide label" }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 21,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Some representative placeholder content for the first slide." }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 22,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Body.jsx",
          lineNumber: 20,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Body.jsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": true, "data-twe-carousel-item": true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: housing_default, alt: "Housing" }, void 0, false, {
          fileName: "app/components/Body.jsx",
          lineNumber: 27,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "text-xl", children: "Second slide label" }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 29,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Some representative placeholder content for the second slide." }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 30,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Body.jsx",
          lineNumber: 28,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Body.jsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": true, "data-twe-carousel-item": true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: landmachines_default, alt: "Farming" }, void 0, false, {
          fileName: "app/components/Body.jsx",
          lineNumber: 35,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "text-xl", children: "Third slide label" }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 37,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Some representative placeholder content for the third slide." }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Body.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Body.jsx",
        lineNumber: 34,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": true, "data-twe-carousel-item": true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: medical1_default, alt: "Medical" }, void 0, false, {
          fileName: "app/components/Body.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "text-xl", children: "Fourth slide label" }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 45,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Some representative placeholder content for the fourth slide." }, void 0, false, {
            fileName: "app/components/Body.jsx",
            lineNumber: 46,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Body.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Body.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Body.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "absolute bottom-0 left-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90", type: "button", "data-twe-target": "#carouselDarkVariant", "data-twe-slide": "prev", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "inline-block h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 54,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 53,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Previous" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Body.jsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "absolute bottom-0 right-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90", type: "button", "data-twe-target": "#carouselDarkVariant", "data-twe-slide": "next", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "inline-block h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 63,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 62,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Next" }, void 0, false, {
        fileName: "app/components/Body.jsx",
        lineNumber: 66,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Body.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Body.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Body.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/Maps.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Maps_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "text-gray-600 body-font relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute inset-0 bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "iframe",
      {
        title: "map",
        width: "100%",
        height: "100%",
        frameBorder: "0",
        marginHeight: "0",
        marginWidth: "0",
        scrolling: "no",
        src: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed",
        style: { border: "none" }
      },
      void 0,
      false,
      {
        fileName: "app/components/Maps.jsx",
        lineNumber: 7,
        columnNumber: 25
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Maps.jsx",
      lineNumber: 6,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Maps.jsx",
      lineNumber: 5,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container px-5 py-24 mx-auto flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-gray-900 text-lg mb-1 font-medium title-font", children: "Feedback" }, void 0, false, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 22,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "leading-relaxed mb-5 text-gray-600", children: "Post-ironic portland shabby chic echo park, banjo fashion axe" }, void 0, false, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 25,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "label",
          {
            htmlFor: "email",
            className: "leading-7 text-sm text-gray-600",
            children: "Email"
          },
          void 0,
          false,
          {
            fileName: "app/components/Maps.jsx",
            lineNumber: 30,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          },
          void 0,
          false,
          {
            fileName: "app/components/Maps.jsx",
            lineNumber: 36,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 29,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "label",
          {
            htmlFor: "message",
            className: "leading-7 text-sm text-gray-600",
            children: "Message"
          },
          void 0,
          false,
          {
            fileName: "app/components/Maps.jsx",
            lineNumber: 44,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "textarea",
          {
            id: "message",
            name: "message",
            className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          },
          void 0,
          false,
          {
            fileName: "app/components/Maps.jsx",
            lineNumber: 50,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 43,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg", children: "Button" }, void 0, false, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-gray-500 mt-3", children: "Chicharrones blog helvetica normcore iceland tousled brook viral artisan." }, void 0, false, {
        fileName: "app/components/Maps.jsx",
        lineNumber: 59,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Maps.jsx",
      lineNumber: 21,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Maps.jsx",
      lineNumber: 20,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Maps.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Maps.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Testimony.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Testimony_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { id: "visual", viewBox: "0 0 2000 600", className: "w-full absolute top-0 left-0 z-0 ", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M0 18L65 18L65 66L129 66L129 37L194 37L194 44L258 44L258 25L323 25L323 35L387 35L387 36L452 36L452 38L516 38L516 34L581 34L581 26L645 26L645 68L710 68L710 32L774 32L774 27L839 27L839 29L903 29L903 31L968 31L968 83L1032 83L1032 65L1097 65L1097 57L1161 57L1161 66L1226 66L1226 90L1290 90L1290 66L1355 66L1355 32L1419 32L1419 35L1484 35L1484 18L1548 18L1548 94L1613 94L1613 96L1677 96L1677 72L1742 72L1742 88L1806 88L1806 42L1871 42L1871 46L1935 46L1935 33L2000 33L2000 18L2000 0L2000 0L1935 0L1935 0L1871 0L1871 0L1806 0L1806 0L1742 0L1742 0L1677 0L1677 0L1613 0L1613 0L1548 0L1548 0L1484 0L1484 0L1419 0L1419 0L1355 0L1355 0L1290 0L1290 0L1226 0L1226 0L1161 0L1161 0L1097 0L1097 0L1032 0L1032 0L968 0L968 0L903 0L903 0L839 0L839 0L774 0L774 0L710 0L710 0L645 0L645 0L581 0L581 0L516 0L516 0L452 0L452 0L387 0L387 0L323 0L323 0L258 0L258 0L194 0L194 0L129 0L129 0L65 0L65 0L0 0Z", fill: "#eaeaea", strokeLinecap: "square", strokeLinejoin: "miter" }, void 0, false, {
      fileName: "app/components/Testimony.jsx",
      lineNumber: 7,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Testimony.jsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-2xl mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-light text-black sm:text-4xl sm:leading-tight", children: "Trusted by world class companies" }, void 0, false, {
        fileName: "app/components/Testimony.jsx",
        lineNumber: 12,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Testimony.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 18,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 17,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 21,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 20,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 24,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 23,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 27,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 30,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 29,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Testimony.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center mt-10 space-x-3 md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-blue-600 block" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-gray-300 block" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-gray-300 block" }, void 0, false, {
          fileName: "app/components/Testimony.jsx",
          lineNumber: 38,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Testimony.jsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-10 text-base text-center text-black md:mt-20 p-6 py-3 border w-72 border-black rounded-full mx-auto", children: "and, more companies" }, void 0, false, {
        fileName: "app/components/Testimony.jsx",
        lineNumber: 41,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Testimony.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Testimony.jsx",
    lineNumber: 5,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Testimony.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/footer.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function footer_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { class: "bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { class: "max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { class: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: easy_loans_default }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "max-w-xs mt-4 text-sm text-gray-600", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium." }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { class: "flex mt-8 space-x-6 text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { class: "sr-only", children: " Facebook " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 16,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 18,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 17,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { class: "sr-only", children: " Instagram " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 22,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 24,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 23,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { class: "sr-only", children: " Twitter " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 28,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 30,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 29,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { class: "sr-only", children: " GitHub " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 34,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 36,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { class: "sr-only", children: " Dribbble " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 42,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 41,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { class: "grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "font-medium", children: "Company" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " About " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Meet the Team " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " History " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Careers " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 52,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 48,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "font-medium", children: "Services" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " 1on1 Coaching " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Company Review " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Accounts Review " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " HR Consulting " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " SEO Optimisation " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 68,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "font-medium", children: "Helpful Links" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 72,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Contact " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " FAQs " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Live Chat " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 78,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 75,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "font-medium", children: "Legal" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Privacy Policy " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Terms & Conditions " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 87,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Returns Policy " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { class: "hover:opacity-75", href: true, children: " Accessibility " }, void 0, false, {
              fileName: "app/components/footer.jsx",
              lineNumber: 89,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer.jsx",
            lineNumber: 85,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 81,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { class: "mt-8 text-xs text-gray-800", children: "\xA9 2022 Comany Name" }, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 94,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 1
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "div",
    {
      style: {},
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Hero_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 16,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 17,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Body_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 18,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Maps_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 19,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Testimony_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 20,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(footer_default, {}, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 21,
          columnNumber: 6
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-MBQJD3JS.js.map
