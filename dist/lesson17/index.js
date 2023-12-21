"use strict";
/* classes 101 */
/* below a class looks much very much like an interface
a class allows us a way to create new Pizza object, whereas an interface doesnt
*/
/* class IncompletePizzaClass {
  title: string;
  price: number;
  base: Base;
  toppings: string[];
} */
/* if the above was an interface, we couldnt use it to create a pizza object like this
const pizza = new Pizza(), but classes can */
/* you can think of interfaces as a way to enforce a structure on an object
but classes as a way to CREATE objects with a certain structure */
// const pizzaFake = new IncompletePizzaClass();
// pizzaFake.base these auto complete since the class
// pizzaFake.price tells typescript that this pizza has those properties
// atm pizza's properties are all undefined, since we havent passed anything into them
class Pizza {
    constructor(title, price) {
        this.base = "classic";
        this.toppings = [];
        this.title = title;
        this.price = price;
        //base and toppings is missing from here, we add/edit them by other means
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
const pizza = new Pizza("Mario Special", 15);
// pizza.selectBase('crispy') doesnt work, because crispy is not one of the 4 allowed str vals
pizza.selectBase("garlic");
pizza.addTopping("olives");
pizza.addTopping("tomatoes");
console.log(pizza);
