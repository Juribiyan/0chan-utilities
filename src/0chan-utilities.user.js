// ==UserScript==
// @name         0chan Utilities
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Various 0chan utilities
// @updateURL    https://github.com/Juribiyan/0chan-utilities/raw/master/es5/0chan-utilities.meta.js
// @author       Snivy
// @match        https://0chan.hk/*
// @grant        none
// ==/UserScript==

'use strict'

// CSS injector
const injector = {
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

// Node insertion detector (fuck mutation observer)
function forEveryNode(selector, callback, identifier=(new Date().getTime().toString(16)), classOnDone="FEN-done") {
  identifier = 'FEN_'+identifier
  let css = '', rule = ''
  ;['', '-moz-', '-webkit-', '-ms-', '-o-'].forEach(prefix => {
    if(prefix == '-ms-') {
      css += `
      @${prefix}keyframes ${identifier} {  
        from { opacity: 0.999; }
        to { opacity: 1; }
      }`
    }
    else {
      css += `
      @${prefix}keyframes ${identifier} {  
        from { clip: rect(1px, auto, auto, auto); }
        to { clip: rect(0px, auto, auto, auto); }  
      }`
    }
    rule += `
    ${prefix}animation-duration: 0.001s;
    ${prefix}animation-name: ${identifier};
    `
  })
  css += `${selector} {${rule}}`

  ;['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oanimationstart'].forEach(evType => {
    document.addEventListener(evType, function(ev) {
      if(ev.animationName == identifier && !ev.target.classList.contains(classOnDone)) {
        callback(ev.target)
        ev.target.classList.add(classOnDone)
      }
    })
  })

  injector.inject(identifier, css)

  return {
    id: identifier,
    disable: () => injector.remove(identifier)
  }
}

// Style
const css = `
.u0-board-delbtn {
  height: 21px;
  width: 21px;
  line-height: 21px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s, color 0.2s;
  color: #808080;
  left: -22px;
  top: 0;
}
.icontainer {
  font-size: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  outline: none;
}
.u0-board-delbtn:hover {
  color: #fff;
}
.sidemenu-board-item:hover .u0-board-delbtn {
  opacity: 1;
}
.icontainer svg {
  height: 100%;
  width: 100%;
  fill: currentColor;
}
.svguse-undelete {
  display: none;
}
.sidemenu-board-item a {
  position: relative;
}
.u0-sage {
  height: 19px;
  width: 21px;
  vertical-align: bottom;
  color: #b5260d;
}
.u0-sage:hover {
  color: #f13110;
}
`
injector.inject('u0-styles', css)

// SVG icons
const icons = `
  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <symbol id="i-delete" viewBox="0 0 32 32">
  <title>delete</title>
  <path d="M11.152 8.997l-2.154 2.154 4.85 4.851-4.85 4.848 2.152 2.152 4.85-4.848 4.85 4.848 2.154-2.154-4.848-4.85 4.848-4.85-2.152-2.152-4.848 4.85z"></path>
  </symbol>
  <symbol id="i-undelete" viewBox="0 0 32 32">
  <title>undelete</title>
  <path d="M11.152 8.997l-2.154 2.154 3.232 3.231 2.152-2.152-3.231-3.232zM13.848 16.001v0.001l-4.85 4.848 2.154 2.152 11.85-11.852-2.152-2.152-7.002 7.002zM17.617 19.769l3.232 3.234 2.154-2.154-3.234-3.232-2.152 2.152z"></path>
  </symbol>
  <symbol id="i-sage" viewBox="0 0 35 32">
  <title>sage</title>
  <path d="M13.475 15.159v-10.105h6.737v10.105h5.051l-8.42 8.423-8.42-8.423z"></path>
  </symbol>
  </defs>
  </svg>`
document.body.insertAdjacentHTML('afterbegin', `<div style="none">${icons}</div>`)

// Hides threads from unwanted boards on index page
const boardHider = {
  list: [],
  enabled: false,
  init: function() {
    let hiddenBoards = localStorage['u0_hiddenboards']
    if (hiddenBoards) {
      this.list = hiddenBoards.split(' ')
    }
    if (document.location.href.match(/https?:\/\/0chan.hk\/?/)) {
      this.enable()
    }
  },
  enable: function() {
    if (this.enabled) {
      return
    }
    this.enabled = true
    this.refresh()
  },
  disable: function() {
    if (this.enabled) {
      injector.remove('hide-boards')
    }
    this.enabled = false
  },
  refresh: function() {
    if (this.list.length) {
      let css
      if (this.enabled) {
        css = this.list.map(boardID => `div[board-id="${boardID}"]`).join(', ')
          + ' {display: none} '
        injector.inject('hide-boards', css)
      }
      css = this.list.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .svguse-delete`).join(', ')
        + ' {display: none} '
        + this.list.map(boardID => `.sidemenu-board-item a[href="/${boardID}"]`).join(', ') 
        + ' {text-decoration: line-through!important; }'
        + this.list.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .sidemenu-board-title`).join(', ') 
        + ' {color:#808080!important; }'
        + this.list.map(boardID => `.sidemenu-board-item a[href="/${boardID}"] .svguse-undelete`).join(', ') 
        + ' {display: block}'
      injector.inject('hide-boards-ui', css)
    }
    else {
      injector.remove('hide-boards')
      injector.remove('hide-boards-ui')
    }
  },
  sync: function() {
    this.refresh()
    localStorage['u0_hiddenboards'] = this.list.join(' ')
  },
  toggleBoard: function(dir) {
    let index = this.list.indexOf(dir)
    if (index >= 0) {
      this.list.splice(index, 1)
    }
    else {
      this.list.push(dir)
    }
    this.sync()
  }
}

