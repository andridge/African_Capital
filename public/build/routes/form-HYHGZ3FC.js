import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FCC3XGIV.js";

// node_modules/@heroicons/react/24/solid/esm/PhotoIcon.js
var React = __toESM(require_react(), 1);
function PhotoIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(PhotoIcon);
var PhotoIcon_default = ForwardRef;

// app/routes/form.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Schoolfees() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, false, {
          fileName: "app/routes/form.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "This information will be used in your loan application so be careful what you share." }, void 0, false, {
          fileName: "app/routes/form.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "cover-photo", className: "block text-sm font-medium leading-6 text-gray-900", children: "ID(Both front and back in pdf format)" }, void 0, false, {
            fileName: "app/routes/form.jsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhotoIcon_default, { className: "mx-auto h-12 w-12 text-gray-300", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 43,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "file-upload",
                  className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Upload a file" }, void 0, false, {
                      fileName: "app/routes/form.jsx",
                      lineNumber: 49,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "file-upload", name: "file-upload", type: "file", className: "sr-only" }, void 0, false, {
                      fileName: "app/routes/form.jsx",
                      lineNumber: 50,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/form.jsx",
                  lineNumber: 45,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, false, {
                fileName: "app/routes/form.jsx",
                lineNumber: 52,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/form.jsx",
              lineNumber: 44,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs leading-5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 54,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 42,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/form.jsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/form.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/form.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/form.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Personal Information" }, void 0, false, {
          fileName: "app/routes/form.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: "Use a permanent address where you can receive mail." }, void 0, false, {
          fileName: "app/routes/form.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "First name" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 71,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "Last name" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 82,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "last-name",
                id: "last-name",
                autoComplete: "family-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 86,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 85,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email address" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 97,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 101,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block text-sm font-medium leading-6 text-gray-900", children: "Country" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 112,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "select",
              {
                id: "country",
                name: "country",
                autoComplete: "country-name",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Kenya" }, void 0, false, {
                    fileName: "app/routes/form.jsx",
                    lineNumber: 122,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Tanzania" }, void 0, false, {
                    fileName: "app/routes/form.jsx",
                    lineNumber: 124,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Dodoma" }, void 0, false, {
                    fileName: "app/routes/form.jsx",
                    lineNumber: 126,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 116,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 115,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "street-address", className: "block text-sm font-medium leading-6 text-gray-900", children: "Street address" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 132,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "street-address",
                id: "street-address",
                autoComplete: "street-address",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 136,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2 sm:col-start-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium leading-6 text-gray-900", children: "City" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 147,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "city",
                id: "city",
                autoComplete: "address-level2",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 151,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "region", className: "block text-sm font-medium leading-6 text-gray-900", children: "County/Majimbo" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 162,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "region",
                id: "region",
                autoComplete: "address-level1",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 166,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 165,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postal-code", className: "block text-sm font-medium leading-6 text-gray-900", children: "Postaladdress" }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 177,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "postal-code",
                id: "postal-code",
                autoComplete: "postal-code",
                className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/form.jsx",
                lineNumber: 181,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/form.jsx",
              lineNumber: 180,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/form.jsx",
            lineNumber: 176,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/form.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/form.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/form.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center justify-end gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-sm font-semibold leading-6 text-gray-900", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/form.jsx",
        lineNumber: 297,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          children: "Save"
        },
        void 0,
        false,
        {
          fileName: "app/routes/form.jsx",
          lineNumber: 300,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/form.jsx",
      lineNumber: 296,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/form.jsx",
    lineNumber: 27,
    columnNumber: 1
  }, this) }, void 0, false, {
    fileName: "app/routes/form.jsx",
    lineNumber: 26,
    columnNumber: 1
  }, this);
}
export {
  Schoolfees as default
};
//# sourceMappingURL=/build/routes/form-HYHGZ3FC.js.map
