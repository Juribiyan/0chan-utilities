// ==UserScript==
// @name         0chan Utilities
// @namespace    https://www.0chan.pl/userjs/
// @version      2.4.0
// @description  Various 0chan utilities
// @updateURL    https://github.com/devarped/0chan-utilities/raw/master/src/0chan-utilities.user.js
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
// @grant        none
// @icon         https://raw.githubusercontent.com/devarped/0chan-utilities/master/icon.png
// ==/UserScript==

const icons =
  `<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <symbol id="i-logo" viewBox="0 0 32 32">
  <path d="M19.454 21.933c-0.59 0.339-0.39 1.151-0.322 1.371 0.011 0.033-0.006 0.068-0.038 0.080-0.222 0.092-0.448 0.174-0.678 0.245-0.032 0.010-0.067-0.005-0.080-0.037-0.092-0.213-0.464-0.962-1.136-0.845-0.672 0.118-0.763 0.948-0.776 1.18-0.001 0.034-0.030 0.061-0.064 0.063-0.24 0.011-0.481 0.011-0.721 0-0.034-0.001-0.061-0.028-0.064-0.063-0.013-0.232-0.104-1.062-0.776-1.18-0.671-0.117-1.044 0.633-1.135 0.845-0.014 0.032-0.049 0.047-0.081 0.037-0.229-0.071-0.456-0.152-0.678-0.245-0.032-0.013-0.049-0.047-0.038-0.080 0.067-0.221 0.268-1.032-0.322-1.371-0.591-0.338-1.2 0.241-1.359 0.41-0.024 0.025-0.063 0.027-0.090 0.007-0.191-0.145-0.376-0.299-0.553-0.459-0.025-0.024-0.028-0.061-0.008-0.089 0.14-0.185 0.61-0.88 0.17-1.398-0.438-0.517-1.209-0.181-1.417-0.076-0.031 0.015-0.068 0.005-0.087-0.024-0.13-0.201-0.25-0.407-0.36-0.62-0.017-0.029-0.006-0.066 0.022-0.085 0.196-0.126 0.875-0.621 0.643-1.257-0.234-0.636-1.075-0.58-1.306-0.553-0.034 0.005-0.066-0.018-0.073-0.051-0.052-0.233-0.095-0.468-0.125-0.704-0.005-0.034 0.018-0.065 0.051-0.073 0.228-0.052 1.037-0.286 1.037-0.962s-0.809-0.91-1.037-0.963c-0.033-0.007-0.056-0.039-0.051-0.072 0.031-0.236 0.073-0.471 0.125-0.705 0.007-0.033 0.039-0.054 0.073-0.051 0.231 0.029 1.072 0.083 1.305-0.553s-0.446-1.129-0.642-1.255c-0.029-0.019-0.039-0.056-0.022-0.086 0.11-0.211 0.23-0.418 0.36-0.619 0.018-0.030 0.056-0.039 0.087-0.024 0.208 0.105 0.979 0.441 1.417-0.077 0.438-0.517-0.029-1.213-0.17-1.397-0.020-0.028-0.017-0.066 0.008-0.089 0.177-0.162 0.361-0.315 0.553-0.459 0.027-0.022 0.065-0.018 0.088 0.007 0.16 0.169 0.769 0.746 1.36 0.409s0.39-1.151 0.322-1.371c-0.011-0.033 0.006-0.067 0.038-0.080 0.222-0.092 0.448-0.174 0.678-0.245 0.032-0.010 0.067 0.006 0.080 0.037 0.092 0.213 0.464 0.962 1.136 0.845 0.672-0.118 0.763-0.948 0.776-1.18 0.002-0.034 0.030-0.060 0.064-0.063 0.24-0.011 0.481-0.011 0.721 0 0.034 0.002 0.063 0.028 0.064 0.063 0.013 0.232 0.104 1.062 0.776 1.18 0.671 0.117 1.044-0.632 1.136-0.845 0.013-0.031 0.048-0.047 0.080-0.037 0.23 0.071 0.456 0.152 0.678 0.245 0.032 0.013 0.049 0.047 0.038 0.080-0.067 0.221-0.268 1.034 0.322 1.371s1.2-0.24 1.36-0.409c0.022-0.025 0.061-0.029 0.088-0.008 0.191 0.145 0.376 0.299 0.553 0.46 0.025 0.022 0.029 0.060 0.008 0.087-0.14 0.185-0.608 0.88-0.17 1.398s1.209 0.182 1.417 0.077c0.031-0.015 0.068-0.006 0.086 0.024 0.13 0.201 0.25 0.407 0.36 0.619 0.017 0.029 0.007 0.067-0.022 0.086-0.195 0.125-0.875 0.62-0.642 1.255s1.074 0.581 1.305 0.553c0.034-0.005 0.066 0.018 0.073 0.051 0.052 0.232 0.095 0.467 0.125 0.704 0.005 0.034-0.018 0.066-0.051 0.073-0.228 0.053-1.037 0.287-1.037 0.963s0.809 0.911 1.037 0.962c0.033 0.007 0.056 0.039 0.051 0.073-0.031 0.236-0.073 0.471-0.125 0.704-0.007 0.033-0.039 0.056-0.073 0.051-0.231-0.027-1.072-0.083-1.305 0.553s0.446 1.13 0.642 1.257c0.029 0.018 0.039 0.056 0.022 0.085-0.11 0.211-0.23 0.418-0.36 0.62-0.018 0.029-0.056 0.038-0.086 0.023-0.208-0.104-0.979-0.441-1.417 0.077-0.438 0.518 0.029 1.213 0.17 1.398 0.020 0.027 0.017 0.065-0.008 0.089-0.177 0.16-0.361 0.314-0.553 0.459-0.027 0.020-0.065 0.018-0.088-0.008-0.16-0.169-0.769-0.746-1.36-0.409zM16 14.106c0.014 0 0.028 0 0.041 0 0.193 0.005 0.361-0.061 0.496-0.197l1.987-1.97c0.189-0.188 0.266-0.434 0.215-0.695-0.051-0.26-0.215-0.461-0.46-0.564-0.7-0.294-1.47-0.458-2.278-0.458-3.218 0-5.827 2.587-5.827 5.778 0 0.802 0.164 1.565 0.462 2.259 0.105 0.243 0.307 0.407 0.569 0.456 0.262 0.051 0.511-0.024 0.7-0.211l1.987-1.97c0.136-0.136 0.203-0.301 0.199-0.493 0-0.014-0.001-0.027-0.001-0.041 0-1.046 0.855-1.894 1.91-1.894zM17.908 15.958c0 0.014 0.001 0.027 0.001 0.041 0 1.045-0.855 1.893-1.91 1.893-0.014 0-0.027 0-0.041 0-0.193-0.005-0.36 0.063-0.496 0.197l-1.987 1.97c-0.189 0.188-0.266 0.435-0.215 0.695s0.215 0.461 0.46 0.564c0.7 0.296 1.47 0.458 2.279 0.458 3.217 0 5.826-2.587 5.826-5.778 0-0.802-0.164-1.565-0.462-2.26-0.105-0.243-0.307-0.405-0.569-0.456s-0.511 0.025-0.7 0.213l-1.986 1.97c-0.136 0.135-0.203 0.301-0.2 0.492zM16 14.991c-0.562 0-1.017 0.451-1.017 1.009s0.455 1.008 1.017 1.008c0.562 0 1.017-0.451 1.017-1.008s-0.455-1.009-1.017-1.009z"></path>
  </symbol>
  <symbol id="i-1chan" viewBox="0 0 32 32">
  <path d="M15.001 2.001c-8.284 0-15 6.267-15 14 0 7.731 6.716 13.998 15 13.998s15-6.267 15-13.998c0-7.734-6.716-14-15-14zM18.001 9.999l1.998 1.002v9.999l-1.998 0.999v-12zM16 8.001h-2.001l-6 4.998 4.002 2.001v9h3.999v-15.999zM15.001 5.735c6.073 0 10.998 4.597 10.998 10.266 0 5.667-4.925 10.264-10.998 10.264s-10.998-4.597-10.998-10.264c0-5.669 4.925-10.266 10.998-10.266z"></path>
  </symbol>
  <symbol id="i-spinner" viewBox="0 0 32 32">
  <path d="M23.957 20.347c-0.113-0.066-0.198-0.113-0.31-0.18-1.528-0.735-2.461-2.367-2.447-4.088 0.005-1.767 1.030-3.354 2.608-4.209 1.143-0.617 2.105-1.639 2.61-3.037 0.765-2.116 0.13-4.592-1.571-6.066-2.712-2.324-6.729-1.531-8.432 1.434-0.569 0.987-0.794 2.097-0.727 3.153 0.118 1.684-0.763 3.281-2.209 4.1l-0.059 0.040c-1.521 0.886-3.382 0.86-4.852-0.104-0.35-0.239-0.758-0.439-1.172-0.567-2.135-0.784-4.618-0.118-6.075 1.634-2.286 2.738-1.479 6.741 1.443 8.437 1.856 1.075 4.074 0.931 5.766-0.12 1.439-0.935 3.262-1.044 4.752-0.18l0.224 0.13c1.49 0.862 2.279 2.487 2.22 4.221-0.106 2.008 0.924 3.996 2.778 5.071 2.7 1.566 6.146 0.59 7.648-2.152 1.318-2.622 0.387-6.021-2.197-7.518zM4.28 18.198c-1.153-0.669-1.573-2.154-0.89-3.338 0.666-1.157 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.695 1.141-2.173 1.564-3.326 0.895zM14.783 18.115c-1.153-0.669-1.573-2.152-0.89-3.338 0.68-1.186 2.145-1.58 3.326-0.895 1.179 0.685 1.571 2.154 0.89 3.338-0.683 1.186-2.173 1.564-3.326 0.895zM19.977 9.085c-1.153-0.669-1.573-2.152-0.893-3.338 0.683-1.186 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.68 1.186-2.173 1.564-3.323 0.895zM19.963 27.289c-1.153-0.669-1.571-2.154-0.89-3.34 0.666-1.155 2.145-1.578 3.326-0.893 1.153 0.669 1.573 2.152 0.89 3.338-0.666 1.157-2.145 1.578-3.326 0.895z"></path>
  </symbol>
  <symbol id="i-hirudotron" viewBox="0 0 32 32">
  <path d="M22.555 13.689c0.63-1.298 0.591-2.453 0.934-3.528 0.317-0.997 1.451-2.906 2.639-1.72 0.637 0.637 0.48 1.715 0.758 2.011h0c0.021 0.027 0.047 0.053 0.076 0.078 0.913 0.763 4.118 0.537 4.020-0.559-0.012-0.136-0.079-0.284-0.218-0.425h0l-0.002-0.001c-0.041-0.041-0.087-0.082-0.14-0.12-0.188-0.156-0.439-0.364-0.829-0.796-0.644-0.712-0.869-2.26-1.597-3.048-1.556-1.689-3.855-1.648-5.417-0.086-0.913 0.913-1.23 2.13-3.011 3.911-0.209 0.21-0.445 0.387-0.692 0.539v0c-1.178 0.719-2.611 0.828-2.611 0.828s1.424-0.229 2.538-1.049c-0.473-1.363-1.316-2.152-1.834-3.155-0.48-0.929-1.029-3.081 0.65-3.081 0.901 0 1.552 0.874 1.957 0.886l0-0c0.035 0.005 0.070 0.005 0.108 0.002 1.185-0.106 3.291-2.533 2.447-3.237-0.105-0.087-0.258-0.145-0.454-0.146v-0l-0.002 0c-0.058-0-0.119 0.004-0.184 0.015-0.244 0.022-0.567 0.052-1.149 0.024-0.959-0.048-2.212-0.983-3.284-1.026-2.294-0.093-3.891 1.561-3.891 3.769 0 1.292 0.636 2.376 0.636 4.895 0 0.296-0.041 0.588-0.11 0.87-0.325 1.342-1.26 2.431-1.26 2.431s0.844-1.169 1.053-2.537c-1.298-0.63-2.453-0.591-3.528-0.934-0.997-0.318-2.906-1.452-1.72-2.639 0.637-0.637 1.715-0.479 2.011-0.758v-0c0.027-0.021 0.053-0.046 0.078-0.075 0.763-0.913 0.537-4.118-0.559-4.020-0.136 0.012-0.284 0.079-0.425 0.218v-0l-0.001 0.002c-0.041 0.040-0.082 0.087-0.12 0.141-0.156 0.188-0.364 0.438-0.796 0.829-0.712 0.644-2.26 0.869-3.048 1.597-1.689 1.557-1.648 3.855-0.086 5.417 0.913 0.913 2.13 1.23 3.911 3.011 0.21 0.21 0.387 0.445 0.539 0.692v0c0.719 1.178 0.828 2.611 0.828 2.611s-0.229-1.424-1.049-2.539c-1.363 0.473-2.152 1.316-3.155 1.834-0.929 0.48-3.081 1.028-3.081-0.65 0-0.901 0.874-1.552 0.886-1.957l-0-0.001c0.005-0.034 0.005-0.070 0.002-0.108-0.106-1.185-2.533-3.291-3.237-2.447-0.087 0.104-0.145 0.258-0.146 0.454h-0l0 0.002c-0 0.057 0.004 0.12 0.015 0.184 0.022 0.243 0.052 0.568 0.024 1.149-0.048 0.959-0.983 2.213-1.026 3.284-0.093 2.294 1.561 3.891 3.769 3.891 1.292 0 2.376-0.636 4.895-0.636 0.296 0 0.588 0.041 0.87 0.11 1.342 0.325 2.431 1.26 2.431 1.26s-1.169-0.844-2.537-1.053c-0.63 1.298-0.591 2.453-0.934 3.528-0.318 0.997-1.452 2.907-2.639 1.719-0.637-0.637-0.479-1.715-0.758-2.011h-0c-0.021-0.027-0.046-0.053-0.075-0.078-0.913-0.763-4.118-0.537-4.020 0.558 0.012 0.136 0.079 0.285 0.218 0.424h-0l0.002 0c0.040 0.041 0.087 0.081 0.141 0.119 0.188 0.157 0.438 0.363 0.829 0.796 0.644 0.712 0.869 2.259 1.597 3.048 1.557 1.689 3.855 1.648 5.417 0.086 0.913-0.913 1.23-2.13 3.011-3.911 0.21-0.209 0.445-0.387 0.692-0.538v0c1.178-0.719 2.611-0.828 2.611-0.828s-1.424 0.23-2.539 1.049c0.473 1.363 1.316 2.152 1.834 3.155 0.48 0.93 1.028 3.081-0.65 3.081-0.901 0-1.552-0.874-1.957-0.886l-0.001 0c-0.034-0.005-0.070-0.005-0.108-0.002-1.185 0.107-3.291 2.532-2.447 3.237 0.104 0.087 0.258 0.145 0.454 0.146v0l0.002-0c0.057 0 0.12-0.005 0.184-0.015 0.243-0.023 0.568-0.052 1.149-0.023 0.959 0.049 2.213 0.983 3.284 1.026 2.294 0.094 3.891-1.561 3.891-3.769 0-1.291-0.636-2.375-0.636-4.895 0-0.296 0.041-0.588 0.11-0.87 0.325-1.342 1.26-2.431 1.26-2.431s-0.844 1.169-1.053 2.538c1.298 0.63 2.453 0.591 3.528 0.934 0.997 0.317 2.907 1.451 1.72 2.639-0.637 0.637-1.715 0.48-2.011 0.758v0c-0.027 0.021-0.053 0.047-0.078 0.076-0.763 0.913-0.537 4.118 0.558 4.020 0.136-0.012 0.285-0.079 0.424-0.218v0l0-0.002c0.041-0.041 0.081-0.087 0.119-0.14 0.157-0.188 0.363-0.439 0.796-0.829 0.712-0.644 2.259-0.869 3.048-1.597 1.689-1.557 1.648-3.855 0.086-5.417-0.913-0.913-2.13-1.23-3.911-3.011-0.209-0.209-0.387-0.445-0.538-0.692v0c-0.719-1.178-0.828-2.611-0.828-2.611s0.23 1.424 1.049 2.538c1.363-0.473 2.152-1.316 3.155-1.834 0.93-0.48 3.081-1.029 3.081 0.65 0 0.901-0.874 1.552-0.886 1.957l0 0c-0.005 0.035-0.005 0.070-0.002 0.108 0.107 1.185 2.532 3.291 3.237 2.447 0.087-0.105 0.145-0.258 0.146-0.454h0l-0-0.002c0-0.058-0.005-0.119-0.015-0.184-0.023-0.244-0.052-0.567-0.023-1.149 0.049-0.959 0.983-2.212 1.026-3.284 0.094-2.294-1.561-3.891-3.769-3.891-1.291 0-2.375 0.636-4.895 0.636-0.296 0-0.588-0.041-0.87-0.11-1.342-0.325-2.431-1.26-2.431-1.26s1.169 0.844 2.538 1.053zM9.095 3.256c-0.041-1.477 0.476-2.006 0.861-2.041 0.995-0.089 1.201 2.825 0.508 3.655-0.396 0.473-1.328-0.138-1.369-1.615zM20.122 2.11c1.015-1.073 1.755-1.082 2.052-0.834 0.767 0.64-1.148 2.846-2.226 2.944-0.614 0.056-0.841-1.036 0.174-2.11zM29.877 20.124c1.073 1.015 1.082 1.755 0.834 2.052-0.64 0.767-2.846-1.148-2.944-2.226-0.055-0.614 1.036-0.841 2.11 0.174zM22.889 28.733c0.041 1.477-0.477 2.006-0.861 2.041-0.995 0.090-1.201-2.825-0.508-3.655 0.395-0.474 1.328 0.137 1.369 1.615zM11.862 29.878c-1.015 1.073-1.755 1.082-2.051 0.834-0.767-0.64 1.148-2.846 2.226-2.944 0.614-0.055 0.841 1.036-0.175 2.11zM3.253 22.891c-1.477 0.041-2.006-0.477-2.041-0.861-0.089-0.995 2.825-1.201 3.655-0.508 0.473 0.395-0.138 1.328-1.615 1.369zM2.108 11.864c-1.073-1.015-1.082-1.755-0.834-2.052 0.64-0.767 2.846 1.148 2.943 2.226 0.056 0.614-1.036 0.841-2.11-0.175zM28.73 9.098c1.477-0.041 2.006 0.476 2.041 0.861 0.090 0.995-2.825 1.201-3.655 0.508-0.474-0.396 0.137-1.328 1.615-1.369z"></path>
  </symbol>
  </defs>
  </svg>`