boardHider.init()

// Adds board IDs to threads
forEveryNode('.post', post => {
  let postLinks = post.querySelectorAll('.post-id a')
  if (! postLinks.length) {
    console.log('SOMETHING WRONG!', post)
    return
  }
  let boardID = postLinks[0].getAttribute('href').replace(/[\s\/]/g, '')
  , postID = +postLinks[1].innerHTML.replace(/[\s\/#]/g, '')
  // For all posts
  let replyBtn = post.querySelector('.post-footer .pull-right')
  if (replyBtn) {
    replyBtn.insertAdjacentHTML('afterbegin', `
      <button class="u0-sage icontainer" title="SAGE!">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-sage"></use>
        </svg>
      </button>`)
    replyBtn.parentNode.querySelector('.u0-sage').onclick = ev => {
      ev.preventDefault()
      ev.stopPropagation()
      replyWithSage(postID)
      return false
    }
  }
  // For all OP posts
  if (!post.parentNode.classList.contains('post-popup') && post.classList.contains('post-op')) {
    let thread = post.parentNode.parentNode.parentNode.parentNode
    thread.setAttribute('board-id', boardID)
  }
}, 'post-detector')

// Location change detector
forEveryNode('.headmenu', head => {
  let dir = head.querySelector('.headmenu-title a')
  dir = dir && dir.getAttribute('href')
  if (dir === '/') {
    boardHider.enable()
  }
  else {
    boardHider.disable()
  }
  if (dir === '/sage' && !!+localStorage['u0_sageattempt']) {
    document.querySelector('.new-thread-form').style = ''
    forEveryNode('.reply-form-message textarea', textarea => {
      textarea.value = `>>${localStorage['u0_sageattempt']}\n`
      textarea.focus()
      injector.remove('reply-with-sage')
      localStorage['u0_sageattempt'] = 0
    }, 'reply-with-sage')
  }
  else {
    localStorage['u0_sageattempt'] = 0
    document.querySelector('.new-thread-form').style = 'display: none'
  }
}, 'location-change')

// Board filter UI
forEveryNode('.sidemenu-board-item a', board => {
  let dir = board.getAttribute('href').replace(/[\s\/]/g, '')
  board.insertAdjacentHTML('afterbegin', `
    <button class="u0-board-delbtn icontainer" title="Скрыть/раскрыть доску">
      <svg>
        <use class="svguse-delete" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-delete"></use>
        <use class="svguse-undelete" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#i-undelete"></use>
      </svg>
    </button>`)
  board.querySelector('.u0-board-delbtn').onclick = ev => {
    ev.preventDefault()
    ev.stopPropagation()
    boardHider.toggleBoard(dir)
    return false
  }
}, 'board-filter')

function replyWithSage(postID) {
  localStorage['u0_sageattempt'] = postID
  document.location.href = '/sage'
}