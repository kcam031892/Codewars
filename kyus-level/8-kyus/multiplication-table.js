function multiTable(number) {
  // initialize result
  let result = '';
  // iterate from 1 to 10
  for (let i = 1; i <= 10; i++) {
    // concatinate result to i + number and product of i and number
    result += `${i} * ${number} = ${i * number} ${i === 10 ? '' : '\n'}`;
  }

  // return result
  return result;
}
function multiTable(number) {
  return Array.from({ length }).map((i) => `${i} * ${number} = ${i * number}`);
}

console.log(
  multiTable(5),
  '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
);
// console.log(
//   multiTable(1),
//   '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
// );
