"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6775],{

/***/ 56775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardDeviceScriptManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70655);
/* harmony import */ var _mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25195);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10662);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36807);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68320);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9680);
var _excluded=["service","expanded"];// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function DashboardDeviceScriptManager(props){var{service,expanded}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props,_excluded);var runningRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .DeviceScriptManagerReg.Running */ .nhI.Running);var autoStartRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .DeviceScriptManagerReg.Autostart */ .nhI.Autostart);var statusCodeRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SystemReg.StatusCode */ .ZJq.StatusCode);var running=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(runningRegister,rest);var autoStart=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(autoStartRegister,rest);var[statusCode]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(statusCodeRegister,rest);var disabled=statusCode===undefined||statusCode===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .SystemStatusCodes.WaitingForInput */ ._kj.WaitingForInput;var handleRun=()=>runningRegister===null||runningRegister===void 0?void 0:runningRegister.sendSetBoolAsync(true,true);var handleStop=()=>runningRegister===null||runningRegister===void 0?void 0:runningRegister.sendSetBoolAsync(false,true);var handleAutoStartChange=(event,checked)=>autoStartRegister===null||autoStartRegister===void 0?void 0:autoStartRegister.sendSetBoolAsync(checked,true);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{disabled:disabled,variant:"outlined",title:running?"running":"stopped",onClick:running?handleStop:handleRun,icon:running?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null)},running?"stop":"start")),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{label:"auto start",checked:autoStart||false,disabled:autoStart===undefined,onChange:handleAutoStartChange})));}

/***/ })

}]);
//# sourceMappingURL=6775-a043be370d689ef7952f.js.map