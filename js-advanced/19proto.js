let animal = {
  colour: "no colour",
  bite: false,
  bark: false,
  honk: () => {
    console.log("Animal honking");
  }
};

let dog = {
  growl: true,
  honk: () => console.log("Dog honking")
};

dog.__proto__ = animal;

console.log(dog.bite);
