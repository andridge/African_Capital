var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PE5T3LGN.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("@vercel/analytics/react"), import_jsx_runtime2 = require("react/jsx-runtime"), { MetaFunction } = require("@vercel/remix"), meta = () => ({
  charset: "utf-8",
  title: ".........app name .....",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Analytics, {})
    ] })
  ] });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/img/Logo.png
var Logo_default = "/build/_assets/Logo-K4PZ2HRR.png";

// app/components/Header.jsx
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_solid = require("@heroicons/react/20/solid"), import_jsx_runtime3 = require("react/jsx-runtime"), products = [
  { name: "School Fees", description: "Cover educational expenses effortlessly.", href: "/Schoolfees", icon: import_outline.ChartPieIcon },
  { name: "Medical", description: "Financial support for healthcare needs.", href: "#", icon: import_outline.CursorArrowRaysIcon },
  { name: "Personal", description: "Flexible funds for your individual needs", href: "#", icon: import_outline.FingerPrintIcon },
  { name: "Emergency", description: "Quick cash for unexpected situations.", href: "#", icon: import_outline.SquaresPlusIcon },
  { name: "Home Improvements", description: "Upgrade your living space hassle-free.", href: "#", icon: import_outline.ArrowPathIcon },
  { name: "Construction", description: "Funding for building your dream project..", href: "#", icon: import_outline.ArrowPathIcon },
  { name: "Business", description: "Boost your business with tailored financing.", href: "#", icon: import_outline.ArrowPathIcon },
  { name: "Short Term", description: "Temporary financial assistance made easy.", href: "#", icon: import_outline.ArrowPathIcon }
], callsToAction = [
  { name: "Watch HowToApply", href: "#", icon: import_solid.PlayCircleIcon },
  { name: "Contact Front Desk", href: "#", icon: import_solid.PhoneIcon }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header_default() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Your Company" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "h-19 w-auto", src: Logo_default, alt: "" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
          onClick: () => setMobileMenuOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Open main menu" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover.Group, { className: "hidden lg:flex lg:gap-x-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover, { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover.Button, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
            "Loans",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_solid.ChevronDownIcon, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react5.Transition,
            {
              as: import_react4.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Popover.Panel, { className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "p-4", children: products.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  "div",
                  {
                    className: "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(item.icon, { className: "h-6 w-6 text-gray-600 group-hover:text-indigo-600", "aria-hidden": "true" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-auto", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: item.href, className: "block font-semibold text-gray-900", children: [
                          item.name,
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "absolute inset-0" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-1 text-gray-600", children: item.description })
                      ] })
                    ]
                  },
                  item.name
                )) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50", children: callsToAction.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  "a",
                  {
                    href: item.href,
                    className: "flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(item.icon, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }),
                      item.name
                    ]
                  },
                  item.name
                )) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "Faq" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "Contact" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: "apply loan" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: [
        "Log in ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "\u2192" })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "fixed inset-0 z-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Dialog.Panel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Your Company" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "img",
              {
                className: "h-8 w-auto",
                src: Logo_default,
                alt: ""
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              className: "-m-2.5 rounded-md p-2.5 text-gray-700",
              onClick: () => setMobileMenuOpen(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Close menu" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2 py-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Disclosure, { as: "div", className: "-mx-3", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react5.Disclosure.Button, { className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: [
                "Product",
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_solid.ChevronDownIcon,
                  {
                    className: classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none"),
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Disclosure.Panel, { className: "mt-2 space-y-2", children: [...products, ...callsToAction].map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_react5.Disclosure.Button,
                {
                  as: "a",
                  href: item.href,
                  className: "block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name
              )) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Features"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Marketplace"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "a",
              {
                href: "#",
                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                children: "Company"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: "#",
              className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
              children: "Log in"
            }
          ) })
        ] }) })
      ] })
    ] })
  ] }) });
}

// app/img/easy-loans.png
var easy_loans_default = "/build/_assets/easy-loans-L3BYY7DN.png";

