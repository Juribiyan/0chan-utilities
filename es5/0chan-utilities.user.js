// ==UserScript==
// @name         0chan Utilities
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  Various 0chan utilities
// @updateURL    https://github.com/Juribiyan/0chan-utilities/raw/master/es5/0chan-utilities.meta.js
// @author       Snivy
// @match        https://0chan.hk/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// ==/UserScript==

'use strict';

// CSS injector

var injector = {
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

  // Node insertion detector (fuck mutation observer)
};function forEveryNode(selector, callback) {
  var identifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTime().toString(16);
  var classOnDone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "FEN-done";

  identifier = 'FEN_' + identifier;
  var css = '',
      rule = '';['', '-moz-', '-webkit-', '-ms-', '-o-'].forEach(function (prefix) {
    if (prefix == '-ms-') {
      css += '\n      @' + prefix + 'keyframes ' + identifier + ' {  \n        from { opacity: 0.999; }\n        to { opacity: 1; }\n      }';
    } else {
      css += '\n      @' + prefix + 'keyframes ' + identifier + ' {  \n        from { clip: rect(1px, auto, auto, auto); }\n        to { clip: rect(0px, auto, auto, auto); }  \n      }';
    }
    rule += '\n    ' + prefix + 'animation-duration: 0.001s;\n    ' + prefix + 'animation-name: ' + identifier + ';\n    ';
  });
  css += selector + ' {' + rule + '}';['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oanimationstart'].forEach(function (evType) {
    document.addEventListener(evType, function (ev) {
      if (ev.animationName == identifier && !ev.target.classList.contains(classOnDone)) {
        callback(ev.target);
        ev.target.classList.add(classOnDone);
      }
    });
  });

  injector.inject(identifier, css);

  return {
    id: identifier,
    disable: function disable() {
      return injector.remove(identifier);
    }
  };
}

// Style
var css = '\n .u0-board-delbtn {\n   height: 21px;\n   width: 21px;\n   line-height: 21px;\n   position: absolute;\n   opacity: 0;\n   transition: opacity 0.2s, color 0.2s;\n   color: #808080;\n   left: -22px;\n   top: 0;\n }\n .icontainer {\n   font-size: 0;\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n   border: none;\n   background: none;\n   outline: none;\n }\n .u0-board-delbtn:hover {\n   color: #fff;\n }\n .sidemenu-board-item:hover .u0-board-delbtn {\n   opacity: 1;\n }\n .icontainer svg {\n   height: 100%;\n   width: 100%;\n   fill: currentColor;\n }\n .svguse-undelete {\n   display: none;\n }\n .sidemenu-board-item a {\n   position: relative;\n }\n .u0-post-bottom-icon {\n   height: 19px;\n   width: 21px;\n   vertical-align: bottom;\n   color: #ccc;\n   margin-left: 7px;\n   transition: color 0.2s;\n }\n .u0-post-bottom-icon:hover {\n   color: #1abc9c;\n }\n .u0-sage:hover {\n   color: #b5260d;\n }\n';
injector.inject('u0-styles', css

// SVG icons
);var icons = '\n  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n  <symbol id="i-mention" viewBox="0 0 35 32">\n  <title>mention</title>\n  <path d="M27.399 14.259l-8.872-4.223v-3.113l11.788 6.19v2.385l-11.788 6.208v-3.145l8.872-4.303zM13.927 14.259l-8.872-4.223v-3.113l11.788 6.19v2.385l-11.788 6.208v-3.145l8.872-4.303z"></path>\n  </symbol>\n  <symbol id="i-sage" viewBox="0 0 35 32">\n  <title>sage</title>\n  <path d="M13.475 15.159v-10.105h6.737v10.105h5.051l-8.42 8.423-8.42-8.423z"></path>\n  </symbol>\n  <symbol id="i-delete" viewBox="0 0 32 32">\n  <title>delete</title>\n  <path d="M11.152 8.997l-2.154 2.154 4.85 4.851-4.85 4.848 2.152 2.152 4.85-4.848 4.85 4.848 2.154-2.154-4.848-4.85 4.848-4.85-2.152-2.152-4.848 4.85z"></path>\n  </symbol>\n  <symbol id="i-undelete" viewBox="0 0 32 32">\n  <title>undelete</title>\n  <path d="M11.152 8.997l-2.154 2.154 3.232 3.231 2.152-2.152-3.231-3.232zM13.848 16.001v0.001l-4.85 4.848 2.154 2.152 11.85-11.852-2.152-2.152-7.002 7.002zM17.617 19.769l3.232 3.234 2.154-2.154-3.234-3.232-2.152 2.152z"></path>\n  </symbol>\n  </defs>\n  </svg>';
document.body.insertAdjacentHTML('afterbegin', '<div style="none">' + icons + '</div>'

// Convert from localStorage to internal storage
);var ls_hiddenboards = localStorage['u0_hiddenboards'];
if (ls_hiddenboards) {
  GM_setValue('u0_hiddenboards', ls_hiddenboards);
  localStorage.removeItem('u0_hiddenboards');
}