document.body.insertAdjacentHTML('afterBegin', `<div style="display:none">${icons}</div>`)

var appObserver, contentObserver,
content, contentVue,
singleThread, singleThreadVue,
sidebar, sidebarVue, sidebarObserver,
alerts, alertsVue,
awaitBoardList,
postQuotation = null,
lastActiveTextarea
, state = {
  initialized: false
}
, version = GM_info.script.version

if (
    ["www.0chan.pl",
    "p.0chan.pl",
    "0.1chan.pl",
    "ygg.0chan.pl",
    "www.0chan.club",
    "nullplctggmjazqcoboc2pw5anogckczzj6xo45ukrnsaxarpswu7sid.onion",
    "0pl.i2p",
    "gd7qe2pu2jwqabz4zcf3wwablrzym7p6qswczoapkm5oa5ouuaua.b32.i2p",
    "[225:55:9ebf:1709:7b1f:a315:1119:6eff]",
    "0chan.ygg"
   ].includes(location.host)) {
    var IS_OCHKO = true
} else {
    var IS_OCHKO = false
}

const THUMB_API = 'https://0chan.one/zu-base64.php'

var momInRoom = {
  mainCSS:
    `.post-img-thumbnail {
      opacity: 0.2 ;
      filter: blur(4px) grayscale(50%) ;
    }}`,
  hoverCSS:
    `.post-img .post-img-thumbnail,
    .post-img .post-img-full {
      transition: filter 0.3s, opacity 0.3s !important;
    }
    .post-img .post-img-thumbnail:hover,
    .post-img .post-img-full:hover {
      opacity: 1;
      filter: none;
    }`,
  fullBlurCSS:
    `.post-img-full {
      opacity: 0.2 ;
      filter: blur(4px) grayscale(50%) ;
    }`,
  toggle: function(val) {
    let quickBtn = document.querySelector('#ZU-quickaction-momInRoom')
    if (quickBtn) {
      quickBtn.classList.toggle('active', val)
    }
    if (val) {
      injector.inject('ZU-mom-in-room', this.mainCSS)
    }
    else {
      injector.remove('ZU-mom-in-room')
      injector.remove('ZU-mom-in-room-full')
    }
  },
  toggleHover: function(val) {
    if (val) {
      injector.inject('ZU-unmask-on-hover', this.hoverCSS)
      if (settings.momInRoom) {
        injector.inject('ZU-mom-in-room-full', this.fullBlurCSS)
      }
    }
    else {
      injector.remove('ZU-unmask-on-hover')
      injector.remove('ZU-mom-in-room-full')
    }
  }
}

var unhideSpoilers = {
  mainCSS:
    `mark, .spoiler {
      color: inherit;
      background: rgba(204, 204, 204, 0.25);
    }}`,
  toggle: function(val) {
    if (val) {
      injector.inject('ZU-unhide-spoilers', this.mainCSS)
    }
    else {
      injector.remove('ZU-unhide-spoilers')
    }
  }
}

