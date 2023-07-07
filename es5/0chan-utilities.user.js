"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ==UserScript==
// @name         0chan Utilities
// @namespace    https://ochan.ru/userjs/
// @version      3.4.5
// @description  Various 0chan utilities
// @updateURL    https://juribiyan.github.io/0chan-utilities/es5/0chan-utilities.meta.js
// @downloadURL  https://juribiyan.github.io/0chan-utilities/es5/0chan-utilities.user.js
// @author       Snivy & devarped
// @include      https://www.0chan.pl/*
// @include      https://p.0chan.pl/*
// @include      https://0.1chan.pl/*
// @include      https://ygg.0chan.pl/*
// @include      https://www.0chan.club/*
// @include      http://nullplctggmjazqcoboc2pw5anogckczzj6xo45ukrnsaxarpswu7sid.onion/*
// @include      http://0pl.i2p/*
// @include      http://gd7qe2pu2jwqabz4zcf3wwablrzym7p6qswczoapkm5oa5ouuaua.b32.i2p/*
// @include      http://[225:55:9ebf:1709:7b1f:a315:1119:6eff]/*
// @include      http://0chan.ygg/*
// @include      https://ochan.ru/*
// @include      https://foxhound.cc/*
// @include      https://0chan.life/*
// @include      https://p.0chan.life/*
// @include      https://0chan.xyz/*
// @include      https://nullchan.i2phides.me/*
// @include      http://nullz2mkp7znirlcersxpk7qmkmgcc6u3yhe462p2qkpxsdb3mja.b32.i2p/*
// @include      http://nullchan.i2p/*
// @include      https://0chan.nl/*
// @include      https://0chna.ru/*
// @include      https://mint.0chan.ru/*
// @include      https://0chans.ru/*
// @include      https://0chan.me/*
// @grant        GM_getResourceText
// @icon         https://juribiyan.github.io/0chan-utilities/icon.png
// @resource     baseCSS https://juribiyan.github.io/0chan-utilities/css/base.css
// @resource     darkCSS https://juribiyan.github.io/0chan-utilities/css/dark.css
// @resource     catalogCSS https://juribiyan.github.io/0chan-utilities/css/catalog.css
// ==/UserScript==

var icons = "<svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n  <symbol id=\"i-logo\" viewBox=\"0 0 32 32\">\n  <path d=\"M19.454 21.933c-0.59 0.339-0.39 1.151-0.322 1.371 0.011 0.033-0.006 0.068-0.038 0.080-0.222 0.092-0.448 0.174-0.678 0.245-0.032 0.010-0.067-0.005-0.080-0.037-0.092-0.213-0.464-0.962-1.136-0.845-0.672 0.118-0.763 0.948-0.776 1.18-0.001 0.034-0.030 0.061-0.064 0.063-0.24 0.011-0.481 0.011-0.721 0-0.034-0.001-0.061-0.028-0.064-0.063-0.013-0.232-0.104-1.062-0.776-1.18-0.671-0.117-1.044 0.633-1.135 0.845-0.014 0.032-0.049 0.047-0.081 0.037-0.229-0.071-0.456-0.152-0.678-0.245-0.032-0.013-0.049-0.047-0.038-0.080 0.067-0.221 0.268-1.032-0.322-1.371-0.591-0.338-1.2 0.241-1.359 0.41-0.024 0.025-0.063 0.027-0.090 0.007-0.191-0.145-0.376-0.299-0.553-0.459-0.025-0.024-0.028-0.061-0.008-0.089 0.14-0.185 0.61-0.88 0.17-1.398-0.438-0.517-1.209-0.181-1.417-0.076-0.031 0.015-0.068 0.005-0.087-0.024-0.13-0.201-0.25-0.407-0.36-0.62-0.017-0.029-0.006-0.066 0.022-0.085 0.196-0.126 0.875-0.621 0.643-1.257-0.234-0.636-1.075-0.58-1.306-0.553-0.034 0.005-0.066-0.018-0.073-0.051-0.052-0.233-0.095-0.468-0.125-0.704-0.005-0.034 0.018-0.065 0.051-0.073 0.228-0.052 1.037-0.286 1.037-0.962s-0.809-0.91-1.037-0.963c-0.033-0.007-0.056-0.039-0.051-0.072 0.031-0.236 0.073-0.471 0.125-0.705 0.007-0.033 0.039-0.054 0.073-0.051 0.231 0.029 1.072 0.083 1.305-0.553s-0.446-1.129-0.642-1.255c-0.029-0.019-0.039-0.056-0.022-0.086 0.11-0.211 0.23-0.418 0.36-0.619 0.018-0.030 0.056-0.039 0.087-0.024 0.208 0.105 0.979 0.441 1.417-0.077 0.438-0.517-0.029-1.213-0.17-1.397-0.020-0.028-0.017-0.066 0.008-0.089 0.177-0.162 0.361-0.315 0.553-0.459 0.027-0.022 0.065-0.018 0.088 0.007 0.16 0.169 0.769 0.746 1.36 0.409s0.39-1.151 0.322-1.371c-0.011-0.033 0.006-0.067 0.038-0.080 0.222-0.092 0.448-0.174 0.678-0.245 0.032-0.010 0.067 0.006 0.080 0.037 0.092 0.213 0.464 0.962 1.136 0.845 0.672-0.118 0.763-0.948 0.776-1.18 0.002-0.034 0.030-0.060 0.064-0.063 0.24-0.011 0.481-0.011 0.721 0 0.034 0.002 0.063 0.028 0.064 0.063 0.013 0.232 0.104 1.062 0.776 1.18 0.671 0.117 1.044-0.632 1.136-0.845 0.013-0.031 0.048-0.047 0.080-0.037 0.23 0.071 0.456 0.152 0.678 0.245 0.032 0.013 0.049 0.047 0.038 0.080-0.067 0.221-0.268 1.034 0.322 1.371s1.2-0.24 1.36-0.409c0.022-0.025 0.061-0.029 0.088-0.008 0.191 0.145 0.376 0.299 0.553 0.46 0.025 0.022 0.029 0.060 0.008 0.087-0.14 0.185-0.608 0.88-0.17 1.398s1.209 0.182 1.417 0.077c0.031-0.015 0.068-0.006 0.086 0.024 0.13 0.201 0.25 0.407 0.36 0.619 0.017 0.029 0.007 0.067-0.022 0.086-0.195 0.125-0.875 0.62-0.642 1.255s1.074 0.581 1.305 0.553c0.034-0.005 0.066 0.018 0.073 0.051 0.052 0.232 0.095 0.467 0.125 0.704 0.005 0.034-0.018 0.066-0.051 0.073-0.228 0.053-1.037 0.287-1.037 0.963s0.809 0.911 1.037 0.962c0.033 0.007 0.056 0.039 0.051 0.073-0.031 0.236-0.073 0.471-0.125 0.704-0.007 0.033-0.039 0.056-0.073 0.051-0.231-0.027-1.072-0.083-1.305 0.553s0.446 1.13 0.642 1.257c0.029 0.018 0.039 0.056 0.022 0.085-0.11 0.211-0.23 0.418-0.36 0.62-0.018 0.029-0.056 0.038-0.086 0.023-0.208-0.104-0.979-0.441-1.417 0.077-0.438 0.518 0.029 1.213 0.17 1.398 0.020 0.027 0.017 0.065-0.008 0.089-0.177 0.16-0.361 0.314-0.553 0.459-0.027 0.020-0.065 0.018-0.088-0.008-0.16-0.169-0.769-0.746-1.36-0.409zM16 14.106c0.014 0 0.028 0 0.041 0 0.193 0.005 0.361-0.061 0.496-0.197l1.987-1.97c0.189-0.188 0.266-0.434 0.215-0.695-0.051-0.26-0.215-0.461-0.46-0.564-0.7-0.294-1.47-0.458-2.278-0.458-3.218 0-5.827 2.587-5.827 5.778 0 0.802 0.164 1.565 0.462 2.259 0.105 0.243 0.307 0.407 0.569 0.456 0.262 0.051 0.511-0.024 0.7-0.211l1.987-1.97c0.136-0.136 0.203-0.301 0.199-0.493 0-0.014-0.001-0.027-0.001-0.041 0-1.046 0.855-1.894 1.91-1.894zM17.908 15.958c0 0.014 0.001 0.027 0.001 0.041 0 1.045-0.855 1.893-1.91 1.893-0.014 0-0.027 0-0.041 0-0.193-0.005-0.36 0.063-0.496 0.197l-1.987 1.97c-0.189 0.188-0.266 0.435-0.215 0.695s0.215 0.461 0.46 0.564c0.7 0.296 1.47 0.458 2.279 0.458 3.217 0 5.826-2.587 5.826-5.778 0-0.802-0.164-1.565-0.462-2.26-0.105-0.243-0.307-0.405-0.569-0.456s-0.511 0.025-0.7 0.213l-1.986 1.97c-0.136 0.135-0.203 0.301-0.2 0.492zM16 14.991c-0.562 0-1.017 0.451-1.017 1.009s0.455 1.008 1.017 1.008c0.562 0 1.017-0.451 1.017-1.008s-0.455-1.009-1.017-1.009z\"></path>\n  </symbol>\n  <symbol id=\"i-1chan\" viewBox=\"0 0 32 32\">\n  <path d=\"M15.001 2.001c-8.284 0-15 6.267-15 14 0 7.731 6.716 13.998 15 13.998s15-6.267 15-13.998c0-7.734-6.716-14-15-14zM18.001 9.999l1.998 1.002v9.999l-1.998 0.999v-12zM16 8.001h-2.001l-6 4.998 4.002 2.001v9h3.999v-15.999zM15.001 5.735c6.073 0 10.998 4.597 10.998 10.266 0 5.667-4.925 10.264-10.998 10.264s-10.998-4.597-10.998-10.264c0-5.669 4.925-10.266 10.998-10.266z\"></path>\n  </symbol>\n  <symbol id=\"i-spinner\" viewBox=\"0 0 32 32\">\n  <path d=\"M23.957 20.347c-0.113-0.066-0.198-0.113-0.31-0.18-1.528-0.735-2.461-2.367-2.447-4.088 0.005-1.767 1.030-3.354 2.608-4.209 1.143-0.617 2.105-1.639 2.61-3.037 0.765-2.116 0.13-4.592-1.571-6.066-2.712-2.324-6.729-1.531-8.432 1.434-0.569 0.987-0.794 2.097-0.727 3.153 0.118 1.684-0.763 3.281-2.209 4.1l-0.059 0.040c-1.521 0.886-3.382 0.86-4.852-0.104-0.35-0.239-0.758-0.439-1.172-0.567-2.135-0.784-4.618-0.118-6.075 1.634-2.286 2.738-1.479 6.741 1.443 8.437 1.856 1.075 4.074 0.931 5.766-0.12 1.439-0.935 3.262-1.044 4.752-0.18l0.224 0.13c1.49 0.862 2.279 2.487 2.22 4.221-0.106 2.008 0.924 3.996 2.778 5.071 2.7 1.566 6.146 0.59 7.648-2.152 1.318-2.622 0.387-6.021-2.197-7.518zM4.28 18.198c-1.153-0.669-1.573-2.154-0.89-3.338 0.666-1.157 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.695 1.141-2.173 1.564-3.326 0.895zM14.783 18.115c-1.153-0.669-1.573-2.152-0.89-3.338 0.68-1.186 2.145-1.58 3.326-0.895 1.179 0.685 1.571 2.154 0.89 3.338-0.683 1.186-2.173 1.564-3.326 0.895zM19.977 9.085c-1.153-0.669-1.573-2.152-0.893-3.338 0.683-1.186 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.68 1.186-2.173 1.564-3.323 0.895zM19.963 27.289c-1.153-0.669-1.571-2.154-0.89-3.34 0.666-1.155 2.145-1.578 3.326-0.893 1.153 0.669 1.573 2.152 0.89 3.338-0.666 1.157-2.145 1.578-3.326 0.895z\"></path>\n  </symbol>\n  <symbol id=\"i-hirudotron\" viewBox=\"0 0 32 32\">\n  <path d=\"M22.555 13.689c0.63-1.298 0.591-2.453 0.934-3.528 0.317-0.997 1.451-2.906 2.639-1.72 0.637 0.637 0.48 1.715 0.758 2.011h0c0.021 0.027 0.047 0.053 0.076 0.078 0.913 0.763 4.118 0.537 4.020-0.559-0.012-0.136-0.079-0.284-0.218-0.425h0l-0.002-0.001c-0.041-0.041-0.087-0.082-0.14-0.12-0.188-0.156-0.439-0.364-0.829-0.796-0.644-0.712-0.869-2.26-1.597-3.048-1.556-1.689-3.855-1.648-5.417-0.086-0.913 0.913-1.23 2.13-3.011 3.911-0.209 0.21-0.445 0.387-0.692 0.539v0c-1.178 0.719-2.611 0.828-2.611 0.828s1.424-0.229 2.538-1.049c-0.473-1.363-1.316-2.152-1.834-3.155-0.48-0.929-1.029-3.081 0.65-3.081 0.901 0 1.552 0.874 1.957 0.886l0-0c0.035 0.005 0.070 0.005 0.108 0.002 1.185-0.106 3.291-2.533 2.447-3.237-0.105-0.087-0.258-0.145-0.454-0.146v-0l-0.002 0c-0.058-0-0.119 0.004-0.184 0.015-0.244 0.022-0.567 0.052-1.149 0.024-0.959-0.048-2.212-0.983-3.284-1.026-2.294-0.093-3.891 1.561-3.891 3.769 0 1.292 0.636 2.376 0.636 4.895 0 0.296-0.041 0.588-0.11 0.87-0.325 1.342-1.26 2.431-1.26 2.431s0.844-1.169 1.053-2.537c-1.298-0.63-2.453-0.591-3.528-0.934-0.997-0.318-2.906-1.452-1.72-2.639 0.637-0.637 1.715-0.479 2.011-0.758v-0c0.027-0.021 0.053-0.046 0.078-0.075 0.763-0.913 0.537-4.118-0.559-4.020-0.136 0.012-0.284 0.079-0.425 0.218v-0l-0.001 0.002c-0.041 0.040-0.082 0.087-0.12 0.141-0.156 0.188-0.364 0.438-0.796 0.829-0.712 0.644-2.26 0.869-3.048 1.597-1.689 1.557-1.648 3.855-0.086 5.417 0.913 0.913 2.13 1.23 3.911 3.011 0.21 0.21 0.387 0.445 0.539 0.692v0c0.719 1.178 0.828 2.611 0.828 2.611s-0.229-1.424-1.049-2.539c-1.363 0.473-2.152 1.316-3.155 1.834-0.929 0.48-3.081 1.028-3.081-0.65 0-0.901 0.874-1.552 0.886-1.957l-0-0.001c0.005-0.034 0.005-0.070 0.002-0.108-0.106-1.185-2.533-3.291-3.237-2.447-0.087 0.104-0.145 0.258-0.146 0.454h-0l0 0.002c-0 0.057 0.004 0.12 0.015 0.184 0.022 0.243 0.052 0.568 0.024 1.149-0.048 0.959-0.983 2.213-1.026 3.284-0.093 2.294 1.561 3.891 3.769 3.891 1.292 0 2.376-0.636 4.895-0.636 0.296 0 0.588 0.041 0.87 0.11 1.342 0.325 2.431 1.26 2.431 1.26s-1.169-0.844-2.537-1.053c-0.63 1.298-0.591 2.453-0.934 3.528-0.318 0.997-1.452 2.907-2.639 1.719-0.637-0.637-0.479-1.715-0.758-2.011h-0c-0.021-0.027-0.046-0.053-0.075-0.078-0.913-0.763-4.118-0.537-4.020 0.558 0.012 0.136 0.079 0.285 0.218 0.424h-0l0.002 0c0.040 0.041 0.087 0.081 0.141 0.119 0.188 0.157 0.438 0.363 0.829 0.796 0.644 0.712 0.869 2.259 1.597 3.048 1.557 1.689 3.855 1.648 5.417 0.086 0.913-0.913 1.23-2.13 3.011-3.911 0.21-0.209 0.445-0.387 0.692-0.538v0c1.178-0.719 2.611-0.828 2.611-0.828s-1.424 0.23-2.539 1.049c0.473 1.363 1.316 2.152 1.834 3.155 0.48 0.93 1.028 3.081-0.65 3.081-0.901 0-1.552-0.874-1.957-0.886l-0.001 0c-0.034-0.005-0.070-0.005-0.108-0.002-1.185 0.107-3.291 2.532-2.447 3.237 0.104 0.087 0.258 0.145 0.454 0.146v0l0.002-0c0.057 0 0.12-0.005 0.184-0.015 0.243-0.023 0.568-0.052 1.149-0.023 0.959 0.049 2.213 0.983 3.284 1.026 2.294 0.094 3.891-1.561 3.891-3.769 0-1.291-0.636-2.375-0.636-4.895 0-0.296 0.041-0.588 0.11-0.87 0.325-1.342 1.26-2.431 1.26-2.431s-0.844 1.169-1.053 2.538c1.298 0.63 2.453 0.591 3.528 0.934 0.997 0.317 2.907 1.451 1.72 2.639-0.637 0.637-1.715 0.48-2.011 0.758v0c-0.027 0.021-0.053 0.047-0.078 0.076-0.763 0.913-0.537 4.118 0.558 4.020 0.136-0.012 0.285-0.079 0.424-0.218v0l0-0.002c0.041-0.041 0.081-0.087 0.119-0.14 0.157-0.188 0.363-0.439 0.796-0.829 0.712-0.644 2.259-0.869 3.048-1.597 1.689-1.557 1.648-3.855 0.086-5.417-0.913-0.913-2.13-1.23-3.911-3.011-0.209-0.209-0.387-0.445-0.538-0.692v0c-0.719-1.178-0.828-2.611-0.828-2.611s0.23 1.424 1.049 2.538c1.363-0.473 2.152-1.316 3.155-1.834 0.93-0.48 3.081-1.029 3.081 0.65 0 0.901-0.874 1.552-0.886 1.957l0 0c-0.005 0.035-0.005 0.070-0.002 0.108 0.107 1.185 2.532 3.291 3.237 2.447 0.087-0.105 0.145-0.258 0.146-0.454h0l-0-0.002c0-0.058-0.005-0.119-0.015-0.184-0.023-0.244-0.052-0.567-0.023-1.149 0.049-0.959 0.983-2.212 1.026-3.284 0.094-2.294-1.561-3.891-3.769-3.891-1.291 0-2.375 0.636-4.895 0.636-0.296 0-0.588-0.041-0.87-0.11-1.342-0.325-2.431-1.26-2.431-1.26s1.169 0.844 2.538 1.053zM9.095 3.256c-0.041-1.477 0.476-2.006 0.861-2.041 0.995-0.089 1.201 2.825 0.508 3.655-0.396 0.473-1.328-0.138-1.369-1.615zM20.122 2.11c1.015-1.073 1.755-1.082 2.052-0.834 0.767 0.64-1.148 2.846-2.226 2.944-0.614 0.056-0.841-1.036 0.174-2.11zM29.877 20.124c1.073 1.015 1.082 1.755 0.834 2.052-0.64 0.767-2.846-1.148-2.944-2.226-0.055-0.614 1.036-0.841 2.11 0.174zM22.889 28.733c0.041 1.477-0.477 2.006-0.861 2.041-0.995 0.090-1.201-2.825-0.508-3.655 0.395-0.474 1.328 0.137 1.369 1.615zM11.862 29.878c-1.015 1.073-1.755 1.082-2.051 0.834-0.767-0.64 1.148-2.846 2.226-2.944 0.614-0.055 0.841 1.036-0.175 2.11zM3.253 22.891c-1.477 0.041-2.006-0.477-2.041-0.861-0.089-0.995 2.825-1.201 3.655-0.508 0.473 0.395-0.138 1.328-1.615 1.369zM2.108 11.864c-1.073-1.015-1.082-1.755-0.834-2.052 0.64-0.767 2.846 1.148 2.943 2.226 0.056 0.614-1.036 0.841-2.11-0.175zM28.73 9.098c1.477-0.041 2.006 0.476 2.041 0.861 0.090 0.995-2.825 1.201-3.655 0.508-0.474-0.396 0.137-1.328 1.615-1.369z\"></path>\n  </symbol>\n  </defs>\n  </svg>";
document.body.insertAdjacentHTML('afterBegin', "<div style=\"display:none\">".concat(icons, "</div>"));
var INVIDIOUS_INSTANCES = ["https://yewtu.be/", "https://invidious.snopyta.org/", "https://invidious.kavin.rocks/", "https://vid.puffyan.us/", "https://invidious.048596.xyz/", "https://invidious.exonip.de/", "https://ytprivate.com/", "https://invidious.silkky.cloud/", "https://inv.riverside.rocks/", "https://notyoutube.org/", "https://invidious-us.kavin.rocks/", "https://invidious.moomoo.me/", "https://invidious.namazso.eu/", "https://invidious.blamefran.net/", "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion/", "http://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion/", "http://kbjggqkzv65ivcqj6bumvp337z6264huv5kpkwuv6gu5yjiskvan7fad.onion/", "http://grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion/", "http://hpniueoejy4opn7bc4ftgazyqjoeqwlvh2uiku2xqku6zpoa4bf5ruid.onion/"];
var appObserver,
  contentObserver,
  content,
  contentVue,
  singleThread,
  singleThreadVue,
  sidebar,
  sidebarVue,
  sidebarObserver,
  alerts,
  alertsVue,
  awaitBoardList,
  postQuotation = null,
  lastActiveTextarea,
  state = {
    initialized: false
  },
  version = GM_info.script.version;
