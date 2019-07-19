//  JS is not a pure object oriented language.
//  In the old JS, before ES6, if we have prototypal inheritance.

let vehicle = {
  country: 'Germany',
  drive: function() {
    console.log('Outputting this', this);
    console.log(`Vehicle driving in ${this.country}`);
  }
};

let car = {
  name: 'Audi Q5',
  fuel: 'Petrol',
  country: 'India'
};

//  Every object has __proto__ property, which is by default set to {}
console.log(car.__proto__);

//  Let car inherit from vehicle
car.__proto__ = vehicle;

//  now drive() is available through car
//  Remember, this is bound to the caller
car.drive(); //  this = car
vehicle.drive(); //  this = vehicle
