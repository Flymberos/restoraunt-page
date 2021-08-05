/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage.js */ "./src/webpage.js");


let body = document.querySelector("body");

function loadHome(){

    let container = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(container, "home-container");

    let restaurantName = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1");
    restaurantName.textContent = "Little Rome Italian Ristorante";
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(restaurantName, "restaurant-name");

    let restaurantSubtitle = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
    restaurantSubtitle.textContent = "A rare experience in taste";
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(restaurantSubtitle, "restaurant-subtitle");

    let buttonContainer = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(buttonContainer, "menu-button-container");

    let menuButton = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");
    menuButton.textContent = "Menu";
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(menuButton, "menu-button");

    let contactButton = (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");
    contactButton.textContent = "Contact";
    (0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(contactButton, "contact-button");

    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    container.appendChild(restaurantName);
    container.appendChild(restaurantSubtitle);
    container.appendChild(buttonContainer);

    body.appendChild(container);

}



/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "addClassToElement": () => (/* binding */ addClassToElement),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
let body = document.querySelector("body");

function loadPage(){
    loadNavbar();
}

function loadNavbar(){
    let navBar = createElement('div');
    addClassToElement(navBar, "navbar");

    //Create the navbar logo
    let logo = document.createElement("img");
    logo.src = "../dist/img/restaurantLogo.png";
    addClassToElement(logo, "logo");

    //Create a container which will hold page tabs
    let linkContainer = document.createElement("div");
    let homeLink = document.createElement("a");
    let contactLink = document.createElement("a");
    let menuLink = document.createElement("a");

    //Append text to anchors
    homeLink.textContent = "Home";
    contactLink.textContent = "Contact";
    menuLink.textContent = "Menu";
    
    //Add the tabs to the container
    linkContainer.appendChild(homeLink);
    linkContainer.appendChild(contactLink);
    linkContainer.appendChild(menuLink);
    
    addClassToElement(linkContainer, "navbar-link-container");

    navBar.appendChild(logo);
    navBar.appendChild(linkContainer);
    body.appendChild(navBar);
}

function createElement(elementName){
    return document.createElement(elementName);
}

function addClassToElement(elementName, className){
    elementName.classList.add(className);
}



/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage.js */ "./src/webpage.js");



(0,_webpage_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7O0FBRTlEOztBQUVBOztBQUVBLG9CQUFvQiwwREFBYTtBQUNqQyxJQUFJLDhEQUFpQjs7QUFFckIseUJBQXlCLDBEQUFhO0FBQ3RDO0FBQ0EsSUFBSSw4REFBaUI7O0FBRXJCLDZCQUE2QiwwREFBYTtBQUMxQztBQUNBLElBQUksOERBQWlCOztBQUVyQiwwQkFBMEIsMERBQWE7QUFDdkMsSUFBSSw4REFBaUI7O0FBRXJCLHFCQUFxQiwwREFBYTtBQUNsQztBQUNBLElBQUksOERBQWlCOztBQUVyQix3QkFBd0IsMERBQWE7QUFDckM7QUFDQSxJQUFJLDhEQUFpQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNHOztBQUV0QyxxREFBUTtBQUNSLGtEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgYWRkQ2xhc3NUb0VsZW1lbnR9IGZyb20gJy4vd2VicGFnZS5qcyc7XG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG5cbiAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChjb250YWluZXIsIFwiaG9tZS1jb250YWluZXJcIik7XG5cbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBjcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkxpdHRsZSBSb21lIEl0YWxpYW4gUmlzdG9yYW50ZVwiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KHJlc3RhdXJhbnROYW1lLCBcInJlc3RhdXJhbnQtbmFtZVwiKTtcblxuICAgIGxldCByZXN0YXVyYW50U3VidGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcmVzdGF1cmFudFN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJBIHJhcmUgZXhwZXJpZW5jZSBpbiB0YXN0ZVwiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KHJlc3RhdXJhbnRTdWJ0aXRsZSwgXCJyZXN0YXVyYW50LXN1YnRpdGxlXCIpO1xuXG4gICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQoYnV0dG9uQ29udGFpbmVyLCBcIm1lbnUtYnV0dG9uLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobWVudUJ1dHRvbiwgXCJtZW51LWJ1dHRvblwiKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQoY29udGFjdEJ1dHRvbiwgXCJjb250YWN0LWJ1dHRvblwiKTtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50U3VidGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG59XG5cbmV4cG9ydCB7bG9hZEhvbWV9OyIsImxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XG4gICAgbG9hZE5hdmJhcigpO1xufVxuXG5mdW5jdGlvbiBsb2FkTmF2YmFyKCl7XG4gICAgbGV0IG5hdkJhciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KG5hdkJhciwgXCJuYXZiYXJcIik7XG5cbiAgICAvL0NyZWF0ZSB0aGUgbmF2YmFyIGxvZ29cbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nby5zcmMgPSBcIi4uL2Rpc3QvaW1nL3Jlc3RhdXJhbnRMb2dvLnBuZ1wiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGxvZ28sIFwibG9nb1wiKTtcblxuICAgIC8vQ3JlYXRlIGEgY29udGFpbmVyIHdoaWNoIHdpbGwgaG9sZCBwYWdlIHRhYnNcbiAgICBsZXQgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGV0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAvL0FwcGVuZCB0ZXh0IHRvIGFuY2hvcnNcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBcbiAgICAvL0FkZCB0aGUgdGFicyB0byB0aGUgY29udGFpbmVyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgXG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobGlua0NvbnRhaW5lciwgXCJuYXZiYXItbGluay1jb250YWluZXJcIik7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbGVtZW50TmFtZSwgY2xhc3NOYW1lKXtcbiAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmV4cG9ydCB7bG9hZFBhZ2UsIGFkZENsYXNzVG9FbGVtZW50LCBjcmVhdGVFbGVtZW50fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bG9hZFBhZ2V9IGZyb20gJy4vd2VicGFnZS5qcyc7XG5cbmxvYWRQYWdlKCk7XG5sb2FkSG9tZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=