"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Title(props) {\n    var Tag = props.tag;\n    console.log(Tag);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"481d7774a732dde7\",\n                        [\n                            Tag\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"481d7774a732dde7\",\n                dynamic: [\n                    Tag\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:#cece;\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Title;\n//Componente React\nfunction HomePage() {\n    //JSX\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                tag: \"h1\",\n                children: \"Boas vindas\"\n            }, void 0, false, {\n                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Discord\"\n            }, void 0, false, {\n                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/erickrosa/Workspace/Aluracord/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n}\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztTQUFTQSxLQUFLLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLEdBQUssQ0FBQ0MsR0FBRyxHQUFHRCxLQUFLLENBQUNFLEdBQUc7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHO0lBQ2YsTUFBTTs7d0ZBR0hBLEdBQUc7Ozs7OzRCQUdJQSxHQUFHOzs7O3dDQUhMRCxLQUFLLENBQUNLLFFBQVE7Ozs7Ozs7OztvQkFHWkosR0FBRzs7b0NBQUhBLEdBQUc7Ozs7QUFXZixDQUFDO0tBcEJRRixLQUFLO0FBdUJkLEVBQWtCO1NBQ1RPLFFBQVEsR0FBRyxDQUFDO0lBQ25CLEVBQUs7SUFDTCxNQUFNLDZFQUNIQyxDQUFHOzt3RkFHREMsV0FBVzs7Ozs7d0ZBQ1hULEtBQUs7Z0JBQUNHLEdBQUcsRUFBQyxDQUFJOzBCQUFDLENBQVc7Ozs7Ozt3RkFDMUJPLENBQUU7MEJBQUMsQ0FBTzs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7TUFiUUgsUUFBUTtBQWVqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcbiAgY29uc3QgVGFnID0gcHJvcHMudGFnO1xuICBjb25zb2xlLmxvZyhUYWcpO1xuICByZXR1cm4gKFxuPD5cblxuICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgJHtUYWd9IHtcbiAgICAgICAgICAgIGNvbG9yOiAjY2VjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8Lz5cbiAgKVxuXG5cbn1cblxuXG4vL0NvbXBvbmVudGUgUmVhY3RcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAvL0pTWFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcblxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VGl0bGUgdGFnPVwiaDFcIj5Cb2FzIHZpbmRhczwvVGl0bGU+XG4gICAgICA8aDI+RGlzY29yZDwvaDI+XG5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJUaXRsZSIsInByb3BzIiwiVGFnIiwidGFnIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJkaXYiLCJHbG9iYWxTdHlsZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});