console.log("Before");
setTimeout(function() {
  console.log("Timeout output");
}, 0);
//A long synchronous process
console.log("After");
