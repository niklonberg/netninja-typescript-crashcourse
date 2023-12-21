"use strict";
/* more practice with interfaces and type aliases */
//way to define data structure, that values that implement said interface have to adhere to.
// we can use them to store variables like we know
const somethingTwo = {
    quantity: 50,
};
//we can use them in functions
//here we specify that the item argument must implement hasQuantity interface
function printQuantity(item) {
    console.log(`the quantity(the item is ${item.quantity})`);
}
const fruit = {
    name: "mongo",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 3,
};
const personQ = {
    name: "mario",
    age: 13,
};
printQuantity(fruit);
printQuantity(vehicle);
//printQuantity(personQ) doesn't work
//so why does fruit&&vehicle work?
//as long as the argument we pass into a function
//has the properties we specify, we can use them freely
//even though they may have extra properties
/* edge case */
//printQuantity({quantity: 54, title: 'Something'}) this doesnt work.
/* it works for variables that we have created ahead,
but if we try to use an object literal inside a function call, that object
cannot have any extra properties, it must adhere to the interface the function set
 */
