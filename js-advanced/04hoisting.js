//  Hoisting
//  bar() uses a variable value, which is defined after the function
function bar() {
  return value + 10;
}

let value = 0;

//  This call to bar() is not an error due to the concept of hoisting.
//  here value is a variable declared in the global scope.
//  So, it is hoisted (raised to the top). Therefore, bar can use it.
console.log(`bar() returned: ${bar()}`);

//  Observe this phenomenon:
function foo() {
  console.log(x);

  console.log('We are defining x after using it above');

  var x = 100; //  If we use var instead of let, the variable x is hoisted to the top of this (foo function's) scope. But not initialized until this line. Therefore, we see line 16 prints undefined. This is true for all uninitialized objects.

  //    If we use let here, x will not be hoisted, and we get ReferenceError. Therefore, using var is not recommended unless one knows what one does!
}

foo();

function fooEquivalent() {
  let x; //  x is undefined at this stage

  console.log(x);

  console.log('We are defining x after using it above');

  x = 100;
}

fooEquivalent();

function fooWontWork() {
  console.log(x); //  ReferenceError!

  console.log('We are defining x after using it above');

  let x = 100;
}

fooWontWork();
