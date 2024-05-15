"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/PlantItem.js":
/*!*********************************!*\
  !*** ./components/PlantItem.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"__barrel_optimize__?names=format!=!./node_modules/date-fns/index.mjs\");\n\n\n\nfunction PlantItem(param) {\n    let { plant, onWaterPlant, onEditPlant } = param;\n    // Helper function to format date as \"5th June\"\n    function formatDate(dateStr) {\n        // Extract the date part only from the ISO string\n        const datePart = dateStr.split(\"T\")[0]; // Gets '2024-05-06' from '2024-05-06T00:00:00.000Z'\n        const date = new Date(datePart + \"T00:00:00\"); // Appends T00:00:00 to ensure no timezone offset\n        // Now format the date with date-fns or any other library/method you prefer\n        return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(date, \"do MMMM\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"plant-item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Photo placeholder\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: plant.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Location: \",\n                            plant.location\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Water every \",\n                            plant.wateringFrequency,\n                            \" days\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Last watered: \",\n                            plant.lastWateredDate ? formatDate(plant.lastWateredDate) : \"Not available\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontWeight: \"bold\"\n                        },\n                        children: [\n                            \"Next watered: \",\n                            plant.nextWaterDate ? formatDate(plant.nextWaterDate) : \"Not available\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white p-2\",\n                        onClick: onEditPlant,\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white p-2\",\n                        onClick: onWaterPlant,\n                        children: \"Water Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\PlantItem.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = PlantItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantItem);\nvar _c;\n$RefreshReg$(_c, \"PlantItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYW50SXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ1E7QUFHbEMsU0FBU0UsVUFBVSxLQUFvQztRQUFwQyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFLEdBQXBDO0lBQ2YsK0NBQStDO0lBQy9DLFNBQVNDLFdBQVdDLE9BQU87UUFDdkIsaURBQWlEO1FBQ2pELE1BQU1DLFdBQVdELFFBQVFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLG9EQUFvRDtRQUM1RixNQUFNQyxPQUFPLElBQUlDLEtBQUtILFdBQVcsY0FBYyxpREFBaUQ7UUFFaEcsMkVBQTJFO1FBQzNFLE9BQU9QLDhFQUFNQSxDQUFDUyxNQUFNO0lBQ3hCO0lBS0EscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDswQkFBSTs7Ozs7OzBCQUdMLDhEQUFDQTs7a0NBQ0QsOERBQUNFO2tDQUFJWCxNQUFNWSxJQUFJOzs7Ozs7a0NBQ2YsOERBQUNDOzs0QkFBRTs0QkFBV2IsTUFBTWMsUUFBUTs7Ozs7OztrQ0FDNUIsOERBQUNEOzs0QkFBRTs0QkFBYWIsTUFBTWUsaUJBQWlCOzRCQUFDOzs7Ozs7O2tDQUN4Qyw4REFBQ0Y7OzRCQUFFOzRCQUFlYixNQUFNZ0IsZUFBZSxHQUFHYixXQUFXSCxNQUFNZ0IsZUFBZSxJQUFJOzs7Ozs7O2tDQUM5RSw4REFBQ0g7d0JBQUVJLE9BQU87NEJBQUNDLFlBQVk7d0JBQU07OzRCQUFHOzRCQUFlbEIsTUFBTW1CLGFBQWEsR0FBR2hCLFdBQVdILE1BQU1tQixhQUFhLElBQUk7Ozs7Ozs7Ozs7Ozs7MEJBRXZHLDhEQUFDVjs7a0NBQ0QsOERBQUNXO3dCQUFPVixXQUFVO3dCQUE2QlcsU0FBU25CO2tDQUFhOzs7Ozs7a0NBQ3JFLDhEQUFDa0I7d0JBQU9WLFdBQVU7d0JBQTZCVyxTQUFTcEI7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRjtLQWhDU0Y7QUFrQ1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGFudEl0ZW0uanM/YzM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5cclxuZnVuY3Rpb24gUGxhbnRJdGVtKHsgcGxhbnQsIG9uV2F0ZXJQbGFudCwgb25FZGl0UGxhbnQgfSkge1xyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGFzIFwiNXRoIEp1bmVcIlxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyKSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgZGF0ZSBwYXJ0IG9ubHkgZnJvbSB0aGUgSVNPIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0ID0gZGF0ZVN0ci5zcGxpdCgnVCcpWzBdOyAvLyBHZXRzICcyMDI0LTA1LTA2JyBmcm9tICcyMDI0LTA1LTA2VDAwOjAwOjAwLjAwMFonXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVQYXJ0ICsgJ1QwMDowMDowMCcpOyAvLyBBcHBlbmRzIFQwMDowMDowMCB0byBlbnN1cmUgbm8gdGltZXpvbmUgb2Zmc2V0XHJcbiAgICBcclxuICAgICAgICAvLyBOb3cgZm9ybWF0IHRoZSBkYXRlIHdpdGggZGF0ZS1mbnMgb3IgYW55IG90aGVyIGxpYnJhcnkvbWV0aG9kIHlvdSBwcmVmZXJcclxuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdkbyBNTU1NJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBQaG90byBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntwbGFudC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwPkxvY2F0aW9uOiB7cGxhbnQubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICA8cD5XYXRlciBldmVyeSB7cGxhbnQud2F0ZXJpbmdGcmVxdWVuY3l9IGRheXM8L3A+XHJcbiAgICAgICAgICAgIDxwPkxhc3Qgd2F0ZXJlZDoge3BsYW50Lmxhc3RXYXRlcmVkRGF0ZSA/IGZvcm1hdERhdGUocGxhbnQubGFzdFdhdGVyZWREYXRlKSA6ICdOb3QgYXZhaWxhYmxlJ308L3A+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodCA6J2JvbGQnfX0+TmV4dCB3YXRlcmVkOiB7cGxhbnQubmV4dFdhdGVyRGF0ZSA/IGZvcm1hdERhdGUocGxhbnQubmV4dFdhdGVyRGF0ZSkgOiAnTm90IGF2YWlsYWJsZSd9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMlwiIG9uQ2xpY2s9e29uRWRpdFBsYW50fT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTJcIiBvbkNsaWNrPXtvbldhdGVyUGxhbnR9PldhdGVyIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYW50SXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9ybWF0IiwiUGxhbnRJdGVtIiwicGxhbnQiLCJvbldhdGVyUGxhbnQiLCJvbkVkaXRQbGFudCIsImZvcm1hdERhdGUiLCJkYXRlU3RyIiwiZGF0ZVBhcnQiLCJzcGxpdCIsImRhdGUiLCJEYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsImxvY2F0aW9uIiwid2F0ZXJpbmdGcmVxdWVuY3kiLCJsYXN0V2F0ZXJlZERhdGUiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJuZXh0V2F0ZXJEYXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PlantItem.js\n"));

/***/ })

});