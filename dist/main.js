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
let content = document.querySelector("#content");

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

    content.appendChild(container);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


class Pizza{
    
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    getImagePath() {
        return "../dist/img/" + this.name.toLowerCase() + ".png";
    }

    getName() {
        return this.name;
    }

    getDescription(){
        return this.description;
    }

}

let Carne = new Pizza("Carne", "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli");
let Colorato = new Pizza("Colorato", "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil");
let Crema = new Pizza("Crema", "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil");
let Disgustoso = new Pizza("Disgustoso", "Tomato sauce, Bacon, Pineapple, Olives, Basil");
let Gamberi = new Pizza("Gamberi", "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil");
let Pepe = new Pizza("Pepe", "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil");
let Pomodoro = new Pizza("Pomodoro", "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli");
let Salsiccia = new Pizza("Salsiccia", "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil");

let Pizzas = [Carne, Colorato, Crema, Disgustoso, Gamberi, Pepe, Pomodoro, Salsiccia];

let content = document.querySelector("#content");

function loadMenu() {
    
    let container = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(container, "menu-container");

    for(let i=0; i<Pizzas.length; i++){

        let card = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
        (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(card, "menu-card");

        let image = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");
        image.src = Pizzas[i].getImagePath();
        (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(image, "menu-image");

        let pizzaName = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
        pizzaName.textContent = Pizzas[i].getName();
        (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(pizzaName, "menu-pizza-name");

        let pizzaDescription = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
        pizzaDescription.textContent = Pizzas[i].getDescription();
        (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(pizzaDescription, "menu-pizza-description");

        card.appendChild(image);
        card.appendChild(pizzaName);
        card.appendChild(pizzaDescription);
        container.appendChild(card);

    }


    content.appendChild(container);

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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



let mainContainer = document.querySelector("#main-container");
let content = document.querySelector("#content");

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

    homeLink.style.color = "#FFD700"

    homeLink.addEventListener("click", () => {
        content.innerHTML = "";
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
        homeLink.style.color = "#FFD700";
        contactLink.style.color = "white";
    });

    contactLink.addEventListener("click", () => {
        content.innerHTML = "";
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
        homeLink.style.color = "white";
        contactLink.style.color = "#FFD700";
    });

    //Add the tabs to the container
    linkContainer.appendChild(homeLink);
    linkContainer.appendChild(contactLink);
    linkContainer.appendChild(menuLink);
    
    addClassToElement(linkContainer, "navbar-link-container");

    navBar.appendChild(logo);
    navBar.appendChild(linkContainer);
    mainContainer.prepend(navBar);
}

function createElement(elementName){
    return document.createElement(elementName);
}

function addClassToElement(elementName, className){
    elementName.classList.add(className);
}

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();



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
/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage.js */ "./src/webpage.js");


(0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7O0FBRTlEO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDBEQUFhO0FBQ2pDLElBQUksOERBQWlCOztBQUVyQix5QkFBeUIsMERBQWE7QUFDdEM7QUFDQSxJQUFJLDhEQUFpQjs7QUFFckIsNkJBQTZCLDBEQUFhO0FBQzFDO0FBQ0EsSUFBSSw4REFBaUI7O0FBRXJCLDBCQUEwQiwwREFBYTtBQUN2QyxJQUFJLDhEQUFpQjs7QUFFckIscUJBQXFCLDBEQUFhO0FBQ2xDO0FBQ0EsSUFBSSw4REFBaUI7O0FBRXJCLHdCQUF3QiwwREFBYTtBQUNyQztBQUNBLElBQUksOERBQWlCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWE7QUFDakMsSUFBSSwyREFBaUI7O0FBRXJCLGlCQUFpQixpQkFBaUI7O0FBRWxDLG1CQUFtQix1REFBYTtBQUNoQyxRQUFRLDJEQUFpQjs7QUFFekIsb0JBQW9CLHVEQUFhO0FBQ2pDO0FBQ0EsUUFBUSwyREFBaUI7O0FBRXpCLHdCQUF3Qix1REFBYTtBQUNyQztBQUNBLFFBQVEsMkRBQWlCOztBQUV6QiwrQkFBK0IsdURBQWE7QUFDNUM7QUFDQSxRQUFRLDJEQUFpQjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFbUM7QUFDQTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQVE7Ozs7Ozs7O1VDbEVSO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG9yYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgYWRkQ2xhc3NUb0VsZW1lbnR9IGZyb20gJy4vd2VicGFnZS5qcyc7XG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gbG9hZEhvbWUoKXtcblxuICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGNvbnRhaW5lciwgXCJob21lLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCByZXN0YXVyYW50TmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiTGl0dGxlIFJvbWUgSXRhbGlhbiBSaXN0b3JhbnRlXCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQocmVzdGF1cmFudE5hbWUsIFwicmVzdGF1cmFudC1uYW1lXCIpO1xuXG4gICAgbGV0IHJlc3RhdXJhbnRTdWJ0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICByZXN0YXVyYW50U3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkEgcmFyZSBleHBlcmllbmNlIGluIHRhc3RlXCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQocmVzdGF1cmFudFN1YnRpdGxlLCBcInJlc3RhdXJhbnQtc3VidGl0bGVcIik7XG5cbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChidXR0b25Db250YWluZXIsIFwibWVudS1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChtZW51QnV0dG9uLCBcIm1lbnUtYnV0dG9uXCIpO1xuXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChjb250YWN0QnV0dG9uLCBcImNvbnRhY3QtYnV0dG9uXCIpO1xuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRTdWJ0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7bG9hZEhvbWV9OyIsImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgYWRkQ2xhc3NUb0VsZW1lbnR9IGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuY2xhc3MgUGl6emF7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VQYXRoKCkge1xuICAgICAgICByZXR1cm4gXCIuLi9kaXN0L2ltZy9cIiArIHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpICsgXCIucG5nXCI7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbn1cblxubGV0IENhcm5lID0gbmV3IFBpenphKFwiQ2FybmVcIiwgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgSG9tZW1hZGUgc2F1c2FnZSwgQmFjb24sIEdhcmxpYywgUGVwcGVyLCBDaGlsbGlcIik7XG5sZXQgQ29sb3JhdG8gPSBuZXcgUGl6emEoXCJDb2xvcmF0b1wiLCBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWxcIik7XG5sZXQgQ3JlbWEgPSBuZXcgUGl6emEoXCJDcmVtYVwiLCBcIldoaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCIpO1xubGV0IERpc2d1c3Rvc28gPSBuZXcgUGl6emEoXCJEaXNndXN0b3NvXCIsIFwiVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCIpO1xubGV0IEdhbWJlcmkgPSBuZXcgUGl6emEoXCJHYW1iZXJpXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsXCIpO1xubGV0IFBlcGUgPSBuZXcgUGl6emEoXCJQZXBlXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWxcIik7XG5sZXQgUG9tb2Rvcm8gPSBuZXcgUGl6emEoXCJQb21vZG9yb1wiLCBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIGNoZWVzZSwgQ2hpbGxpXCIpO1xubGV0IFNhbHNpY2NpYSA9IG5ldyBQaXp6YShcIlNhbHNpY2NpYVwiLCBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIEhvbWVtYWRlIHNhdXNhZ2UsIEdhcmxpYywgQmFzaWxcIik7XG5cbmxldCBQaXp6YXMgPSBbQ2FybmUsIENvbG9yYXRvLCBDcmVtYSwgRGlzZ3VzdG9zbywgR2FtYmVyaSwgUGVwZSwgUG9tb2Rvcm8sIFNhbHNpY2NpYV07XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChjb250YWluZXIsIFwibWVudS1jb250YWluZXJcIik7XG5cbiAgICBmb3IobGV0IGk9MDsgaTxQaXp6YXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIGxldCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnQoY2FyZCwgXCJtZW51LWNhcmRcIik7XG5cbiAgICAgICAgbGV0IGltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gUGl6emFzW2ldLmdldEltYWdlUGF0aCgpO1xuICAgICAgICBhZGRDbGFzc1RvRWxlbWVudChpbWFnZSwgXCJtZW51LWltYWdlXCIpO1xuXG4gICAgICAgIGxldCBwaXp6YU5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGl6emFOYW1lLnRleHRDb250ZW50ID0gUGl6emFzW2ldLmdldE5hbWUoKTtcbiAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnQocGl6emFOYW1lLCBcIm1lbnUtcGl6emEtbmFtZVwiKTtcblxuICAgICAgICBsZXQgcGl6emFEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwaXp6YURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gUGl6emFzW2ldLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGFkZENsYXNzVG9FbGVtZW50KHBpenphRGVzY3JpcHRpb24sIFwibWVudS1waXp6YS1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwaXp6YU5hbWUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBpenphRGVzY3JpcHRpb24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICB9XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5leHBvcnQge2xvYWRNZW51fSIsImltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge2xvYWRNZW51fSBmcm9tICcuL21lbnUuanMnO1xuXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250YWluZXJcIik7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBsb2FkTmF2YmFyKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWROYXZiYXIoKXtcbiAgICBsZXQgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobmF2QmFyLCBcIm5hdmJhclwiKTtcblxuICAgIC8vQ3JlYXRlIHRoZSBuYXZiYXIgbG9nb1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLnNyYyA9IFwiLi4vZGlzdC9pbWcvcmVzdGF1cmFudExvZ28ucG5nXCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobG9nbywgXCJsb2dvXCIpO1xuXG4gICAgLy9DcmVhdGUgYSBjb250YWluZXIgd2hpY2ggd2lsbCBob2xkIHBhZ2UgdGFic1xuICAgIGxldCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIC8vQXBwZW5kIHRleHQgdG8gYW5jaG9yc1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgaG9tZUxpbmsuc3R5bGUuY29sb3IgPSBcIiNGRkQ3MDBcIlxuXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICBob21lTGluay5zdHlsZS5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgICBjb250YWN0TGluay5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgaG9tZUxpbmsuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGNvbnRhY3RMaW5rLnN0eWxlLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgfSk7XG5cbiAgICAvL0FkZCB0aGUgdGFicyB0byB0aGUgY29udGFpbmVyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgXG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobGlua0NvbnRhaW5lciwgXCJuYXZiYXItbGluay1jb250YWluZXJcIik7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIucHJlcGVuZChuYXZCYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KGVsZW1lbnROYW1lLCBjbGFzc05hbWUpe1xuICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn1cblxubG9hZEhvbWUoKTtcblxuZXhwb3J0IHtsb2FkUGFnZSwgYWRkQ2xhc3NUb0VsZW1lbnQsIGNyZWF0ZUVsZW1lbnR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xvYWRQYWdlfSBmcm9tICcuL3dlYnBhZ2UuanMnO1xuXG5sb2FkUGFnZSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==