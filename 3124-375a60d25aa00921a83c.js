"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3124],{

/***/ 33124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FaqPageList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
function FaqPageList(){var query=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3610498499");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{nodes:(0,_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_2__/* .pageQueryToNodes */ .t)(query)});}

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
//# sourceMappingURL=3124-375a60d25aa00921a83c.js.map