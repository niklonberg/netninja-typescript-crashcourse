"use strict";
// generic classes
// below is a standard class, a blueprint for a DataCollection
// atm it can only store strings in its data variable
// class DataCollection {
//   constructor(private data: string[]) {}
//   loadOne() {}
//   loadAll() {}
//   add() {}
// }
// lets make it generic! now we can specify what type we want to pass into it
class DataCollection {
    // now whatever data type we instantiate the class with, will be the data
    // we can store in its data array
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        // we could pass in an id or index here, but will just get a random one
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
// make datacollection of objects UserB
const usersA = new DataCollection([
    { name: "mario", score: 10 },
    { name: "luigi", score: 5 },
    { name: "peach", score: 20 },
]);
// it has its methods that we can use
usersA.add({ name: "yoshi", score: 50 });
// the methods infer the type returned, we can see randomUserA is of type UserB
const randomUserA = usersA.loadOne();
console.log("load one: ", usersA.loadOne());
console.log("load all: ", usersA.loadAll());
