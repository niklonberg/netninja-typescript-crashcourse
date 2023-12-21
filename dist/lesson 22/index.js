"use strict";
/* abstract classes */
/* an abstract class works like any other class,
except it can't be used to create an object */
//we simply add abstract keyword in front of class declaration
class MenuItemThree {
    /* when we make an abstract class we can also makes some of those properties abstract */
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
// const menuItem = new MenuItemThree() throws error: Cannot create an instance of an abstract class.
// now PizzaSeven will throw error: Non-abstract class 'PizzaSeven' does not implement all abstract members of 'MenuItemThree'
// because it is missing the format method
// lets add it
class PizzaSeven extends MenuItemThree {
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
    /* what is the benefit of now making each child class have to implement its own format method?
    different menu items would probably want to implement different format methods
    if pizza you would list the toppings
    if noodles you would list the sauce & fillings etc */
    format() {
        let formatted = this.details + "\n";
        //base
        formatted += `Pizza on a ${this.base} base `;
        //toppings
        if (this.toppings.length < 1) {
            formatted += "with no toppings";
        }
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(", ")}.`;
        }
        return formatted;
    }
}
const pizzaNine = new PizzaSeven("Mario Special", 30);
function printFormatted3(val) {
    console.log(val.format());
}
printFormatted3(pizzaNine);
