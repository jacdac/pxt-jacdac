"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[20,5235],{

/***/ 35097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ getDividerUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getDividerUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ __webpack_exports__["Z"] = (dividerClasses);

/***/ }),

/***/ 94659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TextField_TextField; }
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(57579);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js + 1 modules
var Input = __webpack_require__(23981);
// EXTERNAL MODULE: ./node_modules/@mui/material/FilledInput/FilledInput.js + 1 modules
var FilledInput = __webpack_require__(6723);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 2 modules
var OutlinedInput = __webpack_require__(53031);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(27666);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(76446);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 5 modules
var Select = __webpack_require__(97920);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/textFieldClasses.js


function getTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTextField', slot);
}
const textFieldClasses = (0,generateUtilityClasses/* default */.Z)('MuiTextField', ['root']);
/* harmony default export */ var TextField_textFieldClasses = ((/* unused pure expression or super */ null && (textFieldClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/TextField.js


const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];

















const variantComponent = {
  standard: Input/* default */.Z,
  filled: FilledInput/* default */.Z,
  outlined: OutlinedInput/* default */.Z
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = (0,styled/* default */.ZP)(FormControl/* default */.Z, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/react.forwardRef(function TextField(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  const InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }
  const id = (0,useId/* default */.Z)(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/(0,jsx_runtime.jsx)(InputComponent, (0,esm_extends/* default */.Z)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextFieldRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label != null && label !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.Z, (0,esm_extends/* default */.Z)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, (0,esm_extends/* default */.Z)({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.Z, (0,esm_extends/* default */.Z)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TextField_TextField = (TextField);

/***/ }),

/***/ 99458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WN": function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   "gs": function() { return /* binding */ isEC30; },
/* harmony export */   "Xi": function() { return /* binding */ toEC30; },
/* harmony export */   "xD": function() { return /* binding */ generateEC30EnclosureModel; },
/* harmony export */   "Sk": function() { return /* binding */ shapeToEC30; }
/* harmony export */ });
var DEFAULT_OPTIONS={legs:{type:"well"},cover:{}};function isEC30(shape){return typeof shape==="string"&&/^ec30_/.test(shape);}function toEC30(gridWidth,gridHeight,connectors){if(connectors===void 0){connectors="";}return"ec30_"+gridWidth+"x"+gridHeight+"_"+connectors;}function generateEC30EnclosureModel(gridWidth,gridHeight,connectors,depth){if(connectors===void 0){connectors="";}if(depth===void 0){depth=6;}var width=gridWidth*10;var height=gridHeight*10;var c=8;var boxWidth=width+c;var boxHeight=height+c;return{name:width+"x"+height,grid:{width:gridWidth,height:gridHeight,connectors},box:{width:boxWidth,height:boxHeight,depth},rings:[{x:width>>1,y:height>>1},{x:width>>1,y:-(height>>1)},{x:-(width>>1),y:-(height>>1)},{x:-(width>>1),y:height>>1}],components:[{x:-(width>>1)+1.5,y:0,type:"led"},{x:(width>>1)-1.5,y:0,type:"led"},{x:0,y:-(height>>1)+1.5,type:"led"},{x:0,y:(height>>1)-1.5,type:"led"}],connectors:[{x:0,y:-(width>>1)+2,dir:"bottom",type:"jacdac"},{x:0,y:(width>>1)-2,dir:"top",type:"jacdac"},{x:-(width>>1)+2,y:0,dir:"left",type:"jacdac"},{x:(width>>1)-2,y:0,dir:"right",type:"jacdac"}]};}function shapeToEC30(shape,depth){if(depth===void 0){depth=7;}if(typeof shape==="string"){var m=/^ec30_(\d+)x(\d+)_([lrup\d]+)$/.exec(shape);if(m){var w=Number(m[1]);var h=Number(m[2]);var c=m[3];return generateEC30EnclosureModel(w,h,c,depth);}}return undefined;}

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

/***/ 36581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DeviceSpecificationCard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90461);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62070);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16821);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36141);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18763);
/* harmony import */ var _ui_ChipList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1103);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5018);
// tslint:disable-next-line: match-default-export-name no-submodule-imports
function DeviceSpecificationCard(props){var{specification,size,onClick,hideChips,hideServices}=props;var{id,name,version,company,services,hardwareDesign,firmwareSource,storeLink,makeCodeRepo,tags}=specification;var imageUrl=(0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(specification,size);var names=[(tags===null||tags===void 0?void 0:tags.indexOf("kit"))>-1?"kit":undefined,(tags===null||tags===void 0?void 0:tags.indexOf("hub"))>-1?"hub":undefined,(tags===null||tags===void 0?void 0:tags.indexOf("adapter"))>-1?"adapter":undefined].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .uniqueMap */ .EM)(services||[],srv=>srv+"",srv=>srv).map(sc=>{var _serviceSpecification;return (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .humanify */ .lW)((_serviceSpecification=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc))===null||_serviceSpecification===void 0?void 0:_serviceSpecification.shortName.toLowerCase());}))).filter(s=>!!s).join(", ");var to=onClick?undefined:"/devices/"+(0,_jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__/* .identifierToUrlPath */ .uM)(id);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{raised:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .CardActionArea */ .MU,{to:to,onClick:onClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:imageUrl,style:{aspectRatio:"4 / 3",width:"100%"},alt:"photograph of "+specification.name,loading:"lazy"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{variant:"subtitle2",color:"text.secondary"},company),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{gutterBottom:true,variant:"subtitle1",component:"div"},name,version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{sx:{ml:1},variant:"caption",component:"span"},"v",version)),!hideServices&&names&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{component:"div",variant:"subtitle2"},names),!hideChips&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_ChipList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,!storeLink&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"prototype"}),!!(makeCodeRepo!==null&&makeCodeRepo!==void 0&&makeCodeRepo.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"MakeCode",title:"MakeCode extension available."}),firmwareSource&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"firmware code",title:"Firmware source is avaiable."}),hardwareDesign&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"hardware design",title:"Hardware design files available."})))));}

