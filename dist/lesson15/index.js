"use strict";
/* extending interfaces is a little bit like class inheritance */
//an interface can extend another interface
//the object below adheres to the interface HasFormatter
//but !bill since it lacks an amount & a server
const userSix = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
//this object conforms to bill interface
const bill = {
    id: 2,
    amount: 50,
    server: "mario",
    format() {
        return `Bill with id ${this.id} has ${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log(`Server: ${bill.server}`);
    console.log(bill.format());
}
printFormatted(userSix);
printFormatted(bill);
//printBill(userSix)
printBill(bill);
