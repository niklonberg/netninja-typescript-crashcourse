"use strict";
/* type aliases, similar to interfaces, with subtle differences */
//and below we set it as the demanded return value from our fn
function getRandomClr() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomClr();
const colorTwo = getRandomClr();
console.log(colorOne, colorTwo);
const userOne = {
    name: "ryu",
    score: 75,
};
function formatUser(user) {
    console.log(`${user.name} has ${user.score} points`);
}
formatUser(userOne);
//we can use object literals in the function, but again they must strictly adhere to the type
formatUser({ name: "yoshi", score: 100 });
