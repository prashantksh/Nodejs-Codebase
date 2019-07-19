//  Classes in JS are introduced in ES6 or ES2015
class Vehicle {
  constructor(name) {
    console.log('Vehicle constructor called');
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is driving...`);
  }

  foo() {
    console.log('Vehicle foo');
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
    this.state = {
      owner: 'Ramesh',
      reg: 'XXXX',
      yom: 2018
    };
  }

  foo() {
    super.foo();
    console.log('Car foo');
  }

  //    Getter is internally a method, but externally a property
  get info() {
    return `Owner: ${this.state.owner}, registration: ${
      this.state.reg
    }, year of manufacture: ${this.state.yom}`;
  }

  //    Setter is also a method internally and a property outside
  //    Primarily used to hide implementation and provide validation
  set owner(name) {
    if (name.length > 0) {
      this.state.owner = name;
    }
  }

  static tellDate() {
    console.log(new Date());
  }
}

let car = new Car('Audi');
car.foo();
car.drive(); //  drive() comes from the parent vehicle. 'this' in drive is car.

Car.tellDate(); //  This is a static method. Not all ES6 implementations support this.

console.log(car.info);

car.owner = 'Vijay';
car.owner = ''; //  Has no effect because of validation

console.log(car.info);

car.setOwnerManually('Mahesh');
console.log(car.info);
