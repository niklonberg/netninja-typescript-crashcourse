/* we can assign variables as we are used to */
/* below uses inferred type declaration, myname is of type str, because we assigned a string to it */
let myname = "hello";

//myname = 1 throws an error

/* benefits of typescript */

/* 1 - better error feedback */

function reverse(str: string) {
  return str.split("").reverse().join("");
}

/* when we specify the type of a parameter in a function, we get immediate */
/* error feedback if we use the function incorrectly, we can catch errors ahead of runtime */
//const result = reverse(1)
const result = reverse("hello");

/*  2 - better autocompletion and code hints */

const reversed = reverse("ninja");

/* plain javascript would not know what prototype methods would be inherently available
on reversed, so we could mistakenly try to use forEach on it */

//reversed.forEach <-- typescript catches this error

/* 3 - better custom types
 using interfaces, classes and type aliases */

interface MenuItem {
  name: string;
  cost: number;
}

function printMenuItem(item: MenuItem) {
  console.log(`${item.name} costs: ${item.cost}`); //.name and .cost autocompletes
}

//error example 1
//printMenuItem()

//error example 2
//printMenuItem({name: 'blowdryer', cost: '15'}) incorrect value in cost

//error example 3
//printMenuItem({title: 'ball', cost: 20}) title not assignable on object

//correct example
printMenuItem({ name: "banana", cost: 1 });

/* 4 - self documenting */
//if you click printMenuItem below and press f12 it takes you to fn def.
printMenuItem();
