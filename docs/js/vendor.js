/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendor/focus-visible.min.js":
/*!********************************************!*\
  !*** ./src/js/vendor/focus-visible.min.js ***!
  \********************************************/
/***/ (() => {

eval("!function(e,t){ true?t():0}(0,function(){\"use strict\";function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,\"datetime-local\":!0};function i(e){return!!(e&&e!==document&&\"HTML\"!==e.nodeName&&\"BODY\"!==e.nodeName&&\"classList\"in e&&\"contains\"in e.classList)}function s(e){e.classList.contains(\"focus-visible\")||(e.classList.add(\"focus-visible\"),e.setAttribute(\"data-focus-visible-added\",\"\"))}function u(e){t=!1}function a(){document.addEventListener(\"mousemove\",c),document.addEventListener(\"mousedown\",c),document.addEventListener(\"mouseup\",c),document.addEventListener(\"pointermove\",c),document.addEventListener(\"pointerdown\",c),document.addEventListener(\"pointerup\",c),document.addEventListener(\"touchmove\",c),document.addEventListener(\"touchstart\",c),document.addEventListener(\"touchend\",c)}function c(e){e.target.nodeName&&\"html\"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener(\"mousemove\",c),document.removeEventListener(\"mousedown\",c),document.removeEventListener(\"mouseup\",c),document.removeEventListener(\"pointermove\",c),document.removeEventListener(\"pointerdown\",c),document.removeEventListener(\"pointerup\",c),document.removeEventListener(\"touchmove\",c),document.removeEventListener(\"touchstart\",c),document.removeEventListener(\"touchend\",c))}document.addEventListener(\"keydown\",function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)},!0),document.addEventListener(\"mousedown\",u,!0),document.addEventListener(\"pointerdown\",u,!0),document.addEventListener(\"touchstart\",u,!0),document.addEventListener(\"visibilitychange\",function(e){\"hidden\"===document.visibilityState&&(n&&(t=!0),a())},!0),a(),e.addEventListener(\"focus\",function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,\"INPUT\"===(u=n.tagName)&&d[o]&&!n.readOnly||\"TEXTAREA\"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)},!0),e.addEventListener(\"blur\",function(e){var t;i(e.target)&&(e.target.classList.contains(\"focus-visible\")||e.target.hasAttribute(\"data-focus-visible-added\"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute(\"data-focus-visible-added\")&&(t.classList.remove(\"focus-visible\"),t.removeAttribute(\"data-focus-visible-added\")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute(\"data-js-focus-visible\",\"\"):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add(\"js-focus-visible\"),document.documentElement.setAttribute(\"data-js-focus-visible\",\"\"))}if(\"undefined\"!=typeof window&&\"undefined\"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent(\"focus-visible-polyfill-ready\")}catch(e){(t=document.createEvent(\"CustomEvent\")).initCustomEvent(\"focus-visible-polyfill-ready\",!1,!1,{})}window.dispatchEvent(t)}\"undefined\"!=typeof document&&e(document)});\n//# sourceMappingURL=focus-visible.min.js.map\n\n\n//# sourceURL=webpack://gulp-builder/./src/js/vendor/focus-visible.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/vendor/focus-visible.min.js"]();
/******/ 	
/******/ })()
;