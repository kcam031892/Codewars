function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
