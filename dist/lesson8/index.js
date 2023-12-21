"use strict";
/* tuples */
/* arrays are typically used in a way where they have ONE type of data in it, and that data is held in no particular order
tuples on the other hand allow essentially what is an array of different types in a very specific order, of a certain length */
const person = ["hi", 8, true];
//we can change the values in this array like normally, but we cant set them to a different type.
//person[0] = 123 would not work
//dont feel like you NEED to use them, but they might come in handy
/* tuple examples */
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [96.2, 18.5];
function useCoords() {
    //get coords from user
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
/* named tuples */
/* with the release of typescript version 4, named tuples was added
when we define a tuple type, we can add names to each value in the tuple*/
//like this, remember that this is not the same as object keys, even though it looks the same
let user1;
//before adding values to user1, if one hovers over user1 with mouse, it tells you what needs to be put in
user1 = ["peach", 25];
console.log(user1[0]);
