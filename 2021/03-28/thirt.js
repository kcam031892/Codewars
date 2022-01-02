function thirt(n) {
  const numArr = Array.from(String(n), Number);
  const temp = [];
  for (let i = 0; i < numArr.length; i++) {
    const seq = Math.pow(10, i) % 13;

    const num = numArr[numArr.length - 1 - i];
    temp.push(num * seq);
  }

  return temp.reduce((a, b) => a + b);
}

console.log(thirt(321), 79);
console.log(thirt(85299258), 31);
// console.log(thirt(5634), 57);
// console.log(thirt(1111111111), 71);
// console.log(thirt(987654321), 30);
