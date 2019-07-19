function f3(params, cb) {
  console.log("Inside f3");
  setTimeout(() => {
    console.log("Callback invocation from f3");
    cb(params);
  }, 2000);
}

function f2(params, cb) {
  console.log("Inside f2");
  setTimeout(() => {
    console.log("Callback invocation from f2");
    cb(params);
  }, 2000);
}

function f1(params, cb) {
  console.log("Inside f1");
  setTimeout(() => {
    console.log("Callback invocation from f1");
    cb(params);
  }, 2000);
}

// Old-school
f1("great", p => {
  f2(p, q => {
    f3(q, r => {
      console.log("Final block in caller");
      console.log(r);
    });
  });
});

// Attempting with named functions
function b3(result) {
  console.log(result);
}

function b2(result) {
  f3(result, b3);
}

function b1(result) {
  f2(result, b2);
}

f1("great", b1);
