// ==UserScript==
// @name         0chan Utilities
// @namespace    http://0chan.hk/userjs
// @version      1.2.0
// @description  Various 0chan utilities
// @updateURL    https://github.com/Juribiyan/0chan-utilities/raw/master/es5/0chan-utilities.meta.js
// @author       Snivy [0xf330f91f]
// @include      https://0chan.hk/*
// @include      http://nullchan7msxi257.onion/*
// @grant        none
// @icon         https://raw.githubusercontent.com/Juribiyan/0chan-utilities/master/icon.png
// ==/UserScript==

var _ref;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = '<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n  <symbol id="i-logo" viewBox="0 0 32 32">\n  <path d="M19.454 21.933c-0.59 0.339-0.39 1.151-0.322 1.371 0.011 0.033-0.006 0.068-0.038 0.080-0.222 0.092-0.448 0.174-0.678 0.245-0.032 0.010-0.067-0.005-0.080-0.037-0.092-0.213-0.464-0.962-1.136-0.845-0.672 0.118-0.763 0.948-0.776 1.18-0.001 0.034-0.030 0.061-0.064 0.063-0.24 0.011-0.481 0.011-0.721 0-0.034-0.001-0.061-0.028-0.064-0.063-0.013-0.232-0.104-1.062-0.776-1.18-0.671-0.117-1.044 0.633-1.135 0.845-0.014 0.032-0.049 0.047-0.081 0.037-0.229-0.071-0.456-0.152-0.678-0.245-0.032-0.013-0.049-0.047-0.038-0.080 0.067-0.221 0.268-1.032-0.322-1.371-0.591-0.338-1.2 0.241-1.359 0.41-0.024 0.025-0.063 0.027-0.090 0.007-0.191-0.145-0.376-0.299-0.553-0.459-0.025-0.024-0.028-0.061-0.008-0.089 0.14-0.185 0.61-0.88 0.17-1.398-0.438-0.517-1.209-0.181-1.417-0.076-0.031 0.015-0.068 0.005-0.087-0.024-0.13-0.201-0.25-0.407-0.36-0.62-0.017-0.029-0.006-0.066 0.022-0.085 0.196-0.126 0.875-0.621 0.643-1.257-0.234-0.636-1.075-0.58-1.306-0.553-0.034 0.005-0.066-0.018-0.073-0.051-0.052-0.233-0.095-0.468-0.125-0.704-0.005-0.034 0.018-0.065 0.051-0.073 0.228-0.052 1.037-0.286 1.037-0.962s-0.809-0.91-1.037-0.963c-0.033-0.007-0.056-0.039-0.051-0.072 0.031-0.236 0.073-0.471 0.125-0.705 0.007-0.033 0.039-0.054 0.073-0.051 0.231 0.029 1.072 0.083 1.305-0.553s-0.446-1.129-0.642-1.255c-0.029-0.019-0.039-0.056-0.022-0.086 0.11-0.211 0.23-0.418 0.36-0.619 0.018-0.030 0.056-0.039 0.087-0.024 0.208 0.105 0.979 0.441 1.417-0.077 0.438-0.517-0.029-1.213-0.17-1.397-0.020-0.028-0.017-0.066 0.008-0.089 0.177-0.162 0.361-0.315 0.553-0.459 0.027-0.022 0.065-0.018 0.088 0.007 0.16 0.169 0.769 0.746 1.36 0.409s0.39-1.151 0.322-1.371c-0.011-0.033 0.006-0.067 0.038-0.080 0.222-0.092 0.448-0.174 0.678-0.245 0.032-0.010 0.067 0.006 0.080 0.037 0.092 0.213 0.464 0.962 1.136 0.845 0.672-0.118 0.763-0.948 0.776-1.18 0.002-0.034 0.030-0.060 0.064-0.063 0.24-0.011 0.481-0.011 0.721 0 0.034 0.002 0.063 0.028 0.064 0.063 0.013 0.232 0.104 1.062 0.776 1.18 0.671 0.117 1.044-0.632 1.136-0.845 0.013-0.031 0.048-0.047 0.080-0.037 0.23 0.071 0.456 0.152 0.678 0.245 0.032 0.013 0.049 0.047 0.038 0.080-0.067 0.221-0.268 1.034 0.322 1.371s1.2-0.24 1.36-0.409c0.022-0.025 0.061-0.029 0.088-0.008 0.191 0.145 0.376 0.299 0.553 0.46 0.025 0.022 0.029 0.060 0.008 0.087-0.14 0.185-0.608 0.88-0.17 1.398s1.209 0.182 1.417 0.077c0.031-0.015 0.068-0.006 0.086 0.024 0.13 0.201 0.25 0.407 0.36 0.619 0.017 0.029 0.007 0.067-0.022 0.086-0.195 0.125-0.875 0.62-0.642 1.255s1.074 0.581 1.305 0.553c0.034-0.005 0.066 0.018 0.073 0.051 0.052 0.232 0.095 0.467 0.125 0.704 0.005 0.034-0.018 0.066-0.051 0.073-0.228 0.053-1.037 0.287-1.037 0.963s0.809 0.911 1.037 0.962c0.033 0.007 0.056 0.039 0.051 0.073-0.031 0.236-0.073 0.471-0.125 0.704-0.007 0.033-0.039 0.056-0.073 0.051-0.231-0.027-1.072-0.083-1.305 0.553s0.446 1.13 0.642 1.257c0.029 0.018 0.039 0.056 0.022 0.085-0.11 0.211-0.23 0.418-0.36 0.62-0.018 0.029-0.056 0.038-0.086 0.023-0.208-0.104-0.979-0.441-1.417 0.077-0.438 0.518 0.029 1.213 0.17 1.398 0.020 0.027 0.017 0.065-0.008 0.089-0.177 0.16-0.361 0.314-0.553 0.459-0.027 0.020-0.065 0.018-0.088-0.008-0.16-0.169-0.769-0.746-1.36-0.409zM16 14.106c0.014 0 0.028 0 0.041 0 0.193 0.005 0.361-0.061 0.496-0.197l1.987-1.97c0.189-0.188 0.266-0.434 0.215-0.695-0.051-0.26-0.215-0.461-0.46-0.564-0.7-0.294-1.47-0.458-2.278-0.458-3.218 0-5.827 2.587-5.827 5.778 0 0.802 0.164 1.565 0.462 2.259 0.105 0.243 0.307 0.407 0.569 0.456 0.262 0.051 0.511-0.024 0.7-0.211l1.987-1.97c0.136-0.136 0.203-0.301 0.199-0.493 0-0.014-0.001-0.027-0.001-0.041 0-1.046 0.855-1.894 1.91-1.894zM17.908 15.958c0 0.014 0.001 0.027 0.001 0.041 0 1.045-0.855 1.893-1.91 1.893-0.014 0-0.027 0-0.041 0-0.193-0.005-0.36 0.063-0.496 0.197l-1.987 1.97c-0.189 0.188-0.266 0.435-0.215 0.695s0.215 0.461 0.46 0.564c0.7 0.296 1.47 0.458 2.279 0.458 3.217 0 5.826-2.587 5.826-5.778 0-0.802-0.164-1.565-0.462-2.26-0.105-0.243-0.307-0.405-0.569-0.456s-0.511 0.025-0.7 0.213l-1.986 1.97c-0.136 0.135-0.203 0.301-0.2 0.492zM16 14.991c-0.562 0-1.017 0.451-1.017 1.009s0.455 1.008 1.017 1.008c0.562 0 1.017-0.451 1.017-1.008s-0.455-1.009-1.017-1.009z"></path>\n  </symbol>\n  <symbol id="i-1chan" viewBox="0 0 32 32">\n  <path d="M15.001 2.001c-8.284 0-15 6.267-15 14 0 7.731 6.716 13.998 15 13.998s15-6.267 15-13.998c0-7.734-6.716-14-15-14zM18.001 9.999l1.998 1.002v9.999l-1.998 0.999v-12zM16 8.001h-2.001l-6 4.998 4.002 2.001v9h3.999v-15.999zM15.001 5.735c6.073 0 10.998 4.597 10.998 10.266 0 5.667-4.925 10.264-10.998 10.264s-10.998-4.597-10.998-10.264c0-5.669 4.925-10.266 10.998-10.266z"></path>\n  </symbol>\n  <symbol id="i-spinner" viewBox="0 0 32 32">\n  <path d="M23.957 20.347c-0.113-0.066-0.198-0.113-0.31-0.18-1.528-0.735-2.461-2.367-2.447-4.088 0.005-1.767 1.030-3.354 2.608-4.209 1.143-0.617 2.105-1.639 2.61-3.037 0.765-2.116 0.13-4.592-1.571-6.066-2.712-2.324-6.729-1.531-8.432 1.434-0.569 0.987-0.794 2.097-0.727 3.153 0.118 1.684-0.763 3.281-2.209 4.1l-0.059 0.040c-1.521 0.886-3.382 0.86-4.852-0.104-0.35-0.239-0.758-0.439-1.172-0.567-2.135-0.784-4.618-0.118-6.075 1.634-2.286 2.738-1.479 6.741 1.443 8.437 1.856 1.075 4.074 0.931 5.766-0.12 1.439-0.935 3.262-1.044 4.752-0.18l0.224 0.13c1.49 0.862 2.279 2.487 2.22 4.221-0.106 2.008 0.924 3.996 2.778 5.071 2.7 1.566 6.146 0.59 7.648-2.152 1.318-2.622 0.387-6.021-2.197-7.518zM4.28 18.198c-1.153-0.669-1.573-2.154-0.89-3.338 0.666-1.157 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.695 1.141-2.173 1.564-3.326 0.895zM14.783 18.115c-1.153-0.669-1.573-2.152-0.89-3.338 0.68-1.186 2.145-1.58 3.326-0.895 1.179 0.685 1.571 2.154 0.89 3.338-0.683 1.186-2.173 1.564-3.326 0.895zM19.977 9.085c-1.153-0.669-1.573-2.152-0.893-3.338 0.683-1.186 2.145-1.58 3.326-0.895s1.573 2.154 0.89 3.338c-0.68 1.186-2.173 1.564-3.323 0.895zM19.963 27.289c-1.153-0.669-1.571-2.154-0.89-3.34 0.666-1.155 2.145-1.578 3.326-0.893 1.153 0.669 1.573 2.152 0.89 3.338-0.666 1.157-2.145 1.578-3.326 0.895z"></path>\n  </symbol>\n  </defs>\n  </svg>';
document.body.insertAdjacentHTML('afterBegin', '<div style="display:none">' + icons + '</div>');

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

