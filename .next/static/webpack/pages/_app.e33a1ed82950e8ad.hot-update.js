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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_PlantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PlantList */ \"./components/PlantList.js\");\n/* harmony import */ var _components_AddPlantForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddPlantForm */ \"./components/AddPlantForm.js\");\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/global.css */ \"./public/styles/global.css\");\n/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);\n// In App.js, assuming you have an API setup\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App() {\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAddPlant = ()=>{\n        setIsModalOpen(true);\n    };\n    const [plants, setPlants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants\")).then((response)=>response.json()).then((data)=>setPlants(data)).catch((error)=>console.error(\"Error fetching plants:\", error));\n    }, []);\n    const addPlant = (plant)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(plant) // Convert the JavaScript object to a JSON string\n        }).then((response)=>response.json()) // Convert the response to JSON\n        .then((data)=>{\n            setPlants((prevPlants)=>[\n                    ...prevPlants,\n                    data\n                ]); // Update the state with the new plant\n            console.log(\"Plant added:\", data);\n        }).catch((error)=>{\n            console.error(\"Error adding plant:\", error);\n        });\n    };\n    const updatePlantWateringDate = (plantId, newDates)=>{\n        console.log(plantId, newDates);\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId, \"/water\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newDates)\n        }).then((response)=>response.json()).then((updatedPlant)=>{\n            setPlants((plants)=>plants.map((plant)=>plant._id === plantId ? updatedPlant : plant));\n        }).catch((error)=>console.error(\"Failed to update plant:\", error));\n    };\n    const updatePlant = (plantId, newData)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId, \"/edit\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newData)\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"HTTP error! status: \".concat(response.status));\n            }\n            return response.json();\n        }).then((updatedPlant)=>{\n            setPlants((plants)=>plants.map((plant)=>plant._id === plantId ? updatedPlant : plant));\n        }).catch((error)=>{\n            console.error(\"Failed to update plant:\", error);\n        // Optionally handle user notification here\n        });\n    };\n    const deletePlant = (plantId)=>{\n        fetch(\"\".concat(\"http://localhost:3001\", \"/api/plants/\").concat(plantId), {\n            method: \"DELETE\"\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Failed to delete the plant\");\n            }\n            return response.json();\n        }).then((data)=>{\n            console.log(data.message);\n            // Optionally update the state to remove the plant from the list\n            setPlants((currentPlants)=>currentPlants.filter((plant)=>plant._id !== plantId));\n        }).catch((error)=>{\n            console.error(\"Error deleting plant:\", error);\n        });\n    };\n    function handleOutsideClick(e) {\n        if (e.target.className === \"modal-overlay\") {\n            setIsModalOpen(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button\",\n                onClick: handleAddPlant,\n                children: \"Add Plant\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modal-overlay\",\n                onClick: handleOutsideClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-content\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddPlantForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            addPlant: addPlant,\n                            onClose: ()=>setIsModalOpen(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                    lineNumber: 112,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 111,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                plants: plants,\n                updatePlantWateringDate: updatePlantWateringDate,\n                updatePlant: updatePlant,\n                deletePlant: deletePlant\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\james\\\\OneDrive\\\\Personal\\\\Website Repository\\\\plant-watering-app\\\\pages\\\\_app.js\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"cC7dSTMddoJN01vFnRsTSIrhbpU=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0F2SFNyQztLQUFBQTtBQXlIVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW4gQXBwLmpzLCBhc3N1bWluZyB5b3UgaGF2ZSBhbiBBUEkgc2V0dXBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgUGxhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUGxhbnRMaXN0JztcclxuaW1wb3J0IEFkZFBsYW50Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0FkZFBsYW50Rm9ybSc7XHJcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy9nbG9iYWwuY3NzJ1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVBZGRQbGFudCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3BsYW50cywgc2V0UGxhbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfQVBJX1VSTH0vYXBpL3BsYW50c2ApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRQbGFudHMoZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwbGFudHM6JywgZXJyb3IpKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgYWRkUGxhbnQgPSBwbGFudCA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9BUElfVVJMfS9hcGkvcGxhbnRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gU3BlY2lmeSB0aGUgbWV0aG9kIHRvIFBPU1RcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgLy8gU2V0IHRoZSBoZWFkZXJzIHRvIGluZm9ybSB0aGUgc2VydmVyIGFib3V0IHRoZSBkYXRhIHR5cGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxhbnQpIC8vIENvbnZlcnQgdGhlIEphdmFTY3JpcHQgb2JqZWN0IHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gQ29udmVydCB0aGUgcmVzcG9uc2UgdG8gSlNPTlxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRQbGFudHMocHJldlBsYW50cyA9PiBbLi4ucHJldlBsYW50cywgZGF0YV0pOyAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBwbGFudFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxhbnQgYWRkZWQ6JywgZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcGxhbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG5jb25zdCB1cGRhdGVQbGFudFdhdGVyaW5nRGF0ZSA9IChwbGFudElkLCBuZXdEYXRlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocGxhbnRJZCwgbmV3RGF0ZXMpXHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX0FQSV9VUkx9L2FwaS9wbGFudHMvJHtwbGFudElkfS93YXRlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGVzKVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKHVwZGF0ZWRQbGFudCA9PiB7XHJcbiAgICAgICAgc2V0UGxhbnRzKHBsYW50cyA9PiBwbGFudHMubWFwKHBsYW50ID0+IHBsYW50Ll9pZCA9PT0gcGxhbnRJZCA/IHVwZGF0ZWRQbGFudCA6IHBsYW50KSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcGxhbnQ6JywgZXJyb3IpKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVBsYW50ID0gKHBsYW50SWQsIG5ld0RhdGEpID0+IHtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfQVBJX1VSTH0vYXBpL3BsYW50cy8ke3BsYW50SWR9L2VkaXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdEYXRhKVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbih1cGRhdGVkUGxhbnQgPT4ge1xyXG4gICAgICAgIHNldFBsYW50cyhwbGFudHMgPT4gcGxhbnRzLm1hcChwbGFudCA9PiBwbGFudC5faWQgPT09IHBsYW50SWQgPyB1cGRhdGVkUGxhbnQgOiBwbGFudCkpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwbGFudDonLCBlcnJvcik7XHJcbiAgICAgICAgLy8gT3B0aW9uYWxseSBoYW5kbGUgdXNlciBub3RpZmljYXRpb24gaGVyZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVQbGFudCA9IChwbGFudElkKSA9PiB7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX0FQSV9VUkx9L2FwaS9wbGFudHMvJHtwbGFudElkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHRoZSBwbGFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gT3B0aW9uYWxseSB1cGRhdGUgdGhlIHN0YXRlIHRvIHJlbW92ZSB0aGUgcGxhbnQgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgIHNldFBsYW50cyhjdXJyZW50UGxhbnRzID0+IGN1cnJlbnRQbGFudHMuZmlsdGVyKHBsYW50ID0+IHBsYW50Ll9pZCAhPT0gcGxhbnRJZCkpO1xyXG5cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHBsYW50OicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJtb2RhbC1vdmVybGF5XCIpIHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSlcclxuICAgIH1cclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD0nY29udGVudCc+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUFkZFBsYW50fT5BZGQgUGxhbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAge2lzTW9kYWxPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgb25DbGljaz17aGFuZGxlT3V0c2lkZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICAgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICA8QWRkUGxhbnRGb3JtIGFkZFBsYW50PXthZGRQbGFudH0gb25DbG9zZT17KCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpfVxyXG4vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFBsYW50TGlzdCBwbGFudHM9e3BsYW50c30gdXBkYXRlUGxhbnRXYXRlcmluZ0RhdGU9e3VwZGF0ZVBsYW50V2F0ZXJpbmdEYXRlfSB1cGRhdGVQbGFudD17dXBkYXRlUGxhbnR9IGRlbGV0ZVBsYW50PXtkZWxldGVQbGFudH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIlBsYW50TGlzdCIsIkFkZFBsYW50Rm9ybSIsIkFwcCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJoYW5kbGVBZGRQbGFudCIsInBsYW50cyIsInNldFBsYW50cyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VfQVBJX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJhZGRQbGFudCIsInBsYW50IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJldlBsYW50cyIsImxvZyIsInVwZGF0ZVBsYW50V2F0ZXJpbmdEYXRlIiwicGxhbnRJZCIsIm5ld0RhdGVzIiwidXBkYXRlZFBsYW50IiwibWFwIiwiX2lkIiwidXBkYXRlUGxhbnQiLCJuZXdEYXRhIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRlbGV0ZVBsYW50IiwibWVzc2FnZSIsImN1cnJlbnRQbGFudHMiLCJmaWx0ZXIiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});