const share = {
  sites: {
    '1chanca': {
      name: "1chan.ca",
      link: "https://1chan.ca/live/addXS",
      method: 'GET',
      options: (url, description) => `link=${url}&description=${description}`,
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
      options: (url, description) => `link=${url}&description=${description}`,
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
      options: (url, description) => `url=${url}&description=${description}`,
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
      options: (url, description) => `url=${url}&description=${description}`,
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
      options: (url, description) => `url=${url}&text=${description}`,
      icon: {
        type: 'fa',
        name: 'telegram',
        color: '#2ca5e0'
      },
      width: 600,
      height: 600
    },
  },
  dropdown: function(url, description) {
    url = encodeURIComponent(url)
    return Object.keys(this.sites).reduce((htm, siteID) => {
      let site = this.sites[siteID]
      return htm + `
        <li>
          <a class="ZU-share-link" data-url="${url}" data-description="${description}" data-site="${siteID}" href="javascript:void(0)">
          ${site.icon
            ? `<span class="pull-left"><span${site.icon.color ? ` style="color:${site.icon.color}"` : ''}>` +
            (site.icon.type == 'fa'
              ? `<i class="fa fa-${site.icon.name}"></i>`
              : `<svg class="ZU-svg ZU-svg-16 ${site.icon.extraClass ? site.icon.extraClass : ''}">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-${site.icon.name}"></use>
              </svg>`
            ) + `</span></span>`
            : ''
          }
          ${site.name}</a>
        </li>`
      }, '<ul class="dropdown-menu ZU-share-dropdown ZU-dropdown">') + '</ul>'
  },
  handleClick: function(link) {
    let selectedText = postQuotation
    , description = encodeURIComponent(selectedText ? selectedText.replace(/\n/g, ' ') : link.dataset.description)
    , site = this.sites[link.dataset.site];

    let xhr = new XMLHttpRequest();
    // fucking js does not want to send GET requests with data defined in send()
    switch (site.method) {
      case "GET":
        xhr.open(site.method, `${site.link}?${site.options(link.dataset.url, description)}`, true);
        xhr.send();
        nativeAlert('info', 'Запрос на добавление ссылки отправлен');
      case "POST":
        xhr.open(site.method, site.link, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(site.options(link.dataset.url, description));
        nativeAlert('info', 'Запрос на добавление ссылки отправлен');
      case "POPUP":
        window.open(site.link + '?' + site.options(link.dataset.url, description), 'targetWindow', `toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${site.width || 666},height=${site.height || 555}`);
     }
  }
}

var sideBar = {
  init: () => {
    app.$bus.on('toggleSidebar', sideBar.handleToggle)
  },
  handleToggle: () => {
    if (window.innerWidth > 767) {
      document.querySelector('.headmenu').classList.add('ZU-sidemenu-animation-allowed')
      settings.hideSidebar = !settings.hideSidebar
    }
  },
  toggle: function(hide) {
    if (hide) {
      document.body.classList.add('ZU-sidebar-hidden')
    }
    else {
      document.body.classList.remove('ZU-sidebar-hidden')
    }
  }
}

const refresher = {
  init: function() {
    if (state.type !== 'thread') return;
    let refreshIcon = document.querySelector('.btn-default .fa-refresh')
    if (! refreshIcon) return;
    let btn = refreshIcon.findParent('button')
    btn.classList.add('ZU-refresh-btn')
    btn.insertAdjacentHTML('afterBegin', `<div class="ZU-refresh-progressbar"></div><div class="ZU-refreshbtn-shadow-overlay"></div>`)
    contentVue.checkNewReplies = () => {
      this.timeoutStop()
      contentVue.isFetchingMore = !0
      var e = contentVue.posts[contentVue.posts.length - 1]
      return contentVue.fetch(e.id).then(() => {
        contentVue.isFetchingMore = !1
        setTimeout(this.timeoutStart.bind(this), 400)
      })
    }
    this.initialized = true
    this.reset()
  },
  initialized: false,
  reset: function(s = settings.updateInterval) {
    if (s)
      injector.inject('ZU-thread-update-interval', `
        .ZU-refresh-progressbar.ZU-rpb-full {
          transition: width ${s}s linear;
          width: 100%;
          opacity: 1;
        }`)
    if (! this.initialized) return;
    this.timeoutStop()
    setTimeout(() => this.timeoutStart(), 500)
  },
  timeout: null,
  timeoutStart: function() {
    if (! settings.updateInterval) return;
    let progressBar = document.querySelector('.ZU-refresh-progressbar')
    if (! progressBar) return;
    void(progressBar.offsetWidth) // Animation won't start without this for some reason
    progressBar.classList.add('ZU-rpb-full')
    this.timeout = setTimeout(() => {
      if (contentVue && contentVue.checkNewReplies) {
        contentVue.checkNewReplies.bind(this)()
      }
    }, settings.updateInterval * 1000)
  },
  timeoutStop: function() {
    clearTimeout(this.timeout)
    let progressBar = document.querySelector('.ZU-refresh-progressbar')
    if (! progressBar) return;
    void(progressBar.offsetWidth) // Animation won't start without this for some reason
    progressBar.classList.remove('ZU-rpb-full')
  }
}

const catalog = {
  enabledOn: ['home', 'favourite', 'watched', 'board'],
  toggle: function(on=settings.catalogMode) {
    let quickBtn = document.querySelector('#ZU-quickaction-catalogMode')
    if (quickBtn)
      quickBtn.classList.toggle('active', on)
    if (this.isApplicable && on) {
      injector.inject('ZU-catalog-mode', this.css)
    }
    else {
      injector.remove('ZU-catalog-mode')
    }
  },
  css: `
    .thread-tree {
      display: none;
    }
    div[board-id] {
      width: 250px;
      min-width: 250px;
      display: inline-block;
      height: 300px;
      max-height: 300px;
      min-height: 300px;
      vertical-align: top;
      margin: 4px !important;
    }
    .post-button {
      padding: 0 4px;
    }
    .ZU-thread-controls {
      display: none;
    }
    .threadwrap {
      max-width: inherit !important;
    }
    .thread-separator {
      display: none;
    }
    .thread/*, .thread > div, .thread > div > div*/ {
      height: 100%;
    }
    :not(.post-popup) > .post {
      margin: 0;
      width: 100%;
      min-width: 0;
      max-height: 300px;
      min-height: 100%;
    }
    :not(.post-popup) > .post > .post-body {
      max-height: 257px;
      height: 257px;
      overflow: auto;
      min-height: 100%;
    }
    :not(.post-popup) > .post > .post-footer {
      margin-top: 0;
    }
    .post-id > span:not(.ZU-hide-board-by-op) {
      display: none;
    }
    .post-header .pull-right {
      float: none !important;
      position: absolute;
      right: 0;
      top: 0;
      padding: 2px 10px;
      background: linear-gradient(to right, rgba(255, 35, 35, 0) 0px, white 18px 100%);
    }
    .post-header .pull-right:hover {
      z-index: 2;
    }
    .post-header {
      padding: 0 !important;
    }
    .post-id {
      background: linear-gradient(to left, rgba(255, 35, 35, 0) 0px, white 18px, white 100%);
      z-index: 2;
      position: relative;
      padding: 2px 6px;
      display: inline-block;
      padding-right: 20px;
    }
    .post-body-message {
      overflow: hidden !important;
      max-height: none !important;
    }
    .post-popup {
      z-index: 3;
    }
    .reply-form {
      max-width: none;
      z-index: 3;
    }
    .ZU-noko-label {
      display: none;
    }
    .threads-scroll-spy {
      display: none;
    }
  `,
  get isApplicable() {
    return this.enabledOn.indexOf(state.type) !== -1
  }
}

var autohide = {
  init: function(spells=settings.autohide) {
    this.expressions = spells.map(spell => {
      if (typeof spell === 'string') {
        // Convert string to regExp literally, case-insensitive
        spell = {
          source: spell.toLowerCase().replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'), //https://github.com/sindresorhus/escape-string-regexp
          flags: 'i'
        }
      }
      return new RegExp(spell.source, spell.flags)
    })
    settings.save()
  },
  check: function(str) {
    return !!this.expressions.find(exp => str.match(exp))
  },
  expressions: [],
  awaitInstall: function() {
    let panelWaiter = forAllNodes([{
      selector: '.profile-page .row',
      fn: container => {
        app.$nextTick(()=>panelWaiter.stop())
        this.install(container)
      }
    }], content, {sutree: true, queryChildren: true})
  },
  save: function() {
    let autohideTextarea = document.querySelector('#ZU-autohide-text')
    , val = autohideTextarea.value
    , results = []
    val.split('\n').forEach(spell => {
      if (!spell) return;
      let rxr = spell.match(/^\/(.+)\/([gmiyu]+)?$/)
      , result
      if (rxr) {
        let source = rxr[1], flags = rxr[2]
        try {
          result = new RegExp(source, flags)
        }
        catch(e) {}
      }
      if (! result)
        result = spell
      results.push(result)
    })
    settings.autohide = results
    this.init()
  }
}

var autohideAtt = {
  init: function(spells=settings.autohideAtt) {
    let images = [], embeds = []
    spells.forEach(spell => (spell.eid ? embeds : images).push(spell))
    this.images = images
    this.embeds = embeds
    // settings.save()
  },
  check: function(att) {
    return !!this[att.embed ? 'embeds' : 'images']
    .find(spell => att.embed
      ? (
          att.embed.service == spell.svc
          &&
          att.embed.embedId == spell.eid
        )
      : (
          att.images.original.width == spell.w
          &&
          att.images.original.height == spell.h
          &&
          Math.abs(att.images.thumb_400px.size_kb - spell.kb) < this.treshold
        )
    )
  },
  treshold: 0.5,
  addButton: function(fig) {
    let inList = this.check(fig.__vue__.attachment)
    , btnContainer = fig.querySelector('.post-img-buttons')
    if (! btnContainer) return;
    btnContainer.insertAdjacentHTML('afterBegin', `
      <span data-inlist="${inList.toString()}" title="${inList ? 'Не с' : 'С'}крывать посты с этой картинкой" class="post-img-button ZU-hide-attachment ZU-prevent-settings-dropdown-close">
        <i class="fa fa-${inList ? 'plus' : 'minus'}-square-o fa-fw"></i>
      </span>
    `)
  },
  add: function(figVue) {
    let att = figVue.attachment
    if (settings.autohideAtt.find(entry => entry.aid == att.id)) {
      return nativeAlert('info', `${att.embed ? 'Видео' : 'Картинка'} уже присутствует в списке скрываемых.`)
    }
    let entry = {
      pid: +figVue.$parent.post.id,
      aid: +att.id
    }
    Object.assign(entry, att.embed
      ? {
        svc: att.embed.service,
        eid: att.embed.embedId
      }
      : {
        w: +att.images.original.width,
        h: +att.images.original.height,
        kb: att.images.thumb_400px.size_kb
      }
    )
    settings.autohideAtt.push(entry)
    autohideAtt.init()

    Object.assign(entry, {
      tempThumb: att.images.thumb_100px.url
    })

    document.querySelector(`.ZU-autohide-${entry.eid ? 'embeds' : 'images'}-section`)
    .insertAdjacentHTML('beforeEnd', this.itemHTML(entry, {away: true}))

    // TODO: something with this fucking shit...
    let menu = document.querySelector('#ZU-settings')
    , timeout = 600
    if (menu.classList.contains('ZU-dropdown-show')) {
      if (document.querySelector('#ZU-top-autohide').hidden) {
        ;[].forEach.call(document.querySelectorAll('.ZU-autohide-content'), el => el.hidden = true)
        document.querySelector('#ZU-autohide-images').hidden = false
        fancyResizeXfade(menu, '#ZU-settings-main', '#ZU-top-autohide')
      }
      else {
        if (document.querySelector('#ZU-autohide-images').hidden) {
          fancyResizeXfade(menu, '#ZU-autohide-text', '#ZU-autohide-images')
        }
        else {
          timeout = 0
        }
      }
    }
    else {
      ;[].forEach.call(document.querySelectorAll('.ZU-top-menu-page'), el => el.hidden = true)
      document.querySelector('#ZU-top-autohide').hidden = false
      ;[].forEach.call(document.querySelectorAll('.ZU-autohide-content'), el => el.hidden = true)
        document.querySelector('#ZU-autohide-images').hidden = false
      menu.classList.toggle('ZU-dropdown-show')
    }

    setTimeout(() => document.querySelector(`.ZU-autohide-attachemnt-entry[data-aid="${entry.aid}"]`)
      .classList.remove('ZU-away')
    , timeout)

    reAutohidePosts()
  },
  itemHTML: function(item, options={away: false}) {
    if (!item.thumb) {
      // get thumbnail
      fetch(`${THUMB_API}?post=${item.pid}&attachment=${item.aid}&domain=${getOrigin()}`)
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          console.warn('[0u] Error retrieving thumbnail for autohide item: ', json.error, item)
        }
        else {
          // TODO: remove dups
          ;[].forEach.call(document.querySelectorAll(`.ZU-autohide-attachemnt-entry[data-aid="${item.aid}"]`), entry => { // our future item
            entry.style.backgroundImage = `url('${json.url}')`
            // write item thumbnail to LS
            let entryIX = settings.autohideAtt.findIndex(i => i.aid == item.aid)
            if (entryIX !== -1) {
              settings.autohideAtt[entryIX].thumb = json.url
              settings.save()
            }
          })
        }
      })
      .catch(e => {
        console.warn(`[0u] Error connecting to thumbnailer API (${THUMB_API}), falling back to non-persisten method`, e, item)
        // Fallback to old method in case thumbnailer is down
        fetch(`${getOrigin()}/api/post?post=${item.pid}`, {credentials: 'same-origin'})
        .then(res => {
          if (res.ok) {
            res.json().then(json => {
              if (json.post && json.post.attachments) {
                let att = json.post.attachments.find(att => att.id == item.aid)
                if (att) {
                  try {
                    // TODO: remove dups
                    ;[].forEach.call(document.querySelectorAll(`.ZU-autohide-attachemnt-entry[data-aid="${item.aid}"]`), entry => { // our future item
                      entry.style.backgroundImage = `url("${att.images.thumb_100px.url}")`
                    })
                  }
                  catch(e) {
                    console.warn('[0u] Error retrieving thumbnail for autohide item: ', e)
                  }
                }
              }
            })
            .catch(e => console.warn('[0u] Bad JSON: ', e))
          }
          else {
            res.text().then(text => console.warn('[0u] Bad response: ', text)).catch(nop)
          }
        })
      });
    }

    return `
    <div class="ZU-autohide-attachemnt-entry${options.away ? ' ZU-away' : ''}"  ${item.eid
      ? `data-svc="${item.svc}" data-eid="${item.eid}"`
      : ''
    } data-aid="${item.aid}" data-pid="${item.pid}" title="${item.eid
      ? `${item.svc}/${item.eid}`
      : `${item.w}×${item.h}, ${item.kb} кБ`
    }" style="background-image: url('${item.thumb
      ? item.thumb
      : (item.tempThumb || '')
    }')">
      <button class="btn btn-xs btn-primary ZU-xbtn ZU-remove-autohide-entry" title="Убрать из списка скрываемых">
        <span><i class="fa fa-close"></i></span>
      </button>
    </div>`
  },
  getListHTML: function() {
    return `
    <div class="ZU-autohide-images-section">
      ${this.images.reduce((htm, img) => htm + this.itemHTML(img), '')}
    </div>
    <hr style="margin: 8px 0">
    <div class="ZU-autohide-embeds-section">
      ${this.embeds.reduce((htm, emb) => htm + this.itemHTML(emb), '')}
    </div>`
  },
  remove: function(aid, isEmbed) {
    document.querySelector(`.ZU-autohide-attachemnt-entry[data-aid="${aid}"]`).remove()
    let index = -1
    settings.autohideAtt.find((i,x) => {if (i.aid == aid) index = x})
    if (index !== -1)
      settings.autohideAtt.splice(index, 1)
    let arr = this[isEmbed ? 'embeds' : 'images']
    arr.find((i,x) => {if (i.aid == aid) index = x})
    if (index !== -1)
      arr.splice(index, 1)
    settings.save()

    reAutohidePosts()
  }
}

