function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

console.log(isLeapYear(2020), true, 'Incorrect answer for year = 2020');
console.log(isLeapYear(2000), true, 'Incorrect answer for year = 2000');
console.log(isLeapYear(2015), false, 'Incorrect answer for year = 2015');
console.log(isLeapYear(2100), false, 'Incorrect answer for year = 2100');
