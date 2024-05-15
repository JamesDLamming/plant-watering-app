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

/***/ "./components/EditPlantModal.js":
/*!**************************************!*\
  !*** ./components/EditPlantModal.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DeletePlantModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeletePlantModal */ \"./components/DeletePlantModal.js\");\n\nvar _s = $RefreshSig$();\n\n // Ensure this is correctly imported\nfunction EditPlantModal(param) {\n    let { plant, onClose, onSave, onDelete } = param;\n    _s();\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentDeletePlant, setCurrentDeletePlant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const modalStyle = {\n    //     position: 'fixed',  // Fixed position to cover the entire viewport\n    //     top: 0,\n    //     left: 0,\n    //     width: '100vw',  // 100% of the viewport width\n    //     height: '100vh',  // 100% of the viewport height\n    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background\n    //     zIndex: 1000,  // Ensure it is above other content\n    //     display: 'flex',\n    //     justifyContent: 'center',\n    //     alignItems: 'center'\n    // };\n    // const modalContentStyle = {\n    //     backgroundColor: 'white',  // Background color for the modal content\n    //     padding: '20px',\n    //     borderRadius: '10px',\n    //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'  // Optional: Adding some shadow\n    // };\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: plant.name,\n        location: plant.location,\n        wateringFrequency: plant.wateringFrequency,\n        lastWateredDate: plant.lastWateredDate,\n        nextWaterDate: plant.nextWaterDate\n    });\n    const handleChange = (event)=>{\n        setFormData({\n            ...formData,\n            [event.target.name]: event.target.value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        onSave(plant._id, formData);\n    };\n    function handleOutsideClick(e) {\n        if (e.target.className === \"modal-overlay\") {\n            onClose();\n        }\n    }\n    const handleDeletePlant = (plant)=>{\n        setCurrentDeletePlant(plant);\n        setIsDeleteModalOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        onClick: handleOutsideClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-content\",\n                onClick: (e)=>e.stopPropagation(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Location:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"location\",\n                                value: formData.location,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Last Watered Date:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"lastWateredDate\",\n                                value: formData.lastWateredDate,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Watering Frequency (days):\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"wateringFrequency\",\n                                value: formData.wateringFrequency,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>handleDeletePlant(plant),\n                                children: \"Delete Plant\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onClose,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            isDeleteModalOpen && currentDeletePlant && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeletePlantModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                plant: currentDeletePlant,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: (plantId)=>{\n                    onDelete(plantId);\n                    setIsDeleteModalOpen(false);\n                    onClose();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                lineNumber: 85,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlantModal, \"Nhaq+bZ4toNS7qqvkAy3YrPaDnA=\");\n_c = EditPlantModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPlantModal);\nvar _c;\n$RefreshReg$(_c, \"EditPlantModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxvQ0FDTiw4REFBQ1IseURBQWdCQTtnQkFDYkUsT0FBT007Z0JBQ1BMLFNBQVMsSUFBTUkscUJBQXFCO2dCQUNwQ0YsVUFBVSxDQUFDaUM7b0JBQ1BqQyxTQUFTaUM7b0JBQ1QvQixxQkFBcUI7b0JBQ3JCSjtnQkFDSjs7Ozs7Ozs7Ozs7O0FBTTVCO0dBOUZTRjtLQUFBQTtBQWdHVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VkaXRQbGFudE1vZGFsLmpzPzBmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGVsZXRlUGxhbnRNb2RhbCBmcm9tICcuL0RlbGV0ZVBsYW50TW9kYWwnOyAvLyBFbnN1cmUgdGhpcyBpcyBjb3JyZWN0bHkgaW1wb3J0ZWRcclxuXHJcbmZ1bmN0aW9uIEVkaXRQbGFudE1vZGFsKHsgcGxhbnQsIG9uQ2xvc2UsIG9uU2F2ZSwgb25EZWxldGUgfSkge1xyXG4gICAgY29uc3QgW2lzRGVsZXRlTW9kYWxPcGVuLCBzZXRJc0RlbGV0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudERlbGV0ZVBsYW50LCBzZXRDdXJyZW50RGVsZXRlUGxhbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IG1vZGFsU3R5bGUgPSB7XHJcbiAgICAvLyAgICAgcG9zaXRpb246ICdmaXhlZCcsICAvLyBGaXhlZCBwb3NpdGlvbiB0byBjb3ZlciB0aGUgZW50aXJlIHZpZXdwb3J0XHJcbiAgICAvLyAgICAgdG9wOiAwLFxyXG4gICAgLy8gICAgIGxlZnQ6IDAsXHJcbiAgICAvLyAgICAgd2lkdGg6ICcxMDB2dycsICAvLyAxMDAlIG9mIHRoZSB2aWV3cG9ydCB3aWR0aFxyXG4gICAgLy8gICAgIGhlaWdodDogJzEwMHZoJywgIC8vIDEwMCUgb2YgdGhlIHZpZXdwb3J0IGhlaWdodFxyXG4gICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsICAvLyBTZW1pLXRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgIC8vICAgICB6SW5kZXg6IDEwMDAsICAvLyBFbnN1cmUgaXQgaXMgYWJvdmUgb3RoZXIgY29udGVudFxyXG4gICAgLy8gICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAvLyAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gY29uc3QgbW9kYWxDb250ZW50U3R5bGUgPSB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAgLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIG1vZGFsIGNvbnRlbnRcclxuICAgIC8vICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAvLyAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAvLyAgICAgYm94U2hhZG93OiAnMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKScgIC8vIE9wdGlvbmFsOiBBZGRpbmcgc29tZSBzaGFkb3dcclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogcGxhbnQubmFtZSxcclxuICAgICAgICBsb2NhdGlvbjogcGxhbnQubG9jYXRpb24sXHJcbiAgICAgICAgd2F0ZXJpbmdGcmVxdWVuY3k6IHBsYW50LndhdGVyaW5nRnJlcXVlbmN5LFxyXG4gICAgICAgIGxhc3RXYXRlcmVkRGF0ZTogcGxhbnQubGFzdFdhdGVyZWREYXRlLFxyXG4gICAgICAgIG5leHRXYXRlckRhdGU6IHBsYW50Lm5leHRXYXRlckRhdGVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uU2F2ZShwbGFudC5faWQsIGZvcm1EYXRhKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibW9kYWwtb3ZlcmxheVwiKSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVQbGFudCA9IChwbGFudCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnREZWxldGVQbGFudChwbGFudCk7XHJcbiAgICAgICAgc2V0SXNEZWxldGVNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgb25DbGljaz17aGFuZGxlT3V0c2lkZUNsaWNrfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Mb2NhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxvY2F0aW9uXCIgdmFsdWU9e2Zvcm1EYXRhLmxvY2F0aW9ufSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IFdhdGVyZWQgRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImxhc3RXYXRlcmVkRGF0ZVwiIHZhbHVlPXtmb3JtRGF0YS5sYXN0V2F0ZXJlZERhdGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPldhdGVyaW5nIEZyZXF1ZW5jeSAoZGF5cyk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIndhdGVyaW5nRnJlcXVlbmN5XCIgdmFsdWU9e2Zvcm1EYXRhLndhdGVyaW5nRnJlcXVlbmN5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVBsYW50KHBsYW50KX0+RGVsZXRlIFBsYW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNEZWxldGVNb2RhbE9wZW4gJiYgY3VycmVudERlbGV0ZVBsYW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVBsYW50TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50PXtjdXJyZW50RGVsZXRlUGxhbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KHBsYW50SWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZShwbGFudElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UGxhbnRNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEZWxldGVQbGFudE1vZGFsIiwiRWRpdFBsYW50TW9kYWwiLCJwbGFudCIsIm9uQ2xvc2UiLCJvblNhdmUiLCJvbkRlbGV0ZSIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0SXNEZWxldGVNb2RhbE9wZW4iLCJjdXJyZW50RGVsZXRlUGxhbnQiLCJzZXRDdXJyZW50RGVsZXRlUGxhbnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImxvY2F0aW9uIiwid2F0ZXJpbmdGcmVxdWVuY3kiLCJsYXN0V2F0ZXJlZERhdGUiLCJuZXh0V2F0ZXJEYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiX2lkIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZSIsImNsYXNzTmFtZSIsImhhbmRsZURlbGV0ZVBsYW50IiwiZGl2Iiwib25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJwbGFudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditPlantModal.js\n"));

/***/ })

});