var NullRestyler = {
  init: function() {
    document.querySelector('#sidebar').insertAdjacentHTML('afterBegin', `
        <div class="ZU-nulltwk-container hidden-xs">
          <button class="ZU-sidebar-btn fa fa-save ZU-nulltwk-save" title="Сохранить"></button>
          <button class="ZU-sidebar-btn fa fa-undo ZU-nulltwk-revert" title="Вернуть оригинальный цвет"></button>
          <div class="ZU-nulltwk-range-container">
            <label for="ZU-hue-input">HUE</label>
            <output>
              <span class="ZU-output">0</span><span>°</span>
            </output>
            <input type="range" min="-180" max=180 step=1 id="ZU-hue-input" class="ZU-range" value=0>
          </div>
          <div class="ZU-nulltwk-range-container">
            <label for="ZU-saturation-input">SAT</label>
            <output>
              <span class="ZU-output">100</span><span>%</span>
            </output>
            <input type="range" min=0 max=300 step=1 id="ZU-saturation-input" class="ZU-range" value=100>
          </div>
          <div class="ZU-nulltwk-range-container">
            <label for="ZU-brightness-input">BRI</label>
            <output>
              <span class="ZU-output">100</span><span>%</span>
            </output>
            <input type="range" min=0 max=300 step=1 id="ZU-brightness-input" class="ZU-range" value=100>
          </div>
          <div class="ZU-nulltwk-range-container">
            <label for="ZU-contrast-input">CON</label>
            <output>
              <span class="ZU-output">100</span><span>%</span>
            </output>
            <input type="range" min=0 max=500 step=1 id="ZU-contrast-input" class="ZU-range" value=100>
          </div>
        </div>
    `)
    this.setValues(settings.nullColor)
  },
  addControls: function(sideBarLogo) {
    // earlier restyling (aka КОСТЫЛЬ ЕБАНЫЙ)
    let css = localStorage['ZU-null-css-cached']
    if (css)
      injector.inject('ZU-null-tweak', css)
    sideBarLogo.insertAdjacentHTML('beforeend', `
      <button class="ZU-restyle-null ZU-sidebar-btn fa fa-paint-brush hidden-xs" title="Перекрасить"></button>
    `)
  },
  save: function() {
    document.querySelector('#sidebar').classList.remove('edit-null')
    let res = this.update()
    localStorage['ZU-null-css-cached'] = res.css
    delete res.css
    settings.nullColor = res
    settings.save()
  },
  update: function() {
    let hue = document.querySelector('#ZU-hue-input').value
    , sat = document.querySelector('#ZU-saturation-input').value
    , bri = document.querySelector('#ZU-brightness-input').value
    , con = document.querySelector('#ZU-contrast-input').value
    , css = `.sidebar-logo img { filter: saturate(${sat}%) hue-rotate(${hue}deg) brightness(${bri}%) contrast(${con}%); }`
    injector.inject('ZU-null-tweak', css)
    // Save for earlier restyling
    return {
      hue: hue,
      sat: sat,
      bri: bri,
      con: con,
      css: css
    }
  },
  setValues: function(vals) {
    ['hue', 'saturation', 'brightness', 'contrast'].forEach(prop => {
      let input = document.querySelector(`#ZU-${prop}-input`)
      , val = vals[prop.slice(0,3)]
      input.value = val
      input.parentElement.querySelector('output .ZU-output').innerText = val
    })
    return this.update()
  }
}

var desnower = {
  toggle: function(on) {
    if (settings.turnOffSnow) {
        window.localStorage.setItem('disableSnow', true);
    } else {
        window.localStorage.removeItem('disableSnow');
    }
  }
}

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
    catalogMode: false,
    autohide: [],
    autohideAtt: [],
    nullColor: {
      hue: 0,
      sat: 100,
      bri: 100,
      con: 100
    },
    turnOffSnow: (window.localStorage.getItem('disableSnow') == null) ? false : true,
    selectedBoard: 'b'
  },
  _: {},
  hooks: {
    momInRoom: momInRoom.toggle.bind(momInRoom),
    unhideSpoilers: unhideSpoilers.toggle.bind(unhideSpoilers),
    unmaskOnHover: momInRoom.toggleHover.bind(momInRoom),
    hideSidebar: sideBar.toggle.bind(sideBar),
    updateInterval: refresher.reset.bind(refresher),
    catalogMode: catalog.toggle.bind(catalog),
    autohide: autohide.init.bind(autohide),
    autohideAtt: autohideAtt.init.bind(autohideAtt),
    nullColor: NullRestyler.setValues.bind(NullRestyler),
    turnOffSnow: desnower.toggle.bind(desnower)
  },
  save: function() {
    this._.hiddenBoards = this.hiddenBoards
    this._.autohide = this.autohide
    this._.autohideAtt = this.autohideAtt
    this._.nullColor = this.nullColor
    localStorage['ZU-settings'] = JSON.stringify(this._)
  },
  init: function() {
    let localSettings = LSfetchJSON('ZU-settings') || {}
    , allSettings = Object.assign(cloneObj(this.defaults, true), localSettings)
    Object.keys(allSettings).forEach(key => {
      let value = allSettings[key]
      if (typeof value !== "object") {
        Object.defineProperty(this, key, {
          set: function(val) {
            this._[key] = val
            if (this.hooks.hasOwnProperty(key)) {
              this.hooks[key](val)
            }
            this.save()
          },
          get: function() {
            return this._[key]
          }
        })
      }
      this[key] = value
    })
  }
}

