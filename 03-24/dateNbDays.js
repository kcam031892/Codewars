function dateNbDays(a0, a, p) {
  const interest = p / 36000;
  console.log(interest);
  const daily = a0 * interest;

  let days = 0;
  for (let i = a0; i <= a; i = i + daily) {
    console.log(i);
    days++;
  }
  console.log(days);
  const date = new Date('2016-01-01');
  const newDate = date.getTime() + days * 24 * 60 * 60 * 1000;
  console.log(new Date(newDate));
  return newDate;
}

console.log(dateNbDays(100, 101, 0.98), '2024-07-03');
// console.log(dateNbDays(4620, 5188, 2), '2021-09-19');
// console.log(dateNbDays(9999, 11427, 6), '2018-03-13');
// console.log(dateNbDays(3525, 4822, 3), '2026-04-18');
// console.log(dateNbDays(5923, 6465, 6), '2017-06-10');
// console.log(dateNbDays(4254, 4761, 8), '2017-05-22');
// console.log(dateNbDays(1244, 2566, 4), '2033-11-04');
// console.log(dateNbDays(6328, 7517, 5), '2019-05-25');
// console.log(dateNbDays(2920, 3834, 2), '2029-06-03');
// console.log(dateNbDays(7792, 8987, 4), '2019-07-09');
