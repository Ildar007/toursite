/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @badrap/bar-of-progress */ \"@badrap/bar-of-progress\");\n/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_2___default())({\n    // The size (height) of the progress bar.\n    // Numeric values get converted to px.\n    size: 2,\n    // Color of the progress bar.\n    // Also used for the glow around the bar.\n    color: \"white\",\n    // Class name used for the progress bar element.\n    className: \"z-50\",\n    // How many milliseconds to wait before the progress bar\n    // animation starts after calling .start().\n    delay: 100\n});\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", progress.start);\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", progress.finish);\nnext_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeError\", progress.finish);\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Tripster\"\n                        }, void 0, false, {\n                            fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Buzz Box\"\n                        }, void 0, false, {\n                            fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"https://i.imgur.com/ZNKoZzY.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ildar/Desktop/new project/toursite/pages/_app.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNvQjtBQUNqQjtBQUNnQjtBQUNyQjtBQUU1QixNQUFNSSxXQUFXLElBQUlKLGdFQUFXQSxDQUFDO0lBQzdCLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdENLLE1BQU07SUFFTiw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDQyxPQUFPO0lBRVAsZ0RBQWdEO0lBQ2hEQyxXQUFXO0lBRVgsd0RBQXdEO0lBQ3hELDJDQUEyQztJQUMzQ0MsT0FBTztBQUNUO0FBRUZQLDREQUFnQixDQUFDLG9CQUFvQkcsU0FBU08sS0FBSztBQUNuRFYsNERBQWdCLENBQUMsdUJBQXVCRyxTQUFTUSxNQUFNO0FBQ3ZEWCw0REFBZ0IsQ0FBQyxvQkFBb0JHLFNBQVNRLE1BQU07QUFFcEQsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFdBQVcsRUFBQ0MsUUFBTyxFQUFFLEdBQUdELFdBQVUsR0FBRSxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDYiw0REFBZUE7UUFBQ2MsU0FBU0E7a0JBQ3RCLDRFQUFDQzs7OEJBQ0csOERBQUNkLGtEQUFJQTs7c0NBQ0QsOERBQUNlO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxNQUFLOzRCQUFjQyxTQUFROzs7Ozs7c0NBQ2pDLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ1Y7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXBzdGVyLW5leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0Jhcih7XG4gICAgLy8gVGhlIHNpemUgKGhlaWdodCkgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICAvLyBOdW1lcmljIHZhbHVlcyBnZXQgY29udmVydGVkIHRvIHB4LlxuICAgIHNpemU6IDIsXG4gIFxuICAgIC8vIENvbG9yIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgLy8gQWxzbyB1c2VkIGZvciB0aGUgZ2xvdyBhcm91bmQgdGhlIGJhci5cbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICBcbiAgICAvLyBDbGFzcyBuYW1lIHVzZWQgZm9yIHRoZSBwcm9ncmVzcyBiYXIgZWxlbWVudC5cbiAgICBjbGFzc05hbWU6IFwiei01MFwiLFxuICBcbiAgICAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgdGhlIHByb2dyZXNzIGJhclxuICAgIC8vIGFuaW1hdGlvbiBzdGFydHMgYWZ0ZXIgY2FsbGluZyAuc3RhcnQoKS5cbiAgICBkZWxheTogMTAwLFxuICB9KTtcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHByb2dyZXNzLnN0YXJ0KVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHByb2dyZXNzLmZpbmlzaClcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBwcm9ncmVzcy5maW5pc2gpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHtzZXNzaW9uLCAuLi5wYWdlUHJvcHN9IH0pIHtcbiAgcmV0dXJuKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJpcHN0ZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCdXp6IEJveFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL2kuaW1ndXIuY29tL1pOS29aelkucG5nXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXIiLCJSb3V0ZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJIZWFkIiwicHJvZ3Jlc3MiLCJzaXplIiwiY29sb3IiLCJjbGFzc05hbWUiLCJkZWxheSIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJmaW5pc2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@badrap/bar-of-progress":
/*!******************************************!*\
  !*** external "@badrap/bar-of-progress" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();