var SAGE_THREAD = 14965;

var momInRoom = {
  mainCSS: '.post-img-thumbnail { \n      opacity: 0.2 ; \n      filter: blur(4px) grayscale(50%) ; \n    }}',
  hoverCSS: '.post-img .post-img-thumbnail,\n    .post-img .post-img-full {\n      transition: filter 0.3s, opacity 0.3s !important;\n    }\n    .post-img .post-img-thumbnail:hover,\n    .post-img .post-img-full:hover {\n      opacity: 1; \n      filter: none; \n    }',
  fullBlurCSS: '.post-img-full { \n      opacity: 0.2 ; \n      filter: blur(4px) grayscale(50%) ; \n    }',
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

var share = {
  sites: {
    '1chan': {
      name: "1chan.ca",
      link: function link(url, description) {
        return 'https://1chan.ca/live/addXS?link=' + url + '&description=' + description;
      },
      icon: {
        type: 'svg',
        name: '1chan',
        color: '#E42727'
      },
      width: 150,
      height: 50
    },
    telegram: {
      name: 'Telegram',
      link: function link(url, description) {
        return 'https://telegram.me/share/url?url=' + url + '&text=' + description;
      },
      icon: {
        type: 'fa',
        name: 'telegram',
        color: '#2ca5e0'
      },
      width: 600,
      height: 600
    },
    '1chanpl': {
      name: "1chan.pl",
      link: function link(url, description) {
        return 'https://1chan.pl/live/addXS?link=' + url + '&description=' + description;
      },
      icon: {
        type: 'svg',
        name: '1chan',
        color: '#dc143c'
      },
      width: 150,
      height: 50
    }
  },
  dropdown: function dropdown(url, description) {
    var _this = this;

    url = encodeURIComponent(url);
    return Object.keys(this.sites).reduce(function (htm, siteID) {
      var site = _this.sites[siteID];
      return htm + ('\n        <li>\n          <a class="ZU-share-link" data-url="' + url + '" data-description="' + description + '" data-site="' + siteID + '" href="javascript:void(0)">\n          ' + (site.icon ? '<span class="pull-left"><span' + (site.icon.color ? ' style="color:' + site.icon.color + '"' : '') + '>' + (site.icon.type == 'fa' ? '<i class="fa fa-' + site.icon.name + '"></i>' : '<svg class="ZU-svg ZU-svg-16 ' + (site.icon.extraClass ? site.icon.extraClass : '') + '">\n                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-' + site.icon.name + '"></use>\n              </svg>') + '</span></span>' : '') + '\n          ' + site.name + '</a>\n        </li>');
    }, '<ul class="dropdown-menu ZU-share-dropdown ZU-dropdown">') + '</ul>';
  },
  handleClick: function handleClick(link) {
    var selectedText = postQuotation,
        description = encodeURIComponent(selectedText ? selectedText.replace(/\n/g, ' ') : link.dataset.description),
        site = this.sites[link.dataset.site];
    window.open(site.link(link.dataset.url, description), 'targetWindow', 'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + (site.width || 666) + ',height=' + (site.height || 555));
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
    btn.insertAdjacentHTML('afterBegin', '<div class="ZU-refresh-progressbar"></div><div class="ZU-refreshbtn-shadow-overlay"></div>');
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

    if (s) injector.inject('ZU-thread-update-interval', '\n        .ZU-refresh-progressbar.ZU-rpb-full {\n          transition: width ' + s + 's linear;\n          width: 100%;\n          opacity: 1;\n        }');
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
  css: '\n    .thread-tree {\n      display: none;\n    }\n    div[board-id] {\n      width: 250px;\n      min-width: 250px;\n      display: inline-block;\n      height: 300px;\n      max-height: 300px;\n      min-height: 300px;\n      vertical-align: top;\n      margin: 4px !important;\n    }\n    .post-button {\n      padding: 0 4px;\n    }\n    .ZU-thread-controls {\n      display: none;\n    }\n    .thread-separator {\n      display: none;\n    }\n    .thread/*, .thread > div, .thread > div > div*/ {\n      height: 100%;\n    }\n    :not(.post-popup) > .post {\n      margin: 0;\n      width: 100%;\n      min-width: 0;\n      max-height: 300px;\n      min-height: 100%;\n    }\n    :not(.post-popup) > .post > .post-body {\n      max-height: 257px;\n      height: 257px;\n      overflow: auto;\n      min-height: 100%;\n    }\n    :not(.post-popup) > .post > .post-footer {\n      margin-top: 0;\n    }\n    .post-id > span:not(.ZU-hide-board-by-op) {\n      display: none;\n    }\n    .post-header .pull-right {\n      float: none !important;\n      position: absolute;\n      right: 0;\n      top: 0;\n      padding: 2px 10px;\n      background: linear-gradient(to right, rgba(255, 35, 35, 0) 0px, white 18px 100%);\n    }\n    .post-header .pull-right:hover {\n      z-index: 2;\n    }\n    .post-header {\n      padding: 0 !important;\n    }\n    .post-id {\n      background: linear-gradient(to left, rgba(255, 35, 35, 0) 0px, white 18px, white 100%);\n      z-index: 2;\n      position: relative;\n      padding: 2px 6px;\n      display: inline-block;\n      padding-right: 20px;\n    }\n    .post-body-message {\n      overflow: hidden !important;\n      max-height: none !important;\n    }\n    .post-popup {\n      z-index: 3;\n    }\n    .reply-form {\n      max-width: none;\n      z-index: 3;\n    }\n    .ZU-noko-label {\n      display: none\n    }\n    .threads-scroll-spy + div {\n      margin-top: 15px;\n    }\n    .threads-scroll-spy {\n      z-index: 3;\n    }\n  ',
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
          source: spell.toLowerCase().replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'), //https://github.com/sindresorhus/escape-string-regexp
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
    }], content, { sutree: true, queryChildren: true });
  },
  install: function install(container) {
    var _this6 = this;

    var spellsVal = settings.autohide.map(function (spell) {
      return (typeof spell === 'undefined' ? 'undefined' : _typeof(spell)) === 'object' ? '/' + spell.source + '/' + spell.flags : spell;
    }).join('\n');
    container.insertAdjacentHTML('beforeEnd', '\n      <div class="col-md-12">\n        <form>\n          <div class="panel panel-default">\n            <div class="panel-heading" title="0chan Utilities v.' + version + '">\n              <svg class="ZU-svg ZU-svg-32 ZU-settingspage-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-logo"></use></svg>\n              <b>\u0410\u0432\u0442\u043E\u0441\u043A\u0440\u044B\u0442\u0438\u0435</b>\n            </div>\n            <div class="panel-body">\n              <div class="form-horizontal">\n                <div class="form-horizontal">\n                  <textarea rows="10" name="autohide" id="autohide" style="resize:vertical" placeholder="\u0422\u0435\u043A\u0441\u0442 \u0438\u043B\u0438 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043E\u043C \u0441\u0442\u0440\u043E\u043A\u0438" class="ZU-spells-textarea form-control" wrap="soft"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class="panel-footer text-right">\n              <button type="submit" class="btn btn-primary ZU-autohide-submit"><i class="fa fa-gears"></i> \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>\n            </div>\n          </div>\n        </form>\n      </div>');
    var submitBtn = container.querySelector('.ZU-autohide-submit'),
        textarea = container.querySelector('textarea');
    if (spellsVal) textarea.value = spellsVal;
    submitBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var val = textarea.value,
          results = [];
      val.split('\n').forEach(function (spell) {
        if (!spell) return;
        var rxr = spell.match(/^\/(.+)\/([gmiyu]+)?$/),
            result = void 0;
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
      _this6.init();
    });
    textarea.addEventListener('input', function (ev) {
      textarea.classList.toggle('non-empty', !!textarea.value.length);
    });
  }
};

