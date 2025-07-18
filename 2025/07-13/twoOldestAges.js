// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const sortedAges = ages.sort((a, b) => b - a);
  return sortedAges.slice(2);
}

let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);

console.log(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
console.log(results1[1], 87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');

console.log(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
console.log(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
