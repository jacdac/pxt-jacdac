"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1366],{

/***/ 51366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardGPIO; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22878);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3694);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46926);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9573);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60763);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71670);
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80662);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21149);
/* harmony import */ var _jacdac_useServiceSpecification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75706);
function PinItem(props){var{service,pin,state}=props;var{0:changeId,1:setChangeId}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var{0:info,1:setInfo}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{label="",mode,capabilities,hwPin}=info||{};var spec=(0,_jacdac_useServiceSpecification__WEBPACK_IMPORTED_MODULE_8__/* .useServiceSpecificationFromServiceClass */ .V)(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.SRV_GPIO);var modeSpec=spec.enums["Mode"];var capSpec=spec.enums["Capabilities"];(0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function*(){var pkt=_jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__/* .Packet.from */ .W.from(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmd.PinInfo */ .Gpo.PinInfo,(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmdPack.PinInfo */ .hSp.PinInfo,[pin]));var resp=yield service.sendCmdAwaitResponseAsync(pkt);var[,hwPin,capabilities,mode,label]=resp.jdunpack(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmdPack.PinInfoReport */ .hSp.PinInfoReport);setInfo({hwPin,capabilities,mode,label});}),[service,changeId]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>service===null||service===void 0?void 0:service.subscribe(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.COMMAND_RECEIVE,pkt=>{var cmd=pkt.serviceCommand;if(cmd===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmd.Configure */ .Gpo.Configure){setChangeId(id=>id+1);}}),[service]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{title:"pin "+(label||pin+"")+", hardware id "+hwPin},label||pin+""," ","(#"+hwPin+")"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,state!==undefined?state:""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,mode!==undefined?(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.prettyEnum)(modeSpec,mode).toLowerCase():""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,capabilities!==undefined?(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.prettyEnum)(capSpec,capabilities).toLowerCase():""));}function DashboardGPIO(props){var{service,visible}=props;var stateRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOReg.State */ .Znm.State);var[state]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(stateRegister,props);if(state===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{register:stateRegister});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{size:"small"},Array(state.length).fill(0).map((v,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PinItem,{service:service,pin:i,key:i,state:state[i],visible:visible})));}

/***/ })

}]);
//# sourceMappingURL=1366-08649872a1393128cd51.js.map