function trouble(x, t) {
  // initialize result
  const result = [];
  // iterate through x
  for (let i = 0; i < x.length; i++) {
    // iterate through the start of x
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  // return result
  return x;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
console.log(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
console.log(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
console.log(trouble([2, 6, 2], 8), [2, 2]);
