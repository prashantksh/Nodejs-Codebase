//  Constructor functions are regular functions but they are invoked with 'new' operator.
//  We capitalize them
//  They implicitly return this

function Car(name, fuel) {
  //  in the beginning 'this' is empty
  //  this = {};
  this.name = name;
  this.fuel = fuel;
  //    return this; // implicit when used with 'new' operator
}

let car = new Car('Audi Q5', 'Petrol');

console.log(car);
