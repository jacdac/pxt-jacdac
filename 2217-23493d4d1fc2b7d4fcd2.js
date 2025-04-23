"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2217],{

/***/ 82217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeProjectFooter; }
/* harmony export */ });
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13120);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5754);
function MakeCodeProjectFooter(props){var{serviceNames=""}=props;var names=serviceNames.split(/\s*,\s*/gi);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{header:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",{id:"extensions"},"Extensions"),nodes:names.map(serviceName=>(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB)(serviceName)).map(spec=>({slug:"/clients/makecode/extensions/"+spec.shortId+"/",title:spec.name,description:spec.notes["short"],services:spec.shortId}))})," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",{id:"devices"},"Devices"),names.length>1?names.map(name=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__["default"],{key:name,header:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",null,(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB)(name).name),serviceName:name,buyNow:true})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__["default"],{key:names[0],serviceName:names[0],buyNow:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",null,"See Also"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Link */ .rU,{to:"/clients/makecode/user-guide/"},"User guide"))));}

/***/ })

}]);
//# sourceMappingURL=2217-23493d4d1fc2b7d4fcd2.js.map