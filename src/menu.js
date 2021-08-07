import {createElement, addClassToElement} from "./webpage";

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
    
    let container = createElement("div");
    addClassToElement(container, "menu-container");

    for(let i=0; i<Pizzas.length; i++){

        let card = createElement("div");
        addClassToElement(card, "menu-card");

        let image = createElement("img");
        image.src = Pizzas[i].getImagePath();
        addClassToElement(image, "menu-image");

        let pizzaName = createElement("p");
        pizzaName.textContent = Pizzas[i].getName();
        addClassToElement(pizzaName, "menu-pizza-name");

        let pizzaDescription = createElement("p");
        pizzaDescription.textContent = Pizzas[i].getDescription();
        addClassToElement(pizzaDescription, "menu-pizza-description");

        card.appendChild(image);
        card.appendChild(pizzaName);
        card.appendChild(pizzaDescription);
        container.appendChild(card);

    }


    content.appendChild(container);

}

export {loadMenu}