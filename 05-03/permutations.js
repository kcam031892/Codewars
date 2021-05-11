function permutations(string) {
  const result = new Set();
  const seen = {};
  if (string.length < 1) return [string];
  for (let i = 0; i < string.length; i++) {
    var firstChar = string[i];
    if (!seen[firstChar]) {
      seen[firstChar] = ++seen[firstChar] || 0;
      const otherChar = string.substring(0, i) + string.substring(i + 1);
      const arr = permutations(otherChar);

      for (const c of arr) {
        result.add(firstChar + c);
      }
    }
  }
  return [...result];
}
function permutations(string) {
  const result = new Set();
  const seen = {};
  if (string.length < 1) return [string];
  for (let i = 0; i < string.length; i++) {
    var firstChar = string[i];
    if (!seen[firstChar]) {
      seen[firstChar] = ++seen[firstChar] || 0;
      const otherChar = string.substring(0, i) + string.substring(i + 1);

      const arr = permutations(otherChar);

      for (const c of arr) {
        result.add(firstChar + c);
      }
    }
  }
  return [...result];
}
// function permutations(string) {
//   return string.length <= 1
//     ? [string]
//     : Array.from(
//         new Set(
//           string
//             .split('')
//             .map((char, i) => permutations(string.substring(0, i) + string.substring(i + 1)).map((p) => p + char))
//             .reduce((r, x) => r.concat(x), [])
//         )
//       );
// }

// console.log(permutations('a'), ['a']);
// console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
// console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());

console.log(permutations('aabb'));

let str = 'aabb';
console.log(str.substring(0, 0) + str.substring(1));
console.log(str.substring(0, 1) + str.substring(2));
console.log(str.substring(0, 2) + str.substring(3));
console.log(str.substring(0, 3) + str.substring(4));
