"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1471],{

/***/ 41471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardCloudConfiguration; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(77750);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(88979);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
;// CONCATENATED MODULE: ./src/jacdac/useServiceClient.ts
function useServiceClient(service,factory,deps){if(deps===void 0){deps=[];}var{0:client,1:setClient}=(0,react.useState)(undefined);(0,react.useEffect)(()=>{var c=service&&factory(service);setClient(c);return()=>c===null||c===void 0?void 0:c.unmount();},[service].concat((0,toConsumableArray/* default */.Z)(deps)));// don't use factory in cache!
return client;}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(71670);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(52102);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/cloudconfigurationclient.ts
/**
 * A generic client for cloud configuration servers.
 */var CloudConfigurationClient=/*#__PURE__*/function(_JDServiceClient){(0,inheritsLoose/* default */.Z)(CloudConfigurationClient,_JDServiceClient);function CloudConfigurationClient(service){var _this;_this=_JDServiceClient.call(this,service)||this;(0,utils/* assert */.hu)(service.serviceClass===constants/* SRV_CLOUD_CONFIGURATION */.MW3);// tell the bus to refresh these register
_this.serverNameRegister=_this.service.register(constants/* CloudConfigurationReg.ServerName */.iMu.ServerName);_this.cloudDeviceIdRegister=_this.service.register(constants/* CloudConfigurationReg.CloudDeviceId */.iMu.CloudDeviceId);_this.cloudTypeRegister=_this.service.register(constants/* CloudConfigurationReg.CloudType */.iMu.CloudType);_this.connectionStatusRegister=_this.service.register(constants/* CloudConfigurationReg.ConnectionStatus */.iMu.ConnectionStatus);_this.mount(()=>_this.serverNameRegister.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>_this.emit(constants/* CHANGE */.Ver)));_this.mount(()=>_this.connectionStatusRegister.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>{_this.emit(constants/* CHANGE */.Ver);}));_this.mount(()=>_this.service.event(constants/* CloudConfigurationEvent.ConnectionStatusChange */.omR.ConnectionStatusChange).on(constants/* EVENT */.Ks0,()=>{_this.connectionStatusRegister.scheduleRefresh();}));return _this;}var _proto=CloudConfigurationClient.prototype;/**
     * Sends a connect command to the hub
     */_proto.connect=/*#__PURE__*/function(){var _connect=(0,asyncToGenerator/* default */.Z)(function*(){yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.Connect */.Now.Connect,undefined,true);});function connect(){return _connect.apply(this,arguments);}return connect;}()/**
     * Sends a disconnect command to the hub
     */;_proto.disconnect=/*#__PURE__*/function(){var _disconnect=(0,asyncToGenerator/* default */.Z)(function*(){yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.Disconnect */.Now.Disconnect,undefined,true);});function disconnect(){return _disconnect.apply(this,arguments);}return disconnect;}()/**
     * Sends a new connection string to the iot debice
     * @param connectionString
     */;_proto.setConnectionString=/*#__PURE__*/function(){var _setConnectionString=(0,asyncToGenerator/* default */.Z)(function*(connectionString){var data=(0,pack/* jdpack */.AV)("s",[connectionString||""]);yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.SetConnectionString */.Now.SetConnectionString,data,true);});function setConnectionString(_x){return _setConnectionString.apply(this,arguments);}return setConnectionString;}();(0,createClass/* default */.Z)(CloudConfigurationClient,[{key:"serverName",get:function get(){return this.serverNameRegister.stringValue;}},{key:"cloudDeviceId",get:function get(){return this.cloudDeviceIdRegister.stringValue;}},{key:"cloudType",get:function get(){return this.cloudTypeRegister.stringValue;}},{key:"connectionStatus",get:function get(){var _reg$unpackedValue;var reg=this.connectionStatusRegister;var status=(_reg$unpackedValue=reg.unpackedValue)===null||_reg$unpackedValue===void 0?void 0:_reg$unpackedValue[0];if(status===undefined)reg.scheduleRefresh();return status;}}]);return CloudConfigurationClient;}(serviceclient/* JDServiceClient */.P);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(36807);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Settings.js
