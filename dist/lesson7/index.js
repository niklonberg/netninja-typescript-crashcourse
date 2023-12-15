"use strict";
/* any type */
/* in general we should stay clear of using it */
let age2;
age2 = 30;
age2 = true;
let title; // when we declare a variable but dont set its type
// or assign it to something and implicitly set a type, then the below is possible
title = 25;
title = {
    hello: "word",
};
/* if we do the above, we are essentially going back to regular javascript, which is
why we shouldnt do this. */
/* any type in arrays */
let things2 = ["hello", true, 25];
things2.push({ key1: "bob" });
//again, the above probably isnt smart to do.
/* functions & any */
function addTogether(value) {
    return value + value;
}
const resOne = addTogether("hello");
const resTwo = addTogether(2);
//if we hover over resOne and resTwo, we can see that their type is any
/* WAYS ANY CAN BE USEFUL */
//when migrating from javascript to ts
//because using any wont cause errors initially
//then we can go in file by file, and start adding types
