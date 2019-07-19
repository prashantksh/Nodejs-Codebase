const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 2000);
});

//Promise.all([p1, p2, p3, p4]).then(result => console.log(result));

Promise.race([p1, p2, p3, p4]).then(result => console.log(result));
