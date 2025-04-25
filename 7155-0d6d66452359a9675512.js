"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7155],{

/***/ 7155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ WebDiagnostics; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Tablelvl2Context.js
var Tablelvl2Context = __webpack_require__(44063);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(89130);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(29602);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableHead/tableHeadClasses.js


function getTableHeadUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTableHead', slot);
}
const tableHeadClasses = (0,generateUtilityClasses/* default */.Z)('MuiTableHead', ['root']);
/* harmony default export */ var TableHead_tableHeadClasses = ((/* unused pure expression or super */ null && (tableHeadClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableHead/TableHead.js


const _excluded = ["className", "component"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = (0,styled/* default */.ZP)('thead', {
  name: 'MuiTableHead',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'table-header-group'
});
const tablelvl2 = {
  variant: 'head'
};
const defaultComponent = 'thead';
const TableHead = /*#__PURE__*/react.forwardRef(function TableHead(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTableHead'
  });
  const {
      className,
      component = defaultComponent
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tablelvl2Context/* default.Provider */.Z.Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableHeadRoot, (0,esm_extends/* default */.Z)({
      as: component,
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      ref: ref,
      role: component === defaultComponent ? null : 'rowgroup',
      ownerState: ownerState
    }, other))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var TableHead_TableHead = (TableHead);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableBody/tableBodyClasses.js


function getTableBodyUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTableBody', slot);
}
const tableBodyClasses = (0,generateUtilityClasses/* default */.Z)('MuiTableBody', ['root']);
/* harmony default export */ var TableBody_tableBodyClasses = ((/* unused pure expression or super */ null && (tableBodyClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableBody/TableBody.js


const TableBody_excluded = ["className", "component"];









const TableBody_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = (0,styled/* default */.ZP)('tbody', {
  name: 'MuiTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'table-row-group'
});
const TableBody_tablelvl2 = {
  variant: 'body'
};
const TableBody_defaultComponent = 'tbody';
const TableBody = /*#__PURE__*/react.forwardRef(function TableBody(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTableBody'
  });
  const {
      className,
      component = TableBody_defaultComponent
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, TableBody_excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = TableBody_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tablelvl2Context/* default.Provider */.Z.Provider, {
    value: TableBody_tablelvl2,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableBodyRoot, (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      as: component,
      ref: ref,
      role: component === TableBody_defaultComponent ? null : 'rowgroup',
      ownerState: ownerState
    }, other))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var TableBody_TableBody = (TableBody);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableContainer/tableContainerClasses.js


function getTableContainerUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTableContainer', slot);
}
const tableContainerClasses = (0,generateUtilityClasses/* default */.Z)('MuiTableContainer', ['root']);
/* harmony default export */ var TableContainer_tableContainerClasses = ((/* unused pure expression or super */ null && (tableContainerClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableContainer/TableContainer.js


const TableContainer_excluded = ["className", "component"];








const TableContainer_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTableContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  width: '100%',
  overflowX: 'auto'
});
const TableContainer = /*#__PURE__*/react.forwardRef(function TableContainer(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTableContainer'
  });
  const {
      className,
      component = 'div'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, TableContainer_excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = TableContainer_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TableContainerRoot, (0,esm_extends/* default */.Z)({
    ref: ref,
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var TableContainer_TableContainer = (TableContainer);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(3694);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(46926);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(9573);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(1820);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(85092);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(91945);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(23508);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(93155);
;// CONCATENATED MODULE: ./src/components/shell/WebDiagnostics.tsx
// tslint:disable-next-line: match-default-export-name no-submodule-imports
function visitNodes(node,vis){var todo=[node];while(todo.length){var _node=todo.pop();vis(_node);_node.children.forEach(child=>todo.push(child));}}function NodeCallRow(props){var{node}=props;var emitStats=node.eventStats;var newListenerStats=node.newListenerStats||{};var events=Object.keys(emitStats).filter(ev=>emitStats[ev]||newListenerStats[ev]).sort((l,r)=>-emitStats[l]+emitStats[r]);var emitTotal=events.filter(ev=>ev!==constants/* REMOVE_LISTENER */.MnB&&ev!==constants/* NEW_LISTENER */.nxl).map(ev=>emitStats[ev]|0).reduce((prev,curr)=>prev+curr,0);var newListenerTotal=events.map(ev=>newListenerStats[ev]|0).reduce((prev,curr)=>prev+curr,0);if(emitTotal==0)return null;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(TableHead_TableHead,null,/*#__PURE__*/react.createElement(TableRow/* default */.Z,null,/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,node.id),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,emitTotal),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,newListenerTotal))),/*#__PURE__*/react.createElement(TableBody_TableBody,null,events.map(ev=>/*#__PURE__*/react.createElement(TableRow/* default */.Z,{key:"event:"+ev},/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,ev),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,emitStats[ev]||0),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,newListenerStats[ev]||0)))));}function NodeCalls(){var{bus}=(0,react.useContext)(Context/* default */.Z);var nodes={};visitNodes(bus,n=>nodes[n.id]=n);return/*#__PURE__*/react.createElement(PaperBox/* default */.Z,{key:"slots"},/*#__PURE__*/react.createElement(TableContainer_TableContainer,null,/*#__PURE__*/react.createElement(Table/* default */.Z,{size:"small"},/*#__PURE__*/react.createElement(TableHead_TableHead,null,/*#__PURE__*/react.createElement(TableRow/* default */.Z,null,/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,"node"),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,"calls"),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,"new listener"))),Object.values(nodes).map(node=>/*#__PURE__*/react.createElement(NodeCallRow,{key:"calls:"+node.id,node:node})))));}function NodeListenerRow(props){var{node}=props;var eventNames=node.eventNames().filter(ev=>node.listenerCount(ev)).sort((l,r)=>-node.listenerCount(l)+node.listenerCount(r));var counts=eventNames.map(ev=>node.listenerCount(ev));var total=counts.reduce((p,c)=>p+c,0);var handleClick=ev=>()=>{var stackTraces=node.listenerStackTraces(ev);stackTraces.forEach(st=>console.log(st));};if(total==0)return null;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(TableHead_TableHead,null,/*#__PURE__*/react.createElement(TableRow/* default */.Z,null,/*#__PURE__*/react.createElement(TableCell/* default */.Z,{valign:"top"},node.id),/*#__PURE__*/react.createElement(TableCell/* default */.Z,{valign:"top"},total),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null))),/*#__PURE__*/react.createElement(TableBody_TableBody,null,eventNames.map((ev,i)=>/*#__PURE__*/react.createElement(TableRow/* default */.Z,{key:"listener:"+ev},/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,ev),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,counts[i]),/*#__PURE__*/react.createElement(TableCell/* default */.Z,null,/*#__PURE__*/react.createElement(Button/* default */.Z,{size:"small",onClick:handleClick(ev)},"traces"))))));}function NodeListeners(){var{bus}=(0,react.useContext)(Context/* default */.Z);var nodes={};visitNodes(bus,n=>nodes[n.id]=n);return/*#__PURE__*/react.createElement(PaperBox/* default */.Z,{key:"slots"},/*#__PURE__*/react.createElement(TableContainer_TableContainer,null,/*#__PURE__*/react.createElement(Table/* default */.Z,{size:"small"},Object.values(nodes).map(node=>/*#__PURE__*/react.createElement(NodeListenerRow,{key:"node:"+node.id,node:node})))));}function WebDiagnostics(){var[expanded,setExpanded]=react.useState(false);var{0:v,1:setV}=(0,react.useState)(0);var handleRefresh=()=>{setV(v+1);};var handleChange=panel=>(event,isExpanded)=>{setExpanded(isExpanded?panel:false);};return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"info"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"Diagnostics"," ",/*#__PURE__*/react.createElement(Button/* default */.Z,{variant:"outlined",onClick:handleRefresh},"refresh")),/*#__PURE__*/react.createElement("p",null,"This diagnostics view does not register events to refresh automatically. Click the button above to refresh data."),/*#__PURE__*/react.createElement(Accordion/* default */.Z,{expanded:expanded==="listeners",onChange:handleChange("listeners")},/*#__PURE__*/react.createElement(AccordionSummary/* default */.Z,{expandIcon:/*#__PURE__*/react.createElement(ExpandMore/* default */.Z,null)},"Event Listeners"),/*#__PURE__*/react.createElement(AccordionDetails/* default */.Z,null,/*#__PURE__*/react.createElement(NodeListeners,null))),/*#__PURE__*/react.createElement(Accordion/* default */.Z,{expanded:expanded==="calls",onChange:handleChange("calls")},/*#__PURE__*/react.createElement(AccordionSummary/* default */.Z,{expandIcon:/*#__PURE__*/react.createElement(ExpandMore/* default */.Z,null)},"Event Calls"),/*#__PURE__*/react.createElement(AccordionDetails/* default */.Z,null,/*#__PURE__*/react.createElement(NodeCalls,null))));}

/***/ })

}]);
//# sourceMappingURL=7155-0d6d66452359a9675512.js.map