function cloneObj(obj, deep=false){
  var result = {};
  for(key in obj){
    if(deep && obj[key] instanceof Object){
       if(obj[key] instanceof Array){
         result[key] = [];
         obj[key].forEach(function(item){
            if(item instanceof Object){
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
  return result
}

RegExp.prototype.toJSON = function() {
  return {
    source: this.source,
    flags: this.flags
  }
}

// Hides threads from unwanted boards on index page
const boardHider = {
  enabled: false,
  enable: function() {
    if (this.enabled) {
      return
    }
    this.enabled = true
    this.refresh()
  },
  disable: function() {
    if (this.enabled) {
      injector.remove('ZU-hide-boards')
    }
    this.enabled = false
  },
  refresh: function() {
    if (settings.hiddenBoards.length) {
      let css
      if (this.enabled) {
        css = settings.hiddenBoards.map(boardID => `div[board-id="${boardID}"]`).join(', ')
          + ' {display: none} '
        injector.inject('ZU-hide-boards', css)
      }
      css = settings.hiddenBoards.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .ZU-board-hide-icon`).join(', ')
        + ' {display: none} '
        + settings.hiddenBoards.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .ZU-board-unhide-icon`).join(', ')
        + ' {display: block}'
        + settings.hiddenBoards.map(boardID => `.sidemenu-board-item a[href="/${boardID}"]`).join(', ')
        + ' {text-decoration: line-through!important; }'
        + settings.hiddenBoards.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .sidemenu-board-title`).join(', ')
        + ' {color:#808080!important; }'
      injector.inject('ZU-hide-boards-ui', css)
    }
    else {
      injector.remove('ZU-hide-boards')
      injector.remove('ZU-hide-boards-ui')
    }
  },
  toggleBoard: function(dir) {
    let index = settings.hiddenBoards.indexOf(dir)
    if (index >= 0) {
      settings.hiddenBoards.splice(index, 1)
    }
    else {
      settings.hiddenBoards.push(dir)
    }
    this.refresh()
    settings.save()
  }
}



var eventDispatcher = {
  click: function(e) {
    // Close alerts with one click
    let alertsWrapper = e.path.find(el => el.classList && el.classList.contains('alerts-wrapper'))
    if (alertsWrapper) {
      alertsWrapper.__vue__.alerts = []
    }
    // Thread updating and expanding
    if (e.target.classList && e.target.classList.contains('ZU-expand-thread')) {
      let thread = e.path.find(el => (el.classList && el.classList.contains('thread')))
      if (thread) {
        expandThread(thread)
      }
    }
    if (e.target.classList && e.target.classList.contains('ZU-update-thread')) {
      let thread = e.path.find(el => (el.classList && el.classList.contains('thread')))
      if (thread) {
        updateThread(thread)
      }
    }
    // No scroll
    let img = e.path.find(el => el.classList && el.classList.contains('post-img'))
    if (img) {
      if (settings.thumbNoScroll) {
        img.__vue__.noScroll = true
      }
    }
    // Board hiding
    let hideBtn = e.path.find(el => el.classList && el.classList.contains('ZU-boardhideunhide'))
    if (hideBtn) {
      e.preventDefault()
      e.stopPropagation()
      let dir = hideBtn.findParent('a').getAttribute('href').replace(/\//g, '')
      boardHider.toggleBoard(dir)
    }
    // Board hiding by OP
    let OPhideBtn = e.path.find(el => el.classList && el.classList.contains('ZU-hide-board-by-op'))
    if (OPhideBtn) {
      let dir = OPhideBtn.parentElement.querySelector('a').getAttribute('href').replace(/\//g, '')
      boardHider.toggleBoard(dir)
    }
    // Share
    let shareBtn = e.path.find(el => el.classList && el.classList.contains('ZU-share-btn'))
    if (shareBtn) {
      shareBtn.querySelector('.ZU-share-dropdown').classList.toggle('ZU-dropdown-show')
    }
    // Share link
    let shareLink = e.path.find(el => el.classList && el.classList.contains('ZU-share-link'))
    if (shareLink) {
      share.handleClick(shareLink)
    }
    // Mention
    let mention = e.path.find(el => el.classList && el.classList.contains('ZU-mention-btn'))
    if (mention) {
      mentionPost(mention.findParent('.post'))
    }
    // Popup slosing
    if (e.path.find(el => el.classList && el.classList.contains('ZU-settings-btn'))) {
      [].forEach.call(document.querySelectorAll('#ZU-settings > div'), el => el.hidden = true)
      document.querySelector('#ZU-settings-main').hidden = false
      document.querySelector('#ZU-settings').classList.toggle('ZU-dropdown-show')
    }
    else if (! e.path.find(el => el.classList && (el.classList.contains('ZU-settings-dropdown') || el.classList.contains('ZU-prevent-settings-dropdown-close')))) {
      document.querySelector('#ZU-settings').classList.remove('ZU-dropdown-show')
    }
    if (! e.path.find(el => el.classList && (el.classList.contains('ZU-share-btn') || el.classList.contains('ZU-share-btn')))) {
      Array.prototype.forEach.call(document.querySelectorAll('.ZU-share-dropdown'), dd => dd.classList.remove('ZU-dropdown-show'))
    }
    // Top in-menu navigation
    let eat = e.path.find(el => el.classList && el.classList.contains('ZU-enter-autohide-top'))
    if (eat) {
      fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-settings-main', '#ZU-top-autohide')
    }
    // Saving autohide menu
    let ret = e.path.find(el => el.classList && el.classList.contains('ZU-exit-autohide-top'))
    if (ret) {
      fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-top-autohide', '#ZU-settings-main')
      autohide.save()
      reAutohidePosts()
    }
    // Hide by attachment
    let hba = e.path.find(el => el.classList && el.classList.contains('ZU-hide-attachment'))
    if (hba) {
      let figVue = hba.findParent('figure').__vue__
      if (hba.dataset.inlist == 'true') {
        autohideAtt.remove(figVue.attachment.id)
        // ??
      }
      else
        autohideAtt.add(figVue)
    }
    // Remove autohide entry
    let rae = e.path.find(el => el.classList && el.classList.contains('ZU-remove-autohide-entry'))
    if (rae) {
      let data = rae.findParent('.ZU-autohide-attachemnt-entry').dataset
      autohideAtt.remove(data.aid, !!data.eid)
    }
    // Radio button group behavior
    let rbg = e.path.find(el => el.classList && el.classList.contains('ZU-radio-btn-group'))
    , rbb = e.path.find(el => el.classList && el.classList.contains('btn'))
    if (rbg && rbb) {
      ;[].forEach.call(rbg.querySelectorAll('.btn'), btn => btn.classList.remove('active'))
      rbb.classList.add('active')
    }
    // Entering Null Restyling mode
    let nr = e.path.find(el => el.classList && el.classList.contains('ZU-restyle-null'))
    if (nr) {
      document.querySelector('#sidebar').classList.add('edit-null')
    }
    // Exiting Null Restyling mode
    let nrs = e.path.find(el => el.classList && el.classList.contains('ZU-nulltwk-save'))
    if (nrs) {
      NullRestyler.save()
    }
    // Resetting the Null
    let nrr = e.path.find(el => el.classList && el.classList.contains('ZU-nulltwk-revert'))
    if (nrr) {
      let res = NullRestyler.setValues(settings.defaults.nullColor)
      localStorage['ZU-null-css-cached'] = res.css
      delete res.css
      settings.nullColor = res
      settings.save()
    }
    // Hiding/unhiding selection in stegospoiler
    let shs = e.path.find(el => el.classList && el.classList.contains('ZU-hide-selection'))
    if (shs) {
    	textSteganography.hideSelection(shs.findParent('.reply-form').querySelector('textarea'))
    }
    let srs = e.path.find(el => el.classList && el.classList.contains('ZU-remove-spoilers'))
    if (srs) {
    	textSteganography.removeSpoilers(srs.findParent('.reply-form').querySelector('textarea'))
    }
  },
  mousedown: function(e) {
    // Quote on reply
    let replyBtn = e.path.find(el => el.classList && (el.classList.contains('post-button-reply') || el.classList.contains('ZU-quote-on-click')))
    if (replyBtn) {
      if (replyBtn.classList.contains('ZU-qoc-from-anywhere')) {
        let selection = getSelection()
        if (selection)
          postQuotation = selection.text
      }
      else
        postQuotation = getPostQuotation(replyBtn.findParent('.post'), replyBtn.classList.contains('ZU-qoc-textonly') || replyBtn.classList.contains('post-button-reply'))
    }
  },
  focusin: function(e) {
    // Last active textarea
    if (e.target.matches('.reply-form-message textarea')) {
      lastActiveTextarea = e.target
    }
  },
  change: function(e) {
    // Noko
    if (!IS_OCHKO) {
      let noko = e.path.find(el => el.classList && el.classList.contains('ZU-noko'))
      if (noko) {
        settings.noko = noko.checked
        Array.prototype.forEach.call(document.querySelectorAll('.ZU-noko'), otherNoko => {
          if (otherNoko !== noko)
            otherNoko.checked = noko.checked
        })
      }
    }
  },
  mouseenter: function(e) {
    // Peek into hidden thread
    let peek = e.path.find(el =>
      el.classList
      &&
      el.classList.contains('fa-plus-square-o')
      &&
      el.findParent('.post-footer')
    )
    if (peek) {
      let post = peek.findParent('.post').parentNode
      , postVue = post.__vue__
      if (postVue && postVue.isAutoHidden) {
        console.log(postVue)
      }
    }
  },
  input: function(e) {
    let dialogTextArea = e.path.find(el => 
      el.tagName == "TEXTAREA"
      &&
      el.findParent('.dialog-footer')
    )
    if (dialogTextArea) {
      resizeTextAreaToContent(dialogTextArea)
    }
    // Null Restyling inputs
    let nr = e.path.find(el => el.classList && el.classList.contains('ZU-range'))
    if (nr) {
      nr.parentElement.querySelector('output .ZU-output').innerText = nr.value
    }
    NullRestyler.update()
  }
}

function resizeTextAreaToContent(area) {
  area.style.height = "1px";
  area.style.height = area.scrollHeight+"px";
}

function getPostQuotation(post, withoutNumber = false) {
  if (! post) return null;
  let postData = getPostDataFromDOM(post)
  if (! postData) return null;
  let text = `>>${postData.id}`
  , selection = getSelection()
  if (selection && selection.post && selection.post == post) {
    let selectedText = selection.text
    .replace(/^\s/, '').replace(/\s$/, '') // remove leading and trailing whitespaces
    .replace(/^>/gm, ' >').replace(/^/gm, '>') // add quotation marks
    if (withoutNumber)
      return selectedText + '\n'
    text += '\n' + selectedText
  }
  else if (withoutNumber) return null;
  text += '\n'
  return text
}

function mentionPost(post) {
  let text = postQuotation
  if (! text) return;
  postQuotation = null
  let textarea = lastActiveTextarea
  if (textarea && textarea.offsetParent) {
    if (textarea.value && !textarea.value.match(/\n$/)) {
      text = '\n'+text
    }
    textarea.value += text
    touchTextarea(textarea)
  }
  else {
    setClipboard(text)
    nativeAlert('success', `Номер поста ${text.match(/[^>0-9\s]/g) ? 'и цитата скопированы' : 'скопирован'} в буфер обмена`)
  }
}

function touchTextarea(textarea) {
	textarea.dispatchEvent(new Event('input', {
	  'bubbles': true,
	  'cancelable': true
	}))
	textarea.focus()
}

function getSelection() {
  if (! document.getSelection) return null;
  let selection = document.getSelection()
  if (selection.type !== "Range") return null;
  let selectedText = selection.toString()
  if (! selectedText) return null;
  return {
    text: selectedText,
    post: selection.anchorNode.findParent('.post')
  }
}

function setClipboard(text) {
  if (! document.execCommand) return;
  let input
  try {
    input = document.createElement('textarea')
    document.body.appendChild(input)
    input.value = text
    input.focus()
    input.select()
    document.execCommand('Copy')
  }
  catch(e) {
    console.warn('[u0] Unable to set clipboard')
  }
  input.remove()
}

function expandThread(threadDOM) {
  let threadVue = threadVueFromDOM(threadDOM)
  , threadID, opID, firstShownReplyID
  if (!threadVue) {
    console.warn('[0u] Unable to expand thread', e)
    return
  }
  try {
    threadID = threadVue.thread.id
    , opID = threadVue.opPost.id
    , firstShownReplyID = threadVue.lastPosts[0].id
  }
  catch(e) {
    console.warn('[0u] Unable to expand thread', e)
    return
  }
  getPosts(threadID, opID, firstShownReplyID)
  .then(posts => {
    threadVue.lastPosts = posts.concat(threadVue.lastPosts)
    Array.prototype.forEach.call(threadDOM.querySelectorAll('.ZU-delete-on-threadexpand'), el => el.remove())
  })
  .catch(handleNetworkError)
}
function updateThread(thread) {
  let threadVue, threadID, lastReplyID
  if (thread instanceof Element) {
    threadVue = threadVueFromDOM(thread)
  }
  else {
    threadVue = thread
  }
  if (!threadVue) {
    console.warn('[0u] Unable to update thread', e)
    return
  }
  try {
    threadID = threadVue.thread.id
    lastReplyID = (threadVue.lastPosts[threadVue.lastPosts.length-1] || threadVue.opPost).id
  }
  catch(e) {
    console.warn('[0u] Unable to update thread', e)
    return
  }
  getPosts(threadID, lastReplyID)
  .then(posts => {
    threadVue.lastPosts = threadVue.lastPosts.concat(posts)
  })
  .catch(handleNetworkError)
}


const router = {
  push: function(path) {
    if (path.indexOf('/') !== 0) {
      path = '/'+path
    }
    if (document.location.pathname == path) {
      this.reload()
    }
    else {
      app.$router.push({path: path})
    }
  },
  reload: () => app.$bus.emit('refreshContent'),
  setupInterceptor: function(doDebug=false) {
    app.$router.push = (route, e, n) => {
      let thread, threadID, postID
      if (doDebug)
        console.log('ROUTE:', route)
      if (
        !IS_OCHKO
        && !settings.noko
        && state.type !== "thread"
        && route.hasOwnProperty('name')
        && route.name === "thread"
        && route.hasOwnProperty('hash')
        && (postID = route.hash.split('#')[1])
        && route.hasOwnProperty('params')
        && (threadID = route.params.threadId)
        && !settings.catalogMode
      ) {
        // Quick reply case
        let threadVue = contentVue.threads.find(thr => thr.thread.id == threadID)
        if (
          threadVue // Thread exists on page
          && !document.querySelector(`a[data-post="${postID}"], a[href$="#${postID}"]`) // No link to new posts exists
        ) {
          try {
            if (doDebug)
              console.log('Route intercepted (quick reply)')
            updateThread(threadVue)
          }
          catch(e) {
            console.error(e)
            app.$router.history.push(route, e, n)
          }
        }
        // New thread case
        else if (
          state.type === "board" // New threads may be created only from a board view
          && route.params.dir === contentVue.board.dir
          && !document.querySelector(`a[href*="/${threadID}"]`) // Thread does not exist yet
        ) {
          if (doDebug)
            console.log('Route intercepted (new thread)')
          this.reload()
        }
        else {
          app.$router.history.push(route, e, n)
        }
      }
      else {
        app.$router.history.push(route, e, n)
      }
    }
  }
}


function setupAlertInterceptor() {
  alertsVue.addAlert = function(t, e, a) {
    var s = this
      , n = {
      type: t,
      text: e
    }
    if (n.type === 'error' && n.text.indexOf('checking_browser')!== -1) {
      let anusAlert = {
        type: 'info',
        text: 'Производится проверка ануса...'
      }
      this.alerts.unshift(anusAlert)
      fuckCF(e, anusAlert, s)
    }
    else {
      this.alerts.unshift(n),
      setTimeout(function() {
        s.closeAlert(n)
      }, a || 3500)
    }
  }
}

// Thanks anoñchik from /userjs/
function fuckCF(response, alertToClose, alertCloserContext) {
  let query = 'jschl_vc=' + response.match(/jschl_vc" value="([^"]+)/)[1] + '&pass=' + response.match(/pass" value="([^"]+)/)[1] + '&jschl_answer=',
  // basis for simplest eval
  a = {value: 0}, t = location.host
  eval( response.match(/b,r,e,a,k,i,n,g,f, ([^;]+)/)[1] + '; ' + response.match(/getElementById\('challenge-form'\);\s+;([^']+)/)[1] )
  query += a.value
  let xhr = new XMLHttpRequest()
  xhr.open("GET", '/cdn-cgi/l/chk_jschl?'+query, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== xhr.DONE) return;
    alertCloserContext.closeAlert(alertToClose)
    if (xhr.status == 200) {
      // check if post is being sent
      let sendingBtn = document.querySelector('.reply-form .btn-primary[disabled] .fa-spinner')
      if (sendingBtn) {
        try {
          sendingBtn.findParent('.reply-form').__vue__.send()
          return
        }
        catch(e) {}
      }
      // check if new threads are being fetched
      if (contentVue.fetchingMore) {
        contentVue.fetchingMore = false
        if (app.$router.currentRoute.name === 'thread') {
          /*singleThreadVue*/contentVue.checkNewReplies()
        }
        else {
          contentVue.getMoreThreads()
        }
        return
      }
      // check if route has changed
      if (! document.querySelector('#content div')) {
        router.reload()
        return
      }
      // default behavior
      alertCloserContext.addAlert('success', 'Проверка ануса пройдена. Повторите попытку')
    }
    else {
      alertCloserContext.addAlert('error', 'Проверка ануса провалилась.')
    }
  }
  setTimeout(() => {
    xhr.send()
  }, 4000)
}

function handleReplyForm(form) {
  // Add noko button
  if (!IS_OCHKO) {
    form.querySelector('.reply-form-message + div .pull-right').insertAdjacentHTML('beforeBegin', `
      <label class="ZU-noko-label" title="После отправки сообщения переместиться к треду"><input class="ZU-noko" type="checkbox"${settings.noko ? 'checked' : '' }> Noko</label>`)
  }
  // Add quote from selection
  if (postQuotation) {
    let textarea = form.querySelector('textarea')
    textarea.value = postQuotation
    postQuotation = null
    textarea.dispatchEvent(new Event('input', {
      'bubbles': true,
      'cancelable': true
    }))
    textarea.focus()
  }
  // Add stegospoiler button
  form.querySelector('.reply-form-limit-counter').insertAdjacentHTML('beforeBegin', 
  	`<button class="btn btn-xs btn-default ZU-hide-selection" title="Спрятать выделенный текст"><i class="fa fa-eye-slash"></i></button>
  	 <button class="btn btn-xs btn-default ZU-remove-spoilers" title="Убрать спойлеры"><i class="fa fa-eye"></i></button> `)
}


function addSettingsButtons() {
  let showCatBtn = catalog.isApplicable
  document.querySelector('.headmenu-buttons-left').insertAdjacentHTML('beforeEnd', `
    <div class="btn-group ZU-nomargin-btn-group">
      <button title="0chan Utilities v.${version}" type="button" class="ZU-panel-btn btn btn-link ZU-btn-link ZU-svg-container-btn ZU-settings-btn">
        <svg class="ZU-svg ZU-svg-32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-logo"></use></svg>
      </button>
      ${showCatBtn ?
      `<button title="Режим каталога" id="ZU-quickaction-catalogMode" data-prop="catalogMode" class="btn btn-link ZU-btn-link ZU-catalog-btn${settings.catalogMode ? ' active' : ''}">
        <i class="fa fa-th ZU-onactive-hide"></i>
        <i class="fa fa-th-list ZU-onactive-show"></i>
      </button>` : '' }
      <button title="Мамка в комнате" id="ZU-quickaction-momInRoom" data-prop="momInRoom" class="btn btn-link ZU-btn-link ZU-nsfw-btn${settings.momInRoom ? ' active' : ''}">
        <i class="fa fa-low-vision"></i>
      </button>
    </div>
    `)
  injector.inject('ZU-headmenu-shift', `.headmenu-title { left: ${showCatBtn ? 170 : 130}px !important; }`)
  ;['catalogMode', 'momInRoom'].forEach(prop => {
    let btn = document.querySelector(`#ZU-quickaction-${prop}`)
    if (! btn) return;
    btn.addEventListener('click', ev => {
      let btn = ev.target.findParent('button')
      , on = !btn.classList.contains('active')
      settings[prop] = document.querySelector(`#ZU-SP-${prop}`).checked = on
    })
  })
}

function handleBoardItem(board) {
  if (board.querySelector('.ZU-boardhideunhide')) return;
  board.insertAdjacentHTML('afterBegin',
    `<span class="pull-left sidemenu-board-icons ZU-boardhideunhide">
      <span title="Скрыть" class="ZU-board-hide-icon">
        <i class="fa fa-minus-square-o"></i>
      </span>
      <span title="Раскрыть" class="ZU-board-unhide-icon">
        <i class="fa fa-plus-square-o"></i>
      </span>
    </span>`)
}


function init() {
  if (typeof content.__vue__ === 'undefined') {
    setupVueGetter() // *swoosh* — and __vue__ is available outside dev tools!
  }

  contentVue = content.__vue__

  router.setupInterceptor()

  settings.init()

  NullRestyler.init()

  sideBar.init()

  boardHider.refresh()

  autohide.init()
  autohideAtt.init()

  contentObserver = forAllNodes([
    {
      selector: '.thread',
      fn: handleThread
    },
    {
      selector: '.post',
      fn: handlePost
    }, 
    {
      selector: '.sidemenu-board-item a',
      fn: handleBoardItem
    },
    {
      selector: '.post-img',
      fn: handleAttachment
    },
    {
      selector: '.reply-form',
      fn: handleReplyForm
    }
  ], content.parentElement, {subtree: true, queryChildren: true})

  sidebar = document.querySelector('#sidebar')
  sidebarVue = sidebar.__vue__
  awaitBoardList = forAllNodes([
    {
      selector: '.sidemenu-boards-list',
      fn: boardList => {
        app.$nextTick(()=>awaitBoardList.stop())
        sidebarObserver = forAllNodes([
          {
            selector: '.sidemenu-board-item a',
            fn: handleBoardItem
          }
        ], boardList, {queryChildren: true})
      }
    }
  ], sidebar, {queryChildren: true})

  window.addEventListener('resize', () => {
    let dialogTextArea = document.querySelector('.dialog-view textarea')
    if (dialogTextArea)
      resizeTextAreaToContent(dialogTextArea)
  })

  state.initialized = true
}

function handlePost(post) {
  let extraIconsContainer = post.querySelector('.post-footer .pull-right')
  if (!extraIconsContainer || extraIconsContainer.querySelector('.ZU-mention-btn'))
    return;
  extraIconsContainer.insertAdjacentHTML('afterBegin', `<span title="Упомянуть" class="post-button ZU-mention-btn ZU-quote-on-click"><i class="fa fa-angle-double-right"></i></span>`)
  let postData = getPostDataFromDOM(post)
  if (!postData) return;
  if (postData.isPopup) {
    repositionPopup(post.parentNode)
  }
  else if (postData.isOpPost) {
    extraIconsContainer.insertAdjacentHTML('beforeBegin', `
      <div class="pull-left">
        <span title="Поделиться" class="post-button ZU-share-btn ZU-quote-on-click ZU-qoc-from-anywhere">
          <i class="fa fa-share-alt"></i>
          ${share.dropdown(`${getOrigin()}/${postData.dir}/${postData.threadID}`, postData.title)}
          </span>
      </div>`)
  }

  // Autohide posts
  autohidePost(postData, post)

  // Stegospoilers
  let msg = post.querySelector('.post-body-message')
  msg.innerHTML = textSteganography.decode(msg.innerHTML, '<mark class="ZU-SSS">', '</mark>', true/* ← safe */)
}

function autohidePost(postData, postDOM) { // TODO: prevent hiding thread inside the thread; Force unhide thread
  if (
    !postData.postVue.isPopup
    &&
    (
      postData.attachments.find(att => autohideAtt.check(att))
      ||
      (postData.message && autohide.check(postData.message))
    )
  ) {
    postData.postVue.isHidden = true
    postData.postVue.isAutoHidden = true
    postData.postVue.$emit('hidden', true)
  }
  else if(postData.postVue.isAutoHidden) {
    postData.postVue.isHidden = false
    postData.postVue.isAutoHidden = false
    postData.postVue.$emit('hidden', false)
  }
}

function handleAttachment(att) {
  autohideAtt.addButton(att)
}

function reAutohidePosts() {
  [].forEach.call(document.querySelectorAll('.post'), post => autohidePost(getPostDataFromDOM(post)))
}


function repositionPopup(popup) {
  let left = + popup.style.left.replace('px', '')
  , top = + popup.style.top.replace('px', '')
  , width = popup.offsetWidth
  , height = popup.offsetHeight
  let bcr = popup.getBoundingClientRect()
  if (bcr.bottom > document.documentElement.clientHeight) {
    popup.style.top = (top - height - 20)+'px'
  }
  let offsetRight = bcr.right - document.documentElement.clientWidth
  if (offsetRight > 0) {
    popup.style.left = (left - offsetRight)+'px'
  }
}

function handleThread(thread) {
  let threadVue = threadVueFromDOM(thread)
  if (! threadVue) return;
  thread.parentNode.setAttribute('board-id', threadVue.thread.board.dir)
  addThreadControls(thread, threadVue)
}

function threadVueFromDOM(thread) {
  try {
    let threadID = thread.__vue__.thread.thread.id
    return contentVue.threads.find(thread => thread.thread.id == threadID)
  }
  catch(e) {
    console.warn('[0u] Unable to find thread model', thread, e)
    return null
  }
}

function getPostDataFromDOM(post) {
  try {
    let postVue = post.parentNode.__vue__
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
        attachments: postVue.post.attachments
      }
    }
    else if (postVue.$el.classList.contains('post-popup')) {
      let popupVue = postVue.$parent.popupPost
      return {
        id: popupVue.id,
        isOpPost: popupVue.isOpPost,
        dir: popupVue.boardDir,
        threadID: popupVue.threadId,
        isPopup: true,
        popupVue: popupVue,
        postVue: postVue,
        message: popupVue.message,
        attachments: popupVue.attachments
      }
    }
    else return null
  }
  catch(e) {
    console.warn('[0u] Unable to find post model', post, e)
    return null
  }
}

function addThreadControls(threadDOM, threadVue) {
  if (!IS_OCHKO) {
    let controlsContainer = Array.prototype.find.call(threadDOM.querySelectorAll(':scope > div > div:not(.thread-tree)'), div => !div.querySelector('.post-op'))
    if (!controlsContainer || controlsContainer.classList.contains('ZU-thread-controls')) return;
    let href = controlsContainer.querySelector('a').getAttribute('href')
    if (threadVue.skippedPosts) {
      if (controlsContainer.querySelector('span')) {
        controlsContainer.querySelector('span').classList.add('ZU-delete-on-threadexpand')
      }
      controlsContainer.insertAdjacentHTML('beforeEnd', `<span class="ZU-expand-thread-container ZU-delete-on-threadexpand"> | <a href="${href}" onclick="return false" class="ZU-expand-thread">Развернуть</a></span>`)
    }
    controlsContainer.insertAdjacentHTML('beforeEnd', `<span class="ZU-update-thread-container"> | <a href="${href}" onclick="return false" class="ZU-update-thread">Обновить</a></span>`)
    controlsContainer.classList.add('ZU-thread-controls')
  }
  
  let op = threadDOM.querySelector('.post-op')
  , opPostID = op.querySelector('.post-id')
  op.querySelector('.post-header').classList.add('ZU-hide-board-by-op-container')
  opPostID.insertAdjacentHTML('afterBegin', `<span title="Скрыть доску" class="post-button ZU-hide-board-by-op"><i class="fa fa-minus-square-o"></i></span>`)
}




var settingsPanel = {
  modules: {
    checkbox: {
      build: checkbox => `
        <li title="${checkbox.description || checkbox.title}">
          <label for="ZU-SP-${checkbox.id}"><input data-id="${checkbox.id}" id="ZU-SP-${checkbox.id}" type="checkbox"${settings[checkbox.id] ? ' checked' : ''}> ${checkbox.title}</label>
        </li>`,
      events: {
        change: ev => {
          let checkbox = ev.target
          settings[checkbox.dataset.id] = checkbox.checked
        }
      }
    },
    slider: {
      build: slider => `
        <li title="${slider.description || slider.title}">
          <label for="ZU-SP-${slider.id}">${slider.title}
            <span class="ZU-SP-slider-value">(${slider.displayValue ? slider.displayValue(settings[slider.id]) : settings[slider.id]})</span>
            <input type="range" id="ZU-SP-${slider.id}" data-id="${slider.id}" value="${settings[slider.id]}" min="${slider.min}" max="${slider.max}" step="${slider.step}">
          </label>
        </li>`,
      events: {
        change: (ev, sliderObj) => {
          let sliderDOM = ev.target
          , val = +sliderDOM.value
          settings[sliderObj.id] = val
        },
        input: (ev, sliderObj) => {
          let sliderDOM = ev.target
          , val = +sliderDOM.value
          sliderDOM.findParent('label').querySelector('.ZU-SP-slider-value').innerText = `(${sliderObj.displayValue(val)})`
        }
      }
    }
  },
  controls: [
    {
      type: 'checkbox',
      id: 'momInRoom',
      title: "Мамка в комнате",
      description: "Маскировать все картинки"
    },
    {
      type: 'checkbox',
      id: 'unhideSpoilers',
      title: "Раскрыть все спойлеры",
      description: "Раскрыть все спойлеры, чтобы видеть их содержимое без наведения"
    },
    {
      type: 'checkbox',
      id: 'unmaskOnHover',
      title: "Раскрывать NSFW по наведению",
      description: "Раскрывать замаскированные картинки по наведению"
    },
    {
      type: 'checkbox',
      id: 'thumbNoScroll',
      title: "Разворот без скролла",
      description: "Не скроллить при разворачивании картинок"
    },
    {
      type: 'slider',
      id: 'updateInterval',
      title: "Период обновления",
      title: "Период обновления треда",
      min: 0,
      step: 5,
      max: 60,
      condition: () => state.type==="thread",
      displayValue: val => val ? `${val} с` : "Выкл."
    },
    {
      type: 'checkbox',
      id: 'catalogMode',
      title: "Режим каталога",
      description: "Отображать треды в виде каталога",
      condition: () => catalog.isApplicable,
    },
    {
      type: 'checkbox',
      id: 'turnOffSnow',
      title: "Убрать снег",
      description: "Не использовать анимацию в качестве фона. Имеет смысл только в период нового года (~15 декабря - ~14 января)"
    },
  ],
  install: function() {
    let controls = this.controls.filter(control => !control.condition || control.condition())
    document.querySelector('.headmenu').insertAdjacentHTML('beforeEnd',  `
      <div class="dropdown-menu ZU-settings-dropdown ZU-dropdown" id="ZU-settings">
        <div id="ZU-settings-main" class="ZU-top-menu-page">
          <ul class="ZU-settings-list">
            ${controls.reduce((htm, control) => htm + this.modules[control.type].build(control), '')}
          </ul>
          <button class="btn btn-default btn-xs ZU-enter-autohide-top"><span>Автоскрытие</span></button>
        </div>
        <div id="ZU-top-autohide" class="ZU-top-menu-page" hidden>
          <div class="btn-group">
            <button class="btn btn-default btn-xs ZU-exit-autohide-top"><span><i class="fa fa-chevron-left"></i> <i class="fa fa-save"></i> Назад</span></button>
            <!-- button class="btn btn-default btn-xs"><span><i class="fa fa-undo"></i></span></button -->
          </div>
          <div class="btn-group ZU-autohide-type-switch ZU-radio-btn-group" data-toggle="buttons">
            <label class="btn btn-xs btn-default active">
              <input type="radio" name="ZU-autohide-type" value="txt" autocomplete="off" checked> Текст
            </label>
            <label class="btn btn-xs btn-default">
              <input type="radio" name="ZU-autohide-type" value="img" autocomplete="off"> Картинки
            </label>
          </div>
          <br>
          <textarea id="ZU-autohide-text" cols="30" rows="10" class="form-control ZU-autohide-content"></textarea>
          <div id="ZU-autohide-images" class="ZU-autohide-content" hidden>
            ${autohideAtt.getListHTML()}
          </div>
        </div>
      </div>`)
    let spellsVal = settings.autohide
    .map(spell => (typeof spell === 'object') ? `/${spell.source}/${spell.flags}` : spell)
    .join('\n')
    , autohideTextarea = document.querySelector('#ZU-autohide-text')
    if (spellsVal)
      autohideTextarea.value = spellsVal
    function unwrap() {
      autohideTextarea.setAttribute('wrap', !!autohideTextarea.value.length ? 'off' : 'soft')
    }
    autohideTextarea.addEventListener('input', unwrap)
    unwrap()
    ;[].forEach.call(document.querySelectorAll('input[name=ZU-autohide-type]'), input => {
      input.addEventListener('change', function() {
        if (this.value == 'img') {
          fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-autohide-text', '#ZU-autohide-images')
        }
        if (this.value == 'txt') {
          fancyResizeXfade(document.querySelector('#ZU-settings'), '#ZU-autohide-images', '#ZU-autohide-text')
        }
      })
    })
    controls.forEach(control => {
      if (state.condition && !state.condition()) return;
      let allEvents = Object.assign(Object.create(this.modules[control.type].events || {}), control.events || {})
      , controlDOM = document.querySelector(`#ZU-SP-${control.id}`)
      if (! controlDOM) return;
      for (let eventName in allEvents) {
        controlDOM.addEventListener(eventName, ev => allEvents[eventName](ev, control))
      }
    })
  }
}


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
  handleRoute: function(type) {
    catalog.toggle()
    if (this.enter.hasOwnProperty(type)) {
      this.enter[type]()
    }
    if (type !== this.currentRoute && this.leave.hasOwnProperty(this.currentRoute))  {
      this.leave[this.currentRoute]()
    }
    this.currentRoute = type
  }
}



// CSS injector
var injector = {
  inject: function(alias, css) {
    var id = `injector:${alias}`
    var existing = document.getElementById(id)
    if(existing) {
      existing.innerHTML = css
      return
    }
    var head = document.head || document.getElementsByTagName('head')[0]
    , style = document.createElement('style');
    style.type = 'text/css'
    style.id = id
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    head.appendChild(style)
  },
  remove: function(alias) {
    var id = `injector:${alias}`
    var style = document.getElementById(id)
    if(style) {
      var head = document.head || document.getElementsByTagName('head')[0]
      if(head)
        head.removeChild(document.getElementById(id))
    }
  }
}


function forAllNodes(selFnMap, parent=document.body, options={}) {
  let config = Object.assign({
    autoStart: true, // whether or not observer shall start observing immediately
    subtree: false,
    childList: true,
    queryChildren: false //whether or not inserted nodes shall be searched for selector-matching elements
  }, options)
  , afterClass
  // Setup observer
  let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      Array.prototype.forEach.call(mutation.addedNodes, node => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        selFnMap.forEach(sf => {
          if (node.matches(sf.selector)) {
            sf.fn(node)
          }
          else if (config.queryChildren || sf.queryChildren) {
            let foundChildren = node.querySelectorAll(sf.selector)
            if (foundChildren) {
              Array.prototype.forEach.call(foundChildren, childNode => {
                sf.fn(childNode)
              })
            }
          }
        })
      })
    })
  })
  function start() {
    // Handle existing nodes
    selFnMap.forEach(sf => {
      let existingNodes = parent.querySelectorAll(sf.selector)
      Array.prototype.forEach.call(existingNodes, node => {
        sf.fn(node)
      })
    })
    // Handle future nodes
    observer.observe(parent, config)
  }
  if (config.autoStart) {
    start()
  }
  return {
    start: start,
    stop: () => observer.disconnect()
  }
}

