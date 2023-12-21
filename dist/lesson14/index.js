"use strict";
/* function signatures
is something which describes the general structure of a type of function
what argument types it accepts and what value types it returns
it's almost like away to give a function a specific type itself
*/
//does the below function adhere to the function signature?
function addTwoNumbers(a, b) {
    return a + b;
} //yes!
//does the below function adhere to the function signature?
function multiplyTwoNumbers(first, second) {
    return first * second;
} //yes!
//does the below function adhere to the function signature?
function squareNumber(num) {
    return num * num;
}
//does the below function adhere to the function signature?
function joinToNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
//lets make a array that can only store data structures that adhere to Calculator
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
//calcs.push(joinToNumbers) wont work, doesnt return the correct type
calcs.push(squareNumber);
//here we create an object that adheres to above interface
//we add an implementation of calcArea for it
const shapeOne = {
    name: "square",
    calcArea(l) {
        return l * l;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
shapeOne.calcArea(5);
shapeTwo.calcArea(10);
//we can change the way we write HasArea, and it would work the same
/*
interface HasArea {
  name: string;
  calcArea(a: number): number; here calcArea looks much like a normal property
  a function signature inside of an interface
} */