// app/components/Hero.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Hero_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center hdrtopinfo", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hdrtoplft", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { href: "tel:+254717 513000", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "26", height: "26", viewBox: "0 -0.5 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 mr-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.24033 8.16795C6.99433 7.37295 7.26133 7.14995 7.58233 7.04695C7.80482 6.98843 8.03822 6.98499 8.26233 7.03695C8.55733 7.12295 8.63433 7.18795 9.60233 8.15095C10.4523 8.99695 10.5363 9.08895 10.6183 9.25095C10.7769 9.54253 10.8024 9.88825 10.6883 10.1999C10.6043 10.4349 10.4803 10.5909 9.96533 11.1089L9.62933 11.4459C9.54093 11.5356 9.51997 11.6719 9.57733 11.7839C10.3232 13.0565 11.3812 14.1179 12.6513 14.8679C12.7978 14.9465 12.9783 14.921 13.0973 14.8049L13.4203 14.4869C13.6199 14.2821 13.8313 14.0891 14.0533 13.9089C14.4015 13.6935 14.8362 13.6727 15.2033 13.8539C15.3823 13.9379 15.4423 13.9929 16.3193 14.8669C17.2193 15.7669 17.2483 15.7959 17.3493 16.0029C17.5379 16.3458 17.536 16.7618 17.3443 17.1029C17.2443 17.2949 17.1883 17.3649 16.6803 17.8839C16.3733 18.1979 16.0803 18.4839 16.0383 18.5259C15.6188 18.8727 15.081 19.043 14.5383 19.0009C13.5455 18.9101 12.5847 18.6029 11.7233 18.1009C9.81416 17.0894 8.18898 15.6155 6.99633 13.8139C6.73552 13.4373 6.50353 13.0415 6.30233 12.6299C5.76624 11.7109 5.48909 10.6638 5.50033 9.59995C5.54065 9.04147 5.8081 8.52391 6.24033 8.16795Z", stroke: "#fff", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M14.8417 4.29409C14.4518 4.15416 14.0224 4.35677 13.8824 4.74664C13.7425 5.1365 13.9451 5.56598 14.335 5.70591L14.8417 4.29409ZM18.7868 10.0832C18.9333 10.4707 19.3661 10.666 19.7536 10.5195C20.141 10.373 20.3364 9.94021 20.1899 9.55276L18.7868 10.0832ZM13.6536 6.52142C13.2495 6.43018 12.848 6.68374 12.7568 7.08778C12.6655 7.49182 12.9191 7.89333 13.3231 7.98458L13.6536 6.52142ZM16.5696 11.1774C16.6676 11.5799 17.0733 11.8267 17.4757 11.7287C17.8782 11.6307 18.125 11.2251 18.0271 10.8226L16.5696 11.1774ZM14.335 5.70591C16.3882 6.44286 18.0153 8.04271 18.7868 10.0832L20.1899 9.55276C19.2631 7.10139 17.3084 5.17942 14.8417 4.29409L14.335 5.70591ZM13.3231 7.98458C14.9238 8.34607 16.1815 9.58301 16.5696 11.1774L18.0271 10.8226C17.5042 8.67475 15.8098 7.0084 13.6536 6.52142L13.3231 7.98458Z", fill: "#fff" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Nairobi, Kenya. Tel: 0718 210519 / 0717 513000" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { href: "mailto:info@africancapital.net", className: "flex items-center ml-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 mr-1", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "info@africancapital.net" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "ml-auto flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "soc mr-4", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://www.facebook.com/phoenixofswaziland", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" }) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://www.instagram.com/phoenix.of.swaziland.assurance", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185 c-0.23-0.592-0.538-1.094-1.038-1.594c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418 C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" }) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://twitter.com/PhoenixSwazila1", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z" }) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://www.linkedin.com/in/phoenix-of-swaziland-assurance-company-limited-982699260", target: "_blank", className: "block w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "fill-current", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.674,1.225-1.387,2.522-1.387c2.695,0,3.195,1.774,3.195,4.08L18.339,18.338L18.339,18.338z" }) }) }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline", children: "Get a quote" })
    ] })
  ] }) });
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
var import_jsx_runtime5 = require("react/jsx-runtime");
function Body_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "carouselDarkVariant", className: "relative", "data-twe-carousel-init": !0, "data-twe-ride": "carousel", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-x-0 bottom-0 z-20 mx-[15%] mb-4 flex items-center justify-center p-0", "data-twe-carousel-indicators": !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "0", "data-twe-carousel-active": !0, className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-current": "true", "aria-label": "Slide 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "1", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "2", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { "data-twe-target": "#carouselDarkVariant", "data-twe-slide-to": "2", className: "mx-1 box-content h-1 w-10 flex-initial cursor-pointer border-0 border-y-5 border-transparent bg-black bg-clip-padding p-0 -ml-10 opacity-50 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "aria-label": "Slide 3" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-full overflow-hidden after:clear-both after:block after:content-['']", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative float-left -mr-full w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": !0, "data-twe-carousel-item": !0, "data-twe-carousel-active": !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: education4_default, alt: "Education" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { className: "text-xl", children: "First slide label" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Some representative placeholder content for the first slide." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": !0, "data-twe-carousel-item": !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: housing_default, alt: "Housing" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { className: "text-xl", children: "Second slide label" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Some representative placeholder content for the second slide." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": !0, "data-twe-carousel-item": !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: landmachines_default, alt: "Farming" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { className: "text-xl", children: "Third slide label" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Some representative placeholder content for the third slide." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative float-left -mr-full hidden w-full !transform-none opacity-1 transition-opacity duration-600 ease-in-out motion-reduce:transition-none", "data-twe-carousel-fade": !0, "data-twe-carousel-item": !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: medical1_default, alt: "Medical" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { className: "text-xl", children: "Fourth slide label" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Some representative placeholder content for the fourth slide." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "absolute bottom-0 left-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90", type: "button", "data-twe-target": "#carouselDarkVariant", "data-twe-slide": "prev", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "inline-block h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Previous" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "absolute bottom-0 right-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-transparent p-0 text-black opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:outline-none focus:opacity-90", type: "button", "data-twe-target": "#carouselDarkVariant", "data-twe-slide": "next", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "inline-block h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Next" })
    ] })
  ] }) });
}

