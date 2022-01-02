var isPP = function (n) {
  return Math.sqrt(n) % 1 === 0 ? [Math.sqrt(n), 2] : null;
};

console.log(isPP(4), [2, 2], '4 = 2^2');
console.log(isPP(9), [3, 2], '9 = 3^2');
console.log(isPP(5), null, "5 isn't a perfect number");
