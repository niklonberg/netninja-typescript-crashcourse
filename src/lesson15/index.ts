/* extending interfaces is a little bit like class inheritance */
//an interface can extend another interface

interface HasFormatter {
  format(): string;
}

//now we add bill, since it extends HasFormatter, it will inherit HasFormatters props automatically
//so if we make new object of type Bill, that object must implement a format method
interface Bill extends HasFormatter {
  id: number | string;
  amount: number;
  server: string;
}

//the object below adheres to the interface HasFormatter
//but !bill since it lacks an amount & a server
const userSix = {
  id: 1,
  format(): string {
    return `This user has an id of ${this.id}`;
  },
};

//this object conforms to bill interface
const bill = {
  id: 2,
  amount: 50,
  server: "mario",
  format(): string {
    return `Bill with id ${this.id} has ${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log(`Server: ${bill.server}`);
  console.log(bill.format());
}

printFormatted(userSix);
printFormatted(bill);

//printBill(userSix)
printBill(bill);