/***/ }),

/***/ 45235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15725);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18763);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56225);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44300);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34743);
/* harmony import */ var _DeviceSpecificationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36581);
/* harmony import */ var _enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99458);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62070);
/* harmony import */ var _ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99834);
function DeviceSpecificationList(props){var{sx,header,query,count,serviceClass,serviceName,company,devices,updates,buyNow,makeCode,hardwareDesign,firmwareSources,transports,tags,ec30,connector,shapes,ids,onDeviceClick,hideChips,hideServices}=props;var specifications=(0,_devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({includeExperimental:!buyNow});var specs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var r=(devices||specifications).slice(0);if(ids!==null&&ids!==void 0&&ids.length)r=r.filter(_ref=>{var{id}=_ref;return ids.indexOf(id)>-1;});if(company){var lc=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .escapeDeviceIdentifier */ .o9)(company);r=r.filter(spec=>(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .escapeDeviceIdentifier */ .o9)(spec.company).startsWith(lc));}if(!isNaN(serviceClass))r=r.filter(spec=>{var _spec$services;return((_spec$services=spec.services)===null||_spec$services===void 0?void 0:_spec$services.indexOf(serviceClass))>-1;});if(serviceName){var si=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__/* .serviceSpecificationFromName */ .kB)(serviceName);if(si)r=r.filter(spec=>{var _spec$services2;return((_spec$services2=spec.services)===null||_spec$services2===void 0?void 0:_spec$services2.indexOf(si.classIdentifier))>-1;});}if(updates)r=r.filter(spec=>spec.repo);if(buyNow!==undefined)r=r.filter(spec=>!!spec.storeLink===buyNow);if(hardwareDesign)r=r.filter(spec=>spec.hardwareDesign);if(connector==="jacdac")r=r.filter(spec=>spec.connector!=="noConnector"&&spec.connector!=="grove"&&spec.connector!=="qwiic");else if(connector==="grove")r=r.filter(spec=>spec.connector==="grove"||spec.connector==="qwiic");else if(connector==="none")r=r.filter(spec=>spec.connector==="noConnector"||spec.connector==="edgeIndependent");if(firmwareSources)r=r.filter(spec=>spec.firmwareSource);if(ec30)r=r.filter(spec=>{var _spec$tags;return (0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(spec.shape)||((_spec$tags=spec.tags)===null||_spec$tags===void 0?void 0:_spec$tags.includes("ec30"));});if(shapes)r=r.filter(spec=>shapes.some(shape=>shape===spec.shape));if(typeof makeCode==="string")r=r.filter(spec=>{var _spec$makeCodeRepo;return(_spec$makeCodeRepo=spec.makeCodeRepo)===null||_spec$makeCodeRepo===void 0?void 0:_spec$makeCodeRepo.some(r=>r.target===makeCode);});else if(makeCode!==undefined)r=r.filter(spec=>{var _spec$makeCodeRepo2;return!!((_spec$makeCodeRepo2=spec.makeCodeRepo)!==null&&_spec$makeCodeRepo2!==void 0&&_spec$makeCodeRepo2.length)===makeCode;});if(transports!==null&&transports!==void 0&&transports.length)r=r.filter(spec=>{var _spec$transport;return transports.indexOf((_spec$transport=spec.transport)===null||_spec$transport===void 0?void 0:_spec$transport.type)>-1;});if(tags!==null&&tags!==void 0&&tags.length)r=r.filter(spec=>tags.every(tag=>{var _spec$tags2;return(_spec$tags2=spec.tags)===null||_spec$tags2===void 0?void 0:_spec$tags2.includes(tag);}));if(query)r=r.filter(spec=>[spec.name,spec.description,spec.company].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.productIdentifiers||[]).map(p=>p.toString(16))),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.services||[]).map(p=>p.toString(16))),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.services||[]).map(srv=>(0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__/* .serviceName */ .HV)(srv)))).some(s=>{var _s$toLowerCase;return(s===null||s===void 0?void 0:(_s$toLowerCase=s.toLowerCase())===null||_s$toLowerCase===void 0?void 0:_s$toLowerCase.indexOf(query.toLowerCase()))>-1;}));r=r.sort((a,b)=>{var _a$tags,_b$tags;// kits first
var c=-(((_a$tags=a.tags)===null||_a$tags===void 0?void 0:_a$tags.indexOf("kit"))>-1?1:0)+(((_b$tags=b.tags)===null||_b$tags===void 0?void 0:_b$tags.indexOf("kit"))>-1?1:0);if(c)return c;// device with transports
c=-(a.transport?1:0)+(b.transport?1:0);if(c)return c;// use ec30 shape
c=-((0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(a.shape)?1:0)+((0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(b.shape)?1:0);if(c)return c;// with connectors first
c=-(a.connector==="noConnector"||a.connector==="edgePassive"||a.connector==="edgeIndependent"?1:0)+(b.connector==="noConnector"||b.connector==="edgePassive"||b.connector==="edgeIndependent"?1:0);if(c)return c;// by order
c=(a.order||50)-(b.order||50);if(c)return c;// by name
return a.name.localeCompare(b.name);});if(count!==undefined)r=r.slice(0,count);return r;},[query,serviceClass,serviceName,count,company,JSON.stringify(devices===null||devices===void 0?void 0:devices.map(d=>d.id)),specifications,updates,buyNow,makeCode,hardwareDesign,firmwareSources,transports===null||transports===void 0?void 0:transports.join(","),tags===null||tags===void 0?void 0:tags.join(","),ec30,connector,shapes===null||shapes===void 0?void 0:shapes.join(","),ids===null||ids===void 0?void 0:ids.join(",")]);var gridBreakpoints=(0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(specs.length);var size=(specs===null||specs===void 0?void 0:specs.length)<6?"catalog":"preview";if(!specs.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{sx:sx,container:true,spacing:3},header&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{title:header}),specs.map(specification=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,Object.assign({key:specification.id,item:true},gridBreakpoints),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{specification:specification,size:size,onClick:onDeviceClick?()=>onDeviceClick(specification):undefined,hideChips:hideChips,hideServices:hideServices}))));}

