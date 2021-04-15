const seven = (m) => {
  let times = 0;
  let result = 0;
  let number = String(m);
  while (number.length > 2) {
    times++;
    let firstNumber = Number(number.slice(-1));
    const remaining = Number(number.slice(0, number.length - 1));
    result = remaining - 2 * firstNumber;
    number = String(result);
  }
  return [result, times];
};

function getLastDigitAndRemaining(n) {
  const nums = n
    .toString()
    .split('')
    .map((n) => +n);
  return [+nums.slice(0, nums.length - 1).join(''), nums[nums.length - 1]];
}

console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
console.log(seven(371), [35, 1]);
console.log(seven(483), [42, 1]);
