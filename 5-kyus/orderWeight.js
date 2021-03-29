function orderWeight(strng) {
  const arr = [];
  const stringArr = strng.split(' ');
  for (let nums of stringArr) {
    const num = nums.split('');
    let sum = 0;
    for (let digit of num) {
      sum += +digit;
    }
    arr.push([nums, sum]);
  }
  console.log(arr);

  return arr
    .sort(([_a, a], [_b, b]) => {
      if (a === b) {
        return _a.localeCompare(_b);
      }
      return a - b;
    })
    .map(([a, b]) => a)
    .join(' ');
}
function orderWeight(strng) {
  return strng
    .split(' ')
    .reduce((a, b) => {
      const sum = b.split('').reduce((a, b) => a + +b, 0);
      a.push([b, sum]);
      return a;
    }, [])
    .sort(([_a, a], [_b, b]) => (a === b ? _a.localeCompare(_b) : a - b))
    .map(([a, b]) => a)
    .join(' ');
}
function orderWeight(strng) {
  const sum = (str) => str.split('').reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);

    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
}

console.log(
  orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
  '11 11 2000 10003 22 123 1234000 44444444 9999'
);
// console.log(
//   orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
//   '11 11 2000 10003 22 123 1234000 44444444 9999'
// );
