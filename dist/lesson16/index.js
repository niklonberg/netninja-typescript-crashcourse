"use strict";
/* extending type aliases */
// we are essentially saying above, that type user must also have an id&&a first name
const personOne = {
    id: 1,
    firstName: "mario",
};
const personTwo = {
    id: 2,
    firstName: "yoshi",
    email: "yoshi@net.dk",
};
const personThree = {
    email: "peach@net.dk",
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
    // when we press . it auto completes id & first name aswell
}
// printUser(personOne)
printUser(personTwo);
// printUser(personThree)
