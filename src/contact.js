import {createElement, addClassToElement} from "./webpage";

let content = document.querySelector("#content");

function loadContact() {
   
    let header = createElement("h1");
    header.textContent = "Contact Us";
    addClassToElement(header, "contact-heading");

    let headerLine = createElement("hr");
    addClassToElement(headerLine, "contact-heading-line");

    let formContainer = createElement("div");
    addClassToElement(formContainer, "contact-form-container");

    let nameInput = createElement("input");
    let emailInput = createElement("input");
    let messageInput = createElement("input");

    nameInput.placeholder = "Enter your name";
    emailInput.placeholder = "Enter your email";
    messageInput.placeholder = "Enter your question";

    let submitButton = createElement("button");
    submitButton.textContent = "Submit";
    addClassToElement(submitButton, "contact-form-button");

    formContainer.appendChild(nameInput);
    formContainer.appendChild(emailInput);
    formContainer.appendChild(messageInput);
    formContainer.appendChild(submitButton);
    

    content.appendChild(header);
    content.appendChild(headerLine);
    content.appendChild(formContainer);
}

export {loadContact}