/* union types */

//a way for us to let typescript know that a particular value or variable somewhere can be multiple types
let someId: number | string; // this var can be either nmb or str
someId = 1;
someId = "2";

let email: string | null = null; //in ex. app. users email could be either one
//null if not logged in perhaps

email = "mario@net.dev";
email = null;

//lets try to use a type alias
type Id = number | string; //str could be randomly generated: 'asdfje734jng'
//we could use this alias instead of writing number | string over and over again
let nextId: Id;

nextId = "sdjfjergm435";
nextId = 2;

/* union type pitfall - watch out! */

/* function swapIdType(id: Id): Id {
  //can only use properties and methods common to
  //both nmbr and str types
  //parseInt(id) --> not allowed, because that method only works on one of the types

  parseInt(id);

  return id;
} */

swapIdType("5");

/* there is a way we can work around this pitfall --> see lesson 12! */
