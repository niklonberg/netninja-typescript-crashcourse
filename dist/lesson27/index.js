"use strict";
// generic interface
//so now when we make an object using this interface, we can specify its type, and store that type in the array
const collectionOne = {
    data: ["mario", "luigi", "peach"],
    name: "mario characters",
};
const collectionTwo = {
    data: [10, 15, 20],
    name: "winning lottery numbers",
};
// generic function used with generic interface
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultA = randomCollectionItem(collectionOne);
console.log(resultA);
// notice we dont need to add <'x'> like we did with <string> in line 37,
// typescript will infer the return type for us, because we specified it in the function decl.
// that its parameter is of type T
const resultB = randomCollectionItem(collectionTwo);
console.log(resultB);
