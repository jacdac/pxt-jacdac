"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6367],{

/***/ 6367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TraceSnippet; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(20399);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./src/components/PacketListItem.tsx + 2 modules
var PacketListItem = __webpack_require__(13593);
;// CONCATENATED MODULE: ./src/components/trace/TraceView.tsx
function TraceView(props){var{packets}=props;return/*#__PURE__*/react.createElement(List/* default */.Z,null,packets.map(packet=>/*#__PURE__*/react.createElement(PacketListItem/* default */.Z,{key:packet.key,packet:packet,count:1,showTime:true})));}
;// CONCATENATED MODULE: ./src/components/trace/TraceSnippet.tsx
function TraceSnippet(props){var{source}=props;// TODO get bus from somewhere?
var packets=(0,react.useMemo)(()=>(0,logparser/* parseTrace */.k9)(source).toPackets(),[source]);return/*#__PURE__*/react.createElement(TraceView,{packets:packets});}

/***/ })

}]);
//# sourceMappingURL=6367-8bccb9912fc83beb11f8.js.map