// function findOutlier(integers) {
//   const evens = integers.filter((n) => n % 2 === 0);
//   const odds = integers.filter((n) => n % 2 !== 0);

//   return evens.length === 1 ? evens[0] : odds[0];
// }

const odd = (num) => num % 2 !== 0;
const even = (num) => num % 2 === 0;
function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}

console.log(findOutlier([2, -6, 8, -10, -3]), -3);
// console.log(findOutlier([1, 2, 3]), 2);
// console.log(findOutlier([2, 6, 8, 10, 3]), 3);
// console.log(findOutlier([0, 0, 3, 0, 0]), 3);
// console.log(findOutlier([1, 1, 0, 1, 1]), 0);
