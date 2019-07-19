//  Conditionals are same as in other languages, but with a quirk.
//  First, let's see the similarities:

let age = 10;
let country = 'India';
let interest = 'Chess';
let isFromCity = false;

if ((age == 10 && !isFromCity) || interest == 'Chess' || country != 'France') {
  console.log('This line should appear');
}

//  == is not a strict equality operator
let stringTen = '10';
let numberTen = 10;

if (stringTen == numberTen) {
  console.log('This line will appear too');
}

//  Therefore, we always use === which is a strict equality operator
if (stringTen === numberTen) {
  console.log('This line will not appear');
}

//  The counterpart is !==
if (stringTen !== numberTen) {
  console.log('!== will now appear');
}

//  != is not recommended
if (stringTen != numberTen) {
  console.log('!= will not appear');
}

//  Truthyness in JavaScript

let valueZero = 0;
let emptyObject = {};
let valueNull = null;
let valueUndefined = undefined;
let valueNonZeroNumber = -1;
let emptyString = '';
let whitespaceString = ' ';

//  Number zero is falsy
if (valueZero) {
  console.log('This line will not appear');
}

//  Empty object is truthy
if (emptyObject) {
  console.log('Empty object is truthy');
}

//  null is falsy
if (valueNull) {
  console.log('This line will not appear');
}

//  undefined is falsy
if (valueUndefined) {
  console.log('This line will not appear');
}

//  Non zero number is truthy
if (valueNonZeroNumber) {
  console.log('Non zero number is truthy');
}

//  Empty string is falsy
if (emptyString) {
  console.log('This line will not appear');
}

//  Whitespace string is falsy
if (whitespaceString) {
  console.log('Whitespace string is truthy');
}

//  This can be useful in many situations:

let car = {
  name: 'Audi Q5',
  owner: {
    name: 'Rajeev',
    city: 'Bengaluru',
    email: {
      personal: 'xxxxxxxxx@domain.com',
      office: 'xxxxxxxxx@domain.com'
    }
  }
};

if (car) {
  console.log(
    'Car is neither null or undefined, so we can access properties of this object'
  );
  if (car.owner) {
    console.log('Owner property exists');
    if (car.owner.email) {
      console.log('We can access the email property of the owner');
      console.log(car.owner.email);
    }
  }
}

//  console.log(x.y.z); //  If the object is either null or undefined and we try to access its properties, we get a ReferenceError

//  Truthyness of the inner property cannot be checked directly.
//  This if block produces ReferenceError as it tries to access x which is undefined.
// if (x.y.z) {
//   console.log('This line will not appear');
// }
