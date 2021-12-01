// function singleDigit(n) {
//   function computeAdd(num) {
//     if (num < 10) return num;
//     return [...num.toString(2)].reduce((a, c) => a + +c, 0);
//   }
//   const result = computeAdd(n);
//   return result < 10 ? result : computeAdd(result);
// }
function singleDigit(n) {
  if (n < 10) return n;
  const computed = [...n.toString(2)].reduce((a, c) => a + +c, 0);
  return singleDigit(computed);
}

console.log(singleDigit(5), 5);
console.log(singleDigit(999), 8);
console.log(singleDigit(1234444123), 1);
console.log(singleDigit(443566), 2);
console.log(singleDigit(565656565), 3);
console.log(singleDigit(4868872), 8);
console.log(singleDigit(234234235), 2);
console.log(singleDigit(567448), 7);
console.log(singleDigit(1000000000), 3);
