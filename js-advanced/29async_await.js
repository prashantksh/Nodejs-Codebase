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

// Attempting with async and await

async function drive() {
  let r1 = await f1("great");
  let r2 = await f2(r1);
  let r3 = await f3(r2);
  console.log(r3);
}

drive();
