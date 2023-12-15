"use strict";
/* arrays */
// explicit
let names = ["mario", "luigi", "peach"]; //only strings can be inside the survey
let ages = [20, 10, 5]; //only numbrs
names.push("browser"); //works
ages.push(35); //works
/* type inference with arrays */
// if we hover over fruits it shows us the types allowed
let fruits = ["apples", "pears", "bananas", "mangos"];
// fruits.push(true) won't work
fruits.push("peaches");
// when we assign f to a value from fruits, it also infers the type
// try hovering over f below
const f = fruits[3];
//below is a union type array
let things = [1, true, "hello"];
//however if we try to get 1 of these values & assign it to a variable
let t = things[0];
//if you hover over t above, you can see that it only knows that t's type is one of the types in the array
/* object literals */
let user = {
    age: 30,
    firstName: "egon",
    uID: 1,
};
//user.firstName = 2 won't work
//again, a property or variable can be changed, but not to a different type
//user.email = 'ph@ninja.dev' new properties cannot be added either, we have to stick to object structure we set
/* type inference with object literals */
// if we hover over person1 we can see the property types have been set implicitly
let person1 = {
    name: "luigi",
    score: 10,
};
//person1.name = 54 wont work
// if we set score here to a property fro person 1, the type of score is again set implicitly
const score = person1.score;
