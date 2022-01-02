// function divisors(integer) {
//   let results = [];
//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       results.push(i);
//     }
//   }
//   return results.length > 0 ? results : integer + ' is prime';
// }
function divisors(integer) {
  const divs = Array.from({ length: integer - 1 })
    .map((_, i) => i + 1)
    .slice(1)
    .filter((a) => integer % a === 0);
  return divs.length > 0 ? divs : integer + ' is prime';
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), '13 is prime');
