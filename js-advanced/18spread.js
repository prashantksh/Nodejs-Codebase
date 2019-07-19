function getTotal(...numbers) {
  let total = 0;

  for (let n of numbers) {
    total += n;
  }

  return total;
}

console.log(getTotal(1, 2, 3, 4, 5, 6));

let nums = [1, 24, 54, 34, 21];

console.log(Math.max(...nums));
