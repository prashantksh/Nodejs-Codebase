// const fetch = require("node-fetch");

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     console.log("response", await response.text());
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// console.log("before");
// getData("http://app1.maasthi.com");
// console.log("after");

function doSomething(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
}
