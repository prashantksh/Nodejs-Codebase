function coffeeVendor() {
  let nCups = 0;
  return function() {
    nCups++; // nCups is accessible to this inner function
    return nCups;
  };
}

let myCoffeeVendor = coffeeVendor();

console.log(myCoffeeVendor()); // 1
console.log(myCoffeeVendor()); // 2
console.log(myCoffeeVendor()); // 3
