function solution(roman) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const r = roman.split('').map((r) => {
    return symbol[r];
  });
  let total = 0;
  for (let i = 0; i < r.length; i++) {
    if (r[i] < r[i + 1]) {
      total -= 1;
    } else {
      total += r[i];
    }
  }
  return total;
}
function solution(roman) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return roman
    .split('')
    .map((r) => {
      return symbol[r];
    })
    .reduce((total, num, index, arr) => total + (arr[index + 1] > num ? -num : num), 0);
}
//  total + (arr[index + 1] > num ? -num : num);
// console.log(solution('XXI'), 21);
// console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);
