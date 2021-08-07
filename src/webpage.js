import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';

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
        loadHome();
        homeLink.style.color = "#FFD700";
        contactLink.style.color = "white";
        menuLink.style.color = "white";
    });

    menuLink.addEventListener("click", () => {
        content.innerHTML = "";
        loadMenu();
        homeLink.style.color = "white";
        contactLink.style.color = "white";
        menuLink.style.color = "#FFD700";
    });

    contactLink.addEventListener("click", () => {
        content.innerHTML = "";
        loadContact();
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

loadHome();

export {loadPage, addClassToElement, createElement}