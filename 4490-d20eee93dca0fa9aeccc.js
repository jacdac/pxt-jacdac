"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4490],{

/***/ 34490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EnclosureGenerator; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./src/components/workers/proxy.ts + 5 modules
var proxy = __webpack_require__(44370);
;// CONCATENATED MODULE: ./src/components/workers/cad.proxy.ts
/* eslint-disable @typescript-eslint/ban-types */function convertToSTL(_x,_x2){return _convertToSTL.apply(this,arguments);}function _convertToSTL(){_convertToSTL=(0,asyncToGenerator/* default */.Z)(function*(model,options){var worker=(0,proxy/* default */.Z)("cad");var res=yield worker.postMessage({worker:"cad",type:"convert",model,options});return{stls:res===null||res===void 0?void 0:res.stls,error:res===null||res===void 0?void 0:res.error};});return _convertToSTL.apply(this,arguments);}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(59062);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(66186);
;// CONCATENATED MODULE: ./src/components/enclosure/EnclosureGenerator.tsx
var STLModelCard=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(317), __webpack_require__.e(1216)]).then(__webpack_require__.bind(__webpack_require__, 91216)));var EC30Card=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(4904), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 8041)));function EnclosureGenerator(props){var{color="#888",model,options,hideAfterGenerated,showSave}=props;var{0:working,1:setWorking}=(0,react.useState)(false);var{0:files,1:setFiles}=(0,react.useState)();var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)(files===null||files===void 0?void 0:files.length);var{0:stlError,1:setStlError}=(0,react.useState)("");var{0:hideGenerate,1:setHideGenerate}=(0,react.useState)(false);var updateUrl=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){try{setStlError(undefined);setWorking(true);var{stls:_files,error}=yield convertToSTL(model,options);var newFiles=_files===null||_files===void 0?void 0:_files.map(_ref2=>{var{name,blob}=_ref2;return{name,url:URL.createObjectURL(blob)};});setFiles(newFiles);setStlError(error);if(hideAfterGenerated)setHideGenerate(true);}finally{setWorking(false);}});return function updateUrl(){return _ref.apply(this,arguments);};}();(0,react.useEffect)(()=>()=>files===null||files===void 0?void 0:files.forEach(_ref3=>{var{url}=_ref3;return URL.revokeObjectURL(url);}),[files]);var handleClick=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(function*(){yield updateUrl();yield updateUrl();});return function handleClick(){return _ref4.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},!hideGenerate&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Button/* default */.Z,{onClick:handleClick,variant:"outlined",disabled:working,startIcon:working&&/*#__PURE__*/react.createElement(CircularProgress/* default */.Z,{size:"1rem",title:"generating STL files",variant:"indeterminate"})},"Generate Enclosure")),stlError&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},stlError)),model&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(EC30Card,{model:model,showSave:showSave}))),files===null||files===void 0?void 0:files.map(file=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({item:true,key:file.name},gridBreakpoints),/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(STLModelCard,Object.assign({},file,{autoRotate:true,color:color}))))));}

/***/ })

}]);
//# sourceMappingURL=4490-d20eee93dca0fa9aeccc.js.map