"use strict";
/* inheritance */
/* what if we needed multiple food classes
 like noodles | burgers, no matter what they would all have something in common
 like a title and a price */
// let's create a parent menu item, that other classes can inherit from
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    // implement details method which all other classes will inherit
    // make it a getter function so we can access it like a property
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class PizzaFive extends MenuItem {
    constructor(title, price) {
        super(title, price);
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
const pizzaSix = new PizzaFive("Mario Special", 15);
pizzaSix.details;
// if details was not a getter, we would have to add () to invoke it
function printMenuItem(item) {
    console.log(item.details);
    // we could pass in a pizza or burger&&they would all work
}
printMenuItem(pizzaSix);
