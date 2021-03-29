function reverseNumber(n) {
  let arr = n.toString().split('');
  const sign = /\D/.test(arr[0]) ? arr.shift() : '0';
  arr = arr.reverse();
  arr.unshift(sign);

  return parseInt(arr.join(''));
}
function reverseNumber(n) {
  const isNegative = n < 0;
  const reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  const number = Number(reverseAsString);
  return isNegative ? -number : number;
}

console.log(reverseNumber(123), 321);
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved');
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"');
// console.log(reverseNumber(4321234), 4321234);
// console.log(reverseNumber(5), 5);
// console.log(reverseNumber(0), 0);
// console.log(reverseNumber(98989898), 89898989);
