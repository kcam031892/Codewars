function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  for (let i = a; i <= b; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

console.log(getSum(0, -1), -1);
// console.log(getSum(0, 1), 1);
