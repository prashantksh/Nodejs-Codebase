let array1 = ["Pune", "Hubli", "Mysore"];

// array1.push("Jaipur");

// for (const city of array1) {
//   //array1.push("new city");
//   console.log("Before:", city);
// }

let city = array1.shift();
console.log("Shift", city);
// console.log(array1);

array1.unshift("Pune");

for (const city of array1) {
  console.log("After:", city);
}

let a2 = [];
a2[1] = "Mouse";
a2[250] = "Elephant";
a2[300] = "Tiger";

// console.log(a2.length);

for (const el in a2) {
  console.log(a2[el]);
}

console.log(a2);

let car = {
  make: "Suzuki",
  model: "Baleno"
};

for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(car[key]);
  }
}
