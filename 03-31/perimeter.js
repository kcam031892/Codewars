function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}
function perimeter(n) {
  const fibSeq = fib(n + 1);
  console.log(fibSeq);
  return fibSeq.reduce((a, b) => a + b) * 4;
}

// console.log(fib(10));
console.log(perimeter(0), 4);
console.log(perimeter(5), 80);
