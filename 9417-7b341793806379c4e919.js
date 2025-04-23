"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9417],{

/***/ 9417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GithubRepositoryCard; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__(47249);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GitHub.js
var GitHub = __webpack_require__(25449);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeOpenSnippetButton.tsx
var MakeCodeOpenSnippetButton = __webpack_require__(66749);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeGithubImportLink.tsx
// tslint:disable-next-line: no-submodule-imports
function MakeCodeGithubImportLink(props){var{slug}=props;var importUrl="https://makecode.microbit.org/#pub:github:"+slug;return/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{href:importUrl,target:"blank",underline:"hover",title:"open extension in MakeCode"},/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"h5"},slug));}
;// CONCATENATED MODULE: ./src/components/github/GithubRepositoryCardHeader.tsx
// tslint:disable-next-line: no-submodule-imports
function GithubRepositoryCardHeader(props){var{slug,showRelease,showMakeCodeButton,showMakeCodeImportButton}=props;var{repoPath,name:repoName}=(0,github/* normalizeSlug */.E1)(slug);var{response:release}=(0,github/* useLatestFirmwareRelease */.B5)(showRelease&&slug);return/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:showMakeCodeImportButton?/*#__PURE__*/react.createElement(MakeCodeGithubImportLink,{slug:slug}):/*#__PURE__*/react.createElement(react.Fragment,null,slug),subheader:showRelease&&release&&/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{color:"textSecondary",target:"_blank",to:release.html_url},release.version),avatar:/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",underline:"hover",title:"Open repository in github.com",href:"https://github.com/"+repoPath},/*#__PURE__*/react.createElement(GitHub/* default */.Z,null)),action:showMakeCodeButton&&/*#__PURE__*/react.createElement(MakeCodeOpenSnippetButton["default"],{name:repoName+" with jacdac",slug:slug})});}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/github/GithubRepositoryCard.tsx
// tslint:disable-next-line: no-submodule-imports
var MakeCodeDependencies=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7191).then(__webpack_require__.bind(__webpack_require__, 57191)));function GithubRepositoryCard(props){var{slug,showRelease,showDescription,showDependencies,showMakeCodeButton,showMakeCodeImportButton}=props;var{response:repo}=(0,github/* useRepository */.Ux)(slug);var description=showDescription&&(repo===null||repo===void 0?void 0:repo.description);return/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(GithubRepositoryCardHeader,{slug:slug,showRelease:showRelease,showMakeCodeButton:showMakeCodeButton,showMakeCodeImportButton:showMakeCodeImportButton}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,description&&/*#__PURE__*/react.createElement(Typography/* default */.Z,null,description),showDependencies&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(MakeCodeDependencies,{slug:slug,branch:(repo===null||repo===void 0?void 0:repo.default_branch)||"master"}))));}

/***/ })

}]);
//# sourceMappingURL=9417-7b341793806379c4e919.js.map