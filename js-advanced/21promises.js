let promise = new Promise((resolve, reject) => {
  let randomGenerator = () => Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randomGenerator() % 2 === 0) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  }, 5000);
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finishing");
  });

console.log("Hello");