if (["www.0chan.pl", "p.0chan.pl", "0.1chan.pl", "ygg.0chan.pl", "www.0chan.club", "0chan.life", "www.0chan.life", "0chan.xyz", "nullplctggmjazqcoboc2pw5anogckczzj6xo45ukrnsaxarpswu7sid.onion", "0pl.i2p", "gd7qe2pu2jwqabz4zcf3wwablrzym7p6qswczoapkm5oa5ouuaua.b32.i2p", "[225:55:9ebf:1709:7b1f:a315:1119:6eff]", "0chan.ygg", "foxhound.cc", "0chna.ru", "mint.0chan.ru", "0chans.ru"].includes(location.host)) {
  var IS_OCHKO = true;
} else {
  var IS_OCHKO = false;
}
var THUMB_API = 'https://0chan.one/zu-base64.php';
var momInRoom = {
  mainCSS: ".post-img-thumbnail {\n      opacity: 0.2 ;\n      filter: blur(4px) grayscale(50%) ;\n    }}",
  hoverCSS: ".post-img .post-img-thumbnail,\n    .post-img .post-img-full {\n      transition: filter 0.3s, opacity 0.3s !important;\n    }\n    .post-img .post-img-thumbnail:hover,\n    .post-img .post-img-full:hover {\n      opacity: 1;\n      filter: none;\n    }",
  fullBlurCSS: ".post-img-full {\n      opacity: 0.2 ;\n      filter: blur(4px) grayscale(50%) ;\n    }",
  toggle: function toggle(val) {
    var quickBtn = document.querySelector('#ZU-quickaction-momInRoom');
    if (quickBtn) {
      quickBtn.classList.toggle('active', val);
    }
    if (val) {
      injector.inject('ZU-mom-in-room', this.mainCSS);
    } else {
      injector.remove('ZU-mom-in-room');
      injector.remove('ZU-mom-in-room-full');
    }
  },
  toggleHover: function toggleHover(val) {
    if (val) {
      injector.inject('ZU-unmask-on-hover', this.hoverCSS);
      if (settings.momInRoom) {
        injector.inject('ZU-mom-in-room-full', this.fullBlurCSS);
      }
    } else {
      injector.remove('ZU-unmask-on-hover');
      injector.remove('ZU-mom-in-room-full');
    }
  }
};
var unhideSpoilers = {
  mainCSS: "mark, .spoiler {\n      color: inherit;\n      background: rgba(204, 204, 204, 0.25);\n    }}",
  toggle: function toggle(val) {
    if (val) {
      injector.inject('ZU-unhide-spoilers', this.mainCSS);
    } else {
      injector.remove('ZU-unhide-spoilers');
    }
  }
};
var share = {
  sites: {
    '1chanca': {
      name: "1chan.ca",
      link: "https://1chan.ca/live/addXS",
      method: 'GET',
      options: function options(url, description) {
        return "link=".concat(url, "&description=").concat(description);
      },
      icon: {
        type: 'svg',
        name: '1chan',
        color: '#E42727'
      }
    },
    '1chanpl': {
      name: "1chan.pl",
      link: "https://1chan.pl/live/addXS",
      method: 'GET',
      options: function options(url, description) {
        return "link=".concat(url, "&description=").concat(description);
      },
      icon: {
        type: 'svg',
        name: '1chan',
        color: '#dc143c'
      }
    },
    'overnullch': {
      name: "Овернульч",
      link: "https://0chan.one/live/api.php",
      method: 'POST',
      options: function options(url, description) {
        return "url=".concat(url, "&description=").concat(description);
      },
      icon: {
        type: 'svg',
        name: 'hirudotron',
        color: '#2c333d'
      }
    },
    'metator': {
      name: "Метатор",
      link: "http://metatorjq65tshfy.onion/live/api.php",
      method: 'POST',
      options: function options(url, description) {
        return "url=".concat(url, "&description=").concat(description);
      },
      icon: {
        type: 'svg',
        name: 'hirudotron',
        color: '#292929'
      }
    },
    telegram: {
      name: 'Telegram',
      link: "https://telegram.me/share/url",
      method: 'POPUP',
      options: function options(url, description) {
        return "url=".concat(url, "&text=").concat(description);
      },
      icon: {
        type: 'fa',
        name: 'telegram',
        color: '#2ca5e0'
      },
      width: 600,
      height: 600
    }
  },
  dropdown: function dropdown(url, description) {
    var _this = this;
    url = encodeURIComponent(url);
    return Object.keys(this.sites).reduce(function (htm, siteID) {
      var site = _this.sites[siteID];
      return htm + "\n        <li>\n          <a class=\"ZU-share-link\" data-url=\"".concat(url, "\" data-description=\"").concat(description, "\" data-site=\"").concat(siteID, "\" href=\"javascript:void(0)\">\n          ").concat(site.icon ? "<span class=\"pull-left\"><span".concat(site.icon.color ? " style=\"color:".concat(site.icon.color, "\"") : '', ">") + (site.icon.type == 'fa' ? "<i class=\"fa fa-".concat(site.icon.name, "\"></i>") : "<svg class=\"ZU-svg ZU-svg-16 ".concat(site.icon.extraClass ? site.icon.extraClass : '', "\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#i-").concat(site.icon.name, "\"></use>\n              </svg>")) + "</span></span>" : '', "\n          ").concat(site.name, "</a>\n        </li>");
    }, '<ul class="dropdown-menu ZU-share-dropdown ZU-dropdown">') + '</ul>';
  },
  handleClick: function handleClick(link) {
    var selectedText = postQuotation,
      description = encodeURIComponent(selectedText ? selectedText.replace(/\n/g, ' ') : link.dataset.description),
      site = this.sites[link.dataset.site];
    var xhr = new XMLHttpRequest();
    // fucking js does not want to send GET requests with data defined in send()
    switch (site.method) {
      case "GET":
        xhr.open(site.method, "".concat(site.link, "?").concat(site.options(link.dataset.url, description)), true);
        xhr.send();
        nativeAlert('info', 'Запрос на добавление ссылки отправлен');
      case "POST":
        xhr.open(site.method, site.link, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(site.options(link.dataset.url, description));
        nativeAlert('info', 'Запрос на добавление ссылки отправлен');
      case "POPUP":
        window.open(site.link + '?' + site.options(link.dataset.url, description), 'targetWindow', "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=".concat(site.width || 666, ",height=").concat(site.height || 555));
    }
  }
};
var sideBar = {
  init: function init() {
    app.$bus.on('toggleSidebar', sideBar.handleToggle);
  },
  handleToggle: function handleToggle() {
    if (window.innerWidth > 767) {
      document.querySelector('.headmenu').classList.add('ZU-sidemenu-animation-allowed');
      settings.hideSidebar = !settings.hideSidebar;
    }
  },
  toggle: function toggle(hide) {
    if (hide) {
      document.body.classList.add('ZU-sidebar-hidden');
    } else {
      document.body.classList.remove('ZU-sidebar-hidden');
    }
  }
};
var refresher = {
  init: function init() {
    var _this2 = this;
    if (state.type !== 'thread') return;
    var refreshIcon = document.querySelector('.btn-default .fa-refresh');
    if (!refreshIcon) return;
    var btn = refreshIcon.findParent('button');
    btn.classList.add('ZU-refresh-btn');
    btn.insertAdjacentHTML('afterBegin', "<div class=\"ZU-refresh-progressbar\"></div><div class=\"ZU-refreshbtn-shadow-overlay\"></div>");
    contentVue.checkNewReplies = function () {
      _this2.timeoutStop();
      contentVue.isFetchingMore = !0;
      var e = contentVue.posts[contentVue.posts.length - 1];
      return contentVue.fetch(e.id).then(function () {
        contentVue.isFetchingMore = !1;
        setTimeout(_this2.timeoutStart.bind(_this2), 400);
      });
    };
    this.initialized = true;
    this.reset();
  },
  initialized: false,
  reset: function reset() {
    var _this3 = this;
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings.updateInterval;
    if (s) injector.inject('ZU-thread-update-interval', "\n        .ZU-refresh-progressbar.ZU-rpb-full {\n          transition: width ".concat(s, "s linear;\n          width: 100%;\n          opacity: 1;\n        }"));
    if (!this.initialized) return;
    this.timeoutStop();
    setTimeout(function () {
      return _this3.timeoutStart();
    }, 500);
  },
  timeout: null,
  timeoutStart: function timeoutStart() {
    var _this4 = this;
    if (!settings.updateInterval) return;
    var progressBar = document.querySelector('.ZU-refresh-progressbar');
    if (!progressBar) return;
    void progressBar.offsetWidth; // Animation won't start without this for some reason
    progressBar.classList.add('ZU-rpb-full');
    this.timeout = setTimeout(function () {
      if (contentVue && contentVue.checkNewReplies) {
        contentVue.checkNewReplies.bind(_this4)();
      }
    }, settings.updateInterval * 1000);
  },
  timeoutStop: function timeoutStop() {
    clearTimeout(this.timeout);
    var progressBar = document.querySelector('.ZU-refresh-progressbar');
    if (!progressBar) return;
    void progressBar.offsetWidth; // Animation won't start without this for some reason
    progressBar.classList.remove('ZU-rpb-full');
  }
};
var catalog = {
  enabledOn: ['home', 'favourite', 'watched', 'board'],
  toggle: function toggle() {
    var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings.catalogMode;
    var quickBtn = document.querySelector('#ZU-quickaction-catalogMode');
    if (quickBtn) quickBtn.classList.toggle('active', on);
    if (this.isApplicable && on) {
      injector.inject('ZU-catalog-mode', this.css);
    } else {
      injector.remove('ZU-catalog-mode');
    }
  },
  css: GM_getResourceText("catalogCSS"),
  get isApplicable() {
    return this.enabledOn.indexOf(state.type) !== -1;
  }
};
var autohide = {
  init: function init() {
    var spells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings.autohide;
    this.expressions = spells.map(function (spell) {
      if (typeof spell === 'string') {
        // Convert string to regExp literally, case-insensitive
        spell = {
          source: spell.toLowerCase().replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
          //https://github.com/sindresorhus/escape-string-regexp
          flags: 'i'
        };
      }
      return new RegExp(spell.source, spell.flags);
    });
    settings.save();
  },
  check: function check(str) {
    return !!this.expressions.find(function (exp) {
      return str.match(exp);
    });
  },
  checkReferenceCount: function checkReferenceCount(postVue) {
    return this.referenceLimit > 0 && postVue.post && postVue.post.referencesToIds.length >= this.referenceLimit;
  },
  updateReferenceLimit: function updateReferenceLimit(val) {
    this.referenceLimit = val;
    reAutohidePosts();
  },
  expressions: [],
  awaitInstall: function awaitInstall() {
    var _this5 = this;
    var panelWaiter = forAllNodes([{
      selector: '.profile-page .row',
      fn: function fn(container) {
        app.$nextTick(function () {
          return panelWaiter.stop();
        });
        _this5.install(container);
      }
    }], content, {
      queryChildren: true
    });
  },
  save: function save() {
    var autohideTextarea = document.querySelector('#ZU-autohide-text'),
      val = autohideTextarea.value,
      results = [];
    val.split('\n').forEach(function (spell) {
      if (!spell) return;
      var rxr = spell.match(/^\/(.+)\/([gmiyu]+)?$/),
        result;
      if (rxr) {
        var source = rxr[1],
          flags = rxr[2];
        try {
          result = new RegExp(source, flags);
        } catch (e) {}
      }
      if (!result) result = spell;
      results.push(result);
    });
    settings.autohide = results;
    this.init();
  }
};
var autohideAtt = {
  init: function init() {
    var spells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings.autohideAtt;
    var images = [],
      embeds = [];
    spells.forEach(function (spell) {
      return (spell.eid ? embeds : images).push(spell);
    });
    this.images = images;
    this.embeds = embeds;
    this.initialized = true;
    // settings.save()
  },

  initialized: false,
  check: function check(att) {
    var _this6 = this;
    return !!this[att.embed ? 'embeds' : 'images'].find(function (spell) {
      return att.embed ? att.embed.service == spell.svc && att.embed.embedId == spell.eid : att.images.original.width == spell.w && att.images.original.height == spell.h && Math.abs(att.images.thumb_400px.size_kb - spell.kb) < _this6.treshold;
    });
  },
  treshold: 0.5,
  addButton: function addButton(fig) {
    var inList = this.check(fig.__vue__.attachment),
      btnContainer = fig.querySelector('.post-img-buttons');
    if (!btnContainer) return;
    btnContainer.insertAdjacentHTML('afterBegin', "\n      <span data-inlist=\"".concat(inList.toString(), "\" title=\"").concat(inList ? 'Не с' : 'С', "\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u044B \u0441 \u044D\u0442\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439\" class=\"post-img-button ZU-hide-attachment ZU-prevent-settings-dropdown-close\">\n        <i class=\"fa fa-").concat(inList ? 'plus' : 'minus', "-square-o fa-fw\"></i>\n      </span>\n    "));
  },
  add: function add(figVue) {
    var att = figVue.attachment;
    if (settings.autohideAtt.find(function (entry) {
      return entry.aid == att.id;
    })) {
      return nativeAlert('info', "".concat(att.embed ? 'Видео' : 'Картинка', " \u0443\u0436\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C\u044B\u0445."));
    }
    var entry = {
      pid: +figVue.$parent.post.id,
      aid: +att.id
    };
    Object.assign(entry, att.embed ? {
      svc: att.embed.service,
      eid: att.embed.embedId
    } : {
      w: +att.images.original.width,
      h: +att.images.original.height,
      kb: att.images.thumb_400px.size_kb
    });
    settings.autohideAtt.push(entry);
    autohideAtt.init();
    Object.assign(entry, {
      tempThumb: att.images.thumb_100px.url
    });
    document.querySelector(".ZU-autohide-".concat(entry.eid ? 'embeds' : 'images', "-section")).insertAdjacentHTML('beforeEnd', this.itemHTML(entry, {
      away: true
    }));

    // TODO: something with this fucking shit...
    var menu = document.querySelector('#ZU-settings'),
      timeout = 600;
    if (menu.classList.contains('ZU-dropdown-show')) {
      if (document.querySelector('#ZU-top-autohide').hidden) {
        ;
        [].forEach.call(document.querySelectorAll('.ZU-autohide-content'), function (el) {
          return el.hidden = true;
        });
        document.querySelector('#ZU-autohide-images').hidden = false;
        fancyResizeXfade(menu, '#ZU-settings-main', '#ZU-top-autohide');
      } else {
        if (document.querySelector('#ZU-autohide-images').hidden) {
          fancyResizeXfade(menu, '#ZU-autohide-text', '#ZU-autohide-images');
        } else {
          timeout = 0;
        }
      }
    } else {
      ;
      [].forEach.call(document.querySelectorAll('.ZU-top-menu-page'), function (el) {
        return el.hidden = true;
      });
      document.querySelector('#ZU-top-autohide').hidden = false;
      [].forEach.call(document.querySelectorAll('.ZU-autohide-content'), function (el) {
        return el.hidden = true;
      });
      document.querySelector('#ZU-autohide-images').hidden = false;
      menu.classList.toggle('ZU-dropdown-show');
    }
    setTimeout(function () {
      return document.querySelector(".ZU-autohide-attachemnt-entry[data-aid=\"".concat(entry.aid, "\"]")).classList.remove('ZU-away');
    }, timeout);
    reAutohidePosts();
  },
  itemHTML: function itemHTML(item) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      away: false
    };
    if (!item.thumb) {
      // get thumbnail
      fetch("".concat(THUMB_API, "?post=").concat(item.pid, "&attachment=").concat(item.aid, "&domain=").concat(getOrigin())).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.error) {
          console.warn('[0u] Error retrieving thumbnail for autohide item: ', json.error, item);
        } else {
          // TODO: remove dups
          ;
          [].forEach.call(document.querySelectorAll(".ZU-autohide-attachemnt-entry[data-aid=\"".concat(item.aid, "\"]")), function (entry) {
            // our future item
            entry.style.backgroundImage = "url('".concat(json.url, "')");
            // write item thumbnail to LS
            var entryIX = settings.autohideAtt.findIndex(function (i) {
              return i.aid == item.aid;
            });
            if (entryIX !== -1) {
              settings.autohideAtt[entryIX].thumb = json.url;
              settings.save();
            }
          });
        }
      })["catch"](function (e) {
        console.warn("[0u] Error connecting to thumbnailer API (".concat(THUMB_API, "), falling back to non-persisten method"), e, item);
        // Fallback to old method in case thumbnailer is down
        fetch("".concat(getOrigin(), "/api/post?post=").concat(item.pid), {
          credentials: 'same-origin'
        }).then(function (res) {
          if (res.ok) {
            res.json().then(function (json) {
              if (json.post && json.post.attachments) {
                var att = json.post.attachments.find(function (att) {
                  return att.id == item.aid;
                });
                if (att) {
                  try {
                    // TODO: remove dups
                    ;
                    [].forEach.call(document.querySelectorAll(".ZU-autohide-attachemnt-entry[data-aid=\"".concat(item.aid, "\"]")), function (entry) {
                      // our future item
                      entry.style.backgroundImage = "url(\"".concat(att.images.thumb_100px.url, "\")");
                    });
                  } catch (e) {
                    console.warn('[0u] Error retrieving thumbnail for autohide item: ', e);
                  }
                }
              }
            })["catch"](function (e) {
              return console.warn('[0u] Bad JSON: ', e);
            });
          } else {
            res.text().then(function (text) {
              return console.warn('[0u] Bad response: ', text);
            })["catch"](nop);
          }
        });
      });
    }
    return "\n    <div class=\"ZU-autohide-attachemnt-entry".concat(options.away ? ' ZU-away' : '', "\"  ").concat(item.eid ? "data-svc=\"".concat(item.svc, "\" data-eid=\"").concat(item.eid, "\"") : '', " data-aid=\"").concat(item.aid, "\" data-pid=\"").concat(item.pid, "\" title=\"").concat(item.eid ? "".concat(item.svc, "/").concat(item.eid) : "".concat(item.w, "\xD7").concat(item.h, ", ").concat(item.kb, " \u043A\u0411"), "\" style=\"background-image: url('").concat(item.thumb ? item.thumb : item.tempThumb || '', "')\">\n      <button class=\"btn btn-xs btn-primary ZU-xbtn ZU-remove-autohide-entry\" title=\"\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C\u044B\u0445\">\n        <span><i class=\"fa fa-close\"></i></span>\n      </button>\n    </div>");
  },
  getListHTML: function getListHTML() {
    var _this7 = this;
    return "\n    <div class=\"ZU-autohide-images-section\">\n      ".concat(this.images.reduce(function (htm, img) {
      return htm + _this7.itemHTML(img);
    }, ''), "\n    </div>\n    <hr style=\"margin: 8px 0\">\n    <div class=\"ZU-autohide-embeds-section\">\n      ").concat(this.embeds.reduce(function (htm, emb) {
      return htm + _this7.itemHTML(emb);
    }, ''), "\n    </div>");
  },
  remove: function remove(aid, isEmbed) {
    document.querySelector(".ZU-autohide-attachemnt-entry[data-aid=\"".concat(aid, "\"]")).remove();
    var index = -1;
    settings.autohideAtt.find(function (i, x) {
      if (i.aid == aid) index = x;
    });
    if (index !== -1) settings.autohideAtt.splice(index, 1);
    var arr = this[isEmbed ? 'embeds' : 'images'];
    arr.find(function (i, x) {
      if (i.aid == aid) index = x;
    });
    if (index !== -1) arr.splice(index, 1);
    settings.save();
    reAutohidePosts();
  }
};
var NullRestyler = {
  init: function init() {
    document.querySelector('#sidebar').insertAdjacentHTML('afterBegin', "\n        <div class=\"ZU-nulltwk-container hidden-xs\">\n          <button class=\"ZU-sidebar-btn fa fa-save ZU-nulltwk-save\" title=\"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\"></button>\n          <button class=\"ZU-sidebar-btn fa fa-undo ZU-nulltwk-revert\" title=\"\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442\"></button>\n          <div class=\"ZU-nulltwk-range-container\">\n            <label for=\"ZU-hue-input\">HUE</label>\n            <output>\n              <span class=\"ZU-output\">0</span><span>\xB0</span>\n            </output>\n            <input type=\"range\" min=\"-180\" max=180 step=1 id=\"ZU-hue-input\" class=\"ZU-range\" value=0>\n          </div>\n          <div class=\"ZU-nulltwk-range-container\">\n            <label for=\"ZU-saturation-input\">SAT</label>\n            <output>\n              <span class=\"ZU-output\">100</span><span>%</span>\n            </output>\n            <input type=\"range\" min=0 max=300 step=1 id=\"ZU-saturation-input\" class=\"ZU-range\" value=100>\n          </div>\n          <div class=\"ZU-nulltwk-range-container\">\n            <label for=\"ZU-brightness-input\">BRI</label>\n            <output>\n              <span class=\"ZU-output\">100</span><span>%</span>\n            </output>\n            <input type=\"range\" min=0 max=300 step=1 id=\"ZU-brightness-input\" class=\"ZU-range\" value=100>\n          </div>\n          <div class=\"ZU-nulltwk-range-container\">\n            <label for=\"ZU-contrast-input\">CON</label>\n            <output>\n              <span class=\"ZU-output\">100</span><span>%</span>\n            </output>\n            <input type=\"range\" min=0 max=500 step=1 id=\"ZU-contrast-input\" class=\"ZU-range\" value=100>\n          </div>\n        </div>\n    ");
    this.setValues(settings.nullColor);
  },
  addControls: function addControls(sideBarLogo) {
    // earlier restyling (aka КОСТЫЛЬ ЕБАНЫЙ)
    var css = localStorage['ZU-null-css-cached'];
    if (css) injector.inject('ZU-null-tweak', css);
    sideBarLogo.insertAdjacentHTML('beforeend', "\n      <button class=\"ZU-restyle-null ZU-sidebar-btn fa fa-paint-brush hidden-xs\" title=\"\u041F\u0435\u0440\u0435\u043A\u0440\u0430\u0441\u0438\u0442\u044C\"></button>\n    ");
  },
  save: function save() {
    document.querySelector('#sidebar').classList.remove('edit-null');
    var res = this.update();
    localStorage['ZU-null-css-cached'] = res.css;
    delete res.css;
    settings.nullColor = res;
    settings.save();
  },
  update: function update() {
    var hue = document.querySelector('#ZU-hue-input').value,
      sat = document.querySelector('#ZU-saturation-input').value,
      bri = document.querySelector('#ZU-brightness-input').value,
      con = document.querySelector('#ZU-contrast-input').value,
      css = ".sidebar-logo img { filter: saturate(".concat(sat, "%) hue-rotate(").concat(hue, "deg) brightness(").concat(bri, "%) contrast(").concat(con, "%); }");
    injector.inject('ZU-null-tweak', css);
    // Save for earlier restyling
    return {
      hue: hue,
      sat: sat,
      bri: bri,
      con: con,
      css: css
    };
  },
  setValues: function setValues(vals) {
    ['hue', 'saturation', 'brightness', 'contrast'].forEach(function (prop) {
      var input = document.querySelector("#ZU-".concat(prop, "-input")),
        val = vals[prop.slice(0, 3)];
      input.value = val;
      input.parentElement.querySelector('output .ZU-output').innerText = val;
    });
    return this.update();
  }
};
var desnower = {
  toggle: function toggle(on) {
    if (settings.turnOffSnow) {
      window.localStorage.setItem('disableSnow', true);
    } else {
      window.localStorage.removeItem('disableSnow');
    }
  }
};
var youtubeStuff = {
  init: function init() {
    var _this8 = this;
    var domainsRxEscaped = [];
    this.optionsHTML = '';
    INVIDIOUS_INSTANCES.forEach(function (url, ix) {
      var domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      _this8.instances.push({
        domain: domain,
        url: url,
        embedCode: ""
      });
      domainsRxEscaped.push(domain.replace(/\./g, '\\.'));
    });
    this.jumboRegExp = new RegExp("(youtu(?:\\.be|be(?:-nocookie)?\\.com)|".concat(domainsRxEscaped.join('|'), ")\\/(?:.*v(?:\\/|=)|(?:.*\\/)?)([\\w'-]{11})"));
    this.initialized = true;
  },
  installSelect: function installSelect() {
    var _this9 = this;
    var optionsHTML = '';
    this.instances.forEach(function (ins, ix) {
      optionsHTML += "<option value=\"".concat(ix, "\" ").concat(ix == _this9.selectedInstance ? "selected=\"selected\"" : '', ">").concat(ins.domain, "</option>");
    });
    document.querySelector('#ZU-settings-main .ZU-settings-list').insertAdjacentHTML('beforeEnd', "<li>\n        <label for=\"ZU-invidious-instance\">\u0421\u0435\u0440\u0432\u0438\u0441 Youtube:</label>\n        <select name=\"ZU-invidious-instance\" id=\"ZU-invidious-instance\" class=\"form-control\">".concat(optionsHTML, "</select>\n      </li>"));
  },
  selectedInstance: 0,
  initialized: false,
  instances: [{
    domain: 'youtube.com',
    url: 'https://www.youtube.com/'
  }],
  changeInstance: function changeInstance(instance) {
    this.selectedInstance = +instance;
    if (this.initialized) nativeAlert('success', 'Изменение вступит в силу после перезагрузки страницы');else this.init();
  },
  addThumbs: function addThumbs(msg, post) {
    var _this10 = this;
    var existingCodes = [];
    if (!(post !== null && post !== void 0 && post.attachments) || !post.attachments.find(function (att) {
      var _att$embed;
      return (att === null || att === void 0 ? void 0 : (_att$embed = att.embed) === null || _att$embed === void 0 ? void 0 : _att$embed.service) == 'youtube';
    })) {
      // prevent repeated embedding bug
      msg.querySelectorAll('a').forEach(function (a) {
        var match = a.href.match(_this10.jumboRegExp),
          svc = _this10.instances[_this10.selectedInstance];
        if (match) {
          var code = match[2];
          if (existingCodes.length <= 5 && !~existingCodes.indexOf(code)) {
            // TODO: check if valid video!
            post.attachments.push({
              embed: {
                embedId: code,
                // TODO: let user choose what instance to embed!
                html: "<div class=\"embed\" aspect=\"16:9\"><iframe src=\"".concat(svc.url, "embed/").concat(code, "?autoplay=1\" frameborder=\"0\" scrolling=\"no\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>"),
                service: "youtube",
                title: ""
              },
              images: {
                thumb_100px: {
                  url: "https://img.youtube.com/vi/".concat(code, "/hqdefault.jpg"),
                  height: "150",
                  width: "200",
                  name: "youtube-".concat(code, "-200.jpg") // vendor script demands it
                },

                thumb_200px: {
                  url: "https://img.youtube.com/vi/".concat(code, "/hqdefault.jpg"),
                  height: "150",
                  width: "200",
                  name: "youtube-".concat(code, "-200.jpg") // vendor script demands it
                },

                thumb_400px: {
                  url: "https://img.youtube.com/vi/".concat(code, "/hqdefault.jpg"),
                  height: "150",
                  width: "200",
                  name: "youtube-".concat(code, "-200.jpg") // vendor script demands it
                },

                original: {
                  url: "https://img.youtube.com/vi/".concat(code, "/hqdefault.jpg"),
                  height: "150",
                  width: "200",
                  name: "youtube-".concat(code, "-200.jpg") // vendor script demands it
                }
              },

              id: "youtube-".concat(code),
              isDeleted: false,
              isNsfw: false,
              isPublished: true
            });
            existingCodes.push(code);
          }
        }
      });
    }
  }
};
var fixUkrSpelling = {
  toggle: function toggle(on) {
    var allPosts = document.querySelectorAll('.post');
    if (on) {
      allPosts.forEach(this.process.bind(this));
    } else {
      allPosts.forEach(this.revert.bind(this));
      document.querySelectorAll('.ZU-UA-flag').forEach(function (f) {
        return f.remove();
      });
    }
  },
  detect: function detect(txt) {
    return txt.match(/є|Є|ь[іi]|Ь[IІl]/);
  },
  process: function process(post) {
    var msg = post.querySelector('.post-body-message');
    if (msg && this.detect(msg.innerHTML)) {
      msg._originalHTML = msg.innerHTML;
      msg.innerHTML = this.processText(msg.innerHTML);
      post.querySelector('.post-date').insertAdjacentHTML('afterEnd', '<span class="ZU-UA-flag"> 🇺🇦</span>');
    }
  },
  revert: function revert(post) {
    var msg = post.querySelector('.post-body-message');
    if (msg._originalHTML) {
      msg.innerHTML = msg._originalHTML;
    }
  },
  processText: function processText(txt) {
    return txt.replace(/є/g, 'э').replace(/Є/g, 'Э').replace(/ь[іi]/g, 'ы').replace(/Ь[IІl]/g, 'Ы');
  }
};
function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status;
}

