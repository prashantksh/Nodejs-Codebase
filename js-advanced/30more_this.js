let op1 = { name: "Suhas" };
let op2 = { name: "Kiran" };

let foo = function() {
  console.log(this.name);
};

// foo();

op1.foo = foo;
op2.foo = foo;

op1.foo();
op2.foo();
