const pi = 3.14159265359;

const foo = () => {
  console.log('This is foo');
};

let car = {
  name: 'BMW',
  fuel: 'Petrol'
};

// All the three declarations are private to this module (file). In order to make these visible outside, we need to export them.

module.exports = {
  pi,
  car,
  bar: foo
};
