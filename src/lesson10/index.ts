/* type aliases, similar to interfaces, with subtle differences */

/* example 1 - tuple */
//assignment of types is different from interfaces, in interfaces you use curly braces,
//with type you just use =
//here we create a custom type
type Rgb = [number, number, number];

//and below we set it as the demanded return value from our fn
function getRandomClr(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomClr();
const colorTwo = getRandomClr();
console.log(colorOne, colorTwo);

/* example 2 - object literal */

type User = {
  name: string;
  score: number;
};

const userOne: User = {
  name: "ryu",
  score: 75,
};

function formatUser(user: User): void {
  console.log(`${user.name} has ${user.score} points`);
}

formatUser(userOne);
//we can use object literals in the function, but again they must strictly adhere to the type
formatUser({ name: "yoshi", score: 100 });