var settings = {
  defaults: {
    thumbNoScroll: true,
    momInRoom: false,
    unmaskOnHover: true,
    hideSidebar: false,
    hiddenBoards: [],
    noko: true,
    updateInterval: 10,
    catalogMode: false,
    autohide: []
  },
  _: {},
  hooks: {
    momInRoom: momInRoom.toggle.bind(momInRoom),
    unmaskOnHover: momInRoom.toggleHover.bind(momInRoom),
    hideSidebar: sideBar.toggle.bind(sideBar),
    updateInterval: refresher.reset.bind(refresher),
    catalogMode: catalog.toggle.bind(catalog),
    autohide: autohide.init.bind(autohide)
  },
  save: function save() {
    this._.hiddenBoards = this.hiddenBoards;
    this._.autohide = this.autohide;
    localStorage['ZU-settings'] = JSON.stringify(this._);
  },
  init: function init() {
    var _this7 = this;

    var localSettings = LSfetchJSON('ZU-settings') || {},
        allSettings = Object.assign(this.defaults, localSettings);
    Object.keys(allSettings).forEach(function (key) {
      var value = allSettings[key];
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== "object") {
        Object.defineProperty(_this7, key, {
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
      _this7[key] = value;
    });
  }
};

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
      var css = void 0;
      if (this.enabled) {
        css = settings.hiddenBoards.map(function (boardID) {
          return 'div[board-id="' + boardID + '"]';
        }).join(', ') + ' {display: none} ';
        injector.inject('ZU-hide-boards', css);
      }
      css = settings.hiddenBoards.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .ZU-board-hide-icon';
      }).join(', ') + ' {display: none} ' + settings.hiddenBoards.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .ZU-board-unhide-icon';
      }).join(', ') + ' {display: block}' + settings.hiddenBoards.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"]';
      }).join(', ') + ' {text-decoration: line-through!important; }' + settings.hiddenBoards.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .sidemenu-board-title';
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
    // Close alerts with one click
    var alertsWrapper = e.path.find(function (el) {
      return el.classList && el.classList.contains('alerts-wrapper');
    });
    if (alertsWrapper) {
      alertsWrapper.__vue__.alerts = [];
    }
    // Thread updating and expanding
    if (e.target.classList && e.target.classList.contains('ZU-expand-thread')) {
      var thread = e.path.find(function (el) {
        return el.classList && el.classList.contains('thread');
      });
      if (thread) {
        expandThread(thread);
      }
    }
    if (e.target.classList && e.target.classList.contains('ZU-update-thread')) {
      var _thread = e.path.find(function (el) {
        return el.classList && el.classList.contains('thread');
      });
      if (_thread) {
        updateThread(_thread);
      }
    }
    // No scroll
    var img = e.path.find(function (el) {
      return el.classList && el.classList.contains('post-img');
    });
    if (img) {
      if (settings.thumbNoScroll) {
        img.__vue__.noScroll = true;
      }
    }
    // Board hiding
    var hideBtn = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-boardhideunhide');
    });
    if (hideBtn) {
      e.preventDefault();
      e.stopPropagation();
      var dir = hideBtn.findParent('a').getAttribute('href').replace(/\//g, '');
      boardHider.toggleBoard(dir);
    }
    // Board hiding by OP
    var OPhideBtn = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-hide-board-by-op');
    });
    if (OPhideBtn) {
      var _dir = OPhideBtn.parentElement.querySelector('a').getAttribute('href').replace(/\//g, '');
      boardHider.toggleBoard(_dir);
    }
    // Share
    var shareBtn = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-share-btn');
    });
    if (shareBtn) {
      shareBtn.querySelector('.ZU-share-dropdown').classList.toggle('ZU-dropdown-show');
    }
    // Share link
    var shareLink = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-share-link');
    });
    if (shareLink) {
      share.handleClick(shareLink);
    }
    // Sage
    var sage = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-sage-btn');
    });
    if (sage) {
      router.push('sage/' + SAGE_THREAD);
    }
    // Mention
    var mention = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-mention-btn');
    });
    if (mention) {
      mentionPost(mention.findParent('.post'));
    }
    // Popup slosing
    if (e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-settings-btn');
    })) {
      document.querySelector('#ZU-settings').classList.toggle('ZU-dropdown-show');
    } else if (!e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-settings-dropdown');
    })) {
      document.querySelector('#ZU-settings').classList.remove('ZU-dropdown-show');
    }
    if (!e.path.find(function (el) {
      return el.classList && (el.classList.contains('ZU-share-btn') || el.classList.contains('ZU-share-btn'));
    })) {
      Array.prototype.forEach.call(document.querySelectorAll('.ZU-share-dropdown'), function (dd) {
        return dd.classList.remove('ZU-dropdown-show');
      });
    }
  },
  mousedown: function mousedown(e) {
    // Quote on reply
    var replyBtn = e.path.find(function (el) {
      return el.classList && (el.classList.contains('post-button-reply') || el.classList.contains('ZU-quote-on-click'));
    });
    if (replyBtn) {
      if (replyBtn.classList.contains('ZU-qoc-from-anywhere')) {
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
    var noko = e.path.find(function (el) {
      return el.classList && el.classList.contains('ZU-noko');
    });
    if (noko) {
      settings.noko = noko.checked;
      Array.prototype.forEach.call(document.querySelectorAll('.ZU-noko'), function (otherNoko) {
        if (otherNoko !== noko) otherNoko.checked = noko.checked;
      });
    }
  }
};

function getPostQuotation(post) {
  var withoutNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!post) return null;
  var postData = getPostDataFromDOM(post);
  if (!postData) return null;
  var text = '>>' + postData.id,
      selection = getSelection();
  if (selection && selection.post && selection.post == post) {
    var selectedText = selection.text.replace(/^\s/, '').replace(/\s$/, '' // remove leading and trailing whitespaces
    ).replace(/^>/gm, ' >').replace(/^/gm, '>' // add quotation marks
    );if (withoutNumber) return selectedText + '\n';
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
    textarea.dispatchEvent(new Event('input', {
      'bubbles': true,
      'cancelable': true
    }));
    textarea.focus();
  } else {
    setClipboard(text);
    nativeAlert('success', '\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u0441\u0442\u0430 ' + (text.match(/[^>0-9\s]/g) ? 'и цитата скопированы' : 'скопирован') + ' \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430');
  }
}