var Settings = __webpack_require__(94229);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(10662);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/hooks/useEvent.ts
var useEvent = __webpack_require__(34452);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(67768);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(64720);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardCloudConfiguration.tsx
function ConnectionStringDialog(props){var{client,open,setOpen}=props;var{0:value,1:setValue}=(0,react.useState)("");var connectionStringId=(0,react.useId)();var handleCancel=()=>{setValue("");setOpen(false);};var handleValueChange=event=>{setValue(event.target.value);};var handleOk=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){yield client.setConnectionString(value||"");if(!mounted())return;setValue("");setOpen(false);});return function handleOk(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Dialog/* default */.Z,{open:open,fullWidth:true,maxWidth:"md"},/*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z,{onClose:handleCancel},"Enter device connection string"),/*#__PURE__*/react.createElement(DialogContent/* default */.Z,null,/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"p",variant:"caption"},"Open your IoT Hub in the Azure portal, select IoT Devices, select or create a device, copy the primary or secondary connection string."),/*#__PURE__*/react.createElement(TextField/* default */.Z,{sx:{mt:2},id:connectionStringId,value:value,label:"Value",fullWidth:true,type:"password",size:"small",placeholder:"Connection string",onChange:handleValueChange})),/*#__PURE__*/react.createElement(DialogActions/* default */.Z,null,/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{variant:"contained",color:"primary",disabled:!client,onClick:handleOk},"Save")));}function DashboardCloudConfiguration(props){var{service}=props;var{0:open,1:setOpen}=(0,react.useState)(false);var serverNameRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.ServerName */.iMu.ServerName);var cloudDeviceIdRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.CloudDeviceId */.iMu.CloudDeviceId);var cloudTypeRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.CloudType */.iMu.CloudType);var[serverName]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(serverNameRegister,props);var[cloudDeviceId]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(cloudDeviceIdRegister,props);var[cloudType]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(cloudTypeRegister,props);var connectionStatusRegister=service.register(specconstants/* CloudConfigurationReg.ConnectionStatus */.iMu.ConnectionStatus);var[connectionStatus]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(connectionStatusRegister,props);var messageSentEvent=(0,useEvent/* default */.Z)(service,specconstants/* CloudConfigurationEvent.MessageSent */.omR.MessageSent);var messageSent=(0,useEventCount/* default */.Z)(messageSentEvent);var factory=(0,react.useCallback)(srv=>new CloudConfigurationClient(srv),[]);var client=useServiceClient(service,factory);var color="primary";var connected=connectionStatus===specconstants/* CloudConfigurationConnectionStatus.Connected */.moD.Connected;var handleConnect=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(){var cmd=connected?specconstants/* CloudConfigurationCmd.Disconnect */.Now.Disconnect:specconstants/* CloudConfigurationCmd.Connect */.Now.Connect;yield service.sendCmdAsync(cmd);});return function handleConnect(){return _ref2.apply(this,arguments);};}();var handleConfigure=()=>setOpen(true);return/*#__PURE__*/react.createElement(react.Fragment,null,cloudType&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"subtitle2"},cloudType),/*#__PURE__*/react.createElement(ChipList/* default */.Z,null,serverName&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{color:connected?"primary":"default",label:serverName,onClick:handleConnect,disabled:connectionStatus===undefined,title:specconstants/* CloudConfigurationConnectionStatus */.moD[connectionStatus]||"Waiting..."}),cloudDeviceId&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"device: "+cloudDeviceId}),messageSent!==undefined&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"messages: "+messageSent}),/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"Configure",onClick:handleConfigure},/*#__PURE__*/react.createElement(Settings/* default */.Z,null))),client&&/*#__PURE__*/react.createElement(ConnectionStringDialog,{client:client,open:open,setOpen:setOpen}));}

/***/ })

}]);
//# sourceMappingURL=1471-b87dd8bcf90fbe52454d.js.map