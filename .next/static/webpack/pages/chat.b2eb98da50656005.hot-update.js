"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzODg2NSwiZXhwIjoxOTU4OTE0ODY1fQ.yT4zUbsNscg8phANHPgFMGb1_0m0us4FrKPOqAf4z2o';\nvar SUPABASE_URL = \"https://vxncrnvewxrrgjkmsfad.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nfunction ChatPage() {\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            texto: novaMensagem,\n            de: \"x\"\n        };\n        supabaseClient.from(\"mensagens\").insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            console.log(data);\n        });\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listadeMensagens = ref1[0], setListadeMensagens = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from(\"mensagens\").select(\"*\").then(function(param) {\n            var data = param.data;\n            setListadeMensagens(data);\n        });\n    }, []);\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listadeMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(e) {\n                                    var value = e.target.value;\n                                    console.log(value);\n                                    setMensagem(value);\n                                },\n                                onKeyPress: function(e) {\n                                    if (e.key == \"Enter\") {\n                                        e.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                        console.log(e);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"O62mnD5I5GR3KZ5FCN+S4/2YD4Q=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n            lineNumber: 129,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props.mensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de)\n                            }, void 0, false, {\n                                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                                lineNumber: 183,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                                lineNumber: 193,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                                lineNumber: 194,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                        lineNumber: 178,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n                lineNumber: 166,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/erickrosa/Workspace/Aluracord/pages/chat.js\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7b0JBQ1hpQixZQUFZLEVBQUUsQ0FBSztvQkFDbkJJLE9BQU8sRUFBRSxDQUFLO29CQUNkbUIsWUFBWSxFQUFFLENBQU07b0JBQ3BCUyxLQUFLLEVBQUUsQ0FBQzt3QkFDTjdDLGVBQWUsRUFBRTNCLG9FQUFvQztvQkFDdkQsQ0FBQztnQkFDSCxDQUFDOztnR0FFQU4scURBQUc7d0JBQ0Y2QixVQUFVLEVBQUUsQ0FBQzs0QkFDWHdDLFlBQVksRUFBRSxDQUFLO3dCQUNyQixDQUFDOzt3R0FFQWxFLHVEQUFLO2dDQUNKMEIsVUFBVSxFQUFFLENBQUM7b0NBQ1hvQyxLQUFLLEVBQUUsQ0FBTTtvQ0FDYmxCLE1BQU0sRUFBRSxDQUFNO29DQUNkRCxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJoQixPQUFPLEVBQUUsQ0FBYztvQ0FDdkJzQyxXQUFXLEVBQUUsQ0FBSztnQ0FDcEIsQ0FBQztnQ0FDRFcsR0FBRyxFQUFHLENBQW1CLHFCQUFjLE9BQVpqRSxRQUFRLENBQUNFLEVBQUU7Ozs7Ozt3R0FFdkNmLHNEQUFJO2dDQUFDMEUsR0FBRyxFQUFDLENBQVE7MENBQUU3RCxRQUFRLENBQUNFLEVBQUU7Ozs7Ozt3R0FDOUJmLHNEQUFJO2dDQUNINEIsVUFBVSxFQUFFLENBQUM7b0NBQ1htRCxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQnhDLEtBQUssRUFBRW5DLG9FQUFvQztnQ0FDN0MsQ0FBQztnQ0FDRHFFLEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ08sSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFHakNyRSxRQUFRLENBQUNDLEtBQUs7O2VBdENWRCxRQUFRLENBQUNzRSxFQUFFOzs7OztRQXlDdEIsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztNQTdEUS9CLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBTVVBBQkFTRV9BTk9OX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNek16T0RnMk5Td2laWGh3SWpveE9UVTRPVEUwT0RZMWZRLnlUNHpVYnNOc2NnOHBoQU5IUGdGTUdiMV8wbTB1czRGcktQT3FBZjR6Mm8nO1xuY29uc3QgU1VQQUJBU0VfVVJMID0gXCJodHRwczovL3Z4bmNybnZld3hycmdqa21zZmFkLnN1cGFiYXNlLmNvXCI7XG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FOT05fS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XG4gIC8vIFN1YSBsw7NnaWNhIHZhaSBhcXVpXG4gIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaXN0YWRlTWVuc2FnZW5zLCBzZXRMaXN0YWRlTWVuc2FnZW5zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN1cGFiYXNlQ2xpZW50XG4gICAgICAuZnJvbShcIm1lbnNhZ2Vuc1wiKVxuICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRMaXN0YWRlTWVuc2FnZW5zKGRhdGEpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxuICAgICAgZGU6IFwieFwiLFxuICAgICAgLy8gaWQ6IGxpc3RhZGVNZW5zYWdlbnMubGVuZ3RoICsgMSxcbiAgICB9O1xuXG4gICAgc3VwYWJhc2VDbGllbnRcbiAgICAgIC5mcm9tKFwibWVuc2FnZW5zXCIpXG4gICAgICAuaW5zZXJ0KFttZW5zYWdlbV0pXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KTtcblxuICAgXG4gIH1cbiAgLy8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjk1JVwiLFxuICAgICAgICAgIG1heEhlaWdodDogXCI5NXZoXCIsXG4gICAgICAgICAgcGFkZGluZzogXCIzMnB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFkZU1lbnNhZ2Vuc30gLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcbiAgICAgICAgICBjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcbiAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLm1lbnNhZ2Vucyk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdGFnPVwidWxcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5tZW5zYWdlbnMubWFwKChtZW5zYWdlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxuICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke21lbnNhZ2VtLmRlfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPnttZW5zYWdlbS5kZX08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI4cHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwidGV4dG8iLCJkZSIsImZyb20iLCJpbnNlcnQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNldE1lbnNhZ2VtIiwibGlzdGFkZU1lbnNhZ2VucyIsInNldExpc3RhZGVNZW5zYWdlbnMiLCJ1c2VFZmZlY3QiLCJzZWxlY3QiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});