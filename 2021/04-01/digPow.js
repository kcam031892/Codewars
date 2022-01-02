function digPow(n, p) {
  const nums = Array.from(String(n), Number);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i] ** (i + p);
  }

  total = total / n;

  return total % 1 === 0 ? total : -1;
}
function digPow(n, p) {
  const t = String(n)
    .split('')
    .reduce((a, b, i) => a + Math.pow(b, i + p), 0);
  return t % n ? -1 : t / n;
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
console.log(digPow(46288, 5), 51);
