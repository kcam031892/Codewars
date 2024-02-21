function countPositivesSumNegatives(input) {
  // your code here
  return !input || input.length === 0
    ? []
    : input.reduce(
        (a, b) => {
          if (b > 0) {
            a[0]++;
          }
          if (b < 0) {
            a[1] += b;
          }
          return a;
        },
        [0, 0]
      );
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);