function sageContinue() {
  if (!postQuotation || singleThreadVue.thread.id != SAGE_THREAD) return;
  var text = postQuotation;
  postQuotation = null;
  contentVue.isReplyToOpPostFormShown = true;
  app.$bus.once('refreshContentDone', function () {
    window.scrollTo(0, document.body.scrollHeight);
    var textarea = document.querySelector('.threads > div > .reply-form .reply-form-message textarea');
    if (textarea.value && !textarea.value.match(/\n$/)) {
      text = '\n' + text;
    }
    textarea.value += text;
    textarea.dispatchEvent(new Event('input', {
      'bubbles': true,
      'cancelable': true
    }));
    textarea.focus();
  });
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
  var input = void 0;
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
      threadID = void 0,
      opID = void 0,
      firstShownReplyID = void 0;
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
  }).catch(handleNetworkError);
}
function updateThread(thread) {
  var threadVue = void 0,
      threadID = void 0,
      lastReplyID = void 0;
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
  }).catch(handleNetworkError);
}

var router = {
  push: function push(path) {
    if (path.indexOf('/') !== 0) {
      path = '/' + path;
    }
    if (document.location.pathname == path) {
      this.reload();
    } else {
      app.$router.push({ path: path });
    }
  },
  reload: function reload() {
    return app.$bus.emit('refreshContent');
  },
  setupInterceptor: function setupInterceptor() {
    var _this8 = this;

    var doDebug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    app.$router.push = function (route, e, n) {
      var thread = void 0,
          threadID = void 0,
          postID = void 0;
      if (doDebug) console.log('ROUTE:', route);
      if (!settings.noko && state.type !== "thread" && route.hasOwnProperty('name') && route.name === "thread" && route.hasOwnProperty('hash') && (postID = route.hash.split('#')[1]) && route.hasOwnProperty('params') && (threadID = route.params.threadId) && !settings.catalogMode) {
        // Quick reply case
        var threadVue = contentVue.threads.find(function (thr) {
          return thr.thread.id == threadID;
        });
        if (threadVue // Thread exists on page
        && !document.querySelector('a[data-post="' + postID + '"], a[href$="#' + postID + '"]' // No link to new posts exists
        )) {
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
          && route.params.dir === contentVue.board.dir && !document.querySelector('a[href*="/' + threadID + '"]' // Thread does not exist yet
          )) {
            if (doDebug) console.log('Route intercepted (new thread)');
            _this8.reload();
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
  a = { value: 0 },
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
  form.querySelector('.reply-form-message + div .pull-right').insertAdjacentHTML('beforeBegin', '\n    <label class="ZU-noko-label" title="\u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0442\u0440\u0435\u0434\u0443"><input class="ZU-noko" type="checkbox"' + (settings.noko ? 'checked' : '') + '> Noko</label>'
  // Add quote from selection
  );if (postQuotation) {
    var textarea = form.querySelector('textarea');
    textarea.value = postQuotation;
    postQuotation = null;
    textarea.dispatchEvent(new Event('input', {
      'bubbles': true,
      'cancelable': true
    }));
    textarea.focus();
  }
}

function addSettingsButtons() {
  var showCatBtn = catalog.isApplicable;
  document.querySelector('.headmenu-buttons-left').insertAdjacentHTML('beforeEnd', '\n    <div class="btn-group ZU-nomargin-btn-group">\n      <button title="0chan Utilities v.' + version + '" type="button" class="ZU-panel-btn btn btn-link ZU-btn-link ZU-svg-container-btn ZU-settings-btn">\n        <svg class="ZU-svg ZU-svg-32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-logo"></use></svg>\n      </button>\n      ' + (showCatBtn ? '<button title="\u0420\u0435\u0436\u0438\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430" id="ZU-quickaction-catalogMode" data-prop="catalogMode" class="btn btn-link ZU-btn-link ZU-catalog-btn' + (settings.catalogMode ? ' active' : '') + '">\n        <i class="fa fa-th ZU-onactive-hide"></i>\n        <i class="fa fa-th-list ZU-onactive-show"></i>\n      </button>' : '') + '\n      <button title="\u041C\u0430\u043C\u043A\u0430 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0435" id="ZU-quickaction-momInRoom" data-prop="momInRoom" class="btn btn-link ZU-btn-link ZU-nsfw-btn' + (settings.momInRoom ? ' active' : '') + '">\n        <i class="fa fa-low-vision"></i>\n      </button>\n    </div>\n    ');
  injector.inject('ZU-headmenu-shift', '.headmenu-title { left: ' + (showCatBtn ? 170 : 130) + 'px !important; }');['catalogMode', 'momInRoom'].forEach(function (prop) {
    var btn = document.querySelector('#ZU-quickaction-' + prop);
    if (!btn) return;
    btn.addEventListener('click', function (ev) {
      var btn = ev.target.findParent('button'),
          on = !btn.classList.contains('active');
      settings[prop] = document.querySelector('#ZU-SP-' + prop).checked = on;
    });
  });
}

function handleBoardItem(board) {
  if (board.querySelector('.ZU-boardhideunhide')) return;
  board.insertAdjacentHTML('afterBegin', '<span class="pull-left sidemenu-board-icons ZU-boardhideunhide">\n      <span title="\u0421\u043A\u0440\u044B\u0442\u044C" class="ZU-board-hide-icon">\n        <i class="fa fa-minus-square-o"></i>\n      </span>\n      <span title="\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u044C" class="ZU-board-unhide-icon">\n        <i class="fa fa-plus-square-o"></i>\n      </span>\n    </span>');
}

function init() {
  if (typeof content.__vue__ === 'undefined') {
    setupVueGetter // *swoosh* — and __vue__ is available outside dev tools!
    ();
  }

  contentVue = content.__vue__;

  router.setupInterceptor();

  settings.init();

  sideBar.init();

  boardHider.refresh();

  autohide.init();

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
    selector: '.reply-form',
    fn: handleReplyForm
  }], content.parentElement, { subtree: true, queryChildren: true });

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
      }], boardList, { queryChildren: true });
    }
  }], sidebar, { queryChildren: true });

  state.initialized = true;
}

