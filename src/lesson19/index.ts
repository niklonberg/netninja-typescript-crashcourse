/* classes as types */

type BaseTwo = "classic" | "thick" | "thin" | "garlic";

class PizzaFour {
  // we can use access modifiers to set private properties inside the constructor itself.
  constructor(private title: string, private price: number) {}
  // private title: string; these two lines no longer needed
  // private price: number;
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
// we can explicitly set the type for pizzaFour, but it isnt necessary
const pizzaFour: PizzaFour = new PizzaFour("Mario Special", 15);
const pizzaFive = new PizzaFour("yoshi special", 20);

function addMushroomsToPizzas(pizzas: PizzaFour[]) {
  pizzas.forEach((p) => p.addTopping("mushrooms"));
}

// we can only use this method on a array of pizzas
// addMushroomsToPizzas([pizzaFour, pizzaFive], { title: "heello" });
addMushroomsToPizzas([pizzaFour, pizzaFive]);

console.log(pizzaFive, pizzaFour);
