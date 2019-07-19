//  JavaScript has data types. Every object created in the JS has a type associated with it.
//  But the datatype of the object can be changed at the runtime. This makes JS a dynamic language unlike Java or C#, which are static and type-safe languages.

//  There are seven data-types in JS

//  Numbers: internally represented as double-precision floating point numbers

let integer = 100; //  Integer
let float = 3.1415;

console.log(
  '1. Both integers and floats are of number type : ',
  typeof integer,
  typeof float
);

//  Dividing by zero is not an exception, but a special value Infinity

console.log('2. Dividing a positive number by zero is: ', integer / 0); //  Infinity
console.log('3. Dividing a negative number by zero is: ', -integer / 0); // -Infinity (negative infinity)

//  Applying numeric operations to different types may not succeed

console.log(
  '4. Mathematical operations between numbers and other types do not cause error, but a special value: ',
  'Number' - 10
); //  Produces a special value NaN (for Not a Number)

//  But, consider:

console.log(
  '5. Applying + for number and string results into string concatination: ',
  'Number' + integer,
  integer + 'Number'
);

console.log(
  '6. Types of NaN, Infinity, and -Infinity are: ',
  typeof NaN,
  typeof Infinity,
  typeof -Infinity
); //  These are all of number type!

//  Exercise do some math operations involving NaN and Infinity
console.log(`7. Modern string interpolation ${integer - 1}`);

console.log(
  `8. No character type in JS. A single character is still a ${typeof 'c'}`
);

console.log(
  `9. Boolean is either ${true} or ${false} or an expression that should evaluate to ${integer <
    1000} or ${integer >= 500}`
);

console.log(`10. ${null} is a special value which is of type: ${typeof null}`);

console.log(
  `11. ${undefined} is a special value which is of type: ${typeof undefined}`
);

//  We can create objects with object literal syntax:
let car = {
  name: 'Audi Q5',
  fuel: 'Petrol'
};

console.log('12. A car created with object literal syntax: ', car);

console.log(`13. Type of this car is ${typeof car}`);

//  Functions can be created in many ways.
//  1. named functions:

function foo(x, y) {
  return `You have passed arguments: x: ${x} and y: ${y}`;
}

console.log(`14. Function foo is of type ${typeof foo}`);

console.log(`15. When we call foo, we get: ${foo(1.5, 'and a string')}`);

//  2.  assigning an anonymous (verbose or old-style) function  to a variable
let bar = function() {
  return 'bar';
};

//  3.  assigning an anonymous function (modern, lambda expression) to a variable
let doSomething = (x, y) => {
  return `lambda expression takes ${x} and ${y}`;
};

console.log(
  `16. Executing function variable: ${bar()} and lambda: ${doSomething(
    'my',
    'lambda'
  )}`
);