function handlePost(post) {
  var extraIconsContainer = post.querySelector('.post-footer .pull-right');
  if (!extraIconsContainer || extraIconsContainer.querySelector('.ZU-sage-btn')) return;
  extraIconsContainer.insertAdjacentHTML('afterBegin', '\n    <span title="\u0423\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044C" class="post-button ZU-mention-btn ZU-quote-on-click"><i class="fa fa-angle-double-right"></i></span>\n    <span title="SAGE!" class="post-button ZU-sage-btn ZU-quote-on-click"><i class="fa fa-arrow-down"></i></span>');
  var postData = getPostDataFromDOM(post);
  if (!postData) return;
  if (postData.isPopup) {
    repositionPopup(post.parentNode);
  } else if (postData.isOpPost) {
    extraIconsContainer.insertAdjacentHTML('beforeBegin', '\n      <div class="pull-left">\n        <span title="\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F" class="post-button ZU-share-btn ZU-quote-on-click ZU-qoc-from-anywhere">\n          <i class="fa fa-share-alt"></i>\n          ' + share.dropdown(document.location.protocol + '//' + document.location.host + '/' + postData.dir + '/' + postData.threadID, postData.title) + '\n          </span>\n      </div>');
  }

  var msg = postData.message;
  if (msg && autohide.check(msg) && !postData.postVue.isPopup /*&& !postData.postVue.isHidden*/) {
      postData.postVue.isHidden = true;
      postData.postVue.$emit('hidden', true);
    }
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
        message: postVue.post.message
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
        message: popupVue.message
      };
    } else return null;
  } catch (e) {
    console.warn('[0u] Unable to find post model', post, e);
    return null;
  }
}

