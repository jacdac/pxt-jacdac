"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6178],{

/***/ 86178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PythonProjects; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15785);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5754);
function PythonProjects(props){var _arrayify;var{serviceName,serviceClass,header}=props;var serviceNames=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .unique */ .Tw)([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((serviceName===null||serviceName===void 0?void 0:serviceName.split(/\s*,\s*/gi).filter(s=>!!s))||[]),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(((_arrayify=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(serviceClass))===null||_arrayify===void 0?void 0:_arrayify.map(sc=>{var _serviceSpecification;return(_serviceSpecification=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc))===null||_serviceSpecification===void 0?void 0:_serviceSpecification.shortId;}).filter(s=>!!s))||[])));var query=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("4022945823");var nodes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{// grab the nodes
var nodes=query.allMdx.edges.map(edge=>edge.node);// filter out
if(serviceNames!==null&&serviceNames!==void 0&&serviceNames.length)nodes=nodes.filter(node=>serviceNames.some(n=>{var _node$frontmatter$ser;return((_node$frontmatter$ser=node.frontmatter.services)===null||_node$frontmatter$ser===void 0?void 0:_node$frontmatter$ser.indexOf(n))>-1;}));// order nodes
nodes=nodes.sort((l,r)=>{var _l$frontmatter,_r$frontmatter;var lo=Number((_l$frontmatter=l.frontmatter)===null||_l$frontmatter===void 0?void 0:_l$frontmatter.order)||50;var ro=Number((_r$frontmatter=r.frontmatter)===null||_r$frontmatter===void 0?void 0:_r$frontmatter.order)||50;var c=lo-ro;if(c)return c;return l.fields.slug.localeCompare(r.fields.slug);});return nodes.map(_ref=>{var{fields,frontmatter}=_ref;return{slug:fields.slug,title:frontmatter.title,description:frontmatter.description,services:frontmatter.services};});},[serviceNames.join(",")]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{header:header,nodes:nodes});}

/***/ }),

/***/ 5754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ pageQueryToNodes; },
/* harmony export */   "Z": function() { return /* binding */ PageLinkList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70576);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59334);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90461);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42440);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _ChipList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1103);
var _excluded=["header","nodes"];function PageLinkListItem(props){var{slug,href,title,description,services}=props;var specs=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>services===null||services===void 0?void 0:services.split(/\s*,\s*/gi).map(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB).filter(s=>!!s),[services]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{key:slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{primary:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Link */ .rU,{underline:"hover",color:"textPrimary",rel:"noopener noreferrer",to:slug,href:href},title),secondary:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ChipList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{component:"span",variant:"subtitle1"},description),specs===null||specs===void 0?void 0:specs.map(_ref=>{var{shortId,name}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{component:"span",key:shortId,label:name,size:"small"});}))}));}function pageQueryToNodes(data){var _data$allMdx;var nodes=data===null||data===void 0?void 0:(_data$allMdx=data.allMdx)===null||_data$allMdx===void 0?void 0:_data$allMdx.nodes.map(_ref2=>{var{excerpt,frontmatter,fields}=_ref2;return{slug:fields===null||fields===void 0?void 0:fields.slug,title:frontmatter===null||frontmatter===void 0?void 0:frontmatter.title,description:(frontmatter===null||frontmatter===void 0?void 0:frontmatter.description)||excerpt,order:frontmatter.order,date:frontmatter.date};});return nodes;}function PageLinkList(props){var{header,nodes}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(props,_excluded);var sorted=nodes===null||nodes===void 0?void 0:nodes.sort((l,r)=>{var ld=Date.parse(l===null||l===void 0?void 0:l.date)||0;var rd=Date.parse(r===null||r===void 0?void 0:r.date)||0;var dc=ld-rd;if(dc)return dc;var lo=Number(l===null||l===void 0?void 0:l.order)||50;var ro=Number(r===null||r===void 0?void 0:r.order)||50;var c=lo-ro;if(c)return c;return(l.slug||l.href).localeCompare(r.slug||r.href);});return!!(sorted!==null&&sorted!==void 0&&sorted.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,header,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,rest,sorted===null||sorted===void 0?void 0:sorted.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PageLinkListItem,Object.assign({key:node.slug||node.href},node)))));}

/***/ })

}]);
//# sourceMappingURL=6178-fe1c50d09b5e86cbd95e.js.map