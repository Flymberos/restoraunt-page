import {createElement, addClassToElement} from './webpage.js';

let body = document.querySelector("body");
let content = document.querySelector("#content");

function loadHome(){

    let container = createElement("div");
    addClassToElement(container, "home-container");

    let restaurantName = createElement("h1");
    restaurantName.textContent = "Little Rome Italian Ristorante";
    addClassToElement(restaurantName, "restaurant-name");

    let restaurantSubtitle = createElement("h2");
    restaurantSubtitle.textContent = "A rare experience in taste";
    addClassToElement(restaurantSubtitle, "restaurant-subtitle");

    let buttonContainer = createElement("div");
    addClassToElement(buttonContainer, "menu-button-container");

    let menuButton = createElement("button");
    menuButton.textContent = "Menu";
    addClassToElement(menuButton, "menu-button");

    let contactButton = createElement("button");
    contactButton.textContent = "Contact";
    addClassToElement(contactButton, "contact-button");

    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    container.appendChild(restaurantName);
    container.appendChild(restaurantSubtitle);
    container.appendChild(buttonContainer);

    content.appendChild(container);
}

export {loadHome};