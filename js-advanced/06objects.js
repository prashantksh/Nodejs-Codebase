//  In JS functions can return objects

let giveMeACar = () => {
  return {
    name: 'Audi Q5',
    fuel: 'Petrol'
  };
};

//  We can instantiate a object by calling this function
let car = giveMeACar();

console.log('car initial', car);

//  JS objects behave like objects in other languages
//  now car and anotherCar both refer to the same object in the memory
let anotherCar = car;

car.fuel = 'Diesel';

console.log('car', car);
console.log('anotherCar', anotherCar);

//
