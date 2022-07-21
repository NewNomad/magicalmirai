// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gcYbo":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "010488defb82e34c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jLNqd":[function(require,module,exports) {
var global = arguments[3];
/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license Copyright (c) 2017-2019 AIST Songle Project
 */ (function(global1) {
    "use strict";
    var __module__ = require("./api.js").default;
    if (!global1.XMLHttpRequest) global1.XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;
    if ("process" in global1) module["exports"] = __module__;
    global1["Songle"] = __module__;
})((this || 0).self || global);

},{"./api.js":"41CkJ","w3c-xmlhttprequest":"hezZX"}],"41CkJ":[function(require,module,exports) {
!function(e, t) {
    var n, r;
    module.exports = t();
}(this, function() {
    return function(e1) {
        var t1 = {};
        function n(r) {
            if (t1[r]) return t1[r].exports;
            var i = t1[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e1[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e1, n.c = t1, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t2) {
            if (1 & t2 && (e = n(e)), 8 & t2) return e;
            if (4 & t2 && "object" === typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t2 && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/packs/", n(n.s = 411);
    }({
        1: function(e2, t3, n1) {
            "use strict";
            n1.r(t3), (function(e3) {
                var r1 = n1(8), i1 = {};
                !function(e4) {
                    Object.defineProperties(i1, {
                        currentClockTime: {
                            configurable: !0,
                            get: function() {
                                return Date.now();
                            }
                        },
                        defaultAppServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultAppServerProtocol__ || "https:";
                            },
                            set: function(e) {
                                i1.__defaultAppServerProtocol__ = e;
                            }
                        },
                        defaultAppServerHost: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultAppServerHost__ || "api.songle.jp";
                            },
                            set: function(e) {
                                i1.__defaultAppServerHost__ = e;
                            }
                        },
                        defaultAppServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i1.defaultAppServerProtocol + "//" + i1.defaultAppServerHost;
                            }
                        },
                        defaultLogServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultLogServerProtocol__ || "https:";
                            },
                            set: function(e) {
                                i1.__defaultLogServerProtocol__ = e;
                            }
                        },
                        defaultLogServerHost: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultLogServerHost__ || "log.songle.jp";
                            },
                            set: function(e) {
                                i1.__defaultLogServerHost__ = e;
                            }
                        },
                        defaultLogServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i1.defaultLogServerProtocol + "//" + i1.defaultLogServerHost;
                            }
                        },
                        defaultWebsocketServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultWebsocketServerProtocol__ || "wss:";
                            },
                            set: function(e) {
                                i1.__defaultWebsocketServerProtocol__ = e;
                            }
                        },
                        defaultWebsocketServerHost: {
                            configurable: !0,
                            get: function() {
                                return i1.__defaultWebsocketServerHost__ || "api.songle.jp";
                            },
                            set: function(e) {
                                i1.__defaultWebsocketServerHost__ = e;
                            }
                        },
                        defaultWebsocketServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i1.defaultWebsocketServerProtocol + "//" + i1.defaultWebsocketServerHost;
                            }
                        },
                        global: {
                            configurable: !0,
                            get: function() {
                                return e4;
                            }
                        },
                        isStandalone: {
                            configurable: !0,
                            get: function() {
                                return !e4.document;
                            }
                        },
                        isWebBrowser: {
                            configurable: !0,
                            get: function() {
                                return !!e4.document;
                            }
                        },
                        language: {
                            configurable: !0,
                            get: function() {
                                var e = window.navigator.languages && window.navigator.languages[0] || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
                                switch(!0){
                                    case /en/.test(e.toLowerCase()):
                                        return "en";
                                    case /ja/.test(e.toLowerCase()):
                                        return "ja";
                                    default:
                                        return "en";
                                }
                            }
                        },
                        referer: {
                            configurable: !0,
                            get: function() {
                                return i1.isStandalone ? "-" : e4.document.referrer;
                            }
                        },
                        userAgent: {
                            configurable: !0,
                            get: function() {
                                return i1.isStandalone ? "-" : e4.navigator.appCodeName + "/" + navigator.appVersion;
                            }
                        },
                        userAgentIsLaptop: {
                            configurable: !0,
                            get: function() {
                                return !i1.userAgentIsAndroid && !i1.userAgentIsiOS;
                            }
                        },
                        userAgentIsMobile: {
                            configurable: !0,
                            get: function() {
                                return i1.userAgentIsAndroid || i1.userAgentIsiOS;
                            }
                        },
                        userAgentIsAndroid: {
                            configurable: !0,
                            get: function() {
                                return -1 != i1.userAgent.toLowerCase().indexOf("android") || -1 != i1.userAgent.toLowerCase().indexOf("linux");
                            }
                        },
                        userAgentIsiOS: {
                            configurable: !0,
                            get: function() {
                                return -1 != i1.userAgent.toLowerCase().indexOf("iphone") || -1 != i1.userAgent.toLowerCase().indexOf("ipad") || -1 != i1.userAgent.toLowerCase().indexOf("ipod");
                            }
                        },
                        searchQueries: {
                            configurable: !0,
                            get: function() {
                                var e = {};
                                return location.search.slice(location.search.indexOf("?") + 1).split("&").forEach(function(t) {
                                    var n = t.match(/(.+?)=(.+)/);
                                    if (n) {
                                        var r = n[1], i = n[2];
                                        e[r] = i ? decodeURIComponent(i) : i;
                                    }
                                }), e;
                            }
                        },
                        showDebugLog: {
                            configurable: !0,
                            get: function() {
                                return !!i1.__showDebugLog__;
                            },
                            set: function(e) {
                                i1.__showDebugLog__ = !!e;
                            }
                        },
                        showErrorLog: {
                            configurable: !0,
                            get: function() {
                                return !!i1.__showErrorLog__;
                            },
                            set: function(e) {
                                i1.__showErrorLog__ = !!e;
                            }
                        },
                        showLicense: {
                            configurable: !0,
                            get: function() {
                                return !!i1.__showLicense__;
                            },
                            set: function(e) {
                                i1.__showLicense__ = !!e, e ? (r1.default.removeLicense(), r1.default.createLicense(e)) : (r1.default.removeLicense(), console.log("# \u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u8A18\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\n\n\u56FD\u7ACB\u7814\u7A76\u958B\u767A\u6CD5\u4EBA\u7523\u696D\u6280\u8853\u7DCF\u5408\u7814\u7A76\u6240\n\u60C5\u5831\u6280\u8853\u7814\u7A76\u90E8\u9580\n\u30E1\u30C7\u30A3\u30A2\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u30B0\u30EB\u30FC\u30D7\n\nSongle API\u306F\u975E\u5546\u7528\u5229\u7528\u306B\u9650\u308A\u3001\u3069\u306A\u305F\u3067\u3082\u7121\u6599\u30FB\u7121\u4FDD\u8A3C\u3067\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u305F\u3060\u3057\u3001\u539F\u5247\u3068\u3057\u3066Songle API\u3092\u5229\u7528\u3057\u3066\u3044\u308B\u65E8\u3092 https://api.songle.jp/ \u306B\u30CF\u30A4\u30D1\u30FC\u30EA\u30F3\u30AF\u3057\u305F\u4E0A\u3067\u3001\u5229\u7528\u3057\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u3082\u3057\u304F\u306F\u5916\u90E8\u30B5\u30A4\u30C8\u7B49\u306B\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n\n# \u304A\u554F\u3044\u5408\u308F\u305B\n\nsongle-ml@aist.go.jp"));
                            }
                        }
                    }), i1.stringIsBlank = function(e) {
                        return "" == e || null == e;
                    }, i1.typeOf = function(e) {
                        if (null != e) switch(typeof e){
                            case "object":
                                return null != e.length ? "array" : "object";
                            case "number":
                                return "number";
                            case "string":
                                return "string";
                        }
                        return "null";
                    }, e4.__sw__ = i1;
                }(0..self || e3), t3.default = i1;
            }).call(this, n1(17));
        },
        100: function(e5, t4, n2) {
            "use strict";
            n2.r(t4);
            var r2 = n2(21), i2 = n2(30), a1 = n2(2), o1 = n2(37), u1 = n2(1);
            function s1(e6, t5, n3) {
                return (s1 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e7, t6, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d1(e)););
                        return e;
                    }(e7, t6);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t6);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e6, t5, n3 || e6);
            }
            function l1(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c1(e, t, n) {
                return t && l1(e.prototype, t), n && l1(e, n), e;
            }
            function f1(e8, t7) {
                return (f1 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e8, t7);
            }
            function _1(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d1(e);
                    if (t) {
                        var i = d1(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p1(this, n);
                };
            }
            function p1(e9, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e9) : t;
            }
            function d1(e10) {
                return (d1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e10);
            }
            var h1 = "songle-api-plugin-songle-widget", y1 = function(e11) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f1(e, t);
                }(n4, e11);
                var t8 = _1(n4);
                function n4(e12) {
                    var r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n4), (r = t8.call(this)).__element__ = e12.element, r.__responsive__ = null != e12.responsive && e12.responsive, r.__showController__ = null == e12.showController || e12.showController, r.__showOriginalSiteLink__ = null == e12.showOriginalSiteLink || e12.showOriginalSiteLink, r.__showMusicMap__ = null == e12.showMusicMap || e12.showMusicMap, r.__showSongleJpSiteLink__ = null == e12.showSongleJpSiteLink || e12.showSongleJpSiteLink, r.__controllerWidth__ = null != e12.controllerWidth ? e12.controllerWidth : 256, r.__controllerHeight__ = null != e12.controllerHeight ? e12.controllerHeight : 30, r.__controllerMouseEnterColor__ = null != e12.controllerMouseEnterColor ? e12.controllerMouseEnterColor : "#e17", r.__controllerMouseLeaveColor__ = null != e12.controllerMouseLeaveColor ? e12.controllerMouseLeaveColor : "#222", r.__language__ = null != e12.language ? e12.language : u1.default.language, r.__musicMapWidth__ = null != e12.musicMapWidth ? e12.musicMapWidth : 256, r.__musicMapHeight__ = null != e12.musicMapHeight ? e12.musicMapHeight : 40, r.__musicMapOuterBackgroundColor__ = null != e12.musicMapOuterBackgroundColor ? e12.musicMapOuterBackgroundColor : "#999", r.__musicMapInnerBackgroundColor__ = null != e12.musicMapInnerBackgroundColor ? e12.musicMapInnerBackgroundColor : "#eee", r.__musicMapChorusSectionColor__ = null != e12.musicMapChorusSectionColor ? e12.musicMapChorusSectionColor : "#f84", r.__musicMapRepeatedSectionColor__ = null != e12.musicMapRepeatedSectionColor ? e12.musicMapRepeatedSectionColor : "#48f", r.__musicMapCursorColor__ = null != e12.musicMapCursorColor ? e12.musicMapCursorColor : "#e17", r.__className__ = "".concat(h1, "-").concat(Math.random().toString(36).slice(-4)), r.__readyTrap__ = function(e) {
                        return r.render();
                    }, r.__playTrap__ = function(e) {}, r.__pauseTrap__ = function(e) {}, r.__seekTrap__ = function(e) {}, r.__resizeTrap__ = function(e) {
                        r.__responsive__ && r.render();
                    }, r.__scrollTrap__ = function(e) {
                        r.__responsive__ && r.render();
                    }, r.__responsive__ && null != r.element && (e12.width = r.element.offsetWidth, e12.height = r.element.offsetHeight), r.__updateSize__(e12), r;
                }
                return c1(n4, null, [
                    {
                        key: "Name",
                        get: function() {
                            return h1;
                        }
                    }
                ]), c1(n4, [
                    {
                        key: "initialize",
                        value: function(e) {
                            s1(d1(n4.prototype), "initialize", this).call(this, e), this.player.on("ready", this.__readyTrap__), this.player.on("play", this.__playTrap__), this.player.on("pause", this.__pauseTrap__), this.player.on("seek", this.__seekTrap__), window.addEventListener("resize", this.__resizeTrap__, !1), window.addEventListener("scroll", this.__scrollTrap__, !1);
                        }
                    },
                    {
                        key: "dispose",
                        value: function() {
                            s1(d1(n4.prototype), "dispose", this).call(this), clearInterval(this.__musicMapAnimationIntervalId__), window.removeEventListener("resize", this.__resizeTrap__, !1), window.removeEventListener("scroll", this.__scrollTrap__, !1), this.player.off("ready", this.__readyTrap__), this.player.off("play", this.__playTrap__), this.player.off("pause", this.__pauseTrap__), this.player.off("seek", this.__seekTrap__), this.__removeRenderedElement__();
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            null != this.element && this.__responsive__ && this.__updateSize__({
                                width: this.element.offsetWidth,
                                height: this.element.offsetHeight
                            });
                            var e = document.createElement("div");
                            clearInterval(this.__musicMapAnimationIntervalId__), e.className = this.__className__, e.style.lineHeight = "normal", e.style.fontSize = "10.5px", this.__showController__ && e.appendChild(this.__createControllerElement__({
                                width: this.__controllerWidth__,
                                height: this.__controllerHeight__,
                                mouseEnterColor: this.__controllerMouseEnterColor__,
                                mouseLeaveColor: this.__controllerMouseLeaveColor__
                            })), this.__showOriginalSiteLink__ && e.appendChild(this.__createOriginalSiteLinkElement__({
                                width: this.__musicMapWidth__,
                                height: 15
                            })), this.__showMusicMap__ && e.appendChild(this.__createMusicMapElement__({
                                width: this.__musicMapWidth__,
                                height: this.__musicMapHeight__
                            })), this.__showSongleJpSiteLink__ && e.appendChild(this.__createSongleJpSiteLinkElement__({
                                width: this.__musicMapWidth__,
                                height: 15
                            })), this.__removeRenderedElement__(), this.element && this.element.appendChild(e);
                        }
                    },
                    {
                        key: "__removeRenderedElement__",
                        value: function() {
                            document.querySelectorAll("[class=".concat(this.__className__, "]")).forEach(function(e) {
                                e.remove();
                            });
                        }
                    },
                    {
                        key: "__createControllerElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("div");
                            n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.width = e.height + "px", n.style.height = e.height + "px";
                            var r = this.__createPlayButtonElement__({
                                size: e.height,
                                mouseEnterColor: e.mouseEnterColor,
                                mouseLeaveColor: e.mouseLeaveColor
                            }), i = this.__createStopButtonElement__({
                                size: e.height,
                                mouseEnterColor: e.mouseEnterColor,
                                mouseLeaveColor: e.mouseLeaveColor
                            });
                            n.appendChild(r), n.appendChild(i);
                            var a = document.createElement("div");
                            a.style.display = "block", a.style.overflow = "hidden", a.style.float = "left", a.style.width = e.width - e.height + "px", a.style.height = e.height + "px";
                            var o = document.createElement("a");
                            o.href = "".concat(u1.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), o.target = "_blank", o.style.display = "block", o.style.overflow = "hidden", o.style.paddingLeft = "8px", o.style.textOverflow = "ellipsis", o.style.width = e.width - e.height + "px", o.style.height = e.height / 2 + "px", o.textContent = this.player.media.name;
                            var s = document.createElement("a");
                            return s.href = "".concat(u1.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), s.target = "_blank", s.style.display = "block", s.style.overflow = "hidden", s.style.paddingLeft = "8px", s.style.textOverflow = "ellipsis", s.style.width = e.width - e.height + "px", s.style.height = e.height / 2 + "px", s.textContent = this.player.media.artistName, a.appendChild(o), a.appendChild(s), t.appendChild(n), t.appendChild(a), t;
                        }
                    },
                    {
                        key: "__createOriginalSiteLinkElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("a");
                            n.href = "".concat(u1.default.defaultAppServerEndpoint, "/redirect_to/original_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), n.target = "_blank", n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.margin = "".concat(0, "px ").concat(2, "px"), n.style.textOverflow = "ellipsis", n.style.textAlign = "left", n.style.width = e.width / 2 - 4 + "px", n.style.height = e.height - 0 + "px", this.__language__;
                            n.textContent = "";
                            t.appendChild(n);
                            var r = document.createElement("a");
                            switch(r.href = "".concat(u1.default.defaultAppServerEndpoint, "/redirect_to/original_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), r.target = "_blank", r.style.display = "block", r.style.overflow = "hidden", r.style.float = "left", r.style.margin = "".concat(0, "px ").concat(2, "px"), r.style.textOverflow = "ellipsis", r.style.textAlign = "right", r.style.width = e.width / 2 - 4 + "px", r.style.height = e.height - 0 + "px", this.__language__){
                                case "ja":
                                    r.textContent = "\u3053\u306E\u914D\u4FE1\u30B5\u30A4\u30C8\u3078";
                                    break;
                                case "en":
                                default:
                                    r.textContent = "Original site";
                            }
                            return t.appendChild(r), t;
                        }
                    },
                    {
                        key: "__createMusicMapElement__",
                        value: function(e13) {
                            var t = this, n5 = document.createElement("div");
                            if (null == this.player.musicMap || null == this.player.musicMap.chorus) return a1.default.warn("'Songle.Player' do NOT have a chorus information. Please install the chorus plugin using 'Songle.Plugin.Chorus'"), n5;
                            n5.style.width = e13.width + "px", n5.style.height = e13.height + "px";
                            var r = o1.default.createSVGElement({
                                width: e13.width,
                                height: e13.height
                            }), i = e13.width - 4, s = (e13.height - 4 - 6 + 1) / 6, l = 0;
                            r.appendChild(o1.default.createRectElement({
                                x: 0,
                                y: 0,
                                width: e13.width,
                                height: e13.height,
                                fill: "none",
                                stroke: this.__musicMapOuterBackgroundColor__
                            })), r.addEventListener("click", function(e) {
                                t.player.seekTo(l || e.offsetX / i * t.player.durationTime), u1.default.stringIsBlank(t.player.accessToken) && u1.default.stringIsBlank(t.player.secretToken) && t.player.play();
                            });
                            for(var c2 = function(e14) {
                                var n = (s + 1) * e14 + 1 + 1;
                                r.appendChild(o1.default.createRectElement({
                                    x: 2,
                                    y: n,
                                    width: i,
                                    height: s,
                                    fill: t.__musicMapInnerBackgroundColor__,
                                    stroke: "none"
                                }));
                                var a = t.player.musicMap.chorus[e14];
                                if (!a) return "continue";
                                a.items.forEach(function(e) {
                                    var u = e.startTime / t.player.durationTime * i + 2, c = n, f = e.durationTime / t.player.durationTime * i, _ = s, p = o1.default.createRectElement({
                                        x: u,
                                        y: c,
                                        width: f,
                                        height: _,
                                        fill: a.isChorus ? t.__musicMapChorusSectionColor__ : t.__musicMapRepeatedSectionColor__,
                                        stroke: "none"
                                    });
                                    p.style.cursor = "pointer", p.addEventListener("mouseenter", function() {
                                        l = e.startTime, p.style.opacity = .75;
                                    }), p.addEventListener("mouseleave", function() {
                                        l = 0, p.style.opacity = 1;
                                    }), r.appendChild(p);
                                });
                            }, f2 = 0; f2 < 6; ++f2)c2(f2);
                            var _2 = o1.default.createRectElement({
                                x: 0,
                                y: 0,
                                width: 1,
                                height: e13.height,
                                fill: "none",
                                stroke: this.__musicMapCursorColor__
                            });
                            return this.__musicMapAnimationIntervalId__ = setInterval(function() {
                                _2.setAttribute("x", e13.width * (t.player.positionTime / t.player.durationTime));
                            }, 1e3), r.appendChild(_2), n5.appendChild(r), n5;
                        }
                    },
                    {
                        key: "__createPlayButtonElement__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null != t.size ? t.size : 30, r = null != t.mouseEnterColor ? t.mouseEnterColor : "#e17", i = null != t.mouseLeaveColor ? t.mouseLeaveColor : "#222", a = null != t.strokeWidth ? t.strokeWidth : 2, u = document.createElement("div");
                            u.style.cursor = "pointer", u.style.width = n + "px", u.style.height = n + "px", this.player.isPlaying ? u.style.display = "none" : u.style.display = "block";
                            var s = o1.default.createSVGElement({
                                width: n,
                                height: n
                            }), l = o1.default.createGroupElement({
                                fill: i,
                                stroke: i,
                                strokeWidth: a
                            }), c = 1 * (n / 2 - a), f = c + a, _ = c + a, p = o1.default.createCircleElement({
                                cx: f,
                                cy: _,
                                r: c,
                                fill: "none"
                            }), d = .5 * (n / 2 - a), h = 1 * d / 1.41, y = f + Math.cos(3.14 / 180 * 135) * d + (d - h), v = _ - Math.sin(3.14 / 180 * 135) * d, g = f + Math.cos(0) * h, m = _ - Math.sin(0) * h, b = f + Math.cos(3.14 / 180 * 225) * d + (d - h), k = _ - Math.sin(3.14 / 180 * 225) * d, T = o1.default.createPolygonElement({
                                points: [
                                    y,
                                    v,
                                    g,
                                    m,
                                    b,
                                    k
                                ]
                            });
                            return s.appendChild(l), l.appendChild(p), l.appendChild(T), u.appendChild(s), u.addEventListener("click", function(t) {
                                e.player.play();
                            }), u.addEventListener("mouseenter", function(e) {
                                l.setAttribute("fill", r), l.setAttribute("stroke", r);
                            }), u.addEventListener("mouseleave", function(e) {
                                l.setAttribute("fill", i), l.setAttribute("stroke", i);
                            }), this.player.on("play", function(e) {
                                u.style.display = "none";
                            }), this.player.on("pause", function(e) {
                                u.style.display = "block";
                            }), u;
                        }
                    },
                    {
                        key: "__createStopButtonElement__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null != t.size ? t.size : 30, r = null != t.mouseEnterColor ? t.mouseEnterColor : "#e17", i = null != t.mouseLeaveColor ? t.mouseLeaveColor : "#222", a = null != t.strokeWidth ? t.strokeWidth : 2, u = document.createElement("div");
                            u.style.cursor = "pointer", u.style.width = n + "px", u.style.height = n + "px", this.player.isPlaying ? u.style.display = "block" : u.style.display = "none";
                            var s = o1.default.createSVGElement({
                                width: n,
                                height: n
                            }), l = o1.default.createGroupElement({
                                fill: i,
                                stroke: i,
                                strokeWidth: a
                            }), c = 1 * (n / 2 - a), f = c + a, _ = c + a, p = o1.default.createCircleElement({
                                cx: f,
                                cy: _,
                                r: c,
                                fill: "none"
                            }), d = .5 * (n / 2 - a), h = f + Math.cos(3.14 / 180 * 135) * d, y = _ - Math.sin(3.14 / 180 * 135) * d, v = h + .5 * Math.abs(h - f), g = y, m = f + Math.cos(3.14 / 180 * 225) * d, b = _ - Math.sin(3.14 / 180 * 225) * d, k = m + .5 * Math.abs(h - f), T = b, S = o1.default.createPolygonElement({
                                points: [
                                    h,
                                    y,
                                    v,
                                    g,
                                    k,
                                    T,
                                    m,
                                    b
                                ]
                            }), P = f + Math.cos(3.14 / 180 * 45) * d, w = _ - Math.sin(3.14 / 180 * 45) * d, O = P - .5 * Math.abs(P - f), C = w, E = f + Math.cos(3.14 / 180 * 315) * d, x = _ - Math.sin(3.14 / 180 * 315) * d, I = E - .5 * Math.abs(E - f), M = x, j = o1.default.createPolygonElement({
                                points: [
                                    O,
                                    C,
                                    P,
                                    w,
                                    E,
                                    x,
                                    I,
                                    M
                                ]
                            });
                            return s.appendChild(l), l.appendChild(p), l.appendChild(S), l.appendChild(j), u.appendChild(s), u.addEventListener("click", function(t) {
                                e.player.pause();
                            }), u.addEventListener("mouseenter", function(e) {
                                l.setAttribute("stroke", r), l.setAttribute("fill", r);
                            }), u.addEventListener("mouseleave", function(e) {
                                l.setAttribute("stroke", i), l.setAttribute("fill", i);
                            }), this.player.on("play", function(e) {
                                u.style.display = "block";
                            }), this.player.on("pause", function(e) {
                                u.style.display = "none";
                            }), u;
                        }
                    },
                    {
                        key: "__createSongleJpSiteLinkElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("a");
                            switch(n.href = "".concat(u1.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), n.target = "_blank", n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.margin = "".concat(0, "px ").concat(2, "px"), n.style.textOverflow = "ellipsis", n.style.textAlign = "left", n.style.width = e.width / 2 - 4 + "px", n.style.height = e.height - 0 + "px", this.__language__){
                                case "ja":
                                    n.textContent = "Songle\u3067\u30B5\u30D3\u8A02\u6B63";
                                    break;
                                case "en":
                                default:
                                    n.textContent = "Annotate this song";
                            }
                            t.appendChild(n);
                            var r = document.createElement("a");
                            r.href = "".concat(u1.default.defaultAppServerEndpoint), r.target = "_blank", r.style.display = "block", r.style.overflow = "hidden", r.style.float = "left", r.style.margin = "".concat(0, "px ").concat(2, "px"), r.style.textOverflow = "ellipsis", r.style.textAlign = "right", r.style.width = e.width / 2 - 4 + "px", r.style.height = e.height - 0 + "px", this.__language__;
                            r.textContent = "Powered by Songle API";
                            return t.appendChild(r), t;
                        }
                    },
                    {
                        key: "__updateSize__",
                        value: function(e) {
                            var t = !1;
                            if (null != e.width) {
                                if (e.width < 20) return a1.default.warn("Songle Widget is too small. Please check 'Songle.Plugin.SongleWidget' options"), !1;
                                this.__controllerWidth__ != e.width && (this.__controllerWidth__ = e.width, t = !0), this.__musicMapWidth__ != e.width && (this.__musicMapWidth__ = e.width, t = !0);
                            }
                            if (null != e.height) {
                                if (this.__showController__ && (e.height -= this.__controllerHeight__), this.__showOriginalSiteLink__ && (e.height -= 15), this.__showSongleJpSiteLink__ && (e.height -= 15), e.height < 20) return a1.default.warn("Songle Widget is too small. Please check 'Songle.Plugin.SongleWidget' options"), !1;
                                this.__musicMapHeight__ != e.height && (this.__musicMapHeight__ = e.height, t = !0);
                            }
                            return t;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return h1;
                        }
                    },
                    {
                        key: "element",
                        get: function() {
                            return i2.default.querySelector(this.__element__);
                        }
                    }
                ]), n4;
            }(r2.default);
            t4.default = y1;
        },
        12: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(22);
            n.d(t, "SongAPI", function() {
                return r.default;
            });
            var i = n(23);
            n.d(t, "BeatAPI", function() {
                return i.default;
            });
            var a = n(24);
            n.d(t, "ChordAPI", function() {
                return a.default;
            });
            var o = n(25);
            n.d(t, "MelodyAPI", function() {
                return o.default;
            });
            var u = n(26);
            n.d(t, "ChorusAPI", function() {
                return u.default;
            });
            var s = n(27);
            n.d(t, "VariationAPI", function() {
                return s.default;
            });
            var l = {
                SongAPI: r.default,
                BeatAPI: i.default,
                ChordAPI: a.default,
                MelodyAPI: o.default,
                ChorusAPI: u.default,
                VariationAPI: s.default
            };
            t.default = l;
        },
        13: function(e15, t9, n6) {
            "use strict";
            function r3(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            n6.r(t9);
            var i3 = function() {
                function e16(t11) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e16), this.__player__ = t11;
                }
                var t10, n7, i4;
                return t10 = e16, n7 = [
                    {
                        key: "dispatch",
                        value: function(e, t, n) {}
                    },
                    {
                        key: "find",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.offset ? t.offset : 0, r = this.__player__.positionTime - 250 + -1 * n, i = this.__player__.positionTime + 0 + -1 * n;
                            this.dispatch(r, i, e);
                        }
                    },
                    {
                        key: "reset",
                        value: function() {}
                    }
                ], r3(t10.prototype, n7), i4 && r3(t10, i4), e16;
            }();
            t9.default = i3;
        },
        14: function(e17, t12, n8) {
            "use strict";
            n8.r(t12);
            function r4(e18) {
                var t13 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [];
                return e18.musicMap.chorus && e18.musicMap.chorus.forEach(function(e19) {
                    t13.chorusOnly && !e19.isChorus || (n = n.concat(e19.items).sort(function(e, t) {
                        return e.startTime - t.startTime;
                    }));
                }), n;
            }
            var i5 = {
                findPrevBar: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, r = e.musicMap.beats || [];
                    r = r.reverse();
                    for(var i = 0; i < r.length; ++i)if (1 == r[i].number && n > r[i].startTime + 500) return r[i];
                    return r[0];
                },
                findNextBar: function(e) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, r = e.musicMap.beats || [], i = 0; i < r.length; ++i)if (1 == r[i].number && n < r[i].startTime - 500) return r[i];
                    return r[0];
                },
                findPrevRepeatedSectionItem: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, i = r4(e, t);
                    i = i.reverse();
                    for(var a = 0; a < i.length; ++a)if (n > i[a].startTime + 500) return i[a];
                    return i[0];
                },
                findNextRepeatedSectionItem: function(e) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, i = r4(e, t), a = 0; a < i.length; ++a)if (n < i[a].startTime - 500) return i[a];
                    return i[0];
                }
            };
            t12.default = i5;
        },
        15: function(e20, t14, n9) {
            "use strict";
            function r5(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i6(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e21, t15) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e21, t15);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s2(e);
                    if (t) {
                        var i = s2(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u2(this, n);
                };
            }
            function u2(e22, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e22) : t;
            }
            function s2(e23) {
                return (s2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e23);
            }
            n9.r(t14);
            var l2 = function(e24) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t);
                }(l, e24);
                var t16, n, u, s = o(l);
                function l() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return r5(this, l), (e = s.call(this)).endpointScheme = null != t.endpointScheme ? t.endpointScheme : null, e.endpointHost = null != t.endpointHost ? t.endpointHost : null, e.endpointPath = null != t.endpointPath ? t.endpointPath : null, e.revisionId = null != t.revisionId ? t.revisionId : 0, e.offset = null != t.offset ? t.offset : 0, e.pollingInterval = null != t.pollingInterval ? t.pollingInterval : 50, e;
                }
                return t16 = l, n = [
                    {
                        key: "__invokeTrap__",
                        value: function(e, t) {
                            e.trap({
                                target: this,
                                type: e.name,
                                data: t
                            });
                        }
                    }
                ], i6(t16.prototype, n), u && i6(t16, u), l;
            }(n9(21).default);
            t14.default = l2;
        },
        17: function(e, t) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" === typeof window && (n = window);
            }
            e.exports = n;
        },
        174: function(e25, t17, n10) {
            "use strict";
            n10.r(t17);
            var r6 = n10(77), i7 = n10(62);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e26, t18) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e26, t18);
            }
            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            function s(e27, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e27) : t;
            }
            function l(e28) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e28);
            }
            var c = function(e29) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t);
                }(n, e29);
                var t19 = u(n);
                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, n), (e = t19.call(this, r)).addPlugin(new i7.default), e;
                }
                return n;
            }(r6.default);
            t17.default = c;
        },
        185: function(e30, t20, n11) {
            "use strict";
            n11.r(t20);
            var r7 = n11(77), i8 = n11(100);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e31, t21) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e31, t21);
            }
            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            function s(e32, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e32) : t;
            }
            function l(e33) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e33);
            }
            var c = function(e34) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t);
                }(n, e34);
                var t22 = u(n);
                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, n), (e = t22.call(this, r)).addPlugin(new i8.default), e;
                }
                return n;
            }(r7.default);
            t20.default = c;
        },
        19: function(e35, t23, n12) {
            "use strict";
            n12.r(t23);
            var r8 = n12(2), i9 = n12(1);
            function a(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var o2 = function() {
                function e36() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e36), this.traps = [];
                }
                var t24, n13, o;
                return t24 = e36, o = [
                    {
                        key: "Name",
                        get: function() {
                            return "dispatcher";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "dispatcher";
                        }
                    }
                ], n13 = [
                    {
                        key: "initialize",
                        value: function(e) {
                            r8.default.debug("Invoke '".concat(this.dispatcherName, "#initialize'")), this.__player__ = e;
                        }
                    },
                    {
                        key: "mediaTryMount",
                        value: function(e, t) {
                            r8.default.debug("Invoke '".concat(this.dispatcherName, "#mediaTryMount'"), t);
                        }
                    },
                    {
                        key: "mediaDisMount",
                        value: function(e, t) {
                            r8.default.debug("Invoke '".concat(this.dispatcherName, "#mediaDisMount'"), t);
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: function(e, t) {
                            r8.default.debug("Invoke '".concat(this.dispatcherName, "#mediaDidMount'"), t);
                        }
                    },
                    {
                        key: "dispose",
                        value: function() {
                            r8.default.debug("Invoke '".concat(this.dispatcherName, "#dispose'"));
                        }
                    },
                    {
                        key: "mapTraps",
                        value: function(e37) {
                            var t = this, n14 = this.player.dispatchers.map(function(n15) {
                                return n15 && n15.traps.map(function(n) {
                                    if (-1 != t.__convertToStringArray__(e37).indexOf(n.name)) return n;
                                }).filter(function(e) {
                                    return null != e;
                                });
                            });
                            return Array.prototype.concat.apply([], n14);
                        }
                    },
                    {
                        key: "mapTrapsHasAnyData",
                        value: function(e38) {
                            return this.mapTraps(e38).filter(function(e) {
                                return e && null != e.data;
                            });
                        }
                    },
                    {
                        key: "mapTrapsHasNotData",
                        value: function(e39) {
                            return this.mapTraps(e39).filter(function(e) {
                                return e && null == e.data;
                            });
                        }
                    },
                    {
                        key: "on",
                        value: function(e40, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            r.offset = null != r.offset ? r.offset : 0, (e40 = this.__convertToStringArray__(e40)).forEach(function(e) {
                                e = n.__validateTrapName__(e), n.traps.push({
                                    name: e,
                                    trap: t,
                                    data: null,
                                    options: r
                                });
                            });
                        }
                    },
                    {
                        key: "off",
                        value: function(e41, t) {
                            var n = this;
                            (e41 = this.__convertToStringArray__(e41)).forEach(function(e) {
                                e = n.__validateTrapName__(e), n.traps.forEach(function(r, i) {
                                    r.name === e && r.trap === t && n.traps.splice(i, 1);
                                });
                            });
                        }
                    },
                    {
                        key: "invokeSelfTrap",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = this.__validateTrapName__(e), this.traps.forEach(function(n) {
                                n.name == e && (t.type = e, n.trap(t));
                            });
                        }
                    },
                    {
                        key: "__convertToStringArray__",
                        value: function(e) {
                            return "string" === i9.default.typeOf(e) ? [
                                e
                            ] : e;
                        }
                    },
                    {
                        key: "__validateTrapName__",
                        value: function(e) {
                            switch(e){
                                case "beatPlay":
                                    e = "beatEnter";
                                    break;
                                case "chordChange":
                                case "chordPlay":
                                    e = "chordEnter";
                                    break;
                                case "melodyPlay":
                                    e = "melodyEnter";
                                    break;
                                case "variationChange":
                                case "variationPlay":
                                    e = "variationEnter";
                                    break;
                                case "chorusEnter":
                                    e = "chorusSectionEnter";
                                    break;
                                case "chorusLeave":
                                    e = "chorusSectionLeave";
                                    break;
                                case "repeatEnter":
                                case "repeatSectionEnter":
                                    e = "repeatedSectionEnter";
                                    break;
                                case "repeatLeave":
                                case "repeatSectionLeave":
                                    e = "repeatedSectionLeave";
                                    break;
                                case "songleSyncNodeChange":
                                    e = "songleSyncStageNodeChange";
                                    break;
                                case "songleSyncNodeEnter":
                                    e = "songleSyncStageNodeEnter";
                                    break;
                                case "songleSyncNodeLeave":
                                    e = "songleSyncStageNodeLeave";
                            }
                            return e;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return e36.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return e36.Type;
                        }
                    },
                    {
                        key: "player",
                        get: function() {
                            return this.__player__;
                        }
                    }
                ], a(t24.prototype, n13), o && a(t24, o), e36;
            }();
            t23.default = o2;
        },
        2: function(e42, t25, n16) {
            "use strict";
            n16.r(t25);
            var r9 = n16(1);
            function i10(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var a = [], o3 = function() {
                function e43() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e43);
                }
                var t26, n17, o;
                return t26 = e43, o = [
                    {
                        key: "debug",
                        value: function(t, n) {
                            r9.default.showDebugLog && e43.__log__("debug", t, n, "color:#000;");
                        }
                    },
                    {
                        key: "warn",
                        value: function(t, n) {
                            r9.default.showErrorLog && e43.__log__("warn", t, n, "color:#f82;");
                        }
                    },
                    {
                        key: "error",
                        value: function(t, n) {
                            r9.default.showErrorLog && e43.__log__("error", t, n, "color:#f22;");
                        }
                    },
                    {
                        key: "__log__",
                        value: function(e, t27, n, i) {
                            switch(e){
                                case "debug":
                                    t27 = "[Songle API ".concat(e, "] ") + t27;
                                    break;
                                case "warn":
                                case "error":
                                    if (t27 = "[Songle API ".concat(e, "] ") + t27, -1 != a.indexOf(t27)) return;
                            }
                            a.push(t27), null != n && (n = JSON.stringify(n, function(e, t) {
                                if (null == t) return t;
                                switch(!0){
                                    case t instanceof HTMLElement:
                                        return "[HTMLElement]";
                                    case null != t.dispatcherName:
                                        return "[".concat(t.dispatcherName, "]");
                                    case null != t.dispatcherType:
                                        return "[".concat(t.dispatcherType, "]");
                                }
                                return t;
                            }, "	")), console.log((r9.default.isWebBrowser ? "%c" : "") + t27 + (n ? "\n\n" + n + "\n" : ""), r9.default.isWebBrowser ? i : "");
                        }
                    },
                    {
                        key: "histories",
                        get: function() {
                            return a;
                        }
                    }
                ], n17 = null, o && i10(t26, o), e43;
            }(), u = {
                histories: o3.histories,
                debug: o3.debug,
                warn: o3.warn,
                error: o3.error
            };
            t25.default = u;
        },
        20: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(52);
            n.d(t, "ClockAPI", function() {
                return r.default;
            });
            var i = n(53);
            n.d(t, "HistoryAPI", function() {
                return i.default;
            });
            var a = n(54);
            n.d(t, "MessageAPI", function() {
                return a.default;
            });
            var o = n(55);
            n.d(t, "PlaylistAPI", function() {
                return o.default;
            });
            var u = n(56);
            n.d(t, "StageAPI", function() {
                return u.default;
            });
            var s = {
                ClockAPI: r.default,
                HistoryAPI: i.default,
                MessageAPI: a.default,
                PlaylistAPI: o.default,
                StageAPI: u.default
            };
            t.default = s;
        },
        21: function(e44, t28, n18) {
            "use strict";
            function r10(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i11(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e45, t29) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e45, t29);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s3(e);
                    if (t) {
                        var i = s3(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u3(this, n);
                };
            }
            function u3(e46, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e46) : t;
            }
            function s3(e47) {
                return (s3 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e47);
            }
            n18.r(t28);
            var l3 = function(e48) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t);
                }(l, e48);
                var t30, n, u, s = o(l);
                function l() {
                    return r10(this, l), s.apply(this, arguments);
                }
                return t30 = l, u = [
                    {
                        key: "Name",
                        get: function() {
                            return "plugin";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "plugin";
                        }
                    }
                ], n = [
                    {
                        key: "dispatcherName",
                        get: function() {
                            return l.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return l.Type;
                        }
                    }
                ], i11(t30.prototype, n), u && i11(t30, u), l;
            }(n18(19).default);
            t28.default = l3;
        },
        22: function(e49, t31, n19) {
            "use strict";
            n19.r(t31);
            var r11 = n19(5), i12 = (n19(2), n19(1)), a2 = {};
            function o4(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, a = t.endpointPath, o = t.fallback, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(a)), u.push("fallback=" + "".concat(o ? 1 : 0)), u.push("url=" + "".concat(encodeURIComponent(e))), "".concat(i12.default.defaultAppServerEndpoint, "/api/v2/song.json?").concat(u.join("&"));
            }
            function u4(e, t32) {
                return Object.keys(e.attributes).forEach(function(t) {
                    Object.defineProperty(e, t, {
                        get: function() {
                            return e.attributes[t];
                        }
                    });
                }), Object.keys(e.relationships).forEach(function(t) {
                    Object.defineProperty(e, t, {
                        get: function() {
                            return e.relationships[t].data.attributes;
                        }
                    });
                }), e;
            }
            var s4 = {
                get: function(e50) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.fallback = null != t.fallback && t.fallback;
                        var s = o4(e50, t), l4 = a2[s];
                        if (null != l4 && t.cache) return n(l4);
                        r11.default.getJSON(s).then(function(e) {
                            var r = e.meta, o = e.data;
                            if (200 != r.status) return i(e);
                            var l = u4(o, t);
                            return a2[s] = l, null == a2[l.permalink] && (a2[l.permalink] = l), n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t31.default = s4;
        },
        23: function(e51, t33, n20) {
            "use strict";
            n20.r(t33);
            var r12 = n20(5), i13 = n20(2), a3 = n20(1), o5 = {};
            function u5(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a3.default.defaultAppServerEndpoint, "/api/v2/song/beat.json?").concat(u.join("&"));
            }
            function s(e52, t34) {
                var n = t34.revisionId, r = e52.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "numberOfBeatsPerBar",
                            target: "count",
                            warning: !0
                        },
                        {
                            source: "number",
                            target: "position",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i13.default.warn("'Beat.".concat(t.target, "' is deprecated API, please use 'Beat.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l5 = {
                get: function(e53) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u5(e53, t), l6 = o5[a];
                        if (null != l6 && t.cache) return n(l6);
                        r12.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o5[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t33.default = l5;
        },
        24: function(e54, t35, n21) {
            "use strict";
            n21.r(t35);
            var r13 = n21(5), i14 = n21(2), a4 = n21(1), o6 = {};
            function u6(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a4.default.defaultAppServerEndpoint, "/api/v2/song/chord.json?").concat(u.join("&"));
            }
            function s(e55, t36) {
                var n = t36.revisionId, r = e55.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i14.default.warn("'Chord.".concat(t.target, "' is deprecated API, please use 'Chord.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l7 = {
                get: function(e56) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u6(e56, t), l8 = o6[a];
                        if (null != l8 && t.cache) return n(l8);
                        r13.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o6[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t35.default = l7;
        },
        25: function(e57, t37, n22) {
            "use strict";
            n22.r(t37);
            var r14 = n22(5), i15 = n22(2), a5 = n22(1), o7 = {};
            function u7(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a5.default.defaultAppServerEndpoint, "/api/v2/song/melody.json?").concat(u.join("&"));
            }
            function s(e58, t38) {
                var n = t38.revisionId, r = e58.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i15.default.warn("'Melody.".concat(t.target, "' is deprecated API, please use 'Melody.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l9 = {
                get: function(e59) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u7(e59, t), l10 = o7[a];
                        if (null != l10 && t.cache) return n(l10);
                        r14.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o7[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t37.default = l9;
        },
        26: function(e60, t39, n23) {
            "use strict";
            n23.r(t39);
            var r15 = n23(5), i16 = n23(2), a6 = n23(1), o8 = {};
            function u8(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a6.default.defaultAppServerEndpoint, "/api/v2/song/chorus.json?").concat(u.join("&"));
            }
            function s(e61, t40) {
                var n = t40.revisionId, r = e61.attributes.sequence;
                return r.forEach(function(e62) {
                    [
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "items",
                            target: "repeats",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e62, t.target, {
                            get: function() {
                                return t.warning && i16.default.warn("'ChorusSection.".concat(t.target, "' is deprecated API, please use 'ChorusSection.").concat(t.source, "'")), e62[t.source];
                            }
                        });
                    }), e62.items.forEach(function(t) {
                        [
                            {
                                source: "startTimeMs",
                                target: "startTime"
                            },
                            {
                                source: "durationTimeMs",
                                target: "durationTime"
                            },
                            {
                                source: "endTimeMs",
                                target: "endTime"
                            },
                            {
                                source: "startTime",
                                target: "start",
                                warning: !0
                            },
                            {
                                source: "durationTime",
                                target: "duration",
                                warning: !0
                            },
                            {
                                source: "endTime",
                                target: "end",
                                warning: !0
                            }
                        ].forEach(function(e) {
                            Object.defineProperty(t, e.target, {
                                get: function() {
                                    return e.warning && i16.default.warn("'ChorusSectionItem.".concat(e.target, "' is deprecated API, please use 'ChorusSectionItem.").concat(e.source, "'")), t[e.source];
                                }
                            });
                        }), Object.defineProperty(t, "prev", {
                            get: function() {
                                return e62.items[t.index - 1] || null;
                            }
                        }), Object.defineProperty(t, "next", {
                            get: function() {
                                return e62.items[t.index + 1] || null;
                            }
                        });
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l11 = {
                get: function(e63) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u8(e63, t), l12 = o8[a];
                        if (null != l12 && t.cache) return n(l12);
                        r15.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o8[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t39.default = l11;
        },
        27: function(e64, t41, n24) {
            "use strict";
            n24.r(t41);
            var r16 = n24(5), i17 = n24(2), a7 = n24(1), o9 = {};
            function u9(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = t.groupCount, s = [];
                return s.push("syntax=camelcase"), s.push("endpoint_scheme=" + "".concat(n)), s.push("endpoint_host=" + "".concat(r)), s.push("endpoint_path=" + "".concat(i)), s.push("url=" + "".concat(encodeURIComponent(e))), s.push("revision_id=" + "".concat(o)), s.push("group_count=" + "".concat(u)), "".concat(a7.default.defaultAppServerEndpoint, "/api/v2/song/variation.json?").concat(s.join("&"));
            }
            function s5(e65, t42) {
                var n = t42.revisionId, r = e65.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i17.default.warn("'Variation.".concat(t.target, "' is deprecated API, please use 'Variation.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l13 = {
                get: function(e66) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0, t.groupCount = null != t.groupCount ? t.groupCount : 2;
                        var a = u9(e66, t), l14 = o9[a];
                        if (null != l14 && t.cache) return n(l14);
                        r16.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s5(u, t);
                            return o9[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t41.default = l13;
        },
        28: function(e67, t43, n25) {
            "use strict";
            n25.r(t43);
            var r17 = n25(2);
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var o10 = function() {
                function e68(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e68), this.intervalTime = null != n.intervalTime ? n.intervalTime : this.defaultIntervalTime, this.__plugin__ = t;
                }
                var t44, n26, o;
                return t44 = e68, n26 = [
                    {
                        key: "start",
                        value: function() {
                            var e = this;
                            setTimeout(function() {
                                try {
                                    e.runTask();
                                } catch (t) {
                                    r17.default.debug("Worker's runTask is daed");
                                }
                                e.start();
                            }, this.intervalTime);
                        }
                    },
                    {
                        key: "runTask",
                        value: function() {}
                    },
                    {
                        key: "update",
                        value: function() {}
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "intervalTime",
                        set: function(e) {
                            e < this.minIntervalTime && (r17.default.warn("You can't set less than 'minIntervalTime'"), e = this.minIntervalTime), e > this.maxIntervalTime && (r17.default.warn("You can't set more than 'maxIntervalTime'"), e = this.maxIntervalTime), this.__intervalTime__ = e;
                        },
                        get: function() {
                            return this.__intervalTime__;
                        }
                    },
                    {
                        key: "plugin",
                        get: function() {
                            return this.__plugin__;
                        }
                    },
                    {
                        key: "player",
                        get: function() {
                            return this.__plugin__.player;
                        }
                    }
                ], a(t44.prototype, n26), o && a(t44, o), e68;
            }();
            t43.default = o10;
        },
        30: function(e69, t45, n27) {
            "use strict";
            n27.r(t45);
            var r = n27(1);
            var i = {
                createScriptElement: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = r.default.global.document.createElement("script");
                    return t.async = t.async || !1, t.defer = t.defer || !1, t.type = t.type || "text/javascript", n.async = t.async, n.defer = t.defer, n.src = e, n.type = t.type, n.addEventListener("abort", t.onAbort, !1), n.addEventListener("error", t.onError, !1), n.addEventListener("load", t.onLoad, !1), n;
                },
                querySelector: function(e) {
                    return "string" === r.default.typeOf(e) ? r.default.global.document.querySelector(e) : e;
                }
            };
            t45.default = i;
        },
        32: function(e70, t46, n28) {
            "use strict";
            n28.r(t46);
            var r18 = n28(4), i18 = n28.n(r18), a8 = n28(6), o11 = n28(2), u10 = n28(1);
            function s6(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l15(e71, t47, n29) {
                return (l15 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e72, t48, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e72, t48);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t48);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e71, t47, n29 || e71);
            }
            function c3(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && c3(e.prototype, t), n && c3(e, n), e;
            }
            function _(e73, t49) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e73, t49);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e74, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e74) : t;
            }
            function h(e75) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e75);
            }
            var y = function(e76) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(c, e76);
                var t50, n30, r19 = p(c);
                function c(e77) {
                    var t51;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, c), t51 = r19.call(this, null, null, e77), "string" == u10.default.typeOf(e77) && o11.default.warn("'Songle.Media.Headless' is deprecated API, please use headless option in 'Songle.Player#useMedia'"), t51;
                }
                return f(c, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-headless-media";
                        }
                    }
                ]), f(c, [
                    {
                        key: "initialize",
                        value: (t50 = i18.a.mark(function e78(t) {
                            var n = this;
                            return i18.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l15(h(c.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.__intervalId__ = setInterval(function() {
                                            n.positionTime >= n.durationTime && n.__invokeMediaStateChangeTrap__(n, a8.default.StateFinished);
                                        }, 1e3);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                            }, e78, this);
                        }), n30 = function() {
                            var e79 = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t50.apply(e79, n);
                                function o(e) {
                                    s6(a, r, i, o, u, "next", e);
                                }
                                function u(e) {
                                    s6(a, r, i, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return n30.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l15(h(c.prototype), "dispose", this).call(this), clearInterval(this.__intervalId__);
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.__invokeMediaStateChangeTrap__(this, a8.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a8.default.StatePlaying);
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.__invokeMediaStateChangeTrap__(this, a8.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a8.default.StatePaused);
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            switch(l15(h(c.prototype), "seekTo", this).call(this, e), !0){
                                case this.isPlaying:
                                    this.__invokeMediaStateChangeTrap__(this, a8.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a8.default.StateSeeking), this.__invokeMediaStateChangeTrap__(this, a8.default.StatePlaying);
                                    break;
                                case this.isPaused:
                                    this.__invokeMediaStateChangeTrap__(this, a8.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a8.default.StateSeeking), this.__invokeMediaStateChangeTrap__(this, a8.default.StatePaused);
                            }
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return c.Name;
                        }
                    }
                ]), c;
            }(a8.default.SuperClass);
            t46.default = y;
        },
        37: function(e80, t52, n31) {
            "use strict";
            function r20(e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                for(var r in t)null != t[r] && n.setAttribute(i(r), String(t[r]));
                return n;
            }
            function i(e) {
                switch(e){
                    case "strokeWidth":
                        e = "stroke-width";
                }
                return e;
            }
            n31.r(t52);
            var a = {
                createSVGElement: function(e) {
                    return r20("svg", e);
                },
                createGroupElement: function(e) {
                    return r20("g", e);
                },
                createRectElement: function(e) {
                    return r20("rect", e);
                },
                createCircleElement: function(e) {
                    return r20("circle", e);
                },
                createLineElement: function(e) {
                    return r20("line", e);
                },
                createPolygonElement: function(e) {
                    return r20("polygon", e);
                }
            };
            t52.default = a;
        },
        4: function(e, t, n) {
            e.exports = n(46);
        },
        41: function(e81, t53, n32) {
            "use strict";
            function r21(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i19(e82, t54) {
                return (i19 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e82, t54);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u11(e);
                    if (t) {
                        var i = u11(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o12(this, n);
                };
            }
            function o12(e83, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e83) : t;
            }
            function u11(e84) {
                return (u11 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e84);
            }
            n32.r(t53);
            var s7 = function(e85) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i19(e, t);
                }(s, e85);
                var t55, n33, o, u = a(s);
                function s(e86) {
                    var t56;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t56 = u.call(this, e86)).__enterStates__ = [], t56.__leaveStates__ = [], t56;
                }
                return t55 = s, n33 = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i20 = this.__player__.musicMap;
                            i20.beats && i20.beats.forEach(function(i) {
                                i.prev && e < i.prev.startTime && t >= i.prev.startTime && n.__enterStates__[i.prev.index] && !n.__leaveStates__[i.prev.index] && (r.leave && r.leave({
                                    beat: i.prev
                                }), n.__leaveStates__[i.prev.index] = !0), i && e < i.startTime && t >= i.startTime && (n.__enterStates__[i.index] || n.__leaveStates__[i.index] || (r.enter && r.enter({
                                    beat: i
                                }), n.__enterStates__[i.index] = !0));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r21(t55.prototype, n33), o && r21(t55, o), s;
            }(n32(13).default);
            t53.default = s7;
        },
        411: function(e87, t, n) {
            "use strict";
            n.r(t);
            var r = n(77), i = n(174), a = (n(185), n(6)), o = n(21), u = n(32), s = n(59), l = n(57), c = n(58), f = n(47), _ = n(48), p = n(49), d = n(50), h = n(51), y = n(62), v = n(100), g = (n(2), n(1)), m = (n(5), n(12)), b = {
                Player: r.default,
                SyncPlayer: i.default,
                Media: {
                    SuperClass: a.default,
                    Headless: u.default,
                    HTMLMediaElement: s.default,
                    NNVideo: l.default,
                    YTVideo: c.default
                },
                Plugin: {
                    SuperClass: o.default,
                    Beat: f.default,
                    Chord: _.default,
                    Melody: p.default,
                    Chorus: d.default,
                    Variation: h.default,
                    SongleSync: y.default,
                    SongleWidget: v.default
                },
                SongleAPI: m.default,
                System: g.default
            }, k = 20;
            g.default.global.SW = g.default.global.SW || b, g.default.global.Songle = g.default.global.Songle || b, g.default.showDebugLog = !1, g.default.showErrorLog = !0, g.default.showLicense = !0, function e() {
                setTimeout(function() {
                    g.default.global.SWAPIReady || k <= 0 || (k--, g.default.global.onSongleWidgetAPIReady && (g.default.global.onSongleWidgetAPIReady(b), g.default.global.SWAPIReady = !0), g.default.global.onSongleAPIReady && (g.default.global.onSongleAPIReady(b), g.default.global.SWAPIReady = !0), e());
                }, 500);
            }(), t.default = b;
        },
        42: function(e88, t57, n34) {
            "use strict";
            function r22(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i21(e89, t58) {
                return (i21 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e89, t58);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u12(e);
                    if (t) {
                        var i = u12(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o13(this, n);
                };
            }
            function o13(e90, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e90) : t;
            }
            function u12(e91) {
                return (u12 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e91);
            }
            n34.r(t57);
            var s8 = function(e92) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i21(e, t);
                }(s, e92);
                var t59, n35, o, u = a(s);
                function s(e93) {
                    var t60;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t60 = u.call(this, e93)).__enterStates__ = [], t60.__leaveStates__ = [], t60;
                }
                return t59 = s, n35 = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i22 = this.__player__.musicMap;
                            i22.chords && i22.chords.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    chord: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    chord: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n36 = this.__player__.musicMap;
                            n36.chords && n36.chords.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    chord: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r22(t59.prototype, n35), o && r22(t59, o), s;
            }(n34(13).default);
            t57.default = s8;
        },
        43: function(e94, t61, n37) {
            "use strict";
            function r23(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i23(e95, t62) {
                return (i23 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e95, t62);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u13(e);
                    if (t) {
                        var i = u13(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o14(this, n);
                };
            }
            function o14(e96, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e96) : t;
            }
            function u13(e97) {
                return (u13 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e97);
            }
            n37.r(t61);
            var s9 = function(e98) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i23(e, t);
                }(s, e98);
                var t63, n38, o, u = a(s);
                function s(e99) {
                    var t64;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t64 = u.call(this, e99)).__enterStates__ = [], t64.__leaveStates__ = [], t64;
                }
                return t63 = s, n38 = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i24 = this.__player__.musicMap;
                            i24.melodies && i24.melodies.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    melody: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    melody: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n39 = this.__player__.musicMap;
                            n39.melodies && n39.melodies.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    melody: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r23(t63.prototype, n38), o && r23(t63, o), s;
            }(n37(13).default);
            t61.default = s9;
        },
        44: function(e100, t65, n40) {
            "use strict";
            n40.r(t65);
            var r24 = n40(13);
            function i25(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a9(e101, t66) {
                return (a9 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e101, t66);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s10(e);
                    if (t) {
                        var i = s10(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u14(this, n);
                };
            }
            function u14(e102, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e102) : t;
            }
            function s10(e103) {
                return (s10 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e103);
            }
            var l = function(e104) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a9(e, t);
                }(s, e104);
                var t67, n41, r25, u = o(s);
                function s(e105) {
                    var t68;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t68 = u.call(this, e105)).__enterStates__ = [], t68.__leaveStates__ = [], t68;
                }
                return t67 = s, n41 = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i26 = this.__player__.musicMap;
                            i26.chorus && i26.chorus.forEach(function(i) {
                                i.items.forEach(function(a) {
                                    e < a.startTime + a.durationTime && t >= a.startTime ? n.__invokeEnterTrap__(i, a, r) : n.__invokeLeaveTrap__(i, a, r);
                                });
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.__invokeAllLeaveTrap__(e), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    },
                    {
                        key: "__getStateIndex__",
                        value: function(e, t) {
                            return 16 * e.index + t.index;
                        }
                    },
                    {
                        key: "__invokeAllEnterTrap__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n42 = this.__player__.musicMap;
                            n42.chorus && n42.chorus.forEach(function(n) {
                                n.items.forEach(function(r) {
                                    e.__invokeEnterTrap__(n, r, t);
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeAllLeaveTrap__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n43 = this.__player__.musicMap;
                            n43.chorus && n43.chorus.forEach(function(n) {
                                n.items.forEach(function(r) {
                                    e.__invokeLeaveTrap__(n, r, t);
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeEnterTrap__",
                        value: function(e, t69) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__getStateIndex__(e, t69);
                            this.__enterStates__[i] || this.__leaveStates__[i] || (e.items.forEach(function(t) {
                                n.__invokeLeaveTrap__(e, t, r);
                            }), r.enter && r.enter({
                                section: e,
                                sectionItem: t69
                            }), this.__enterStates__[i] = !0);
                        }
                    },
                    {
                        key: "__invokeLeaveTrap__",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = this.__getStateIndex__(e, t);
                            this.__enterStates__[r] && !this.__leaveStates__[r] && (n.leave && n.leave({
                                section: e,
                                sectionItem: t
                            }), this.__leaveStates__[r] = !0);
                        }
                    }
                ], i25(t67.prototype, n41), r25 && i25(t67, r25), s;
            }(r24.default);
            t65.default = l;
        },
        45: function(e106, t70, n44) {
            "use strict";
            function r26(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i27(e107, t71) {
                return (i27 = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e107, t71);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u15(e);
                    if (t) {
                        var i = u15(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o15(this, n);
                };
            }
            function o15(e108, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e108) : t;
            }
            function u15(e109) {
                return (u15 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e109);
            }
            n44.r(t70);
            var s11 = function(e110) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i27(e, t);
                }(s, e110);
                var t72, n45, o, u = a(s);
                function s(e111) {
                    var t73;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t73 = u.call(this, e111)).__enterStates__ = [], t73.__leaveStates__ = [], t73;
                }
                return t72 = s, n45 = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i28 = this.__player__.musicMap;
                            i28.variations && i28.variations.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    variation: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    variation: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n46 = this.__player__.musicMap;
                            n46.variations && n46.variations.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    variation: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r26(t72.prototype, n45), o && r26(t72, o), s;
            }(n44(13).default);
            t70.default = s11;
        },
        46: function(e112, t74, n47) {
            var r27 = function(e113) {
                "use strict";
                var t75 = Object.prototype, n48 = t75.hasOwnProperty, r28 = "function" === typeof Symbol ? Symbol : {}, i29 = r28.iterator || "@@iterator", a10 = r28.asyncIterator || "@@asyncIterator", o16 = r28.toStringTag || "@@toStringTag";
                function u16(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    u16({}, "");
                } catch (O1) {
                    u16 = function(e, t, n) {
                        return e[t] = n;
                    };
                }
                function s12(e114, t76, n49, r29) {
                    var i30 = t76 && t76.prototype instanceof f3 ? t76 : f3, a11 = Object.create(i30.prototype), o17 = new S(r29 || []);
                    return a11._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(i, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === i) throw a;
                                return w();
                            }
                            for(n.method = i, n.arg = a;;){
                                var o = n.delegate;
                                if (o) {
                                    var u = b(o, n);
                                    if (u) {
                                        if (u === c4) continue;
                                        return u;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var s = l(e, t, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", s.arg === c4) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
                            }
                        };
                    }(e114, n49, o17), a11;
                }
                function l(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (O) {
                        return {
                            type: "throw",
                            arg: O
                        };
                    }
                }
                e113.wrap = s12;
                var c4 = {};
                function f3() {}
                function _() {}
                function p() {}
                var d = {};
                d[i29] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, y = h && h(h(P([])));
                y && y !== t75 && n48.call(y, i29) && (d = y);
                var v = p.prototype = f3.prototype = Object.create(d);
                function g(e115) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        u16(e115, t, function(e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function m(e116, t) {
                    var r30;
                    this._invoke = function(i31, a12) {
                        function o18() {
                            return new t(function(r31, o19) {
                                !function r(i, a, o, u) {
                                    var s = l(e116[i], e116, a);
                                    if ("throw" !== s.type) {
                                        var c = s.arg, f = c.value;
                                        return f && "object" === typeof f && n48.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                            r("next", e, o, u);
                                        }, function(e) {
                                            r("throw", e, o, u);
                                        }) : t.resolve(f).then(function(e) {
                                            c.value = e, o(c);
                                        }, function(e) {
                                            return r("throw", e, o, u);
                                        });
                                    }
                                    u(s.arg);
                                }(i31, a12, r31, o19);
                            });
                        }
                        return r30 = r30 ? r30.then(o18, o18) : o18();
                    };
                }
                function b(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return c4;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return c4;
                    }
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, c4;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c4) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c4);
                }
                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function T(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function S(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(k, this), this.reset(!0);
                }
                function P(e) {
                    if (e) {
                        var t77 = e[i29];
                        if (t77) return t77.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1, a = function t() {
                                for(; ++r < e.length;)if (n48.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t;
                            };
                            return a.next = a;
                        }
                    }
                    return {
                        next: w
                    };
                }
                function w() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return _.prototype = v.constructor = p, p.constructor = _, _.displayName = u16(p, o16, "GeneratorFunction"), e113.isGeneratorFunction = function(e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name));
                }, e113.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, u16(e, o16, "GeneratorFunction")), e.prototype = Object.create(v), e;
                }, e113.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, g(m.prototype), m.prototype[a10] = function() {
                    return this;
                }, e113.AsyncIterator = m, e113.async = function(t, n, r, i, a) {
                    void 0 === a && (a = Promise);
                    var o = new m(s12(t, n, r, i), a);
                    return e113.isGeneratorFunction(n) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, g(v), u16(v, o16, "Generator"), v[i29] = function() {
                    return this;
                }, v.toString = function() {
                    return "[object Generator]";
                }, e113.keys = function(e) {
                    var t = [];
                    for(var n50 in e)t.push(n50);
                    return t.reverse(), function n() {
                        for(; t.length;){
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, e113.values = P, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e) for(var t in this)"t" === t.charAt(0) && n48.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function r32(n, r) {
                            return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
                        }
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var a = this.tryEntries[i], o = a.completion;
                            if ("root" === a.tryLoc) return r32("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n48.call(a, "catchLoc"), s = n48.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc) return r32(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r32(a.finallyLoc);
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r32(a.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r32(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n48.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var a = i;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, c4) : this.complete(o);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c4;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), c4;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    T(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), c4;
                    }
                }, e113;
            }(e112.exports);
            try {
                regeneratorRuntime = r27;
            } catch (i) {
                Function("r", "regeneratorRuntime = r")(r27);
            }
        },
        47: function(e117, t79, n51) {
            "use strict";
            n51.r(t79);
            var r33 = n51(4), i32 = n51.n(r33), a13 = n51(15), o20 = n51(41), u17 = n51(14);
            n51(2), n51(12);
            function s13(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l16(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e118, t80, n52) {
                return (f = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e119, t81, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e119, t81);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t81);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e118, t80, n52 || e118);
            }
            function _(e120, t82) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e120, t82);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d2(this, n);
                };
            }
            function d2(e121, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e121) : t;
            }
            function h(e122) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e122);
            }
            var y2 = function(e123) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(v, e123);
                var t83, n53, r34, a, d, y = p(v);
                function v() {
                    return l16(this, v), y.apply(this, arguments);
                }
                return t83 = v, n53 = [
                    {
                        key: "initialize",
                        value: function(e124) {
                            var t84 = this;
                            f(h(v.prototype), "initialize", this).call(this, e124), e124.seekToPrevBar = function() {
                                var t = u17.default.findPrevBar(e124);
                                t && e124.seekTo(t.start);
                            }, e124.seekToNextBar = function() {
                                var t = u17.default.findNextBar(e124);
                                t && e124.seekTo(t.start);
                            }, this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t84.__resetBarLeaveTrap__(), t84.__resetBeatLeaveTrap__(), t84.__resetBarEnterTrap__(), t84.__resetBeatEnterTrap__();
                            }), function e125() {
                                t84.mapTrapsHasNotData([
                                    "barEnter",
                                    "barLeave",
                                    "beatEnter",
                                    "beatLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o20.default(t84.player);
                                }), setTimeout(function() {
                                    t84.player.isPlaying && (t84.__invokeBarLeaveTrap__(), t84.__invokeBeatLeaveTrap__(), t84.__invokeBarEnterTrap__(), t84.__invokeBeatEnterTrap__()), e125();
                                }, t84.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i32.a.mark(function e126(t) {
                            return i32.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return f(h(v.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadBeat();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e126, this);
                        }), d = function() {
                            var e127 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e127, t);
                                function o(e) {
                                    s13(i, n, r, o, u, "next", e);
                                }
                                function u(e) {
                                    s13(i, n, r, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetBarEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("barEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetBarLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__resetBeatEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("beatEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetBeatLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBarEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        1 === n.beat.number && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBarLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        1 === n.beat.number && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBeatEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBeatLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return v.Name;
                        }
                    }
                ], r34 = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-beat";
                        }
                    },
                    {
                        key: "BarEnterTrapName",
                        get: function() {
                            return "barEnter";
                        }
                    },
                    {
                        key: "BarLeaveTrapName",
                        get: function() {
                            return "barLeave";
                        }
                    },
                    {
                        key: "BeatEnterTrapName",
                        get: function() {
                            return "beatEnter";
                        }
                    },
                    {
                        key: "BeatLeaveTrapName",
                        get: function() {
                            return "beatLeave";
                        }
                    }
                ], n53 && c(t83.prototype, n53), r34 && c(t83, r34), v;
            }(a13.default);
            t79.default = y2;
        },
        48: function(e128, t85, n54) {
            "use strict";
            n54.r(t85);
            var r35 = n54(4), i33 = n54.n(r35), a14 = n54(15), o21 = n54(42);
            n54(14), n54(2), n54(12);
            function u18(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s14(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l17(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e129, t86, n55) {
                return (c = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e130, t87, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e;
                    }(e130, t87);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t87);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e129, t86, n55 || e129);
            }
            function f(e131, t88) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e131, t88);
            }
            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p2(this, n);
                };
            }
            function p2(e132, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e132) : t;
            }
            function d(e133) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e133);
            }
            var h2 = function(e134) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t);
                }(y, e134);
                var t89, n56, r36, a, p, h = _(y);
                function y() {
                    return s14(this, y), h.apply(this, arguments);
                }
                return t89 = y, n56 = [
                    {
                        key: "initialize",
                        value: function(e135) {
                            var t = this;
                            c(d(y.prototype), "initialize", this).call(this, e135), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetChordLeaveTrap__(), t.__resetChordEnterTrap__();
                            }), function e136() {
                                t.mapTrapsHasNotData([
                                    "chordEnter",
                                    "chordLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o21.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runChordLeaveTrap__(), t.__runChordEnterTrap__()), e136();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i33.a.mark(function e137(t) {
                            return i33.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return c(d(y.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadChord();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e137, this);
                        }), p = function() {
                            var e138 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e138, t);
                                function o(e) {
                                    u18(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u18(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return p.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetChordEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("chordEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetChordLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runChordEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runChordLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    }
                ], r36 = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-chord";
                        }
                    },
                    {
                        key: "ChordEnterTrapName",
                        get: function() {
                            return "chordEnter";
                        }
                    },
                    {
                        key: "ChordLeaveTrapName",
                        get: function() {
                            return "chordLeave";
                        }
                    }
                ], n56 && l17(t89.prototype, n56), r36 && l17(t89, r36), y;
            }(a14.default);
            t85.default = h2;
        },
        49: function(e139, t90, n57) {
            "use strict";
            n57.r(t90);
            var r37 = n57(4), i34 = n57.n(r37), a15 = n57(15), o22 = n57(43);
            n57(14), n57(2), n57(12);
            function u19(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s15(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l18(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e140, t91, n58) {
                return (c = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e141, t92, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e;
                    }(e141, t92);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t92);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e140, t91, n58 || e140);
            }
            function f(e142, t93) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e142, t93);
            }
            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p3(this, n);
                };
            }
            function p3(e143, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e143) : t;
            }
            function d(e144) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e144);
            }
            var h3 = function(e145) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t);
                }(y, e145);
                var t94, n59, r38, a, p, h = _(y);
                function y() {
                    return s15(this, y), h.apply(this, arguments);
                }
                return t94 = y, n59 = [
                    {
                        key: "initialize",
                        value: function(e146) {
                            var t = this;
                            c(d(y.prototype), "initialize", this).call(this, e146), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetMelodyLeaveTrap__(), t.__resetMelodyEnterTrap__();
                            }), function e147() {
                                t.mapTrapsHasNotData([
                                    "melodyEnter",
                                    "melodyLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o22.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runMelodyLeaveTrap__(), t.__runMelodyEnterTrap__()), e147();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i34.a.mark(function e148(t) {
                            return i34.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return c(d(y.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadMelody();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e148, this);
                        }), p = function() {
                            var e149 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e149, t);
                                function o(e) {
                                    u19(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u19(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return p.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetMelodyEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("melodyEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetMelodyLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runMelodyEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runMelodyLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    }
                ], r38 = [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-melody";
                        }
                    },
                    {
                        key: "MelodyEnterTrapName",
                        get: function() {
                            return "melodyEnter";
                        }
                    },
                    {
                        key: "MelodyLeaveTrapName",
                        get: function() {
                            return "melodyLeave";
                        }
                    }
                ], n59 && l18(t94.prototype, n59), r38 && l18(t94, r38), y;
            }(a15.default);
            t90.default = h3;
        },
        5: function(e150, t95, n60) {
            "use strict";
            function r39(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(r, i) {
                    var a = null != n.method ? n.method : "GET", o = null != n.responseType ? n.responseType : "", u = new XMLHttpRequest;
                    switch(u.addEventListener("abort", function(e) {
                        i(u);
                    }, !1), u.addEventListener("error", function(e) {
                        i(u);
                    }, !1), u.addEventListener("load", function(e) {
                        r(u);
                    }, !1), u.open(a, e, !0), u.responseType = o, a){
                        case "GET":
                            u.send();
                            break;
                        default:
                            u.setRequestHeader("Content-Type", "application/json"), u.send(JSON.stringify(t));
                    }
                });
            }
            function i35(e151, t96) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, o) {
                    r39(e151, t96, {
                        method: n.method,
                        responseType: n.responseType
                    }).then(function(e) {
                        var t = a16(e);
                        i(t);
                    }, function(e) {
                        var t = a16(e);
                        o(t);
                    });
                });
            }
            function a16(e) {
                var t = e.responseText || e.response || "null";
                return JSON.parse(t);
            }
            n60.r(t95);
            var o23 = {
                ajax: r39,
                ajaxJSON: i35,
                getJSON: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return t.method = "GET", i35(e, null, t);
                },
                postJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "POST", i35(e, t, n);
                },
                putJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "PUT", i35(e, t, n);
                },
                deleteJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "DELETE", i35(e, t, n);
                }
            };
            t95.default = o23;
        },
        50: function(e152, t97, n61) {
            "use strict";
            n61.r(t97);
            var r40 = n61(4), i36 = n61.n(r40), a17 = n61(15), o24 = n61(44), u20 = n61(14);
            n61(2), n61(12);
            function s16(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l19(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e153, t98, n62) {
                return (f = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e154, t99, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e154, t99);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t99);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e153, t98, n62 || e153);
            }
            function _(e155, t100) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e155, t100);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d3(this, n);
                };
            }
            function d3(e156, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e156) : t;
            }
            function h(e157) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e157);
            }
            var y3 = function(e158) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(v, e158);
                var t101, n63, r41, a, d, y = p(v);
                function v() {
                    return l19(this, v), y.apply(this, arguments);
                }
                return t101 = v, n63 = [
                    {
                        key: "initialize",
                        value: function(e159) {
                            var t102 = this;
                            f(h(v.prototype), "initialize", this).call(this, e159), e159.seekToPrevChorusSection = function() {
                                var t = u20.default.findPrevRepeatedSectionItem(e159, {
                                    chorusOnly: !0
                                });
                                t && e159.seekTo(t.start);
                            }, e159.seekToPrevChorusSectionItem = e159.seekToPrevChorusSection, e159.seekToNextChorusSection = function() {
                                var t = u20.default.findNextRepeatedSectionItem(e159, {
                                    chorusOnly: !0
                                });
                                t && e159.seekTo(t.start);
                            }, e159.seekToNextChorusSectionItem = e159.seekToNextChorusSection, e159.seekToPrevRepeatedSection = function() {
                                var t = u20.default.findPrevRepeatedSectionItem(e159);
                                t && e159.seekTo(t.start);
                            }, e159.seekToPrevRepeatedSectionItem = e159.seekToPrevRepeatedSection, e159.seekToNextRepeatedSection = function() {
                                var t = u20.default.findNextRepeatedSectionItem(e159);
                                t && e159.seekTo(t.start);
                            }, e159.seekToNextRepeatedSectionItem = e159.seekToNextRepeatedSection, this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t102.__resetChorusSectionLeaveTrap__(), t102.__resetChorusSectionEnterTrap__(), t102.__resetRepeatedSectionLeaveTrap__(), t102.__resetRepeatedSectionEnterTrap__();
                            }), function e160() {
                                t102.mapTrapsHasNotData([
                                    "chorusSectionEnter",
                                    "chorusSectionLeave",
                                    "repeatedSectionEnter",
                                    "repeatedSectionLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o24.default(t102.player);
                                }), setTimeout(function() {
                                    t102.player.isPlaying && (t102.__runChorusSectionLeaveTrap__(), t102.__runChorusSectionEnterTrap__(), t102.__runRepeatedSectionLeaveTrap__(), t102.__runRepeatedSectionEnterTrap__()), e160();
                                }, t102.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i36.a.mark(function e161(t) {
                            return i36.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return f(h(v.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadChorus();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e161, this);
                        }), d = function() {
                            var e162 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e162, t);
                                function o(e) {
                                    s16(i, n, r, o, u, "next", e);
                                }
                                function u(e) {
                                    s16(i, n, r, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetChorusSectionEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("chorusSectionEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetChorusSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__resetRepeatedSectionEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("repeatedSectionEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetRepeatedSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runChorusSectionEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runChorusSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runRepeatedSectionEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runRepeatedSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return v.Name;
                        }
                    }
                ], r41 = [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-chorus";
                        }
                    },
                    {
                        key: "ChorusSectionEnterTrapName",
                        get: function() {
                            return "chorusSectionEnter";
                        }
                    },
                    {
                        key: "ChorusSectionLeaveTrapName",
                        get: function() {
                            return "chorusSectionLeave";
                        }
                    },
                    {
                        key: "RepeatedSectionEnterTrapName",
                        get: function() {
                            return "repeatedSectionEnter";
                        }
                    },
                    {
                        key: "RepeatedSectionLeaveTrapName",
                        get: function() {
                            return "repeatedSectionLeave";
                        }
                    }
                ], n63 && c(t101.prototype, n63), r41 && c(t101, r41), v;
            }(a17.default);
            t97.default = y3;
        },
        51: function(e163, t103, n64) {
            "use strict";
            n64.r(t103);
            var r42 = n64(4), i37 = n64.n(r42), a18 = n64(15), o25 = n64(45);
            n64(14), n64(2), n64(12);
            function u21(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s17(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l20(e164, t104, n65) {
                return (l20 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e165, t105, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e165, t105);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t105);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e164, t104, n65 || e164);
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e;
            }
            function _(e166, t106) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e166, t106);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e167, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e167) : t;
            }
            function h(e168) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e168);
            }
            var y = function(e169) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(a19, e169);
                var t107, n66, r43 = p(a19);
                function a19() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return s17(this, a19), (e = r43.call(this, t)).__groupCount__ = null != t.groupCount ? t.groupCount : 2, e.__groupCount__ < 2 && (e.__groupCount__ = 2), e.__groupCount__ > 10 && (e.__groupCount__ = 10), e;
                }
                return f(a19, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-variation";
                        }
                    },
                    {
                        key: "MinGroupCount",
                        get: function() {
                            return 2;
                        }
                    },
                    {
                        key: "MaxGroupCount",
                        get: function() {
                            return 10;
                        }
                    },
                    {
                        key: "VariationEnterTrapName",
                        get: function() {
                            return "variationEnter";
                        }
                    },
                    {
                        key: "VariationLeaveTrapName",
                        get: function() {
                            return "variationLeave";
                        }
                    }
                ]), f(a19, [
                    {
                        key: "initialize",
                        value: function(e170) {
                            var t = this;
                            l20(h(a19.prototype), "initialize", this).call(this, e170), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetVariationLeaveTrap__(), t.__resetVariationEnterTrap__();
                            });
                            !function e171() {
                                t.mapTrapsHasNotData([
                                    "variationEnter",
                                    "variationLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o25.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runVariationLeaveTrap__(), t.__runVariationEnterTrap__()), e171();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (t107 = i37.a.mark(function e172(t) {
                            return i37.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return l20(h(a19.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadVariation();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e172, this);
                        }), n66 = function() {
                            var e173 = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t107.apply(e173, n);
                                function o(e) {
                                    u21(a, r, i, o, s, "next", e);
                                }
                                function s(e) {
                                    u21(a, r, i, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return n66.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetVariationEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("variationEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetVariationLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runVariationEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runVariationLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return a19.Name;
                        }
                    }
                ]), a19;
            }(a18.default);
            t103.default = y;
        },
        52: function(e174, t108, n67) {
            "use strict";
            n67.r(t108);
            var r44 = n67(5), i38 = n67(1);
            var a20 = {
                getClock: function(e175) {
                    return new Promise(function(t, n) {
                        var a = e175.accessToken, o = [];
                        o.push("syntax=camelcase"), r44.default.getJSON("".concat(i38.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(a, "/clock.json?").concat(o.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(i.attributes.time);
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t108.default = a20;
        },
        53: function(e176, t109, n68) {
            "use strict";
            n68.r(t109);
            var r = n68(5), i = n68(1);
            var a21 = {
                createHistory: function(e177) {
                    return new Promise(function(t, n) {
                        var a = {};
                        a.stage_id = e177.stageId, a.node_id = e177.nodeId, a.is_master = e177.isMaster, a.is_slave = e177.isSalve, a.referer = i.default.referer, a.user_agent = i.default.userAgent, r.default.postJSON("".concat(i.default.defaultLogServerEndpoint, "/songle-api.stage-logs"), a).then(function(e) {
                            return t(e);
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t109.default = a21;
        },
        54: function(e178, t110, n69) {
            "use strict";
            n69.r(t110);
            var r45 = n69(5), i39 = n69(1);
            var a22 = {
                getMessage: function(e179) {
                    return new Promise(function(t, n) {
                        var a = e179.accessToken, o = [];
                        o.push("syntax=camelcase"), r45.default.getJSON("".concat(i39.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(a, "/message.json?").concat(o.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(i);
                        }, function(e) {
                            return n(e);
                        });
                    });
                },
                updateMessage: function(e180, t111) {
                    return new Promise(function(n, a) {
                        var o = e180.accessToken, u = e180.secretToken, s = {
                            syntax: "camelcase"
                        };
                        s.access_token = o, s.secret_token = u, s.data = t111, r45.default.putJSON("".concat(i39.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/message.json"), s).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                }
            };
            t110.default = a22;
        },
        55: function(e181, t112, n70) {
            "use strict";
            n70.r(t112);
            var r46 = n70(5), i40 = n70(1);
            function a(e182) {
                var t113 = e182.map(function(e) {
                    var t = e.attributes;
                    return Object.defineProperties(t, {
                        relativeStartTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs;
                            }
                        },
                        relativeEndTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs;
                            }
                        },
                        durationTime: {
                            get: function() {
                                return e.attributes.durationTimeMs;
                            }
                        },
                        startTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs;
                            }
                        },
                        endTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs;
                            }
                        },
                        mediaRelativeStartTime: {
                            get: function() {
                                return e.attributes.mediaRelativeStartTimeMs;
                            }
                        },
                        mediaRelativeEndTime: {
                            get: function() {
                                return e.attributes.mediaRelativeEndTimeMs;
                            }
                        },
                        mediaDurationTime: {
                            get: function() {
                                return e.attributes.mediaDurationTimeMs;
                            }
                        },
                        mediaStartTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs + e.attributes.mediaRelativeStartTimeMs;
                            }
                        },
                        mediaEndTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs + e.attributes.mediaRelativeEndTimeMs;
                            }
                        }
                    }), t;
                });
                return t113.forEach(function(e, n) {
                    Object.defineProperties(e, {
                        prev: {
                            get: function() {
                                return t113[n - 1] || null;
                            }
                        },
                        next: {
                            get: function() {
                                return t113[n + 1] || null;
                            }
                        }
                    });
                }), t113.sort(function(e, t) {
                    return e.index - t.index;
                });
            }
            var o26 = {
                getPlaylist: function(e183) {
                    return new Promise(function(t, n) {
                        var o = e183.accessToken, u = [];
                        u.push("syntax=camelcase"), r46.default.getJSON("".concat(i40.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/playlist.json?").concat(u.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(a(i));
                        }, function(e) {
                            return n(e);
                        });
                    });
                },
                createPlaylist: function(e184, t114) {
                    return new Promise(function(n, o) {
                        var u = e184.accessToken, s = e184.secretToken, l = {
                            syntax: "camelcase"
                        };
                        l.access_token = u, l.secret_token = s, l.items = t114, r46.default.postJSON("".concat(i40.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(u, "/playlist.json"), l).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? o(e) : n(a(r));
                        }, function(e) {
                            return o(e);
                        });
                    });
                },
                deletePlaylist: function(e185) {
                    return new Promise(function(t, n) {
                        var o = e185.accessToken, u = e185.secretToken, s = {
                            syntax: "camelcase"
                        };
                        s.access_token = o, s.secret_token = u, r46.default.deleteJSON("".concat(i40.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/playlist.json"), s).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(a(i));
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t112.default = o26;
        },
        56: function(e186, t115, n71) {
            "use strict";
            n71.r(t115);
            var r47 = n71(5), i = n71(1);
            var a23 = {
                getStage: function(e187) {
                    var t116 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, a) {
                        var o = e187.accessToken, u = null != t116.nodeTimeoutSec ? t116.nodeTimeoutSec : e187.nodeTimeoutSec, s = [];
                        s.push("syntax=camelcase"), null != u && s.push("node_timeout_sec=" + u), r47.default.getJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, ".json?").concat(s.join("&"))).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                },
                updateStage: function(e188) {
                    var t117 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, a) {
                        var o = e188.accessToken, u = e188.secretToken, s = null != t117.absoluteStartTime ? t117.absoluteStartTime : null, l = null != t117.absolutePauseTime ? t117.absolutePauseTime : null, c = null != t117.stateId ? t117.stateId : null, f = null != t117.nodeTimeoutSec ? t117.nodeTimeoutSec : e188.nodeTimeoutSec, _ = {
                            syntax: "camelcase"
                        };
                        _.access_token = o, _.secret_token = u, null != s && (_.absolute_start_time_ms = s), null != l && (_.absolute_pause_time_ms = l), null != c && (_.state_id = c), null != f && (_.node_timeout_sec = f), r47.default.putJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, ".json"), _).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                }
            };
            t115.default = a23;
        },
        57: function(e189, t118, n72) {
            "use strict";
            n72.r(t118);
            var r48 = n72(4), i41 = n72.n(r48), a24 = n72(6);
            function o27(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u22(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s18(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l21(e190, t119, n73) {
                return (l21 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e191, t120, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e191, t120);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t120);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e190, t119, n73 || e190);
            }
            function c(e192, t121) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e192, t121);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _3(this, n);
                };
            }
            function _3(e193, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e193) : t;
            }
            function p(e194) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e194);
            }
            var d4 = function(e195) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e195);
                var t122, n74, r49, _, d, h = f(y);
                function y() {
                    return u22(this, y), h.apply(this, arguments);
                }
                return t122 = y, n74 = [
                    {
                        key: "initialize",
                        value: (_ = i41.a.mark(function e196(t) {
                            var n = this;
                            return i41.a.wrap(function(e197) {
                                for(;;)switch(e197.prev = e197.next){
                                    case 0:
                                        if (null == this.player) {
                                            e197.next = 2;
                                            break;
                                        }
                                        return e197.abrupt("return");
                                    case 2:
                                        return e197.next = 4, l21(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("statusChange", function(e) {
                                            switch(n.__invokeMediaStateChangeTrap__(n, a24.default.StateTimeUpdate), e.playerStatus << 4 | e.seekStatus << 0){
                                                case 32:
                                                    n.__invokeMediaStateChangeTrap__(n, a24.default.StatePlaying);
                                                    break;
                                                case 48:
                                                    if (n.isSeeking) return;
                                                    n.__invokeMediaStateChangeTrap__(n, a24.default.StatePaused);
                                                    break;
                                                case 50:
                                                    n.__invokeMediaStateChangeTrap__(n, a24.default.StateSeeking);
                                                    break;
                                                case 64:
                                                    n.__invokeMediaStateChangeTrap__(n, a24.default.StateFinished);
                                            }
                                        });
                                    case 5:
                                    case "end":
                                        return e197.stop();
                                }
                            }, e196, this);
                        }), d = function() {
                            var e198 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e198, t);
                                function a(e) {
                                    o27(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o27(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l21(p(y.prototype), "dispose", this).call(this), this.originalPlayer.dispose();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l21(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.play();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pause();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.currentTime(e);
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return this.originalPlayer.currentTime() || 0;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.muted();
                        },
                        set: function(e) {
                            this.originalPlayer.muted(!!e);
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return 100 * this.originalPlayer.volume();
                        },
                        set: function(e) {
                            var t = e / 100;
                            return t < 0 ? this.originalPlayer.volume(0) : t > 1 ? this.originalPlayer.volume(1) : void this.originalPlayer.volume(t);
                        }
                    }
                ], r49 = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-nn-media";
                        }
                    }
                ], n74 && s18(t122.prototype, n74), r49 && s18(t122, r49), y;
            }(a24.default.SuperClass);
            t118.default = d4;
        },
        58: function(e199, t123, n75) {
            "use strict";
            n75.r(t123);
            var r50 = n75(4), i42 = n75.n(r50), a25 = n75(6);
            function o28(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u23(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s19(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l22(e200, t124, n76) {
                return (l22 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e201, t125, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e201, t125);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t125);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e200, t124, n76 || e200);
            }
            function c(e202, t126) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e202, t126);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _4(this, n);
                };
            }
            function _4(e203, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e203) : t;
            }
            function p(e204) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e204);
            }
            var d5 = function(e205) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e205);
                var t127, n77, r51, _, d, h = f(y);
                function y() {
                    return u23(this, y), h.apply(this, arguments);
                }
                return t127 = y, n77 = [
                    {
                        key: "initialize",
                        value: (_ = i42.a.mark(function e206(t) {
                            var n = this;
                            return i42.a.wrap(function(e207) {
                                for(;;)switch(e207.prev = e207.next){
                                    case 0:
                                        if (null == this.player) {
                                            e207.next = 2;
                                            break;
                                        }
                                        return e207.abrupt("return");
                                    case 2:
                                        return e207.next = 4, l22(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("onStateChange", function(e) {
                                            switch(n.__invokeMediaStateChangeTrap__(n, a25.default.StateTimeUpdate), e.data){
                                                case 1:
                                                    n.__invokeMediaStateChangeTrap__(n, a25.default.StatePlaying);
                                                    break;
                                                case 2:
                                                    n.__invokeMediaStateChangeTrap__(n, a25.default.StatePaused);
                                                    break;
                                                case 3:
                                                    n.__invokeMediaStateChangeTrap__(n, a25.default.StateSeeking);
                                                    break;
                                                case 0:
                                                    n.__invokeMediaStateChangeTrap__(n, a25.default.StateFinished);
                                            }
                                        });
                                    case 5:
                                    case "end":
                                        return e207.stop();
                                }
                            }, e206, this);
                        }), d = function() {
                            var e208 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e208, t);
                                function a(e) {
                                    o28(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o28(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l22(p(y.prototype), "dispose", this).call(this), this.originalPlayer.destroy();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l22(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.playVideo();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pauseVideo();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.seekTo(e / 1e3);
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return 1e3 * this.originalPlayer.getCurrentTime();
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.isMuted();
                        },
                        set: function(e) {
                            e ? this.originalPlayer.mute() : this.originalPlayer.unMute();
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return this.originalPlayer.getVolume();
                        },
                        set: function(e) {
                            var t = e;
                            return t < 0 ? this.originalPlayer.setVolume(0) : t > 100 ? this.originalPlayer.setVolume(100) : void this.originalPlayer.setVolume(t);
                        }
                    }
                ], r51 = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-yt-media";
                        }
                    }
                ], n77 && s19(t127.prototype, n77), r51 && s19(t127, r51), y;
            }(a25.default.SuperClass);
            t123.default = d5;
        },
        59: function(e209, t128, n78) {
            "use strict";
            n78.r(t128);
            var r52 = n78(4), i43 = n78.n(r52), a26 = n78(6);
            function o29(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u24(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s20(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l23(e210, t129, n79) {
                return (l23 = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e211, t130, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e211, t130);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t130);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e210, t129, n79 || e210);
            }
            function c(e212, t131) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e212, t131);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _5(this, n);
                };
            }
            function _5(e213, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e213) : t;
            }
            function p(e214) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e214);
            }
            var d6 = function(e215) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e215);
                var t132, n80, r53, _, d, h = f(y);
                function y() {
                    return u24(this, y), h.apply(this, arguments);
                }
                return t132 = y, n80 = [
                    {
                        key: "initialize",
                        value: (_ = i43.a.mark(function e216(t) {
                            var n = this;
                            return i43.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l23(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("play", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a26.default.StatePlaying);
                                        }), this.originalPlayer.addEventListener("pause", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a26.default.StatePaused);
                                        }), this.originalPlayer.addEventListener("seeking", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a26.default.StateSeeking);
                                        }), this.originalPlayer.addEventListener("ended", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a26.default.StateFinished);
                                        }), this.originalPlayer.addEventListener("timeupdate", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a26.default.StateTimeUpdate);
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop();
                                }
                            }, e216, this);
                        }), d = function() {
                            var e217 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e217, t);
                                function a(e) {
                                    o29(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o29(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l23(p(y.prototype), "dispose", this).call(this), this.originalPlayer.remove();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l23(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.play();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pause();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.currentTime = e / 1e3;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return 1e3 * this.originalPlayer.currentTime;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.muted;
                        },
                        set: function(e) {
                            this.originalPlayer.muted = !!e;
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return 100 * this.originalPlayer.volume;
                        },
                        set: function(e) {
                            var t = e / 100;
                            return t < 0 ? this.originalPlayer.volume = 0 : t > 1 ? this.originalPlayer.volume = 1 : void (this.originalPlayer.volume = t);
                        }
                    }
                ], r53 = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-html-media-element-media";
                        }
                    }
                ], n80 && s20(t132.prototype, n80), r53 && s20(t132, r53), y;
            }(a26.default.SuperClass);
            t128.default = d6;
        },
        6: function(e218, t133, n81) {
            "use strict";
            n81.r(t133);
            var r54 = n81(4), i44 = n81.n(r54), a27 = n81(19), o30 = n81(47), u25 = n81(48), s21 = n81(49), l24 = n81(50), c = n81(51), f = n81(2), _ = n81(1), p = n81(12);
            function d7(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function h(e219) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e219.apply(t, n);
                        function o(e) {
                            d7(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            d7(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function y(e220, t134, n82) {
                return (y = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e221, t135, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = T(e)););
                        return e;
                    }(e221, t135);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t135);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e220, t134, n82 || e220);
            }
            function v1(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && v1(e.prototype, t), n && v1(e, n), e;
            }
            function m(e222, t136) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e222, t136);
            }
            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return k1(this, n);
                };
            }
            function k1(e223, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e223) : t;
            }
            function T(e224) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e224);
            }
            var S1 = {
                DefaultStateReady: !1,
                DefaultStatePlaying: !1,
                DefaultStatePaused: !0,
                DefaultStateSeeking: !1,
                StateReady: 0,
                StatePlaying: 1,
                StatePaused: 2,
                StateSeeking: 3,
                StateFinished: 4,
                StateTimeUpdate: 5,
                SuperClass: function(e225) {
                    !function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t);
                    }(P, e225);
                    var t137, n83, r55, a28, d, v, k, S = b(P);
                    function P(e226, t138, n) {
                        var r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, P), (r = S.call(this)).__stateIsReady__ = !1, r.__stateIsPlaying__ = !1, r.__stateIsPaused__ = !0, r.__stateIsSeeking__ = !1, r.__seekTimeHistories__ = [], r.__adjustedTime__ = 0, r.__positionTime__ = 0, r.__musicMap__ = {}, r.__element__ = e226, r.__originalPlayer__ = t138, r.__songleSong__ = n, r.__sourceUrl__ = "string" == _.default.typeOf(n) ? n : n.attributes.permalink, r;
                    }
                    return g(P, null, [
                        {
                            key: "Name",
                            get: function() {
                                return "media";
                            }
                        },
                        {
                            key: "Type",
                            get: function() {
                                return "media";
                            }
                        }
                    ]), g(P, [
                        {
                            key: "initialize",
                            value: (k = h(i44.a.mark(function e227(t) {
                                var n, r, a, o = this;
                                return i44.a.wrap(function(e228) {
                                    for(;;)switch(e228.prev = e228.next){
                                        case 0:
                                            if (null == this.player) {
                                                e228.next = 2;
                                                break;
                                            }
                                            return e228.abrupt("return");
                                        case 2:
                                            return y(T(P.prototype), "initialize", this).call(this, t), n = 0, r = 0, a = 0, this.on("mediaStateChange", function(e) {
                                                switch(e.data.mediaStateId){
                                                    case 1:
                                                        f.default.debug("Media state change to 'playing'"), r = _.default.currentClockTime, a = 0 == n ? 0 : r - n, o.__seekTimeHistories__.push(a), o.isMounted && o.player.invokeTrap("mediaSeek", {
                                                            target: e.target,
                                                            data: {
                                                                positionTime: o.originalPositionTime,
                                                                seekTime: a
                                                            }
                                                        }), n = 0, r = 0, a = 0, o.isMounted && o.isPaused && o.player.invokeTrap("mediaPlay", {
                                                            target: e.target
                                                        }), o.__setMediaState__(1);
                                                        break;
                                                    case 2:
                                                        f.default.debug("Media state change to 'paused'"), r = _.default.currentClockTime, a = 0 == n ? 0 : r - n, o.__seekTimeHistories__.push(a), o.isMounted && o.player.invokeTrap("mediaSeek", {
                                                            target: e.target,
                                                            data: {
                                                                positionTime: o.originalPositionTime,
                                                                seekTime: a
                                                            }
                                                        }), n = 0, r = 0, a = 0, o.isMounted && !o.isPaused && o.player.invokeTrap("mediaPause", {
                                                            target: e.target
                                                        }), o.__setMediaState__(2);
                                                        break;
                                                    case 3:
                                                        f.default.debug("Media state change to 'seeking'"), n = _.default.currentClockTime, o.__setMediaState__(3);
                                                        break;
                                                    case 4:
                                                        f.default.debug("Media state change to 'finished'"), o.isMounted && o.player.invokeTrap("mediaFinish", {
                                                            target: e.target
                                                        }), o.stop();
                                                        break;
                                                    case 5:
                                                        o.__seekMediaTo__(o.originalPositionTime);
                                                        break;
                                                    default:
                                                        f.default.error("Unknown media state (ID: ".concat(e.data.mediaStateId, ")"));
                                                }
                                            }), this.on("mediaReady", function(e) {
                                                f.default.debug("Invoke 'mediaReady'", e.data), o.player.invokeTrap("ready", e);
                                            }), this.on("mediaPlay", function(e) {
                                                f.default.debug("Invoke 'mediaPlay'", e.data), o.player.invokeTrap("play", e);
                                            }), this.on("mediaPause", function(e) {
                                                f.default.debug("Invoke 'mediaPause'", e.data), o.player.invokeTrap("pause", e);
                                            }), this.on("mediaSeek", function(e) {
                                                f.default.debug("Invoke 'mediaSeek'", e.data);
                                            }), this.on("mediaFinish", function(e) {
                                                f.default.debug("Invoke 'mediaFinish'", e.data), o.player.invokeTrap("finish", e);
                                            }), this.on("seek", function(e) {
                                                f.default.debug("Invoke 'seek'", e.data), o.seekTo(e.data.positionTime);
                                            }), [
                                                {
                                                    source: "originalDurationTime",
                                                    target: "originalDuration",
                                                    warning: !0
                                                },
                                                {
                                                    source: "originalPositionTime",
                                                    target: "originalPosition",
                                                    warning: !0
                                                },
                                                {
                                                    source: "durationTime",
                                                    target: "duration",
                                                    warning: !0
                                                },
                                                {
                                                    source: "positionTime",
                                                    target: "position",
                                                    warning: !0
                                                }
                                            ].forEach(function(e) {
                                                Object.defineProperty(o, e.target, {
                                                    get: function() {
                                                        return e.warning && f.default.warn("'Media.".concat(e.target, "' is deprecated API, please use 'Media.").concat(e.source, "'")), o[e.source];
                                                    }
                                                });
                                            }), e228.next = 17, Promise.all([
                                                this.loadBeat(),
                                                this.loadChord(),
                                                this.loadMelody(),
                                                this.loadChorus(),
                                                this.loadVariation()
                                            ]);
                                        case 17:
                                        case "end":
                                            return e228.stop();
                                    }
                                }, e227, this);
                            })), function(e) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "dispose",
                            value: (v = h(i44.a.mark(function e229() {
                                return i44.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            null != this.element && this.element.remove();
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e229, this);
                            })), function() {
                                return v.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadBeat",
                            value: (d = h(i44.a.mark(function e230() {
                                var t, n, r = arguments;
                                return i44.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(o30.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.beats) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.BeatAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                beatRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                beats: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e230, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return d.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadChord",
                            value: (a28 = h(i44.a.mark(function e231() {
                                var t, n, r = arguments;
                                return i44.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(u25.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.chords) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.ChordAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                chordRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                chords: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e231, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return a28.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadMelody",
                            value: (r55 = h(i44.a.mark(function e232() {
                                var t, n, r = arguments;
                                return i44.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(s21.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.melodies) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.MelodyAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                melodyRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                melodies: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e232, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return r55.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadChorus",
                            value: (n83 = h(i44.a.mark(function e233() {
                                var t, n, r = arguments;
                                return i44.a.wrap(function(e234) {
                                    for(;;)switch(e234.prev = e234.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(l24.default.Name)) {
                                                e234.next = 3;
                                                break;
                                            }
                                            return e234.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.chorus) {
                                                e234.next = 5;
                                                break;
                                            }
                                            return e234.abrupt("return");
                                        case 5:
                                            return e234.prev = 5, e234.next = 8, p.ChorusAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e234.sent, Object.defineProperties(this.__musicMap__, {
                                                chorusRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                chorus: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                },
                                                chorusSetcions: {
                                                    get: function() {
                                                        return f.default.warn("'Player.musicMap.chorusSections' is deprecated API, please use 'Player.musicMap.chorus'"), n.data.filter(function(e) {
                                                            return e.isChorus;
                                                        });
                                                    }
                                                },
                                                repeatSections: {
                                                    get: function() {
                                                        return f.default.warn("'Player.musicMap.repeatSections' is deprecated API, please use 'Player.musicMap.chorus'"), n.data;
                                                    }
                                                }
                                            }), e234.next = 14;
                                            break;
                                        case 12:
                                            e234.prev = 12, e234.t0 = e234.catch(5);
                                        case 14:
                                        case "end":
                                            return e234.stop();
                                    }
                                }, e233, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return n83.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadVariation",
                            value: (t137 = h(i44.a.mark(function e235() {
                                var t, n, r = arguments;
                                return i44.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(c.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.variations) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.VariationAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                variationRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                variations: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e235, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return t137.apply(this, arguments);
                            })
                        },
                        {
                            key: "activate",
                            value: function() {
                                var e = this;
                                return new Promise(function(t, n) {
                                    return e.__setMediaState__(2), t();
                                });
                            }
                        },
                        {
                            key: "play",
                            value: function() {}
                        },
                        {
                            key: "pause",
                            value: function() {}
                        },
                        {
                            key: "stop",
                            value: function() {
                                this.seekTo(0), this.pause();
                            }
                        },
                        {
                            key: "seekTo",
                            value: function(e) {
                                this.__seekMediaTo__(e);
                            }
                        },
                        {
                            key: "showElement",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (null != this.element) {
                                    var t = null != e.width ? e.width : 256, n = null != e.height ? e.height : 144;
                                    this.element.style.position = "", this.element.style.opacity = 1, this.element.style.left = "", this.element.style.top = "", this.element.style.width = "number" === _.default.typeOf(t) ? t + "px" : t, this.element.style.height = "number" === _.default.typeOf(n) ? n + "px" : n;
                                }
                            }
                        },
                        {
                            key: "hideElement",
                            value: function() {
                                null != this.element && (this.element.style.position = "absolute", this.element.style.opacity = 0, this.element.style.left = "0px", this.element.style.top = "0px", this.element.style.width = "1px", this.element.style.height = "1px");
                            }
                        },
                        {
                            key: "__seekMediaTo__",
                            value: function(e) {
                                this.__adjustedTime__ = _.default.currentClockTime, this.__positionTime__ = e;
                            }
                        },
                        {
                            key: "__invokeMediaStateChangeTrap__",
                            value: function(e, t) {
                                this.isMounted ? this.player.invokeTrap("mediaStateChange", {
                                    target: e,
                                    data: {
                                        mediaStateId: t,
                                        positionTime: this.originalPositionTime
                                    }
                                }) : this.invokeSelfTrap("mediaStateChange", {
                                    target: e,
                                    data: {
                                        mediaStateId: t,
                                        positionTime: this.originalPositionTime
                                    }
                                });
                            }
                        },
                        {
                            key: "__setMediaState__",
                            value: function(e) {
                                switch(e){
                                    case 0:
                                        this.__stateIsReady__ = !1, this.__stateIsPlaying__ = !1, this.__stateIsPaused__ = !0, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 1:
                                        this.__stateIsReady__ = !0, this.__stateIsPlaying__ = !0, this.__stateIsPaused__ = !1, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 2:
                                        this.__stateIsReady__ = !0, this.__stateIsPlaying__ = !1, this.__stateIsPaused__ = !0, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 3:
                                        this.__stateIsReady__ = !0, this.__stateIsSeeking__ = !0;
                                }
                            }
                        },
                        {
                            key: "dispatcherName",
                            get: function() {
                                return P.Name;
                            }
                        },
                        {
                            key: "dispatcherType",
                            get: function() {
                                return P.Type;
                            }
                        },
                        {
                            key: "element",
                            get: function() {
                                return this.__element__;
                            }
                        },
                        {
                            key: "originalPlayer",
                            get: function() {
                                return this.__originalPlayer__;
                            }
                        },
                        {
                            key: "sourceUrl",
                            get: function() {
                                return this.__sourceUrl__;
                            }
                        },
                        {
                            key: "name",
                            get: function() {
                                return this.__songleSong__.attributes.name;
                            }
                        },
                        {
                            key: "artistId",
                            get: function() {
                                return this.__songleSong__.relationships.artist.data.id;
                            }
                        },
                        {
                            key: "artistName",
                            get: function() {
                                return this.__songleSong__.relationships.artist.data.attributes.name;
                            }
                        },
                        {
                            key: "isMounted",
                            get: function() {
                                return this.player.media == this;
                            }
                        },
                        {
                            key: "isReady",
                            get: function() {
                                return this.__stateIsReady__;
                            }
                        },
                        {
                            key: "isPlaying",
                            get: function() {
                                return this.__stateIsPlaying__;
                            }
                        },
                        {
                            key: "isPaused",
                            get: function() {
                                return this.__stateIsPaused__;
                            }
                        },
                        {
                            key: "isSeeking",
                            get: function() {
                                return this.__stateIsSeeking__;
                            }
                        },
                        {
                            key: "medianSeekTime",
                            get: function() {
                                var e236 = this.__seekTimeHistories__.sort(function(e, t) {
                                    return e - t;
                                });
                                return Math.abs(e236[Math.floor(e236.length / 2)] || 0);
                            }
                        },
                        {
                            key: "durationTime",
                            get: function() {
                                return this.__songleSong__.attributes.durationTimeMs;
                            }
                        },
                        {
                            key: "originalDurationTime",
                            get: function() {
                                return this.durationTime;
                            }
                        },
                        {
                            key: "positionTime",
                            get: function() {
                                var e = this.__positionTime__ + (this.isPlaying ? _.default.currentClockTime - this.__adjustedTime__ : 0);
                                return e < 0 ? e : e > this.durationTime ? this.durationTime : e;
                            }
                        },
                        {
                            key: "originalPositionTime",
                            get: function() {
                                return this.positionTime;
                            }
                        },
                        {
                            key: "loadedRatio",
                            get: function() {
                                return 0;
                            }
                        },
                        {
                            key: "playedRatio",
                            get: function() {
                                return 0 == this.durationTime ? 0 : this.positionTime / this.durationTime;
                            }
                        },
                        {
                            key: "muted",
                            get: function() {
                                return !1;
                            },
                            set: function(e) {}
                        },
                        {
                            key: "volume",
                            get: function() {
                                return 0;
                            },
                            set: function(e) {}
                        },
                        {
                            key: "musicMap",
                            get: function() {
                                return this.__musicMap__;
                            }
                        }
                    ]), P;
                }(a27.default)
            };
            t133.default = S1;
        },
        62: function(e237, t139, n84) {
            "use strict";
            n84.r(t139);
            var r56 = n84(4), i45 = n84.n(r56), a29 = n84(21), o31 = (n84(32), n84(59), n84(57), n84(58), n84(69)), u26 = n84(2), s22 = n84(1), l25 = n84(78), c = n84.n(l25), f = n84(70), _ = n84(71), p = n84(72), d = n84(73), h = n84(74), y = n84(20);
            function v(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function m(e238, t140, n85) {
                return (m = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e239, t141, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = O(e)););
                        return e;
                    }(e239, t141);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t141);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e238, t140, n85 || e238);
            }
            function b(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function k(e, t, n) {
                return t && b(e.prototype, t), n && b(e, n), e;
            }
            function T(e240, t142) {
                return (T = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e240, t142);
            }
            function S(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return P(this, n);
                };
            }
            function P(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? w(e) : t;
            }
            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function O(e241) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e241);
            }
            var C = function(e242) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && T(e, t);
                }(a30, e242);
                var t143, n86, r57 = S(a30);
                function a30() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return g(this, a30), (e = r57.call(this)).__nodeTimeoutSec__ = 60, e.__localAbsoluteClockJitterTime__ = 0, e.__cachedCurrentPlaylistItem__ = null, e.__autoUseMedia__ = null == t.autoUseMedia || t.autoUseMedia, e.__autoUseMediaOptions__ = null != t.autoUseMediaOptions ? t.autoUseMediaOptions : null, e.__clockWorker__ = new f.default(w(e), {
                        intervalTime: t.clockWorkerIntervalTime
                    }), e.__stageWorker__ = new _.default(w(e), {
                        intervalTime: t.stageWorkerIntervalTime
                    }), e.__stateWorker__ = new p.default(w(e), {
                        intervalTime: t.stateWorkerIntervalTime
                    }), e.__mediaWorker__ = new d.default(w(e), {
                        intervalTime: t.mediaWorkerIntervalTime
                    }), e.__historyWorker__ = new h.default(w(e), {
                        intervalTime: t.historyWorkerIntervalTime
                    }), e;
                }
                return k(a30, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-songle-sync";
                        }
                    }
                ]), k(a30, [
                    {
                        key: "initialize",
                        value: function(e243) {
                            var t = this;
                            m(O(a30.prototype), "initialize", this).call(this, e243), Object.defineProperties(e243, {
                                localAbsoluteClockTime: {
                                    get: function() {
                                        return t.localAbsoluteClockTime;
                                    }
                                },
                                localAbsoluteClockJitterTime: {
                                    get: function() {
                                        return t.localAbsoluteClockJitterTime;
                                    },
                                    set: function(e) {
                                        return t.localAbsoluteClockJitterTime = e;
                                    }
                                },
                                stageStateId: {
                                    get: function() {
                                        return t.stageStateId;
                                    }
                                },
                                stageActiveNodeCount: {
                                    get: function() {
                                        return t.stageActiveNodeCount;
                                    }
                                },
                                stageMasterNodeCount: {
                                    get: function() {
                                        return t.stageMasterNodeCount;
                                    }
                                },
                                stageIsStopped: {
                                    get: function() {
                                        return t.stageIsStopped;
                                    }
                                },
                                stageIsPlaying: {
                                    get: function() {
                                        return t.stageIsPlaying;
                                    }
                                },
                                stageIsPaused: {
                                    get: function() {
                                        return t.stageIsPaused;
                                    }
                                },
                                stageInitialAbsoluteStartTime: {
                                    get: function() {
                                        return t.stageInitialAbsoluteStartTime;
                                    }
                                },
                                stageAbsoluteStartTime: {
                                    get: function() {
                                        return t.stageAbsoluteStartTime;
                                    }
                                },
                                stageAbsolutePauseTime: {
                                    get: function() {
                                        return t.stageAbsolutePauseTime;
                                    }
                                },
                                nodeId: {
                                    get: function() {
                                        return t.nodeId;
                                    }
                                },
                                nodeTimeoutSec: {
                                    get: function() {
                                        return t.nodeTimeoutSec;
                                    },
                                    set: function(e) {
                                        return t.nodeTimeoutSec = e;
                                    }
                                },
                                isMaster: {
                                    get: function() {
                                        return t.isMaster;
                                    }
                                },
                                isSlave: {
                                    get: function() {
                                        return t.isSlave;
                                    }
                                },
                                message: {
                                    get: function() {
                                        return t.message;
                                    }
                                },
                                playlist: {
                                    get: function() {
                                        return t.playlist;
                                    }
                                }
                            }), e243.play = function() {
                                return t.__play__();
                            }, e243.pause = function() {
                                return t.__pause__();
                            }, e243.stop = function() {
                                return t.__stop__();
                            }, e243.seekTo = function(e) {
                                return t.__seekTo__(e);
                            }, e243.seekPlaylistTo = function(e) {
                                return t.__seekPlaylistTo__(e);
                            }, e243.seekPlaylistPositionTo = function(e) {
                                return t.__seekPlaylistTo__(e);
                            }, e243.seekToPrevPlaylistItem = function() {
                                return t.__seekToPrevPlaylistItem__();
                            }, e243.seekToNextPlaylistItem = function() {
                                return t.__seekToNextPlaylistItem__();
                            }, e243.sync = function(e) {
                                return t.__sync__(e);
                            }, e243.setPlaylist = function(e) {
                                return t.__setPlaylist__(e);
                            }, e243.setMessage = function(e) {
                                return t.__setMessage__(e);
                            }, this.on("songleSyncStageNodeChange", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageNodeEnter", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageNodeLeave", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageStateChange", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsStopped && (t.stateWorker.resetState({
                                    force: !0
                                }), t.__defaultMediaChange__());
                            }), this.on("songleSyncStageAbsoluteStartTimeUpdate", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsPaused || t.stateWorker.resetState();
                            }), this.on("songleSyncStageAbsolutePauseTimeUpdate", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsPaused || t.stateWorker.resetState();
                            }), this.on("songleSyncMessage", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncPlaylistUpdate", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stateWorker.resetState({
                                    force: !0
                                }), t.__defaultMediaChange__();
                            }), this.on("songleSyncPlaylistItemEnter", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data), t.__defaultMediaChange__();
                            }), this.on("songleSyncPlaylistItemLeave", function(e) {
                                u26.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncPlaylistFinish", function(e244) {
                                u26.default.debug("Invoke '".concat(e244.type, "'"), e244.data), t.__stop__(), t.player.mediaCaches.forEach(function(e) {
                                    e.stop();
                                });
                            }), Promise.resolve().then(function() {
                                return t.clockWorker.runTask();
                            }).then(function() {
                                return t.stageWorker.runTask();
                            }).then(function() {
                                return t.stateWorker.runTask();
                            }).then(function() {
                                return t.mediaWorker.runTask();
                            }).then(function() {
                                return t.historyWorker.runTask();
                            }).then(function() {
                                t.clockWorker.start(), t.stageWorker.start(), t.stateWorker.start(), t.mediaWorker.start(), t.historyWorker.start();
                            });
                        }
                    },
                    {
                        key: "mediaTryMount",
                        value: function(e, t) {
                            m(O(a30.prototype), "mediaTryMount", this).call(this, e), this.isSlave || 0 == this.playlist.items.length && (u26.default.warn("If you want to change a media on the Songle Sync, please use 'SongleAPI.Player#setPlaylist' instead of 'SongleAPI.Player#useMedia'"), this.__setPlaylist__(t.newMediaSourceUrl));
                        }
                    },
                    {
                        key: "__defaultMediaChange__",
                        value: function() {
                            var e245 = this;
                            if (this.__autoUseMedia__) {
                                var t = this.__getCurrentPlaylistItem__();
                                if (!this.player.media || this.player.media.sourceUrl !== t.mediaSourceUrl) {
                                    var n;
                                    switch(!0){
                                        case null != t && null != t.options && null != t.options.useMedia:
                                            n = t.options.useMedia;
                                            break;
                                        case null != this.__autoUseMediaOptions__:
                                            n = this.__autoUseMediaOptions__;
                                            break;
                                        default:
                                            n = {
                                                headless: null == this.player.mediaElement
                                            };
                                    }
                                    this.player.useMedia(t, n).then(function() {
                                        e245.player.mediaCaches.forEach(function(e) {
                                            e.isMounted || e.stop();
                                        });
                                    });
                                }
                            }
                        }
                    },
                    {
                        key: "__getPlaylistDurationTime__",
                        value: function() {
                            var e = 0;
                            return ((e = this.stageWorker.__playlistDurationTime__) < 0 || isNaN(e)) && (e = 0), e;
                        }
                    },
                    {
                        key: "__getPlaylistPositionTime__",
                        value: function() {
                            var e = 0;
                            switch(this.stageStateId){
                                case 0:
                                    e = 0;
                                    break;
                                case 1:
                                    e = this.localAbsoluteClockTime - this.stageAbsoluteStartTime;
                                    break;
                                case 2:
                                    e = this.stageAbsolutePauseTime - this.stageAbsoluteStartTime;
                            }
                            return (e < 0 || isNaN(e)) && (e = 0), e > this.stageWorker.__playlistDurationTime__ && (e = this.stageWorker.__playlistDurationTime__), e;
                        }
                    },
                    {
                        key: "__getCurrentPlaylistItem__",
                        value: function() {
                            var e = this.__getPlaylistPositionTime__(), t = this.__cachedCurrentPlaylistItem__;
                            if (null != t && e >= t.relativeStartTime && e < t.relativeEndTime) return t;
                            for(var n = 0, r = this.stageWorker.__playlistItems__.length - 1; n <= r;){
                                var i = Math.floor((n + r) / 2), a = this.stageWorker.__playlistItems__[i];
                                if (e >= a.relativeStartTime && e < a.relativeEndTime) {
                                    this.__cachedCurrentPlaylistItem__ = a;
                                    break;
                                }
                                e >= a.relativeEndTime ? n = i + 1 : r = i - 1;
                            }
                            return this.__cachedCurrentPlaylistItem__;
                        }
                    },
                    {
                        key: "__getPlaylistMediaState__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            if (this.localAbsoluteClockTime - this.stageAbsoluteStartTime < 0) return 0;
                            var t = this.__getPlaylistPositionTime__();
                            if (this.stageIsPlaying) {
                                if (t >= e.mediaStartTime && t < e.mediaStartTime + e.mediaDurationTime) return 1;
                            } else if (this.stageIsPaused && t >= e.mediaStartTime && t < e.mediaStartTime + e.mediaDurationTime) return 2;
                            return 0;
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsStopped__",
                        value: function() {
                            return 0 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsPlaying__",
                        value: function() {
                            return 1 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsPaused__",
                        value: function() {
                            return 2 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaDurationTime__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            var t = e.mediaDurationTime;
                            return t < 0 && (t = 0), t;
                        }
                    },
                    {
                        key: "__getPlaylistMediaPositionTime__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            var t = this.__getPlaylistPositionTime__() - e.mediaStartTime;
                            return t < 0 && (t = 0), t > this.__getPlaylistMediaDurationTime__() && (t = this.__getPlaylistMediaDurationTime__()), t;
                        }
                    },
                    {
                        key: "__setPlaylist__",
                        value: function(e246) {
                            switch(s22.default.typeOf(e246)){
                                case "array":
                                    e246 = e246.map(function(e) {
                                        return "string" == s22.default.typeOf(e) ? {
                                            mediaSourceUrl: e
                                        } : e;
                                    });
                                    break;
                                case "object":
                                    e246 = [
                                        e246
                                    ];
                                    break;
                                case "string":
                                    e246 = [
                                        {
                                            mediaSourceUrl: e246
                                        }
                                    ];
                            }
                            return y.PlaylistAPI.createPlaylist(this, e246);
                        }
                    },
                    {
                        key: "__setMessage__",
                        value: function(e) {
                            if (!this.isSlave) return y.MessageAPI.updateMessage(this, e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.__sync__({
                                stateId: 1
                            });
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.__sync__({
                                stateId: 2
                            });
                        }
                    },
                    {
                        key: "__stop__",
                        value: function() {
                            this.__sync__({
                                stateId: 0
                            });
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            var t = this.__getCurrentPlaylistItem__();
                            null != t && this.__seekPlaylistTo__(t.mediaStartTime + e);
                        }
                    },
                    {
                        key: "__seekPlaylistTo__",
                        value: function(e) {
                            this.stageIsPlaying ? this.__sync__({
                                absoluteStartTime: this.localAbsoluteClockTime - e
                            }) : this.__sync__({
                                stateId: 2,
                                absoluteStartTime: this.localAbsoluteClockTime,
                                absolutePauseTime: this.localAbsoluteClockTime + e
                            });
                        }
                    },
                    {
                        key: "__seekToPrevPlaylistItem__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            e.prev && this.__seekPlaylistTo__(e.prev.startTime);
                        }
                    },
                    {
                        key: "__seekToNextPlaylistItem__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            e.next && this.__seekPlaylistTo__(e.next.startTime);
                        }
                    },
                    {
                        key: "__sync__",
                        value: (t143 = i45.a.mark(function e247() {
                            var t, n = arguments;
                            return i45.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, !this.isSlave) {
                                            e.next = 3;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.t0 = this.stageWorker, e.next = 6, y.StageAPI.updateStage(this, t);
                                    case 6:
                                        return e.t1 = e.sent, e.next = 9, e.t0.update.call(e.t0, e.t1);
                                    case 9:
                                        this.stateWorker.update(), this.mediaWorker.update();
                                    case 11:
                                    case "end":
                                        return e.stop();
                                }
                            }, e247, this);
                        }), n86 = function() {
                            var e248 = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t143.apply(e248, n);
                                function o(e) {
                                    v(a, r, i, o, u, "next", e);
                                }
                                function u(e) {
                                    v(a, r, i, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function() {
                            return n86.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return a30.Name;
                        }
                    },
                    {
                        key: "clockWorker",
                        get: function() {
                            return this.__clockWorker__;
                        }
                    },
                    {
                        key: "stageWorker",
                        get: function() {
                            return this.__stageWorker__;
                        }
                    },
                    {
                        key: "stateWorker",
                        get: function() {
                            return this.__stateWorker__;
                        }
                    },
                    {
                        key: "mediaWorker",
                        get: function() {
                            return this.__mediaWorker__;
                        }
                    },
                    {
                        key: "historyWorker",
                        get: function() {
                            return this.__historyWorker__;
                        }
                    },
                    {
                        key: "localAbsoluteClockTime",
                        get: function() {
                            return s22.default.currentClockTime + this.clockWorker.networkJitterTime + this.localAbsoluteClockJitterTime;
                        }
                    },
                    {
                        key: "localAbsoluteClockJitterTime",
                        get: function() {
                            return this.__localAbsoluteClockJitterTime__;
                        },
                        set: function(e) {
                            var t = -this.__getPlaylistDurationTime__(), n = this.__getPlaylistDurationTime__();
                            e < t && (u26.default.warn("Couldn't set 'SongleAPI.Player#localAbsoluteClockJitterTime' less than ".concat(t, " seconds")), e = t), e > n && (u26.default.warn("Couldn't set 'SongleAPI.Player#localAbsoluteClockJitterTime' more than ".concat(n, " seconds")), e = n), this.__localAbsoluteClockJitterTime__ = e;
                        }
                    },
                    {
                        key: "stageId",
                        get: function() {
                            return this.stageWorker.__stageId__;
                        }
                    },
                    {
                        key: "stageActiveNodeCount",
                        get: function() {
                            return this.stageWorker.__activeNodeCount__;
                        }
                    },
                    {
                        key: "stageMasterNodeCount",
                        get: function() {
                            return this.stageWorker.__masterNodeCount__;
                        }
                    },
                    {
                        key: "stageStateId",
                        get: function() {
                            return this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsStopped",
                        get: function() {
                            return 0 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsPlaying",
                        get: function() {
                            return 1 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsPaused",
                        get: function() {
                            return 2 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageInitialAbsoluteStartTime",
                        get: function() {
                            return this.stageWorker.__initialAbsoluteStartTime__;
                        }
                    },
                    {
                        key: "stageAbsoluteStartTime",
                        get: function() {
                            return this.stageWorker.__absoluteStartTime__;
                        }
                    },
                    {
                        key: "stageAbsolutePauseTime",
                        get: function() {
                            return this.stageWorker.__absolutePauseTime__;
                        }
                    },
                    {
                        key: "nodeId",
                        get: function() {
                            return o31.default.fetch("".concat(a30.Name, ".nodeId"), c()());
                        }
                    },
                    {
                        key: "nodeTimeoutSec",
                        get: function() {
                            return this.__nodeTimeoutSec__;
                        },
                        set: function(e) {
                            30 > e && (u26.default.warn("Couldn't set 'SongleAPI.Player#nodeTimeoutSec' less than ".concat(30, " seconds")), e = 30), 3600 < e && (u26.default.warn("Couldn't set 'SongleAPI.Player#nodeTimeoutSec' more than ".concat(3600, " seconds")), e = 3600), this.__nodeTimeoutSec__ = e;
                        }
                    },
                    {
                        key: "accessToken",
                        get: function() {
                            return this.player.accessToken;
                        }
                    },
                    {
                        key: "secretToken",
                        get: function() {
                            return this.player.secretToken;
                        }
                    },
                    {
                        key: "isMaster",
                        get: function() {
                            return !s22.default.stringIsBlank(this.secretToken);
                        }
                    },
                    {
                        key: "isSlave",
                        get: function() {
                            return s22.default.stringIsBlank(this.secretToken);
                        }
                    },
                    {
                        key: "message",
                        get: function() {
                            return this.stageWorker.__message__;
                        }
                    },
                    {
                        key: "playlist",
                        get: function() {
                            var e = this.__getPlaylistDurationTime__(), t = this.__getPlaylistMediaDurationTime__(), n = this.__getPlaylistPositionTime__(), r = this.__getPlaylistMediaPositionTime__(), i = this.__getCurrentPlaylistItem__(), a = this.stageWorker.__playlistItems__;
                            return {
                                absoluteStartTime: this.stageAbsoluteStartTime,
                                mediaDurationTime: t,
                                durationTime: e,
                                mediaPositionTime: r,
                                positionTime: n,
                                currentItem: i,
                                items: a
                            };
                        }
                    }
                ]), a30;
            }(a29.default);
            t139.default = C;
        },
        66: function(e249, t144, n87) {
            "use strict";
            n87.r(t144);
            var r58 = n87(1), i46 = n87(67), a31 = (n87(83), n87(68)), o32 = n87(32), u27 = n87(57), s23 = n87(58), l26 = n87(59);
            function c5(e250, t145) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(r, a) {
                    var o = n.controls, u = t145.relationships.uri.data.attributes.sourceId;
                    i46.default.importClass().then(function(t) {
                        t.create(e250, u, {
                            autoplay: !1,
                            defaultNoComment: !0,
                            noController: !o,
                            noHeader: !0,
                            noLinkToNiconico: !0,
                            noRelatedVideo: !0,
                            noShare: !0,
                            noTags: !0,
                            width: "100%",
                            height: "100%",
                            onError: function(e) {
                                return a(e);
                            },
                            onSuccess: function(e) {
                                return r(e);
                            }
                        });
                    }, function() {
                        a();
                    });
                });
            }
            function f4(e251, t146) {
                var n88 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, o) {
                    var u = !!n88.controls, s = !!n88.playsinline, l = t146.relationships.uri.data.attributes.sourceId;
                    if (null != n88.altSourceUrl) {
                        var c = n88.altSourceUrl.match(/watch\?v=(.+)/);
                        l = c[1];
                    }
                    a31.default.importClass().then(function(t) {
                        var n = r58.default.global.document.createElement("div");
                        e251.appendChild(n), new t.Player(n, {
                            events: {
                                onError: function(e) {
                                    return o(e);
                                },
                                onReady: function(e) {
                                    return i(e.target);
                                }
                            },
                            playerVars: {
                                autohide: "0",
                                autoplay: "0",
                                cc_load_policy: "0",
                                controls: u ? "1" : "0",
                                disablekb: "1",
                                enablejsapi: "1",
                                fs: u ? "1" : "0",
                                hl: "0",
                                html5: "1",
                                iv_load_policy: "3",
                                loop: "0",
                                modestbranding: "1",
                                playsinline: s ? "1" : "0",
                                rel: "0",
                                showinfo: "0",
                                start: "0"
                            },
                            videoId: l,
                            width: "100%",
                            height: "100%"
                        }, function() {
                            o();
                        });
                    });
                });
            }
            function _(e, t) {
                return new Promise(function(e, t) {});
            }
            function p(e252, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, a) {
                    var o = n.altSourceUrl, u = n.controls, s = t.relationships.uri.data.attributes.endpointScheme, l = t.relationships.uri.data.attributes.endpointHost, c = t.relationships.uri.data.attributes.endpointPath, f = r58.default.global.document.createElement("audio");
                    f.autoplay = !1, f.controls = !!u, f.crossorigin = "anonymous", f.loop = !1, f.muted = !1, f.preload = "auto", f.src = o || "".concat(s, "://").concat(l).concat(c).concat(t.attributes.code, "/u"), f.addEventListener("abort", function(e) {
                        return a(e);
                    }), f.addEventListener("error", function(e) {
                        return a(e);
                    }), f.addEventListener("loadstart", function(e) {
                        return i(e.target);
                    }), e252.appendChild(f);
                });
            }
            var d8 = {
                create: function(e253, t) {
                    var n89 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise(function(i, a) {
                        if (n89.headless) {
                            var d = new o32.default(t);
                            d.initialize(e253).then(function() {
                                return i(d);
                            }, function() {
                                return a();
                            });
                        } else {
                            var h = null != n89.element ? n89.element : r58.default.global.document.body, y = r58.default.global.document.createElement("div");
                            y.style.position = "absolute", y.style.opacity = 0, y.style.left = "0px", y.style.top = "0px", y.style.width = "1px", y.style.height = "1px", y.style.zIndex = 0, h.appendChild(y);
                            var v = t.relationships.uri.data.attributes.sourceHost;
                            if (null != n89.altSourceUrl) v = new RegExp("www.youtube.com").test(n89.altSourceUrl) ? "www.youtube.com" : "";
                            switch(v){
                                case "www.nicovideo.jp":
                                    return c5(y, t, n89).then(function(n) {
                                        var r = new u27.default(y, n, t);
                                        r.initialize(e253).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                                case "soundcloud.com":
                                    return _(y, t, n89).then(function(e) {}, function(e) {
                                        a(e);
                                    });
                                case "www.youtube.com":
                                    return f4(y, t, n89).then(function(n) {
                                        var r = new s23.default(y, n, t);
                                        r.initialize(e253).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                                default:
                                    return p(y, t, n89).then(function(n) {
                                        var r = new l26.default(y, n, t);
                                        r.initialize(e253).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                            }
                        }
                    });
                }
            };
            t144.default = d8;
        },
        67: function(e254, t147, n90) {
            "use strict";
            n90.r(t147);
            var r = n90(30), i = n90(1), a = "https://secure-dcdn.cdn.nimg.jp/extplayerv/embed/js/api.js";
            var o33 = {
                importClass: function() {
                    var e255 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function(t, n91) {
                        if (i.default.NnFactoryClass) return t(i.default.NnFactoryClass);
                        var o = e255.element || i.default.global.document.body;
                        i.default.global.onNicoPlayerFactoryReady = function(e) {
                            i.default.NnFactoryClass = i.default.NnFactoryClass || i.default.global.NN || e;
                        }, o.appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return n91();
                            },
                            onError: function(e) {
                                return n91();
                            },
                            onLoad: function(e) {
                                var n = setInterval(function() {
                                    i.default.NnFactoryClass && i.default.NnFactoryClass.create && (clearInterval(n), t(i.default.NnFactoryClass));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t147.default = o33;
        },
        68: function(e256, t148, n92) {
            "use strict";
            n92.r(t148);
            var r = n92(30), i = n92(1), a = "https://www.youtube.com/iframe_api";
            var o34 = {
                importClass: function() {
                    var e257 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function(t, n93) {
                        if (i.default.YtFactoryClass) return t(i.default.YtFactoryClass);
                        var o = e257.element || i.default.global.document.body;
                        i.default.global.onYouTubeIframeAPIReady = function(e) {
                            i.default.YtFactoryClass = i.default.YtFactoryClass || i.default.global.YT || e;
                        }, o.appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return n93();
                            },
                            onError: function(e) {
                                return n93();
                            },
                            onLoad: function(e) {
                                var n = setInterval(function() {
                                    i.default.YtFactoryClass && i.default.YtFactoryClass.Player && (clearInterval(n), t(i.default.YtFactoryClass));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t148.default = o34;
        },
        69: function(e258, t149, n94) {
            "use strict";
            n94.r(t149);
            var r = n94(2), i = n94(1);
            function a(e) {
                try {
                    return i.default.isStandalone ? null : i.default.global.localStorage.getItem(e);
                } catch (t) {
                    return r.default.error(t), null;
                }
            }
            function o(e, t) {
                try {
                    return i.default.isStandalone ? null : i.default.global.localStorage.setItem(e, t);
                } catch (n) {
                    return r.default.error(n), null;
                }
            }
            var u = {
                fetch: function(e, t) {
                    var n = a(e) || t;
                    return o(e, n), n;
                },
                get: a,
                set: o
            };
            t149.default = u;
        },
        70: function(e259, t150, n95) {
            "use strict";
            n95.r(t150);
            var r59 = n95(4), i47 = n95.n(r59), a32 = n95(28), o35 = (n95(2), n95(1)), u28 = n95(20);
            function s24(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l27(e260) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e260.apply(t, n);
                        function o(e) {
                            s24(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            s24(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function _(e261, t151) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e261, t151);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h4(e);
                    if (t) {
                        var i = h4(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d9(this, n);
                };
            }
            function d9(e262, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e262) : t;
            }
            function h4(e263) {
                return (h4 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e263);
            }
            var y = function(e264) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(h, e264);
                var t152, n96, r60, a33, s, d = p(h);
                function h() {
                    var e;
                    c(this, h);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = d.call.apply(d, [
                        this
                    ].concat(n))).__histories__ = [
                        0
                    ], e;
                }
                return t152 = h, n96 = [
                    {
                        key: "runTask",
                        value: (s = l27(i47.a.mark(function e265() {
                            var t;
                            return i47.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.next = 2, this.update();
                                    case 2:
                                        (t = 2 * this.intervalTime + this.__random__(0, 1e3)) < this.minIntervalTime && (t = this.minIntervalTime), t > this.maxIntervalTime && (t = this.maxIntervalTime), this.intervalTime = t;
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                            }, e265, this);
                        })), function() {
                            return s.apply(this, arguments);
                        })
                    },
                    {
                        key: "update",
                        value: (a33 = l27(i47.a.mark(function e266() {
                            var t153, n, r, a;
                            return i47.a.wrap(function(e267) {
                                for(;;)switch(e267.prev = e267.next){
                                    case 0:
                                        t153 = 0;
                                    case 1:
                                        if (!(t153 < 3)) {
                                            e267.next = 11;
                                            break;
                                        }
                                        return n = o35.default.currentClockTime, e267.next = 5, u28.ClockAPI.getClock(this.plugin);
                                    case 5:
                                        r = e267.sent, a = o35.default.currentClockTime, this.__histories__.push(r - (a + n) / 2);
                                    case 8:
                                        ++t153, e267.next = 1;
                                        break;
                                    case 11:
                                        this.__histories__ = this.__histories__.sort(function(e, t) {
                                            return e - t;
                                        });
                                    case 12:
                                    case "end":
                                        return e267.stop();
                                }
                            }, e266, this);
                        })), function() {
                            return a33.apply(this, arguments);
                        })
                    },
                    {
                        key: "__random__",
                        value: function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1) + e);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    },
                    {
                        key: "networkJitterTime",
                        get: function() {
                            return this.__histories__[Math.floor(this.__histories__.length / 2)];
                        }
                    }
                ], f(t152.prototype, n96), r60 && f(t152, r60), h;
            }(a32.default);
            t150.default = y;
        },
        71: function(e268, t154, n97) {
            "use strict";
            n97.r(t154);
            var r61 = n97(4), i48 = n97.n(r61), a34 = n97(28), o36 = n97(2), u29 = n97(1), s25 = n97(20);
            function l28(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function c(e269) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e269.apply(t, n);
                        function o(e) {
                            l28(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            l28(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function p(e270, t155) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e270, t155);
            }
            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = y4(e);
                    if (t) {
                        var i = y4(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return h5(this, n);
                };
            }
            function h5(e271, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e271) : t;
            }
            function y4(e272) {
                return (y4 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e272);
            }
            var v = function(e273) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t);
                }(y, e273);
                var t156, n98, r62, a35, l29, h = d(y);
                function y() {
                    var e;
                    f(this, y);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = h.call.apply(h, [
                        this
                    ].concat(n))).__activeNodeCount__ = 0, e.__masterNodeCount__ = 0, e.__stateId__ = 0, e.__initialAbsoluteStartTime__ = 0, e.__absoluteStartTime__ = 0, e.__absolutePauseTime__ = 0, e.__playlistDurationTime__ = 0, e.__playlistPositionTime__ = 0, e.__playlistItems__ = [], e;
                }
                return t156 = y, n98 = [
                    {
                        key: "runTask",
                        value: (l29 = c(i48.a.mark(function e274() {
                            return i48.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.t0 = this, e.next = 3, s25.StageAPI.getStage(this.plugin);
                                    case 3:
                                        return e.t1 = e.sent, e.next = 6, e.t0.update.call(e.t0, e.t1);
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                            }, e274, this);
                        })), function() {
                            return l29.apply(this, arguments);
                        })
                    },
                    {
                        key: "update",
                        value: (a35 = c(i48.a.mark(function e275(t) {
                            var n, r, a;
                            return i48.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return n = t.id, r = t.attributes.createdAt, a = t.attributes.updatedAt, this.__updateNodeCount__(t), this.__updateState__(t), this.__updateInitialAbsoluteStartTime__(t), this.__updateAbsoluteStartTime__(t), this.__updateAbsolutePauseTime__(t), e.next = 10, this.__updateMessage__(t);
                                    case 10:
                                        return e.next = 12, this.__updatePlaylist__(t);
                                    case 12:
                                        this.__stageId__ = n, this.__createdAt__ = r, this.__updatedAt__ = a;
                                    case 15:
                                    case "end":
                                        return e.stop();
                                }
                            }, e275, this);
                        })), function(e) {
                            return a35.apply(this, arguments);
                        })
                    },
                    {
                        key: "__updateNodeCount__",
                        value: function(e276) {
                            var t = e276.attributes.activeNodeCount, n = e276.attributes.masterNodeCount, r = t > this.__activeNodeCount__, i = t < this.__activeNodeCount__;
                            this.__activeNodeCount__ = t, this.__masterNodeCount__ = n;
                            var a = {
                                stageActiveNodeCount: t,
                                stageMasterNodeCount: n
                            };
                            [
                                {
                                    source: "stageActiveNodeCount",
                                    target: "activeNodeCount",
                                    warning: !0
                                },
                                {
                                    source: "stageMasterNodeCount",
                                    target: "masterNodeCount",
                                    warning: !0
                                }
                            ].forEach(function(e) {
                                Object.defineProperty(a, e.target, {
                                    get: function() {
                                        return e.warning && o36.default.warn("'".concat(e.target, "' is deprecated API, please use '").concat(e.source, "' in 'songleSyncStageNode[Change|Enter|Leave]' trap")), a[e.source];
                                    }
                                });
                            }), (r || i) && this.player.invokeTrap("songleSyncStageNodeChange", {
                                target: this.plugin,
                                data: a
                            }), r && this.player.invokeTrap("songleSyncStageNodeEnter", {
                                target: this.plugin,
                                data: a
                            }), i && this.player.invokeTrap("songleSyncStageNodeLeave", {
                                target: this.plugin,
                                data: a
                            });
                        }
                    },
                    {
                        key: "__updateState__",
                        value: function(e) {
                            var t = e.attributes.stateId;
                            t != this.__stateId__ && (this.__stateId__ = t, this.player.invokeTrap("songleSyncStageStateChange", {
                                target: this.plugin,
                                data: {
                                    stageStateId: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateInitialAbsoluteStartTime__",
                        value: function(e) {
                            var t = e.attributes.initialAbsoluteStartTimeMs;
                            t != this.__initialAbsoluteStartTime__ && (this.__initialAbsoluteStartTime__ = t, this.player.invokeTrap("songleSyncStageInitialAbsoluteStartTime", {
                                target: this.plugin,
                                data: {
                                    stageInitialAbsoluteStartTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateAbsoluteStartTime__",
                        value: function(e) {
                            var t = e.attributes.absoluteStartTimeMs;
                            t != this.__absoluteStartTime__ && (this.__absoluteStartTime__ = t, this.player.invokeTrap("songleSyncStageAbsoluteStartTimeUpdate", {
                                target: this.plugin,
                                data: {
                                    stageAbsoluteStartTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateAbsolutePauseTime__",
                        value: function(e) {
                            var t = e.attributes.absolutePauseTimeMs;
                            t != this.__absolutePauseTime__ && (this.__absolutePauseTime__ = t, this.player.invokeTrap("songleSyncStageAbsolutePauseTimeUpdate", {
                                target: this.plugin,
                                data: {
                                    stageAbsolutePauseTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateMessage__",
                        value: function(e277) {
                            var t = this;
                            return new Promise(function(n, r63) {
                                var i = e277.attributes.messageCreatedAt, a = e277.attributes.messageUpdatedAt;
                                return null == i || null == a || i === t.__messageCreatedAt__ && a === t.__messageUpdatedAt__ ? n() : void s25.MessageAPI.getMessage(t.plugin).then(function(e) {
                                    var r = e.attributes.data;
                                    return t.__message__ = r, t.__messageCreatedAt__ = i, t.__messageUpdatedAt__ = a, u29.default.stringIsBlank(r) || t.player.invokeTrap("songleSyncMessage", {
                                        target: t.plugin,
                                        data: {
                                            message: r
                                        }
                                    }), n();
                                }, function(e) {
                                    return o36.default.error("StageWorker#error", e), r63(e);
                                });
                            });
                        }
                    },
                    {
                        key: "__updatePlaylist__",
                        value: function(e278) {
                            var t = this;
                            return new Promise(function(n, r) {
                                var i = e278.attributes.playlistDurationTimeMs, a = e278.attributes.playlistPositionTimeMs, u = e278.attributes.playlistCreatedAt, l = e278.attributes.playlistUpdatedAt;
                                return null == u || null == l || u === t.__playlistCreatedAt__ && l === t.__playlistUpdatedAt__ ? n() : void s25.PlaylistAPI.getPlaylist(t.plugin).then(function(e) {
                                    return t.__playlistDurationTime__ = i, t.__playlistPositionTime__ = a, t.__playlistItems__ = e, t.__playlistCreatedAt__ = u, t.__playlistUpdatedAt__ = l, t.player.invokeTrap("songleSyncPlaylistUpdate", {
                                        target: t.plugin,
                                        data: {
                                            playlistItems: e
                                        }
                                    }), n();
                                }, function(e) {
                                    return o36.default.error("StageWorker#error", e), r(e);
                                });
                            });
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 3e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    }
                ], _(t156.prototype, n98), r62 && _(t156, r62), y;
            }(a34.default);
            t154.default = v;
        },
        72: function(e279, t157, n99) {
            "use strict";
            n99.r(t157);
            var r64 = n99(28), i49 = n99(2);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function u(e280, t158) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e280, t158);
            }
            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = c6(e);
                    if (t) {
                        var i = c6(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return l30(this, n);
                };
            }
            function l30(e281, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e281) : t;
            }
            function c6(e282) {
                return (c6 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e282);
            }
            var f = function(e283) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && u(e, t);
                }(c, e283);
                var t159, n100, r65, l = s(c);
                function c() {
                    var e;
                    a(this, c);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = l.call.apply(l, [
                        this
                    ].concat(n))).__beforePlaylistItemIndex__ = -1, e.__enterStates__ = [], e.__leaveStates__ = [], e.__finishState__ = !1, e.__stopNumberOfTrails__ = 0, e.__playNumberOfTrails__ = 0, e.__pauseNumberOfTrails__ = 0, e.__stopNumberOfTrailsThreshold__ = 0, e.__playNumberOfTrailsThreshold__ = 0, e.__pauseNumberOfTrailsThreshold__ = 0, e.skipMediaStateChange = !1, e;
                }
                return t159 = c, n100 = [
                    {
                        key: "resetState",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = null != e.force && e.force, n = this.plugin.__getCurrentPlaylistItem__();
                            (null == n || t || this.__beforePlaylistItemIndex__ != n.index) && (this.__invokeAllPlaylistItemLeaveTrap__(), this.__beforePlaylistItemIndex__ = -1, this.__enterStates__ = [], this.__leaveStates__ = [], this.__finishState__ = !1, i49.default.debug("Playlist trap states was reseted"));
                        }
                    },
                    {
                        key: "runTask",
                        value: function() {
                            this.update();
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            this.__invokePlaylistTraps__(), null != this.player.media && this.player.media.sourceUrl === this.plugin.playlist.currentItem.mediaSourceUrl && (this.skipMediaStateChange || (this.plugin.__getPlaylistMediaIsStopped__() ? this.__tryStoppingMedia__() : this.plugin.__getPlaylistMediaIsPlaying__() ? this.__tryPlayingMedia__() : this.plugin.__getPlaylistMediaIsPaused__() && this.__tryPausingMedia__()));
                        }
                    },
                    {
                        key: "__tryStoppingMedia__",
                        value: function() {
                            if (this.player.media.isPaused) return this.__stopNumberOfTrails__ = 0, void (this.__stopNumberOfTrailsThreshold__ = 0);
                            this.__stopNumberOfTrails__ += 1, this.__stopNumberOfTrails__ > this.__stopNumberOfTrailsThreshold__ && (this.player.media.stop(), i49.default.debug("The 'stop' function of media was called by the Songle Sync"), this.__stopNumberOfTrailsThreshold__ = 2 * this.__stopNumberOfTrails__);
                        }
                    },
                    {
                        key: "__tryPlayingMedia__",
                        value: function() {
                            if (this.player.media.isPlaying) return this.__playNumberOfTrails__ = 0, void (this.__playNumberOfTrailsThreshold__ = 0);
                            this.__playNumberOfTrails__ += 1, this.__playNumberOfTrails__ > this.__playNumberOfTrailsThreshold__ && (this.player.media.play(), i49.default.debug("The 'play' function of media was called by the Songle Sync"), this.__playNumberOfTrailsThreshold__ = 2 * this.__playNumberOfTrails__);
                        }
                    },
                    {
                        key: "__tryPausingMedia__",
                        value: function() {
                            if (this.player.media.isPaused) return this.__pauseNumberOfTrails__ = 0, void (this.__pauseNumberOfTrailsThreshold__ = 0);
                            this.__pauseNumberOfTrails__ += 1, this.__pauseNumberOfTrails__ > this.__pauseNumberOfTrailsThreshold__ && (this.player.media.pause(), i49.default.debug("The 'pause' function of media was called by the Songle Sync"), this.__pauseNumberOfTrailsThreshold__ = 2 * this.__pauseNumberOfTrails__);
                        }
                    },
                    {
                        key: "__invokePlaylistTraps__",
                        value: function() {
                            var e = this;
                            this.plugin.stageIsPlaying && (this.plugin.playlist.items.forEach(function(t) {
                                e.plugin.playlist.positionTime >= t.relativeStartTime && e.plugin.playlist.positionTime < t.relativeEndTime ? e.__invokePlaylistItemEnterTrap__(t) : e.__invokePlaylistItemLeaveTrap__(t);
                            }), this.__invokePlaylistFinishTrap__());
                        }
                    },
                    {
                        key: "__invokeAllPlaylistItemEnterTrap__",
                        value: function() {
                            var e = this;
                            this.plugin.playlist.items.forEach(function(t) {
                                e.__invokePlaylistItemEnterTrap__(t);
                            });
                        }
                    },
                    {
                        key: "__invokeAllPlaylistItemLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.plugin.playlist.items.forEach(function(t) {
                                e.__invokePlaylistItemLeaveTrap__(t);
                            });
                        }
                    },
                    {
                        key: "__invokePlaylistItemEnterTrap__",
                        value: function(e) {
                            this.__enterStates__[e.index] || this.__leaveStates__[e.index] || (this.player.invokeTrap("songleSyncPlaylistItemEnter", {
                                target: this.plugin,
                                data: {
                                    playlistItem: e
                                }
                            }), this.__beforePlaylistItemIndex__ = this.plugin.playlist.currentItem.index, this.__enterStates__[e.index] = !0);
                        }
                    },
                    {
                        key: "__invokePlaylistItemLeaveTrap__",
                        value: function(e) {
                            this.__enterStates__[e.index] && !this.__leaveStates__[e.index] && (this.player.invokeTrap("songleSyncPlaylistItemLeave", {
                                target: this.plugin,
                                data: {
                                    playlistItem: e
                                }
                            }), this.__beforePlaylistItemIndex__ = this.plugin.playlist.currentItem.index, this.__leaveStates__[e.index] = !0);
                        }
                    },
                    {
                        key: "__invokePlaylistFinishTrap__",
                        value: function() {
                            this.__finishState__ || this.plugin.playlist.positionTime != this.plugin.playlist.durationTime || (this.player.invokeTrap("songleSyncPlaylistFinish", {
                                target: this.plugin
                            }), this.__finishState__ = !0);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 100;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 100;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    }
                ], o(t159.prototype, n100), r65 && o(t159, r65), c;
            }(r64.default);
            t157.default = f;
        },
        73: function(e284, t160, n101) {
            "use strict";
            n101.r(t160);
            var r66 = n101(28), i50 = n101(32), a = (n101(59), n101(57), n101(58), n101(2)), o = n101(1);
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l(e285, t161) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e285, t161);
            }
            function c(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = _6(e);
                    if (t) {
                        var i = _6(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return f5(this, n);
                };
            }
            function f5(e286, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e286) : t;
            }
            function _6(e287) {
                return (_6 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e287);
            }
            var p = Math.floor(5.5), d = function(e288) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t);
                }(_, e288);
                var t162, n102, r67, f = c(_);
                function _() {
                    var e;
                    u(this, _);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = f.call.apply(f, [
                        this
                    ].concat(n))).__integralOffsetTime__ = 0, e.__stateWorkerRestartTime__ = 0, e.__minAllowableOffsetTimeThreshold__ = 200, e.__maxAllowableOffsetTimeThreshold__ = 2e3, e.__allowableOffsetTimeThreshold__ = 200, e.__offsetTime__ = 0, e.__negativeSeekingCount__ = 0, e.__positiveSeekingCount__ = 0, e.__syncedCount__ = 0, e.__syncedCountThreshold__ = p, e;
                }
                return t162 = _, n102 = [
                    {
                        key: "runTask",
                        value: function() {
                            this.update();
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            if (this.plugin.__getPlaylistMediaIsPlaying__()) {
                                if (null != this.player && null != this.player.media) {
                                    var e = this.plugin.__getPlaylistMediaPositionTime__();
                                    if (this.__offsetTime__ = e - this.player.media.positionTime, Math.abs(this.offsetTime) < 1e3 ? this.__integralOffsetTime__ += this.offsetTime : this.__integralOffsetTime__ = 0, !this.__restartStateWorker__()) {
                                        if (this.offsetTime < this.negativeOffsetTimeThreshold) {
                                            switch(this.player.media.dispatcherName){
                                                case i50.default.Name:
                                                    this.player.media.seekTo(e);
                                                    break;
                                                default:
                                                    if (!this.player.media.isReady) return;
                                                    if (Math.abs(this.offsetTime) < 1e3) return void this.__suspendStateWorker__();
                                                    this.player.media.seekTo(e);
                                            }
                                            this.__incrementNegativeSeekingCount__(), this.__dispatchNegativeSeeking__(), this.__dispatchUnsync__(), this.__resetSyncedCount__();
                                        } else if (this.offsetTime > this.positiveOffsetTimeThreshold) {
                                            switch(this.player.media.dispatcherName){
                                                case i50.default.Name:
                                                    this.player.media.seekTo(e);
                                                    break;
                                                default:
                                                    if (!this.player.media.isReady) return;
                                                    this.player.media.seekTo(e + this.__integralOffsetTime__);
                                            }
                                            this.__incrementPositiveSeekingCount__(), this.__dispatchPositiveSeeking__(), this.__dispatchUnsync__(), this.__resetSyncedCount__();
                                        } else if (!this.plugin.stateWorker.skipMediaStateChange) {
                                            if (this.__incrementSyncedCount__(), this.syncedCount % this.syncedCountThreshold != 0) return;
                                            this.__dispatchSync__(), this.__resetSeekingCount__();
                                        }
                                    }
                                }
                            } else this.__resetSyncedCount__();
                        }
                    },
                    {
                        key: "__debugMessage__",
                        value: function(e) {
                            a.default.debug(e, {
                                minAllowableOffsetTimeThreshold: this.minAllowableOffsetTimeThreshold,
                                maxAllowableOffsetTimeThreshold: this.maxAllowableOffsetTimeThreshold,
                                allowableOffsetTimeThreshold: this.allowableOffsetTimeThreshold,
                                negativeOffsetTimeThreshold: this.negativeOffsetTimeThreshold,
                                positiveOffsetTimeThreshold: this.positiveOffsetTimeThreshold,
                                offsetTime: this.offsetTime,
                                negativeSeekingCount: this.negativeSeekingCount,
                                positiveSeekingCount: this.positiveSeekingCount,
                                unsyncedCount: this.unsyncedCount,
                                syncedCount: this.syncedCount
                            });
                        }
                    },
                    {
                        key: "__resetSeekingCount__",
                        value: function() {
                            this.__negativeSeekingCount__ = 0, this.__positiveSeekingCount__ = 0;
                        }
                    },
                    {
                        key: "__incrementNegativeSeekingCount__",
                        value: function() {
                            this.__negativeSeekingCount__ += 1;
                        }
                    },
                    {
                        key: "__incrementPositiveSeekingCount__",
                        value: function() {
                            this.__positiveSeekingCount__ += 1;
                        }
                    },
                    {
                        key: "__resetSyncedCount__",
                        value: function() {
                            this.__syncedCount__ = 0;
                        }
                    },
                    {
                        key: "__incrementSyncedCount__",
                        value: function() {
                            this.__syncedCount__ += 1;
                        }
                    },
                    {
                        key: "__dispatchNegativeSeeking__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync is seeking the `songlePlayer.media.positionTime` in the negative direction");
                        }
                    },
                    {
                        key: "__dispatchPositiveSeeking__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync is seeking the `songlePlayer.media.positionTime` in the positive direction");
                        }
                    },
                    {
                        key: "__dispatchUnsync__",
                        value: function() {
                            this.unsyncedCount % 10 == 0 && (this.allowableOffsetTimeThreshold *= 2);
                        }
                    },
                    {
                        key: "__dispatchSync__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync was synced with the `songlePlayer.media.positionTime`");
                            var e = -this.minAllowableOffsetTimeThreshold / 2, t = this.minAllowableOffsetTimeThreshold / 2;
                            this.offsetTime > e && this.offsetTime < t && (this.allowableOffsetTimeThreshold = this.minAllowableOffsetTimeThreshold);
                        }
                    },
                    {
                        key: "__suspendStateWorker__",
                        value: function() {
                            return !this.plugin.stateWorker.skipMediaStateChange && !(o.default.currentClockTime < this.__stateWorkerRestartTime__) && (this.plugin.stateWorker.skipMediaStateChange = !this.plugin.stateWorker.skipMediaStateChange, this.player.media.pause(), this.__stateWorkerRestartTime__ = o.default.currentClockTime + Math.abs(this.offsetTime), this.intervalTime = 1, !0);
                        }
                    },
                    {
                        key: "__restartStateWorker__",
                        value: function() {
                            return !!this.plugin.stateWorker.skipMediaStateChange && !(o.default.currentClockTime < this.__stateWorkerRestartTime__) && (this.plugin.stateWorker.skipMediaStateChange = !this.plugin.stateWorker.skipMediaStateChange, this.player.media.play(), this.intervalTime = this.defaultIntervalTime, !0);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    },
                    {
                        key: "minAllowableOffsetTimeThreshold",
                        get: function() {
                            return this.__minAllowableOffsetTimeThreshold__;
                        }
                    },
                    {
                        key: "maxAllowableOffsetTimeThreshold",
                        get: function() {
                            return this.__maxAllowableOffsetTimeThreshold__;
                        }
                    },
                    {
                        key: "allowableOffsetTimeThreshold",
                        get: function() {
                            return this.__allowableOffsetTimeThreshold__;
                        },
                        set: function(e) {
                            e < this.minAllowableOffsetTimeThreshold && (e = this.minAllowableOffsetTimeThreshold), e > this.maxAllowableOffsetTimeThreshold && (e = this.maxAllowableOffsetTimeThreshold), this.__allowableOffsetTimeThreshold__ = e;
                        }
                    },
                    {
                        key: "negativeOffsetTimeThreshold",
                        get: function() {
                            return -this.__allowableOffsetTimeThreshold__ / 2;
                        }
                    },
                    {
                        key: "positiveOffsetTimeThreshold",
                        get: function() {
                            return this.__allowableOffsetTimeThreshold__ / 2;
                        }
                    },
                    {
                        key: "offsetTime",
                        get: function() {
                            return this.__offsetTime__;
                        }
                    },
                    {
                        key: "negativeSeekingCount",
                        get: function() {
                            return this.__negativeSeekingCount__;
                        }
                    },
                    {
                        key: "positiveSeekingCount",
                        get: function() {
                            return this.__positiveSeekingCount__;
                        }
                    },
                    {
                        key: "unsyncedCount",
                        get: function() {
                            return this.__negativeSeekingCount__ + this.__positiveSeekingCount__;
                        }
                    },
                    {
                        key: "syncedCount",
                        get: function() {
                            return this.__syncedCount__;
                        }
                    },
                    {
                        key: "syncedCountThreshold",
                        get: function() {
                            return this.__syncedCountThreshold__;
                        },
                        set: function(e) {
                            e < 1 ? a.default.warn("Couldn't set the 'songlePlayer.stageSyncedCountThreshold' less than ".concat(1)) : e > 10 ? a.default.warn("Couldn't set the 'songlePlayer.stageSyncedCountThreshold' more than ".concat(10)) : this.__syncedCountThreshold__ = e;
                        }
                    }
                ], s(t162.prototype, n102), r67 && s(t162, r67), _;
            }(r66.default);
            t160.default = d;
        },
        74: function(e289, t163, n103) {
            "use strict";
            n103.r(t163);
            var r68 = n103(4), i51 = n103.n(r68), a36 = n103(28), o37 = n103(20);
            function u30(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s26(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l31(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e290, t164) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e290, t164);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p4(e);
                    if (t) {
                        var i = p4(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _7(this, n);
                };
            }
            function _7(e291, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e291) : t;
            }
            function p4(e292) {
                return (p4 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e292);
            }
            var d10 = function(e293) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(d, e293);
                var t165, n104, r69, a, _, p = f(d);
                function d() {
                    return s26(this, d), p.apply(this, arguments);
                }
                return t165 = d, n104 = [
                    {
                        key: "runTask",
                        value: (a = i51.a.mark(function e294() {
                            return i51.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.prev = 0, e.next = 3, o37.HistoryAPI.createHistory(this.plugin);
                                    case 3:
                                        e.next = 7;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0);
                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }, e294, this, [
                                [
                                    0,
                                    5
                                ]
                            ]);
                        }), _ = function() {
                            var e295 = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e295, t);
                                function o(e) {
                                    u30(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u30(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function() {
                            return _.apply(this, arguments);
                        })
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 3e4;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 15e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    }
                ], l31(t165.prototype, n104), r69 && l31(t165, r69), d;
            }(a36.default);
            t163.default = d10;
        },
        77: function(e296, t166, n105) {
            "use strict";
            n105.r(t166);
            var r70 = n105(4), i52 = n105.n(r70), a37 = n105(19), o38 = n105(6), u31 = n105(2), s27 = n105(66), l32 = n105(1), c7 = n105(30), f = n105(32), _ = n105(12), p5 = n105(62);
            function d11(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function h6(e297) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e297.apply(t, n);
                        function o(e) {
                            d11(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            d11(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function y5(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function v(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), e;
            }
            function m(e298, t167) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e298, t167);
            }
            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = S(e);
                    if (t) {
                        var i = S(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return k(this, n);
                };
            }
            function k(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? T(e) : t;
            }
            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function S(e299) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e299);
            }
            var P = function(e300) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t);
                }(d12, e300);
                var t168, n106, r71, a38 = b(d12);
                function d12() {
                    var e, t169 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    y5(this, d12), (e = a38.call(this)).__dispatchers__ = [], e.__mediaCaches__ = [], e.__accessToken__ = t169.accessToken, e.__secretToken__ = t169.secretToken, e.__mediaElement__ = t169.mediaElement;
                    var n = [
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "positionTime",
                            target: "position",
                            warning: !0
                        }
                    ];
                    return n.forEach(function(t) {
                        Object.defineProperty(T(e), t.target, {
                            get: function() {
                                return t.warning && u31.default.warn("'Player.".concat(t.target, "' is obsolete API, please use 'Player.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), e;
                }
                return g(d12, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "player";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "player";
                        }
                    },
                    {
                        key: "MinVolume",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "MaxVolume",
                        get: function() {
                            return 100;
                        }
                    }
                ]), g(d12, [
                    {
                        key: "activate",
                        value: (r71 = h6(i52.a.mark(function e301() {
                            return i52.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null != this.__media__) {
                                            e.next = 3;
                                            break;
                                        }
                                        return u31.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'"), e.abrupt("return");
                                    case 3:
                                        return e.abrupt("return", this.media.activate());
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                            }, e301, this);
                        })), function() {
                            return r71.apply(this, arguments);
                        })
                    },
                    {
                        key: "useMedia",
                        value: (n106 = h6(i52.a.mark(function e302(t) {
                            var n, r, a, o, c, p, d, h = this, y = arguments;
                            return i52.a.wrap(function(e303) {
                                for(;;)switch(e303.prev = e303.next){
                                    case 0:
                                        n = y.length > 1 && void 0 !== y[1] ? y[1] : {}, t.options && u31.default.warn("The 1st arg of `SongleAPI.Player.useMedia` exists the `options` attribute, but it's ignored"), n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null != n.src ? n.src : null, n.element = null != n.element ? n.element : null != n.rootElement ? n.rootElement : null, n.controls = null != n.controls ? n.controls : null != n.showCtrl ? n.showCtrl : null, n.width = null != n.width ? n.width : null != n.width ? n.videoSizeW : null, n.height = null != n.height ? n.height : null != n.height ? n.videoSizeH : null, n.endpointScheme = null != n.endpointScheme ? n.endpointScheme : null, n.endpointHost = null != n.endpointHost ? n.endpointHost : null, n.endpointPath = null != n.endpointPath ? n.endpointPath : null, n.fallback = null != n.fallback ? n.fallback : null, n.headless = null != n.headless && n.headless, n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null, n.element = null != n.element ? n.element : this.mediaElement, n.controls = null != n.controls && n.controls, n.playsinline = null == n.playsinline || n.playsinline, n.width = null != n.width ? n.width : 256, n.height = null != n.height ? n.height : 144, t instanceof f.default && (n.headless = !0), u31.default.debug("Songle.Player#useMedia options", n), n.width < 200 && n.height < 200 && u31.default.warn("Video size is too small, please check the terms of use of this video provider"), e303.t0 = !0, e303.next = e303.t0 === (null == t) ? 24 : e303.t0 === ("string" === l32.default.typeOf(t)) ? 25 : e303.t0 === ("object" === l32.default.typeOf(t) && null != t.mediaSourceUrl) ? 27 : e303.t0 === ("object" === l32.default.typeOf(t) && null != t.permalink) ? 29 : e303.t0 === ("object" === l32.default.typeOf(t) && null != t.sourceUrl) ? 31 : e303.t0 === ("object" === l32.default.typeOf(t) && null != t.src) ? 33 : 35;
                                        break;
                                    case 24:
                                        return e303.abrupt("return");
                                    case 25:
                                        return r = t, e303.abrupt("break", 37);
                                    case 27:
                                        return r = t.mediaSourceUrl, e303.abrupt("break", 37);
                                    case 29:
                                        return r = t.permalink, e303.abrupt("break", 37);
                                    case 31:
                                        return r = t.sourceUrl, e303.abrupt("break", 37);
                                    case 33:
                                        return r = t.src, e303.abrupt("break", 37);
                                    case 35:
                                        return u31.default.error("Requested new media is unsupported with 'Songle.Player#useMedia'"), e303.abrupt("return");
                                    case 37:
                                        return e303.next = 39, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaTryMount(h, {
                                                newMediaSourceUrl: r
                                            });
                                        }));
                                    case 39:
                                        return a = n.endpointScheme, o = n.endpointHost, c = n.endpointPath, p = n.headless, e303.next = 45, _.SongAPI.get(r, {
                                            endpointScheme: a,
                                            endpointHost: o,
                                            endpointPath: c
                                        });
                                    case 45:
                                        if (d = e303.sent, null == this.__media__) {
                                            e303.next = 58;
                                            break;
                                        }
                                        e303.t1 = this.__media__.dispatcherName, e303.next = e303.t1 === f.default.Name ? 50 : 54;
                                        break;
                                    case 50:
                                        if (!p || n.altSourceUrl) {
                                            e303.next = 53;
                                            break;
                                        }
                                        if (this.__media__.sourceUrl !== d.attributes.permalink) {
                                            e303.next = 53;
                                            break;
                                        }
                                        return e303.abrupt("return");
                                    case 53:
                                        return e303.abrupt("break", 58);
                                    case 54:
                                        if (p || n.altSourceUrl) {
                                            e303.next = 57;
                                            break;
                                        }
                                        if (this.__media__.sourceUrl !== d.attributes.permalink) {
                                            e303.next = 57;
                                            break;
                                        }
                                        return e303.abrupt("return");
                                    case 57:
                                        return e303.abrupt("break", 58);
                                    case 58:
                                        if (!this.__mediaTransaction__) {
                                            e303.next = 61;
                                            break;
                                        }
                                        return u31.default.warn("Before finish 'Songle.Player#useMedia', it was called again. please check it using 'mediaReady' event"), e303.abrupt("return");
                                    case 61:
                                        return this.__mediaTransaction__ = !this.__mediaTransaction__, e303.next = 64, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaDisMount(h);
                                        }));
                                    case 64:
                                        if (null != this.media && this.media.hideElement(), null != this.media && null == this.mediaCaches.find(function(e) {
                                            return e == h.media;
                                        }) && this.media.dispose(), e303.t2 = this.__getCachedMedia__(d, n), e303.t2) {
                                            e303.next = 71;
                                            break;
                                        }
                                        return e303.next = 70, s27.default.create(this, d, n);
                                    case 70:
                                        e303.t2 = e303.sent;
                                    case 71:
                                        return this.__media__ = e303.t2, null != this.media && this.media.showElement(n), e303.next = 75, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaDidMount(h);
                                        }));
                                    case 75:
                                        return this.invokeTrap("mediaReady", {
                                            target: this,
                                            data: {
                                                media: this.__media__
                                            }
                                        }), this.__mediaTransaction__ = !this.__mediaTransaction__, e303.abrupt("return", this.__media__);
                                    case 78:
                                    case "end":
                                        return e303.stop();
                                }
                            }, e302, this);
                        })), function(e) {
                            return n106.apply(this, arguments);
                        })
                    },
                    {
                        key: "cacheMedia",
                        value: (t168 = h6(i52.a.mark(function e304(t170) {
                            var n107, r = this;
                            return i52.a.wrap(function(e305) {
                                for(;;)switch(e305.prev = e305.next){
                                    case 0:
                                        e305.t0 = l32.default.typeOf(t170), e305.next = "array" === e305.t0 ? 3 : "object" === e305.t0 ? 5 : "string" === e305.t0 ? 7 : 9;
                                        break;
                                    case 3:
                                        return t170 = t170.map(function(e) {
                                            return "string" == l32.default.typeOf(e) ? {
                                                mediaSourceUrl: e
                                            } : e;
                                        }), e305.abrupt("break", 9);
                                    case 5:
                                        return t170 = [
                                            t170
                                        ], e305.abrupt("break", 9);
                                    case 7:
                                        return t170 = [
                                            {
                                                mediaSourceUrl: t170
                                            }
                                        ], e305.abrupt("break", 9);
                                    case 9:
                                        return e305.next = 11, Promise.all(t170.map(function() {
                                            var e306 = h6(i52.a.mark(function e307(t) {
                                                var n, a, o;
                                                return i52.a.wrap(function(e) {
                                                    for(;;)switch(e.prev = e.next){
                                                        case 0:
                                                            return (n = null != t.options ? t.options : {}).endpointScheme = null != n.endpointScheme ? n.endpointScheme : null, n.endpointHost = null != n.endpointHost ? n.endpointHost : null, n.endpointPath = null != n.endpointPath ? n.endpointPath : null, n.headless = null != n.headless && n.headless, n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null, n.element = null != n.element ? n.element : r.mediaElement, n.controls = null != n.controls && n.controls, n.width = null != n.width ? n.width : 256, n.height = null != n.height ? n.height : 144, e.next = 12, _.SongAPI.get(t.mediaSourceUrl, n);
                                                        case 12:
                                                            return a = e.sent, e.next = 15, s27.default.create(r, a, n);
                                                        case 15:
                                                            return (o = e.sent).altSourceUrl = n.altSourceUrl, r.mediaCaches.push(o), e.abrupt("return", o);
                                                        case 19:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                                }, e307);
                                            }));
                                            return function(t) {
                                                return e306.apply(this, arguments);
                                            };
                                        }()));
                                    case 11:
                                        return n107 = e305.sent, e305.abrupt("return", n107);
                                    case 13:
                                    case "end":
                                        return e305.stop();
                                }
                            }, e304);
                        })), function(e) {
                            return t168.apply(this, arguments);
                        })
                    },
                    {
                        key: "addPlugin",
                        value: function(e) {
                            this.hasPlugin(e.dispatcherName) ? u31.default.warn("'".concat(e.dispatcherName, "' is already installed")) : (e.initialize(this), this.__dispatchers__.push(e));
                        }
                    },
                    {
                        key: "hasPlugin",
                        value: function(e) {
                            return -1 != this.dispatchers.findIndex(function(t) {
                                return t && t.dispatcherName === e;
                            });
                        }
                    },
                    {
                        key: "invokeTrap",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.dispatchers.forEach(function(n) {
                                n && n.invokeSelfTrap(e, t);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            null != this.__media__ ? this.media.play() : u31.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            null != this.__media__ ? this.media.pause() : u31.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            null != this.__media__ ? this.media.stop() : u31.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            null != this.__media__ ? this.invokeTrap("seek", {
                                target: this,
                                data: {
                                    positionTime: e
                                }
                            }) : u31.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "__getCachedMedia__",
                        value: function(e, t) {
                            return this.mediaCaches.find(function(n) {
                                var r;
                                switch(!0){
                                    case null == e:
                                        return !1;
                                    case "string" === l32.default.typeOf(e):
                                        r = e;
                                        break;
                                    case "object" === l32.default.typeOf(e) && null != e.targetMediaSourceUrl:
                                        r = e.targetMediaSourceUrl;
                                        break;
                                    case "object" === l32.default.typeOf(e) && null != e.permalink:
                                        r = e.permalink;
                                        break;
                                    case "object" === l32.default.typeOf(e) && null != e.sourceUrl:
                                        r = e.sourceUrl;
                                        break;
                                    case "object" === l32.default.typeOf(e) && null != e.src:
                                        r = e.src;
                                        break;
                                    default:
                                        return !1;
                                }
                                var i = n.sourceUrl === r, a = t.headless && null == n.originalPlayer || !t.headless && null != n.originalPlayer, o = t.altSourceUrl && t.altSourceUrl == n.altSourceUrl || !t.altSourceUrl;
                                return i && a && o;
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return d12.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return d12.Type;
                        }
                    },
                    {
                        key: "accessToken",
                        get: function() {
                            return this.__accessToken__ || "";
                        },
                        set: function(e) {
                            this.__accessToken__ = e;
                        }
                    },
                    {
                        key: "secretToken",
                        get: function() {
                            return this.__secretToken__ || "";
                        },
                        set: function(e) {
                            this.__secretToken__ = e;
                        }
                    },
                    {
                        key: "mediaElement",
                        get: function() {
                            return c7.default.querySelector(this.__mediaElement__);
                        },
                        set: function(e) {
                            this.__mediaElement__ = e;
                        }
                    },
                    {
                        key: "dispatchers",
                        get: function() {
                            return this.__dispatchers__.concat([
                                this,
                                this.media
                            ]);
                        }
                    },
                    {
                        key: "media",
                        get: function() {
                            return this.__media__;
                        }
                    },
                    {
                        key: "mediaCaches",
                        get: function() {
                            return this.__mediaCaches__;
                        }
                    },
                    {
                        key: "musicMap",
                        get: function() {
                            return null == this.__media__ ? null : this.__media__.musicMap;
                        }
                    },
                    {
                        key: "isReady",
                        get: function() {
                            return null == this.media ? o38.default.DefaultStateReady : this.media.isReady;
                        }
                    },
                    {
                        key: "isPlaying",
                        get: function() {
                            return null == this.media ? o38.default.DefaultStatePlaying : this.media.isPlaying;
                        }
                    },
                    {
                        key: "isPaused",
                        get: function() {
                            return null == this.media ? o38.default.DefaultStatePaused : this.media.isPaused;
                        }
                    },
                    {
                        key: "isSeeking",
                        get: function() {
                            return null == this.media ? o38.default.DefaultStateSeeking : this.media.isSeeking;
                        }
                    },
                    {
                        key: "durationTime",
                        get: function() {
                            return null == this.media ? 0 : this.hasPlugin(p5.default.Name) ? this.playlist.mediaDurationTime : this.media.durationTime;
                        }
                    },
                    {
                        key: "positionTime",
                        get: function() {
                            return null == this.__media__ ? 0 : this.hasPlugin(p5.default.Name) ? this.playlist.mediaPositionTime : this.media.positionTime;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return null != this.__media__ && this.media.muted;
                        },
                        set: function(e) {
                            null != this.__media__ && (this.media.muted = e);
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return null == this.__media__ ? 100 : this.media.volume;
                        },
                        set: function(e) {
                            null != this.__media__ && (this.media.volume = e < 0 ? 0 : e > 100 ? 100 : e);
                        }
                    }
                ]), d12;
            }(a37.default);
            t166.default = P;
        },
        78: function(e308, t171, n108) {
            var r = n108(95), i = n108(96);
            e308.exports = function(e, t, n) {
                var a = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var o = (e = e || {}).random || (e.rng || r)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) for(var u = 0; u < 16; ++u)t[a + u] = o[u];
                return t || i(o);
            };
        },
        8: function(e309, t172, n) {
            "use strict";
            n.r(t172);
            var r = n(1);
            function i() {
                return document.querySelector(".".concat("songle-api-license"));
            }
            var a = {
                createLicense: function(e) {
                    if (!r.default.isStandalone) {
                        var t = i();
                        if (!t) {
                            switch((t = document.createElement("img")).className = "songle-api-license", t.style.cursor = "pointer", t.style.borderRadius = "4px", t.style.position = "fixed", t.style.zIndex = "9999", e){
                                case "left-top":
                                    t.style.left = "4px", t.style.top = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                case "left-bottom":
                                    t.style.left = "4px", t.style.bottom = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                case "right-top":
                                    t.style.right = "4px", t.style.top = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                default:
                                case "right-bottom":
                                    t.style.right = "4px", t.style.bottom = "4px", t.style.width = "24px", t.style.height = "24px";
                            }
                            t.alt = "Powered by Songle API", t.src = "https://api.songle.jp/license-icons/songle.png", t.width = 24, t.height = 24, t.addEventListener("click", function(e) {
                                return open("https://api.songle.jp");
                            }, !1), t.addEventListener("touch", function(e) {
                                return open("https://api.songle.jp");
                            }, !1), document.body && document.body.appendChild(t);
                        }
                    }
                },
                removeLicense: function() {
                    if (!r.default.isStandalone) {
                        var e = i();
                        e && e.remove();
                    }
                }
            };
            t172.default = a;
        },
        83: function(e310, t173, n) {
            "use strict";
            n.r(t173);
            var r = n(30), i = n(1), a = "https://w.soundcloud.com/player/api.js";
            var o = {
                importClass: function() {
                    return new Promise(function(e, t174) {
                        if (i.default.ScFactoryClass) return e(i.default.ScFactoryClass);
                        (options.element || i.default.global.document.body).appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return t174();
                            },
                            onError: function(e) {
                                return t174();
                            },
                            onLoad: function(e) {
                                var t = setInterval(function() {
                                    i.default.global.SC && (i.default.ScFactoryClass = i.default.global.SC, i.default.ScFactoryClass && (clearInterval(t), read(i.default.ScFactoryClass)));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t173.default = o;
        },
        95: function(e311, t175) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e311.exports = function() {
                    return n(r), r;
                };
            } else {
                var i = new Array(16);
                e311.exports = function() {
                    for(var e, t = 0; t < 16; t++)0 === (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                    return i;
                };
            }
        },
        96: function(e312, t176) {
            for(var n = [], r72 = 0; r72 < 256; ++r72)n[r72] = (r72 + 256).toString(16).substr(1);
            e312.exports = function(e, t) {
                var r = t || 0, i = n;
                return [
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]]
                ].join("");
            };
        }
    });
}); //# sourceMappingURL=api-f23f6209be72cbdcea7e.js.map

},{}],"hezZX":[function(require,module,exports) {
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 Yamagishi Kazutoshi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
/* global window */ module.exports = {
    XMLHttpRequest: window.XMLHttpRequest,
    XMLHttpRequestUpload: window.XMLHttpRequestUpload,
    FormData: window.FormData
};

},{}]},["gcYbo"], null, "parcelRequire3c2c")

//# sourceMappingURL=main.fb82e34c.js.map
