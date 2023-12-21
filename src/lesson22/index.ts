/* abstract classes */
/* an abstract class works like any other class,
except it can't be used to create an object */

/* in the previous lessons we made a menu item class,
which would have all the things that would be shared between menu items, 
the child classes could extend this parent menu item class and inherit from it*/

/* however this menu item class doesn't mean much on its own,
we won't be using it to create menu item objects, 
since we are only using it to inherit from it we can make it an abstract class */

type BaseFive = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

//we simply add abstract keyword in front of class declaration
abstract class MenuItemThree implements HasFormatter {
  /* when we make an abstract class we can also makes some of those properties abstract */
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  /* like here, we make format abstract, which means we have to remove the implementation aswell */
  abstract format(): string; /* {
    return `This menu item is called ${this.title} and costs $${this.price}`;
  } */
}
// const menuItem = new MenuItemThree() throws error: Cannot create an instance of an abstract class.

// now PizzaSeven will throw error: Non-abstract class 'PizzaSeven' does not implement all abstract members of 'MenuItemThree'
// because it is missing the format method
// lets add it
class PizzaSeven extends MenuItemThree {
  constructor(title: string, price: number) {
    super(title, price);
  }
  private base: BaseFive = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: BaseFive) {
    this.base = base;
  }
  /* what is the benefit of now making each child class have to implement its own format method?
  different menu items would probably want to implement different format methods
  if pizza you would list the toppings 
  if noodles you would list the sauce & fillings etc */
  format() {
    let formatted = this.details + "\n";

    //base
    formatted += `Pizza on a ${this.base} base `;

    //toppings
    if (this.toppings.length < 1) {
      formatted += "with no toppings";
    }
    if (this.toppings.length > 0) {
      formatted += `with ${this.toppings.join(", ")}.`;
    }

    return formatted;
  }
}

const pizzaNine = new PizzaSeven("Mario Special", 30);

function printFormatted3(val: HasFormatter): void {
  console.log(val.format());
}

printFormatted3(pizzaNine);
