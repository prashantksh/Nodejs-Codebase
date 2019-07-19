//  Arrays in JS are dynamic collections that can be heterogenous.

let bag = ['banana', 100, new Date(), true];

//  Arrays are iterable:
bag.forEach(element => {
  console.log(element);
});

//  push() to add an element to the end

bag.push('a string');

//  pop() to remove an element from the end

bag.pop();

//  shift() and unshift() are useful but expensive
//  unshift(...) to add element to the beginning
bag.unshift('Unshift used');

//  shift() to remove the first element
bag.shift();

//  filter applies the call back to all elements
bag.filter((element, index) => {
  if (element === 'banana') {
    console.log(`banana exists at index ${index}`);
  }
});

//  Some useful array methods:
console.log('indexOf', bag.indexOf('banana'));

let newBag = bag.map(element => {
  if (typeof element === 'string') {
    return element.toUpperCase();
  } else {
    return element;
  }
});

//  for loop as an iterator
for (const element of newBag) {
  console.log('For loop on newBag', element);
}

//  strings are inherently arrays but treated differently
let message = 'Welcome my friends';

//  message.forEach() is not defined
for (const letter of message) {
  console.log(letter);
}

//  Mutator methods
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.reverse());

console.log(numbers);

numbers.sort();
console.log(numbers);

//  Arrays and objects are always passed as objects.
//  Beware of the mutation
function foo(arr) {
  //  splice is used to remove any number of elements from an index
  //  let's remove 2 elements from 4th index (5th and 6th are removed)

  arr.splice(4, 2);
  console.log(arr);
}

foo(numbers);
//  Now numbers array is mutated
console.log(numbers);

let value = numbers.find(element => {
  //  first element that passes the predicate is returned
  return element > 4;
});
console.log(value); //  6

let greaterThanEight = numbers.some(element => {
  //    whether at least one element in the array passes the test
  return element > 8;
});

console.log(greaterThanEight); //  true

//  arrays can be used to spread out
console.log(...numbers);

//  spreading out can also be applied to create a new array with an old array

let anotherNumbers = [-100, -50, -10, ...numbers, 100, 200, 300];
console.log(anotherNumbers);

//  same technique can be applied to objects
let vehicle = {
  country: 'Germany',
  fuel: 'Petrol',
  name: 'Vehicle'
};

let car = {
  ...vehicle,
  name: 'Audi Q5' //  this overwrites
};

console.log(car);
