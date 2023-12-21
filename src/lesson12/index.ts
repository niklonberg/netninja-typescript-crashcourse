/* type guards */
//we saw in the last lesson that we can run into a pitfall when using union types
//if we try to use a method inside a fn fx. and we feed it a data type that
//method wont work with, we will get a runtime error

//enter type guards
//a fancy way of saying we are gonna check the type of something,
//before we execute some code

type IdTwo = number | string;

function swapIdType(id: IdTwo): IdTwo {
  if (typeof id === "string") {
    //can use string methods inside
    return parseInt(id, 10);
  } else {
    //now because ts is smart, it knows that if the id
    //isnt a string, it must be a nmbr
    //can use number methods and properties
    return id.toString();
  }
}

const idThree = swapIdType(1);
const idFour = swapIdType("2");

console.log(idThree, idFour);
//yellow nmbrs in terminal are actual nbmrs, white nmbrs are strs

/* lets try it using interfaces */
//more specifically, tagged interfaces, where we add a common type property to two interfaces

interface UserTwo {
  type: "user"; //im the tagged
  name: string;
  email: string;
  id: IdTwo;
}

const userEx: UserTwo = {
  type: "user",
  name: "egon",
  email: "egon@mail.com",
  id: 4,
};

interface Person {
  type: "person"; //im the tagged
  firstName: string;
  age: number;
  id: IdTwo;
}

const personEx: Person = {
  type: "person",
  firstName: "bert",
  age: 42,
  id: "43",
};

//in this example, the only common id we could work with
//without type guards is id
function logDetails(value: UserTwo | Person): void {
  //return value.id would work
  //if we can figure out what datatype was passed in, we can get the other vals
  if (value.type === "user") {
    console.log(value.email, value.name);
  } else {
    console.log(value.firstName, value.age);
  }
}

logDetails(userEx);
logDetails(personEx);