/***/ }),

/***/ 99834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90461);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
var PREFIX="GridHeader";var classes={hr:PREFIX+"hr",start:PREFIX+"start"};var StyledGrid=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_ref=>{var{theme}=_ref;return{["& ."+classes.hr]:{background:theme.palette.text.disabled,marginBottom:"unset"},["& ."+classes.start]:{width:theme.spacing(2)}};});function GridHeader(props){var{title,count,variant,action}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledGrid,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{container:true,direction:"row",spacing:1,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(classes.hr,classes.start)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true},action&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{component:"span",mr:1},action),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{component:"span",variant:variant||"subtitle1"},title),count!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{component:"span",ml:0.5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{label:count}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:classes.hr}))));}

/***/ }),

/***/ 97804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ device_company_Head; },
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
;// CONCATENATED MODULE: ./src/components/ui/FilterChip.tsx
function FilterChip(props){var{label,value,icon,onClick}=props;var descr=value?"Disable "+label+" filter":"Filter by "+label+" support";return/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:label,"aria-label":descr,title:descr,icon:icon,variant:value?undefined:"outlined",color:value?"secondary":undefined,onClick:onClick});}
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx
var DeviceSpecificationList = __webpack_require__(45235);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(33797);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/components/devices/useDeviceCatalog.ts
var useDeviceCatalog = __webpack_require__(77682);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecificationSelect.tsx
var PREFIX="ServiceSpecificationSelect";var classes={root:PREFIX+"root"};var StyledTextField=(0,styled/* default */.ZP)(TextField/* default */.Z)(()=>({["&."+classes.root]:{minWidth:"18rem"}}));function ServiceSpecificationSelect(props){var{label,serviceClass,setServiceClass,variant,fullWidth,error,hasRegisteredDevice}=props;var labelId=(0,react.useId)();var deviceCatalog=(0,useDeviceCatalog/* default */.Z)();var specs=(0,react.useMemo)(()=>(0,spec/* serviceSpecifications */.Le)().filter(spec=>spec.status!=="deprecated"&&!/^_/.test(spec.shortId)).filter(spec=>{var _deviceCatalog$specif,_deviceCatalog$specif2;return!hasRegisteredDevice||!!((_deviceCatalog$specif=deviceCatalog.specificationsForService(spec.classIdentifier))!==null&&_deviceCatalog$specif!==void 0&&(_deviceCatalog$specif2=_deviceCatalog$specif.filter(spec=>spec.status!=="deprecated"))!==null&&_deviceCatalog$specif2!==void 0&&_deviceCatalog$specif2.length);}),[hasRegisteredDevice]);var handleChange=event=>setServiceClass(parseInt(event.target.value));return/*#__PURE__*/react.createElement(StyledTextField,{id:labelId,className:classes.root,label:label,error:!!error,helperText:error,value:isNaN(serviceClass)?"":serviceClass,select:true,size:"small",variant:variant,fullWidth:fullWidth,onChange:handleChange},/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:"none",value:""},"No service selected"),specs.map(spec=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:spec.classIdentifier,value:spec.classIdentifier},spec.name)));}
;// CONCATENATED MODULE: ./src/components/specification/FilteredDeviceSpecificationList.tsx
var _excluded=["showSearch","showServiceList"];function FilteredDeviceSpecificationList(props){var{showSearch,showServiceList}=props,others=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var bus=(0,useBus/* default */.Z)();var{deviceCatalog}=bus;var{0:serviceClass,1:setServiceClass}=(0,react.useState)(NaN);var handleServiceChanged=value=>setServiceClass(value);var{0:query,1:setQuery}=(0,react.useState)("");var{0:firmwareSources,1:setFirmwareSources}=(0,react.useState)(false);var{0:hardwareDesign,1:setHardwareDesign}=(0,react.useState)(false);var tags=(0,useChange/* default */.Z)(deviceCatalog,_=>(0,utils/* unique */.Tw)((0,utils/* arrayConcatMany */.ue)(_.specifications().map(spec=>spec.tags).filter(tags=>!!tags))));var{0:selectedTags,1:setSelectedTags}=(0,react.useState)([]);var handleSearchQueryChange=e=>(0,react.startTransition)(()=>setQuery(e.target.value));var handleSetFirmwareSources=()=>setFirmwareSources(c=>!c);var handleSetHardwareDesign=()=>setHardwareDesign(c=>!c);var handleSetSelectedTag=tag=>()=>setSelectedTags(ts=>{var i=ts.indexOf(tag);if(i<0)return[].concat((0,toConsumableArray/* default */.Z)(ts),[tag]);else return[].concat((0,toConsumableArray/* default */.Z)(ts.slice(0,i)),(0,toConsumableArray/* default */.Z)(ts.slice(i+1)));});return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Grid/* default */.ZP,{sx:{mb:1},container:true,spacing:1},showSearch&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(TextField/* default */.Z,{tabIndex:0,type:"search",value:query,fullWidth:true,size:"small",label:"Search devices","aria-label":"Search devices",onChange:handleSearchQueryChange})),showServiceList&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(ServiceSpecificationSelect,{label:"Filter by Service",serviceClass:serviceClass,setServiceClass:handleServiceChanged,hasRegisteredDevice:true})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(FilterChip,{label:"firmware code",value:firmwareSources,onClick:handleSetFirmwareSources})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(FilterChip,{label:"hardware design",value:hardwareDesign,onClick:handleSetHardwareDesign})),tags===null||tags===void 0?void 0:tags.filter(t=>t!=="ec30").map(tag=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:tag},/*#__PURE__*/react.createElement(FilterChip,{label:tag,value:selectedTags.indexOf(tag)>-1,onClick:handleSetSelectedTag(tag)})))),/*#__PURE__*/react.createElement(DeviceSpecificationList["default"],Object.assign({},others,{query:query,buyNow:true,connector:"jacdac",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react.createElement(DeviceSpecificationList["default"],Object.assign({},others,{header:"Grove, Qwiic, STEMMA QT connectors",query:query,buyNow:true,connector:"grove",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react.createElement(DeviceSpecificationList["default"],Object.assign({},others,{header:"No PCB Edge connector (does not connect with Jacdac cables)",query:query,buyNow:true,connector:"none",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react.createElement(DeviceSpecificationList["default"],Object.assign({},others,{header:"Prototypes (not available for purchase)",query:query,buyNow:false,firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})));}
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/templates/device-company.tsx




var device_company_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, props);
function Page(props) {
  var {
    company
  } = props.pageContext;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, company), /*#__PURE__*/react.createElement(FilteredDeviceSpecificationList, {
    showServiceList: true,
    showSearch: true,
    company: company
  }), /*#__PURE__*/react.createElement("h2", null, "See Also"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/reference/device-registration/"
  }, "device registration"))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-device-company-tsx-9f78608b69b0f3f83202.js.map