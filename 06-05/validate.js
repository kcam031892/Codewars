function validate(n) {
  const arrNum = [...String(n)];
  const arr = [];
  for (let i = arrNum.length - 1; i >= 0; i -= 2) {
    arr.unshift(+arrNum[i]);
    let temp = +arrNum[i - 1] + +arrNum[i - 1];
    if (temp >= 10) {
      temp -= 9;
    }
    arr.unshift(temp);
  }
  return arr.filter(Boolean).reduce((a, c) => a + c, 0) % 10 === 0;
}
function validate(n) {
  return [...String(n)].reverse().map(Number).reduce((a, c, i) => {
    if (i & 1) {
        c = c + c;
      }
      if (c >= 10) c = c - 9;
      return a + c;
    }, 0) % 10 === 0;
  
}

console.log(validate(123), false);
// console.log(validate(1), false);
// console.log(validate(2121), true);
// console.log(validate(1230), true);
