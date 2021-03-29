function findOdd(A) {
  const obj = A.reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  return Number(Object.keys(obj).find((key) => obj[key] % 2 === 1));
}
function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
