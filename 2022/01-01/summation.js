// var summation = function (num) {
//   const nums = Array.from({ length: num }).map((_, i) => i + 1);
//   return nums.reduce((acc, curr) => acc + curr);
// };

function summation(num) {
  return Array.from({ length: num })
    .map((_, i) => i + 1)
    .reduce((acc, curr) => acc + curr, 0);
}

// Gauss Summation Formula
function summation(num) {
  return (num * (num + 1)) / 2;
}

console.log(summation(1), 1);
console.log(summation(8), 36);
