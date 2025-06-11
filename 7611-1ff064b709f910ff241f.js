(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7611],{

/***/ 18037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');
exports.Z = _default;

/***/ }),

/***/ 56408:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DialogContentText_DialogContentText; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js


function getDialogContentTextUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiDialogContentText', slot);
}
const dialogContentTextClasses = (0,generateUtilityClasses/* default */.Z)('MuiDialogContentText', ['root']);
/* harmony default export */ var DialogContentText_dialogContentTextClasses = ((/* unused pure expression or super */ null && (dialogContentTextClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContentText/DialogContentText.js


const _excluded = ["children", "className"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getDialogContentTextUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const DialogContentTextRoot = (0,styled/* default */.ZP)(Typography/* default */.Z, {
  shouldForwardProp: prop => (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes',
  name: 'MuiDialogContentText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const DialogContentText = /*#__PURE__*/react.forwardRef(function DialogContentText(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiDialogContentText'
  });
  const {
      className
    } = props,
    ownerState = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContentTextRoot, (0,esm_extends/* default */.Z)({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx_m/* default */.Z)(classes.root, className)
  }, props, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var DialogContentText_DialogContentText = (DialogContentText);

/***/ }),

/***/ 85186:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var register = __webpack_require__(23698)
var addHook = __webpack_require__(92505)
var removeHook = __webpack_require__(26417)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 92505:
/***/ (function(module) {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ 23698:
/***/ (function(module) {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ 26417:
/***/ (function(module) {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ 97611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GithubPullRequestButton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/universal-user-agent/dist-web/index.js
function getUserAgent() {
    if (typeof navigator === "object" && "userAgent" in navigator) {
        return navigator.userAgent;
    }
    if (typeof process === "object" && "version" in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    }
    return "<environment undetectable>";
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/before-after-hook/index.js
var before_after_hook = __webpack_require__(85186);
;// CONCATENATED MODULE: ./node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}



;// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/dist-web/index.js



function lowercaseKeys(object) {
    if (!object) {
        return {};
    }
    return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}

function mergeDeep(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key) => {
        if (isPlainObject(options[key])) {
            if (!(key in defaults))
                Object.assign(result, { [key]: options[key] });
            else
                result[key] = mergeDeep(defaults[key], options[key]);
        }
        else {
            Object.assign(result, { [key]: options[key] });
        }
    });
    return result;
}

function removeUndefinedProperties(obj) {
    for (const key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

function merge(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? { method, url } : { url: method }, options);
    }
    else {
        options = Object.assign({}, route);
    }
    // lowercase header names before merging with defaults to avoid duplicates
    options.headers = lowercaseKeys(options.headers);
    // remove properties with undefined values before merging
    removeUndefinedProperties(options);
    removeUndefinedProperties(options.headers);
    const mergedOptions = mergeDeep(defaults || {}, options);
    // mediaType.previews arrays are merged, instead of overwritten
    if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
            .filter((preview) => !mergedOptions.mediaType.previews.includes(preview))
            .concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
    return mergedOptions;
}

function addQueryParameters(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) {
        return url;
    }
    return (url +
        separator +
        names
            .map((name) => {
            if (name === "q") {
                return ("q=" + parameters.q.split("+").map(encodeURIComponent).join("+"));
            }
            return `${name}=${encodeURIComponent(parameters[name])}`;
        })
            .join("&"));
}

const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
    const matches = url.match(urlVariableRegex);
    if (!matches) {
        return [];
    }
    return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
    return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
        obj[key] = object[key];
        return obj;
    }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* istanbul ignore file */
function encodeReserved(str) {
    return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
        return part;
    })
        .join("");
}
function encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
function encodeValue(operator, value, key) {
    value =
        operator === "+" || operator === "#"
            ? encodeReserved(value)
            : encodeUnreserved(value);
    if (key) {
        return encodeUnreserved(key) + "=" + value;
    }
    else {
        return value;
    }
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if (isDefined(value) && value !== "") {
        if (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") {
                value = value.substring(0, parseInt(modifier, 10));
            }
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
        }
        else {
            if (modifier === "*") {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            }
            else {
                const tmp = [];
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeUnreserved(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }
                if (isKeyOperator(operator)) {
                    result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                }
                else if (tmp.length !== 0) {
                    result.push(tmp.join(","));
                }
            }
        }
    }
    else {
        if (operator === ";") {
            if (isDefined(value)) {
                result.push(encodeUnreserved(key));
            }
        }
        else if (value === "" && (operator === "&" || operator === "?")) {
            result.push(encodeUnreserved(key) + "=");
        }
        else if (value === "") {
            result.push("");
        }
    }
    return result;
}
function parseUrl(template) {
    return {
        expand: expand.bind(null, template),
    };
}
function expand(template, context) {
    var operators = ["+", "#", ".", "/", ";", "?", "&"];
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") {
                    separator = "&";
                }
                else if (operator !== "#") {
                    separator = operator;
                }
                return (values.length !== 0 ? operator : "") + values.join(separator);
            }
            else {
                return values.join(",");
            }
        }
        else {
            return encodeReserved(literal);
        }
    });
}

