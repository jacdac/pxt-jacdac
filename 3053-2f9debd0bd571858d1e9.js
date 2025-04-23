"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3053],{

/***/ 43053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5754);
function ErrorList(){var _data$allMdx,_data$allMdx$nodes;var data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("1089213825");var nodes=data===null||data===void 0?void 0:(_data$allMdx=data.allMdx)===null||_data$allMdx===void 0?void 0:(_data$allMdx$nodes=_data$allMdx.nodes)===null||_data$allMdx$nodes===void 0?void 0:_data$allMdx$nodes.filter(node=>{var _node$fields,_node$frontmatter;return((_node$fields=node.fields)===null||_node$fields===void 0?void 0:_node$fields.slug.indexOf("/"))>-1&&((_node$frontmatter=node.frontmatter)===null||_node$frontmatter===void 0?void 0:_node$frontmatter.title);}).map(node=>{var _node$fields2;return{slug:(_node$fields2=node.fields)===null||_node$fields2===void 0?void 0:_node$fields2.slug,title:node.frontmatter.title,order:node.frontmatter.order};});var groups=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .groupBy */ .vM)(nodes,node=>node.slug.split("/",3)[2]||"");var groupNames=Object.keys(groups).filter(g=>!!g);console.debug(groupNames);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,groupNames.map(group=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{key:group},group),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{nodes:groups[group]}))));}

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
//# sourceMappingURL=3053-2f9debd0bd571858d1e9.js.map