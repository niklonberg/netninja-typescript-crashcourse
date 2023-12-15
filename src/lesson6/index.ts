/* functions */

//below gives an error, because we arent specifying the types for a, b
/* function addTwoNmbrs(a, b) {
  return a + b;
} */

//in javascript, we could pass in whatever we want, and we would only get errors & bugs at runtime
//addTwoNmbrs('hello', false)

//enter typescript
function addTwoNmbrs(a: number, b: number): number {
  return a + b;
}

const subTwoNmbrs = (a: number, b: number): number => {
  //return a - b; if return is missing notice /\ the error above
  return a - b;
};

//the powerful thing here is that typescript ensures we input the correct types of data
//that the function expects
//addTwoNmbrs(5, "hello");

function addAllNmbers(items: number[]) {
  const total = items.reduce((acc, cur) => acc + cur, 0);

  console.log(total);
}

addAllNmbers([1, 4, 5]);

//when we dont specify a return value in a function, it will implicitly return void
//the return type is again inferred

//we can be explicit though
/*                                notice \/ below
function addAllNmbers(items: number[]): void {
  const total = items.reduce((acc, cur) => acc + cur, 0);

  console.log(total);
  //if we add return, we would have to either remove : void, or change it the type that is returned
} */

/* return type inference */
function formatGreeting(name: string, greeting: string) {
  return `${greeting} ${name}`;
}

//below, the type of result2 gets inferred implicitly a string
const result2 = formatGreeting("mario", "hello");