function parse(options) {
    // https://fetch.spec.whatwg.org/#methods
    let method = options.method.toUpperCase();
    // replace :varname with {varname} to make it RFC 6570 compatible
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = omit(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType",
    ]);
    // extract variable names from URL to calculate remaining variables later
    const urlVariableNames = extractUrlVariableNames(url);
    url = parseUrl(url).expand(parameters);
    if (!/^http/.test(url)) {
        url = options.baseUrl + url;
    }
    const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat("baseUrl");
    const remainingParameters = omit(parameters, omittedParameters);
    const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequest) {
        if (options.mediaType.format) {
            // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
            headers.accept = headers.accept
                .split(/,/)
                .map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`))
                .join(",");
        }
        if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
            headers.accept = previewsFromAcceptHeader
                .concat(options.mediaType.previews)
                .map((preview) => {
                const format = options.mediaType.format
                    ? `.${options.mediaType.format}`
                    : "+json";
                return `application/vnd.github.${preview}-preview${format}`;
            })
                .join(",");
        }
    }
    // for GET/HEAD requests, set URL query parameters from remaining parameters
    // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
    if (["GET", "HEAD"].includes(method)) {
        url = addQueryParameters(url, remainingParameters);
    }
    else {
        if ("data" in remainingParameters) {
            body = remainingParameters.data;
        }
        else {
            if (Object.keys(remainingParameters).length) {
                body = remainingParameters;
            }
            else {
                headers["content-length"] = 0;
            }
        }
    }
    // default content-type for JSON if body is set
    if (!headers["content-type"] && typeof body !== "undefined") {
        headers["content-type"] = "application/json; charset=utf-8";
    }
    // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
    // fetch does not allow to set `content-length` header, but we can set body to an empty string
    if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
        body = "";
    }
    // Only return body/request keys if present
    return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}

function endpointWithDefaults(defaults, route, options) {
    return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
    const DEFAULTS = merge(oldDefaults, newDefaults);
    const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse,
    });
}

const VERSION = "7.0.1";

const userAgent = `octokit-endpoint.js/${VERSION} ${getUserAgent()}`;
// DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.
const DEFAULTS = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": userAgent,
    },
    mediaType: {
        format: "",
        previews: [],
    },
};

const endpoint = withDefaults(null, DEFAULTS);


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__(83300);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/deprecation/dist-web/index.js
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}



// EXTERNAL MODULE: ./node_modules/once/once.js
var once = __webpack_require__(30778);
var once_default = /*#__PURE__*/__webpack_require__.n(once);
;// CONCATENATED MODULE: ./node_modules/@octokit/request-error/dist-web/index.js



const logOnceCode = once_default()((deprecation) => console.warn(deprecation));
const logOnceHeaders = once_default()((deprecation) => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */
class RequestError extends Error {
    constructor(message, statusCode, options) {
        super(message);
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.name = "HttpError";
        this.status = statusCode;
        let headers;
        if ("headers" in options && typeof options.headers !== "undefined") {
            headers = options.headers;
        }
        if ("response" in options) {
            this.response = options.response;
            headers = options.response.headers;
        }
        // redact request credentials without mutating original request options
        const requestCopy = Object.assign({}, options.request);
        if (options.request.headers.authorization) {
            requestCopy.headers = Object.assign({}, options.request.headers, {
                authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]"),
            });
        }
        requestCopy.url = requestCopy.url
            // client_id & client_secret can be passed as URL query parameters to increase rate limit
            // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
            .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
            // OAuth tokens can be passed as URL query parameters, although it is not recommended
            // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
            .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = requestCopy;
        // deprecations
        Object.defineProperty(this, "code", {
            get() {
                logOnceCode(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            },
        });
        Object.defineProperty(this, "headers", {
            get() {
                logOnceHeaders(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
                return headers || {};
            },
        });
    }
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@octokit/request/dist-web/index.js






const dist_web_VERSION = "6.2.1";

function getBufferResponse(response) {
    return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
    const log = requestOptions.request && requestOptions.request.log
        ? requestOptions.request.log
        : console;
    if (isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)) {
        requestOptions.body = JSON.stringify(requestOptions.body);
    }
    let headers = {};
    let status;
    let url;
    const fetch = (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */ (browser_default());
    return fetch(requestOptions.url, Object.assign({
        method: requestOptions.method,
        body: requestOptions.body,
        headers: requestOptions.headers,
        redirect: requestOptions.redirect,
    }, 
    // `requestOptions.request.agent` type is incompatible
    // see https://github.com/octokit/types.ts/pull/264
    requestOptions.request))
        .then(async (response) => {
        url = response.url;
        status = response.status;
        for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1];
        }
        if ("deprecation" in headers) {
            const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
            const deprecationLink = matches && matches.pop();
            log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
        }
        if (status === 204 || status === 205) {
            return;
        }
        // GitHub API returns 200 for HEAD requests
        if (requestOptions.method === "HEAD") {
            if (status < 400) {
                return;
            }
            throw new RequestError(response.statusText, status, {
                response: {
                    url,
                    status,
                    headers,
                    data: undefined,
                },
                request: requestOptions,
            });
        }
        if (status === 304) {
            throw new RequestError("Not modified", status, {
                response: {
                    url,
                    status,
                    headers,
                    data: await getResponseData(response),
                },
                request: requestOptions,
            });
        }
        if (status >= 400) {
            const data = await getResponseData(response);
            const error = new RequestError(toErrorMessage(data), status, {
                response: {
                    url,
                    status,
                    headers,
                    data,
                },
                request: requestOptions,
            });
            throw error;
        }
        return getResponseData(response);
    })
        .then((data) => {
        return {
            status,
            url,
            headers,
            data,
        };
    })
        .catch((error) => {
        if (error instanceof RequestError)
            throw error;
        else if (error.name === "AbortError")
            throw error;
        throw new RequestError(error.message, 500, {
            request: requestOptions,
        });
    });
}
async function getResponseData(response) {
    const contentType = response.headers.get("content-type");
    if (/application\/json/.test(contentType)) {
        return response.json();
    }
    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text();
    }
    return getBufferResponse(response);
}
function toErrorMessage(data) {
    if (typeof data === "string")
        return data;
    // istanbul ignore else - just in case
    if ("message" in data) {
        if (Array.isArray(data.errors)) {
            return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
        }
        return data.message;
    }
    // istanbul ignore next - just in case
    return `Unknown error: ${JSON.stringify(data)}`;
}

function dist_web_withDefaults(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) {
            return fetchWrapper(endpoint.parse(endpointOptions));
        }
        const request = (route, parameters) => {
            return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
        };
        Object.assign(request, {
            endpoint,
            defaults: dist_web_withDefaults.bind(null, endpoint),
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint,
        defaults: dist_web_withDefaults.bind(null, endpoint),
    });
}

const request = dist_web_withDefaults(endpoint, {
    headers: {
        "user-agent": `octokit-request.js/${dist_web_VERSION} ${getUserAgent()}`,
    },
});


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@octokit/graphql/dist-web/index.js



const graphql_dist_web_VERSION = "5.0.1";

function _buildMessageForResponseErrors(data) {
    return (`Request failed due to following response errors:\n` +
        data.errors.map((e) => ` - ${e.message}`).join("\n"));
}
class GraphqlResponseError extends Error {
    constructor(request, headers, response) {
        super(_buildMessageForResponseErrors(response));
        this.request = request;
        this.headers = headers;
        this.response = response;
        this.name = "GraphqlResponseError";
        // Expose the errors and response data in their shorthand properties.
        this.errors = response.errors;
        this.data = response.data;
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

const NON_VARIABLE_OPTIONS = [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "query",
    "mediaType",
];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
    if (options) {
        if (typeof query === "string" && "query" in options) {
            return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
        }
        for (const key in options) {
            if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
                continue;
            return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
        }
    }
    const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
    const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
        if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key];
            return result;
        }
        if (!result.variables) {
            result.variables = {};
        }
        result.variables[key] = parsedOptions[key];
        return result;
    }, {});
    // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
    // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
    const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;
    if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
        requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
    }
    return request(requestOptions).then((response) => {
        if (response.data.errors) {
            const headers = {};
            for (const key of Object.keys(response.headers)) {
                headers[key] = response.headers[key];
            }
            throw new GraphqlResponseError(requestOptions, headers, response.data);
        }
        return response.data.data;
    });
}

function graphql_dist_web_withDefaults(request$1, newDefaults) {
    const newRequest = request$1.defaults(newDefaults);
    const newApi = (query, options) => {
        return graphql(newRequest, query, options);
    };
    return Object.assign(newApi, {
        defaults: graphql_dist_web_withDefaults.bind(null, newRequest),
        endpoint: request.endpoint,
    });
}

const graphql$1 = graphql_dist_web_withDefaults(request, {
    headers: {
        "user-agent": `octokit-graphql.js/${graphql_dist_web_VERSION} ${getUserAgent()}`,
    },
    method: "POST",
    url: "/graphql",
});
function withCustomRequest(customRequest) {
    return graphql_dist_web_withDefaults(customRequest, {
        method: "POST",
        url: "/graphql",
    });
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@octokit/auth-token/dist-web/index.js
const REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const REGEX_IS_INSTALLATION = /^ghs_/;
const REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
    const isApp = token.split(/\./).length === 3;
    const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) ||
        REGEX_IS_INSTALLATION.test(token);
    const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
    const tokenType = isApp
        ? "app"
        : isInstallation
            ? "installation"
            : isUserToServer
                ? "user-to-server"
                : "oauth";
    return {
        type: "token",
        token: token,
        tokenType,
    };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
    if (token.split(/\./).length === 3) {
        return `bearer ${token}`;
    }
    return `token ${token}`;
}

async function hook(token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
    if (!token) {
        throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    }
    if (typeof token !== "string") {
        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    }
    token = token.replace(/^(token|bearer) +/i, "");
    return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token),
    });
};


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@octokit/core/dist-web/index.js






const core_dist_web_VERSION = "4.2.0";

class Octokit {
    constructor(options = {}) {
        const hook = new before_after_hook.Collection();
        const requestDefaults = {
            baseUrl: request.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, options.request, {
                // @ts-ignore internal usage only, no need to type
                hook: hook.bind(null, "request"),
            }),
            mediaType: {
                previews: [],
                format: "",
            },
        };
        // prepend default user agent with `options.userAgent` if set
        requestDefaults.headers["user-agent"] = [
            options.userAgent,
            `octokit-core.js/${core_dist_web_VERSION} ${getUserAgent()}`,
        ]
            .filter(Boolean)
            .join(" ");
        if (options.baseUrl) {
            requestDefaults.baseUrl = options.baseUrl;
        }
        if (options.previews) {
            requestDefaults.mediaType.previews = options.previews;
        }
        if (options.timeZone) {
            requestDefaults.headers["time-zone"] = options.timeZone;
        }
        this.request = request.defaults(requestDefaults);
        this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
        this.log = Object.assign({
            debug: () => { },
            info: () => { },
            warn: console.warn.bind(console),
            error: console.error.bind(console),
        }, options.log);
        this.hook = hook;
        // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.
        if (!options.authStrategy) {
            if (!options.auth) {
                // (1)
                this.auth = async () => ({
                    type: "unauthenticated",
                });
            }
            else {
                // (2)
                const auth = createTokenAuth(options.auth);
                // @ts-ignore  ¯\_(ツ)_/¯
                hook.wrap("request", auth.hook);
                this.auth = auth;
            }
        }
        else {
            const { authStrategy, ...otherOptions } = options;
            const auth = authStrategy(Object.assign({
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions,
            }, options.auth));
            // @ts-ignore  ¯\_(ツ)_/¯
            hook.wrap("request", auth.hook);
            this.auth = auth;
        }
        // apply plugins
        // https://stackoverflow.com/a/16345172
        const classConstructor = this.constructor;
        classConstructor.plugins.forEach((plugin) => {
            Object.assign(this, plugin(this, options));
        });
    }
    static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
            constructor(...args) {
                const options = args[0] || {};
                if (typeof defaults === "function") {
                    super(defaults(options));
                    return;
                }
                super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent
                    ? {
                        userAgent: `${options.userAgent} ${defaults.userAgent}`,
                    }
                    : null));
            }
        };
        return OctokitWithDefaults;
    }
    /**
     * Attach a plugin (or many) to your Octokit instance.
     *
     * @example
     * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
     */
    static plugin(...newPlugins) {
        var _a;
        const currentPlugins = this.plugins;
        const NewOctokit = (_a = class extends this {
            },
            _a.plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin))),
            _a);
        return NewOctokit;
    }
}
Octokit.VERSION = core_dist_web_VERSION;
Octokit.plugins = [];


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/octokit-plugin-create-pull-request/pkg/dist-web/index.js
async function valueToTreeObject(octokit, owner, repo, path, value) {
    let mode = "100644";
    if (value !== null && typeof value !== "string") {
        mode = value.mode || mode;
    }
    // Text files can be changed through the .content key
    if (typeof value === "string") {
        return {
            path,
            mode: mode,
            content: value,
        };
    }
    // Binary files need to be created first using the git blob API,
    // then changed by referencing in the .sha key
    const { data } = await octokit.request("POST /repos/{owner}/{repo}/git/blobs", {
        owner,
        repo,
        ...value,
    });
    const blobSha = data.sha;
    return {
        path,
        mode: mode,
        sha: blobSha,
    };
}

async function createTree(state, changes) {
    const { octokit, owner, repo, fork, latestCommitSha, latestCommitTreeSha, } = state;
    const tree = (await Promise.all(Object.keys(changes.files).map(async (path) => {
        const value = changes.files[path];
        if (value === null) {
            // Deleting a non-existent file from a tree leads to an "GitRPC::BadObjectState" error,
            // so we only attempt to delete the file if it exists.
            try {
                // https://developer.github.com/v3/repos/contents/#get-contents
                await octokit.request("HEAD /repos/{owner}/{repo}/contents/:path", {
                    owner: fork,
                    repo,
                    ref: latestCommitSha,
                    path,
                });
                return {
                    path,
                    mode: "100644",
                    sha: null,
                };
            }
            catch (error) {
                return;
            }
        }
        // When passed a function, retrieve the content of the file, pass it
        // to the function, then return the result
        if (typeof value === "function") {
            let result;
            try {
                const { data: file } = await octokit.request("GET /repos/{owner}/{repo}/contents/:path", {
                    owner: fork,
                    repo,
                    ref: latestCommitSha,
                    path,
                });
                result = await value(Object.assign(file, { exists: true }));
            }
            catch (error) {
                // istanbul ignore if
                if (error.status !== 404)
                    throw error;
                // @ts-ignore
                result = await value({ exists: false });
            }
            if (result === null || typeof result === "undefined")
                return;
            return valueToTreeObject(octokit, fork, repo, path, result);
        }
        return valueToTreeObject(octokit, fork, repo, path, value);
    }))).filter(Boolean);
    if (tree.length === 0) {
        return null;
    }
    // https://developer.github.com/v3/git/trees/#create-a-tree
    const { data: { sha: newTreeSha }, } = await octokit.request("POST /repos/{owner}/{repo}/git/trees", {
        owner: fork,
        repo,
        base_tree: latestCommitTreeSha,
        tree,
    });
    return newTreeSha;
}

async function createCommit(state, treeCreated, changes) {
    const { octokit, repo, fork, latestCommitSha } = state;
    const message = treeCreated
        ? changes.commit
        : typeof changes.emptyCommit === "string"
            ? changes.emptyCommit
            : changes.commit;
    // https://developer.github.com/v3/git/commits/#create-a-commit
    const { data: latestCommit } = await octokit.request("POST /repos/{owner}/{repo}/git/commits", {
        owner: fork,
        repo,
        message,
        tree: state.latestCommitTreeSha,
        parents: [latestCommitSha],
    });
    return latestCommit.sha;
}

async function composeCreatePullRequest(octokit, { owner, repo, title, body, base, head, createWhenEmpty, changes: changesOption, draft = false, forceFork = false, }) {
    const changes = Array.isArray(changesOption)
        ? changesOption
        : [changesOption];
    if (changes.length === 0)
        throw new Error('[octokit-plugin-create-pull-request] "changes" cannot be an empty array');
    const state = { octokit, owner, repo };
    // https://developer.github.com/v3/repos/#get-a-repository
    const { data: repository, headers } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner,
        repo,
    });
    const isUser = !!headers["x-oauth-scopes"];
    if (!repository.permissions) {
        throw new Error("[octokit-plugin-create-pull-request] Missing authentication");
    }
    if (!base) {
        base = repository.default_branch;
    }
    state.fork = owner;
    if (forceFork || (isUser && !repository.permissions.push)) {
        // https://developer.github.com/v3/users/#get-the-authenticated-user
        const user = await octokit.request("GET /user");
        // https://developer.github.com/v3/repos/forks/#list-forks
        const forks = await octokit.request("GET /repos/{owner}/{repo}/forks", {
            owner,
            repo,
        });
        const hasFork = forks.data.find(
        /* istanbul ignore next - fork owner can be null, but we don't test that */
        (fork) => fork.owner && fork.owner.login === user.data.login);
        if (!hasFork) {
            // https://developer.github.com/v3/repos/forks/#create-a-fork
            await octokit.request("POST /repos/{owner}/{repo}/forks", {
                owner,
                repo,
            });
        }
        state.fork = user.data.login;
    }
    // https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
    const { data: [latestCommit], } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: state.fork,
        repo,
        sha: base,
        per_page: 1,
    });
    state.latestCommitSha = latestCommit.sha;
    state.latestCommitTreeSha = latestCommit.commit.tree.sha;
    const baseCommitTreeSha = latestCommit.commit.tree.sha;
    for (const change of changes) {
        let treeCreated = false;
        if (change.files && Object.keys(change.files).length) {
            const latestCommitTreeSha = await createTree(state, change);
            if (latestCommitTreeSha) {
                state.latestCommitTreeSha = latestCommitTreeSha;
                treeCreated = true;
            }
        }
        if (treeCreated || change.emptyCommit !== false) {
            state.latestCommitSha = await createCommit(state, treeCreated, change);
        }
    }
    const hasNoChanges = baseCommitTreeSha === state.latestCommitTreeSha;
    if (hasNoChanges && createWhenEmpty === false) {
        return null;
    }
    // https://developer.github.com/v3/git/refs/#create-a-reference
    await octokit.request("POST /repos/{owner}/{repo}/git/refs", {
        owner: state.fork,
        repo,
        sha: state.latestCommitSha,
        ref: `refs/heads/${head}`,
    });
    // https://developer.github.com/v3/pulls/#create-a-pull-request
    return await octokit.request("POST /repos/{owner}/{repo}/pulls", {
        owner,
        repo,
        head: `${state.fork}:${head}`,
        base,
        title,
        body,
        draft,
    });
}

const pkg_dist_web_VERSION = "0.0.0-development";

/**
 * @param octokit Octokit instance
 */
function createPullRequest(octokit) {
    return {
        createPullRequest: composeCreatePullRequest.bind(null, octokit),
    };
}
createPullRequest.VERSION = pkg_dist_web_VERSION;


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(93155);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(77750);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(56408);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(88979);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GitHub.js
var GitHub = __webpack_require__(25449);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(60763);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(1820);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(85092);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionActions/accordionActionsClasses.js


function getAccordionActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordionActions', slot);
}
const accordionActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordionActions', ['root', 'spacing']);
/* harmony default export */ var AccordionActions_accordionActionsClasses = ((/* unused pure expression or super */ null && (accordionActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionActions/AccordionActions.js


const _excluded = ["className", "disableSpacing"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionActionsUtilityClass, classes);
};
const AccordionActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionActions',
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
  padding: 8,
  justifyContent: 'flex-end'
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const AccordionActions = /*#__PURE__*/react.forwardRef(function AccordionActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordionActions'
  });
  const {
      className,
      disableSpacing = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionActions_AccordionActions = (AccordionActions);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(23508);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(18037);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
;// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx
// tslint:disable-next-line: match-default-export-name no-submodule-imports
// tslint:disable-next-line: match-default-export-name no-submodule-imports
function ApiKeyAccordion(props){var{validateKey,title,children,defaultExpanded,apiKey,setApiKey,inputType}=props;var apiKeyId=(0,react.useId)();var{0:key,1:setKey}=(0,react.useState)("");var{0:expanded,1:setExpanded}=(0,react.useState)(!!(!apiKey||defaultExpanded));var{0:validated,1:setValidated}=(0,react.useState)(false);var{enqueueSnackbar}=(0,useSnackbar/* default */.Z)();(0,useEffectAsync/* default */.Z)(/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){if(!apiKey){setValidated(false);}else{var{status}=validateKey?yield validateKey(apiKey):{status:200};if(!mounted())return;if(status===200){setValidated(true);setExpanded(false);}else{setValidated(false);if(status===403)setApiKey(undefined);}}});return function(_x){return _ref.apply(this,arguments);};}(),[apiKey]);var handleApiChange=event=>{setKey(event.target.value);};var handleSave=()=>{setApiKey(key);setKey("");enqueueSnackbar("key saved...");};var handleReset=()=>{setApiKey("");enqueueSnackbar("key cleared...");};var handleExpanded=()=>{setExpanded(!expanded);};return/*#__PURE__*/react.createElement(Accordion/* default */.Z,{expanded:expanded,onChange:handleExpanded},/*#__PURE__*/react.createElement(AccordionSummary/* default */.Z,{expandIcon:/*#__PURE__*/react.createElement(ExpandMore/* default */.Z,null)},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body1"},(title||"API key")+" Configuration"),validated&&/*#__PURE__*/react.createElement(Box/* default */.Z,{ml:1,color:"success.main"},/*#__PURE__*/react.createElement(CheckCircleOutline/* default */.Z,null))),/*#__PURE__*/react.createElement(AccordionDetails/* default */.Z,{style:{display:"block"}},validated?/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"success"},title||"API key"," ready!"):/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"caption"},children),/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:apiKeyId,label:"API key",fullWidth:true,value:key,type:inputType,onChange:handleApiChange}))),/*#__PURE__*/react.createElement(AccordionActions_AccordionActions,null,!validated&&/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{"aria-label":"save api key",disabled:!key,variant:"contained",color:"primary",onClick:handleSave},"Save"),/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{"aria-label":"clear api key",disabled:!apiKey,variant:"contained",onClick:handleReset},"Clear")));}
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2976);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(35246);
// EXTERNAL MODULE: ./src/components/hooks/useAnalytics.tsx + 88 modules
var useAnalytics = __webpack_require__(92513);
// EXTERNAL MODULE: ./src/jacdac/providerbus.ts
var providerbus = __webpack_require__(42758);
// EXTERNAL MODULE: ./src/components/hooks/useStorage.ts
var useStorage = __webpack_require__(13265);
;// CONCATENATED MODULE: ./src/components/hooks/useSessionStorage.ts
var storage=(()=>{try{if(providerbus/* UIFlags.transient */.A.transient)return undefined;if(providerbus/* UIFlags.persistent */.A.persistent&&typeof window!=="undefined"&&window.localStorage)return localStorage;return typeof window!=="undefined"&&window.sessionStorage;}catch(_unused){return undefined;}})();function useSessionStorage(key,initialValue){return (0,useStorage/* default */.Z)(storage,key,initialValue);}
;// CONCATENATED MODULE: ./src/components/buttons/GithubPullRequestButton.tsx
function GithubPullRequestButton(props){var{files,label="Create Pull Request",title,description,head}=props;var{0:response,1:setResponse}=(0,react.useState)(undefined);var{0:busy,1:setBusy}=(0,react.useState)(false);var{trackEvent}=(0,useAnalytics/* default */.ZP)();var[githubToken,setGithubToken]=useSessionStorage("githubtoken");var{setError:setAppError,enqueueSnackbar}=(0,useSnackbar/* default */.Z)();var{0:confirmDialog,1:setConfirmDialog}=(0,react.useState)(false);var bodyId=(0,react.useId)();var{0:body,1:setBody}=(0,react.useState)(description);var prUrl=response===null||response===void 0?void 0:response.html_url;var prId=response===null||response===void 0?void 0:response.number;var disabled=busy||!body||!title||!head||!files||!Object.keys(files).length;// clear PR id if files change
(0,react.useEffect)(()=>{setResponse(undefined);},[JSON.stringify(files)]);var handleOpenConfirm=()=>setConfirmDialog(true);var handleCloseConfirm=()=>setConfirmDialog(false);var handleBodyChange=ev=>setBody(ev.target.value);var handleCreatePullRequest=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){var headSuffix=(0,utils/* toHex */.NC)((0,random/* anyRandomUint32 */.RO)(2));enqueueSnackbar("creating pull request...");setBusy(true);setConfirmDialog(false);setResponse(undefined);try{trackEvent("github.pullrequest.start");var MyOctokit=Octokit.plugin(createPullRequest);var octokit=new MyOctokit({auth:githubToken});// Returns a normal Octokit PR response
// See https://octokit.github.io/rest.js/#octokit-routes-pulls-create
var result=yield octokit.createPullRequest({owner:"jacdac",repo:"jacdac",title,body,head:head+"/"+headSuffix,changes:[{files,commit:title}]});console.debug("request status "+result.status);trackEvent("github.pullrequest.status",{status:result.status});if(result.status===201){setResponse(result.data);}else{setResponse(undefined);}}catch(e){trackEvent("github.pullrequest.error");setAppError(e);}finally{setBusy(false);}});return function handleCreatePullRequest(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},!description&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:bodyId,label:"message","aria-label":"Description of the changes",placeholder:"Describe your changes",fullWidth:true,value:body,onChange:handleBodyChange})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{disabled:disabled,color:"primary",variant:"contained",onClick:handleOpenConfirm,startIcon:busy?/*#__PURE__*/react.createElement(LoadingProgress/* default */.Z,null):/*#__PURE__*/react.createElement(GitHub/* default */.Z,null)},label)),prId!==undefined&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"success"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"Pull Request"," ",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",rel:"no-referrer no-follower",href:prUrl},"#",prId)," ","created"),"The Jacdac team will review your submission and contact you for further details. If you need to edit or add comments, open the"," ",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",rel:"no-referrer no-follower",href:prUrl},"pull request on GitHub")," ","and post them there."))),/*#__PURE__*/react.createElement(Dialog/* default */.Z,{open:confirmDialog,onClose:handleCloseConfirm},/*#__PURE__*/react.createElement(DialogContent/* default */.Z,null,/*#__PURE__*/react.createElement(DialogContentText/* default */.Z,null,"We will open a new Pull Request in"," ",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{href:"https://github.com/jacdac/jacdac",rel:"noreferrer nofollower"},"jacdac/jacdac")," ","with your files. If needed, we will fork"," ",/*#__PURE__*/react.createElement("code",null,"jacdac/jacdac")," under your account and create a Pull Request in that repository."),/*#__PURE__*/react.createElement(ApiKeyAccordion,{title:"GitHub Developer Token",apiKey:githubToken,setApiKey:setGithubToken},"Open"," ",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",href:"https://github.com/settings/tokens/new",rel:"noreferrer nofollower"},"https://github.com/settings/tokens/new")," ","and generate a new personal access token with"," ",/*#__PURE__*/react.createElement("code",null,"repo"),"scope. If your organization requires single-sign-on (SSO), you need authorize your token for Microsoft (",/*#__PURE__*/react.createElement("code",null,"Configure SSO")," button).")),/*#__PURE__*/react.createElement(DialogActions/* default */.Z,null,/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx,{variant:"contained",color:"primary",onClick:handleCreatePullRequest,disabled:disabled||!githubToken,"aria-label":"create pull request"},"create pull request"))));}

/***/ }),

/***/ 83300:
/***/ (function(module, exports) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 30778:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wrappy = __webpack_require__(52479)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 52479:
/***/ (function(module) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ })

}]);
//# sourceMappingURL=7611-1ff064b709f910ff241f.js.map