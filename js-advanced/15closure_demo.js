function foo() {
  // let y = 0;

  return function() {
    return 0;
  };
}

let bar = foo;
let jot = bar();
let dig = jot();

//console.log(typeof bar);
console.log(dig);
