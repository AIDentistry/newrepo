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

/***/ "(app-pages-browser)/./app/components/SectionD.jsx":
/*!*************************************!*\
  !*** ./app/components/SectionD.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SectionD; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\n\n// import './styles.css';\n// import required modules\n\nfunction SectionD() {\n    _s();\n    const progressCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onAutoplayTimeLeft = (s, time, progress)=>{\n        progressCircle.current.style.setProperty(\"--progress\", 1 - progress);\n        progressContent.current.textContent = \"\".concat(Math.ceil(time / 1000), \"s\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-full  flex flex-col h-auto mb-8 bg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-[#4b575f] text-4xl block text-center\",\n                    children: \"What Our Clients Have To Say\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                    spaceBetween: 30,\n                    centeredSlides: true,\n                    autoplay: {\n                        delay: 2500,\n                        disableOnInteraction: false\n                    },\n                    pagination: {\n                        clickable: true\n                    },\n                    navigation: true,\n                    modules: [\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Autoplay,\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Pagination,\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Navigation\n                    ],\n                    onAutoplayTimeLeft: onAutoplayTimeLeft,\n                    className: \"mySwiper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 1\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 2\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 3\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 4\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 5\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 6\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 7\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 8\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: \"Slide 9\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"autoplay-progress\",\n                            slot: \"container-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    viewBox: \"0 0 48 48\",\n                                    ref: progressCircle,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                        cx: \"24\",\n                                        cy: \"24\",\n                                        r: \"20\"\n                                    }, void 0, false, {\n                                        fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: progressContent\n                                }, void 0, false, {\n                                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Backup2\\\\Final-Backup\\\\new-project\\\\app\\\\components\\\\SectionD.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(SectionD, \"8em5FzriZtKGsUEmeHBX0+TVJp0=\");\n_c = SectionD;\nvar _c;\n$RefreshReg$(_c, \"SectionD\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlY3Rpb25ELmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNoRCxpQ0FBaUM7QUFDa0I7QUFFbkQsdUJBQXVCO0FBQ0g7QUFDVztBQUNBO0FBRS9CLHlCQUF5QjtBQUV6QiwwQkFBMEI7QUFDd0M7QUFFbkQsU0FBU1E7O0lBQ3RCLE1BQU1DLGlCQUFpQlIsNkNBQU1BLENBQUM7SUFDOUIsTUFBTVMsa0JBQWtCVCw2Q0FBTUEsQ0FBQztJQUMvQixNQUFNVSxxQkFBcUIsQ0FBQ0MsR0FBR0MsTUFBTUM7UUFDbkNMLGVBQWVNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsY0FBYyxJQUFJSDtRQUMzREosZ0JBQWdCSyxPQUFPLENBQUNHLFdBQVcsR0FBRyxHQUEwQixPQUF2QkMsS0FBS0MsSUFBSSxDQUFDUCxPQUFPLE9BQU07SUFDbEU7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ1E7WUFBUUMsV0FBVTs7OEJBQ2pCLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBc0Q7Ozs7Ozs4QkFJcEUsOERBQUNuQixnREFBTUE7b0JBQ0xxQixjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCQyxVQUFVO3dCQUNSQyxPQUFPO3dCQUNQQyxzQkFBc0I7b0JBQ3hCO29CQUNBQyxZQUFZO3dCQUNWQyxXQUFXO29CQUNiO29CQUNBQyxZQUFZO29CQUNaQyxTQUFTO3dCQUFDM0Isb0RBQVFBO3dCQUFFQyxzREFBVUE7d0JBQUVDLHNEQUFVQTtxQkFBQztvQkFDM0NJLG9CQUFvQkE7b0JBQ3BCVyxXQUFVOztzQ0FFViw4REFBQ2xCLHFEQUFXQTtzQ0FBQzs7Ozs7O3NDQUNiLDhEQUFDQSxxREFBV0E7c0NBQUM7Ozs7OztzQ0FDYiw4REFBQ0EscURBQVdBO3NDQUFDOzs7Ozs7c0NBQ2IsOERBQUNBLHFEQUFXQTtzQ0FBQzs7Ozs7O3NDQUNiLDhEQUFDQSxxREFBV0E7c0NBQUM7Ozs7OztzQ0FDYiw4REFBQ0EscURBQVdBO3NDQUFDOzs7Ozs7c0NBQ2IsOERBQUNBLHFEQUFXQTtzQ0FBQzs7Ozs7O3NDQUNiLDhEQUFDQSxxREFBV0E7c0NBQUM7Ozs7OztzQ0FDYiw4REFBQ0EscURBQVdBO3NDQUFDOzs7Ozs7c0NBQ2IsOERBQUM2Qjs0QkFBSVgsV0FBVTs0QkFBb0JZLE1BQUs7OzhDQUN0Qyw4REFBQ0M7b0NBQUlDLFNBQVE7b0NBQVlDLEtBQUs1Qjs4Q0FDNUIsNEVBQUM2Qjt3Q0FBT0MsSUFBRzt3Q0FBS0MsSUFBRzt3Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7OENBRTVCLDhEQUFDQztvQ0FBS0wsS0FBSzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBaER3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2VjdGlvbkQuanN4PzI1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBJbXBvcnQgU3dpcGVyIFJlYWN0IGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcblxyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcclxuXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbi8vIGltcG9ydCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCB7IEF1dG9wbGF5LCBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkQoKSB7XHJcbiAgY29uc3QgcHJvZ3Jlc3NDaXJjbGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NDb250ZW50ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG9uQXV0b3BsYXlUaW1lTGVmdCA9IChzLCB0aW1lLCBwcm9ncmVzcykgPT4ge1xyXG4gICAgcHJvZ3Jlc3NDaXJjbGUuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJvZ3Jlc3NcIiwgMSAtIHByb2dyZXNzKTtcclxuICAgIHByb2dyZXNzQ29udGVudC5jdXJyZW50LnRleHRDb250ZW50ID0gYCR7TWF0aC5jZWlsKHRpbWUgLyAxMDAwKX1zYDtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgIGZsZXggZmxleC1jb2wgaC1hdXRvIG1iLTggYmdcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWyM0YjU3NWZdIHRleHQtNHhsIGJsb2NrIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBXaGF0IE91ciBDbGllbnRzIEhhdmUgVG8gU2F5XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXszMH1cclxuICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxyXG4gICAgICAgICAgYXV0b3BsYXk9e3tcclxuICAgICAgICAgICAgZGVsYXk6IDI1MDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBuYXZpZ2F0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgbW9kdWxlcz17W0F1dG9wbGF5LCBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uXX1cclxuICAgICAgICAgIG9uQXV0b3BsYXlUaW1lTGVmdD17b25BdXRvcGxheVRpbWVMZWZ0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXlTd2lwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSAxPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSAyPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSAzPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA0PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA1PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA2PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA3PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA4PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5TbGlkZSA5PC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b3BsYXktcHJvZ3Jlc3NcIiBzbG90PVwiY29udGFpbmVyLWVuZFwiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNDggNDhcIiByZWY9e3Byb2dyZXNzQ2lyY2xlfT5cclxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjRcIiBjeT1cIjI0XCIgcj1cIjIwXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiByZWY9e3Byb2dyZXNzQ29udGVudH0+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwiU2VjdGlvbkQiLCJwcm9ncmVzc0NpcmNsZSIsInByb2dyZXNzQ29udGVudCIsIm9uQXV0b3BsYXlUaW1lTGVmdCIsInMiLCJ0aW1lIiwicHJvZ3Jlc3MiLCJjdXJyZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRleHRDb250ZW50IiwiTWF0aCIsImNlaWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibW9kdWxlcyIsImRpdiIsInNsb3QiLCJzdmciLCJ2aWV3Qm94IiwicmVmIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SectionD.jsx\n"));

/***/ })

});