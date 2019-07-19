new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then(result => {
    console.log("Result", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        result++;
        resolve(result);
      }, 1000);
    });
  })
  .then(result => {
    console.log("Result", result);
    return new Promise((resolve, reject) => {
      reject(new Error("Error occured!"));
      setTimeout(() => {
        result++;
        resolve(result);
      }, 1000);
    });
  })
  .then(result => {
    console.log("Result", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        result++;
        resolve(result);
      }, 1000);
    });
  })
  .then(result => {
    console.log("Result", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        result++;
        resolve(result);
      }, 1000);
    });
  })
  .catch(error => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Finished!");
  });
