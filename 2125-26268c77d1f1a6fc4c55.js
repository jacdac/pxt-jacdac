"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2125,9858],{

/***/ 39858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(95318);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
}), 'PowerSettingsNew');
exports["default"] = _default;

/***/ }),

/***/ 26307:
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
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');
exports.Z = _default;

/***/ }),

/***/ 22125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBitRadio; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71670);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94659);
/* harmony import */ var _mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39858);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47644);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22878);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10662);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93900);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26307);
var HORIZON=10;function RadioGroupSettings(props){var{service,visible}=props;var register=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioReg.Group */ .qdU.Group);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{register:register,visible:visible}));}function RadioTransmisionPowerSettings(props){var{service,visible}=props;var register=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioReg.TransmissionPower */ .qdU.TransmissionPower);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{register:register,visible:visible,showRegisterName:true}));}function RadioMessageEditorItem(props){var{service}=props;var id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var valueId="value"+id;var{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var enabledRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioReg.Enabled */ .qdU.Enabled);var enabled=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(enabledRegister,props);var handleValueChange=ev=>setValue(ev.target.value.trim());var handleSend=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(){var _parseInt;var n=(_parseInt=parseInt(value))!==null&&_parseInt!==void 0?_parseInt:parseFloat(value);if(!isNaN(n))yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.SendNumber */ .GZs.SendNumber,[n],true);else yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.SendString */ .GZs.SendString,[value],true);});return function handleSend(){return _ref.apply(this,arguments);};}();var handleEnabled=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(){return yield enabledRegister.sendSetBoolAsync(!enabled,true);});return function handleEnabled(){return _ref2.apply(this,arguments);};}();if(enabled===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{register:enabledRegister});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{container:true,direction:"row",spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{title:enabled?"disable radio":"enable radio",onClick:handleEnabled,color:enabled?"primary":undefined,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__["default"],null)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",type:"number",id:valueId,label:"Message",helperText:"Number will be encoded as a number message.",value:value,onChange:handleValueChange})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{title:"send message",disabled:!enabled,onClick:handleSend},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null))));}function DashboardBitRadio(props){var{service,expanded}=props;var{0:lastEvents,1:setLastEvents}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);var appendMessage=data=>{if(!data)return;var[time,deviceSerial,rssi,...payload]=data;setLastEvents(lastEvents=>{var evs=lastEvents.slice(0);var msg={time,deviceSerial,rssi,payload};evs.push(msg);while(evs.length>HORIZON){evs.shift();}return lastEvents;});};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>service.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_RECEIVE */ .Gb8,pkt=>{var values;var{data,serviceCommand}=pkt;switch(serviceCommand){case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.NumberReceived */ .GZs.NumberReceived:values=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data,"u32 u32 i8 x[3] f64 s");break;case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.StringReceived */ .GZs.StringReceived:values=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data,"u32 u32 i8 x[1] s");break;case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.BufferReceived */ .GZs.BufferReceived:values=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data,"u32 u32 i8 x[1] b");break;}if(values)appendMessage(values.filter(v=>v!==undefined&&v!==""));}),[service,lastEvents]);var text=lastEvents.map(ev=>{var _ev$payload;return(_ev$payload=ev.payload)===null||_ev$payload===void 0?void 0:_ev$payload.filter(v=>v!==undefined&&v!=="").join(",");}).filter(el=>!!el).join("\n");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,text||"no radio messages")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioMessageEditorItem,props)),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioGroupSettings,{service:service,visible:expanded}),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RadioTransmisionPowerSettings,{service:service,visible:expanded}));}

/***/ })

}]);
//# sourceMappingURL=2125-26268c77d1f1a6fc4c55.js.map