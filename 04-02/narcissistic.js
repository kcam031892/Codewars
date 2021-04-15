function narcissistic(value) {
  let sum = 0;
  const arrNum = Array.from(String(value), Number);
  for (let i = 0; i < arrNum.length; i++) {
    sum += Math.pow(arrNum[i], arrNum.length);
  }
  return sum === value;
}
function narcissistic(value) {
  return Array.from(String(value), Number).reduce((a, b, i, arr) => a + Math.pow(b, arr.length), 0) === value;
}

console.log(narcissistic(371), true, '371 is narcissistic');
console.log(narcissistic(7), true, '7 is narcissistic');
