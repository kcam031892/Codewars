function powersOfTwo(n) {
  return Array.from({ length: n + 1 }).map((_, i) => Math.pow(2, i));
}

function powersOfTwo(n) {
  const results = [];
  for (let i = 0; i <= n; ++i) {
    results.push(2 ** i);
  }
  return results;
}

function powersOfTwo(n) {
  return Array.from({ length: n + 1 })
    .fill(2)
    .map((v, i) => v ** i);
}

console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
