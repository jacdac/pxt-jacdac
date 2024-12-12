"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9085],{

/***/ 69085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JacdaptorImageList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77682);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _devices_DeviceImageList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25579);
function JacdaptorImageList(props){var{cols}=props;var catalog=(0,_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();var ids=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(catalog,_=>_===null||_===void 0?void 0:_.specifications().filter(spec=>{var _spec$tags;return(_spec$tags=spec.tags)===null||_spec$tags===void 0?void 0:_spec$tags.includes("adapter");}).map(spec=>spec.id));return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_devices_DeviceImageList__WEBPACK_IMPORTED_MODULE_3__["default"],{cols:cols,ids:ids});}

/***/ })

}]);
//# sourceMappingURL=9085-f93e9e5bedc8ce5b213e.js.map