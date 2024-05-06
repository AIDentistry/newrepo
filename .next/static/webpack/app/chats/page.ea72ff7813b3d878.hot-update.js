"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chats/page",{

/***/ "(app-pages-browser)/./app/components/ChatUI.tsx":
/*!***********************************!*\
  !*** ./app/components/ChatUI.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ai_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ai/react */ \"(app-pages-browser)/./node_modules/ai/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinner */ \"(app-pages-browser)/./node_modules/react-spinner/build/index.js\");\n/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero_image.png */ \"(app-pages-browser)/./app/assets/hero_image.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaArrowLeft!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdDoneAll_react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MdDoneAll!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import \"../components/globals.css\";\nfunction Chat() {\n    _s();\n    const { status, messages, input, submitMessage, handleInputChange, error } = (0,ai_react__WEBPACK_IMPORTED_MODULE_5__.useAssistant)({\n        api: \"/app/api/assistant\"\n    });\n    // When status changes to accepting messages, focus the input:\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"awaiting_message\") {\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        }\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        draggable: \"true\",\n        className: \"relative z-10  flex flex-col justify-center items-start xl:w-[18rem] lg:w-[40rem] w-full xl:h-[85vh] lg:h-[80vh] max-sm:h-screen   mx-auto border-2 border-solid border-gray-900 shadow-2xl bg-[#0C1A22] rounded-none overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex justify-between gap-2 items-center flex-row w-full h-[4rem] m-3 bg-[#0C1A22]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"flex justify-center items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, {}, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-full overflow-hidden w-10 h-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: _assets_hero_image_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"\",\n                                    className: \"w-full h-full object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium\",\n                                        children: \"Bakhe Dlamini AI\"\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs font-normal\",\n                                        children: \"Online\"\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPhone, {\n                        style: {\n                            transform: \"rotate(90deg)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaVideo, {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex-grow overflow-y-auto\",\n                children: [\n                    messages.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatBubble, {\n                            message: m,\n                            id: m.id,\n                            status: status\n                        }, \"\", false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)),\n                    status === \"in_progress\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinner__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        name: \"line-scale\",\n                        color: \"#ADD8E6\"\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitMessage,\n                    className: \"flex w-full bg-yellow-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef,\n                        className: \"w-full h-[3rem]  p-2   rounded-full bg-[#26353F]\",\n                        value: input,\n                        placeholder: \"Message\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Xkl70rxburap+xVIuopmmrP2ThE=\", false, function() {\n    return [\n        ai_react__WEBPACK_IMPORTED_MODULE_5__.useAssistant\n    ];\n});\n_c = Chat;\nconst ChatBubble = (param)=>{\n    let { message, id, status } = param;\n    console.log(status);\n    const position = message.role === \"user\" ? \"justify-end\" : \"justify-start\";\n    const showTicks = status === \"delivered\" || status === \"read\";\n    console.log(showTicks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full \".concat(position, \" h-fit max-w-md p-2 mb-1 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"chat-bubble \".concat(message.role === \"user\" ? \"text-start bg-[#006753]\" : \"text-start  bg-[#26353F]\", \" px-3 py-1 rounded-2xl shadow-2xl w-fit text-white text-wrap font-medium\"),\n            children: [\n                message.content,\n                message.role === \"user\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDoneAll_react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdDoneAll, {}, void 0, false, {\n                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\ChatUI.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ChatBubble;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRVSS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpRTtBQUN2QjtBQUNOO0FBQ3VCO0FBQzVCO0FBQ1U7QUFDQTtBQUNJO0FBQ0Y7QUFDM0Msc0NBQXNDO0FBRXZCLFNBQVNVOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLEtBQUssRUFBRSxHQUN4RWhCLHNEQUFZQSxDQUFDO1FBQ1hpQixLQUFLO0lBQ1A7SUFJRiw4REFBOEQ7SUFDOUQsTUFBTUMsV0FBV2hCLDZDQUFNQSxDQUFtQjtJQUUxQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxXQUFXLG9CQUFvQjtnQkFDakNPO2FBQUFBLG9CQUFBQSxTQUFTQyxPQUFPLGNBQWhCRCx3Q0FBQUEsa0JBQWtCRSxLQUFLO1FBQ3pCO0lBQ0YsR0FBRztRQUFDVDtLQUFPO0lBRVgscUJBQ0UsOERBQUNVO1FBQ0NDLFdBQVU7UUFDVkMsV0FBVTs7MEJBR1YsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQ1osNEVBQUNmLDBGQUFXQTs7Ozs7Ozs7OzswQ0FFZCw4REFBQ2lCO2dDQUFJRixXQUFVOzBDQUNiLDRFQUFDbEIsa0RBQUtBO29DQUNKc0IsS0FBS3ZCLDhEQUFtQkE7b0NBQ3hCd0IsS0FBSTtvQ0FDSkwsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNFO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ007d0NBQUVOLFdBQVU7a0RBQXNCOzs7Ozs7a0RBQ25DLDhEQUFDTTt3Q0FBRU4sV0FBVTtrREFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdkMsOERBQUNFOzs7OztrQ0FDRCw4REFBQ0E7Ozs7O2tDQUVELDhEQUFDbkIsc0ZBQU9BO3dCQUFDd0IsT0FBTzs0QkFBRUMsV0FBVzt3QkFBZ0I7Ozs7OztrQ0FDN0MsOERBQUN4QixzRkFBT0E7Ozs7O2tDQUNSLDhEQUFDa0I7Ozs7Ozs7Ozs7OzBCQUVILDhEQUFDSjtnQkFBUUUsV0FBVTs7b0JBUWhCWCxTQUFTb0IsR0FBRyxDQUFDLENBQUNDLGtCQUNiLDhEQUFDQzs0QkFBb0JDLFNBQVNGOzRCQUFHRyxJQUFJSCxFQUFFRyxFQUFFOzRCQUFFekIsUUFBUUE7MkJBQWxDOzs7OztvQkFFbEJBLFdBQVcsK0JBQ1YsOERBQUNSLHNEQUFPQTt3QkFBQ2tDLE1BQUs7d0JBQWFDLE9BQU07Ozs7Ozs7Ozs7OzswQkFHckMsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBS0MsVUFBVTNCO29CQUFlUyxXQUFVOzhCQUN2Qyw0RUFBQ1Y7d0JBQ0M2QixLQUFLeEI7d0JBQ0xLLFdBQVU7d0JBQ1ZvQixPQUFPOUI7d0JBQ1ArQixhQUFZO3dCQUNaQyxVQUFVOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0EzRXdCTDs7UUFFcEJWLGtEQUFZQTs7O0tBRlFVO0FBNkV4QixNQUFNd0IsYUFBYTtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsRUFBRSxFQUFFekIsTUFBTSxFQUFFO0lBQ3pDbUMsUUFBUUMsR0FBRyxDQUFDcEM7SUFDWixNQUFNcUMsV0FBV2IsUUFBUWMsSUFBSSxLQUFLLFNBQVMsZ0JBQWdCO0lBQzNELE1BQU1DLFlBQVl2QyxXQUFXLGVBQWVBLFdBQVc7SUFDdkRtQyxRQUFRQyxHQUFHLENBQUNHO0lBRVoscUJBQ0UsOERBQUN6QjtRQUFJRixXQUFXLGVBQXdCLE9BQVR5QixVQUFTO2tCQUN0Qyw0RUFBQ3ZCO1lBQ0NGLFdBQVcsZUFJVixPQUhDWSxRQUFRYyxJQUFJLEtBQUssU0FDYiw0QkFDQSw0QkFDTDs7Z0JBRUFkLFFBQVFnQixPQUFPO2dCQUNmaEIsUUFBUWMsSUFBSSxLQUFLLHdCQUNoQiw4REFBQ3hDLHNGQUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtNQXRCTXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NoYXRVSS50c3g/NWQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2UsIHVzZUFzc2lzdGFudCBhcyB1c2VBc3Npc3RhbnQgfSBmcm9tIFwiYWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcclxuaW1wb3J0IGluZml0ZWFpX2xvZ29fd2hpdGUgZnJvbSBcIi4uL2Fzc2V0cy9oZXJvX2ltYWdlLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRmFQaG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYVZpZGVvIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZhQXJyb3dMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kRG9uZUFsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG4vLyBpbXBvcnQgXCIuLi9jb21wb25lbnRzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlcywgaW5wdXQsIHN1Ym1pdE1lc3NhZ2UsIGhhbmRsZUlucHV0Q2hhbmdlLCBlcnJvciB9ID1cclxuICAgIHVzZUFzc2lzdGFudCh7XHJcbiAgICAgIGFwaTogXCIvYXBwL2FwaS9hc3Npc3RhbnRcIixcclxuICAgIH0pO1xyXG5cclxuICBcclxuXHJcbiAgLy8gV2hlbiBzdGF0dXMgY2hhbmdlcyB0byBhY2NlcHRpbmcgbWVzc2FnZXMsIGZvY3VzIHRoZSBpbnB1dDpcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IFwiYXdhaXRpbmdfbWVzc2FnZVwiKSB7XHJcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgeGw6dy1bMThyZW1dIGxnOnctWzQwcmVtXSB3LWZ1bGwgeGw6aC1bODV2aF0gbGc6aC1bODB2aF0gbWF4LXNtOmgtc2NyZWVuXHJcbiAgICAgICAgICBteC1hdXRvIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS05MDAgc2hhZG93LTJ4bCBiZy1bIzBDMUEyMl0gcm91bmRlZC1ub25lIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICA+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgaXRlbXMtY2VudGVyIGZsZXgtcm93IHctZnVsbCBoLVs0cmVtXSBtLTMgYmctWyMwQzFBMjJdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEZhQXJyb3dMZWZ0IC8+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHctMTAgaC0xMFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2luZml0ZWFpX2xvZ29fd2hpdGV9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkJha2hlIERsYW1pbmkgQUk8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ub3JtYWxcIj5PbmxpbmU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgIDxGYVBob25lIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIgfX0gLz5cclxuICAgICAgICA8RmFWaWRlbyAvPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgey8qIHtlcnJvciAhPSBudWxsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBweS00IHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTppbmxpbmVcIj5cclxuICAgICAgICAgICAgICBFcnJvcjogeyhlcnJvciBhcyBhbnkpLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG06IE1lc3NhZ2UpID0+IChcclxuICAgICAgICAgIDxDaGF0QnViYmxlIGtleT17XCJcIn0gbWVzc2FnZT17bX0gaWQ9e20uaWR9IHN0YXR1cz17c3RhdHVzfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtzdGF0dXMgPT09IFwiaW5fcHJvZ3Jlc3NcIiAmJiAoXHJcbiAgICAgICAgICA8U3Bpbm5lciBuYW1lPVwibGluZS1zY2FsZVwiIGNvbG9yPVwiI0FERDhFNlwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Zm9vdGVyID5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0TWVzc2FnZX0gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgYmcteWVsbG93LTMwMFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVszcmVtXSAgcC0yICAgcm91bmRlZC1mdWxsIGJnLVsjMjYzNTNGXVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENoYXRCdWJibGUgPSAoeyBtZXNzYWdlLCBpZCwgc3RhdHVzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwiO1xyXG4gIGNvbnN0IHNob3dUaWNrcyA9IHN0YXR1cyA9PT0gXCJkZWxpdmVyZWRcIiB8fCBzdGF0dXMgPT09IFwicmVhZFwiO1xyXG4gIGNvbnNvbGUubG9nKHNob3dUaWNrcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggdy1mdWxsICR7cG9zaXRpb259IGgtZml0IG1heC13LW1kIHAtMiBtYi0xIGB9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY2hhdC1idWJibGUgJHtcclxuICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCJcclxuICAgICAgICAgICAgPyBcInRleHQtc3RhcnQgYmctWyMwMDY3NTNdXCJcclxuICAgICAgICAgICAgOiBcInRleHQtc3RhcnQgIGJnLVsjMjYzNTNGXVwiXHJcbiAgICAgICAgfSBweC0zIHB5LTEgcm91bmRlZC0yeGwgc2hhZG93LTJ4bCB3LWZpdCB0ZXh0LXdoaXRlIHRleHQtd3JhcCBmb250LW1lZGl1bWB9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxyXG4gICAgICAgIHttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiICYmICggLy8gQWRkIGNvbmRpdGlvbmFsIHN0YXRlbWVudCBoZXJlXHJcbiAgICAgICAgICA8TWREb25lQWxsIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQXNzaXN0YW50IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiU3Bpbm5lciIsImluZml0ZWFpX2xvZ29fd2hpdGUiLCJJbWFnZSIsIkZhUGhvbmUiLCJGYVZpZGVvIiwiRmFBcnJvd0xlZnQiLCJNZERvbmVBbGwiLCJDaGF0Iiwic3RhdHVzIiwibWVzc2FnZXMiLCJpbnB1dCIsInN1Ym1pdE1lc3NhZ2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImVycm9yIiwiYXBpIiwiaW5wdXRSZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJzZWN0aW9uIiwiZHJhZ2dhYmxlIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiZGl2IiwiaDEiLCJzcmMiLCJhbHQiLCJwIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJtIiwiQ2hhdEJ1YmJsZSIsIm1lc3NhZ2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImZvb3RlciIsImZvcm0iLCJvblN1Ym1pdCIsInJlZiIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsInJvbGUiLCJzaG93VGlja3MiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatUI.tsx\n"));

/***/ })

});