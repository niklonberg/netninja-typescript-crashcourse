/* EXPLICIT TYPE ANNOTATIONS */

let age: number = 30;
let firstName: string = "mario";
let isFictional: boolean;

age = 31;
firstName = "Luigi";
isFictional = true;

// IMPLICIT TYPE
let planet = "Earth";
let moons = 1;
let isLarge = false;

planet = "saturn";
moons = 145;
//isLarge = 'hello'

//NULL & UNDEFINED
let something: null;
let another: undefined;

//something = 10 not possible
something = null;

//another = 'hello-world'

//when you declare a variable without specifying a type and without initializing it
let weirdo;
console.log(weirdo);
