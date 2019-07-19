const fs = require('fs');
const eol = require('os').EOL;

function create(car) {
  let line = `${car.id};${car.name};${car.make};${car.yom};${car.fuel}${eol}`;
  fs.appendFile('cars.db', line, () => {
    util.log('car added');
  });
}

function get() {
  return new Promise((resolve, reject) => {
    fs.readFile('cars.db', 'utf8', (err, data) => {
      if (err) {
        console.log('Error', err);
        reject(err);
      } else {
        let lines = data.split(eol);

        let cars = [];
        for (const line of lines) {
          if (line.length > 0) {
            let car = {};
            let temp = line.split(';');
            car.id = temp[0];
            car.name = temp[1];
            car.make = temp[2];
            car.yom = temp[3];
            car.fuel = temp[4];

            cars.push(car);
          }
        }
        resolve(cars);
      }
    });
  });
}

module.exports = {
  create,
  get
};
