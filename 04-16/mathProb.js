Math.round = function (number) {
  if (number % 1 === 0) return number;
  const whole = Number(String(number).split('.')[0]);
  const decimal = Number(String(number).split('.')[1][0]) >= 5 ? 1 : 0;
  return whole + decimal;
};

Math.ceil = function (number) {
  if (number % 1 === 0) return number;
  const whole = Number(String(number).split('.')[0]);
  return whole + 1;
};

Math.floor = function (number) {
  if (number % 1 === 0) return number;
  const whole = Number(String(number).split('.')[0]);
  return whole;
};
console.log(Math.round(7.12), 0, 'Math.round(0.4)');
console.log(Math.round(0.5), 1, 'Math.round(0.5)');

// console.log(Math.ceil(3), 1, 'Math.ceil(0.4)');
// console.log(Math.ceil(3.5), 1, 'Math.ceil(0.5)');

// console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
// console.log(Math.floor(2.5), 0, 'Math.floor(0.5)');
