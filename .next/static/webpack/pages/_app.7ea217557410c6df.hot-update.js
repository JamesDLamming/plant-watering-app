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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DeletePlantModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeletePlantModal */ \"./components/DeletePlantModal.js\");\n\nvar _s = $RefreshSig$();\n\n // Ensure this is correctly imported\nfunction EditPlantModal(param) {\n    let { plant, onClose, onSave, onDelete } = param;\n    _s();\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentDeletePlant, setCurrentDeletePlant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [plantData, setPlantData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: plant.name,\n        location: plant.location,\n        wateringFrequency: plant.wateringFrequency,\n        lastWateredDate: plant.lastWateredDate,\n        nextWaterDate: plant.nextWaterDate\n    });\n    const handleChange = (e)=>{\n        const { name, value, files } = e.target;\n        setPlantData({\n            ...plantData,\n            [name]: files ? files[0] : value // Handle file input\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const nextWateringDate = calculateNextWateringDate(plantData.lastWateredDate, plantData.wateringFrequency);\n        const formData = new FormData();\n        formData.append(\"name\", plant.name);\n        formData.append(\"location\", plant.location);\n        formData.append(\"lastWateredDate\", plant.lastWateredDate);\n        formData.append(\"wateringFrequency\", plant.wateringFrequency);\n        formData.append(\"wateringAmount\", plant.wateringAmount);\n        formData.append(\"nextWaterDate\", nextWateringDate);\n        if (plant.photo) {\n            formData.append(\"photo\", plant.photo); // Append the file\n        }\n        onSave(plant._id, formData);\n    };\n    function handleOutsideClick(e) {\n        if (e.target.className === \"modal-overlay\") {\n            onClose();\n        }\n    }\n    const handleDeletePlant = (plant)=>{\n        setCurrentDeletePlant(plant);\n        setIsDeleteModalOpen(true);\n    };\n    const calculateNextWateringDate = (lastWateredDate, wateringFrequency)=>{\n        const date = new Date(lastWateredDate);\n        date.setDate(date.getDate() + parseInt(wateringFrequency));\n        return date.toISOString().split(\"T\")[0]; // Format to YYYY-MM-DD\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        onClick: handleOutsideClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-content\",\n                onClick: (e)=>e.stopPropagation(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modalHeading\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Edit Plant\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this),\n                            \"                \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-input-parent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Name:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"name\",\n                                            className: \"form-input\",\n                                            value: plantData.name,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-input-parent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Location:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"location\",\n                                            className: \"form-input\",\n                                            value: plantData.location,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-input-parent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Last Watered Date:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"date\",\n                                            name: \"lastWateredDate\",\n                                            className: \"form-input\",\n                                            value: plantData.lastWateredDate.split(\"T\")[0],\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-input-parent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Watering Frequency (days):\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            name: \"wateringFrequency\",\n                                            className: \"form-input\",\n                                            value: plantData.wateringFrequency,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"plantImage\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"plantImage\",\n                                        src: plant.photo\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"button\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"button deletePlantButton\",\n                                    onClick: ()=>handleDeletePlant(plant),\n                                    children: \"Delete Plant\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: onClose,\n                                    className: \"button closeButton\",\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            isDeleteModalOpen && currentDeletePlant && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeletePlantModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                plant: currentDeletePlant,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: (plantId)=>{\n                    onDelete(plantId);\n                    setIsDeleteModalOpen(false);\n                    onClose();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n                lineNumber: 96,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\components\\\\EditPlantModal.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlantModal, \"Rw8NUbDp9jazckFY8P7dSexvlpk=\");\n_c = EditPlantModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPlantModal);\nvar _c;\n$RefreshReg$(_c, \"EditPlantModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXRQbGFudE1vZGFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1UsQ0FBQyxvQ0FBb0M7QUFFdkYsU0FBU0csZUFBZSxLQUFvQztRQUFwQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBcEM7O0lBQ3BCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDUyxvQkFBb0JDLHNCQUFzQixHQUFHViwrQ0FBUUEsQ0FBQztJQUc3RCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFDdkNhLE1BQU1WLE1BQU1VLElBQUk7UUFDaEJDLFVBQVVYLE1BQU1XLFFBQVE7UUFDeEJDLG1CQUFtQlosTUFBTVksaUJBQWlCO1FBQzFDQyxpQkFBaUJiLE1BQU1hLGVBQWU7UUFDdENDLGVBQWVkLE1BQU1jLGFBQWE7SUFDdEM7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRU4sSUFBSSxFQUFFTyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBRXZDVixhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLENBQUNFLEtBQUssRUFBRVEsUUFBUUEsS0FBSyxDQUFDLEVBQUUsR0FBR0QsTUFBTSxvQkFBb0I7UUFDekQ7SUFDSjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDbEJBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsbUJBQW1CQywwQkFBMEJoQixVQUFVSyxlQUFlLEVBQUVMLFVBQVVJLGlCQUFpQjtRQUV6RyxNQUFNYSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUTNCLE1BQU1VLElBQUk7UUFDbENlLFNBQVNFLE1BQU0sQ0FBQyxZQUFZM0IsTUFBTVcsUUFBUTtRQUMxQ2MsU0FBU0UsTUFBTSxDQUFDLG1CQUFtQjNCLE1BQU1hLGVBQWU7UUFDeERZLFNBQVNFLE1BQU0sQ0FBQyxxQkFBcUIzQixNQUFNWSxpQkFBaUI7UUFDNURhLFNBQVNFLE1BQU0sQ0FBQyxrQkFBa0IzQixNQUFNNEIsY0FBYztRQUN0REgsU0FBU0UsTUFBTSxDQUFDLGlCQUFpQko7UUFDakMsSUFBSXZCLE1BQU02QixLQUFLLEVBQUU7WUFDYkosU0FBU0UsTUFBTSxDQUFDLFNBQVMzQixNQUFNNkIsS0FBSyxHQUFHLGtCQUFrQjtRQUM3RDtRQUdBM0IsT0FBT0YsTUFBTThCLEdBQUcsRUFBRUw7SUFDdEI7SUFDQSxTQUFTTSxtQkFBbUJmLENBQUM7UUFDekIsSUFBSUEsRUFBRUcsTUFBTSxDQUFDYSxTQUFTLEtBQUssaUJBQWlCO1lBQ3hDL0I7UUFDSjtJQUNKO0lBQ0EsTUFBTWdDLG9CQUFvQixDQUFDakM7UUFDdkJPLHNCQUFzQlA7UUFDdEJLLHFCQUFxQjtJQUN6QjtJQUVBLE1BQU1tQiw0QkFBNEIsQ0FBQ1gsaUJBQWlCRDtRQUNoRCxNQUFNc0IsT0FBTyxJQUFJQyxLQUFLdEI7UUFDdEJxQixLQUFLRSxPQUFPLENBQUNGLEtBQUtHLE9BQU8sS0FBS0MsU0FBUzFCO1FBQ3ZDLE9BQU9zQixLQUFLSyxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLHVCQUF1QjtJQUNwRTtJQUdBLHFCQUNJLDhEQUFDQztRQUFLVCxXQUFVO1FBQWdCVSxTQUFTWDs7MEJBQ3pDLDhEQUFDVTtnQkFBSVQsV0FBVTtnQkFBZ0JVLFNBQVMxQixDQUFBQSxJQUFLQSxFQUFFMkIsZUFBZTs7a0NBQzlELDhEQUFDRjt3QkFBSVQsV0FBVTs7MENBQ0gsOERBQUNZOzBDQUFHOzs7Ozs7NEJBQWU7Ozs7Ozs7a0NBQy9CLDhEQUFDSDt3QkFBSVQsV0FBVTtrQ0FDWCw0RUFBQ2E7NEJBQUtDLFVBQVUxQjs0QkFBY1ksV0FBVTs7OENBQ3BDLDhEQUFDUztvQ0FBSVQsV0FBVTs7c0RBQ1gsOERBQUNlO3NEQUFNOzs7Ozs7c0RBQ1AsOERBQUNDOzRDQUFNQyxNQUFLOzRDQUFPdkMsTUFBSzs0Q0FBT3NCLFdBQVU7NENBQWFmLE9BQU9ULFVBQVVFLElBQUk7NENBQUV3QyxVQUFVbkM7Ozs7Ozs7Ozs7Ozs4Q0FFM0YsOERBQUMwQjtvQ0FBSVQsV0FBVTs7c0RBQ2YsOERBQUNlO3NEQUFNOzs7Ozs7c0RBQ1AsOERBQUNDOzRDQUFNQyxNQUFLOzRDQUFPdkMsTUFBSzs0Q0FBV3NCLFdBQVU7NENBQWFmLE9BQU9ULFVBQVVHLFFBQVE7NENBQUV1QyxVQUFVbkM7Ozs7Ozs7Ozs7Ozs4Q0FFL0YsOERBQUMwQjtvQ0FBSVQsV0FBVTs7c0RBQ2YsOERBQUNlO3NEQUFNOzs7Ozs7c0RBQ1AsOERBQUNDOzRDQUFNQyxNQUFLOzRDQUFPdkMsTUFBSzs0Q0FBa0JzQixXQUFVOzRDQUFhZixPQUFPVCxVQUFVSyxlQUFlLENBQUMyQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7NENBQUVVLFVBQVVuQzs7Ozs7Ozs7Ozs7OzhDQUUzSCw4REFBQzBCO29DQUFJVCxXQUFVOztzREFDZiw4REFBQ2U7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7NENBQU1DLE1BQUs7NENBQVN2QyxNQUFLOzRDQUFvQnNCLFdBQVU7NENBQWFmLE9BQU9ULFVBQVVJLGlCQUFpQjs0Q0FBRXNDLFVBQVVuQzs7Ozs7Ozs7Ozs7OzhDQUVuSCw4REFBQzBCO29DQUFJVCxXQUFVOzhDQUNmLDRFQUFDbUI7d0NBQUluQixXQUFVO3dDQUFhb0IsS0FBS3BELE1BQU02QixLQUFLOzs7Ozs7Ozs7Ozs4Q0FFNUMsOERBQUN3QjtvQ0FBT0osTUFBSztvQ0FBU2pCLFdBQVU7OENBQVM7Ozs7Ozs4Q0FDekMsOERBQUNxQjtvQ0FBT0osTUFBSztvQ0FBU2pCLFdBQVU7b0NBQTJCVSxTQUFTLElBQU1ULGtCQUFrQmpDOzhDQUFROzs7Ozs7OENBQ3BHLDhEQUFDcUQ7b0NBQU9YLFNBQVN6QztvQ0FBUytCLFdBQVU7OENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtoRTVCLHFCQUFxQkUsb0NBQ04sOERBQUNSLHlEQUFnQkE7Z0JBQ2JFLE9BQU9NO2dCQUNQTCxTQUFTLElBQU1JLHFCQUFxQjtnQkFDcENGLFVBQVUsQ0FBQ21EO29CQUNQbkQsU0FBU21EO29CQUNUakQscUJBQXFCO29CQUNyQko7Z0JBQ0o7Ozs7Ozs7Ozs7OztBQU01QjtHQXpHU0Y7S0FBQUE7QUEyR1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UGxhbnRNb2RhbC5qcz8wZjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERlbGV0ZVBsYW50TW9kYWwgZnJvbSAnLi9EZWxldGVQbGFudE1vZGFsJzsgLy8gRW5zdXJlIHRoaXMgaXMgY29ycmVjdGx5IGltcG9ydGVkXHJcblxyXG5mdW5jdGlvbiBFZGl0UGxhbnRNb2RhbCh7IHBsYW50LCBvbkNsb3NlLCBvblNhdmUsIG9uRGVsZXRlIH0pIHtcclxuICAgIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnREZWxldGVQbGFudCwgc2V0Q3VycmVudERlbGV0ZVBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbcGxhbnREYXRhLCBzZXRQbGFudERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IHBsYW50Lm5hbWUsXHJcbiAgICAgICAgbG9jYXRpb246IHBsYW50LmxvY2F0aW9uLFxyXG4gICAgICAgIHdhdGVyaW5nRnJlcXVlbmN5OiBwbGFudC53YXRlcmluZ0ZyZXF1ZW5jeSxcclxuICAgICAgICBsYXN0V2F0ZXJlZERhdGU6IHBsYW50Lmxhc3RXYXRlcmVkRGF0ZSxcclxuICAgICAgICBuZXh0V2F0ZXJEYXRlOiBwbGFudC5uZXh0V2F0ZXJEYXRlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgc2V0UGxhbnREYXRhKHtcclxuICAgICAgICAgICAgLi4ucGxhbnREYXRhLFxyXG4gICAgICAgICAgICBbbmFtZV06IGZpbGVzID8gZmlsZXNbMF0gOiB2YWx1ZSAvLyBIYW5kbGUgZmlsZSBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0V2F0ZXJpbmdEYXRlID0gY2FsY3VsYXRlTmV4dFdhdGVyaW5nRGF0ZShwbGFudERhdGEubGFzdFdhdGVyZWREYXRlLCBwbGFudERhdGEud2F0ZXJpbmdGcmVxdWVuY3kpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHBsYW50Lm5hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9jYXRpb24nLCBwbGFudC5sb2NhdGlvbik7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsYXN0V2F0ZXJlZERhdGUnLCBwbGFudC5sYXN0V2F0ZXJlZERhdGUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnd2F0ZXJpbmdGcmVxdWVuY3knLCBwbGFudC53YXRlcmluZ0ZyZXF1ZW5jeSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd3YXRlcmluZ0Ftb3VudCcsIHBsYW50LndhdGVyaW5nQW1vdW50KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25leHRXYXRlckRhdGUnLCBuZXh0V2F0ZXJpbmdEYXRlKTtcclxuICAgICAgICBpZiAocGxhbnQucGhvdG8pIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBsYW50LnBob3RvKTsgLy8gQXBwZW5kIHRoZSBmaWxlXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgb25TYXZlKHBsYW50Ll9pZCwgZm9ybURhdGEpO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJtb2RhbC1vdmVybGF5XCIpIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVBsYW50ID0gKHBsYW50KSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudERlbGV0ZVBsYW50KHBsYW50KTtcclxuICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3Blbih0cnVlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRXYXRlcmluZ0RhdGUgPSAobGFzdFdhdGVyZWREYXRlLCB3YXRlcmluZ0ZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsYXN0V2F0ZXJlZERhdGUpO1xyXG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHBhcnNlSW50KHdhdGVyaW5nRnJlcXVlbmN5KSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdOyAvLyBGb3JtYXQgdG8gWVlZWS1NTS1ERFxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiIG9uQ2xpY2s9e2hhbmRsZU91dHNpZGVDbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCIgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxIZWFkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RWRpdCBQbGFudDwvaDM+ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1wYXJlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT0nZm9ybS1pbnB1dCcgdmFsdWU9e3BsYW50RGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQtcGFyZW50XCIgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkxvY2F0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibG9jYXRpb25cIiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnIHZhbHVlPXtwbGFudERhdGEubG9jYXRpb259IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1wYXJlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBXYXRlcmVkIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJsYXN0V2F0ZXJlZERhdGVcIiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnIHZhbHVlPXtwbGFudERhdGEubGFzdFdhdGVyZWREYXRlLnNwbGl0KCdUJylbMF19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1wYXJlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+V2F0ZXJpbmcgRnJlcXVlbmN5IChkYXlzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwid2F0ZXJpbmdGcmVxdWVuY3lcIiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnIHZhbHVlPXtwbGFudERhdGEud2F0ZXJpbmdGcmVxdWVuY3l9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhbnRJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwbGFudEltYWdlXCIgc3JjPXtwbGFudC5waG90b30+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYnV0dG9uJz5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9J2J1dHRvbiBkZWxldGVQbGFudEJ1dHRvbicgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlUGxhbnQocGxhbnQpfT5EZWxldGUgUGxhbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPSdidXR0b24gY2xvc2VCdXR0b24nPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNEZWxldGVNb2RhbE9wZW4gJiYgY3VycmVudERlbGV0ZVBsYW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVBsYW50TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50PXtjdXJyZW50RGVsZXRlUGxhbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KHBsYW50SWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZShwbGFudElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UGxhbnRNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEZWxldGVQbGFudE1vZGFsIiwiRWRpdFBsYW50TW9kYWwiLCJwbGFudCIsIm9uQ2xvc2UiLCJvblNhdmUiLCJvbkRlbGV0ZSIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0SXNEZWxldGVNb2RhbE9wZW4iLCJjdXJyZW50RGVsZXRlUGxhbnQiLCJzZXRDdXJyZW50RGVsZXRlUGxhbnQiLCJwbGFudERhdGEiLCJzZXRQbGFudERhdGEiLCJuYW1lIiwibG9jYXRpb24iLCJ3YXRlcmluZ0ZyZXF1ZW5jeSIsImxhc3RXYXRlcmVkRGF0ZSIsIm5leHRXYXRlckRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJmaWxlcyIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0V2F0ZXJpbmdEYXRlIiwiY2FsY3VsYXRlTmV4dFdhdGVyaW5nRGF0ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ3YXRlcmluZ0Ftb3VudCIsInBob3RvIiwiX2lkIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiY2xhc3NOYW1lIiwiaGFuZGxlRGVsZXRlUGxhbnQiLCJkYXRlIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwicGFyc2VJbnQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGl2Iiwib25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImltZyIsInNyYyIsImJ1dHRvbiIsInBsYW50SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EditPlantModal.js\n"));

/***/ })

});