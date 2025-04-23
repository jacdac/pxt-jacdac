"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[350],{

/***/ 70350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VanillaCodeButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91842);
/* harmony import */ var _jacdac_ts_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73354);
function VanillaCodeButton(props){var{title,source}=props;var{js="",html=""}=source;var files=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{// find imports
var i=js.indexOf("\n\n");var imports=js.slice(0,i);var code=js.slice(i+2).trim();var indexTs="\nimport \"milligram\";\nimport { createWebBus, injectDevTools, CONNECTION_STATE, CHANGE } from \"jacdac-ts\";\n"+imports+"\n\nconst connectEl = document.getElementById(\"connectbtn\") as HTMLButtonElement;\nconst devtoolsEl = document.getElementById(\"devtoolsbtn\") as HTMLButtonElement;\nconst logEl = document.getElementById(\"log\") as HTMLPreElement;\nconst log = (msg: any) => {\n  console.log(msg);\n  logEl.innerText += msg + \"\\n\";\n};\n// create WebUSB bus\nconst bus = createWebBus();\n// track connection state and update button\nbus.on(CONNECTION_STATE, () => {\n  connectEl.innerText = bus.connected\n    ? \"connected \uD83C\uDF89\"\n    : bus.disconnected\n    ? \"connect\"\n    : \"\uD83D\uDC40\uD83D\uDC40\uD83D\uDC40\";\n});\n// connect must be triggered by a user interaction\nconnectEl.onclick = async () =>\n  bus.connected ? bus.disconnect() : bus.connect();\n// inject dev tools window\ndevtoolsEl.onclick = () => injectDevTools(bus);\n// we're ready\nlog(\"click connect to start\")\n\n"+code+"\n";var indexHtml="\n<html>\n    <body>\n        <h1>Jacdac "+(title||"demo")+"</h1>\n        <div>\n        <button id=\"connectbtn\">connect</button>\n        <button id=\"devtoolsbtn\" class=\"button-clear\">dev tools</button>\n        </div>    \n\n"+html+"\n        <pre id=\"log\"></pre>\n\n    <footer>\n        <small>\n        Need to learn more about Jacdac?\n        <a target=\"_blank\" href=\"https://aka.ms/jacdac\">Read the docs</a>\n        or\n        <a\n            target=\"_blank\"\n            href=\"https://github.com/jacdac/jacdac/discussions\"\n            >start a discussion</a\n        >.\n        </small>\n    </footer>\n    <script src=\"./index.ts\"></script>\n    </body>\n</html>    \n        ";return{"package.json":{content:{name:"vanilla-jacdac-typescript",version:"0.0.0",description:"Vanilla Jacdac + TypeScript sandbox - https://aka.ms/jacdac",main:"index.html",scripts:{start:"parcel index.html --open",build:"parcel build index.html"},dependencies:{"jacdac-ts":"^"+_jacdac_ts_package_json__WEBPACK_IMPORTED_MODULE_2__/* .version */ .i8,milligram:"^1.4.1","parcel-bundler":"^2.0.0"},devDependencies:{typescript:"^4.4.3"},resolutions:{"@babel/preset-env":"^7.15.8"},keywords:["jacdac","typescript","javascript"],browserslist:["defaults"]}},"index.ts":{content:indexTs},"index.html":{content:indexHtml}};},[title,source,js,html]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{files:files});}

/***/ })

}]);
//# sourceMappingURL=350-be74bafd785bddc114be.js.map