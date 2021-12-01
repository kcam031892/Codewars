// function prefill(n, v) {
//   const num = Number(n);
//   if (Number.isNaN(num)) {
//     throw new TypeError(`${n} is invalid`);
//   }
//   if(typeof n === 'boolean') throw new Error(`${n} is invalid`)
//   if(n === Infinity || n === -Infinity) throw new RangeError(`${n} is invalid`)
//   if(num < 0) throw new Error(`${n} is invalid`);
//   if(num % 1 !== 0) throw new Error(`${n} is invalid`);
//   if (num === 0) return [];

//   return Array.from({ length: num }).fill(v);
// }

function prefill(n, v) {
  if (Number.parseInt(n) !== Math.abs(n)) throw new Error(`${n} is invalid`);
  return Array.from({ length: n }).fill(v);
}

console.log(prefill(2, 2), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [
  ['2d', '2d'],
  ['2d', '2d'],
  ['2d', '2d'],
]);

// console.log(prefill("xyz", 1));