function addThreadControls(threadDOM, threadVue) {
  var controlsContainer = Array.prototype.find.call(threadDOM.querySelectorAll(':scope > div > div:not(.thread-tree)'), function (div) {
    return !div.querySelector('.post-op');
  });
  if (!controlsContainer || controlsContainer.classList.contains('ZU-thread-controls')) return;
  var href = controlsContainer.querySelector('a').getAttribute('href');
  if (threadVue.skippedPosts) {
    controlsContainer.querySelector('span').classList.add('ZU-delete-on-threadexpand');
    controlsContainer.insertAdjacentHTML('beforeEnd', '<span class="ZU-expand-thread-container ZU-delete-on-threadexpand"> | <a href="' + href + '" onclick="return false" class="ZU-expand-thread">\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C</a></span>');
  }
  controlsContainer.insertAdjacentHTML('beforeEnd', '<span class="ZU-update-thread-container"> | <a href="' + href + '" onclick="return false" class="ZU-update-thread">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</a></span>');
  controlsContainer.classList.add('ZU-thread-controls');

  var op = threadDOM.querySelector('.post-op'),
      opPostID = op.querySelector('.post-id');
  op.querySelector('.post-header').classList.add('ZU-hide-board-by-op-container');
  opPostID.insertAdjacentHTML('afterBegin', '<span title="\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0441\u043A\u0443" class="post-button ZU-hide-board-by-op"><i class="fa fa-minus-square-o"></i></span>');
}

