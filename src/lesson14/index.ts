/* function signatures
is something which describes the general structure of a type of function
what argument types it accepts and what value types it returns
it's almost like away to give a function a specific type itself
*/

//below is a function signature, we use type keyword
//here we define arg types and return type
//we're storing the function signature as a type alias called calculator
type Calculator = (numOne: number, numTwo: number) => number;

//does the below function adhere to the function signature?
function addTwoNumbers(a: number, b: number) {
  return a + b;
} //yes!

//does the below function adhere to the function signature?
function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
} //yes!

//does the below function adhere to the function signature?
function squareNumber(num: number) {
  return num * num;
}

//does the below function adhere to the function signature?
function joinToNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

//lets make a array that can only store data structures that adhere to Calculator
let calcs: Calculator[] = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
//calcs.push(joinToNumbers) wont work, doesnt return the correct type
calcs.push(squareNumber);
/* why does line above work? when we create a function signature
in order for a function to adhere to that signature, it doesn't 
need to have ANY or ALL of the arguments. it can't have MORE arguments,
so 3 or more in this case would not be possible. But it can have 0, or 1 argument
as long as it returns a number it's fine
 */

/* function signatures on interfaces */
//we have seen properties before on interfaces
//but here we also specify that one of the properties has to be a function
interface HasArea {
  name: string;
  calcArea: (a: number) => number; //this is a function signature
}

//here we create an object that adheres to above interface
//we add an implementation of calcArea for it
const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(r: number) {
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
