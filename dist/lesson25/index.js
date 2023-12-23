"use strict";
/* Generic 101 */
/* in simple terms generics gives us way to create generic reusable structures
whether they be fns interfaces or classes, that can be used by many different data types
and they allow us to do this by giving a way to pass the data types themselves into those
structures, almost like arguments*/
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
/* these fns all take in a val of a type, and return the same type
if we store the result from one them, ts infers the type */
const resultBn = logAndReturnNumber(5);
/* the bad thing is that we wrote 3 fns that essentially do that same thing
we could use the any type for both the val and return type, but then ts no longer
knows the type that will be returned */
function logAndReturnValueBad(val) {
    console.log(val);
    return val;
}
//if we hover over resultNt, it says 'any' type
const resultNt = logAndReturnValueBad("hi");
//lets make it a generic function!
//T stands for type, and ts will now figure out the value passed in, and return the same type
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// we use it slightly differently from normal functions
const resultBnt = logAndReturnValue("hello");
const resultTnnt = logAndReturnValue(25);
// example 2
/* here we make a generic getRandomArrayVal, where we pass in <T> type,
that takes an array of T types, will return the T type*/
function getRandomArrayVal(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const usersX = [
    { name: "mario", score: 10 },
    { name: "luigi", score: 20 },
    { name: "ryu", score: 30 },
    { name: "ken", score: 5 },
];
const randomUser = getRandomArrayVal(usersX);
console.log(randomUser);