// CSS injector
var injector = {
  inject: function inject(alias, css) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "beforeend";
    var id = "injector:".concat(alias);
    var existing = document.getElementById(id);
    if (existing) {
      existing.innerHTML = css;
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    head.insertAdjacentHTML(position, "<style type=\"text/css\" id=\"".concat(id, "\">").concat(css, "</style>"));
  },
  remove: function remove(alias) {
    var id = "injector:".concat(alias);
    var style = document.getElementById(id);
    if (style) {
      var head = document.head || document.getElementsByTagName('head')[0];
      if (head) head.removeChild(document.getElementById(id));
    }
  }
};
var darkMode = {
  get enabledByDefault() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  init: function init() {
    //make sure to inject the base CSS first
    var baseCSS = GM_getResourceText("baseCSS");
    injector.inject('ZU-global', baseCSS);
    this.css = GM_getResourceText("darkCSS");
    var settings = LSfetchJSON('ZU-settings'),
      on = settings && settings.darkMode !== undefined ? settings.darkMode : this.enabledByDefault;
    if (on) {
      this.toggle(on, false);
    }
  },
  addButton: function addButton() {
    var _this11 = this;
    var buttonsRight = document.querySelector('.headmenu-buttons-right');
    buttonsRight.insertAdjacentHTML('afterbegin', "\n      <div class=\"btn-group\">\n        <button title=\"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u0443\" class=\"btn btn-link ZU-btn-link ZU-toggle-dark-mode\"><i class=\"fa fa-adjust\"></i></button>\n      </div>");
    buttonsRight.querySelector('.ZU-toggle-dark-mode').onclick = function () {
      return _this11.toggle();
    };
  },
  toggle: function toggle() {
    var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this._on;
    var byUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (on) injector.inject('ZU-dark', this.css);else injector.remove('ZU-dark');
    this._on = on;
    if (byUser) {
      settings.darkMode = !!on;
      settings.save;
    }
  }
};
darkMode.init(); // must be called ahead of time to prevent flashes
var MediaViewer = /*#__PURE__*/function () {
  function MediaViewer(thumb, imgurl, thumburl, imgw, imgh, thumbw, thumbh) {
    var _this12 = this;
    _classCallCheck(this, MediaViewer);
    this.initZoom();
    this.createContainer();
    this.resetTransform();
    // TODO: pin the popup somehow (currently unable to do it)
    var thBCR = thumb.getBoundingClientRect(),
      thumb_x = thBCR.x,
      thumb_y = thBCR.y,
      thumb_w = thBCR.width,
      thumb_h = thBCR.height,
      win_w = this.viewer.clientWidth,
      win_h = this.viewer.clientHeight,
      scaleDownFactor = Math.min(win_w / imgw, win_h / imgh, 1),
      pre_w = imgw * scaleDownFactor,
      pre_h = imgh * scaleDownFactor,
      visibleMarginX = (win_w - pre_w) / 2,
      visibleMarginY = (win_h - pre_h) / 2,
      mi_w = Math.min(win_w, imgw),
      mi_h = Math.min(win_h, imgh),
      screenScaleDownFactor = thumb_w / pre_w,
      transX = thumb_x + thumb_w / 2 - win_w / 2,
      transY = thumb_y + thumb_h / 2 - win_h / 2,
      trans = "style=\"transform: translate(".concat(transX, "px, ").concat(transY, "px) scale(").concat(screenScaleDownFactor, ")\""),
      me = this.viewer._ins('afterBegin', this.createMediaElement(thumb.src, imgw, imgh, imgurl, trans));
    this.refreshList();
    this.currentThumb = thumb;
    thumb.style.visibility = 'hidden';
    this.updateCounter();
    this.showPercentage(scaleDownFactor);
    me._scaleDownFactor = scaleDownFactor;
    this.currentMediaItem = me;
    me._realWidth = imgw;
    this.imgw = imgw;
    this.imgh = imgh;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      _this12.container.classList.remove('mvc-collapsed');
      me.style.transform = null;
    });
    MediaViewer.toggleScalability(true);
  }
  _createClass(MediaViewer, [{
    key: "refreshList",
    value: function refreshList() {
      this.list = [].filter.call(document.querySelectorAll('figure.post-img'), function (fig) {
        return !fig.__vue__.attachment.embed;
      }).map(function (fig) {
        return fig.querySelector('.post-img-thumbnail');
      });
    }
  }, {
    key: "findIndex",
    value: function findIndex(thumb) {
      return Array.prototype.findIndex.call(this.list, function (e) {
        return e == thumb;
      });
    }
    // Container
  }, {
    key: "createContainer",
    value: function createContainer() {
      var _this13 = this;
      this.container = document.body._ins('beforeend', "<div class=\"mv-container mvc-collapsed\">\n    <div class=\"media-viewer\">\n      <div class=\"mv-label\">\n        <span class=\"item-counter\"></span>\n        <span class=\"scale-indicator\"></span>\n      </div>\n      <div class=\"mv-button mv-prev-next mv-prev\"></div>\n      <div class=\"mv-button mv-prev-next mv-next\"></div>\n      <div class=\"mv-button mv-restore\"></div>\n      <div class=\"mv-button mv-close\"></div>\n    </div></div>");
      this.viewer = this.container.querySelector('.media-viewer');
      this.viewer.addEventListener('wheel', this.handleZoom.bind(this));
      this.viewer.addEventListener('mousemove', function (ev) {
        _this13.mouseX = ev.clientX;
        _this13.mouseY = ev.clientY;
        if (_this13.isMouseDown) {
          _this13.handleDrag();
        }
      });
      this.viewer.addEventListener('mousedown', function (ev) {
        _this13.gripX = ev.clientX;
        _this13.gripY = ev.clientY;
        _this13.isMouseDown = true;
        if (ev.target.classList.contains('media-viewer') || ev.target.classList.contains('mv-under')) _this13.emptyClick = true;
      });
      this.viewer.addEventListener('click', function (ev) {
        if (_this13.isDragged) {
          _this13.isDragged = false;
          ev.preventDefault();
        }
      });
      this.viewer.addEventListener('mouseup', function (ev) {
        _this13.isMouseDown = false;
        _this13.currentMediaItem.classList.remove('no-transition');
        if (_this13.isDragged) {
          ev.preventDefault();
        } else if (ev.button == 0) {
          _this13.collapse();
        }
        _this13.emptyClick = false;
      });
      this.viewer.addEventListener('dragstart', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      });
      this.viewer.querySelectorAll('.mv-button').forEach(function (pnb) {
        pnb.addEventListener('click', function (ev) {
          ev.stopPropagation();
          _this13.refreshList();
          var index = _this13.findIndex(_this13.currentThumb);
          if (pnb.classList.contains('mv-prev') || pnb.classList.contains('mv-next')) {
            if (pnb.classList.contains('mv-prev')) {
              index -= 1;
              if (index < 0) index = _this13.list.length - 1;
            } else {
              index += 1;
              if (index >= _this13.list.length) index = 0;
            }
            _this13.switchItem(_this13.list[index]);
          } else if (pnb.classList.contains('mv-close')) {
            _this13.collapse();
          } else if (pnb.classList.contains('mv-restore')) {
            _this13.toggleFullSize(0);
          }
        });
        ['mouseup', 'mousedown'].forEach(function (evt) {
          return pnb.addEventListener(evt, function (ev) {
            return ev.stopPropagation();
          });
        });
      });
      this.viewer.addEventListener('mouseleave', function (ev) {
        _this13.isMouseDown = false;
        _this13.isDragged = false;
      });
    }
    // Managing transforms
  }, {
    key: "applyTransform",
    value: function applyTransform() {
      var me = this.currentMediaItem;
      if (!me) return;
      me.style.transform = "translate(".concat(this.translateX, "px, ").concat(this.translateY, "px) scale(").concat(this.scale, ")");
    }
  }, {
    key: "resetTransform",
    value: function resetTransform() {
      this.translateX = 0;
      this.translateY = 0;
      this.scale = 1;
    }
    // Zooming
  }, {
    key: "initZoom",
    value: function initZoom() {
      this.zoomAmount = 0.5;
      this.minScale = 0.1;
      this.zoomSteps = [0.1, 0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    }
  }, {
    key: "handleZoom",
    value: function handleZoom(ev) {
      var _this14 = this;
      var me = this.currentMediaItem;
      if (!me) return;
      ev.stopPropagation();
      ev.preventDefault();
      var dir = -Math.sign(ev.deltaY),
        initialScale = 1 / me._scaleDownFactor,
        zSteps = Array.from(this.zoomSteps).filter(function (z) {
          return Math.abs((z - initialScale) / initialScale) > 0.1;
        }) // Remove zoom steps that are close to (real) 100%
        .concat([initialScale]) // Add a (real) 100% step
        ,
        centerX = this.viewer.clientWidth / 2 + this.translateX,
        centerY = this.viewer.clientHeight / 2 + this.translateY,
        newScale = zSteps.map(function (z) {
          return z - _this14.scale;
        }).filter(function (z) {
          return z * dir > 0;
        }) // Pick only the steps in the needed direction
        .sort(function (a, b) {
          return (a - b) * dir;
        })[0] + this.scale; // Find the closest step
      if (!isNaN(newScale)) {
        // It may be NaN in case when minimum or maximum zoom amount is achieved
        this.showPercentage(me._scaleDownFactor * newScale);
        this.translateX += (centerX - this.mouseX) / this.scale * (newScale - this.scale);
        this.translateY += (centerY - this.mouseY) / this.scale * (newScale - this.scale);
        this.scale = newScale;
        this.applyTransform();
        this.flashLabel();
      }
    }
  }, {
    key: "showPercentage",
    value: function showPercentage(scale) {
      this.viewer.querySelector('.scale-indicator').innerText = "| ".concat(Math.round(scale * 100), "%");
    }
    // Dragging
  }, {
    key: "handleDrag",
    value: function handleDrag(ev) {
      var me = this.currentMediaItem;
      if (!me) return;
      var dx = this.mouseX - this.gripX,
        dy = this.mouseY - this.gripY;
      if (dx != 0 || dy != 0) {
        if (!this.isDragged) {
          this.currentMediaItem.classList.add('no-transition');
          this.isDragged = true;
          this.initialTransX = this.translateX;
          this.initialTransY = this.translateY;
        }
        this.translateX = this.initialTransX + dx;
        this.translateY = this.initialTransY + dy;
        this.applyTransform();
      }
    }
    // Switching
  }, {
    key: "switchItem",
    value: function switchItem(thumb) {
      var fig = thumb.findParent('figure'),
        _MediaViewer$parseFig = MediaViewer.parseFigure(fig),
        _MediaViewer$parseFig2 = _slicedToArray(_MediaViewer$parseFig, 6),
        imgurl = _MediaViewer$parseFig2[0],
        thumburl = _MediaViewer$parseFig2[1],
        imgw = _MediaViewer$parseFig2[2],
        imgh = _MediaViewer$parseFig2[3],
        thumbw = _MediaViewer$parseFig2[4],
        thumbh = _MediaViewer$parseFig2[5],
        win_w = this.viewer.clientWidth,
        win_h = this.viewer.clientHeight,
        scaleDownFactor = Math.min(win_w / imgw, win_h / imgh, 1);
      this.showPercentage(scaleDownFactor);
      this.resetTransform();
      this.applyTransform();
      this.currentMediaItem._scaleDownFactor = scaleDownFactor;
      this.currentMediaItem.classList.remove('no-transition');
      this.currentMediaItem.innerHTML = this.createMediaElement(thumb.src, imgw, imgh, imgurl, null);
      this.currentThumb.style.visibility = 'visible';
      thumb.style.visibility = 'hidden';
      this.currentThumb = thumb;
      this.updateCounter();
      this.refreshList();
    }
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      var index = this.findIndex(this.currentThumb);
      this.viewer.querySelector('.item-counter').innerText = "".concat(index + 1, "/").concat(this.list.length);
      this.flashLabel();
    }
  }, {
    key: "flashLabel",
    value: function flashLabel() {
      var _this15 = this;
      clearTimeout(this.flashLabelTimeout);
      this.viewer.querySelector('.mv-label').classList.add('mvl-visible');
      this.flashLabelTimeout = setTimeout(function () {
        return _this15.viewer.querySelector('.mv-label').classList.remove('mvl-visible');
      }, 1000);
    }
    // Closing
  }, {
    key: "collapse",
    value: function collapse() {
      var _this16 = this;
      document.body.style.overflow = '';
      var me = this.currentMediaItem,
        mi_w = me.clientWidth,
        mi_h = me.clientHeight,
        svg = me.querySelector('.placeholder-svg'),
        resizeFactor = Math.min(this.viewer.clientHeight / svg.naturalHeight, this.viewer.clientWidth / svg.naturalWidth);
      this.isDragged = false;
      if (resizeFactor < 1) {
        mi_w = svg.naturalWidth * resizeFactor;
        mi_h = svg.naturalHeight * resizeFactor;
      }
      var offScreen = true,
        transform = '';
      if (document.body.contains(this.currentThumb)) {
        var thumbBCR = this.currentThumb.getBoundingClientRect();
        offScreen = !(thumbBCR.y < window.innerHeight && thumbBCR.y + thumbBCR.height > 0 && thumbBCR.x < window.innerWidth && thumbBCR.x + thumbBCR.width > 0);
        if (!offScreen) {
          var transX = thumbBCR.x + thumbBCR.width / 2 - this.viewer.clientWidth / 2,
            transY = thumbBCR.y + thumbBCR.height / 2 - this.viewer.clientHeight / 2;
          me.style.transform = "translate(".concat(transX, "px, ").concat(transY, "px) scale(").concat(thumbBCR.width / mi_w, ")");
        }
      }
      if (offScreen) {
        me.style.transform = 'translate(0px, 0px) scale(0)';
      }
      me.classList.remove('no-transition');
      this.container.classList.add('mvc-collapsed');
      setTimeout(function () {
        _this16.container.remove();
        _this16.currentThumb.style.visibility = 'visible';
        if (_this16.onCollapse) _this16.onCollapse();
      }, 250);
      MediaViewer.toggleScalability(false);
    }
    // Full screen on and off
  }, {
    key: "toggleFullSize",
    value: function toggleFullSize(on) {
      document.body.style.overflow = on ? 'hidden' : '';
      if (on) this.viewer.classList.remove('mv-transparent');else this.viewer.classList.add('mv-transparent');
    }
    // Media element within container
  }, {
    key: "createMediaElement",
    value: function createMediaElement(underImageSrc, imgw, imgh, imgurl) {
      var trans = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      return "<div class=\"media-item\" ".concat(trans, ">\n      <div style=\"background-image: url(").concat(underImageSrc, "); max-width: ").concat(imgw, "px\" class=\"mv-under\"></div>\n      <img src=\"").concat(imgurl, "\" class=\"mv-over\" onload=\"this.parentElement.classList.add('loaded')\">\n      <img class=\"placeholder-svg\" src=\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='").concat(imgw, "' height='").concat(imgh, "'%2F%3E\">\n    </div>");
    }
  }], [{
    key: "handleAttachment",
    value: function handleAttachment(fig) {
      if (fig.__vue__.attachment.embed || fig.querySelector('.ZU-thumb-overlay')) return;
      var thumb = fig.querySelector('.post-img-thumbnail'),
        link = fig.querySelector('a');
      // add an overlay to prevent expanding
      link._ins('afterend', "<a href=\"".concat(link.href, "\" target=\"_blank\" class=\"ZU-thumb-overlay\"></a>")).addEventListener('click', function (ev) {
        ev.preventDefault();
        var mv = _construct(MediaViewer, [thumb].concat(_toConsumableArray(MediaViewer.parseFigure(fig))));
        mv.onCollapse = function () {
          return mv = null;
        };
      });
    }
  }, {
    key: "toggle",
    value: function toggle(off) {
      var allFigs = document.querySelectorAll('figure.post-img').forEach(function (fig) {
        var ov = fig.querySelector('.ZU-thumb-overlay');
        if (!off) {
          if (!ov) MediaViewer.handleAttachment(fig);
        } else {
          if (ov) ov.remove();
        }
      });
    }
  }, {
    key: "parseFigure",
    value: function parseFigure(fig) {
      var fv = fig.__vue__;
      var orig = fv.attachment.images.original,
        actual = fv.actualImage;
      return [orig.url, actual.url, orig.width, orig.height, actual.width, actual.height];
    }
  }, {
    key: "setupKeyNavigation",
    value: function setupKeyNavigation() {
      document.addEventListener("keydown", function (ev) {
        if (ev.ctrlKey) {
          var threadId = +app.$router.currentRoute.params.threadId;
          if (!isNaN(threadId)) {
            var dir = app.$router.currentRoute.params.dir;
            if (event.key == 'ArrowLeft') {
              router.push("/".concat(dir, "/").concat(threadId - 1));
            }
            if (event.key == 'ArrowRight') {
              router.push("/".concat(dir, "/").concat(threadId + 1));
            }
          }
        } else {
          var mv = document.querySelector('.media-viewer:not(.mv-transparent)');
          if (mv) {
            if (event.key == 'ArrowLeft') mv.querySelector('.mv-prev').click();
            if (event.key == 'ArrowRight') mv.querySelector('.mv-next').click();
            if (event.key == 'Escape') mv.querySelector('.mv-close').click();
          }
        }
      });
    }
  }, {
    key: "toggleScalability",
    value: function toggleScalability(on) {
      var vp = document.querySelector("meta[name=viewport]");
      vp.setAttribute('content', "width=device-width,initial-scale=1".concat(on ? '' : ',maximum-scale=1,minimum-scale=1,user-scalable=no'));
    }
  }]);
  return MediaViewer;
}();
var settings = {
  defaults: {
    thumbNoScroll: true,
    momInRoom: false,
    unhideSpoilers: false,
    unmaskOnHover: true,
    hideSidebar: false,
    hiddenBoards: [],
    noko: true,
    updateInterval: 10,
    referenceLimit: 20,
    catalogMode: false,
    autohide: [],
    autohideAtt: [],
    nullColor: {
      hue: 0,
      sat: 100,
      bri: 100,
      con: 100
    },
    turnOffSnow: window.localStorage.getItem('disableSnow') == null ? false : true,
    selectedBoard: 'b',
    selectedInstance: 0,
    darkMode: darkMode.enabledByDefault,
    fixUkrSpelling: true,
    legacyMediaViewer: false
  },
  _: {},
  hooks: {
    momInRoom: momInRoom.toggle.bind(momInRoom),
    unhideSpoilers: unhideSpoilers.toggle.bind(unhideSpoilers),
    unmaskOnHover: momInRoom.toggleHover.bind(momInRoom),
    hideSidebar: sideBar.toggle.bind(sideBar),
    updateInterval: refresher.reset.bind(refresher),
    referenceLimit: autohide.updateReferenceLimit.bind(autohide),
    catalogMode: catalog.toggle.bind(catalog),
    autohide: autohide.init.bind(autohide),
    autohideAtt: autohideAtt.init.bind(autohideAtt),
    nullColor: NullRestyler.setValues.bind(NullRestyler),
    turnOffSnow: desnower.toggle.bind(desnower),
    selectedInstance: youtubeStuff.changeInstance.bind(youtubeStuff),
    fixUkrSpelling: fixUkrSpelling.toggle.bind(fixUkrSpelling),
    legacyMediaViewer: MediaViewer.toggle.bind(MediaViewer)
  },
  save: function save() {
    this._.hiddenBoards = this.hiddenBoards;
    this._.autohide = this.autohide;
    this._.autohideAtt = this.autohideAtt;
    this._.nullColor = this.nullColor;
    localStorage['ZU-settings'] = JSON.stringify(this._);
  },
  init: function init() {
    var _this17 = this;
    var localSettings = LSfetchJSON('ZU-settings') || {},
      allSettings = Object.assign(cloneObj(this.defaults, true), localSettings);
    Object.keys(allSettings).forEach(function (key) {
      var value = allSettings[key];
      if (_typeof(value) !== "object") {
        Object.defineProperty(_this17, key, {
          set: function set(val) {
            this._[key] = val;
            if (this.hooks.hasOwnProperty(key)) {
              this.hooks[key](val);
            }
            this.save();
          },
          get: function get() {
            return this._[key];
          }
        });
      }
      _this17[key] = value;
    });
  }
};
function cloneObj(obj) {
  var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = {};
  for (key in obj) {
    if (deep && obj[key] instanceof Object) {
      if (obj[key] instanceof Array) {
        result[key] = [];
        obj[key].forEach(function (item) {
          if (item instanceof Object) {
            result[key].push(cloneObj(item, true));
          } else {
            result[key].push(item);
          }
        });
      } else {
        result[key] = cloneObj(obj[key]);
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
RegExp.prototype.toJSON = function () {
  return {
    source: this.source,
    flags: this.flags
  };
};

// Hides threads from unwanted boards on index page
var boardHider = {
  enabled: false,
  enable: function enable() {
    if (this.enabled) {
      return;
    }
    this.enabled = true;
    this.refresh();
  },
  disable: function disable() {
    if (this.enabled) {
      injector.remove('ZU-hide-boards');
    }
    this.enabled = false;
  },
  refresh: function refresh() {
    if (settings.hiddenBoards.length) {
      var css;
      if (this.enabled) {
        css = settings.hiddenBoards.map(function (boardID) {
          return "div[board-id=\"".concat(boardID, "\"]");
        }).join(', ') + ' {display: none} ';
        injector.inject('ZU-hide-boards', css);
      }
      css = settings.hiddenBoards.map(function (boardID) {
        return ".sidemenu-board-item a[href=\"/".concat(boardID, "\"] .ZU-board-hide-icon");
      }).join(', ') + ' {display: none} ' + settings.hiddenBoards.map(function (boardID) {
        return ".sidemenu-board-item a[href=\"/".concat(boardID, "\"] .ZU-board-unhide-icon");
      }).join(', ') + ' {display: block}' + settings.hiddenBoards.map(function (boardID) {
        return ".sidemenu-board-item a[href=\"/".concat(boardID, "\"]");
      }).join(', ') + ' {text-decoration: line-through!important; }' + settings.hiddenBoards.map(function (boardID) {
        return ".sidemenu-board-item a[href=\"/".concat(boardID, "\"] .sidemenu-board-title");
      }).join(', ') + ' {color:#808080!important; }';
      injector.inject('ZU-hide-boards-ui', css);
    } else {
      injector.remove('ZU-hide-boards');
      injector.remove('ZU-hide-boards-ui');
    }
  },
  toggleBoard: function toggleBoard(dir) {
    var index = settings.hiddenBoards.indexOf(dir);
    if (index >= 0) {
      settings.hiddenBoards.splice(index, 1);
    } else {
      settings.hiddenBoards.push(dir);
    }
    this.refresh();
    settings.save();
  }
};
var eventDispatcher = {
  click: function click(e) {
    var _e$target, _e$target2;
    // Close alerts with one click
    var alertsWrapper = e.path.find(function (el) {
      var _el$classList;
      return el === null || el === void 0 ? void 0 : (_el$classList = el.classList) === null || _el$classList === void 0 ? void 0 : _el$classList.contains('alerts-wrapper');
    });
    if (alertsWrapper) {
      alertsWrapper.__vue__.alerts = [];
    }
    // Thread updating and expanding
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.classList.contains('ZU-expand-thread')) {
      var thread = e.path.find(function (el) {
        var _el$classList2;
        return el === null || el === void 0 ? void 0 : (_el$classList2 = el.classList) === null || _el$classList2 === void 0 ? void 0 : _el$classList2.contains('thread');
      });
      if (thread) {
        expandThread(thread);
      }
    }
    if (e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.classList.contains('ZU-update-thread')) {
      var _thread = e.path.find(function (el) {
        var _el$classList3;
        return el === null || el === void 0 ? void 0 : (_el$classList3 = el.classList) === null || _el$classList3 === void 0 ? void 0 : _el$classList3.contains('thread');
      });
      if (_thread) {
        updateThread(_thread);
      }
    }
    // No scroll
    var img = e.path.find(function (el) {
      var _el$classList4;
      return el === null || el === void 0 ? void 0 : (_el$classList4 = el.classList) === null || _el$classList4 === void 0 ? void 0 : _el$classList4.contains('post-img');
    });
    if (img) {
      if (settings.thumbNoScroll) {
        img.__vue__.noScroll = true;
      }
    }
    // Board hiding
    var hideBtn = e.path.find(function (el) {
      var _el$classList5;
      return el === null || el === void 0 ? void 0 : (_el$classList5 = el.classList) === null || _el$classList5 === void 0 ? void 0 : _el$classList5.contains('ZU-boardhideunhide');
    });
    if (hideBtn) {
      e.preventDefault();
      e.stopPropagation();
      var dir = hideBtn.findParent('a').getAttribute('href').replace(/\//g, '');
      boardHider.toggleBoard(dir);
    }
    // Board hiding by OP
    var OPhideBtn = e.path.find(function (el) {
      var _el$classList6;
      return el === null || el === void 0 ? void 0 : (_el$classList6 = el.classList) === null || _el$classList6 === void 0 ? void 0 : _el$classList6.contains('ZU-hide-board-by-op');
    });
    if (OPhideBtn) {
      var _dir = OPhideBtn.parentElement.querySelector('a').getAttribute('href').replace(/\//g, '');
      boardHider.toggleBoard(_dir);
    }
    // Share
    var shareBtn = e.path.find(function (el) {
      var _el$classList7;
      return el === null || el === void 0 ? void 0 : (_el$classList7 = el.classList) === null || _el$classList7 === void 0 ? void 0 : _el$classList7.contains('ZU-share-btn');
    });
    if (shareBtn) {
      var _shareBtn$querySelect;
      (_shareBtn$querySelect = shareBtn.querySelector('.ZU-share-dropdown').classList) === null || _shareBtn$querySelect === void 0 ? void 0 : _shareBtn$querySelect.toggle('ZU-dropdown-show');
    }
    // Share link
    var shareLink = e.path.find(function (el) {
      var _el$classList8;
      return el === null || el === void 0 ? void 0 : (_el$classList8 = el.classList) === null || _el$classList8 === void 0 ? void 0 : _el$classList8.contains('ZU-share-link');
    });
    if (shareLink) {
      share.handleClick(shareLink);
    }
    // Mention
    var mention = e.path.find(function (el) {
      var _el$classList9;
      return el === null || el === void 0 ? void 0 : (_el$classList9 = el.classList) === null || _el$classList9 === void 0 ? void 0 : _el$classList9.contains('ZU-mention-btn');
    });
    if (mention) {
      mentionPost(mention.findParent('.post'));
    }
    // Popup slosing
    if (e.path.find(function (el) {
      var _el$classList10;
      return el === null || el === void 0 ? void 0 : (_el$classList10 = el.classList) === null || _el$classList10 === void 0 ? void 0 : _el$classList10.contains('ZU-settings-btn');
    })) {
      var _document$querySelect, _document$querySelect2;
      [].forEach.call(document.querySelectorAll('#ZU-settings > div'), function (el) {
        return el.hidden = true;
      });
      document.querySelector('#ZU-settings-main').hidden = false;
      (_document$querySelect = document.querySelector('#ZU-settings')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.toggle('ZU-dropdown-show');
    } else if (!e.path.find(function (el) {
      return (el === null || el === void 0 ? void 0 : el.classList) && (el.classList.contains('ZU-settings-dropdown') || el.classList.contains('ZU-prevent-settings-dropdown-close'));
    })) {
      var _document$querySelect3, _document$querySelect4;
      (_document$querySelect3 = document.querySelector('#ZU-settings')) === null || _document$querySelect3 === void 0 ? void 0 : (_document$querySelect4 = _document$querySelect3.classList) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.remove('ZU-dropdown-show');
    }
    if (!e.path.find(function (el) {
      var _el$classList11, _el$classList12;
      return (el === null || el === void 0 ? void 0 : el.classList) && (((_el$classList11 = el.classList) === null || _el$classList11 === void 0 ? void 0 : _el$classList11.contains('ZU-share-btn')) || ((_el$classList12 = el.classList) === null || _el$classList12 === void 0 ? void 0 : _el$classList12.contains('ZU-share-btn')));
    })) {
      Array.prototype.forEach.call(document.querySelectorAll('.ZU-share-dropdown'), function (dd) {
        var _dd$classList;
        return (_dd$classList = dd.classList) === null || _dd$classList === void 0 ? void 0 : _dd$classList.remove('ZU-dropdown-show');
      });
    }
    // Top in-menu navigation
    var eat = e.path.find(function (el) {
      var _el$classList13;
      return el === null || el === void 0 ? void 0 : (_el$classList13 = el.classList) === null || _el$classList13 === void 0 ? void 0 : _el$classList13.contains('ZU-enter-autohide-top');
    });
    if (eat) {
      fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-settings-main', '#ZU-top-autohide');
    }
    // Page archiving
    var zpa = e.path.find(function (el) {
      var _el$classList14;
      return el === null || el === void 0 ? void 0 : (_el$classList14 = el.classList) === null || _el$classList14 === void 0 ? void 0 : _el$classList14.contains('ZU-prepare-archive');
    });
    if (zpa) {
      var _document$querySelect5;
      preparePageSave((_document$querySelect5 = document.querySelector('#ZU-archive-with-pictures')) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.checked);
    }
    // Saving autohide menu
    var ret = e.path.find(function (el) {
      var _el$classList15;
      return el === null || el === void 0 ? void 0 : (_el$classList15 = el.classList) === null || _el$classList15 === void 0 ? void 0 : _el$classList15.contains('ZU-exit-autohide-top');
    });
    if (ret) {
      fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-top-autohide', '#ZU-settings-main');
      autohide.save();
      reAutohidePosts();
    }
    // Hide by attachment
    var hba = e.path.find(function (el) {
      var _el$classList16;
      return el === null || el === void 0 ? void 0 : (_el$classList16 = el.classList) === null || _el$classList16 === void 0 ? void 0 : _el$classList16.contains('ZU-hide-attachment');
    });
    if (hba) {
      var figVue = hba.findParent('figure').__vue__;
      if (hba.dataset.inlist == 'true') {
        autohideAtt.remove(figVue.attachment.id);
        // ??
      } else autohideAtt.add(figVue);
    }
    // Remove autohide entry
    var rae = e.path.find(function (el) {
      var _el$classList17;
      return el === null || el === void 0 ? void 0 : (_el$classList17 = el.classList) === null || _el$classList17 === void 0 ? void 0 : _el$classList17.contains('ZU-remove-autohide-entry');
    });
    if (rae) {
      var data = rae.findParent('.ZU-autohide-attachemnt-entry').dataset;
      autohideAtt.remove(data.aid, !!data.eid);
    }
    // Radio button group behavior
    var rbg = e.path.find(function (el) {
        var _el$classList18;
        return el === null || el === void 0 ? void 0 : (_el$classList18 = el.classList) === null || _el$classList18 === void 0 ? void 0 : _el$classList18.contains('ZU-radio-btn-group');
      }),
      rbb = e.path.find(function (el) {
        var _el$classList19;
        return el === null || el === void 0 ? void 0 : (_el$classList19 = el.classList) === null || _el$classList19 === void 0 ? void 0 : _el$classList19.contains('btn');
      });
    if (rbg && rbb) {
      var _rbb$classList;
      ;
      [].forEach.call(rbg.querySelectorAll('.btn'), function (btn) {
        var _btn$classList;
        return (_btn$classList = btn.classList) === null || _btn$classList === void 0 ? void 0 : _btn$classList.remove('active');
      });
      (_rbb$classList = rbb.classList) === null || _rbb$classList === void 0 ? void 0 : _rbb$classList.add('active');
    }
    // Entering Null Restyling mode
    var nr = e.path.find(function (el) {
      var _el$classList20;
      return el === null || el === void 0 ? void 0 : (_el$classList20 = el.classList) === null || _el$classList20 === void 0 ? void 0 : _el$classList20.contains('ZU-restyle-null');
    });
    if (nr) {
      var _document$querySelect6;
      (_document$querySelect6 = document.querySelector('#sidebar').classList) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.add('edit-null');
    }
    // Exiting Null Restyling mode
    var nrs = e.path.find(function (el) {
      var _el$classList21;
      return el === null || el === void 0 ? void 0 : (_el$classList21 = el.classList) === null || _el$classList21 === void 0 ? void 0 : _el$classList21.contains('ZU-nulltwk-save');
    });
    if (nrs) {
      NullRestyler.save();
    }
    // Resetting the Null
    var nrr = e.path.find(function (el) {
      var _el$classList22;
      return el === null || el === void 0 ? void 0 : (_el$classList22 = el.classList) === null || _el$classList22 === void 0 ? void 0 : _el$classList22.contains('ZU-nulltwk-revert');
    });
    if (nrr) {
      var res = NullRestyler.setValues(settings.defaults.nullColor);
      localStorage['ZU-null-css-cached'] = res.css;
      delete res.css;
      settings.nullColor = res;
      settings.save();
    }
    // Hiding/unhiding selection in stegospoiler
    var shs = e.path.find(function (el) {
      var _el$classList23;
      return el === null || el === void 0 ? void 0 : (_el$classList23 = el.classList) === null || _el$classList23 === void 0 ? void 0 : _el$classList23.contains('ZU-hide-selection');
    });
    if (shs) {
      textSteganography.hideSelection(shs.findParent('.reply-form').querySelector('textarea'));
    }
    var srs = e.path.find(function (el) {
      var _el$classList24;
      return el === null || el === void 0 ? void 0 : (_el$classList24 = el.classList) === null || _el$classList24 === void 0 ? void 0 : _el$classList24.contains('ZU-remove-spoilers');
    });
    if (srs) {
      textSteganography.removeSpoilers(srs.findParent('.reply-form').querySelector('textarea'));
    }
    // Collapsed references uncollapsing
    var expRef = e.path.find(function (el) {
      var _el$classList25;
      return el === null || el === void 0 ? void 0 : (_el$classList25 = el.classList) === null || _el$classList25 === void 0 ? void 0 : _el$classList25.contains('ZU-expand-refs');
    });
    if (expRef) {
      referenceCollapsing.expand(expRef.findParent('.post'));
    }
    // Thumbnail expanding
  },

  mousedown: function mousedown(e) {
    // Quote on reply
    var replyBtn = e.path.find(function (el) {
      var _el$classList26, _el$classList27;
      return (el === null || el === void 0 ? void 0 : el.classList) && (((_el$classList26 = el.classList) === null || _el$classList26 === void 0 ? void 0 : _el$classList26.contains('post-button-reply')) || ((_el$classList27 = el.classList) === null || _el$classList27 === void 0 ? void 0 : _el$classList27.contains('ZU-quote-on-click')));
    });
    if (replyBtn) {
      var _replyBtn$classList;
      if ((_replyBtn$classList = replyBtn.classList) !== null && _replyBtn$classList !== void 0 && _replyBtn$classList.contains('ZU-qoc-from-anywhere')) {
        var selection = getSelection();
        if (selection) postQuotation = selection.text;
      } else postQuotation = getPostQuotation(replyBtn.findParent('.post'), replyBtn.classList.contains('ZU-qoc-textonly') || replyBtn.classList.contains('post-button-reply'));
    }
  },
  focusin: function focusin(e) {
    // Last active textarea
    if (e.target.matches('.reply-form-message textarea')) {
      lastActiveTextarea = e.target;
    }
  },
  change: function change(e) {
    // Noko
    if (!IS_OCHKO) {
      var noko = e.path.find(function (el) {
        var _el$classList28;
        return el === null || el === void 0 ? void 0 : (_el$classList28 = el.classList) === null || _el$classList28 === void 0 ? void 0 : _el$classList28.contains('ZU-noko');
      });
      if (noko) {
        settings.noko = noko.checked;
        Array.prototype.forEach.call(document.querySelectorAll('.ZU-noko'), function (otherNoko) {
          if (otherNoko !== noko) otherNoko.checked = noko.checked;
        });
      }
    }
    var instance = e.path.find(function (el) {
      return el.name == 'ZU-invidious-instance';
    });
    if (instance) {
      settings.selectedInstance = e.target.value;
      settings.save();
    }
  },
  mouseenter: function mouseenter(e) {
    // Peek into hidden thread
    var peek = e.path.find(function (el) {
      return (el === null || el === void 0 ? void 0 : el.classList) && el.classList.contains('fa-plus-square-o') && el.findParent('.post-footer');
    });
    if (peek) {
      var post = peek.findParent('.post').parentNode,
        postVue = post.__vue__;
      if (postVue !== null && postVue !== void 0 && postVue.isAutoHidden) {
        console.log(postVue);
      }
    }
  },
  input: function input(e) {
    var dialogTextArea = e.path.find(function (el) {
      return el.tagName == "TEXTAREA" && el.findParent('.dialog-footer');
    });
    if (dialogTextArea) {
      resizeTextAreaToContent(dialogTextArea);
    }
    // Null Restyling inputs
    var nr = e.path.find(function (el) {
      var _el$classList29;
      return el === null || el === void 0 ? void 0 : (_el$classList29 = el.classList) === null || _el$classList29 === void 0 ? void 0 : _el$classList29.contains('ZU-range');
    });
    if (nr) {
      nr.parentElement.querySelector('output .ZU-output').innerText = nr.value;
      NullRestyler.update();
    }
  }
};
function resizeTextAreaToContent(area) {
  area.style.height = "1px";
  area.style.height = area.scrollHeight + "px";
}
function getPostQuotation(post) {
  var withoutNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!post) return null;
  var postData = getPostDataFromDOM(post);
  if (!postData) return null;
  var text = ">>".concat(postData.id),
    selection = getSelection();
  if (selection && selection.post && selection.post == post) {
    var selectedText = selection.text.replace(/^\s/, '').replace(/\s$/, '') // remove leading and trailing whitespaces
    .replace(/^>/gm, ' >').replace(/^/gm, '>'); // add quotation marks
    if (withoutNumber) return selectedText + '\n';
    text += '\n' + selectedText;
  } else if (withoutNumber) return null;
  text += '\n';
  return text;
}
function mentionPost(post) {
  var text = postQuotation;
  if (!text) return;
  postQuotation = null;
  var textarea = lastActiveTextarea;
  if (textarea && textarea.offsetParent) {
    if (textarea.value && !textarea.value.match(/\n$/)) {
      text = '\n' + text;
    }
    textarea.value += text;
    touchTextarea(textarea);
  } else {
    setClipboard(text);
    nativeAlert('success', "\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u0441\u0442\u0430 ".concat(text.match(/[^>0-9\s]/g) ? 'и цитата скопированы' : 'скопирован', " \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430"));
  }
}
function touchTextarea(textarea) {
  textarea.dispatchEvent(new Event('input', {
    'bubbles': true,
    'cancelable': true
  }));
  textarea.focus();
}
function getSelection() {
  if (!document.getSelection) return null;
  var selection = document.getSelection();
  if (selection.type !== "Range") return null;
  var selectedText = selection.toString();
  if (!selectedText) return null;
  return {
    text: selectedText,
    post: selection.anchorNode.findParent('.post')
  };
}
function setClipboard(text) {
  if (!document.execCommand) return;
  var input;
  try {
    input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
  } catch (e) {
    console.warn('[u0] Unable to set clipboard');
  }
  input.remove();
}
function expandThread(threadDOM) {
  var threadVue = threadVueFromDOM(threadDOM),
    threadID,
    opID,
    firstShownReplyID;
  if (!threadVue) {
    console.warn('[0u] Unable to expand thread', e);
    return;
  }
  try {
    threadID = threadVue.thread.id, opID = threadVue.opPost.id, firstShownReplyID = threadVue.lastPosts[0].id;
  } catch (e) {
    console.warn('[0u] Unable to expand thread', e);
    return;
  }
  getPosts(threadID, opID, firstShownReplyID).then(function (posts) {
    threadVue.lastPosts = posts.concat(threadVue.lastPosts);
    Array.prototype.forEach.call(threadDOM.querySelectorAll('.ZU-delete-on-threadexpand'), function (el) {
      return el.remove();
    });
  })["catch"](handleNetworkError);
}
function updateThread(thread) {
  var threadVue, threadID, lastReplyID;
  if (thread instanceof Element) {
    threadVue = threadVueFromDOM(thread);
  } else {
    threadVue = thread;
  }
  if (!threadVue) {
    console.warn('[0u] Unable to update thread', e);
    return;
  }
  try {
    threadID = threadVue.thread.id;
    lastReplyID = (threadVue.lastPosts[threadVue.lastPosts.length - 1] || threadVue.opPost).id;
  } catch (e) {
    console.warn('[0u] Unable to update thread', e);
    return;
  }
  getPosts(threadID, lastReplyID).then(function (posts) {
    threadVue.lastPosts = threadVue.lastPosts.concat(posts);
  })["catch"](handleNetworkError);
}
var router = {
  push: function push(path) {
    if (path.indexOf('/') !== 0) {
      path = '/' + path;
    }
    if (document.location.pathname == path) {
      this.reload();
    } else {
      app.$router.push({
        path: path
      });
    }
  },
  reload: function reload() {
    return app.$bus.emit('refreshContent');
  },
  setupInterceptor: function setupInterceptor() {
    var _this18 = this;
    var doDebug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    app.$router.push = function (route, e, n) {
      var thread, threadID, postID;
      if (doDebug) console.log('ROUTE:', route);
      if (!IS_OCHKO && !settings.noko && state.type !== "thread" && route.hasOwnProperty('name') && route.name === "thread" && route.hasOwnProperty('hash') && (postID = route.hash.split('#')[1]) && route.hasOwnProperty('params') && (threadID = route.params.threadId) && !settings.catalogMode) {
        // Quick reply case
        var threadVue = contentVue.threads.find(function (thr) {
          return thr.thread.id == threadID;
        });
        if (threadVue // Thread exists on page
        && !document.querySelector("a[data-post=\"".concat(postID, "\"], a[href$=\"#").concat(postID, "\"]")) // No link to new posts exists
        ) {
          try {
            if (doDebug) console.log('Route intercepted (quick reply)');
            updateThread(threadVue);
          } catch (e) {
            console.error(e);
            app.$router.history.push(route, e, n);
          }
        }
        // New thread case
        else if (state.type === "board" // New threads may be created only from a board view
        && route.params.dir === contentVue.board.dir && !document.querySelector("a[href*=\"/".concat(threadID, "\"]")) // Thread does not exist yet
        ) {
          if (doDebug) console.log('Route intercepted (new thread)');
          _this18.reload();
        } else {
          app.$router.history.push(route, e, n);
        }
      } else {
        app.$router.history.push(route, e, n);
      }
    };
  }
};
function setupAlertInterceptor() {
  alertsVue.addAlert = function (t, e, a) {
    var s = this,
      n = {
        type: t,
        text: e
      };
    if (n.type === 'error' && n.text.indexOf('checking_browser') !== -1) {
      var anusAlert = {
        type: 'info',
        text: 'Производится проверка ануса...'
      };
      this.alerts.unshift(anusAlert);
      fuckCF(e, anusAlert, s);
    } else if (n.type === 'error' && n.text.indexOf('api/attachment/embed?url=youtube.com') !== -1) {
      document.querySelector('textarea:focus').findParent('.reply-form').__vue__.uploading = 0;
    } else {
      this.alerts.unshift(n), setTimeout(function () {
        s.closeAlert(n);
      }, a || 3500);
    }
  };
}

// Thanks anoñchik from /userjs/
function fuckCF(response, alertToClose, alertCloserContext) {
  var query = 'jschl_vc=' + response.match(/jschl_vc" value="([^"]+)/)[1] + '&pass=' + response.match(/pass" value="([^"]+)/)[1] + '&jschl_answer=',
    // basis for simplest eval
    a = {
      value: 0
    },
    t = location.host;
  eval(response.match(/b,r,e,a,k,i,n,g,f, ([^;]+)/)[1] + '; ' + response.match(/getElementById\('challenge-form'\);\s+;([^']+)/)[1]);
  query += a.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", '/cdn-cgi/l/chk_jschl?' + query, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== xhr.DONE) return;
    alertCloserContext.closeAlert(alertToClose);
    if (xhr.status == 200) {
      // check if post is being sent
      var sendingBtn = document.querySelector('.reply-form .btn-primary[disabled] .fa-spinner');
      if (sendingBtn) {
        try {
          sendingBtn.findParent('.reply-form').__vue__.send();
          return;
        } catch (e) {}
      }
      // check if new threads are being fetched
      if (contentVue.fetchingMore) {
        contentVue.fetchingMore = false;
        if (app.$router.currentRoute.name === 'thread') {
          /*singleThreadVue*/contentVue.checkNewReplies();
        } else {
          contentVue.getMoreThreads();
        }
        return;
      }
      // check if route has changed
      if (!document.querySelector('#content div')) {
        router.reload();
        return;
      }
      // default behavior
      alertCloserContext.addAlert('success', 'Проверка ануса пройдена. Повторите попытку');
    } else {
      alertCloserContext.addAlert('error', 'Проверка ануса провалилась.');
    }
  };
  setTimeout(function () {
    xhr.send();
  }, 4000);
}
function handleReplyForm(form) {
  // Add noko button
  if (!IS_OCHKO) {
    form.querySelector('.reply-form-message + div .pull-right').insertAdjacentHTML('beforeBegin', "\n      <label class=\"ZU-noko-label\" title=\"\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0442\u0440\u0435\u0434\u0443\"><input class=\"ZU-noko\" type=\"checkbox\"".concat(settings.noko ? 'checked' : '', "> Noko</label>"));
  }
  // Add quote from selection
  if (postQuotation) {
    var textarea = form.querySelector('textarea');
    textarea.value = postQuotation;
    postQuotation = null;
    textarea.dispatchEvent(new Event('input', {
      'bubbles': true,
      'cancelable': true
    }));
    textarea.focus();
  }
  // Add stegospoiler button
  form.querySelector('.reply-form-limit-counter').insertAdjacentHTML('beforeBegin', "<button class=\"btn btn-xs btn-default ZU-hide-selection\" title=\"\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\"><i class=\"fa fa-eye-slash\"></i></button>\n     <button class=\"btn btn-xs btn-default ZU-remove-spoilers\" title=\"\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u043F\u043E\u0439\u043B\u0435\u0440\u044B\"><i class=\"fa fa-eye\"></i></button> ");
}
function addSettingsButtons() {
  var showCatBtn = catalog.isApplicable;
  document.querySelector('.headmenu-buttons-left').insertAdjacentHTML('beforeEnd', "\n    <div class=\"btn-group ZU-nomargin-btn-group\">\n      <button title=\"0chan Utilities v.".concat(version, "\" type=\"button\" class=\"ZU-panel-btn btn btn-link ZU-btn-link ZU-svg-container-btn ZU-settings-btn\">\n        <svg class=\"ZU-svg ZU-svg-32\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#i-logo\"></use></svg>\n      </button>\n      ").concat(showCatBtn ? "<button title=\"\u0420\u0435\u0436\u0438\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430\" id=\"ZU-quickaction-catalogMode\" data-prop=\"catalogMode\" class=\"btn btn-link ZU-btn-link ZU-catalog-btn".concat(settings.catalogMode ? ' active' : '', "\">\n        <i class=\"fa fa-th ZU-onactive-hide\"></i>\n        <i class=\"fa fa-th-list ZU-onactive-show\"></i>\n      </button>") : '', "\n      <button title=\"\u041C\u0430\u043C\u043A\u0430 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0435\" id=\"ZU-quickaction-momInRoom\" data-prop=\"momInRoom\" class=\"btn btn-link ZU-btn-link ZU-nsfw-btn").concat(settings.momInRoom ? ' active' : '', "\">\n        <i class=\"fa fa-low-vision\"></i>\n      </button>\n    </div>\n    "));
  injector.inject('ZU-headmenu-shift', ".headmenu-title { left: ".concat(showCatBtn ? 170 : 130, "px !important; }"));
  ['catalogMode', 'momInRoom'].forEach(function (prop) {
    var btn = document.querySelector("#ZU-quickaction-".concat(prop));
    if (!btn) return;
    btn.addEventListener('click', function (ev) {
      var btn = ev.target.findParent('button'),
        on = !btn.classList.contains('active');
      settings[prop] = document.querySelector("#ZU-SP-".concat(prop)).checked = on;
    });
  });
}
function handleBoardItem(board) {
  if (board.querySelector('.ZU-boardhideunhide')) return;
  board.insertAdjacentHTML('afterBegin', "<span class=\"pull-left sidemenu-board-icons ZU-boardhideunhide\">\n      <span title=\"\u0421\u043A\u0440\u044B\u0442\u044C\" class=\"ZU-board-hide-icon\">\n        <i class=\"fa fa-minus-square-o\"></i>\n      </span>\n      <span title=\"\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u044C\" class=\"ZU-board-unhide-icon\">\n        <i class=\"fa fa-plus-square-o\"></i>\n      </span>\n    </span>");
}
function init() {
  if (typeof content.__vue__ === 'undefined') {
    setupVueGetter(); // *swoosh* — and __vue__ is available outside dev tools!
  }

  contentVue = content.__vue__;
  router.setupInterceptor();
  settings.init();
  NullRestyler.init();
  sideBar.init();
  boardHider.refresh();
  autohide.init();
  autohideAtt.init();
  contentObserver = forAllNodes([{
    selector: '.thread',
    fn: handleThread
  }, {
    selector: '.post',
    fn: handlePost
  }, {
    selector: '.sidemenu-board-item a',
    fn: handleBoardItem
  }, {
    selector: '.post-img',
    fn: handleAttachment
  }, {
    selector: '.reply-form',
    fn: handleReplyForm
  }], content.parentElement, {
    subtree: true,
    queryChildren: true
  });
  sidebar = document.querySelector('#sidebar');
  sidebarVue = sidebar.__vue__;
  awaitBoardList = forAllNodes([{
    selector: '.sidemenu-boards-list',
    fn: function fn(boardList) {
      app.$nextTick(function () {
        return awaitBoardList.stop();
      });
      sidebarObserver = forAllNodes([{
        selector: '.sidemenu-board-item a',
        fn: handleBoardItem
      }], boardList, {
        queryChildren: true
      });
    }
  }], sidebar, {
    queryChildren: true
  });
  window.addEventListener('resize', function () {
    var dialogTextArea = document.querySelector('.dialog-view textarea');
    if (dialogTextArea) resizeTextAreaToContent(dialogTextArea);
  });
  state.initialized = true;
}
function handlePost(post) {
  var extraIconsContainer = post.querySelector('.post-footer .pull-right');
  if (!extraIconsContainer || extraIconsContainer.querySelector('.ZU-mention-btn')) return;
  extraIconsContainer.insertAdjacentHTML('afterBegin', "<span title=\"\u0423\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044C\" class=\"post-button ZU-mention-btn ZU-quote-on-click\"><i class=\"fa fa-angle-double-right\"></i></span>");
  var postData = getPostDataFromDOM(post);
  if (!postData) return;
  if (postData.isPopup) {
    repositionPopup(post.parentNode);
  } else if (postData.isOpPost) {
    extraIconsContainer.insertAdjacentHTML('beforeBegin', "\n      <div class=\"pull-left\">\n        <span title=\"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F\" class=\"post-button ZU-share-btn ZU-quote-on-click ZU-qoc-from-anywhere\">\n          <i class=\"fa fa-share-alt\"></i>\n          ".concat(share.dropdown("".concat(getOrigin(), "/").concat(postData.dir, "/").concat(postData.threadID), postData.title), "\n          </span>\n      </div>"));
  }

  // Autohide posts
  autohidePost(postData, post);

  // Handling the message text  
  var msg = post.querySelector('.post-body-message');
  if (msg) {
    var _postData$postVue;
    // Stegospoilers
    msg.innerHTML = textSteganography.decode(msg.innerHTML, '<mark class="ZU-SSS">', '</mark>', true /* ← safe */);
    // Add Youtube thumbnail
    if ((_postData$postVue = postData.postVue) !== null && _postData$postVue !== void 0 && _postData$postVue.post) youtubeStuff.addThumbs(msg, postData.postVue.post);
    // Fix Ukrainian spelling quirks
    if (settings.fixUkrSpelling) fixUkrSpelling.process(post);
  }
}
function autohidePost(postData, postDOM) {
  // TODO: prevent hiding thread inside the thread; Force unhide thread
  if (!postData.postVue.isPopup && (autohideAtt.initialized && postData.attachments.find(function (att) {
    return autohideAtt.check(att);
  }) || postData.message && autohide.check(postData.message) || autohide.checkReferenceCount(postData.postVue))) {
    postData.postVue.isHidden = true;
    postData.postVue.isAutoHidden = true;
    postData.postVue.$emit('hidden', true);
  } else if (postData.postVue.isAutoHidden) {
    postData.postVue.isHidden = false;
    postData.postVue.isAutoHidden = false;
    postData.postVue.$emit('hidden', false);
  }
}
referenceCollapsing = {
  minPostsToCollapse: 5,
  postsToDisplay: 3,
  expand: function expand(post) {
    post.querySelector('.ZU-good-ref-block').remove();
    post.querySelector('.ZU-bad-ref-block').hidden = false;
  }
};
function handleAttachment(att) {
  autohideAtt.addButton(att);
  if (!settings.legacyMediaViewer) {
    MediaViewer.handleAttachment(att);
  }
}
function reAutohidePosts() {
  [].forEach.call(document.querySelectorAll('.post'), function (post) {
    return autohidePost(getPostDataFromDOM(post));
  });
}
function repositionPopup(popup) {
  var left = +popup.style.left.replace('px', ''),
    top = +popup.style.top.replace('px', ''),
    width = popup.offsetWidth,
    height = popup.offsetHeight;
  var bcr = popup.getBoundingClientRect();
  if (bcr.bottom > document.documentElement.clientHeight) {
    popup.style.top = top - height - 20 + 'px';
  }
  var offsetRight = bcr.right - document.documentElement.clientWidth;
  if (offsetRight > 0) {
    popup.style.left = left - offsetRight + 'px';
  }
}
function handleThread(thread) {
  var threadVue = threadVueFromDOM(thread);
  if (!threadVue) return;
  thread.parentNode.setAttribute('board-id', threadVue.thread.board.dir);
  addThreadControls(thread, threadVue);
}
function threadVueFromDOM(thread) {
  try {
    var threadID = thread.__vue__.thread.thread.id;
    return contentVue.threads.find(function (thread) {
      return thread.thread.id == threadID;
    });
  } catch (e) {
    console.warn('[0u] Unable to find thread model', thread, e);
    return null;
  }
}
function getPostDataFromDOM(post) {
  try {
    var postVue = post.parentNode.__vue__;
    if (postVue.post) {
      return {
        id: postVue.post.id,
        isOpPost: postVue.post.isOpPost,
        dir: postVue.thread.board.dir,
        threadID: postVue.thread.id,
        title: postVue.thread.title,
        isPopup: false,
        postVue: postVue,
        message: postVue.post.message,
        attachments: postVue.post.attachments,
        references: postVue.post.referencedByIds
      };
    } else if (postVue.$el.classList.contains('post-popup')) {
      var popupVue = postVue.$parent.popupPost;
      return {
        id: popupVue.id,
        isOpPost: popupVue.isOpPost,
        dir: popupVue.boardDir,
        threadID: popupVue.threadId,
        isPopup: true,
        popupVue: popupVue,
        postVue: postVue,
        message: popupVue.message,
        attachments: popupVue.attachments,
        references: popupVue.referencedByIds
      };
    } else return null;
  } catch (e) {
    console.warn('[0u] Unable to find post model', post, e);
    return null;
  }
}
function addThreadControls(threadDOM, threadVue) {
  if (!IS_OCHKO) {
    var controlsContainer = Array.prototype.find.call(threadDOM.querySelectorAll(':scope > div > div:not(.thread-tree)'), function (div) {
      return !div.querySelector('.post-op');
    });
    if (!controlsContainer || controlsContainer.classList.contains('ZU-thread-controls')) return;
    var href = controlsContainer.querySelector('a').getAttribute('href');
    if (threadVue.skippedPosts) {
      if (controlsContainer.querySelector('span')) {
        controlsContainer.querySelector('span').classList.add('ZU-delete-on-threadexpand');
      }
      controlsContainer.insertAdjacentHTML('beforeEnd', "<span class=\"ZU-expand-thread-container ZU-delete-on-threadexpand\"> | <a href=\"".concat(href, "\" onclick=\"return false\" class=\"ZU-expand-thread\">\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C</a></span>"));
    }
    controlsContainer.insertAdjacentHTML('beforeEnd', "<span class=\"ZU-update-thread-container\"> | <a href=\"".concat(href, "\" onclick=\"return false\" class=\"ZU-update-thread\">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</a></span>"));
    controlsContainer.classList.add('ZU-thread-controls');
  }
  var op = threadDOM.querySelector('.post-op'),
    opPostID = op.querySelector('.post-id');
  op.querySelector('.post-header').classList.add('ZU-hide-board-by-op-container');
  opPostID.insertAdjacentHTML('afterBegin', "<span title=\"\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0441\u043A\u0443\" class=\"post-button ZU-hide-board-by-op\"><i class=\"fa fa-minus-square-o\"></i></span>");
}
var settingsPanel = {
  modules: {
    checkbox: {
      build: function build(checkbox) {
        return "\n        <li title=\"".concat(checkbox.description || checkbox.title, "\">\n          <label for=\"ZU-SP-").concat(checkbox.id, "\"><input data-id=\"").concat(checkbox.id, "\" id=\"ZU-SP-").concat(checkbox.id, "\" type=\"checkbox\"").concat(settings[checkbox.id] ? ' checked' : '', "> ").concat(checkbox.title, "</label>\n        </li>");
      },
      events: {
        change: function change(ev) {
          var checkbox = ev.target;
          settings[checkbox.dataset.id] = checkbox.checked;
        }
      }
    },
    slider: {
      build: function build(slider) {
        return "\n        <li title=\"".concat(slider.description || slider.title, "\">\n          <label for=\"ZU-SP-").concat(slider.id, "\">").concat(slider.title, "\n            <span class=\"ZU-SP-slider-value\">(").concat(slider.displayValue ? slider.displayValue(settings[slider.id]) : settings[slider.id], ")</span>\n            <input type=\"range\" id=\"ZU-SP-").concat(slider.id, "\" data-id=\"").concat(slider.id, "\" value=\"").concat(settings[slider.id], "\" min=\"").concat(slider.min, "\" max=\"").concat(slider.max, "\" step=\"").concat(slider.step, "\">\n          </label>\n        </li>");
      },
      events: {
        change: function change(ev, sliderObj) {
          var sliderDOM = ev.target,
            val = +sliderDOM.value;
          settings[sliderObj.id] = val;
        },
        input: function input(ev, sliderObj) {
          var sliderDOM = ev.target,
            val = +sliderDOM.value;
          sliderDOM.findParent('label').querySelector('.ZU-SP-slider-value').innerText = "(".concat(sliderObj.displayValue(val), ")");
        }
      }
    }
  },
  controls: [{
    type: 'checkbox',
    id: 'momInRoom',
    title: "Мамка в комнате",
    description: "Маскировать все картинки"
  }, {
    type: 'checkbox',
    id: 'unhideSpoilers',
    title: "Раскрыть все спойлеры",
    description: "Раскрыть все спойлеры, чтобы видеть их содержимое без наведения"
  }, {
    type: 'checkbox',
    id: 'unmaskOnHover',
    title: "Раскрывать NSFW по наведению",
    description: "Раскрывать замаскированные картинки по наведению"
  }, {
    type: 'checkbox',
    id: 'thumbNoScroll',
    title: "Разворот без скролла",
    description: "Не скроллить при разворачивании картинок"
  }, {
    type: 'checkbox',
    id: 'fixUkrSpelling',
    title: "Исправлять украинские буквьi",
    description: "Производить замену «є»→«э», «ьi»→«ы»"
  }, {
    type: 'checkbox',
    id: 'legacyMediaViewer',
    title: "Дефолтный просмотрщик медиа",
    description: "Использовать оригинальный просмотрщик медиа"
  }, {
    type: 'slider',
    id: 'updateInterval',
    title: "Период обновления треда",
    min: 0,
    step: 5,
    max: 60,
    condition: function condition() {
      return state.type === "thread";
    },
    displayValue: function displayValue(val) {
      return val ? "".concat(val, " \u0441") : "Выкл.";
    }
  }, {
    type: 'slider',
    id: 'referenceLimit',
    title: "Скрывать флуд ссылками",
    description: "Скрывать посты, ссылающимися на большое количество постов",
    min: 0,
    step: 1,
    max: 50,
    displayValue: function displayValue(val) {
      return val ? ">= ".concat(val) : "Выкл.";
    }
  }, {
    type: 'checkbox',
    id: 'catalogMode',
    title: "Режим каталога",
    description: "Отображать треды в виде каталога",
    condition: function condition() {
      return catalog.isApplicable;
    }
  }, {
    type: 'checkbox',
    id: 'turnOffSnow',
    title: "Убрать снег",
    description: "Не использовать анимацию в качестве фона. Имеет смысл только в период нового года (~15 декабря - ~14 января)"
  }],
  install: function install() {
    var _this19 = this;
    var controls = this.controls.filter(function (control) {
      return !control.condition || control.condition();
    });
    document.querySelector('.headmenu').insertAdjacentHTML('beforeEnd', "\n      <div class=\"dropdown-menu ZU-settings-dropdown ZU-dropdown\" id=\"ZU-settings\">\n        <div id=\"ZU-settings-main\" class=\"ZU-top-menu-page\">\n          <ul class=\"ZU-settings-list\">\n            ".concat(controls.reduce(function (htm, control) {
      return htm + _this19.modules[control.type].build(control);
    }, ''), "\n          </ul>\n          <button class=\"btn btn-default btn-xs ZU-enter-autohide-top ZU-menu-fullsize-btn\"><span>\u0410\u0432\u0442\u043E\u0441\u043A\u0440\u044B\u0442\u0438\u0435</span></button>\n          <button style=\"margin: 10px 0 2px 0; width: 100%\" class=\"btn btn-default btn-xs ZU-prepare-archive ZU-menu-fullsize-btn\" title=\"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E\"><span>\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span></button>\n          <label style=\"display: block\" for=\"ZU-archive-with-pictures\"><input id=\"ZU-archive-with-pictures\" type=\"checkbox\" checked> \u0441 \u043F\u043E\u043B\u043D\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u043C\u0438</label>\n        </div>\n        <div id=\"ZU-top-autohide\" class=\"ZU-top-menu-page\" hidden>\n          <div class=\"btn-group\">\n            <button class=\"btn btn-default btn-xs ZU-exit-autohide-top\"><span><i class=\"fa fa-chevron-left\"></i> <i class=\"fa fa-save\"></i> \u041D\u0430\u0437\u0430\u0434</span></button>\n            <!-- button class=\"btn btn-default btn-xs\"><span><i class=\"fa fa-undo\"></i></span></button -->\n          </div>\n          <div class=\"btn-group ZU-autohide-type-switch ZU-radio-btn-group\" data-toggle=\"buttons\">\n            <label class=\"btn btn-xs btn-default active\">\n              <input type=\"radio\" name=\"ZU-autohide-type\" value=\"txt\" autocomplete=\"off\" checked> \u0422\u0435\u043A\u0441\u0442\n            </label>\n            <label class=\"btn btn-xs btn-default\">\n              <input type=\"radio\" name=\"ZU-autohide-type\" value=\"img\" autocomplete=\"off\"> \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438\n            </label>\n          </div>\n          <br>\n          <textarea id=\"ZU-autohide-text\" cols=\"30\" rows=\"10\" class=\"form-control ZU-autohide-content\"></textarea>\n          <div id=\"ZU-autohide-images\" class=\"ZU-autohide-content\" hidden>\n            ").concat(autohideAtt.getListHTML(), "\n          </div>\n        </div>\n      </div>"));
    var spellsVal = settings.autohide.map(function (spell) {
        return _typeof(spell) === 'object' ? "/".concat(spell.source, "/").concat(spell.flags) : spell;
      }).join('\n'),
      autohideTextarea = document.querySelector('#ZU-autohide-text');
    if (spellsVal) autohideTextarea.value = spellsVal;
    function unwrap() {
      autohideTextarea.setAttribute('wrap', !!autohideTextarea.value.length ? 'off' : 'soft');
    }
    autohideTextarea.addEventListener('input', unwrap);
    unwrap();
    [].forEach.call(document.querySelectorAll('input[name=ZU-autohide-type]'), function (input) {
      input.addEventListener('change', function () {
        if (this.value == 'img') {
          fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-autohide-text', '#ZU-autohide-images');
        }
        if (this.value == 'txt') {
          fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-autohide-images', '#ZU-autohide-text');
        }
      });
    });
    controls.forEach(function (control) {
      if (state.condition && !state.condition()) return;
      var allEvents = Object.assign(Object.create(_this19.modules[control.type].events || {}), control.events || {}),
        controlDOM = document.querySelector("#ZU-SP-".concat(control.id));
      if (!controlDOM) return;
      var _loop = function _loop(eventName) {
        controlDOM.addEventListener(eventName, function (ev) {
          return allEvents[eventName](ev, control);
        });
      };
      for (var eventName in allEvents) {
        _loop(eventName);
      }
    });
  }
};
var ZURouter = {
  currentRoute: 'initial',
  enter: {
    // account: autohide.awaitInstall.bind(autohide),
    home: boardHider.enable.bind(boardHider)
  },
  leave: {
    home: boardHider.disable.bind(boardHider),
    thread: refresher.timeoutStop
  },
  handleRoute: function handleRoute(type) {
    catalog.toggle();
    if (this.enter.hasOwnProperty(type)) {
      this.enter[type]();
    }
    if (type !== this.currentRoute && this.leave.hasOwnProperty(this.currentRoute)) {
      this.leave[this.currentRoute]();
    }
    this.currentRoute = type;
  }
};
function forAllNodes(selFnMap) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var config = Object.assign({
      autoStart: true,
      // whether or not observer shall start observing immediately
      subtree: false,
      childList: true,
      queryChildren: false //whether or not inserted nodes shall be searched for selector-matching elements
    }, options),
    afterClass;
  // Setup observer
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      Array.prototype.forEach.call(mutation.addedNodes, function (node) {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        selFnMap.forEach(function (sf) {
          if (node.matches(sf.selector)) {
            sf.fn(node);
          } else if (config.queryChildren || sf.queryChildren) {
            var foundChildren = node.querySelectorAll(sf.selector);
            if (foundChildren) {
              Array.prototype.forEach.call(foundChildren, function (childNode) {
                sf.fn(childNode);
              });
            }
          }
        });
      });
    });
  });
  function start() {
    // Handle existing nodes
    selFnMap.forEach(function (sf) {
      var existingNodes = parent.querySelectorAll(sf.selector);
      Array.prototype.forEach.call(existingNodes, function (node) {
        sf.fn(node);
      });
    });
    // Handle future nodes
    observer.observe(parent, config);
  }
  if (config.autoStart) {
    start();
  }
  return {
    start: start,
    stop: function stop() {
      return observer.disconnect();
    }
  };
}
function externallyResolvingPromise() {
  var promiseResolve,
    promiseReject,
    promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
  return {
    promise: promise,
    resolve: promiseResolve,
    reject: promiseReject
  };
}

// Array.prototype.includes() polyfill
// https://github.com/kevlatus/polyfill-array-includes/blob/master/array-includes.js
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

// Element.matches() polyfill
;
[Element.prototype, Text.prototype].forEach(function (e) {
  e.matches || (e.matches = e.matchesSelector || function (selector) {
    var _this20 = this;
    var matches = document.querySelectorAll(selector);
    return Array.prototype.some.call(matches, function (e) {
      return e === _this20;
    });
  });
  e.findParent = function (selector) {
    var node = this;
    while (node && !node.matches(selector)) {
      node = node.parentNode;
      if (!node.matches) return null;
    }
    return node;
  };
})

// event path polyfill
;
(function (e) {
  if (e.hasOwnProperty('path')) return;
  Object.defineProperty(e, 'path', {
    get: function get() {
      if (!this.target) return [];
      if (this.pathCached) return this.pathCached;
      var path = [],
        node = this.target;
      while (node && node != document.body) {
        path.push(node);
        node = node.parentNode;
      }
      this.pathCached = path;
      return path;
    },
    enumerable: true,
    configurable: false
  });
})(Event.prototype);
function setupVueGetter() {
  Object.defineProperty(Element.prototype, '__vue__', {
    get: function get() {
      var stack = [app],
        child,
        found = null;
      while (stack.length && !found) {
        child = stack.pop();
        if (child && child.$el && child.$el === this) {
          found = child;
        } else if (child && child.$children) stack = stack.concat(child.$children);
      }
      return found;
    },
    enumerable: true,
    configurable: false
  });
}

// event path polyfill
function getEventPath(e) {
  var path = [],
    node = e.target;
  while (node != document.body) {
    path.push(node);
    node = node.parentNode;
  }
  return path;
}
function getPosts(threadID, after, before) {
  return new Promise(function (resolve, reject) {
    fetch("".concat(getOrigin(), "/api/thread?thread=").concat(threadID).concat(after ? '&after=' + after : ''), {
      credentials: 'same-origin'
    }).then(function (res) {
      if (res.ok) {
        res.json().then(function (resObj) {
          if (resObj.posts && resObj.posts.length) {
            var posts = resObj.posts;
            if (before) {
              posts = posts.filter(function (post) {
                return +post.id < +before;
              });
            }
            resolve(posts);
          } else {
            resolve([]);
          }
        })["catch"](function (e) {
          return reject(e);
        });
      } else {
        res.text().then(function (text) {
          return console.warn('[0u] Bad response: ', text);
        })["catch"](nop);
        reject(res.status);
      }
    })["catch"](function (e) {
      return reject(e);
    });
  });
}
function handleNetworkError(err) {
  nativeAlert('error', 'Сетевая ошибка');
  if (err) console.error(err);
}

// GUI alerts
// Types available: info, error, success
function nativeAlert(type, message) {
  type = 'alert' + type.charAt(0).toUpperCase() + type.slice(1);
  app.$bus.emit(type, message);
}
function LSfetchJSON(key) {
  var val = null,
    data = localStorage[key];
  if (typeof data !== 'undefined') {
    try {
      val = JSON.parse(data);
    } catch (e) {
      console.error(e);
      localStorage.removeItem(key);
    }
  }
  return val;
}
function getOrigin() {
  return "".concat(document.location.protocol, "//").concat(document.location.host);
}
function start() {
  var sidebarExtPromise = externallyResolvingPromise(),
    contentExtPromise = externallyResolvingPromise();
  Promise.all([sidebarExtPromise.promise, contentExtPromise.promise]).then(function () {
    appObserver.stop();
    forAllNodes([{
      selector: '#content > div',
      fn: onFreshContent
    }], document.querySelector('#content'));
    forAllNodes([{
      selector: '.post-referenced-by',
      fn: function fn(badRefBlock) {
        var links = badRefBlock.children;
        if (links.length >= referenceCollapsing.minPostsToCollapse) {
          goodRefBlock = badRefBlock.cloneNode(true);
          badRefBlock.hidden = true;
          badRefBlock.classList.add('ZU-bad-ref-block');
          goodRefBlock.classList.add('ZU-good-ref-block');
          while (goodRefBlock.children.length > referenceCollapsing.postsToDisplay) {
            goodRefBlock.lastChild.remove();
          }
          goodRefBlock.lastChild.insertAdjacentHTML('beforeend', "<a class=\"ZU-expand-refs\"> \u0438 \u0435\u0449\u0451 ".concat(links.length - referenceCollapsing.postsToDisplay, "...</a>"));
          badRefBlock.parentElement.appendChild(goodRefBlock);
        }
      }
    }], document.querySelector('#content'), {
      subtree: true,
      queryChildren: true
    });
  });
  appObserver = forAllNodes([{
    selector: '#sidebar',
    fn: function fn() {
      return sidebarExtPromise.resolve();
    }
  }, {
    selector: '#content',
    fn: function fn() {
      return contentExtPromise.resolve();
    }
  }], document.body, {
    subtree: true,
    queryChildren: true
  });
  forAllNodes([{
    selector: '.sidebar-logo',
    fn: NullRestyler.addControls.bind(NullRestyler)
  }], document.body, {
    subtree: true,
    queryChildren: true
  });
  Object.keys(eventDispatcher).forEach(function (evType) {
    document.addEventListener(evType, eventDispatcher[evType], true);
  });
  MediaViewer.setupKeyNavigation();
}
start();
function onFreshContent() {
  var _document$querySelect7;
  try {
    state.type = app.$router.currentRoute.name;
  } catch (e) {
    console.warn('[0u] Unable to determine app state', e);
  }
  content = document.querySelector('#content > div');
  if (state.type === 'thread') singleThread = (_document$querySelect7 = document.querySelector('.post-op')) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.parentNode.parentNode;
  if (!state.initialized) {
    init();
  } else {
    contentVue = content.__vue__;
    if (state.type === 'thread' && singleThread) singleThreadVue = singleThread.__vue__;
  }
  alerts = document.querySelector('.alerts-wrapper');
  alertsVue = alerts.__vue__;
  setupAlertInterceptor();
  addSettingsButtons();
  settingsPanel.install();
  youtubeStuff.installSelect();
  ZURouter.handleRoute(state.type);
  refresher.init();
  if (state.type == 'home') formOnZeroPage.init();
  darkMode.addButton();
}
function freezeSize(el) {
  var bcr = el.getBoundingClientRect();
  if (el.style.width) {
    el.__frozenWidth = el.style.width;
  } else {
    el.style.width = "".concat(bcr.width, "px");
    el.__frozenWidth = null;
  }
  if (el.style.height) {
    el.__frozenHeight = el.style.height;
  } else {
    el.style.height = "".concat(bcr.height, "px");
    el.__frozenHeight = null;
  }
}
function unfreezeSize(el) {
  el.style.height = el.__frozenHeight || null;
  el.style.width = el.__frozenWidth || null;
}
function fancyResizeXfade(container, hide, show) {
  // !!! This function needs proper CSS to be set up

  hide = container.querySelectorAll(hide);
  show = container.querySelectorAll(show);
  var foEl, fiEl

    // apply transformations
  ;
  [].forEach.call(hide, function (el) {
    return el.hidden = true;
  });
  [].forEach.call(show, function (el) {
    el.hidden = false;
    freezeSize(el);
  });

  // memoize resulting size
  var _ref = [container.offsetWidth, container.offsetHeight],
    endWidth = _ref[0],
    endHeight = _ref[1];
  [].forEach.call(hide, function (el) {
    el.hidden = false;
    setTimeout(function () {
      el.classList.add('fancy-fadeout');
      freezeSize(el);
    }, 0);
    foEl = el;
  });
  [].forEach.call(show, function (el) {
    el.hidden = true;
    el.classList.add('fancy-fadein');
    fiEl = el;
  });
  setTimeout(function () {
    // freeze current size
    freezeSize(container);

    // run resize
    container.classList.add('fancy-resize');
    setTimeout(function () {
      Object.assign(container.style, {
        height: "".concat(endHeight, "px"),
        width: "".concat(endWidth, "px")
      });
    }, 0);

    // get timeline points from CSS
    var _map$map = [[foEl, 'transitionDuration'], [container, 'transitionDelay'], [container, 'transitionDuration'], [fiEl, 'animationDelay'], [fiEl, 'animationDuration']].map(function (ep) {
        return getComputedStyle(ep[0])[ep[1]];
      }).map(function (prop) {
        return +prop.split('s')[0] * 1000;
      }),
      _map$map2 = _slicedToArray(_map$map, 5),
      fadeOutDuration = _map$map2[0],
      resizeDelay = _map$map2[1],
      resizeDuration = _map$map2[2],
      fadeInDelay = _map$map2[3],
      fadeInDuration = _map$map2[4];

    // hide and show elements @ appropriate timepoints
    setTimeout(function () {
      ;
      [].forEach.call(hide, function (el) {
        el.hidden = true;
      });
      [].forEach.call(show, function (el) {
        el.hidden = false;
      });
    }, fadeOutDuration);

    // clean up
    setTimeout(function () {
      container.classList.remove('fancy-resize');
      unfreezeSize(container);
      [].forEach.call(hide, function (el) {
        el.classList.remove('fancy-fadeout');
        unfreezeSize(el);
      });
      [].forEach.call(show, function (el) {
        el.classList.remove('fancy-fadein');
        unfreezeSize(el);
      });
    }, resizeDelay + resizeDuration + fadeInDelay + fadeInDuration);
  }, 0);
}
var formOnZeroPage = {
  defaultBoard: 'b',
  init: function init() {
    var _this21 = this;
    var buttonsRight = document.querySelector('.headmenu-buttons-right');
    buttonsRight.insertAdjacentHTML('afterbegin', "\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-primary ZU-toggleNewThreadForm\"><i class=\"fa fa-pencil-square-o\"></i> \n          <span class=\"btn-caption hidden-xs\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0434</span>\n        </button>\n      </div>");
    buttonsRight.querySelector('.ZU-toggleNewThreadForm').onclick = function () {
      return _this21.toggleNewThreadForm();
    };
    // prevent title replacement
    var title = document.querySelector('.headmenu-title'),
      tSpan = title.querySelector('span'),
      staticTitle = tSpan.outerHTML;
    tSpan.style.display = 'none';
    title.insertAdjacentHTML('beforeEnd', staticTitle);
    // board selector
    var sel = " <i class=\"fa fa-arrow-right\"></i><select class=\"form-control ZU-boardlist-select\">",
      opts = '',
      optSel = '',
      optDefault = '';
    document.querySelector('#sidebar').__vue__.boardList.slice().sort(function (a, b) {
      return a.dir < b.dir ? -1 : 1;
    }).forEach(function (board) {
      var name = board.name.length > 40 ? board.name.slice(0, 40 - 3) + '...' : board.name,
        opt = "<option value=\"".concat(board.dir, "\">").concat(board.dir, " \u2014 ").concat(name, "</option>");
      if (board.dir == settings.selectedBoard && settings.selectedBoard != _this21.defaultBoard) optSel = opt;else if (board.dir == _this21.defaultBoard) optDefault = opt;else opts += opt;
    });
    sel += optSel + optDefault + opts + '</select>';
    document.querySelector('.new-thread-form .btn-primary').insertAdjacentHTML('afterEnd', sel);
    document.querySelector('.ZU-boardlist-select').addEventListener('change', function () {
      document.querySelector('.new-thread-form').parentElement.__vue__.board.dir = this.value;
      settings.selectedBoard = this.value;
      settings.save();
    });
  },
  toggleNewThreadForm: function toggleNewThreadForm() {
    var form = document.querySelector('.new-thread-form');
    form.classList.add('ZU-zeropage-newthreadform');
    form.parentElement.__vue__.board.dir = document.querySelector('.ZU-boardlist-select').value;
    if (form.style.display == 'none') {
      form.style.display = null;
    } else {
      form.style.display = 'none';
    }
  }
};
var textSteganography = {
  charMap: [0x200b, 0x200c, 0x200d, 0x200e, 0x200f].map(function (n) {
    return String.fromCharCode(n);
  }),
  encode: function encode(txt) {
    var _this22 = this;
    return txt.split('').map(function (_char) {
      return _char.charCodeAt(0).toString(4).split('').map(function (digit) {
        return _this22.charMap[digit];
      }).join('');
    }).join(this.charMap[4]);
  },
  decode: function decode(htm) {
    var _this23 = this;
    var startTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var endTag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var safe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return htm.replace(/[\u200b\u200c\u200d\u200e\u200f]+/g, function (match) {
      var decoded = match.split(_this23.charMap[4]).map(function (chars) {
        return String.fromCharCode(parseInt(chars.split('').map(function (_char2) {
          return _this23.charMap.indexOf(_char2);
        }).join(''), 4));
      }).join('');
      if (safe) {
        decoded = safe_tags(decoded);
      }
      return startTag + decoded + endTag;
    });
  },
  hideSelection: function hideSelection(area) {
    area.value = area.value.slice(0, area.selectionStart) + this.encode(this.decode(area.value.slice(area.selectionStart, area.selectionEnd))) + area.value.slice(area.selectionEnd);
    touchTextarea(area);
  },
  removeSpoilers: function removeSpoilers(area) {
    area.value = this.decode(area.value);
    touchTextarea(area);
  }
};
function safe_tags(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Insert adjacent HTML and immediately return the inserted element
Element.prototype._ins = function () {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'beforeend';
  var html = arguments.length > 1 ? arguments[1] : undefined;
  this.insertAdjacentHTML(position, html);
  position = position.toLowerCase();
  if (position == 'afterbegin') return this.firstElementChild;else if (position == 'beforeend') return this.lastElementChild;else if (position == 'beforebegin') return this.previousElementSibling;else return this.nextElementSibling;
};
function preparePageSave() {
  var _document$body$queryS;
  var withPictures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  // Remove sidebar
  document.body.classList.add('ZU-sidebar-hidden');
  document.body.querySelector('#sidebar').remove();
  // Remove post footers
  document.body.querySelectorAll('.post-footer').forEach(function (foot) {
    return foot.innerHTML = '';
  });
  // Remove unnecessary buttons buttons 
  document.body.querySelectorAll('.headmenu-buttons').forEach(function (buttonGroup) {
    return buttonGroup.remove();
  });
  (_document$body$queryS = document.body.querySelector('.threads .btn-group')) === null || _document$body$queryS === void 0 ? void 0 : _document$body$queryS.remove();
  // Remove scripts
  document.body.querySelectorAll('script').forEach(function (scr) {
    return scr.remove();
  });
  // Inject some CSS
  injector.inject('zu-offline', "\n    .headmenu-title {\n      left: 10px!important\n    }\n  ");
  // Add info line
  var date = new Date(),
    year = date.getFullYear(),
    _map = [date.getDate(), date.getMonth() + 1].map(function (n) {
      n = n.toString();
      if (n.length < 2) n = '0' + n;
      return n;
    }),
    _map2 = _slicedToArray(_map, 2),
    day = _map2[0],
    month = _map2[1];
  document.querySelector('#content div').insertAdjacentHTML('beforeEnd', "<small><i>\n    \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \n    <a href=\"https://juribiyan.github.io/0chan-utilities/\">0chan Utilities</a>\n    @ ".concat(day, ".").concat(month, ".").concat(year, "<br>\n    \u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B:\n    <a href=\"").concat(document.location.href, "\">").concat(document.location.href, "</a>\n  </i></small>"));
  // Replace thumbnails with big pictures
  if (!withPictures) return;
  document.body.querySelectorAll('.post-img').forEach(function (fig) {
    var _fig$querySelector, _fig$querySelector2;
    if (fig.querySelector('.post-embed')) return;
    var uid = fig.__vue__._uid;
    (_fig$querySelector = fig.querySelector('.ZU-thumb-overlay')) === null || _fig$querySelector === void 0 ? void 0 : _fig$querySelector.remove();
    (_fig$querySelector2 = fig.querySelector('.ZU-hide-attachment')) === null || _fig$querySelector2 === void 0 ? void 0 : _fig$querySelector2.remove();
    var a = fig.querySelector('a'),
      img = fig.querySelector('.post-img-thumbnail'),
      container = a.parentElement;
    container.insertAdjacentHTML('beforeEnd', "<label for=\"ZU-offline-pic-switcher-".concat(uid, "\">\n      <input type=\"checkbox\" id=\"ZU-offline-pic-switcher-").concat(uid, "\" class=\"ZU-offline-pic-switcher\">\n      <img src=\"").concat(a.href, "\" class=\"ZU-offline-pic-thumb\" style=\"").concat(img.getAttribute('style'), "\">\n      <img src=\"").concat(a.href, "\" class=\"ZU-offline-pic-full\">\n    </label>"));
    a.remove();
  });
  injector.inject('zu-offline-pic-expanding', "\n    .ZU-offline-pic-switcher,\n    .ZU-offline-pic-switcher:not(:checked) + .ZU-offline-pic-thumb + .ZU-offline-pic-full,\n    .ZU-offline-pic-switcher:checked + .ZU-offline-pic-thumb {\n      display: none\n    }\n  ");
}