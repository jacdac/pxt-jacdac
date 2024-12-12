"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6540,9161],{

/***/ 30603:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 2-5.5 9h11z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "4.5"
}, "1"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 13.5h8v8H3z"
}, "2")], 'Category');
exports.Z = _default;

/***/ }),

/***/ 49161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js


function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
const cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


const _excluded = ["disableSpacing", "className"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  alignItems: 'center',
  padding: 8
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });
  const {
      disableSpacing = false,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

/***/ }),

/***/ 95492:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IDChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80610);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90461);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6867);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12457);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5355);
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38041);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function IDChip(props){var{id,className,filter}=props;var{filter:packetFilter,setFilter:setPacketFilter}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);var{setDrawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);var ids=typeof id==="string"?id:"0x"+(id!==undefined?id.toString(16):"???");var filtered=packetFilter&&packetFilter.indexOf(filter)>-1;var handleFilterClick=()=>{var _packetFilter$replace;if(filtered)setPacketFilter(packetFilter===null||packetFilter===void 0?void 0:(_packetFilter$replace=packetFilter.replace(filter,""))===null||_packetFilter$replace===void 0?void 0:_packetFilter$replace.trim());else setPacketFilter((packetFilter===null||packetFilter===void 0?void 0:packetFilter.trim())+" "+filter);setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.Packets */ .jw.Packets);};var icon=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null);var title=filtered?"remove filter "+filter:"add filter "+filter;if(filter)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:filtered?"remove filter "+filter:"add filter "+filter},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{className:className,size:"small",icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{"aria-label":title,onClick:handleFilterClick,size:"small"},icon),label:ids})));else return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{"aria-label":title,className:className,size:"small",icon:icon,title:"identifier "+ids,label:ids});}

/***/ }),

/***/ 94597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */function Head(props){var _site$siteMetadata,_data$page,_site$siteMetadata2;var{pageContext,data,description,image,title,meta=[]}=props;var{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");var metaTitle=title||(pageContext===null||pageContext===void 0?void 0:pageContext.title)||(site===null||site===void 0?void 0:(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title);if(!/^(Jacdac|DeviceScript)/i.test(metaTitle))metaTitle="Jacdac - "+metaTitle;var metaDescription=description||(data===null||data===void 0?void 0:(_data$page=data.page)===null||_data$page===void 0?void 0:_data$page.description)||(site===null||site===void 0?void 0:(_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.description);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{key:"title"},metaTitle),[{name:"description",content:metaDescription},{name:"og:image",content:image},{name:"og:title",content:metaTitle},{name:"og:description",content:metaDescription},{name:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:site.siteMetadata.author},{name:"twitter:title",content:title},{name:"twitter:description",content:metaDescription}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(meta)).filter(_ref=>{var{content}=_ref;return!!content;}).map(_ref2=>{var{name,content}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:name,name:name,content:content});}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"fontsgoogle",rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"gitusercontent",rel:"preconnect",href:"https://raw.githubusercontent.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"viewport",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}));}

/***/ }),

/***/ 43897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export StatusAlert */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46259);
function StatusAlert(props){var{specification}=props;switch(specification===null||specification===void 0?void 0:specification.status){case"deprecated":return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"error"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,"Service deprecated"),"This service should not be added to new modules and might not be supported in future releases.");case"experimental":return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"info"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,"Experimental service"),"This service specification may change in the future.");default:return null;}}var ServiceSpecificationStatusAlert=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(StatusAlert);/* harmony default export */ __webpack_exports__["Z"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ 22129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19811);
var SuspensedMarkdown=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 8588).then(__webpack_require__.bind(__webpack_require__, 98588)));function Markdown(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuspensedMarkdown,props));}

/***/ }),

/***/ 67768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
function useEventCount(event){var{0:count,1:setCount}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event===null||event===void 0?void 0:event.count)||0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event===null||event===void 0?void 0:event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver,()=>{setCount(event.count);}),[event]);return count;}

/***/ }),

/***/ 81704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ service_playground_Head; },
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
;// CONCATENATED MODULE: ./src/components/ServiceButton.tsx
var _excluded=["service","onClick"];function ServiceButton(props){var{service,onClick}=props,others=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);return/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,Object.assign({},others,{variant:"contained",color:"primary",onClick:onClick}),service.name);}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(24503);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/devices/DeviceActions.tsx
var DeviceActions = __webpack_require__(42714);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(11352);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(36141);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(70917);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/cssUtils.js
var cssUtils = __webpack_require__(88606);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/skeletonClasses.js


function getSkeletonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSkeleton', slot);
}
const skeletonClasses = (0,generateUtilityClasses/* default */.Z)('MuiSkeleton', ['root', 'text', 'rectangular', 'rounded', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
/* harmony default export */ var Skeleton_skeletonClasses = ((/* unused pure expression or super */ null && (skeletonClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js


const Skeleton_excluded = ["animation", "className", "component", "height", "style", "variant", "width"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;










const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ['root', variant, animation, hasChildren && 'withChildren', hasChildren && !width && 'fitContent', hasChildren && !height && 'heightAuto']
  };
  return (0,composeClasses/* default */.Z)(slots, getSkeletonUtilityClass, classes);
};
const pulseKeyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
const waveKeyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
const SkeletonRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  const radiusUnit = (0,cssUtils/* getUnit */.Wy)(theme.shape.borderRadius) || 'px';
  const radiusValue = (0,cssUtils/* toUnitless */.YL)(theme.shape.borderRadius);
  return (0,esm_extends/* default */.Z)({
    display: 'block',
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
    height: '1.2em'
  }, ownerState.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    '&:empty:before': {
      content: '"\\00a0"'
    }
  }, ownerState.variant === 'circular' && {
    borderRadius: '50%'
  }, ownerState.variant === 'rounded' && {
    borderRadius: (theme.vars || theme).shape.borderRadius
  }, ownerState.hasChildren && {
    '& > *': {
      visibility: 'hidden'
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: 'fit-content'
  }, ownerState.hasChildren && !ownerState.height && {
    height: 'auto'
  });
}, ({
  ownerState
}) => ownerState.animation === 'pulse' && (0,emotion_react_browser_esm.css)(_t3 || (_t3 = _`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === 'wave' && (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover));
const Skeleton = /*#__PURE__*/react.forwardRef(function Skeleton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSkeleton'
  });
  const {
      animation = 'pulse',
      className,
      component = 'span',
      height,
      style,
      variant = 'text',
      width
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, Skeleton_excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState
  }, other, {
    style: (0,esm_extends/* default */.Z)({
      width,
      height
    }, style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Skeleton_Skeleton = (Skeleton);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(54962);
;// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx
function CardMediaWithSkeleton(props){var{image,src,aspectRatio="4 / 3",title}=props;var hasImage=!!image||!!src;if(!hasImage)return/*#__PURE__*/react.createElement(Skeleton_Skeleton,{sx:{aspectRatio},width:"100%"});return/*#__PURE__*/react.createElement(CardMedia/* default */.Z,{component:"img",image:image,src:src,alt:title,sx:{aspectRatio}});}
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardMedia.tsx
function DeviceCardMedia(props){var{device}=props;var specification=(0,useDeviceSpecification/* default */.ZP)(device);var imageUrl=(0,useDeviceImage/* default */.Z)(specification,"preview");return/*#__PURE__*/react.createElement(CardMediaWithSkeleton,{image:imageUrl,title:specification===null||specification===void 0?void 0:specification.name});}
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 1 modules
var DeviceAvatar = __webpack_require__(30841);
// EXTERNAL MODULE: ./src/jacdac/useDeviceDescription.ts
var useDeviceDescription = __webpack_require__(69461);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardHeader.tsx
// tslint:disable-next-line: no-submodule-imports
var DeviceFirmwareVersionChip=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(1639)]).then(__webpack_require__.bind(__webpack_require__, 31639)));var DeviceTemperatureChip=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(6366)]).then(__webpack_require__.bind(__webpack_require__, 46366)));function DeviceCardHeader(props){var{device,showFirmware,showTemperature,showMedia,showDeviceId,showAvatar,showSettings,showReset,showDescription}=props;var specification=(0,useDeviceSpecification/* default */.ZP)(device);var description=(0,useDeviceDescription/* default */.Z)(showDescription&&device);return/*#__PURE__*/react.createElement(react.Fragment,null,showMedia&&/*#__PURE__*/react.createElement(DeviceCardMedia,{device:device}),/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{avatar:showAvatar&&/*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z,{device:device}),action:/*#__PURE__*/react.createElement(DeviceActions/* default */.Z,{device:device,showReset:showReset,showSettings:showSettings,hideIdentity:showAvatar}),title:/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:device,linkToSpecification:true}),subheader:/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",gutterBottom:true},[specification===null||specification===void 0?void 0:specification.name,showDeviceId&&device.deviceId,showDescription&&description].filter(s=>!!s).join(", "))),showFirmware&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceFirmwareVersionChip,{device:device}))),showTemperature&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceTemperatureChip,{device:device}))))}));}
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(32589);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCard.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
var PREFIX="DeviceCard";var classes={root:PREFIX+"root",bullet:PREFIX+"bullet",title:PREFIX+"title",pos:PREFIX+"pos"};var StyledCard=(0,styled/* default */.ZP)(Card/* default */.Z)(()=>({["&."+classes.root]:{},["& ."+classes.bullet]:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},["& ."+classes.title]:{fontSize:14},["& ."+classes.pos]:{marginBottom:12}}));function navigateToService(service){var spec=service.specification;if(spec)(0,gatsby_browser_entry.navigate)("/services/"+spec.shortId+"/");// todo spec
}function DeviceDescription(props){var{device}=props;var register=(0,useChange/* default */.Z)(device,_=>{var _$service;return _===null||_===void 0?void 0:(_$service=_.service(0))===null||_$service===void 0?void 0:_$service.register(constants/* ControlReg.DeviceDescription */.toU.DeviceDescription);});var[description]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register);return/*#__PURE__*/react.createElement("span",null,description||"");}function DeviceCard(props){var{device,children,action,content,showDeviceId,showDescription,showTemperature,showFirmware,showServices,showReset}=props;var services=(0,useChange/* default */.Z)(device,()=>device.services().filter(srv=>!(0,jdom_spec/* isInfrastructure */.lz)(srv.specification)));return/*#__PURE__*/react.createElement(StyledCard,{className:classes.root},/*#__PURE__*/react.createElement(DeviceCardHeader,{device:device,showDeviceId:showDeviceId,showTemperature:showTemperature,showFirmware:showFirmware,showMedia:true,showReset:showReset}),(showDescription||content)&&/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M,{device:device}),showDescription&&/*#__PURE__*/react.createElement(DeviceDescription,{device:device}),content),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,action,showServices&&(services===null||services===void 0?void 0:services.map(service=>/*#__PURE__*/react.createElement(ServiceButton,{key:service.nodeId,service:service,onClick:()=>navigateToService(service)})))),children);}
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 6 modules
var RegisterInput = __webpack_require__(93900);
;// CONCATENATED MODULE: ./src/components/ui/AutoGrid.tsx
function AutoGrid(props){var{children,spacing}=props;if(children&&Array.isArray(children))return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:spacing},children.map((child,i)=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12,key:child.key||i},child)));else return children;}
;// CONCATENATED MODULE: ./src/components/ServiceRegisters.tsx
function ServiceRegisters(props){var{service,registerIdentifiers,filter,showRegisterName,hideMissingValues,showTrends}=props;var specification=(0,useChange/* default */.Z)(service,spec=>spec.specification);var registers=(0,react.useMemo)(()=>{var _packets$filter,_ids$map;var packets=specification===null||specification===void 0?void 0:specification.packets;var ids=registerIdentifiers||(packets===null||packets===void 0?void 0:(_packets$filter=packets.filter(pkt=>(0,jdom_spec/* isRegister */.x5)(pkt)))===null||_packets$filter===void 0?void 0:_packets$filter.map(pkt=>pkt.identifier));var r=(ids===null||ids===void 0?void 0:(_ids$map=ids.map(id=>service.register(id)))===null||_ids$map===void 0?void 0:_ids$map.filter(reg=>!!reg))||[];if(filter)r=r.filter(filter);return r;},[specification,registerIdentifiers,filter]);return/*#__PURE__*/react.createElement(AutoGrid,{spacing:1},registers.map(register=>/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{key:register.id,register:register,showRegisterName:showRegisterName,hideMissingValues:hideMissingValues,showTrend:showTrends&&register.code===constants/* SystemReg.Reading */.ZJq.Reading,visible:true})));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 5 modules
var Badge = __webpack_require__(19035);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(11799);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(67768);
;// CONCATENATED MODULE: ./src/components/EventInput.tsx
function EventInput(props){var{event,showName,showDeviceName}=props;var count=(0,useEventCount/* default */.Z)(event);var spec=event.specification;return/*#__PURE__*/react.createElement(react.Fragment,null,showDeviceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:event.service.device}),"/"),showName&&spec&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{gutterBottom:true},spec.name),/*#__PURE__*/react.createElement(Badge/* default */.Z,{badgeContent:count,color:"primary"},/*#__PURE__*/react.createElement(KindIcon/* default */.ZP,{kind:"event"})));}
;// CONCATENATED MODULE: ./src/components/ServiceEvents.tsx
function ServiceEvents(props){var{service,eventIdentifiers,showEventName}=props;var spec=service.specification;var packets=spec.packets;var events=packets.filter(jdom_spec/* isEvent */.cO);if(eventIdentifiers!==undefined)events=events.filter(event=>eventIdentifiers.indexOf(event.identifier)>-1);return/*#__PURE__*/react.createElement(AutoGrid,{spacing:1},events.map(event=>/*#__PURE__*/react.createElement(EventInput,{key:"event"+event.identifier,event:service.event(event.identifier),showName:showEventName})));}
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(70576);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__(39727);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/command.ts
var jdom_command = __webpack_require__(65105);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(80662);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(10662);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
;// CONCATENATED MODULE: ./src/components/CommandInput.tsx
function hasPipeReport(info){return info.fields.find(f=>f.type=="pipe");}function CommandInput(props){var{service,command,showDeviceName,args,setReports}=props;var bus=(0,useBus/* default */.Z)();var{specification}=service;var requiredArgLength=command.fields.length-(hasPipeReport(command)?1:0);var missingArguments=((args===null||args===void 0?void 0:args.length)||0)!==requiredArgLength;var disabled=missingArguments;var reportSpec=command.hasReport&&specification.packets.find(p=>(0,jdom_spec/* isReportOf */.Dm)(command,p));var handleClick=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){var pkt=!(args!==null&&args!==void 0&&args.length)?packet/* Packet.onlyHeader */.W.onlyHeader(command.identifier):(0,jdom_command/* packArguments */.n)(command,args);if(setReports&&reportSpec){var reportPacket=yield service.sendCmdAwaitResponseAsync(pkt);if(!mounted())return;var decoded=reportPacket===null||reportPacket===void 0?void 0:reportPacket.decoded;setReports([decoded]);}else if(setReports&&hasPipeReport(command)){var inp;try{inp=new pipes/* InPipeReader */.oI(bus);var cmd=inp.openCommand(command.identifier);yield service.sendPacketAsync(cmd,true);console.log((0,pretty/* printPacket */.$_)(cmd));// keep this call, it sets up pretty to understand packages
var{output}=yield inp.readAll();var _reports=output.filter(ot=>{var _ot$data;return!!((_ot$data=ot.data)!==null&&_ot$data!==void 0&&_ot$data.length);}).map(ot=>ot===null||ot===void 0?void 0:ot.decoded);if(!mounted())return;setReports(_reports);}finally{var _inp;(_inp=inp)===null||_inp===void 0?void 0:_inp.unmount();}}else yield service.sendPacketAsync(pkt,true);});return function handleClick(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{trackName:"command.input",trackProperties:{service:(0,pretty/* serviceName */.HV)(service.serviceClass),serviceClass:service.serviceClass},variant:"contained",disabled:disabled,onClick:handleClick},showDeviceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:service.device}),"/"),command.name.replace(/_/g," "));}
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 5 modules
var MembersInput = __webpack_require__(12575);
;// CONCATENATED MODULE: ./src/components/DecodedPacketItem.tsx
function DecodedPacketItem(props){var{pkt}=props;var{decoded,service}=pkt;var specifications=(0,react.useMemo)(()=>decoded.map(d=>d.info),[decoded]);var values=(0,react.useMemo)(()=>decoded.map(d=>d.value),[decoded]);return/*#__PURE__*/react.createElement(MembersInput/* default */.Z,{serviceSpecification:service,specifications:specifications,values:values});}
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(43897);
;// CONCATENATED MODULE: ./src/components/ServiceCard.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
var ServiceCard_PREFIX="ServiceCard";var ServiceCard_classes={root:ServiceCard_PREFIX+"root",bullet:ServiceCard_PREFIX+"bullet",title:ServiceCard_PREFIX+"title",pos:ServiceCard_PREFIX+"pos"};var ServiceCard_StyledCard=(0,styled/* default */.ZP)(Card/* default */.Z)({["&."+ServiceCard_classes.root]:{minWidth:275},["& ."+ServiceCard_classes.bullet]:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},["& ."+ServiceCard_classes.title]:{fontSize:14},["& ."+ServiceCard_classes.pos]:{marginBottom:12}});function ServiceCard(props){var{service,linkToService,registerIdentifiers,showServiceName,showMemberName,eventIdentifiers,commandIdentifier}=props;var{specification}=service;var{0:reports,1:setReports}=(0,react.useState)(undefined);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var{0:commandArgs,1:setCommandArgs}=(0,react.useState)([]);var hasCommandIdentifier=commandIdentifier!==undefined;var hasRegisterIdentifiers=!!(registerIdentifiers!==null&&registerIdentifiers!==void 0&&registerIdentifiers.length);var hasEventIdentifiers=!!(eventIdentifiers!==null&&eventIdentifiers!==void 0&&eventIdentifiers.length);var command=commandIdentifier!==undefined&&(specification===null||specification===void 0?void 0:specification.packets.find(pkt=>(0,jdom_spec/* isCommand */.ao)(pkt)&&pkt.identifier===commandIdentifier));return/*#__PURE__*/react.createElement(ServiceCard_StyledCard,{className:ServiceCard_classes.root},/*#__PURE__*/react.createElement(DeviceCardHeader,{device:service.device,showAvatar:true}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,showServiceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{className:ServiceCard_classes.title,color:"textSecondary",gutterBottom:true},/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{to:linkToService&&service.specification?"/services/"+service.specification.shortId+"/":"/clients/javascript/jdom/service"},service.name)),/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body2",component:"div"},hasRegisterIdentifiers&&/*#__PURE__*/react.createElement(ServiceRegisters,{service:service,showRegisterName:showMemberName,registerIdentifiers:registerIdentifiers}),hasEventIdentifiers&&/*#__PURE__*/react.createElement(ServiceEvents,{service:service,showEventName:showMemberName,eventIdentifiers:eventIdentifiers}),command&&/*#__PURE__*/react.createElement(MembersInput/* default */.Z,{serviceSpecification:specification,serviceMemberSpecification:command,specifications:command.fields,values:commandArgs,setValues:setCommandArgs,showDataType:true}),!!(reports!==null&&reports!==void 0&&reports.length)&&/*#__PURE__*/react.createElement(List/* default */.Z,{key:"reports",dense:true},reports===null||reports===void 0?void 0:reports.map((report,ri)=>/*#__PURE__*/react.createElement(ListItem/* default */.ZP,{key:"report"+ri},/*#__PURE__*/react.createElement(DecodedPacketItem,{pkt:report}))))),!hasCommandIdentifier&&!hasRegisterIdentifiers&&!hasEventIdentifiers&&/*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z,{specification:specification}),/*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M,{device:service===null||service===void 0?void 0:service.device})),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,command&&/*#__PURE__*/react.createElement(CommandInput,{service:service,command:command,args:commandArgs,setReports:setReports})));}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(18891);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(73131);
;// CONCATENATED MODULE: ./src/components/devices/DeviceList.tsx
var DeviceList_PREFIX="DeviceList";var DeviceList_classes={root:DeviceList_PREFIX+"root"};var StyledGrid=(0,styled/* default */.ZP)(Grid/* default */.ZP)(_ref=>{var{theme}=_ref;return{["&."+DeviceList_classes.root]:{marginBottom:theme.spacing(1)}};});function DeviceList(props){var{serviceClass,linkToService,registerIdentifiers,showServiceName,showMemberName,showFirmware,showTemperature,showServiceButtons,eventIdentifiers,commandIdentifier}=props;var devices=(0,useDevices/* default */.Z)({serviceClass});var services=(0,useServices/* default */.Z)({serviceClass});var hasServiceClass=serviceClass!==undefined;var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)(devices===null||devices===void 0?void 0:devices.length);return/*#__PURE__*/react.createElement(StyledGrid,{container:true,spacing:2,className:DeviceList_classes.root},!hasServiceClass&&devices.map(device=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:device.id,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(DeviceCard,{device:device,showDescription:true,showTemperature:showTemperature,showFirmware:showFirmware,showServices:showServiceButtons}))),hasServiceClass&&services.map(service=>{return/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:service.nodeId,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(ServiceCard,{service:service,linkToService:linkToService,showServiceName:showServiceName,showMemberName:showMemberName,registerIdentifiers:registerIdentifiers,eventIdentifiers:eventIdentifiers,commandIdentifier:commandIdentifier}));}));}
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(95492);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx
var PacketsContext = __webpack_require__(12457);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(5355);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(38041);
;// CONCATENATED MODULE: ./src/components/KindChip.tsx
function KindChip(props){var{kind,className}=props;var{filter,setFilter}=(0,react.useContext)(PacketsContext/* default */.Z);var{setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var icon=(0,KindIcon/* default */.ZP)({kind});var chipFilter="kind:"+kind;var filtered=filter&&filter.indexOf(chipFilter)>-1;var handleClick=()=>{var _filter$replace;if(filtered)setFilter(filter===null||filter===void 0?void 0:(_filter$replace=filter.replace(chipFilter,""))===null||_filter$replace===void 0?void 0:_filter$replace.trim());else setFilter((filter===null||filter===void 0?void 0:filter.trim())+" "+chipFilter);setDrawerType(AppContext/* DrawerType.Packets */.jw.Packets);};return/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:filtered?"remove filter "+chipFilter:"add filter "+chipFilter},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(Chip/* default */.Z,{onClick:handleClick,className:className,size:"small",label:(0,KindIcon/* kindName */.QD)(kind),icon:icon})));}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Category.js
var Category = __webpack_require__(30603);
;// CONCATENATED MODULE: ./src/components/PacketMembersChip.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function PacketMembersChip(props){var{members,className,spec}=props;if(!(members!==null&&members!==void 0&&members.length))return null;var label=spec===null||spec===void 0?void 0:spec.packFormat;var title="pack format";return/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:title},/*#__PURE__*/react.createElement(Chip/* default */.Z,{style:{textDecoration:"none"},href:"/reference/pack-format/",component:"a",clickable:true,className:className,size:"small",icon:/*#__PURE__*/react.createElement(Category/* default */.Z,null),label:label}));}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(22129);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(44656);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(62640);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(8760);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(25373);
;// CONCATENATED MODULE: ./src/components/ui/Snippet.tsx
function Snippet(props){var{value,mode,download,url,caption,actions,copy}=props;var v=typeof value==="function"?value():value;var className=mode&&"language-"+(mode==="sts"?"ts":mode);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(CodeBlock["default"],{className:className,downloadName:download,downloadText:download&&v,actions:actions,url:url,copy:copy},v),caption&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},caption));}
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(91945);
;// CONCATENATED MODULE: ./src/components/specification/PacketSpecificationSource.tsx
function PacketSpecificationSource(props){var _packetInfo$fields;var{serviceClass,packetInfo}=props;var{0:tab,1:setTab}=(0,react.useState)(0);var info=(0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);var handleTabChange=(event,newValue)=>{setTab(newValue);};// TODO: render commands
if(!info||!(packetInfo!==null&&packetInfo!==void 0&&(_packetInfo$fields=packetInfo.fields)!==null&&_packetInfo$fields!==void 0&&_packetInfo$fields.length)||!((0,jdom_spec/* isRegister */.x5)(packetInfo)||(0,jdom_spec/* isCommand */.ao)(packetInfo)||(0,jdom_spec/* isEvent */.cO)(packetInfo)))return null;var index=0;return/*#__PURE__*/react.createElement(PaperBox/* default */.Z,null,/*#__PURE__*/react.createElement(Tabs/* default */.Z,{value:tab,onChange:handleTabChange,"aria-label":"View specification formats"},["TypeScript"].filter(n=>!!n).map(n=>/*#__PURE__*/react.createElement(Tab/* default */.Z,{key:n,label:n}))),/*#__PURE__*/react.createElement(TabPanel/* default */.Z,{value:tab,index:index++},/*#__PURE__*/react.createElement(Snippet,{value:()=>(0,jdspec/* packInfo */.p6)(info,packetInfo,{isStatic:false,useBooleans:false,useJDOM:true}).buffers,mode:"typescript"})));}
;// CONCATENATED MODULE: ./src/components/specification/PacketSpecification.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
var PacketSpecification_PREFIX="PacketSpecification";var PacketSpecification_classes={root:PacketSpecification_PREFIX+"root",field:PacketSpecification_PREFIX+"field",chip:PacketSpecification_PREFIX+"chip"};var Root=(0,styled/* default */.ZP)("div")(_ref=>{var{theme}=_ref;return{["&."+PacketSpecification_classes.root]:{marginBottom:theme.spacing(1)},["& ."+PacketSpecification_classes.field]:{"& > div":{verticalAlign:"middle"}},["& ."+PacketSpecification_classes.chip]:{margin:theme.spacing(0.5)}};});function MemberType(props){var{member}=props;var helperText=(0,pretty/* prettyMemberUnit */.Zn)(member,true);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("li",{className:PacketSpecification_classes.field},member.name!=="_"&&member.name+": ",/*#__PURE__*/react.createElement("code",null,helperText)));}function MembersType(props){var{members,title}=props;var repeatIndex=members.findIndex(m=>!!m.startRepeats);if(repeatIndex<0)repeatIndex=members.length;var beforeRepeat=members.slice(0,repeatIndex);var afterRepeat=members.slice(repeatIndex);return/*#__PURE__*/react.createElement(react.Fragment,null,!!title&&/*#__PURE__*/react.createElement("h4",null,title),!!beforeRepeat.length&&/*#__PURE__*/react.createElement("ul",null,beforeRepeat.map(member=>/*#__PURE__*/react.createElement(MemberType,{key:member.name,member:member}))),!!afterRepeat.length&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h5",null,"starts repeating"),/*#__PURE__*/react.createElement("ul",null,afterRepeat.map(member=>/*#__PURE__*/react.createElement(MemberType,{key:member.name,member:member})))));}function PacketSpecification(props){var{serviceClass,packetInfo,reportInfo,pipeReportInfo,showDevices}=props;if(!packetInfo)return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},"Unknown member "+serviceClass.toString(16)+":"+packetInfo.identifier);var{fields}=packetInfo;var isCmd=(0,jdom_spec/* isCommand */.ao)(packetInfo);return/*#__PURE__*/react.createElement(Root,{className:PacketSpecification_classes.root},/*#__PURE__*/react.createElement("h3",{id:packetInfo.kind+":"+packetInfo.identifier},packetInfo.name,/*#__PURE__*/react.createElement(PacketMembersChip,{spec:packetInfo,className:PacketSpecification_classes.chip,members:packetInfo.fields}),packetInfo.identifier!==undefined&&/*#__PURE__*/react.createElement(IDChip/* default */.Z,{className:PacketSpecification_classes.chip,id:packetInfo.identifier,filter:"pkt:0x"+packetInfo.identifier.toString(16)}),/*#__PURE__*/react.createElement(KindChip,{className:PacketSpecification_classes.chip,kind:packetInfo.kind}),packetInfo.optional&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{className:PacketSpecification_classes.chip,size:"small",label:"optional"}),packetInfo.derived&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{className:PacketSpecification_classes.chip,size:"small",label:"derived"})),/*#__PURE__*/react.createElement(Markdown/* default */.Z,{source:packetInfo.description}),!!fields.length&&/*#__PURE__*/react.createElement(MembersType,{members:fields,title:isCmd&&"Arguments"}),!!reportInfo&&/*#__PURE__*/react.createElement(MembersType,{members:reportInfo.fields,title:"Report"}),!!pipeReportInfo&&/*#__PURE__*/react.createElement(MembersType,{members:pipeReportInfo.fields,title:"Pipe report"}),/*#__PURE__*/react.createElement(PacketSpecificationSource,{serviceClass:serviceClass,packetInfo:packetInfo,reportInfo:reportInfo}),showDevices&&(0,jdom_spec/* isCommand */.ao)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,commandIdentifier:packetInfo.identifier}),showDevices&&(0,jdom_spec/* isRegister */.x5)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,registerIdentifiers:[packetInfo.identifier]}),showDevices&&(0,jdom_spec/* isEvent */.cO)(packetInfo)&&/*#__PURE__*/react.createElement(DeviceList,{serviceClass:serviceClass,eventIdentifiers:[packetInfo.identifier]}));}
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx
function EnumSpecification(props){var{serviceClass}=props;var spec=(0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);var enums=Object.values((spec===null||spec===void 0?void 0:spec.enums)||{}).filter(en=>!en.derived);if(!enums.length)return/*#__PURE__*/react.createElement(react.Fragment,null);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h2",null,"Enums"),enums.map(e=>/*#__PURE__*/react.createElement(react.Fragment,{key:e.name},/*#__PURE__*/react.createElement("h3",null,e.name," ",e.isFlags&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"flags",size:"small"})),/*#__PURE__*/react.createElement("ul",null,Object.keys(e.members).map(en=>/*#__PURE__*/react.createElement("li",{key:en},en,":"," ",/*#__PURE__*/react.createElement("code",null,"0x",e.members[en].toString(16))))))));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 5 modules
var servers = __webpack_require__(2283);
;// CONCATENATED MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
function useServiceProviderFromServiceClass(serviceClass){var bus=(0,useBus/* default */.Z)();// run once
(0,react.useEffect)(()=>{var devices=bus.devices({serviceClass});var def=!devices.length&&(0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(serviceClass);var provider=def&&(0,servers/* addServiceProvider */.Q6)(bus,def);return()=>bus.removeServiceProvider(provider);},[serviceClass]);}
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx + 26 modules
var DashboardDeviceItem = __webpack_require__(56908);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecification.tsx
function DashboardServiceDevices(props){var{serviceClass}=props;var devices=(0,useDevices/* default */.Z)({serviceClass});return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},devices.map(device=>/*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z,{key:device.id,device:device,showAvatar:true,showHeader:true})));}function ServiceSpecification(props){var _node$extends;var{service:node,showDerived}=props;var{shortId,name,classIdentifier}=node;var packets=node.packets.filter(pkt=>showDerived||!pkt.derived);var registers=packets.filter(jdom_spec/* isRegister */.x5);var events=packets.filter(jdom_spec/* isEvent */.cO);var commands=packets.filter(jdom_spec/* isCommand */.ao);var reports=packets.filter(r=>r.secondary);var pipeReports=packets.filter(jdom_spec/* isPipeReport */._5);var others=packets.filter(r=>registers.indexOf(r)<0&&events.indexOf(r)<0&&commands.indexOf(r)<0&&reports.indexOf(r)<0&&pipeReports.indexOf(r)<0);// spin up provider on demand
useServiceProviderFromServiceClass(node.classIdentifier);var reportOf=pkt=>reports.find(rep=>(0,jdom_spec/* isReportOf */.Dm)(pkt,rep));var pipeReportOf=pkt=>pipeReports.find(rep=>(0,jdom_spec/* isPipeReportOf */.yr)(pkt,rep));return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h1",{key:"title"},name,/*#__PURE__*/react.createElement(Box/* default */.Z,{ml:1,component:"span"},/*#__PURE__*/react.createElement(IDChip/* default */.Z,{id:node.classIdentifier,filter:"srv:"+shortId}))),/*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z,{specification:node}),node.notes.short&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body2"},node.notes.short),!!((_node$extends=node.extends)!==null&&_node$extends!==void 0&&_node$extends.length)&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("span",null,"Extends "),node.extends.map((extend,i)=>/*#__PURE__*/react.createElement(react.Fragment,{key:"extend"+extend},i>0&&/*#__PURE__*/react.createElement("span",null,", "),/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{key:"extend"+extend,to:"/services/"+extend+"/"},(0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name))),"."),/*#__PURE__*/react.createElement(Markdown/* default */.Z,{key:"noteslong",source:node.notes.long||""}),/*#__PURE__*/react.createElement(DashboardServiceDevices,{serviceClass:classIdentifier}),/*#__PURE__*/react.createElement(EnumSpecification,{key:"enums",serviceClass:classIdentifier}),[{name:"Registers",packets:registers,note:node.notes["registers"]},{name:"Events",packets:events,note:node.notes["events"]},{name:"Commands",packets:commands,note:node.notes["commands"]},{name:"Others",packets:others,note:node.notes["others"]}].filter(group=>group.packets.length).map(group=>/*#__PURE__*/react.createElement(react.Fragment,{key:"group"+group.name},/*#__PURE__*/react.createElement("h2",null,group.name),group.note&&/*#__PURE__*/react.createElement(Markdown/* default */.Z,{key:"node"+group.name,source:group.note}),group.packets.sort((l,r)=>(l.derived?1:-1)-(r.derived?1:-1)).map(pkt=>/*#__PURE__*/react.createElement(PacketSpecification,{key:"pkt"+pkt.identifier,serviceClass:node.classIdentifier,packetInfo:pkt,reportInfo:reportOf(pkt),pipeReportInfo:pipeReportOf(pkt),showDevices:true})))));}
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/templates/service-playground.tsx




var service_playground_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, props);
function Page(props) {
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(props.pageContext.node.classIdentifier);
  return /*#__PURE__*/react.createElement(ServiceSpecification, {
    service: spec
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-playground-tsx-fb40dd7e36c44628af3b.js.map