// app/components/Maps.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Maps_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "text-gray-600 body-font relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute inset-0 bg-gray-300", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full h-full", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container px-5 py-24 mx-auto flex", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-gray-900 text-lg mb-1 font-medium title-font", children: "Feedback" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "leading-relaxed mb-5 text-gray-600", children: "Post-ironic portland shabby chic echo park, banjo fashion axe" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "label",
          {
            htmlFor: "email",
            className: "leading-7 text-sm text-gray-600",
            children: "Email"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "label",
          {
            htmlFor: "message",
            className: "leading-7 text-sm text-gray-600",
            children: "Message"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "textarea",
          {
            id: "message",
            name: "message",
            className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg", children: "Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs text-gray-500 mt-3", children: "Chicharrones blog helvetica normcore iceland tousled brook viral artisan." })
    ] }) })
  ] }) });
}

// app/components/Testimony.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Testimony_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { id: "visual", viewBox: "0 0 2000 600", className: "w-full absolute top-0 left-0 z-0 ", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M0 18L65 18L65 66L129 66L129 37L194 37L194 44L258 44L258 25L323 25L323 35L387 35L387 36L452 36L452 38L516 38L516 34L581 34L581 26L645 26L645 68L710 68L710 32L774 32L774 27L839 27L839 29L903 29L903 31L968 31L968 83L1032 83L1032 65L1097 65L1097 57L1161 57L1161 66L1226 66L1226 90L1290 90L1290 66L1355 66L1355 32L1419 32L1419 35L1484 35L1484 18L1548 18L1548 94L1613 94L1613 96L1677 96L1677 72L1742 72L1742 88L1806 88L1806 42L1871 42L1871 46L1935 46L1935 33L2000 33L2000 18L2000 0L2000 0L1935 0L1935 0L1871 0L1871 0L1806 0L1806 0L1742 0L1742 0L1677 0L1677 0L1613 0L1613 0L1548 0L1548 0L1484 0L1484 0L1419 0L1419 0L1355 0L1355 0L1290 0L1290 0L1226 0L1226 0L1161 0L1161 0L1097 0L1097 0L1032 0L1032 0L968 0L968 0L903 0L903 0L839 0L839 0L774 0L774 0L710 0L710 0L645 0L645 0L581 0L581 0L516 0L516 0L452 0L452 0L387 0L387 0L323 0L323 0L258 0L258 0L194 0L194 0L129 0L129 0L65 0L65 0L0 0Z", fill: "#eaeaea", strokeLinecap: "square", strokeLinejoin: "miter" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "max-w-2xl mx-auto text-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-2xl font-light text-black sm:text-4xl sm:leading-tight", children: "Trusted by world class companies" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-white h-12 flex shadow-lg items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "object-contain w-full h-6 mx-auto", src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png", alt: "" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-center mt-10 space-x-3 md:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-blue-600 block" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-gray-300 block" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-gray-300 block" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-10 text-base text-center text-black md:mt-20 p-6 py-3 border w-72 border-black rounded-full mx-auto", children: "and, more companies" })
    ] })
  ] }) });
}

// app/components/footer.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function footer_default() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("footer", { class: "bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { class: "max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { class: "grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: easy_loans_default }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "max-w-xs mt-4 text-sm text-gray-600", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium." }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { class: "flex mt-8 space-x-6 text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { class: "hover:opacity-75", href: !0, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { class: "sr-only", children: " Facebook " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { class: "hover:opacity-75", href: !0, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { class: "sr-only", children: " Instagram " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", clipRule: "evenodd" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { class: "hover:opacity-75", href: !0, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { class: "sr-only", children: " Twitter " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { class: "hover:opacity-75", href: !0, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { class: "sr-only", children: " GitHub " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("a", { class: "hover:opacity-75", href: !0, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { class: "sr-only", children: " Dribbble " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z", clipRule: "evenodd" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { class: "grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "font-medium", children: "Company" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " About " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Meet the Team " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " History " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Careers " })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "font-medium", children: "Services" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " 1on1 Coaching " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Company Review " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Accounts Review " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " HR Consulting " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " SEO Optimisation " })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "font-medium", children: "Helpful Links" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Contact " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " FAQs " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Live Chat " })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "font-medium", children: "Legal" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", { class: "flex flex-col mt-4 space-y-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Privacy Policy " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Terms & Conditions " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Returns Policy " }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { class: "hover:opacity-75", href: !0, children: " Accessibility " })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { class: "mt-8 text-xs text-gray-800", children: "\xA9 2022 Comany Name" })
  ] }) }) });
}

