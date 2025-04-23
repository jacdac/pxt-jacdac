"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1327],{

/***/ 27036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');
exports.Z = _default;

/***/ }),

/***/ 21327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18515);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23981);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49161);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27036);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46259);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16821);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79104);
/* harmony import */ var _devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77682);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68320);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports
function RandomGenerator(props){var{device,firmware}=props;var{0:hex,1:setHex}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);var fieldId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var deviceCatalog=(0,_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();var compute=()=>device?deviceCatalog.uniqueDeviceId():firmware?deviceCatalog.uniqueFirmwareId(!hex):deviceCatalog.uniqueServiceId();var{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(compute());var{0:copySuccess,1:setCopySuccess}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var handleRegenerate=()=>{var v=compute();setValue(v);setCopySuccess(false);};var handleCopy=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){try{yield navigator.clipboard.writeText(value);setCopySuccess(true);}catch(err){setCopySuccess(false);}});return function handleCopy(){return _ref.apply(this,arguments);};}();var handleHex=(ev,checked)=>{setHex(checked);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(handleRegenerate,[hex]);var title=device?"Random Device Identifier":firmware?"Random Product Identifier":"Random Service Identifier";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null,value!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{variant:"h5",component:"h2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{id:fieldId,value:value,readOnly:true,inputProps:{"aria-label":"generated identifier"}}),copySuccess&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null)),value===undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"error"},"Oops, unable to generate a strong random number.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null,firmware&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:"hex",checked:hex,onChange:handleHex}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{"aria-label":"copy random number to clipboard",size:"small",variant:"contained",onClick:handleCopy},"Copy"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{"aria-label":"regenerate random number",size:"small",variant:"contained",color:"primary",onClick:handleRegenerate},"Regenerate"))));}

/***/ })

}]);
//# sourceMappingURL=1327-ad1c7231bad5723a0fb1.js.map