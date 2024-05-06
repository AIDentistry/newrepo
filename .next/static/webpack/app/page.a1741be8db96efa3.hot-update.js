"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ChatUI.tsx":
/*!***********************************!*\
  !*** ./app/components/ChatUI.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ai_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ai/react */ \"(app-pages-browser)/./node_modules/ai/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinner */ \"(app-pages-browser)/./node_modules/react-spinner/build/index.js\");\n/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero_image.png */ \"(app-pages-browser)/./app/assets/hero_image.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaArrowLeft!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdDoneAll_react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MdDoneAll!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import \"../components/globals.css\";\nfunction Chat() {\n    _s();\n    const { status, messages, input, submitMessage, handleInputChange, error } = (0,ai_react__WEBPACK_IMPORTED_MODULE_5__.useAssistant)({\n        api: \"/app/api/assistant\"\n    });\n    // When status changes to accepting messages, focus the input:\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"awaiting_message\") {\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        }\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        draggable: \"true\",\n        className: \"relative z-10  flex flex-col justify-center items-start xl:w-[18rem] lg:w-[40rem] w-full xl:h-[85vh] lg:h-[80vh] max-sm:h-screen   mx-auto border-2 border-solid border-gray-900 shadow-2xl bg-[#0C1A22] rounded-none overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex justify-between gap-2 items-center flex-row w-full h-[4rem] m-3 bg-[#0C1A22]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"flex justify-center items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, {}, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-full overflow-hidden w-10 h-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: _assets_hero_image_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"\",\n                                    className: \"w-full h-full object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block text-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium\",\n                                        children: \"Bakhe Dlamini AI\"\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs font-normal\",\n                                        children: \"Online\"\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPhone, {\n                        style: {\n                            transform: \"rotate(90deg)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaVideo, {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex-grow overflow-y-auto text-start\",\n                children: [\n                    messages.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatBubble, {\n                            message: m,\n                            id: m.id,\n                            status: status\n                        }, \"\", false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)),\n                    status === \"in_progress\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinner__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        name: \"line-scale\",\n                        color: \"#ADD8E6\"\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"flex w-full \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitMessage,\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef,\n                        className: \"w-full h-[3rem]  p-2  mx-2 my-4 rounded-2xl bg-[#26353F]\",\n                        value: input,\n                        placeholder: \"Message\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Xkl70rxburap+xVIuopmmrP2ThE=\", false, function() {\n    return [\n        ai_react__WEBPACK_IMPORTED_MODULE_5__.useAssistant\n    ];\n});\n_c = Chat;\nconst ChatBubble = (param)=>{\n    let { message, id, status } = param;\n    console.log(status);\n    const position = message.role === \"user\" ? \"justify-end\" : \"justify-start\";\n    const showTicks = status === \"delivered\" || status === \"read\";\n    console.log(showTicks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full \".concat(position, \" h-fit max-w-md p-2 mb-1 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"chat-bubble \".concat(message.role === \"user\" ? \"text-start bg-[#006753]\" : \"text-start  bg-[#26353F]\", \" px-3 py-1 rounded-2xl shadow-2xl w-fit text-white text-wrap font-medium\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    message.content,\n                    message.role === \"user\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDoneAll_react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdDoneAll, {\n                        className: \"inline-block ml-2\"\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ChatBubble;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRVSS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpRTtBQUN2QjtBQUNOO0FBQ3VCO0FBQzVCO0FBQ1U7QUFDQTtBQUNJO0FBQ0Y7QUFFM0Msc0NBQXNDO0FBRXZCLFNBQVNVOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLEtBQUssRUFBRSxHQUN4RWhCLHNEQUFZQSxDQUFDO1FBQ1hpQixLQUFLO0lBQ1A7SUFJRiw4REFBOEQ7SUFDOUQsTUFBTUMsV0FBV2hCLDZDQUFNQSxDQUFtQjtJQUUxQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxXQUFXLG9CQUFvQjtnQkFDakNPO2FBQUFBLG9CQUFBQSxTQUFTQyxPQUFPLGNBQWhCRCx3Q0FBQUEsa0JBQWtCRSxLQUFLO1FBQ3pCO0lBQ0YsR0FBRztRQUFDVDtLQUFPO0lBRVgscUJBQ0UsOERBQUNVO1FBQ0NDLFdBQVU7UUFDVkMsV0FBVTs7MEJBR1YsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQ1osNEVBQUNJO29DQUFFQyxNQUFLOzhDQUNOLDRFQUFDcEIsMEZBQVdBOzs7Ozs7Ozs7Ozs7Ozs7MENBR2hCLDhEQUFDaUI7Z0NBQUlGLFdBQVU7MENBQ2IsNEVBQUNsQixrREFBS0E7b0NBQ0p3QixLQUFLekIsOERBQW1CQTtvQ0FDeEIwQixLQUFJO29DQUNKUCxXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ0U7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBRVIsV0FBVTtrREFBc0I7Ozs7OztrREFDbkMsOERBQUNRO3dDQUFFUixXQUFVO2tEQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd2Qyw4REFBQ0U7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBRUQsOERBQUNuQixzRkFBT0E7d0JBQUMwQixPQUFPOzRCQUFFQyxXQUFXO3dCQUFnQjs7Ozs7O2tDQUM3Qyw4REFBQzFCLHNGQUFPQTs7Ozs7a0NBQ1IsOERBQUNrQjs7Ozs7Ozs7Ozs7MEJBRUgsOERBQUNKO2dCQUFRRSxXQUFVOztvQkFRaEJYLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ2IsOERBQUNDOzRCQUFvQkMsU0FBU0Y7NEJBQUdHLElBQUlILEVBQUVHLEVBQUU7NEJBQUUzQixRQUFRQTsyQkFBbEM7Ozs7O29CQUVsQkEsV0FBVywrQkFDViw4REFBQ1Isc0RBQU9BO3dCQUFDb0MsTUFBSzt3QkFBYUMsT0FBTTs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ0M7Z0JBQU9sQixXQUFVOzBCQUNoQiw0RUFBQ21CO29CQUFLQyxVQUFVN0I7b0JBQWVTLFdBQVU7OEJBQ3ZDLDRFQUFDVjt3QkFDQytCLEtBQUsxQjt3QkFDTEssV0FBVTt3QkFDVnNCLE9BQU9oQzt3QkFDUGlDLGFBQVk7d0JBQ1pDLFVBQVVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTdFd0JMOztRQUVwQlYsa0RBQVlBOzs7S0FGUVU7QUErRXhCLE1BQU0wQixhQUFhO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxFQUFFLEVBQUUzQixNQUFNLEVBQUU7SUFDekNxQyxRQUFRQyxHQUFHLENBQUN0QztJQUNaLE1BQU11QyxXQUFXYixRQUFRYyxJQUFJLEtBQUssU0FBUyxnQkFBZ0I7SUFDM0QsTUFBTUMsWUFBWXpDLFdBQVcsZUFBZUEsV0FBVztJQUN2RHFDLFFBQVFDLEdBQUcsQ0FBQ0c7SUFFWixxQkFDRSw4REFBQzNCO1FBQUlGLFdBQVcsZUFBd0IsT0FBVDJCLFVBQVM7a0JBQ3RDLDRFQUFDekI7WUFDQ0YsV0FBVyxlQUlWLE9BSENjLFFBQVFjLElBQUksS0FBSyxTQUNiLDRCQUNBLDRCQUNMO3NCQUVELDRFQUFDRTs7b0JBQ0VoQixRQUFRaUIsT0FBTztvQkFDZmpCLFFBQVFjLElBQUksS0FBSyx3QkFDaEIsOERBQUMxQyxzRkFBU0E7d0JBQUNjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7TUF4Qk1hIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NoYXRVSS50c3g/NWQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2UsIHVzZUFzc2lzdGFudCBhcyB1c2VBc3Npc3RhbnQgfSBmcm9tIFwiYWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcclxuaW1wb3J0IGluZml0ZWFpX2xvZ29fd2hpdGUgZnJvbSBcIi4uL2Fzc2V0cy9oZXJvX2ltYWdlLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRmFQaG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYVZpZGVvIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZhQXJyb3dMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kRG9uZUFsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi4vY29tcG9uZW50cy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZXMsIGlucHV0LCBzdWJtaXRNZXNzYWdlLCBoYW5kbGVJbnB1dENoYW5nZSwgZXJyb3IgfSA9XHJcbiAgICB1c2VBc3Npc3RhbnQoe1xyXG4gICAgICBhcGk6IFwiL2FwcC9hcGkvYXNzaXN0YW50XCIsXHJcbiAgICB9KTtcclxuXHJcbiAgXHJcblxyXG4gIC8vIFdoZW4gc3RhdHVzIGNoYW5nZXMgdG8gYWNjZXB0aW5nIG1lc3NhZ2VzLCBmb2N1cyB0aGUgaW5wdXQ6XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSBcImF3YWl0aW5nX21lc3NhZ2VcIikge1xyXG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHhsOnctWzE4cmVtXSBsZzp3LVs0MHJlbV0gdy1mdWxsIHhsOmgtWzg1dmhdIGxnOmgtWzgwdmhdIG1heC1zbTpoLXNjcmVlblxyXG4gICAgICAgICAgbXgtYXV0byBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktOTAwIHNoYWRvdy0yeGwgYmctWyMwQzFBMjJdIHJvdW5kZWQtbm9uZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC0yIGl0ZW1zLWNlbnRlciBmbGV4LXJvdyB3LWZ1bGwgaC1bNHJlbV0gbS0zIGJnLVsjMEMxQTIyXVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPEZhQXJyb3dMZWZ0IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gdy0xMCBoLTEwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW5maXRlYWlfbG9nb193aGl0ZX1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5CYWtoZSBEbGFtaW5pIEFJPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsXCI+T25saW5lPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICA8RmFQaG9uZSBzdHlsZT17eyB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiIH19IC8+XHJcbiAgICAgICAgPEZhVmlkZW8gLz5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1ncm93IG92ZXJmbG93LXktYXV0byB0ZXh0LXN0YXJ0XCI+XHJcbiAgICAgICAgey8qIHtlcnJvciAhPSBudWxsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBweS00IHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTppbmxpbmVcIj5cclxuICAgICAgICAgICAgICBFcnJvcjogeyhlcnJvciBhcyBhbnkpLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG06IE1lc3NhZ2UpID0+IChcclxuICAgICAgICAgIDxDaGF0QnViYmxlIGtleT17XCJcIn0gbWVzc2FnZT17bX0gaWQ9e20uaWR9IHN0YXR1cz17c3RhdHVzfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtzdGF0dXMgPT09IFwiaW5fcHJvZ3Jlc3NcIiAmJiAoXHJcbiAgICAgICAgICA8U3Bpbm5lciBuYW1lPVwibGluZS1zY2FsZVwiIGNvbG9yPVwiI0FERDhFNlwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRNZXNzYWdlfSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVszcmVtXSAgcC0yICBteC0yIG15LTQgcm91bmRlZC0yeGwgYmctWyMyNjM1M0ZdXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ2hhdEJ1YmJsZSA9ICh7IG1lc3NhZ2UsIGlkLCBzdGF0dXMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHN0YXR1cyk7XHJcbiAgY29uc3QgcG9zaXRpb24gPSBtZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJqdXN0aWZ5LWVuZFwiIDogXCJqdXN0aWZ5LXN0YXJ0XCI7XHJcbiAgY29uc3Qgc2hvd1RpY2tzID0gc3RhdHVzID09PSBcImRlbGl2ZXJlZFwiIHx8IHN0YXR1cyA9PT0gXCJyZWFkXCI7XHJcbiAgY29uc29sZS5sb2coc2hvd1RpY2tzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgJHtwb3NpdGlvbn0gaC1maXQgbWF4LXctbWQgcC0yIG1iLTEgYH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BjaGF0LWJ1YmJsZSAke1xyXG4gICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIlxyXG4gICAgICAgICAgICA/IFwidGV4dC1zdGFydCBiZy1bIzAwNjc1M11cIlxyXG4gICAgICAgICAgICA6IFwidGV4dC1zdGFydCAgYmctWyMyNjM1M0ZdXCJcclxuICAgICAgICB9IHB4LTMgcHktMSByb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIHctZml0IHRleHQtd2hpdGUgdGV4dC13cmFwIGZvbnQtbWVkaXVtYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge21lc3NhZ2UuY29udGVudH1cclxuICAgICAgICAgIHttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiICYmICggLy8gQWRkIGNvbmRpdGlvbmFsIHN0YXRlbWVudCBoZXJlXHJcbiAgICAgICAgICAgIDxNZERvbmVBbGwgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1sLTJcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUFzc2lzdGFudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlNwaW5uZXIiLCJpbmZpdGVhaV9sb2dvX3doaXRlIiwiSW1hZ2UiLCJGYVBob25lIiwiRmFWaWRlbyIsIkZhQXJyb3dMZWZ0IiwiTWREb25lQWxsIiwiQ2hhdCIsInN0YXR1cyIsIm1lc3NhZ2VzIiwiaW5wdXQiLCJzdWJtaXRNZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlcnJvciIsImFwaSIsImlucHV0UmVmIiwiY3VycmVudCIsImZvY3VzIiwic2VjdGlvbiIsImRyYWdnYWJsZSIsImNsYXNzTmFtZSIsImhlYWRlciIsImRpdiIsImgxIiwiYSIsImhyZWYiLCJzcmMiLCJhbHQiLCJwIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJtIiwiQ2hhdEJ1YmJsZSIsIm1lc3NhZ2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImZvb3RlciIsImZvcm0iLCJvblN1Ym1pdCIsInJlZiIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsInJvbGUiLCJzaG93VGlja3MiLCJzcGFuIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatUI.tsx\n"));

/***/ })

});