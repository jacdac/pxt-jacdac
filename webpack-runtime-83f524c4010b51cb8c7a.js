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
/******/ 			return "" + ({"20":"component---src-templates-device-company-tsx","209":"b88d22df","261":"reactPlayerKaltura","317":"c8f7fe3b0e41be846d5687592cf2018ff6e22687","1386":"a28f8a1fb7076694c65b203245a0c2742a12532f","2121":"reactPlayerFacebook","2546":"reactPlayerStreamable","3133":"component---src-templates-service-tsx","3251":"c3cc36e0c9c8f094c89cbbf17cb2ac10d8d2aaeb","3275":"129d823e91f8ff6054e12fb3111db50d14e3e824","3737":"fb7d5399","3743":"reactPlayerVimeo","4306":"component---cache-caches-gatsby-plugin-offline-app-shell-js","4370":"8bcf92ae44638e2ca2dfb3d674ce6a595c57e9d2","4439":"reactPlayerYouTube","4558":"component---src-pages-start-mdx","4667":"reactPlayerMixcloud","4809":"component---src-pages-index-mdx","4904":"203359b4","5118":"8b93f631c1556883d4d5a75cd7ffa599be44033d","5398":"04a3bacbdb58c6cbd67db46acf95bc30d52dab3a","6011":"reactPlayerFilePlayer","6125":"reactPlayerSoundCloud","6216":"reactPlayerTwitch","6450":"component---src-pages-tools-makecode-sim-tsx","6540":"component---src-templates-service-playground-tsx","7094":"667acbb62b006d6a3a3b1ac7a98a90765f3f5b8f","7596":"reactPlayerDailyMotion","7664":"reactPlayerPreview","8055":"reactPlayerWistia","8323":"component---src-templates-device-tsx","8888":"reactPlayerVidyard","9351":"commons"}[chunkId] || chunkId) + "-" + {"20":"9f78608b69b0f3f83202","195":"95fa8e0d1aad4f8bab2f","209":"570e5e14a6db10d4981a","248":"59405a18fd3f9ef38330","261":"db0c8aa08a9e64a30698","317":"7369e4cb1c3db9eea01f","350":"efd8111ff1ece6f40ea4","560":"992c5833d5dd60898d32","579":"2cdeb8f58c6119e817e9","815":"5d99fa0f01b85a088466","938":"94b4bde31840a23ed794","988":"33316da37027e33b4ae6","1022":"47b3cba66698599bff16","1056":"9605d8e4adfd389d539a","1193":"e018f505ed2f84a1e7cf","1216":"fb1e76bdca0dfb981046","1269":"3ec1a3f5b36c829cc518","1327":"665ff0d361b9b89d0f5a","1366":"08649872a1393128cd51","1386":"d0fc18ff38f8ebb4a3e4","1471":"769141c0d0762bba76b4","1560":"9ff5324b448a1ad97f66","1583":"9311a8b53cb897468709","1639":"198e099e7e9b4e27cc31","1671":"43f75496a0fc972a9c86","1914":"fe4d671821729027dc3b","1918":"030e64e048064940ba43","2121":"0284b0c8fd59f4253241","2125":"26268c77d1f1a6fc4c55","2209":"82f9a47bf3bd4e69e1c3","2217":"2a6a8991c819f07563e7","2269":"0743f183afe574e3b9c5","2440":"1ffd77ce8a12e21d19f6","2532":"79bafbba6e0200c774b4","2546":"2539e3bdbcc9f007954b","2717":"569e39f976e6be27e6e7","2747":"04ea4e2549dfa5ac7b32","2784":"c7f31f3a010aa3fc56ea","2866":"c7be3944e5b2fa07d726","2886":"4eeb7292ac20945e574c","2975":"d1ce8ed9768107338e74","3053":"2f9debd0bd571858d1e9","3111":"8196761e06984517d3ca","3124":"375a60d25aa00921a83c","3133":"99fbbbcd77fc2112ba64","3196":"eebd2fe56d7e4b18fa60","3251":"c8468e686f5ca1825dfd","3275":"1045556367ee9a2c87d9","3389":"4e26e10a1404fc1aa7f9","3511":"462a90d06dba686cacbd","3654":"42cf31d6d817285c6046","3656":"a387458ef408783f2b3e","3664":"d58762136610378422d0","3737":"da164ae991cdfb64929f","3743":"0428f2fb8459356815d5","3818":"65b8c135f374f1a4857f","4014":"a2961df5c08a55fe08f1","4097":"a4cf1377c6c7b76a762f","4149":"8dc85f4db97aea5b49fa","4177":"14ab510235466a7b37f8","4225":"0e04d24d337a05e343f4","4268":"cda2ffbdaad4896ba115","4306":"a0035f18924cf87b019a","4362":"4097678c825c8845ea70","4370":"7a329d6836cd87f18ca2","4391":"90ac359e91448a9d824b","4439":"269a80fff4cc2c807e9f","4490":"d20eee93dca0fa9aeccc","4492":"93f6cb8446632775c863","4537":"96e90d38cf84345d0c2f","4556":"a5fe8c9a2f0dbc68c60a","4558":"8d025194eefeb2d0e781","4667":"df853591b893dab83cfe","4809":"34c1ffbd35f5e9702a26","4881":"7d4f33c170dc4b69c462","4904":"d9e4017e612bf1b46f58","5118":"8411b9efbd41f654f813","5137":"ea4ab351b7c48926cae5","5235":"f949a35b3bc5ef6224e7","5398":"9f7eaa84dfab7d9619e0","5457":"2b7e6d9dea243c3262f0","5913":"21accc6ccf8ed0564d35","5937":"45383c08b7a335307999","5959":"b664e1359831c8c9ea27","6007":"64a3a1be18e0c4283add","6011":"c5a6dc1738313b345a00","6076":"039e242f4f0f9c91151e","6091":"69c98352cd8f14c448a7","6125":"486008c0d96dc7e7ddcb","6178":"fe1c50d09b5e86cbd95e","6192":"6714794092a162aba8bf","6216":"adaad326d9458b64baab","6267":"e745ebf51f9e394fe5f7","6301":"4aade69a76d343d0be65","6310":"360d021d9526619ad744","6329":"a17dfa4ba42286561c2d","6366":"745d5f8f9fd8129832eb","6367":"8bccb9912fc83beb11f8","6370":"6416003f9a42245ce02d","6386":"c02bc6e13c692e3a8395","6450":"9c6f75781e4efe45e0dc","6540":"7ea4b604055930150833","6749":"d53c86c2af4209e8fa0d","6760":"06d714ac8fe199b79867","6775":"83e07f7d32bb054db193","6812":"1d567eb7b77b51176dea","6843":"567b3396871b49591139","6895":"1433b2d70ba60d5212d9","7094":"0aff39a10de4ed264475","7109":"a75896026f23b89fcfc7","7191":"364158fad0e4b5d602f4","7327":"75ba85181bd81a81fafc","7596":"53109027c897c91e93d3","7611":"6240f6d542577937ebff","7664":"7d02b9862dc472dc950e","7770":"76fe69ff149fc0cdfea4","7953":"ab489a4c03698236ef63","8035":"10fd1a69b0387ae66c40","8055":"3959cd655de27d9b0162","8079":"3cde8f403c238b9304a5","8187":"1c61a59dc55d6596a987","8201":"1a66704665455d0b9f2a","8204":"7905157eef39fd4a03d3","8206":"75bf4fa600730693ca57","8253":"8431a132fa44739aea86","8321":"fb90cd32dee43fd6d5c6","8323":"4388841682d75f2a5ac2","8368":"17676e48e18646e180dd","8519":"ec9e04fca3e07f0c0c64","8588":"b43478045c81ebd2b70b","8685":"1add8e0c3c4ec8e3d82a","8794":"fd887c70a3b431c96814","8821":"ec2d0208f626986ee286","8827":"ff96f005bb243a194a2d","8871":"bc77c1c2469d37b3d14b","8888":"553ff43f600b6aae6a4a","9085":"f93e9e5bedc8ce5b213e","9161":"a515cd34c599b0ed62a3","9209":"9da112011fee23a10bff","9253":"e12e2f26d220fedea950","9284":"74891a13a2e159dcb136","9294":"1d057e7ab275e7336cff","9351":"260c800b8c940cba0d7c","9418":"d4084ccf37297322a604","9778":"0e793473a28dfea86c8c","9797":"3be4eda79b9e2f0348ab","9800":"32f1d046adbf352630f9","9858":"399566bf218c96fbe2fd","9900":"40653c4889aac7b6faa1","9927":"02e57781dbcace2aa7f4","9945":"34f0366af31a4fc40d59"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "styles" + "." + "d8a8b9e38931c215680d" + ".css";
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
/******/ 		__webpack_require__.p = "/pxt-jacdac/";
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
//# sourceMappingURL=webpack-runtime-83f524c4010b51cb8c7a.js.map