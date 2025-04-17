"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2209],{

/***/ 12209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardVibrationMotor; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86535);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99244);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94659);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71670);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75938);
/* harmony import */ var _ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99521);
/* harmony import */ var _jacdac_ts_src_servers_vibrationmotorserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12892);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10662);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32849);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22878);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46259);
var T_DIT=50;var T_REST=120;var patterns={".":{name:"dit",duration:1,volume:0.6},"-":{name:"dat",duration:3,volume:0.6}," ":{name:"space",duration:1,volume:0},_:{name:"low dat",duration:3,volume:0.2},"=":{name:"hight dat",duration:3,volume:1},"'":{name:"high dit",duration:1,volume:1},",":{name:"low dit",duration:1,volume:0.2}};function PatternInput(props){var{speedScale,disabled,service,maxLength}=props;var{onClickActivateAudioContext}=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP);var{0:text,1:setText}=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(".-.");var errorText=text.length>maxLength?"Pattern too long (max "+maxLength+")":undefined;var helperText=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>"Pattern of vibrations: "+Object.entries(patterns).map(_ref=>{var[key,value]=_ref;return"\""+key+"\" "+value.name;}).join(", "),[]);var handleSend=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function*(){onClickActivateAudioContext();// enable audio context within click handler
var seq=text.split("").map(c=>patterns[c]).filter(p=>!!p);if(navigator.vibrate)navigator.vibrate(seq.flatMap(p=>[p.duration,T_DIT>>3]));var pattern=seq.flatMap(p=>[[p.duration*T_DIT>>3,p.volume*speedScale],[T_REST>>3,0]]);var data=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("r: u8 u0.8",[pattern]);yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .VibrationMotorCmd.Vibrate */ .EmZ.Vibrate,data);});return function handleSend(){return _ref2.apply(this,arguments);};}();var handleChange=ev=>{var newValue=ev.target.value;setText(newValue.split("").filter(s=>!!patterns[s]).join(""));};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{title:"vibration pattern",helperText:errorText||helperText,value:text,fullWidth:true,error:!!errorText,size:"small",onChange:handleChange})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{variant:"outlined",title:"send vibration pattern",disabled:disabled,onClick:handleSend},"vibrate")));}function DashboardVibrationMotor(props){var{service}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service);var{playTone,activated}=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP);var{0:intensity,1:setIntensity}=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);var maxVibrationsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .VibrationMotorReg.MaxVibrations */ .tDt.MaxVibrations);var[maxVibrations=3]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_10__/* .useRegisterUnpackedValue */ .Pf)(maxVibrationsRegister);// listen for playTone commands from the buzzer
(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>server===null||server===void 0?void 0:server.subscribe(_jacdac_ts_src_servers_vibrationmotorserver__WEBPACK_IMPORTED_MODULE_7__/* .VibrationMotorServer.VIBRATE_PATTERN */ .Y.VIBRATE_PATTERN,_ref3=>{var{duration,speed}=_ref3;var ms=duration<<3;playTone(440,ms,speed);}),[server]);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleIntensity=(event,value)=>setIntensity(value);var percentValueFormat=newValue=>(newValue|0)+"%";// 50, 180
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PatternInput,{service:service,speedScale:intensity/100,maxLength:maxVibrations})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{label:"intensity",min:0,max:100,value:intensity,onChange:handleIntensity,valueLabelDisplay:"auto",valueLabelFormat:percentValueFormat})),!activated&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{severity:"warning"},"Press VIBRATE to enable sound playback."));}

/***/ })

}]);
//# sourceMappingURL=2209-65f720925e68da29a40d.js.map