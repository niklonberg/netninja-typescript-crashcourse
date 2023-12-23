// generic interface

// not only functions can be generic, type aliases, interfaces and classes can be as well

// below we have a normal interface of a collection of something
// name is what the collection is a collection of
// data is a string array of each element or item
// so if it was star wars actors, each element in data would be an actors name, name key would be star wars actors

// interface Collection {
//   data: string[];
//   name: string;
// }

// the example above is a bit, limited in what it supports. We couldnt store anything but strings in the data key fx.
// lets make a generic interface
interface Collection<T> {
  data: T[];
  name: string;
}
//so now when we make an object using this interface, we can specify its type, and store that type in the array
const collectionOne: Collection<string> = {
  data: ["mario", "luigi", "peach"],
  name: "mario characters",
};

const collectionTwo: Collection<number> = {
  data: [10, 15, 20],
  name: "winning lottery numbers",
};

// generic function used with generic interface
function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);

  return c.data[i];
}

const resultA = randomCollectionItem<string>(collectionOne);
console.log(resultA);

// notice we dont need to add <'x'> like we did with <string> in line 37,
// typescript will infer the return type for us, because we specified it in the function decl.
// that its parameter is of type T
const resultB = randomCollectionItem(collectionTwo);
console.log(resultB);
