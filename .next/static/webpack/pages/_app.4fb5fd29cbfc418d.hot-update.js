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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./public/styles/global.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./public/styles/global.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\r\\n    height: 100%;    /* This sets the height of the html and body to be 100% of the viewport height */\\r\\n    min-height: 100%; /* Ensures that the minimum height is also 100% of the viewport height */\\r\\n    margin: 0;        /* Removes default margin provided by browsers */\\r\\n    padding: 0;       /* Removes default padding provided by browsers */\\r\\n}\\r\\n\\r\\nbody {\\r\\n    display: flex;       /* Enables the use of Flexbox which helps in stretching the container */\\r\\n    flex-direction: column; /* Stacks child elements vertically */\\r\\n}\\r\\n\\r\\n.header{\\r\\n    display: flex;\\r\\n    background-color: white;\\r\\n    padding-top: 2rem;\\r\\n\\r\\n    padding-bottom: 2rem;\\r\\n    margin-bottom: 1rem;\\r\\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.Title{\\r\\n    margin: auto;\\r\\n    margin-top: 0.5rem;\\r\\n    margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* Additional container to ensure content also takes full height */\\r\\n#__next {\\r\\n    flex: 1 1;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n#content{\\r\\n    flex:1 1;\\r\\n    background-color: rgb(236 236 236);\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    background-color: #11E496; /* Approximation of Tailwind's green-500 */\\r\\n    color: white;\\r\\n    padding: 6px 12px; /* Tailwind's p-2, assuming the base is 4px */\\r\\n    margin-top: 8px; /* Tailwind's mt-2, assuming the base is 4px */\\r\\n    margin-right: 8px;\\r\\n    border-radius: 4px;\\r\\n    border-width: 0px;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n.addPlantButton{\\r\\n    margin:auto;\\r\\n    margin-top: 2rem;\\r\\n    margin-bottom: 1rem;\\r\\n    padding: 8px 16px;\\r\\n    font-size: large;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.form, .form-input-parent {\\r\\n    padding: 4px;\\r\\n    margin: 2px;   \\r\\n}\\r\\n\\r\\n.form-input{\\r\\n    border-style: solid;\\r\\n    border-radius: 0.2rem;\\r\\n    border-width: 1px;\\r\\n    border-color: gray;\\r\\n    padding: 4px 8px;\\r\\n    margin: 2px;\\r\\n    width:12rem\\r\\n}\\r\\n\\r\\n.modal-overlay {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    background-color: #b6b6b6e0;\\r\\n    z-index: 1000;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n    min-height: 15rem;\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.modalHeading{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.modalHeading.h3{\\r\\n    margin: auto\\r\\n}\\r\\n\\r\\n.plantList{\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    grid-column-gap: 50px;\\r\\n    column-gap: 50px;\\r\\n    margin: 10px\\r\\n\\r\\n}\\r\\n\\r\\n.plant-item{\\r\\n    padding: 0.5rem 2rem;\\r\\n    margin:  20px auto;\\r\\n    border-radius: 0.5rem;\\r\\n    /* border-color: black;\\r\\n    border-width: 2px;\\r\\n    border-style: outset; */\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 100px;\\r\\n    width: max-content;\\r\\n    min-width: 40rem;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n    background-color: rgb(249, 252, 255);\\r\\n\\r\\n}\\r\\n\\r\\n.plantItemHeading{\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\n.plantItemSubheading{\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.editButton, .closeButton{\\r\\n    background-color: #888a88;\\r\\n}\\r\\n\\r\\n.deletePlantButton{\\r\\n    background-color: rgb(219, 87, 87);\\r\\n}\\r\\n\\r\\n.plantImage{\\r\\n    width:5rem;\\r\\n    height:5rem;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://public/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,YAAY,KAAK,gFAAgF;IACjG,gBAAgB,EAAE,wEAAwE;IAC1F,SAAS,SAAS,gDAAgD;IAClE,UAAU,QAAQ,iDAAiD;AACvE;;AAEA;IACI,aAAa,QAAQ,uEAAuE;IAC5F,sBAAsB,EAAE,qCAAqC;AACjE;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;;IAEjB,oBAAoB;IACpB,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;AACzB;;;;AAIA,kEAAkE;AAClE;IACI,SAAO;IACP,aAAa;AACjB;;AAEA;IACI,QAAM;IACN,kCAAkC;IAClC,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB,EAAE,0CAA0C;IACrE,YAAY;IACZ,iBAAiB,EAAE,6CAA6C;IAChE,eAAe,EAAE,8CAA8C;IAC/D,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,wCAAwC;;;AAG5C;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX;AACJ;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAgB;IAAhB,gBAAgB;IAChB;;AAEJ;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;IACrB;;2BAEuB;IACvB,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,wCAAwC;IACxC,oCAAoC;;AAExC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,UAAU;IACV,WAAW;AACf\",\"sourcesContent\":[\"html, body {\\r\\n    height: 100%;    /* This sets the height of the html and body to be 100% of the viewport height */\\r\\n    min-height: 100%; /* Ensures that the minimum height is also 100% of the viewport height */\\r\\n    margin: 0;        /* Removes default margin provided by browsers */\\r\\n    padding: 0;       /* Removes default padding provided by browsers */\\r\\n}\\r\\n\\r\\nbody {\\r\\n    display: flex;       /* Enables the use of Flexbox which helps in stretching the container */\\r\\n    flex-direction: column; /* Stacks child elements vertically */\\r\\n}\\r\\n\\r\\n.header{\\r\\n    display: flex;\\r\\n    background-color: white;\\r\\n    padding-top: 2rem;\\r\\n\\r\\n    padding-bottom: 2rem;\\r\\n    margin-bottom: 1rem;\\r\\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.Title{\\r\\n    margin: auto;\\r\\n    margin-top: 0.5rem;\\r\\n    margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* Additional container to ensure content also takes full height */\\r\\n#__next {\\r\\n    flex: 1;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n#content{\\r\\n    flex:1;\\r\\n    background-color: rgb(236 236 236);\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    background-color: #11E496; /* Approximation of Tailwind's green-500 */\\r\\n    color: white;\\r\\n    padding: 6px 12px; /* Tailwind's p-2, assuming the base is 4px */\\r\\n    margin-top: 8px; /* Tailwind's mt-2, assuming the base is 4px */\\r\\n    margin-right: 8px;\\r\\n    border-radius: 4px;\\r\\n    border-width: 0px;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n.addPlantButton{\\r\\n    margin:auto;\\r\\n    margin-top: 2rem;\\r\\n    margin-bottom: 1rem;\\r\\n    padding: 8px 16px;\\r\\n    font-size: large;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.form, .form-input-parent {\\r\\n    padding: 4px;\\r\\n    margin: 2px;   \\r\\n}\\r\\n\\r\\n.form-input{\\r\\n    border-style: solid;\\r\\n    border-radius: 0.2rem;\\r\\n    border-width: 1px;\\r\\n    border-color: gray;\\r\\n    padding: 4px 8px;\\r\\n    margin: 2px;\\r\\n    width:12rem\\r\\n}\\r\\n\\r\\n.modal-overlay {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    background-color: #b6b6b6e0;\\r\\n    z-index: 1000;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n    background-color: white;\\r\\n    padding: 20px;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n    min-height: 15rem;\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.modalHeading{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.modalHeading.h3{\\r\\n    margin: auto\\r\\n}\\r\\n\\r\\n.plantList{\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    column-gap: 50px;\\r\\n    margin: 10px\\r\\n\\r\\n}\\r\\n\\r\\n.plant-item{\\r\\n    padding: 0.5rem 2rem;\\r\\n    margin:  20px auto;\\r\\n    border-radius: 0.5rem;\\r\\n    /* border-color: black;\\r\\n    border-width: 2px;\\r\\n    border-style: outset; */\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 100px;\\r\\n    width: max-content;\\r\\n    min-width: 40rem;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n    background-color: rgb(249, 252, 255);\\r\\n\\r\\n}\\r\\n\\r\\n.plantItemHeading{\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\n.plantItemSubheading{\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.editButton, .closeButton{\\r\\n    background-color: #888a88;\\r\\n}\\r\\n\\r\\n.deletePlantButton{\\r\\n    background-color: rgb(219, 87, 87);\\r\\n}\\r\\n\\r\\n.plantImage{\\r\\n    width:5rem;\\r\\n    height:5rem;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9wdWJsaWMvc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHNEQUFzRCx5QkFBeUIsMkdBQTJHLG1HQUFtRywyRUFBMkUsdURBQXVELGNBQWMsNkJBQTZCLHdHQUF3RywyQ0FBMkMsZ0JBQWdCLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLGlDQUFpQyw0QkFBNEIsaURBQWlELEtBQUssZUFBZSxxQkFBcUIsMkJBQTJCLDhCQUE4QixLQUFLLGdHQUFnRyxrQkFBa0Isc0JBQXNCLEtBQUssaUJBQWlCLGlCQUFpQiwyQ0FBMkMscUJBQXFCLCtCQUErQixLQUFLLGlCQUFpQixtQ0FBbUMsZ0VBQWdFLDJCQUEyQix1RUFBdUUseUVBQXlFLDJCQUEyQiwwQkFBMEIsaURBQWlELGlCQUFpQix3QkFBd0Isb0JBQW9CLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLHlCQUF5QiwwQkFBMEIsS0FBSyxtQ0FBbUMscUJBQXFCLHVCQUF1QixLQUFLLG9CQUFvQiw0QkFBNEIsOEJBQThCLDBCQUEwQiwyQkFBMkIseUJBQXlCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHdCQUF3QixlQUFlLGdCQUFnQixxQkFBcUIsc0JBQXNCLG9DQUFvQyxzQkFBc0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSyx3QkFBd0IsZ0NBQWdDLHNCQUFzQiw0QkFBNEIsaURBQWlELDBCQUEwQiw0QkFBNEIsc0JBQXNCLCtCQUErQixLQUFL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QixvQkFBb0IsS0FBSyxtQkFBbUI7QUFDMStRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0eWxlcy9nbG9iYWwuY3NzP2Y1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIC8qIFRoaXMgc2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBodG1sIGFuZCBib2R5IHRvIGJlIDEwMCUgb2YgdGhlIHZpZXdwb3J0IGhlaWdodCAqL1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlOyAvKiBFbnN1cmVzIHRoYXQgdGhlIG1pbmltdW0gaGVpZ2h0IGlzIGFsc28gMTAwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXFxyXFxuICAgIG1hcmdpbjogMDsgICAgICAgIC8qIFJlbW92ZXMgZGVmYXVsdCBtYXJnaW4gcHJvdmlkZWQgYnkgYnJvd3NlcnMgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgICAgICAgLyogUmVtb3ZlcyBkZWZhdWx0IHBhZGRpbmcgcHJvdmlkZWQgYnkgYnJvd3NlcnMgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgIC8qIEVuYWJsZXMgdGhlIHVzZSBvZiBGbGV4Ym94IHdoaWNoIGhlbHBzIGluIHN0cmV0Y2hpbmcgdGhlIGNvbnRhaW5lciAqL1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFja3MgY2hpbGQgZWxlbWVudHMgdmVydGljYWxseSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uVGl0bGV7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIEFkZGl0aW9uYWwgY29udGFpbmVyIHRvIGVuc3VyZSBjb250ZW50IGFsc28gdGFrZXMgZnVsbCBoZWlnaHQgKi9cXHJcXG4jX19uZXh0IHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgZmxleDoxIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMUU0OTY7IC8qIEFwcHJveGltYXRpb24gb2YgVGFpbHdpbmQncyBncmVlbi01MDAgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiA2cHggMTJweDsgLyogVGFpbHdpbmQncyBwLTIsIGFzc3VtaW5nIHRoZSBiYXNlIGlzIDRweCAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7IC8qIFRhaWx3aW5kJ3MgbXQtMiwgYXNzdW1pbmcgdGhlIGJhc2UgaXMgNHB4ICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFBsYW50QnV0dG9ue1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSwgLmZvcm0taW5wdXQtcGFyZW50IHtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBtYXJnaW46IDJweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXR7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gICAgbWFyZ2luOiAycHg7XFxyXFxuICAgIHdpZHRoOjEycmVtXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNmUwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgbWluLWhlaWdodDogMTVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbEhlYWRpbmd7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5tb2RhbEhlYWRpbmcuaDN7XFxyXFxuICAgIG1hcmdpbjogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbnRMaXN0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHhcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBsYW50LWl0ZW17XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICBtYXJnaW46ICAyMHB4IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgLyogYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0OyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIG1pbi13aWR0aDogNDByZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI1MiwgMjU1KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBsYW50SXRlbUhlYWRpbmd7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFudEl0ZW1TdWJoZWFkaW5ne1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRCdXR0b24sIC5jbG9zZUJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4OGE4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVBsYW50QnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCA4NywgODcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbnRJbWFnZXtcXHJcXG4gICAgd2lkdGg6NXJlbTtcXHJcXG4gICAgaGVpZ2h0OjVyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wdWJsaWMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZLEtBQUssZ0ZBQWdGO0lBQ2pHLGdCQUFnQixFQUFFLHdFQUF3RTtJQUMxRixTQUFTLFNBQVMsZ0RBQWdEO0lBQ2xFLFVBQVUsUUFBUSxpREFBaUQ7QUFDdkU7O0FBRUE7SUFDSSxhQUFhLFFBQVEsdUVBQXVFO0lBQzVGLHNCQUFzQixFQUFFLHFDQUFxQztBQUNqRTs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCOztJQUVqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOzs7O0FBSUEsa0VBQWtFO0FBQ2xFO0lBQ0ksU0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxRQUFNO0lBQ04sa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSwwQ0FBMEM7SUFDckUsWUFBWTtJQUNaLGlCQUFpQixFQUFFLDZDQUE2QztJQUNoRSxlQUFlLEVBQUUsOENBQThDO0lBQy9ELGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdDQUF3Qzs7O0FBRzVDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCOztBQUVKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckI7OzJCQUV1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAvKiBUaGlzIHNldHMgdGhlIGhlaWdodCBvZiB0aGUgaHRtbCBhbmQgYm9keSB0byBiZSAxMDAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTsgLyogRW5zdXJlcyB0aGF0IHRoZSBtaW5pbXVtIGhlaWdodCBpcyBhbHNvIDEwMCUgb2YgdGhlIHZpZXdwb3J0IGhlaWdodCAqL1xcclxcbiAgICBtYXJnaW46IDA7ICAgICAgICAvKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2luIHByb3ZpZGVkIGJ5IGJyb3dzZXJzICovXFxyXFxuICAgIHBhZGRpbmc6IDA7ICAgICAgIC8qIFJlbW92ZXMgZGVmYXVsdCBwYWRkaW5nIHByb3ZpZGVkIGJ5IGJyb3dzZXJzICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAvKiBFbmFibGVzIHRoZSB1c2Ugb2YgRmxleGJveCB3aGljaCBoZWxwcyBpbiBzdHJldGNoaW5nIHRoZSBjb250YWluZXIgKi9cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2tzIGNoaWxkIGVsZW1lbnRzIHZlcnRpY2FsbHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLlRpdGxle1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBBZGRpdGlvbmFsIGNvbnRhaW5lciB0byBlbnN1cmUgY29udGVudCBhbHNvIHRha2VzIGZ1bGwgaGVpZ2h0ICovXFxyXFxuI19fbmV4dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBmbGV4OjE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMUU0OTY7IC8qIEFwcHJveGltYXRpb24gb2YgVGFpbHdpbmQncyBncmVlbi01MDAgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiA2cHggMTJweDsgLyogVGFpbHdpbmQncyBwLTIsIGFzc3VtaW5nIHRoZSBiYXNlIGlzIDRweCAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7IC8qIFRhaWx3aW5kJ3MgbXQtMiwgYXNzdW1pbmcgdGhlIGJhc2UgaXMgNHB4ICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFBsYW50QnV0dG9ue1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSwgLmZvcm0taW5wdXQtcGFyZW50IHtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBtYXJnaW46IDJweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXR7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gICAgbWFyZ2luOiAycHg7XFxyXFxuICAgIHdpZHRoOjEycmVtXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNmUwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgbWluLWhlaWdodDogMTVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbEhlYWRpbmd7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5tb2RhbEhlYWRpbmcuaDN7XFxyXFxuICAgIG1hcmdpbjogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbnRMaXN0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wbGFudC1pdGVte1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAgMjBweCBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIC8qIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNTIsIDI1NSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wbGFudEl0ZW1IZWFkaW5ne1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbnRJdGVtU3ViaGVhZGluZ3tcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0QnV0dG9uLCAuY2xvc2VCdXR0b257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODhhODg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVQbGFudEJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgODcsIDg3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW50SW1hZ2V7XFxyXFxuICAgIHdpZHRoOjVyZW07XFxyXFxuICAgIGhlaWdodDo1cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./public/styles/global.css\n"));

/***/ })

});