// app/routes/index.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      style: {},
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Hero_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Header_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Body_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Maps_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Testimony_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(footer_default, {})
      ]
    }
  ) });
}

// app/routes/edge.jsx
var edge_exports = {};
__export(edge_exports, {
  config: () => config,
  default: () => Edge
});
var import_jsx_runtime10 = require("react/jsx-runtime"), config = { runtime: "edge" };
function Edge() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { children: "Welcome to Remix@Edge" }) });
}

// app/routes/form.jsx
var form_exports = {};
__export(form_exports, {
  default: () => Schoolfees,
  loader: () => loader
});
var import_solid2 = require("@heroicons/react/24/solid"), import_axios = __toESM(require("axios")), import_jsx_runtime11 = require("react/jsx-runtime"), loader = async ({ request }) => {
  if (request.method === "POST" && request.url === "/api_v1/add_person")
    try {
      return (await import_axios.default.post("http://localhost:3002/api_V1/add_person", JSON.parse(request.body))).data;
    } catch (error) {
      return console.error(error), { status: "error", error: "Failed to fetch data from server" };
    }
  return { status: "error", message: "Invalid request" };
};
function Schoolfees() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("form", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "This information will be used in your loan application so be careful what you share." }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "col-span-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "cover-photo", className: "block text-sm font-medium leading-6 text-gray-900", children: "ID(Both front and back in pdf format)" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_solid2.PhotoIcon, { className: "mx-auto h-12 w-12 text-gray-300", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                "label",
                {
                  htmlFor: "file-upload",
                  className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "Upload a file" }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { id: "file-upload", name: "file-upload", type: "file", className: "sr-only" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "pl-1", children: "or drag and drop" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-xs leading-5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" })
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Personal Information" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "Use a permanent address where you can receive mail." }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "First name" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "last-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "Last name" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "last-name",
                id: "last-name",
                autoComplete: "family-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email address" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "country", className: "block text-sm font-medium leading-6 text-gray-900", children: "Country" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
              "select",
              {
                id: "country",
                name: "country",
                autoComplete: "country-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { children: "Kenya" }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { children: "Tanzania" }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { children: "Dodoma" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "street-address", className: "block text-sm font-medium leading-6 text-gray-900", children: "Street address" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "street-address",
                id: "street-address",
                autoComplete: "street-address",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-2 sm:col-start-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "city", className: "block text-sm font-medium leading-6 text-gray-900", children: "City" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "city",
                id: "city",
                autoComplete: "address-level2",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "region", className: "block text-sm font-medium leading-6 text-gray-900", children: "County/Majimbo" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "region",
                id: "region",
                autoComplete: "address-level1",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "postal-code", className: "block text-sm font-medium leading-6 text-gray-900", children: "Postaladdress" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "input",
              {
                type: "text",
                name: "postal-code",
                id: "postal-code",
                autoComplete: "postal-code",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-6 flex items-center justify-end gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", className: "text-sm font-semibold leading-6 text-gray-900", children: "Cancel" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          children: "Save"
        }
      )
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DQYUHPUX.js", imports: ["/build/_shared/chunk-ITFBHRHT.js", "/build/_shared/chunk-UEGOBHZ5.js", "/build/_shared/chunk-C46C5URB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CXMQXBP2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/edge": { id: "routes/edge", parentId: "root", path: "edge", index: void 0, caseSensitive: void 0, module: "/build/routes/edge-QXY64TWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/form": { id: "routes/form", parentId: "root", path: "form", index: void 0, caseSensitive: void 0, module: "/build/routes/form-EMRHRTK4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BZZDAR7Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3c922796", hmr: void 0, url: "/build/manifest-3C922796.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/edge": {
    id: "routes/edge",
    parentId: "root",
    path: "edge",
    index: void 0,
    caseSensitive: void 0,
    module: edge_exports
  },
  "routes/form": {
    id: "routes/form",
    parentId: "root",
    path: "form",
    index: void 0,
    caseSensitive: void 0,
    module: form_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
