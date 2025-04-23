"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5937],{

/***/ 15937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardDotMatrixDisplay; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(38846);
// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__(82312);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2976);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
;// CONCATENATED MODULE: ./src/components/widgets/LEDMatrixWidget.tsx
function LEDMatrixWidget(props){var{leds,brightness=0.5,rows,columns,color="primary",onChange,dots}=props;var{0:currentLeds,1:setCurrentLeds}=(0,react.useState)(leds);var widgetRef=(0,react.useRef)();var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var navProps=(0,useKeyboardNavigationProps/* default */.Z)(widgetRef.current);// grad new leds value
(0,react.useEffect)(()=>setCurrentLeds(leds),[leds]);// no data about layout
if(rows===undefined||columns===undefined)return/*#__PURE__*/react.createElement(LoadingProgress/* default */.Z,null);var widgetSize="clamp(6rem, 16vw, 16vh)";// compute size
var minOpacity=0.6;var pw=8;var ph=8;var ps=0.5;var pr=dots?4:2;var m=2;var w=columns*pw+(columns+1)*m;var h=rows*ph+(rows+1)*m;var column_size=rows+7>>3;var handleLedClick=bitindex=>ev=>{if(ev&&!ev.buttons)return;var newLeds=currentLeds.slice(0);// ensure that newLeds has the right size
var n=columns*column_size;if(newLeds.length!==n){if(newLeds.length>n)newLeds=newLeds.slice(0,n);else{var temp=new Uint8Array(n);temp.set(newLeds,0);newLeds=temp;}}(0,utils/* toggleBit */.LA)(newLeds,bitindex);setCurrentLeds(newLeds);onChange===null||onChange===void 0?void 0:onChange(newLeds);};// add leds
var render=()=>{var boxEls=[];var ledEls=[];var onFill=active;var onStroke=undefined;var offFill=controlBackground;var offStroke="transparent";var ledProps={className:"clickeable",role:"button",tabIndex:0};var y=m;for(var row=0;row<rows;row++){var x=m;for(var col=0;col<columns;col++){var box=/*#__PURE__*/react.createElement("rect",{key:"b"+row+"-"+col,x:x,y:y,width:pw,height:ph,rx:pr,ry:pr,fill:controlBackground});boxEls.push(box);var bitindex=row+col*column_size*8;var on=(0,utils/* getBit */.qD)(currentLeds!==null&&currentLeds!==void 0?currentLeds:new Uint8Array(0),bitindex);var handleClick=handleLedClick(bitindex);var fireClick=(0,useFireKey/* default */.Z)(handleClick);ledEls.push(/*#__PURE__*/react.createElement("rect",Object.assign({key:"l"+row+"-"+col,x:x,y:y,width:pw,height:ph,rx:pr,ry:pr,fill:on?onFill:offFill,stroke:on?onStroke:offStroke,strokeWidth:ps},ledProps,{"aria-label":"led "+row+", "+col+" "+(on?"on":"off"),onPointerDown:handleClick,onPointerEnter:handleClick,onKeyDown:fireClick})));x+=pw+m;}y+=ph+m;}return{boxEls,ledEls};};var{boxEls,ledEls}=render();return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{size:widgetSize,width:w,height:h},/*#__PURE__*/react.createElement("rect",{x:0,y:0,width:w,height:h,rx:2,ry:2,fill:background}),/*#__PURE__*/react.createElement("g",Object.assign({ref:widgetRef},navProps),boxEls,ledEls.length&&/*#__PURE__*/react.createElement("g",{opacity:minOpacity+brightness*(1-minOpacity)},ledEls)));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 12 modules
var RegisterInput = __webpack_require__(51055);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardRegisterValueFallback.tsx
var DashboardRegisterValueFallback = __webpack_require__(47644);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDotMatrix.tsx
function DashboardDotMatrixDisplay(props){var{service,expanded}=props;var dotsRegister=(0,useRegister/* default */.Z)(service,constants/* DotMatrixReg.Dots */.v$D.Dots);var brightnessRegister=(0,useRegister/* default */.Z)(service,constants/* DotMatrixReg.Brightness */.v$D.Brightness);var rowsRegister=(0,useRegister/* default */.Z)(service,constants/* DotMatrixReg.Rows */.v$D.Rows);var columnsRegister=(0,useRegister/* default */.Z)(service,constants/* DotMatrixReg.Columns */.v$D.Columns);var variantRegister=(0,useRegister/* default */.Z)(service,constants/* DotMatrixReg.Variant */.v$D.Variant);var[dots]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(dotsRegister,props);var[brightness=0]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(brightnessRegister,props);var[rows]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(rowsRegister,props);var[columns]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(columnsRegister,props);var[variant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(variantRegister,props);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";(0,useChange/* default */.Z)(server);var handleChange=newLeds=>{dotsRegister.sendSetAsync(newLeds,true);};if(rows===undefined||columns===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:rows===undefined?rowsRegister:columnsRegister});return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,justifyContent:"center",flexDirection:"column"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(LEDMatrixWidget,{leds:dots,brightness:brightness,rows:rows,columns:columns,color:color,onChange:handleChange,dots:variant===constants/* DotMatrixVariant.Braille */.ozp.Braille})),expanded&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{register:brightnessRegister,showRegisterName:true,visible:props.visible})));}

/***/ })

}]);
//# sourceMappingURL=5937-f8097322e9b3a2c2be72.js.map