// Hides threads from unwanted boards on index page
var boardHider = {
  list: [],
  enabled: false,
  init: function init() {
    var hiddenBoards = GM_getValue('u0_hiddenboards');
    if (hiddenBoards) {
      this.list = hiddenBoards.split(' ');
    }
    if (document.location.href.match(/https?:\/\/0chan.hk\/?/)) {
      this.enable();
    }
  },
  enable: function enable() {
    if (this.enabled) {
      return;
    }
    this.enabled = true;
    this.refresh();
  },
  disable: function disable() {
    if (this.enabled) {
      injector.remove('hide-boards');
    }
    this.enabled = false;
  },
  refresh: function refresh() {
    if (this.list.length) {
      var _css = void 0;
      if (this.enabled) {
        _css = this.list.map(function (boardID) {
          return 'div[board-id="' + boardID + '"]';
        }).join(', ') + ' {display: none} ';
        injector.inject('hide-boards', _css);
      }
      _css = this.list.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .svguse-delete';
      }).join(', ') + ' {display: none} ' + this.list.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"]';
      }).join(', ') + ' {text-decoration: line-through!important; }' + this.list.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .sidemenu-board-title';
      }).join(', ') + ' {color:#808080!important; }' + this.list.map(function (boardID) {
        return '.sidemenu-board-item a[href="/' + boardID + '"] .svguse-undelete';
      }).join(', ') + ' {display: block}';
      injector.inject('hide-boards-ui', _css);
    } else {
      injector.remove('hide-boards');
      injector.remove('hide-boards-ui');
    }
  },
  sync: function sync() {
    this.refresh();
    GM_setValue('u0_hiddenboards', this.list.join(' '));
  },
  toggleBoard: function toggleBoard(dir) {
    var index = this.list.indexOf(dir);
    if (index >= 0) {
      this.list.splice(index, 1);
    } else {
      this.list.push(dir);
    }
    this.sync();
  }

  // GUI alerts
  // Types available: info, error, success
};function nativeAlert(type, message) {
  type = 'alert' + type.charAt(0).toUpperCase() + type.slice(1);
  unsafeWindow.app.$bus.emit(type, message);
}

boardHider.init

// Adds board IDs to threads
();forEveryNode('.post', function (post) {
  var postLinks = post.querySelectorAll('.post-id a');
  if (!postLinks.length) {
    console.log('SOMETHING WRONG!', post);
    return;
  }
  var boardID = postLinks[0].getAttribute('href').replace(/[\s\/]/g, ''),
      postID = +postLinks[1].innerHTML.replace(/[\s\/#]/g, ''
  // For all posts
  );var replyBtn = post.querySelector('.post-footer .pull-right');
  if (replyBtn) {
    replyBtn.insertAdjacentHTML('afterbegin', '\n      <button class="u0-mention u0-post-bottom-icon icontainer" title="\u0423\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044C">\n        <svg>\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-mention"></use>\n        </svg>\n      </button>\n      <button class="u0-sage u0-post-bottom-icon icontainer" title="SAGE!">\n        <svg>\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-sage"></use>\n        </svg>\n      </button>');
    replyBtn.parentNode.querySelector('.u0-sage').onclick = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      replyWithSage(postID);
      return false;
    };
    replyBtn.parentNode.querySelector('.u0-mention').onclick = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var textarea = document.querySelectorAll('.thread textarea, .threads textarea')[0];
      if (textarea && textarea.offsetParent) {
        textarea.value += (!textarea.value || textarea.value.match(/\n$/) ? '' : '\n') + '>>' + postID + '\n';
        textarea.dispatchEvent(new Event('input', {
          'bubbles': true,
          'cancelable': true
        }));
        textarea.focus();
      } else {
        // If no textarea found, copy to clipboard
        GM_setClipboard('>>' + postID + '\n');
        nativeAlert('success', 'Номер поста скопирован в буфер обмена');
      }
      return false;
    };
  }
  // For all OP posts
  if (!post.parentNode.classList.contains('post-popup') && post.classList.contains('post-op')) {
    var thread = post.parentNode.parentNode.parentNode.parentNode;
    thread.setAttribute('board-id', boardID);
  }
}, 'post-detector');

var SAGE_THREAD = 14965;

// Location change detector
forEveryNode('.headmenu', function (head) {
  var links = head.querySelectorAll('.headmenu-title a'),
      dir = links && links[0] && links[0].getAttribute('href'),
      thread = links && links[1] && links[1].getAttribute('href').split('/').reverse()[0];
  // console.log(dir, thread)
  if (dir === '/') {
    boardHider.enable();
  } else {
    boardHider.disable();
  }
  /*let newForm = document.querySelector('.new-thread-form')
  , textarea = newForm ? newForm.querySelector('textarea') : null*/
  if (thread == SAGE_THREAD && !!+GM_getValue('u0_sageattempt')) {
    var replyBtn = document.querySelector('.post-op .fa-reply');
    if (replyBtn) {
      forEveryNode('.reply-form-message textarea', function (textarea) {
        textarea.value = '>>' + GM_getValue('u0_sageattempt') + '\n';
        textarea.focus();
        injector.remove('reply-with-sage');
        GM_setValue('u0_sageattempt', 0);
      }, 'reply-with-sage');
      replyBtn.click();
    }
  } else {
    GM_setValue('u0_sageattempt', 0);
  }
}, 'location-change'

// Board filter UI
);forEveryNode('.sidemenu-board-item a', function (board) {
  var dir = board.getAttribute('href').replace(/[\s\/]/g, '');
  board.insertAdjacentHTML('afterbegin', '\n    <button class="u0-board-delbtn icontainer" title="\u0421\u043A\u0440\u044B\u0442\u044C/\u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0441\u043A\u0443">\n      <svg>\n        <use class="svguse-delete" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-delete"></use>\n        <use class="svguse-undelete" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-undelete"></use>\n      </svg>\n    </button>');
  board.querySelector('.u0-board-delbtn').onclick = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var btn = ev.target;
    while (btn.nodeName !== 'A') {
      btn = btn.parentNode;
    }
    boardHider.toggleBoard(btn.getAttribute('href').replace(/[\s\/]/g, ''));
    return false;
  };
}, 'board-filter');

function replyWithSage(postID) {
  GM_setValue('u0_sageattempt', postID);
  document.location.href = '/sage/14965';
}