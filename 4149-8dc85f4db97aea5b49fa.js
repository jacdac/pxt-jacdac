"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4149],{

/***/ 64149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ConnectTransportDialog; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(77750);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/components/buttons/ConnectButton.tsx
var ConnectButton = __webpack_require__(99636);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(56225);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(64720);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(93155);
// EXTERNAL MODULE: ./src/components/hooks/useDeveloperMode.ts
var useDeveloperMode = __webpack_require__(33724);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
;// CONCATENATED MODULE: ./src/components/alert/DeveloperModeAlert.tsx
function DeveloperModeAlert(){var{developerMode,setDeveloperMode}=(0,useDeveloperMode/* default */.Z)();var handleToggle=()=>setDeveloperMode(!developerMode);return!!developerMode&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"info"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"DeveloperMode"),"Allows to connect to device that are not registered in the catalog.",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{variant:"outlined",onClick:handleToggle},"Turn Off"));}
// EXTERNAL MODULE: ./src/components/devices/DeviceIcon.tsx + 4 modules
var DeviceIcon = __webpack_require__(75091);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/catalog.ts + 1 modules
var catalog = __webpack_require__(5018);
;// CONCATENATED MODULE: ./src/components/dialogs/ConnectTransportDialog.tsx
function ConnectTransport(props){var{transport,onClose}=props;var{developerMode}=(0,useDeveloperMode/* default */.Z)();var{type:transportType}=transport;var devices=(0,useDeviceSpecifications/* default */.Z)({transport:transportType,includeExperimental:developerMode,includeDeprecated:developerMode});if(!(devices!==null&&devices!==void 0&&devices.length)&&!flags/* Flags.diagnostics */.v.diagnostics)return null;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignContent:"flex-end"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,alignSelf:"center"},/*#__PURE__*/react.createElement(ConnectButton/* default */.Z,{key:transport.type,transport:transport,onClick:onClose,full:true,typeInTitle:true})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},devices.map(device=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:device.id},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:device.name,to:"/devices/"+(0,catalog/* identifierToUrlPath */.uM)(device.id)+"/",onClick:onClose},/*#__PURE__*/react.createElement(DeviceIcon/* DeviceSpecificationIcon */._,{specification:device,avatar:true}))))))));}function ConnectTransportDialog(props){var{bus}=(0,react.useContext)(Context/* default */.Z);var{transports}=bus;var{open,onClose}=props;var dialogId=(0,react.useId)();var labelId=dialogId+"-label";return/*#__PURE__*/react.createElement(Dialog/* default */.Z,{id:dialogId,"aria-labelledby":labelId,open:open,onClose:onClose,fullWidth:true},/*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z,{onClose:onClose,id:labelId},"Connect to a device"),/*#__PURE__*/react.createElement(DialogContent/* default */.Z,null,/*#__PURE__*/react.createElement(DeveloperModeAlert,null),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},transports.map(transport=>/*#__PURE__*/react.createElement(ConnectTransport,{key:transport.type,transport:transport,onClose:onClose})))));}

/***/ })

}]);
//# sourceMappingURL=4149-8dc85f4db97aea5b49fa.js.map