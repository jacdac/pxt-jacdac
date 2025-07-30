/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"0":"36ac01238f33c59ef4bf5e573dc09d41bc1feb4f","20":"component---src-templates-device-company-tsx","209":"b88d22df","261":"reactPlayerKaltura","317":"c8f7fe3b0e41be846d5687592cf2018ff6e22687","2121":"reactPlayerFacebook","2546":"reactPlayerStreamable","3737":"fb7d5399","3743":"reactPlayerVimeo","4306":"component---cache-caches-gatsby-plugin-offline-app-shell-js","4439":"reactPlayerYouTube","4558":"component---src-pages-start-mdx","4667":"reactPlayerMixcloud","4904":"203359b4","5914":"fb2b01b89c8fca081f6d41855fe2a02f68bf048b","6011":"reactPlayerFilePlayer","6125":"reactPlayerSoundCloud","6216":"reactPlayerTwitch","6691":"component---src-pages-index-tsx","7028":"78906ab657ee24bc128d6ef6789587efff615f45","7094":"667acbb62b006d6a3a3b1ac7a98a90765f3f5b8f","7596":"reactPlayerDailyMotion","7664":"reactPlayerPreview","8055":"reactPlayerWistia","8323":"component---src-templates-device-tsx","8888":"reactPlayerVidyard","9351":"commons"}[chunkId] || chunkId) + "-" + {"0":"5d1a354c6028de72a307","20":"6b1a75f946d5c101f0b0","195":"95fa8e0d1aad4f8bab2f","209":"570e5e14a6db10d4981a","248":"b50917a5c069d1b6f14f","261":"db0c8aa08a9e64a30698","317":"19c0506526bb2e0730b3","350":"0cb77cce82049eb17190","560":"0508cbd97e5e9515d6d6","579":"2cdeb8f58c6119e817e9","815":"10a2687cae9b460af23a","938":"a510f388ea8d42c84d87","988":"33316da37027e33b4ae6","1022":"47b3cba66698599bff16","1056":"9605d8e4adfd389d539a","1193":"e018f505ed2f84a1e7cf","1216":"fb1e76bdca0dfb981046","1269":"3ec1a3f5b36c829cc518","1327":"da04c5f41b4ce3a14007","1366":"08649872a1393128cd51","1471":"b87dd8bcf90fbe52454d","1560":"9ff5324b448a1ad97f66","1583":"9311a8b53cb897468709","1671":"43f75496a0fc972a9c86","1914":"fe4d671821729027dc3b","1918":"030e64e048064940ba43","2121":"0284b0c8fd59f4253241","2125":"2397b9bfb14a6e78bf66","2209":"65f720925e68da29a40d","2217":"b1a085f266b8d5468733","2269":"7add96ce396c4c693e7d","2406":"169ec6a75523e9524528","2440":"1ffd77ce8a12e21d19f6","2532":"79bafbba6e0200c774b4","2546":"2539e3bdbcc9f007954b","2717":"569e39f976e6be27e6e7","2747":"04ea4e2549dfa5ac7b32","2784":"c7f31f3a010aa3fc56ea","2866":"c7be3944e5b2fa07d726","2886":"4eeb7292ac20945e574c","2975":"75e4d1ce374d1affbc82","3053":"85d9ff69494c99aa537c","3111":"8196761e06984517d3ca","3124":"8b24bfbdf8c793e96a75","3196":"4c3926f1f81f43ddbcea","3389":"4e26e10a1404fc1aa7f9","3511":"fa35f1568ec69b6a1516","3654":"f0384728318688504cca","3656":"a387458ef408783f2b3e","3664":"d58762136610378422d0","3737":"da164ae991cdfb64929f","3743":"0428f2fb8459356815d5","3818":"dccb51f9f7389bb500ee","4014":"3e563b7c0a0daebec445","4097":"a4cf1377c6c7b76a762f","4149":"8dc85f4db97aea5b49fa","4177":"14ab510235466a7b37f8","4225":"2bc33a40cfe85309a2cc","4268":"b1db4338e63c0fb0299b","4306":"a0035f18924cf87b019a","4391":"ca1d04c8aedc0bb1fcc7","4439":"269a80fff4cc2c807e9f","4490":"d20eee93dca0fa9aeccc","4492":"93f6cb8446632775c863","4537":"6f6448a645025325d2ba","4556":"a5fe8c9a2f0dbc68c60a","4558":"8d025194eefeb2d0e781","4667":"df853591b893dab83cfe","4881":"465ba6cb2b5cd5672183","4904":"d9e4017e612bf1b46f58","4990":"8f53c49324a5e35120bb","5137":"ea4ab351b7c48926cae5","5235":"a820b80a75209ea84856","5457":"2b7e6d9dea243c3262f0","5913":"a97ca4dd1881fa0359a4","5914":"86f0e23f08aa1a0aaa1c","5937":"ea84af02d8df8ff4ee48","5959":"d093402a4581544e7e61","6007":"e3b59627201a215e36ac","6011":"c5a6dc1738313b345a00","6076":"039e242f4f0f9c91151e","6091":"69c98352cd8f14c448a7","6125":"486008c0d96dc7e7ddcb","6178":"ced79bd976fa6511c64b","6192":"6714794092a162aba8bf","6216":"adaad326d9458b64baab","6267":"c330aa7ff7c0ffd06e2c","6301":"4aade69a76d343d0be65","6310":"360d021d9526619ad744","6329":"a17dfa4ba42286561c2d","6367":"8bccb9912fc83beb11f8","6370":"6416003f9a42245ce02d","6386":"c02bc6e13c692e3a8395","6691":"8e5c88fb265feb49bd10","6749":"31668abd35483eab1811","6760":"06d714ac8fe199b79867","6775":"4dd708c881e69246a3a8","6812":"1d567eb7b77b51176dea","6843":"567b3396871b49591139","6895":"1433b2d70ba60d5212d9","7028":"53cb1757168e6be09ab6","7094":"0aff39a10de4ed264475","7109":"a75896026f23b89fcfc7","7191":"364158fad0e4b5d602f4","7327":"75ba85181bd81a81fafc","7596":"53109027c897c91e93d3","7611":"1ff064b709f910ff241f","7664":"7d02b9862dc472dc950e","7770":"76fe69ff149fc0cdfea4","7953":"c6913d35feccb9c7cf48","8035":"4dd9b8bd9cbbf152953a","8055":"3959cd655de27d9b0162","8079":"3cde8f403c238b9304a5","8187":"1c61a59dc55d6596a987","8201":"1a66704665455d0b9f2a","8204":"7905157eef39fd4a03d3","8206":"75bf4fa600730693ca57","8253":"7ad4ffa16f8751ac86e1","8321":"fb90cd32dee43fd6d5c6","8323":"49206ad9fbf1fe97965b","8368":"742a851dfbb3819cbe73","8519":"ec9e04fca3e07f0c0c64","8588":"b43478045c81ebd2b70b","8685":"1add8e0c3c4ec8e3d82a","8794":"36d2b6cc0114f769a137","8821":"ec2d0208f626986ee286","8827":"ff96f005bb243a194a2d","8871":"bc77c1c2469d37b3d14b","8888":"553ff43f600b6aae6a4a","9085":"f93e9e5bedc8ce5b213e","9161":"2f5fe7c2b932beaf6c09","9209":"7df955009e06b7ca05c1","9253":"e12f37e73ee133f958b3","9284":"74891a13a2e159dcb136","9287":"cd20cac9b12a84404727","9294":"1d057e7ab275e7336cff","9351":"75660deae978abd63a73","9418":"d4084ccf37297322a604","9778":"0e793473a28dfea86c8c","9797":"3be4eda79b9e2f0348ab","9800":"32f1d046adbf352630f9","9858":"399566bf218c96fbe2fd","9900":"0166dea37cac5311694d","9945":"34f0366af31a4fc40d59"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "styles" + "." + "926e9654f55bdc522ebb" + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "jacdac-docs:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/simx/jacdac/pxt-jacdac/-/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			6658: 0,
/******/ 			532: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(532|6658)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=webpack-runtime-5162d4c3aeab6ce672a6.js.map