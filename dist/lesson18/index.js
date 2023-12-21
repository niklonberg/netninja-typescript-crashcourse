"use strict";
/* access modifiers
atm all of our class properties are public
meaning we can access them all like this and change them like this*/
// pizza.title = 'banana'
// a lot of the time you don't want this functionality
// by making properties private we increase the control in how they are used and manipulated
// so other developers dont use them in a wrong way for example
// we can choose to expose some, none or all via methods to manipulate them.
// enter access modifiers
class PizzaTwo {
    constructor(title, price) {
        this.base = "classic";
        this.toppings = [];
        this.title = title;
        this.price = price;
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
// we can shorten this class declaration by a lot
class PizzaThree {
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
// notice we only did the constructor access thing for the two things we feed into it
const pizzaThree = new PizzaThree("yoshi special", 20);
