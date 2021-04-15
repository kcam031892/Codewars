function toBinary(n) {
  return Number(n.toString(2));
}
function toBinary(n) {
  count = 0;
  bin = 0;
  while (n !== 0) {
    bin += (n % 2) * 10 ** count;
    console.log(bin);
    n = Math.floor(n / 2);
    console.log(n);
    count += 1;
    console.log(count);
  }
  return bin;
}

console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);
