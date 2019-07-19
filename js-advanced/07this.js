//  this refers to the global object.
//  In the browser, it refers to the window object
//  In node runtime, it refers to an empty object

console.log(this);

//  this, inside an object refers to the object

let car = {
  name: 'Audi Q5',
  foo: function() {
    //    this depends on how foo is invoked.
    //  if it is car.foo(), then this is the car
    //  if it is invoked individually, it is undefined.
    console.log(this.name);
  }
};

//  this = car in this case
car.foo();

let bar = car.foo;

//  this is undefined because the method is invoked independently
bar();