function externallyResolvingPromise() {
  let promiseResolve, promiseReject
  , promise = new Promise(function(resolve, reject){
    promiseResolve = resolve;
    promiseReject = reject;
  });

  return {
    promise: promise,
    resolve: promiseResolve,
    reject: promiseReject
  }
}

// Array.prototype.includes() polyfill
// https://github.com/kevlatus/polyfill-array-includes/blob/master/array-includes.js
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {

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
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
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
;[Element.prototype, Text.prototype].forEach(e => {
  e.matches || (e.matches=e.matchesSelector || function(selector) {
    var matches = document.querySelectorAll(selector)
    return Array.prototype.some.call(matches, e => {
       return e === this
    })
  })
  e.findParent = function(selector) {
    let node = this
    while(node && !node.matches(selector)) {
      node = node.parentNode
      if (! node.matches) return null;
    }
    return node
  }
})

// event path polyfill
;(e => {
  if (e.hasOwnProperty('path')) return;
  Object.defineProperty(e, 'path', {
    get: function() {
      if (! this.target) return [];
      if (this.pathCached) return this.pathCached;
      let path = []
      , node = this.target
      while(node && node != document.body) {
        path.push(node)
        node = node.parentNode
      }
      this.pathCached = path
      return path
    },
    enumerable: true,
    configurable: false
  })
})(Event.prototype)

function setupVueGetter() {
  Object.defineProperty(Element.prototype, '__vue__', {
    get: function() {
      let stack = [app]
      , child, found = null
      while (stack.length && !found) {
        child = stack.pop()
        if (child && child.$el && child.$el === this) {
          found = child
        }
        else if (child && child.$children)
          stack = stack.concat(child.$children)
      }
      return found
    },
    enumerable: true,
    configurable: false
  })
}

// event path polyfill
function getEventPath(e) {
  let path = []
  , node = e.target
  while(node != document.body) {
    path.push(node)
    node = node.parentNode
  }
  return path
}

function getPosts(threadID, after, before) {
  return new Promise((resolve, reject) => {
    fetch(`${getOrigin()}/api/thread?thread=${threadID}${after ? '&after='+after : ''}`
      , {credentials: 'same-origin'}
    ).then(res => {
      if (res.ok) {
        res.json().then(resObj => {
          if (resObj.posts && resObj.posts.length) {
            let posts = resObj.posts
            if (before) {
              posts = posts.filter(post => (+post.id) < (+before) )
            }
            resolve(posts)
          }
          else {
            resolve([])
          }
        })
        .catch(e => reject(e))
      }
      else {
        res.text().then(text => console.warn('[0u] Bad response: ', text)).catch(nop)
        reject(res.status)
      }
    })
    .catch(e => reject(e))
  })
}

function handleNetworkError(err) {
  nativeAlert('error', 'Сетевая ошибка')
  if (err)
    console.error(err)
}

// GUI alerts
// Types available: info, error, success
function nativeAlert(type, message) {
  type = 'alert' + type.charAt(0).toUpperCase() + type.slice(1)
  app.$bus.emit(type, message)
}

function LSfetchJSON(key) {
  let val = null, data = localStorage[key]
  if (typeof data !== 'undefined') {
    try {
      val = JSON.parse(data)
    }
    catch(e) {
      console.error(e)
      localStorage.removeItem(key)
    }
  }
  return val
}

function getOrigin() {
  return `${document.location.protocol}//${document.location.host}`
}


function start() {
  let sidebarExtPromise = externallyResolvingPromise()
  , contentExtPromise = externallyResolvingPromise()
  Promise.all([sidebarExtPromise.promise, contentExtPromise.promise]).then(() => {
    appObserver.stop()
    forAllNodes([{
      selector: '#content > div',
      fn: onFreshContent
    }], document.querySelector('#content'))
  })
  appObserver = forAllNodes([
    {
      selector: '#sidebar',
      fn: () => sidebarExtPromise.resolve()
    },
    {
      selector: '#content',
      fn: () => contentExtPromise.resolve()
    }
  ], document.body, {subtree: true, queryChildren: true})

  forAllNodes([{
    selector: '.sidebar-logo',
    fn: NullRestyler.addControls.bind(NullRestyler)
  }], document.body, {subtree: true, queryChildren: true})

  Object.keys(eventDispatcher).forEach(evType => {
    document.addEventListener(evType, eventDispatcher[evType], true)
  })
}
start()

function onFreshContent() {
  try {
    state.type = app.$router.currentRoute.name
  }
  catch(e) {
    console.warn('[0u] Unable to determine app state', e)
  }

  content = document.querySelector('#content > div')
  if (state.type==='thread')
    singleThread = document.querySelector('.post-op').parentNode.parentNode
  if (! state.initialized) {
    init()
  }
  else {
    contentVue = content.__vue__
    if (state.type==='thread')
      singleThreadVue = singleThread.__vue__
  }

  alerts = document.querySelector('.alerts-wrapper')
  alertsVue = alerts.__vue__
  setupAlertInterceptor()

  addSettingsButtons()

  settingsPanel.install()

  ZURouter.handleRoute(state.type)

  refresher.init()

  if (state.type == 'home')
    formOnZeroPage.init()
}

function freezeSize(el) {
  let bcr = el.getBoundingClientRect()
  if (el.style.width) {
    el.__frozenWidth = el.style.width
  }
  else {
    el.style.width = `${bcr.width}px`
    el.__frozenWidth = null
  }
  if (el.style.height) {
    el.__frozenHeight = el.style.height
  }
  else {
    el.style.height = `${bcr.height}px`
    el.__frozenHeight = null
  }
}

function unfreezeSize(el) {
  el.style.height = el.__frozenHeight || null
  el.style.width = el.__frozenWidth || null
}

function fancyResizeXfade(container, hide, show) {
  // !!! This function needs proper CSS to be set up

  hide = container.querySelectorAll(hide)
  show = container.querySelectorAll(show)

  let foEl, fiEl

  // apply transformations
  ;[].forEach.call(hide, el => el.hidden = true)
  ;[].forEach.call(show, el => {
    el.hidden = false
    freezeSize(el)
  })

  // memoize resulting size
  let [endWidth, endHeight] = [container.offsetWidth, container.offsetHeight]

  // rollback transformations; setup fade
  ;[].forEach.call(hide, el => {
    el.hidden = false
    setTimeout(() => {
      el.classList.add('fancy-fadeout')
      freezeSize(el)
    }, 0)
    foEl = el
  })
  ;[].forEach.call(show, el => {
    el.hidden = true
    el.classList.add('fancy-fadein')
    fiEl = el
  })

  setTimeout(() => {
    // freeze current size
    freezeSize(container)

    // run resize
    container.classList.add('fancy-resize')
    setTimeout(() => {
      Object.assign(container.style, {
        height: `${endHeight}px`,
        width: `${endWidth}px`
      })
    }, 0)

    // get timeline points from CSS
    let [fadeOutDuration, resizeDelay, resizeDuration, fadeInDelay, fadeInDuration] =
    [
      [foEl, 'transitionDuration'],
      [container, 'transitionDelay'],
      [container, 'transitionDuration'],
      [fiEl, 'animationDelay'],
      [fiEl, 'animationDuration']
    ]
    .map(ep => {
      return getComputedStyle(ep[0])[ep[1]]
    })
    .map(prop => (+prop.split('s')[0])*1000)

    // hide and show elements @ appropriate timepoints
    setTimeout(() => {
      ;[].forEach.call(hide, el => {
        el.hidden = true
      })
      ;[].forEach.call(show, el => {
        el.hidden = false
      })
    }, fadeOutDuration)

    // clean up
    setTimeout(() => {
      container.classList.remove('fancy-resize')
      unfreezeSize(container)
      ;[].forEach.call(hide, el => {
        el.classList.remove('fancy-fadeout')
        unfreezeSize(el)
      })
      ;[].forEach.call(show, el => {
        el.classList.remove('fancy-fadein')
        unfreezeSize(el)
      })
    }, resizeDelay + resizeDuration + fadeInDelay + fadeInDuration)
  }, 0)
}

var formOnZeroPage = {
  defaultBoard: 'b',
  init: function() {
    let buttonsRight = document.querySelector('.headmenu-buttons-right')
    buttonsRight.insertAdjacentHTML('afterbegin', `
      <div class="headmenu-buttons headmenu-buttons-right">
      <div class="btn-group">
        <button type="button" class="btn btn-primary ZU-toggleNewThreadForm"><i class="fa fa-pencil-square-o"></i> 
          <span class="btn-caption hidden-xs">Создать тред</span>
        </button>
      </div>
      </div>`
    )
    buttonsRight.querySelector('.ZU-toggleNewThreadForm').onclick = () => this.toggleNewThreadForm()
    // prevent title replacement
    let title = document.querySelector('.headmenu-title')
    , tSpan = title.querySelector('span')
    , staticTitle = tSpan.outerHTML
    tSpan.style.display = 'none'
    title.insertAdjacentHTML('beforeEnd', staticTitle)
    // board selector
    let sel = ` <i class="fa fa-arrow-right"></i><select class="form-control ZU-boardlist-select">`
    , opts = '', optSel = '', optDefault = ''
    document.querySelector('#sidebar').__vue__.boardList.slice().sort((a,b) => a.dir < b.dir ? -1 : 1)
    .forEach(board => {
    	let name = board.name.length > 40 ? board.name.slice(0,40-3)+'...' : board.name
    	, opt = `<option value="${board.dir}">${board.dir} — ${name}</option>`
    	if (board.dir == settings.selectedBoard && settings.selectedBoard != this.defaultBoard)
    		optSel = opt
    	else if (board.dir == this.defaultBoard)
    		optDefault = opt
    	else
    		opts += opt
    })
    sel += optSel + optDefault + opts + '</select>'
    document.querySelector('.new-thread-form .btn-primary').insertAdjacentHTML('afterEnd', sel)
    document.querySelector('.ZU-boardlist-select').addEventListener('change', function() {
    	document.querySelector('.new-thread-form').parentElement.__vue__.board.dir = this.value
    	settings.selectedBoard = this.value
    	settings.save()
    })
  },
  toggleNewThreadForm: function() {
    let form = document.querySelector('.new-thread-form')
    form.classList.add('ZU-zeropage-newthreadform')
    form.parentElement.__vue__.board.dir = document.querySelector('.ZU-boardlist-select').value
    if (form.style.display == 'none') {
      form.style.display = null
    }
    else {
      form.style.display = 'none'
    }
  }
}

var textSteganography = {
	charMap: [0x200b,0x200c,0x200d,0x200e,0x200f].map(n => String.fromCharCode(n)),
	encode: function(txt) {
		return txt
		.split('')
		.map(char => char
			.charCodeAt(0)
			.toString(4)
			.split('')
			.map(digit => this.charMap[digit])
			.join('')
		).join(this.charMap[4])
	}, //startTag='<mark class="ZU-SSS">', endTag='</mark>'
	decode: function(htm, startTag='', endTag='', safe=false) {
		return htm.replace(/[\u200b\u200c\u200d\u200e\u200f]+/g, match => {
			let decoded = match
				.split(this.charMap[4])
				.map(chars => String.fromCharCode(
					parseInt(chars
						.split('')
						.map(char => this.charMap.indexOf(char))
						.join(''), 4 )
					)
				).join('')
			if (safe) {
				decoded = safe_tags(decoded)
			}
			return startTag + decoded + endTag
		})
	},
	hideSelection: function(area) {
		area.value = 
			area.value.slice(0, area.selectionStart) + 
			this.encode(this.decode(area.value.slice(area.selectionStart, area.selectionEnd))) + 
			area.value.slice(area.selectionEnd)
		touchTextarea(area)
	},
	removeSpoilers: function(area) {
		area.value = this.decode(area.value)
		touchTextarea(area)
	}
}

function safe_tags(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}

injector.inject('ZU-global', `
  .btn-open-sidebar {
    display: inline-block !important;
  }
  .headmenu-title {
    white-space: nowrap;
  }
  .sidebar, #content {
    transition: margin-left 0.3s cubic-bezier(0, 0.85, 0.72, 0.99);
    will-change: margin-left;
  }
  .ZU-sidebar-hidden .sidebar {
    margin-left: -250px;
  }
  .ZU-sidebar-hidden #content {
    margin-left: 0;
  }
  .headmenu.ZU-sidemenu-animation-allowed {
    transition: left 0.3s cubic-bezier(0, 0.85, 0.72, 0.99)
  }
  .ZU-sidebar-hidden .headmenu {
    left: 0;
  }
  .ZU-settings-dropdown {
    margin: 4px;
    top: 30px;
    padding: 6px 14px;
  }
  .ZU-dropdown {
    display: block;
    transform: translate(0px, 10px);
    transition: transform 0.2s, opacity 0.2s, visibility 0s 0.2s;
    opacity: 0;
    user-select: none;
    visibility: hidden;
  }
  .ZU-dropdown-show {
    transform: translate(0px, 0);
    opacity: 1;
    visibility: visible;
    transition: transform 0.2s, opacity 0.2s;
  }
  .ZU-settings-dropdown label,
  .ZU-noko-label {
    font-weight: normal;
    margin-bottom: 0;
  }
  .ZU-noko-label {
    vertical-align: middle;
  }
  .reply-form-limit-counter {
    /* min-width: 60px; */
    display: inline-block;
  }
  .ZU-noko {
    margin: 0;
    vertical-align: -1px;
  }
  .ZU-settings-dropdown input[type="radio"],
  .ZU-settings-dropdown input[type="checkbox"] {
    margin: 3px 0 0;
    line-height: normal;
    vertical-align: top;
  }
  .ZU-settings-dropdown li {
    margin: 4px 0;
  }

  .ZU-svg-container-btn {
    font-size: 0;
    padding: 0;
    line-height: 0;
  }
  .ZU-svg {
    fill: currentColor;
  }
  .ZU-svg-32 {
    height: 32px;
    width: 32px;
  }
  .ZU-svg-16 {
    height: 16px;
    width: 16px;
  }
  .dropdown-menu .ZU-svg-16 {
    margin-right: 5px;
  }
  .ZU-share-dropdown {
    left: 74px;
  }
  .ZU-boardhideunhide {
    position: absolute;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s, color 0.2s;
  }
  .ZU-boardhideunhide:hover {
    color: #3ccd9d;
  }
  .sidemenu-board-item:hover .ZU-boardhideunhide {
    opacity: 1
  }
  .ZU-board-unhide-icon {
    display: none;
  }
  body > textarea {
    position:fixed;
  }
  .ZU-show {
    display:block;
  }
  .ZU-refresh-progressbar,
  .ZU-refreshbtn-shadow-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
  .ZU-refreshbtn-shadow-overlay {
    width: 100%;
  }
  .ZU-refresh-btn {
    box-shadow: none!important;
    overflow: hidden;
  }
  .ZU-refresh-btn:active .ZU-refreshbtn-shadow-overlay {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .ZU-refresh-progressbar {
    background: linear-gradient(to bottom, transparent 0%, rgba(22, 160, 133, 0.48) 100%);
    width: 0%;
    opacity: 0;
    transition: width 0s 0.4s, opacity 0.4s;
  }
  .ZU-refresh-btn i,
  .ZU-refresh-btn span {
    position: relative;
  }
  .ZU-nomargin-btn-group {
    margin-left: -1px;
    float: right;
  }
  .ZU-panel-btn {
    width: 40px;
  }
  .ZU-onactive-show,
  .active .ZU-onactive-hide {
    display: none;
  }
  .active .ZU-onactive-show {
    display: block;
  }
  .ZU-btn-link {
    color: #333333 !important;
    text-decoration: none !important;
  }
  .ZU-btn-link.active {
    color: #333;
    background-color: #e6e6e6;
    border: 1px solid #adadad;
    outline: none !important;
    background-image: none;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .post-img .post-embed .post-embed-play-btn {
    z-index: 2
  }
  .post-img .post-img-buttons {
    margin-top: -36px;
    max-height: 18px;
  }
  .post .ZU-hide-board-by-op-container {
    padding-left: 6px;
  }
  span.ZU-hide-board-by-op {
    padding: 0;
  }
  .ZU-settingspage-icon {
    vertical-align: middle;
    margin: -8px;
    margin-right: 0;
  }
  .ZU-settings-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .fancy-fadeout {
    transition-duration: 0.2s;
    transition-property: opacity;
  }
  .fancy-resize {
    transition-duration: 0.4s;
    transition-property: height, width;
    transition-delay: 0s;
    overflow: hidden;
  }
  .fancy-fadeout {
    opacity: 0;
  }
  .fancy-fadein {
    animation: fancyfadein 0.2s;
  }
  @keyframes fancyfadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  #ZU-top-autohide {
    padding: 6px 0;
  }
  .ZU-enter-autohide-top {
    margin-top: 4px;
    width: 100%;
  }
  #ZU-settings-main {
    padding-bottom: 5px;
  }
  .ZU-autohide-type-switch {
    float: right;
  }
  .ZU-autohide-content {
    margin-top: 8px;
    min-width: 217px;
    min-height: 70px;
  }
  .ZU-xbtn {
    padding: 0px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    border: none;
    border-radius: 100px;
  }
  .ZU-autohide-attachemnt-entry{
    background-color: #efefef;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    box-sizing: border-box;
    border: 1px solid #dadada;
    margin: 4px;
    background-size: cover;
    background-position: center center;
    transition: transform 0.3s;
  }
  .ZU-autohide-attachemnt-entry .ZU-xbtn {
    transform: scale(0);
    transition: transform 0.2s;
    float: right;
  }
  .ZU-autohide-attachemnt-entry:hover .ZU-xbtn {
    transform: scale(1);
  }
  #ZU-autohide-images > div {
    font-size: 0;
  }
  #ZU-autohide-images {
    overflow: auto;
    resize: both;
    /*margin: 4px -4px -4px;*/
    max-width: 600px;
  }
  .ZU-away {
    transform: scale(0);
  }
  .threads-scroll-spy {
    width: auto;
  }
  .threads-scroll-spy > ul {
    width: 400px;
  }
  .threads-scroll-spy .threads-scroll-toggler {
    left: -20px;
    right: unset;
  }
  .dialog-view textarea {
    min-height: 100px;
    resize: vertical;
    max-height: calc(100vh - 230px);
  }
  .dialog-view .dialog-footer.panel-footer {
    height: auto;
  }
  .dialog.panel.panel-default {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  .dialog-footer.panel-footer {
    position: relative;
  }
  .dialog-body.panel-body {
    margin-bottom: 40px;
    position: relative;
  }
  .dialog-footer.panel-footer .input-group {
    display: flex;
  }
  .dialog-footer.panel-footer .input-group-btn {
    width: auto;
  }
  .dialog-footer.panel-footer .input-group-btn button {
    height: 100%;
  }
` + `
  .sidebar-logo {
    transition: transform .2s;
  }
  .edit-null .sidebar-logo {
    transform: translateX(-75px);
  }
  .ZU-sidebar-btn {
    background: none;
    border: none;
    color: #666;
    outline: none;
    transition: color .2s;
    font-size: 14px;
  }
  .ZU-sidebar-btn:hover {
    color: #1abc9c;
  }
  .ZU-restyle-null {
    position: absolute;
    opacity: 0;
    transition: color .2s, opacity .2s;
  }
  #sidebar:not(.edit-null) .sidebar-logo:hover .ZU-restyle-null {
    opacity: 1;
  }
  .ZU-nulltwk-container  {
    opacity: 0;
    pointer-events: none;
    width: 137px;
    height: 106px;
    color: #999;
    font-family: Roboto;
    text-align: center;
    font-size: 0;
    display: inline-block;
    vertical-align: -7px;
    user-select: none;
    position: absolute;
    right: 20px;
    transform: translate(10px);
    top: 8px;
    z-index: 2;
    transition: opacity .2s, transform .2s;
  }
  .edit-null
  .ZU-nulltwk-container {
    opacity: 1;
    pointer-events: all;
    transform: none;
  }
  .ZU-nulltwk-range-container label,
  .ZU-nulltwk-range-container output {
    font-size: 11px;
    margin-bottom: -1px;
  }
  .ZU-nulltwk-range-container label {
    float: left;
  }
  .ZU-nulltwk-range-container output {
    float: right;
    padding: 0;
    line-height: normal;
    color: inherit;
  }
  .ZU-nulltwk-save, .ZU-nulltwk-revert {
    padding: 0;
    margin: 0 8px;
    color: #999;
  }
  .ZU-nulltwk-btn:hover {
    color: #3c9;
  }
  .ZU-nulltwk-range-container {
    transition: color .2s;
    margin: 0;
    display: block;
    margin-top: -2px;
    margin-bottom: 3px;
  }
  .ZU-nulltwk-range-container:hover {
    color: #3c9;
  }
  .ZU-range {
    width: 100%;
    margin: 0;
    -webkit-appearance: none;
    background: transparent;
  }
  .ZU-range::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
  .ZU-range:focus {
    outline: none;
  }
  .ZU-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 8px;
    width: 8px;
    background-color: #b7b7b7;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 3px black;
    transition: transform .2s, background-color .2s;
  }
  .ZU-range::-moz-range-thumb {
    height: 8px;
    width: 8px;
    background-color: #b7b7b7;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 3px black;
    transition: transform .2s, background-color .2s;
  }
  .ZU-range::-ms-thumb {
    height: 8px;
    width: 8px;
    background-color: #b7b7b7;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 3px black;
    transition: transform .2s, background-color .2s;
  }
  .ZU-range::-webkit-slider-thumb:hover {
    transform: scale(1.25);
  }
  .ZU-nulltwk-range-container:hover .ZU-range::-webkit-slider-thumb {
    background-color:#3c9;
  }
  .ZU-range::-moz-range-thumb:hover {
    transform: scale(1.25);
  }
  .ZU-nulltwk-range-container:hover .ZU-range::-moz-range-thumb {
    background-color:#3c9;
  }
  .ZU-range::-ms-thumb:hover {
    transform: scale(1.25);
  }
  .ZU-nulltwk-range-container:hover .ZU-range::-ms-thumb {
    background-color:#3c9;
  }
  .ZU-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    box-sizing: border-box;
    cursor: pointer;
    background: linear-gradient(to bottom, transparent 2.999px, #000 3px, #000 3.999px, #777 4px, #777 4.999px, transparent 5px)
  }
  .ZU-range::-moz-range-track {
    width: 100%;
    height: 8px;
    box-sizing: border-box;
    cursor: pointer;
    color: transparent;
    border: none;
    background: linear-gradient(to bottom, transparent 2.999px, #000 3px, #000 3.999px, #777 4px, #777 4.999px, transparent 5px)
  }
  .ZU-range::-ms-track {
    width: 100%;
    height: 8px;
    box-sizing: border-box;
    cursor: pointer;
    background: transparent;
  }
  .ZU-range::-ms-fill-lower, .ZU-range::-ms-fill-upper {
    background: linear-gradient(to bottom, transparent 2.999px, #000 3px, #000 3.999px, #777 4px, #777 4.999px, transparent 5px)
  }
  .ZU-boardlist-select {
  	display: inline-block;
  	width: 140px;
  	padding: 0px;
  	height: 25px;
  	vertical-align: middle;
  	margin: 0 4px;
  }
  .ZU-zeropage-newthreadform {
  	z-index: 2;
  	position: relative;
  }
  .ZU-SSS, .ZU-SSS:hover {
  	background: #dcc1ff;
  }
`)
