(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-menu_3.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-menu_3.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-63a97a32.js");
/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-eea9a7a9.js");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "./node_modules/@ionic/core/dist/esm-es5/gesture-controller-31cb6bb9.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-dd7e4b7b.js");
/* harmony import */ var _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-0d58a5bf.js */ "./node_modules/@ionic/core/dist/esm-es5/index-0d58a5bf.js");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-4a6b37fb.js");
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-096c6391.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-096c6391.js");
var menuIosCss=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";var menuMdCss=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";var iosEasing="cubic-bezier(0.32,0.72,0,1)";var mdEasing="cubic-bezier(0.0,0.0,0.2,1)";var iosEasingReverse="cubic-bezier(1, 0, 0.68, 0.28)";var mdEasingReverse="cubic-bezier(0.4, 0, 0.6, 1)";var focusableQueryString='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';var Menu=function(){function t(t){var e=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,t);this.ionWillOpen=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionWillOpen",7);this.ionWillClose=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionWillClose",7);this.ionDidOpen=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionDidOpen",7);this.ionDidClose=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionDidClose",7);this.ionMenuChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionMenuChange",7);this.lastOnEnd=0;this.blocker=_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_4__["G"].createBlocker({disableScroll:true});this.isAnimating=false;this._isOpen=false;this.inheritedAttributes={};this.handleFocus=function(t){return e.trapKeyboardFocus(t,document)};this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50}t.prototype.typeChanged=function(t,e){var n=this.contentEl;if(n){if(e!==undefined){n.classList.remove("menu-content-"+e)}n.classList.add("menu-content-"+t);n.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["m"])(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t,e,n,i;var o=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(r){switch(r.label){case 0:if(this.type===undefined){this.type=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("menuType","overlay")}t=this.el;e=t.parentNode;if(this.contentId===undefined){console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n')}n=this.contentId!==undefined?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]");if(!n||!n.tagName){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}this.contentEl=n;n.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._register(this);i=this;return[4,Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm-es5/index-34cb2743.js"))];case 1:i.gesture=r.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:true,canStart:function(t){return o.canStart(t)},onWillStart:function(){return o.onWillStart()},onStart:function(){return o.onStart()},onMove:function(t){return o.onMove(t)},onEnd:function(t){return o.onEnd(t)}});this.updateState();return[2]}}))}))};t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this.el,["aria-label"])};t.prototype.componentDidLoad=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(t){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen});this.updateState();return[2]}))}))};t.prototype.disconnectedCallback=function(){this.blocker.destroy();_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.onKeydown=function(t){if(t.key==="Escape"){this.close()}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._setOpen(this,t,e)};t.prototype.focusFirstDescendant=function(){var t=this.el;var e=t.querySelector(focusableQueryString);if(e){e.focus()}else{t.focus()}};t.prototype.focusLastDescendant=function(){var t=this.el;var e=Array.from(t.querySelectorAll(focusableQueryString));var n=e.length>0?e[e.length-1]:null;if(n){n.focus()}else{t.focus()}};t.prototype.trapKeyboardFocus=function(t,e){var n=t.target;if(!n){return}if(this.el.contains(n)){this.lastFocus=n}else{this.focusFirstDescendant();if(this.lastFocus===e.activeElement){this.focusLastDescendant()}}};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(n){switch(n.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:n.sent();return[4,this.startAnimation(t,e)];case 2:n.sent();this.afterAnimation(t);return[2,true]}}))}))};t.prototype.loadAnimation=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t,e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(n){switch(n.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._createAnimation(this.type,this)];case 1:e.animation=n.sent();if(!_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("animated",true)){this.animation.duration(0)}this.animation.fill("both");return[2]}}))}))};t.prototype.startAnimation=function(t,e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var n,i,o,r,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(s){switch(s.label){case 0:n=!t;i=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);o=i==="ios"?iosEasing:mdEasing;r=i==="ios"?iosEasingReverse:mdEasingReverse;a=this.animation.direction(n?"reverse":"normal").easing(n?r:o).onFinish((function(){if(a.getDirection()==="reverse"){a.direction("normal")}}));if(!e)return[3,2];return[4,a.play()];case 1:s.sent();return[3,3];case 2:a.play({sync:true});s.label=3;case 3:return[2]}}))}))};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){var e=!!document.querySelector("ion-modal.show-modal");if(e||!this.canSwipe()){return false}if(this._isOpen){return true}else if(_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._getOpenSync()){return false}return checkEdgeSide(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(false,"isAnimating has to be true");return}this.animation.progressStart(true,this._isOpen?1:0)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(false,"isAnimating has to be true");return}var e=computeDelta(t.deltaX,this._isOpen,this.isEndSide);var n=e/this.width;this.animation.progressStep(this._isOpen?1-n:n)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(false,"isAnimating has to be true");return}var n=this._isOpen;var i=this.isEndSide;var o=computeDelta(t.deltaX,n,i);var r=this.width;var a=o/r;var s=t.velocityX;var d=r/2;var l=s>=0&&(s>.2||t.deltaX>d);var u=s<=0&&(s<-.2||t.deltaX<-d);var h=n?i?l:u:i?u:l;var c=!n&&h;if(n&&!h){c=true}this.lastOnEnd=t.currentTime;var p=h?.001:-.001;var m=a<0?.01:a;p+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__["g"])([0,0],[.4,0],[.6,1],[1,1],Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["j"])(0,m,.9999))[0]||0;var f=this._isOpen?!h:h;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(c)}),{oneTimeCallback:true}).progressEnd(f?1:0,this._isOpen?1-p:p,300)};t.prototype.beforeAnimation=function(t){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(SHOW_MENU);this.el.setAttribute("tabindex","0");if(this.backdropEl){this.backdropEl.classList.add(SHOW_BACKDROP)}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(MENU_CONTENT_OPEN);this.contentEl.setAttribute("aria-hidden","true")}this.ionDidOpen.emit();if(this.menuInnerEl){this.focusFirstDescendant()}document.addEventListener("focus",this.handleFocus,true)}else{this.el.classList.remove(SHOW_MENU);this.el.removeAttribute("tabindex");if(this.contentEl){this.contentEl.classList.remove(MENU_CONTENT_OPEN);this.contentEl.removeAttribute("aria-hidden")}if(this.backdropEl){this.backdropEl.classList.remove(SHOW_BACKDROP)}if(this.animation){this.animation.stop()}this.ionDidClose.emit();document.removeEventListener("focus",this.handleFocus,true)}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.enable(t&&this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled){_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"]._setActiveMenu(this)}Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["l"])(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.direction("reverse");t.play({sync:true});this.afterAnimation(false)};t.prototype.render=function(){var t;var e=this;var n=this,i=n.isEndSide,o=n.type,r=n.disabled,a=n.isPaneVisible,s=n.inheritedAttributes;var d=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{role:"navigation","aria-label":s["aria-label"]||"menu",class:(t={},t[d]=true,t["menu-type-"+o]=true,t["menu-enabled"]=!r,t["menu-side-end"]=i,t["menu-side-start"]=!i,t["menu-pane-visible"]=a,t)},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false,part:"backdrop"}))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:false,configurable:true});return t}();var computeDelta=function(t,e,n){return Math.max(0,e!==n?-t:t)};var checkEdgeSide=function(t,e,n,i){if(n){return e>=t.innerWidth-i}else{return e<=i}};var SHOW_MENU="show-menu";var SHOW_BACKDROP="show-backdrop";var MENU_CONTENT_OPEN="menu-content-open";Menu.style={ios:menuIosCss,md:menuMdCss};var updateVisibility=function(t){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var e,n;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(i){switch(i.label){case 0:return[4,_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"].get(t)];case 1:e=i.sent();n=e;if(!n)return[3,3];return[4,e.isActive()];case 2:n=i.sent();i.label=3;case 3:return[2,!!n]}}))}))};var menuButtonIosCss=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';var menuButtonMdCss=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';var MenuButton=function(){function t(t){var e=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,t);this.inheritedAttributes={};this.visible=false;this.disabled=false;this.autoHide=true;this.type="button";this.onClick=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(e,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(t){return[2,_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"].toggle(this.menu)]}))}))}}t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this.el,["aria-label"])};t.prototype.componentDidLoad=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(e){switch(e.label){case 0:t=this;return[4,updateVisibility(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=this,n=e.color,i=e.disabled,o=e.inheritedAttributes;var r=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);var a=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("menuIcon",r==="ios"?"menu-outline":"menu-sharp");var s=this.autoHide&&!this.visible;var d={type:this.type};var l=o["aria-label"]||"menu";return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":s?"true":null,class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_7__["c"])(n,(t={},t[r]=true,t["button"]=true,t["menu-button-hidden"]=s,t["menu-button-disabled"]=i,t["in-toolbar"]=Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_7__["h"])("ion-toolbar",this.el),t["in-toolbar-color"]=Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_7__["h"])("ion-toolbar[color]",this.el),t["ion-activatable"]=true,t["ion-focusable"]=true,t))},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",Object.assign({},d,{disabled:i,class:"button-native",part:"native","aria-label":l}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span",{class:"button-inner"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon",{part:"icon",icon:a,mode:r,lazy:false,"aria-hidden":"true"}))),r==="md"&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect",{type:"unbounded"})))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});return t}();MenuButton.style={ios:menuButtonIosCss,md:menuButtonMdCss};var menuToggleCss=":host(.menu-toggle-hidden){display:none}";var MenuToggle=function(){function t(t){var e=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_6__["m"].toggle(e.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(e){switch(e.label){case 0:t=this;return[4,updateVisibility(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);var n=this.autoHide&&!this.visible;return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},t[e]=true,t["menu-toggle-hidden"]=n,t)},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null))};return t}();MenuToggle.style=menuToggleCss;

/***/ })

}]);
//# sourceMappingURL=19.js.map