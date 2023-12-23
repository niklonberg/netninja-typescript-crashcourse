"use strict";
// intersection type
// here we return an intersection between two things
function addIdToValue(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
// if we hover over post we can see that it is an intersection type
const post = addIdToValue({ title: "marmite rules", thumbsUp: 2450 });
console.log(post.id, post.title, post.thumbsUp);
