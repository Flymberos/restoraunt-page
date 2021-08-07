/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


let content = document.querySelector("#content");

function loadContact() {
   
    let header = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1");
    header.textContent = "Contact Us";
    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(header, "contact-heading");

    let headerLine = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr");
    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(headerLine, "contact-heading-line");

    let formContainer = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(formContainer, "contact-form-container");

    let nameInput = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");
    let emailInput = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");
    let messageInput = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");

    nameInput.placeholder = "Enter your name";
    emailInput.placeholder = "Enter your email";
    messageInput.placeholder = "Enter your question";

    let submitButton = (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");
    submitButton.textContent = "Submit";
    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(submitButton, "contact-form-button");

    formContainer.appendChild(nameInput);
    formContainer.appendChild(emailInput);
    formContainer.appendChild(messageInput);
    formContainer.appendChild(submitButton);
    

    content.appendChild(header);
    content.appendChild(headerLine);
    content.appendChild(formContainer);
}



/***/ }),

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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
        menuLink.style.color = "white";
    });

    menuLink.addEventListener("click", () => {
        content.innerHTML = "";
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
        homeLink.style.color = "white";
        contactLink.style.color = "white";
        menuLink.style.color = "#FFD700";
    });

    contactLink.addEventListener("click", () => {
        content.innerHTML = "";
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
        homeLink.style.color = "white";
        menuLink.style.color = "white";
        contactLink.style.color = "#FFD700";
    });

    //Add the tabs to the container
    linkContainer.appendChild(homeLink);
    linkContainer.appendChild(menuLink);
    linkContainer.appendChild(contactLink);
    
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDTnNDOztBQUV0QyxxREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0b3JhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvcmF1bnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIGFkZENsYXNzVG9FbGVtZW50fSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgIFxuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQoaGVhZGVyLCBcImNvbnRhY3QtaGVhZGluZ1wiKTtcblxuICAgIGxldCBoZWFkZXJMaW5lID0gY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGhlYWRlckxpbmUsIFwiY29udGFjdC1oZWFkaW5nLWxpbmVcIik7XG5cbiAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQoZm9ybUNvbnRhaW5lciwgXCJjb250YWN0LWZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IG5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgbWVzc2FnZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIG5hbWVcIjtcbiAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIGVtYWlsXCI7XG4gICAgbWVzc2FnZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIHF1ZXN0aW9uXCI7XG5cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgXCJjb250YWN0LWZvcm0tYnV0dG9uXCIpO1xuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7bG9hZENvbnRhY3R9IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBhZGRDbGFzc1RvRWxlbWVudH0gZnJvbSAnLi93ZWJwYWdlLmpzJztcblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQoY29udGFpbmVyLCBcImhvbWUtY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHJlc3RhdXJhbnROYW1lID0gY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJMaXR0bGUgUm9tZSBJdGFsaWFuIFJpc3RvcmFudGVcIjtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChyZXN0YXVyYW50TmFtZSwgXCJyZXN0YXVyYW50LW5hbWVcIik7XG5cbiAgICBsZXQgcmVzdGF1cmFudFN1YnRpdGxlID0gY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHJlc3RhdXJhbnRTdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiQSByYXJlIGV4cGVyaWVuY2UgaW4gdGFzdGVcIjtcbiAgICBhZGRDbGFzc1RvRWxlbWVudChyZXN0YXVyYW50U3VidGl0bGUsIFwicmVzdGF1cmFudC1zdWJ0aXRsZVwiKTtcblxuICAgIGxldCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGJ1dHRvbkNvbnRhaW5lciwgXCJtZW51LWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KG1lbnVCdXR0b24sIFwibWVudS1idXR0b25cIik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGNvbnRhY3RCdXR0b24sIFwiY29udGFjdC1idXR0b25cIik7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFN1YnRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX07IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBhZGRDbGFzc1RvRWxlbWVudH0gZnJvbSBcIi4vd2VicGFnZVwiO1xuXG5jbGFzcyBQaXp6YXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiBcIi4uL2Rpc3QvaW1nL1wiICsgdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi5wbmdcIjtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxufVxuXG5sZXQgQ2FybmUgPSBuZXcgUGl6emEoXCJDYXJuZVwiLCBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBIb21lbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaVwiKTtcbmxldCBDb2xvcmF0byA9IG5ldyBQaXp6YShcIkNvbG9yYXRvXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbFwiKTtcbmxldCBDcmVtYSA9IG5ldyBQaXp6YShcIkNyZW1hXCIsIFwiV2hpdGUgc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgU2FsbW9uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIik7XG5sZXQgRGlzZ3VzdG9zbyA9IG5ldyBQaXp6YShcIkRpc2d1c3Rvc29cIiwgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIik7XG5sZXQgR2FtYmVyaSA9IG5ldyBQaXp6YShcIkdhbWJlcmlcIiwgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWxcIik7XG5sZXQgUGVwZSA9IG5ldyBQaXp6YShcIlBlcGVcIiwgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgQ2hpbGxpIGZsYWtlcywgT2xpdmVzLCBCYXNpbFwiKTtcbmxldCBQb21vZG9ybyA9IG5ldyBQaXp6YShcIlBvbW9kb3JvXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgY2hlZXNlLCBDaGlsbGlcIik7XG5sZXQgU2Fsc2ljY2lhID0gbmV3IFBpenphKFwiU2Fsc2ljY2lhXCIsIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbFwiKTtcblxubGV0IFBpenphcyA9IFtDYXJuZSwgQ29sb3JhdG8sIENyZW1hLCBEaXNndXN0b3NvLCBHYW1iZXJpLCBQZXBlLCBQb21vZG9ybywgU2Fsc2ljY2lhXTtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENsYXNzVG9FbGVtZW50KGNvbnRhaW5lciwgXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICAgIGZvcihsZXQgaT0wOyBpPFBpenphcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRDbGFzc1RvRWxlbWVudChjYXJkLCBcIm1lbnUtY2FyZFwiKTtcblxuICAgICAgICBsZXQgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZS5zcmMgPSBQaXp6YXNbaV0uZ2V0SW1hZ2VQYXRoKCk7XG4gICAgICAgIGFkZENsYXNzVG9FbGVtZW50KGltYWdlLCBcIm1lbnUtaW1hZ2VcIik7XG5cbiAgICAgICAgbGV0IHBpenphTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwaXp6YU5hbWUudGV4dENvbnRlbnQgPSBQaXp6YXNbaV0uZ2V0TmFtZSgpO1xuICAgICAgICBhZGRDbGFzc1RvRWxlbWVudChwaXp6YU5hbWUsIFwibWVudS1waXp6YS1uYW1lXCIpO1xuXG4gICAgICAgIGxldCBwaXp6YURlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHBpenphRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBQaXp6YXNbaV0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnQocGl6emFEZXNjcmlwdGlvbiwgXCJtZW51LXBpenphLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBpenphTmFtZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGl6emFEZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIH1cblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG59XG5cbmV4cG9ydCB7bG9hZE1lbnV9IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250YWluZXJcIik7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBsb2FkTmF2YmFyKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWROYXZiYXIoKXtcbiAgICBsZXQgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobmF2QmFyLCBcIm5hdmJhclwiKTtcblxuICAgIC8vQ3JlYXRlIHRoZSBuYXZiYXIgbG9nb1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLnNyYyA9IFwiLi4vZGlzdC9pbWcvcmVzdGF1cmFudExvZ28ucG5nXCI7XG4gICAgYWRkQ2xhc3NUb0VsZW1lbnQobG9nbywgXCJsb2dvXCIpO1xuXG4gICAgLy9DcmVhdGUgYSBjb250YWluZXIgd2hpY2ggd2lsbCBob2xkIHBhZ2UgdGFic1xuICAgIGxldCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIC8vQXBwZW5kIHRleHQgdG8gYW5jaG9yc1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgaG9tZUxpbmsuc3R5bGUuY29sb3IgPSBcIiNGRkQ3MDBcIlxuXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICBob21lTGluay5zdHlsZS5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgICBjb250YWN0TGluay5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWVudUxpbmsuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgfSk7XG5cbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgIGhvbWVMaW5rLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb250YWN0TGluay5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbWVudUxpbmsuc3R5bGUuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgaG9tZUxpbmsuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIG1lbnVMaW5rLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb250YWN0TGluay5zdHlsZS5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgIH0pO1xuXG4gICAgLy9BZGQgdGhlIHRhYnMgdG8gdGhlIGNvbnRhaW5lclxuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuICAgIFxuICAgIFxuICAgIGFkZENsYXNzVG9FbGVtZW50KGxpbmtDb250YWluZXIsIFwibmF2YmFyLWxpbmstY29udGFpbmVyXCIpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLnByZXBlbmQobmF2QmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbGVtZW50TmFtZSwgY2xhc3NOYW1lKXtcbiAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmxvYWRIb21lKCk7XG5cbmV4cG9ydCB7bG9hZFBhZ2UsIGFkZENsYXNzVG9FbGVtZW50LCBjcmVhdGVFbGVtZW50fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkUGFnZX0gZnJvbSAnLi93ZWJwYWdlLmpzJztcblxubG9hZFBhZ2UoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=