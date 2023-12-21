/* inheritance */
/* what if we needed multiple food classes
 like noodles | burgers, no matter what they would all have something in common 
 like a title and a price */

type BaseThree = "classic" | "thick" | "thin" | "garlic";

// let's create a parent menu item, that other classes can inherit from
class MenuItem {
  constructor(private title: string, private price: number) {}

  // implement details method which all other classes will inherit
  // make it a getter function so we can access it like a property
  get details(): string {
    return `${this.title} - $${this.price}`;
  }
}

class PizzaFive extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }
  private base: BaseTwo = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: BaseTwo) {
    this.base = base;
  }
}

const pizzaSix = new PizzaFive("Mario Special", 15);

pizzaSix.details;
// if details was not a getter, we would have to add () to invoke it

function printMenuItem2(item: MenuItem): void {
  console.log(item.details);
  // we could pass in a pizza or burger&&they would all work
}

printMenuItem2(pizzaSix);
