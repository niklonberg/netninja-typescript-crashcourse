/* classes with interfaces */
// classes can implement interfaces
// we've seen that interfaces are used to enforce certain structure on objects
// & classes sort of doing the same, but are used to create objects too

type BaseFour = "classic" | "thick" | "thin" | "garlic";

/* when it comes to classes implementing an interface,
we are basically forming a contract between the two, 
in that class we must have the properties defined in the interface */

interface HasFormatter {
  format(): string;
}

class MenuItemTwo implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }
  // this class must now implement a format method or we get error:
  /* Class 'MenuItemTwo' incorrectly implements interface 'HasFormatter'.
  Property 'format' is missing in type 'MenuItemTwo' but required in type 'HasFormatter'. */
  format() {
    return `This menu item is called ${this.title} and costs $${this.price}`;
  }
}

class PizzaSix extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }
  private base: BaseFour = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: BaseFour) {
    this.base = base;
  }
}

/* so how is this class implementing and interface useful?
 well there might be several different data types in an application
 which could implement this HasFormatter interface 
 & they might be completely different from each other, 
 some could be menu items, order objects etc
 
 by binding them all together with an interface
 we have a way to add functionality to our app for
 any object that implements that interface */

function printFormatted2(val: HasFormatter): void {
  console.log(val.format());
}

/* any objects that is used in this function 
will all have a format method, that we can use */
