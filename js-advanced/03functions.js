//  Let's define a function that takes no arguments and returns nothing
let foo = () => {};

//  foo can be called with several arguments

foo(10, 100, true, { name: 'Sunil' }, 'Hello');

//  This is also possible, but the variable will be undefined

let result = foo();

console.log('Result', result);

//  A function can take another function as an argument

let driver = (value, callback) => {
  console.log(`driver executing with ${value} and ${callback}`);
  if (!callback) {
    console.log('driver is called without the callback');
  } else {
    if (!isNaN(value)) {
      //  value is a number
      callback(++value);
    } else {
      callback(-1);
    }
  }
};

//  Invoking function that takes a callback function. Using lambda expressions:

driver(100, result => {
  console.log('driver returned', result);
});

driver('XYZ', result => {
  console.log('driver returned', result);
});

//  We can call a function without sufficient arguments:
//  Both parameters in the driver function are undefined.
driver();
