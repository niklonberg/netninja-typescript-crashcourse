"use strict";
/* classes as types */
class PizzaFour {
    // we can use access modifiers to set private properties inside the constructor itself.
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // private title: string; these two lines no longer needed
        // private price: number;
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(base) {
        this.base = base;
    }
}
// we can explicitly set the type for pizzaFour, but it isnt necessary
const pizzaFour = new PizzaFour("Mario Special", 15);
const pizzaFive = new PizzaFour("yoshi special", 20);
function addMushroomsToPizzas(pizzas) {
    pizzas.forEach((p) => p.addTopping("mushrooms"));
}
// we can only use this method on a array of pizzas
// addMushroomsToPizzas([pizzaFour, pizzaFive], { title: "heello" });
addMushroomsToPizzas([pizzaFour, pizzaFive]);
console.log(pizzaFive, pizzaFour);
