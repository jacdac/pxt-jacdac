"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4984],{

/***/ 4984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TraceList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(24503);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(20399);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/ui/Markdown.tsx
var SuspensedMarkdown=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8588).then(__webpack_require__.bind(__webpack_require__, 98588)));function Markdown(props){return/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(SuspensedMarkdown,props));}
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx
var PacketsContext = __webpack_require__(12457);
;// CONCATENATED MODULE: ./src/components/trace/TraceCard.tsx
function TraceCard(props){var{name,trace}=props;var{description,duration,length}=trace;var{setReplayTrace}=(0,react.useContext)(PacketsContext/* default */.Z);var handleClick=()=>{setReplayTrace(trace);(0,gatsby_browser_entry.navigate)("/tools/player");};return/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:name,subheader:(0,pretty/* prettyDuration */.Xh)(duration)+", "+length+" packets"}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,description&&/*#__PURE__*/react.createElement(Markdown,{source:description})),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,/*#__PURE__*/react.createElement(Button/* default */.Z,{onClick:handleClick,variant:"outlined"},"import")));}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
;// CONCATENATED MODULE: ./src/components/trace/TraceList.tsx
function TraceList(){var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)();var data=(0,gatsby_browser_entry.useStaticQuery)("413816803");var traces=data.allPlainText.nodes.filter(node=>{var _node$parent;return((_node$parent=node.parent)===null||_node$parent===void 0?void 0:_node$parent.ext)===".txt";}).map(node=>{return{trace:(0,logparser/* parseTrace */.k9)(node.content),name:node.parent.name};}).filter(trace=>!!trace.trace);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},traces.map(_ref=>{var{trace,name}=_ref;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:name},/*#__PURE__*/react.createElement(TraceCard,Object.assign({name:name,trace:trace},gridBreakpoints)));}));}

/***/ })

}]);
//# sourceMappingURL=4984-201d531ca4559a0a883a.js.map