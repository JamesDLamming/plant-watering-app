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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_PlantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PlantList */ \"./components/PlantList.js\");\n/* harmony import */ var _components_AddPlantForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddPlantForm */ \"./components/AddPlantForm.js\");\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/global.css */ \"./public/styles/global.css\");\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);\n// In App.js, assuming you have an API setup\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App() {\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAddPlant = ()=>{\n        setIsModalOpen(true);\n    };\n    const [plants, setPlants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants\")).then((response)=>response.json()).then((data)=>setPlants(data)).catch((error)=>console.error(\"Error fetching plants:\", error));\n    }, []);\n    const addPlant = (plant)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(plant) // Convert the JavaScript object to a JSON string\n        }).then((response)=>response.json()) // Convert the response to JSON\n        .then((data)=>{\n            setPlants((prevPlants)=>[\n                    ...prevPlants,\n                    data\n                ]); // Update the state with the new plant\n            console.log(\"Plant added:\", data);\n        }).catch((error)=>{\n            console.error(\"Error adding plant:\", error);\n        });\n    };\n    const updatePlantWateringDate = (plantId, newDates)=>{\n        console.log(plantId, newDates);\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId, \"/water\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newDates)\n        }).then((response)=>response.json()).then((updatedPlant)=>{\n            setPlants((plants)=>plants.map((plant)=>plant._id === plantId ? updatedPlant : plant));\n        }).catch((error)=>console.error(\"Failed to update plant:\", error));\n    };\n    const updatePlant = (plantId, newData)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId, \"/edit\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newData)\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"HTTP error! status: \".concat(response.status));\n            }\n            return response.json();\n        }).then((updatedPlant)=>{\n            setPlants((plants)=>plants.map((plant)=>plant._id === plantId ? updatedPlant : plant));\n        }).catch((error)=>{\n            console.error(\"Failed to update plant:\", error);\n        // Optionally handle user notification here\n        });\n    };\n    const deletePlant = (plantId)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId), {\n            method: \"DELETE\"\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Failed to delete the plant\");\n            }\n            return response.json();\n        }).then((data)=>{\n            console.log(data.message);\n            // Optionally update the state to remove the plant from the list\n            setPlants((currentPlants)=>currentPlants.filter((plant)=>plant._id !== plantId));\n        }).catch((error)=>{\n            console.error(\"Error deleting plant:\", error);\n        });\n    };\n    function handleOutsideClick(e) {\n        if (e.target.className === \"modal-overlay\") {\n            setIsModalOpen(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button\",\n                onClick: handleAddPlant,\n                children: \"Add Plant\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-overlay\",\n                onClick: handleOutsideClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-content\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddPlantForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            addPlant: addPlant,\n                            onClose: ()=>setIsModalOpen(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                    lineNumber: 112,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 111,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                plants: plants,\n                updatePlantWateringDate: updatePlantWateringDate,\n                updatePlant: updatePlant,\n                deletePlant: deletePlant\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"cC7dSTMddoJN01vFnRsTSIrhbpU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0dBdkhTckM7S0FBQUE7QUF5SFQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluIEFwcC5qcywgYXNzdW1pbmcgeW91IGhhdmUgYW4gQVBJIHNldHVwXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IFBsYW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BsYW50TGlzdCc7XHJcbmltcG9ydCBBZGRQbGFudEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRQbGFudEZvcm0nO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvZ2xvYmFsLmNzcydcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQWRkUGxhbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IFtwbGFudHMsIHNldFBsYW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX0FQSV9VUkx9L2FwaS9wbGFudHNgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0UGxhbnRzKGRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGxhbnRzOicsIGVycm9yKSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGFkZFBsYW50ID0gcGxhbnQgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfQVBJX1VSTH0vYXBpL3BsYW50c2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIFNwZWNpZnkgdGhlIG1ldGhvZCB0byBQT1NUXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC8vIFNldCB0aGUgaGVhZGVycyB0byBpbmZvcm0gdGhlIHNlcnZlciBhYm91dCB0aGUgZGF0YSB0eXBlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBsYW50KSAvLyBDb252ZXJ0IHRoZSBKYXZhU2NyaXB0IG9iamVjdCB0byBhIEpTT04gc3RyaW5nXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIENvbnZlcnQgdGhlIHJlc3BvbnNlIHRvIEpTT05cclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgc2V0UGxhbnRzKHByZXZQbGFudHMgPT4gWy4uLnByZXZQbGFudHMsIGRhdGFdKTsgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgcGxhbnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYW50IGFkZGVkOicsIGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHBsYW50OicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuY29uc3QgdXBkYXRlUGxhbnRXYXRlcmluZ0RhdGUgPSAocGxhbnRJZCwgbmV3RGF0ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBsYW50SWQsIG5ld0RhdGVzKVxyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9BUElfVVJMfS9hcGkvcGxhbnRzLyR7cGxhbnRJZH0vd2F0ZXJgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdEYXRlcylcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbih1cGRhdGVkUGxhbnQgPT4ge1xyXG4gICAgICAgIHNldFBsYW50cyhwbGFudHMgPT4gcGxhbnRzLm1hcChwbGFudCA9PiBwbGFudC5faWQgPT09IHBsYW50SWQgPyB1cGRhdGVkUGxhbnQgOiBwbGFudCkpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBsYW50OicsIGVycm9yKSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVQbGFudCA9IChwbGFudElkLCBuZXdEYXRhKSA9PiB7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX0FQSV9VUkx9L2FwaS9wbGFudHMvJHtwbGFudElkfS9lZGl0YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3RGF0YSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4odXBkYXRlZFBsYW50ID0+IHtcclxuICAgICAgICBzZXRQbGFudHMocGxhbnRzID0+IHBsYW50cy5tYXAocGxhbnQgPT4gcGxhbnQuX2lkID09PSBwbGFudElkID8gdXBkYXRlZFBsYW50IDogcGxhbnQpKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcGxhbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHVzZXIgbm90aWZpY2F0aW9uIGhlcmVcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlUGxhbnQgPSAocGxhbnRJZCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9BUElfVVJMfS9hcGkvcGxhbnRzLyR7cGxhbnRJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0aGUgcGxhbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsbHkgdXBkYXRlIHRoZSBzdGF0ZSB0byByZW1vdmUgdGhlIHBsYW50IGZyb20gdGhlIGxpc3RcclxuICAgICAgICBzZXRQbGFudHMoY3VycmVudFBsYW50cyA9PiBjdXJyZW50UGxhbnRzLmZpbHRlcihwbGFudCA9PiBwbGFudC5faWQgIT09IHBsYW50SWQpKTtcclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwbGFudDonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibW9kYWwtb3ZlcmxheVwiKSB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlQWRkUGxhbnR9PkFkZCBQbGFudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7aXNNb2RhbE9wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIiBvbkNsaWNrPXtoYW5kbGVPdXRzaWRlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgICBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCIgb25DbGljaz17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgIDxBZGRQbGFudEZvcm0gYWRkUGxhbnQ9e2FkZFBsYW50fSAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKX1cclxuLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQbGFudExpc3QgcGxhbnRzPXtwbGFudHN9IHVwZGF0ZVBsYW50V2F0ZXJpbmdEYXRlPXt1cGRhdGVQbGFudFdhdGVyaW5nRGF0ZX0gdXBkYXRlUGxhbnQ9e3VwZGF0ZVBsYW50fSBkZWxldGVQbGFudD17ZGVsZXRlUGxhbnR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJQbGFudExpc3QiLCJBZGRQbGFudEZvcm0iLCJBcHAiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaGFuZGxlQWRkUGxhbnQiLCJwbGFudHMiLCJzZXRQbGFudHMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX0FQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkUGxhbnQiLCJwbGFudCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByZXZQbGFudHMiLCJsb2ciLCJ1cGRhdGVQbGFudFdhdGVyaW5nRGF0ZSIsInBsYW50SWQiLCJuZXdEYXRlcyIsInVwZGF0ZWRQbGFudCIsIm1hcCIsIl9pZCIsInVwZGF0ZVBsYW50IiwibmV3RGF0YSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkZWxldGVQbGFudCIsIm1lc3NhZ2UiLCJjdXJyZW50UGxhbnRzIiwiZmlsdGVyIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});