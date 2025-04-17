"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6450],{

/***/ 63343:
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
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
exports.Z = _default;

/***/ }),

/***/ 78055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71508);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46259);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20528);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79104);
/* harmony import */ var _buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13456);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18891);
/* harmony import */ var _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42758);
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
function NoSsrConnectAlert(props){var{serviceClass,closeable}=props;var{bus}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);var{transports}=bus;var devices=(0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({serviceClass,ignoreInfrastructure:true});var spec=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);// don't show if no transport, some devices
if(!_jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__/* .UIFlags.connect */ .A.connect&&!transports.length||devices!==null&&devices!==void 0&&devices.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{displayPrint:"none"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{severity:"info",closeable:closeable},!spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect your device?"),spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect a ",spec.name," device?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{component:"span",ml:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{full:"always",transparent:true}))));}function ConnectAlert(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert,props));}

/***/ }),

/***/ 69662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTheme.js + 13 modules
var createTheme = __webpack_require__(24345);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/responsiveFontSizes.js
var responsiveFontSizes = __webpack_require__(90645);
// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx + 9 modules
var ThemedLayout = __webpack_require__(12275);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 6 modules
var Dashboard = __webpack_require__(5374);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(50553);
// EXTERNAL MODULE: ./src/components/makecode/iframebridgeclient.ts
var iframebridgeclient = __webpack_require__(19140);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./src/components/buttons/StartMissingSimulatorsButton.tsx
var StartMissingSimulatorsButton = __webpack_require__(98815);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(38041);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__(71348);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeAddBlocksButton.tsx
function MakeCodeAddBlocksButton(){var bus=(0,useBus/* default */.Z)();var iframeBridge=bus.nodeData[iframebridgeclient/* default.DATA_ID */.ZP.DATA_ID];var extensions=(0,useChange/* default */.Z)(iframeBridge,_=>_===null||_===void 0?void 0:_.candidateExtensions());var handleAdd=()=>iframeBridge===null||iframeBridge===void 0?void 0:iframeBridge.postAddExtensions();var isMakeCodeTool=(0,react.useMemo)(()=>typeof window!=="undefined"&&/makecode/.test(window.location.href),[]);var isButtonEnabled=!!(extensions!==null&&extensions!==void 0&&extensions.length);//TODO: i18n
var enabledTooltip="Add blocks for your connected and simulated devices to the modules drawer";var disabledTooltip="This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer";if(!isMakeCodeTool)return null;return/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{describeChild:true,title:isButtonEnabled?enabledTooltip:disabledTooltip,placement:"bottom"},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{sx:{mr:1},size:"small",color:"primary",variant:"contained",disabled:!isButtonEnabled,startIcon:/*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z,null),onClick:handleAdd},"Add blocks")));}
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeBlocksAndSimsBox.tsx
function MakeCodeBlocksAndSimsBox(){return/*#__PURE__*/react.createElement(Box/* default */.Z,{m:1},/*#__PURE__*/react.createElement(MakeCodeAddBlocksButton,null),/*#__PURE__*/react.createElement(StartMissingSimulatorsButton/* default */.Z,{variant:"contained"},"Add Simulators"));}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 5 modules
var servers = __webpack_require__(2283);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(10431);
;// CONCATENATED MODULE: ./src/jacdac/usePersistentSimulators.ts
var STORAGE_KEY="active_simulators";var STORAGE_EXPIRATION=3600000;function usePersistentSimulators(){var[simulators,setSimulators]=(0,useLocalStorage/* default */.Z)(STORAGE_KEY,undefined);var bus=(0,useBus/* default */.Z)();var resolveTemplates=()=>bus.serviceProviders().map(sp=>sp.template).filter(t=>!!t);var snapshot=()=>{var templates=resolveTemplates();setSimulators({update:Date.now(),templates});};(0,react.useEffect)(()=>{if(((simulators===null||simulators===void 0?void 0:simulators.update)||0)-Date.now()<STORAGE_EXPIRATION){var _simulators$templates;var serviceProviders=(0,servers/* serviceProviderDefinitions */.a3)();var templates=resolveTemplates();simulators===null||simulators===void 0?void 0:(_simulators$templates=simulators.templates)===null||_simulators$templates===void 0?void 0:_simulators$templates.forEach(template=>{var i=templates.indexOf(template);if(i>-1){templates.splice(i,1);}else{var def=serviceProviders.find(sp=>sp.name===template);if(def)(0,servers/* addServiceProvider */.Q6)(bus,def);}});}snapshot();},[]);(0,react.useEffect)(()=>bus.subscribe([constants/* DEVICE_CONNECT */.s1P,constants/* DEVICE_DISCONNECT */.O55],snapshot),[bus]);}
;// CONCATENATED MODULE: ./src/pages/tools/makecode-sim.tsx











/**
 * To debug locally:
 *
 * - launch yarn develop
 * - launch pxt serve + ?localhostmessagesims=1
 * - launch jacdac project
 */

function deviceSort(l, r) {
  var srvScore = srv => srv.packets.reduce((prev, pkt) => prev + ((0,spec/* isReading */.vz)(pkt) ? 10 : (0,spec/* isValueOrIntensity */.sX)(pkt) ? 1 : 0), 0) || 0;

  var score = srvs => srvs.reduce((prev, srv) => srvScore(srv), 0);

  var ls = score(l.services().slice(1).map(srv => srv.specification).filter(spec => !!spec));
  var rs = score(r.services().slice(1).map(srv => srv.specification).filter(spec => !!spec));
  if (ls !== rs) return -ls + rs;
  return (0,utils/* strcmp */.eT)(l.deviceId, r.deviceId);
}

function Carousel() {
  var bus = (0,useBus/* default */.Z)();
  var iframeBridge = bus.nodeData[iframebridgeclient/* default.DATA_ID */.ZP.DATA_ID];
  var deviceFilter = iframeBridge === null || iframeBridge === void 0 ? void 0 : iframeBridge.deviceFilter.bind(iframeBridge);
  var serviceFilter = iframeBridge === null || iframeBridge === void 0 ? void 0 : iframeBridge.serviceFilter.bind(iframeBridge);
  (0,react.useEffect)(() => {
    bus.streaming = true;
    bus.broadcastDisconnectRequest();
  }, []);
  usePersistentSimulators();
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MakeCodeBlocksAndSimsBox, null), /*#__PURE__*/react.createElement(Dashboard["default"], {
    showHeader: false,
    showDeviceHeader: true,
    showDeviceAvatar: true,
    deviceSort: deviceSort,
    deviceFilter: deviceFilter,
    serviceFilter: serviceFilter,
    showStartRoleSimulators: false,
    alwaysVisible: true,
    variant: "icon",
    controlled: true
  }));
}

function Page() {
  var {
    toggleDarkMode,
    darkModeMounted
  } = (0,react.useContext)(DarkModeContext/* default */.ZP);
  var rawTheme = (0,createTheme/* default */.Z)({
    palette: {
      primary: {
        main: "#85e"
      },
      secondary: {
        main: "#ffc400"
      },
      background: {
        default: "#fff"
      },
      mode: "light",
      contrastThreshold: 3.1
    }
  });
  var theme = (0,responsiveFontSizes/* default */.Z)(rawTheme);
  (0,react.useEffect)(() => {
    if (darkModeMounted) toggleDarkMode("light");
  }, [darkModeMounted]);
  return /*#__PURE__*/react.createElement(ThemedLayout/* default */.Z, {
    theme: theme
  }, /*#__PURE__*/react.createElement("style", null, "\nhtml {\n    margin-right: 4px;\n}\nhtml, body {\n    background: transparent !important;\n    overflow: hidden !important;\n}\n"), /*#__PURE__*/react.createElement(Carousel, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-sim-tsx-743d27950c47d42d5483.js.map