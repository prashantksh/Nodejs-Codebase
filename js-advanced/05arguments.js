//  Default parameters can be defined.

let foo = (x = 100, y = 200) => {
  console.log(`x: ${x} and y: ${y}`);
};

foo();

foo('Hello');

foo(200, true);

//  In the old JS:
function fooOld(x, y) {
  if (!x) {
    x = 100;
  }

  if (!y) {
    y = 200;
  }

  console.log(`Old way >> x: ${x} and y: ${y}`);
}

fooOld();

fooOld('Hello');

fooOld(200, true);

//  In the old JS:
function fooOldUsingOr(x, y) {
  x = x || 100;
  y = y || 200;

  console.log(`Old way using OR >> x: ${x} and y: ${y}`);
}

fooOldUsingOr();

fooOldUsingOr('Hello');

fooOldUsingOr(200, true);

//  There is an implicit arguments array in every function:
//  This behaviour defers for function defined through lambda expression.

function barRegular() {
  //  arguments is an array
  for (const key in arguments) {
    if (arguments.hasOwnProperty(key)) {
      console.log(arguments[key]);
    }
  }
}

barRegular(1, true, { name: 'Madhu' }, new Date());

let barLambda = () => {
  //argument is an object here!
  console.log(typeof arguments);
};

barLambda(1, true, { name: 'Madhu' }, new Date());

//  rest parameters are used if we want to accept arbitrary number of arguments

function fooRest(...params) {
  //  params now becomes an array
  params.forEach(p => {
    console.log('parameter', p);
  });
}

fooRest(1, 3.1234, true, new Date(), {});