var settingsPanel = {
  modules: {
    checkbox: {
      build: function build(checkbox) {
        return '\n        <li title="' + (checkbox.description || checkbox.title) + '">\n          <label for="ZU-SP-' + checkbox.id + '"><input data-id="' + checkbox.id + '" id="ZU-SP-' + checkbox.id + '" type="checkbox"' + (settings[checkbox.id] ? ' checked' : '') + '> ' + checkbox.title + '</label>\n        </li>';
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
        return '\n        <li title="' + (slider.description || slider.title) + '">\n          <label for="ZU-SP-' + slider.id + '">' + slider.title + '\n            <span class="ZU-SP-slider-value">(' + (slider.displayValue ? slider.displayValue(settings[slider.id]) : settings[slider.id]) + ')</span>\n            <input type="range" id="ZU-SP-' + slider.id + '" data-id="' + slider.id + '" value="' + settings[slider.id] + '" min="' + slider.min + '" max="' + slider.max + '" step="' + slider.step + '">\n          </label>\n        </li>';
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
          sliderDOM.findParent('label').querySelector('.ZU-SP-slider-value').innerText = '(' + sliderObj.displayValue(val) + ')';
        }
      }
    }
  },
  controls: [{
    type: 'checkbox',
    id: 'momInRoom',
    title: "Мамка в комнате",
    description: "Маскировать все картинки"
  }, {
    type: 'checkbox',
    id: 'unmaskOnHover',
    title: "Раскрывать по наведению",
    description: "Раскрывать замаскированные картинки по наведению"
  }, {
    type: 'checkbox',
    id: 'thumbNoScroll',
    title: "Разворот без скролла",
    description: "Не скроллить при разворачивании картинок"
  }, (_ref = {
    type: 'slider',
    id: 'updateInterval',
    title: "Период обновления"
  }, _defineProperty(_ref, 'title', "Период обновления треда"), _defineProperty(_ref, 'min', 0), _defineProperty(_ref, 'step', 5), _defineProperty(_ref, 'max', 60), _defineProperty(_ref, 'condition', function condition() {
    return state.type === "thread";
  }), _defineProperty(_ref, 'displayValue', function displayValue(val) {
    return val ? val + ' \u0441' : "Выкл.";
  }), _ref), {
    type: 'checkbox',
    id: 'catalogMode',
    title: "Режим каталога",
    description: "Отображать треды в виде каталога",
    condition: function condition() {
      return catalog.isApplicable;
    }
  }],
  install: function install(container) {
    var _this9 = this;

    var controls = this.controls.filter(function (control) {
      return !control.condition || control.condition();
    });
    document.querySelector('.headmenu').insertAdjacentHTML('beforeEnd', '\n      <ul class="dropdown-menu ZU-settings-dropdown ZU-dropdown" id="ZU-settings">\n        ' + controls.reduce(function (htm, control) {
      return htm + _this9.modules[control.type].build(control);
    }, '') + '\n      </ul>');
    controls.forEach(function (control) {
      if (state.condition && !state.condition()) return;
      var allEvents = Object.assign(Object.create(_this9.modules[control.type].events || {}), control.events || {}),
          controlDOM = document.querySelector('#ZU-SP-' + control.id);
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
    account: autohide.awaitInstall.bind(autohide),
    home: boardHider.enable.bind(boardHider),
    thread: sageContinue
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

  // CSS injector
};var injector = {
  inject: function inject(alias, css) {
    var id = 'injector:' + alias;
    var existing = document.getElementById(id);
    if (existing) {
      existing.innerHTML = css;
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    style.id = id;
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  },
  remove: function remove(alias) {
    var id = 'injector:' + alias;
    var style = document.getElementById(id);
    if (style) {
      var head = document.head || document.getElementsByTagName('head')[0];
      if (head) head.removeChild(document.getElementById(id));
    }
  }
};

function forAllNodes(selFnMap) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var config = Object.assign({
    autoStart: true, // whether or not observer shall start observing immediately
    subtree: false,
    childList: true,
    queryChildren: false //whether or not inserted nodes shall be searched for selector-matching elements
  }, options),
      afterClass = void 0;
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
    }
    // Handle future nodes
    );observer.observe(parent, config);
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
  var promiseResolve = void 0,
      promiseReject = void 0,
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

// Element.matches() polyfill
;[Element.prototype, Text.prototype].forEach(function (e) {
  e.matches || (e.matches = e.matchesSelector || function (selector) {
    var _this10 = this;

    var matches = document.querySelectorAll(selector);
    return Array.prototype.some.call(matches, function (e) {
      return e === _this10;
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
}

// event path polyfill
);(function (e) {
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
          child = void 0,
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
    fetch(document.location.protocol + '//' + document.location.host + '/api/thread?thread=' + threadID + (after ? '&after=' + after : ''), { credentials: 'same-origin' }).then(function (res) {
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
        }).catch(function (e) {
          return reject(e);
        });
      } else {
        res.text().then(function (text) {
          return console.warn('[0u] Bad response: ', text);
        }).catch(nop);
        reject(res.status);
      }
    }).catch(function (e) {
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

function start() {
  var sidebarExtPromise = externallyResolvingPromise(),
      contentExtPromise = externallyResolvingPromise();
  Promise.all([sidebarExtPromise.promise, contentExtPromise.promise]).then(function () {
    appObserver.stop();
    forAllNodes([{
      selector: '#content > div',
      fn: onFreshContent
    }], document.querySelector('#content'));
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
  }], document.body, { subtree: true, queryChildren: true });

  Object.keys(eventDispatcher).forEach(function (evType) {
    document.addEventListener(evType, eventDispatcher[evType], true);
  });
}
start();

function onFreshContent() {
  try {
    state.type = app.$router.currentRoute.name;
  } catch (e) {
    console.warn('[0u] Unable to determine app state', e);
  }

  content = document.querySelector('#content > div');
  if (state.type === 'thread') singleThread = document.querySelector('.post-op').parentNode.parentNode;
  if (!state.initialized) {
    init();
  } else {
    contentVue = content.__vue__;
    if (state.type === 'thread') singleThreadVue = singleThread.__vue__;
  }

  alerts = document.querySelector('.alerts-wrapper');
  alertsVue = alerts.__vue__;
  setupAlertInterceptor();

  addSettingsButtons();

  settingsPanel.install();

  ZURouter.handleRoute(state.type);

  refresher.init();
}

injector.inject('ZU-global', '\n  .btn-open-sidebar {\n    display: inline-block !important;\n  }\n  .headmenu-title {\n    white-space: nowrap;\n  }\n  .sidebar, #content {\n    transition: margin-left 0.3s cubic-bezier(0, 0.85, 0.72, 0.99);\n    will-change: margin-left;\n  }\n  .ZU-sidebar-hidden .sidebar {\n    margin-left: -250px;\n  }\n  .ZU-sidebar-hidden #content {\n    margin-left: 0;\n  }\n  .headmenu.ZU-sidemenu-animation-allowed {\n    transition: left 0.3s cubic-bezier(0, 0.85, 0.72, 0.99)\n  }\n  .ZU-sidebar-hidden .headmenu {\n    left: 0;\n  }\n  .ZU-settings-dropdown {\n    margin: 4px;\n    top: 30px;\n    padding: 6px 14px;\n  }\n  .ZU-dropdown {\n    display: block;\n    transform: translate(0px, 10px);\n    transition: transform 0.2s, opacity 0.2s, visibility 0s 0.2s;\n    opacity: 0;\n    user-select: none;\n    visibility: hidden;\n  }\n  .ZU-dropdown-show {\n    transform: translate(0px, 0);\n    opacity: 1;\n    visibility: visible;\n    transition: transform 0.2s, opacity 0.2s;\n  }\n  .ZU-settings-dropdown label,\n  .ZU-noko-label {\n    font-weight: normal;\n    margin-bottom: 0;\n  }\n  .ZU-noko-label {\n    vertical-align: middle;\n  }\n  .reply-form-limit-counter {\n    min-width: 60px;\n    display: inline-block;\n  }\n  .ZU-noko {\n    margin: 0;\n    vertical-align: -1px;\n  }\n  .ZU-settings-dropdown input[type="radio"], \n  .ZU-settings-dropdown input[type="checkbox"] {\n    margin: 3px 0 0;\n    line-height: normal;\n    vertical-align: top;\n  }\n  .ZU-settings-dropdown li {\n    margin: 4px 0;\n  }\n  \n  .ZU-svg-container-btn {\n    font-size: 0;\n    padding: 0;\n    line-height: 0;\n  }\n  .ZU-svg {\n    fill: currentColor;\n  }\n  .ZU-svg-32 {\n    height: 32px;\n    width: 32px;\n  }\n  .ZU-svg-16 {\n    height: 16px;\n    width: 16px;\n  }\n  .dropdown-menu .ZU-svg-16 {\n    margin-right: 5px;\n  }\n  .ZU-share-dropdown {\n    left: 74px;\n  }\n  .ZU-boardhideunhide {\n    position: absolute;\n    left: 0;\n    opacity: 0;\n    transition: opacity 0.2s, color 0.2s;\n  }\n  .ZU-boardhideunhide:hover {\n    color: #3ccd9d;\n  }\n  .sidemenu-board-item:hover .ZU-boardhideunhide {\n    opacity: 1\n  }\n  .ZU-board-unhide-icon {\n    display: none;\n  }\n  .ZU-sage-btn:hover {\n    color: #bc1a1a;\n  }\n  body > textarea {\n    position:fixed;\n  }\n  .ZU-show {\n    display:block;\n  }\n  .ZU-refresh-progressbar,\n  .ZU-refreshbtn-shadow-overlay {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n  }\n  .ZU-refreshbtn-shadow-overlay {\n    width: 100%;\n  }\n  .ZU-refresh-btn {\n    box-shadow: none!important;\n    overflow: hidden;\n  }\n  .ZU-refresh-btn:active .ZU-refreshbtn-shadow-overlay {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  }\n  .ZU-refresh-progressbar {\n    background: linear-gradient(to bottom, transparent 0%, rgba(22, 160, 133, 0.48) 100%);\n    width: 0%;\n    opacity: 0;\n    transition: width 0s 0.4s, opacity 0.4s;\n  }\n  .ZU-refresh-btn i,\n  .ZU-refresh-btn span {\n    position: relative;\n  }\n  .ZU-nomargin-btn-group {\n    margin-left: -1px;\n    float: right;\n  }\n  .ZU-panel-btn {\n    width: 40px;\n  }\n  .ZU-onactive-show,\n  .active .ZU-onactive-hide {\n    display: none;\n  }\n  .active .ZU-onactive-show {\n    display: block;\n  }\n  .ZU-btn-link {\n    color: #333333 !important;\n    text-decoration: none !important;\n  }\n  .ZU-btn-link.active {\n    color: #333;\n    background-color: #e6e6e6;\n    border: 1px solid #adadad;\n    outline: none !important;\n    background-image: none;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  }\n  .post-img .post-embed .post-embed-play-btn {\n    z-index: 2\n  }\n  .post .ZU-hide-board-by-op-container {\n    padding-left: 6px;\n  }\n  span.ZU-hide-board-by-op {\n    padding: 0;\n  }\n  .ZU-settingspage-icon {\n    vertical-align: middle;\n    margin: -8px;\n    margin-right: 0;\n  }\n  .non-empty.ZU-spells-textarea {\n    white-space: nowrap;\n  }\n');