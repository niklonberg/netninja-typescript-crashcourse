/* access modifiers
atm all of our class properties are public 
meaning we can access them all like this and change them like this*/
// pizza.title = 'banana'

// a lot of the time you don't want this functionality
// by making properties private we increase the control in how they are used and manipulated
// so other developers dont use them in a wrong way for example
// we can choose to expose some, none or all via methods to manipulate them.
// enter access modifiers

class PizzaTwo {
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
  //when nothing is infront of the below lines, it implicitly makes them public
  private title: string; //but we can specify them to be private
  private price: number;
  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: Base) {
    this.base = base;
  }
}

// we can shorten this class declaration by a lot
class PizzaThree {
  // we can use access modifiers to set private properties inside the constructor itself.
  constructor(private title: string, private price: number) {}
  // private title: string; these two lines no longer needed
  // private price: number;
  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(base: Base) {
    this.base = base;
  }
}
// notice we only did the constructor access thing for the two things we feed into it
const pizzaThree = new PizzaThree("yoshi special", 20);
