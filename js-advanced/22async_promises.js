function f3(params) {
  console.log("Inside f3");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise settlement from f3");
      resolve(params);
    }, 2000);
  });
}

function f2(params) {
  console.log("Inside f2");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise settlement from f2");
      resolve(params);
    }, 2000);
  });
}

function f1(params) {
  console.log("Inside f1");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise settlement from f1");
      resolve(params);
    }, 2000);
  });
}

// Attempting with Promises

f1("Great")
  .then(r => f2(r))
  .then(r => f3(r))
  .then(r => console.log(r));
