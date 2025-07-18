// var capitals = function (word) {
//   // Write your code here
//   return word.split('').reduce((acc, curr, i) => {
//     const code = curr.charCodeAt(0);
//     if (code < 97) {
//       acc.push(i);
//     }
//     return acc;
//   }, []);
// };

var capitals = function (word) {
  // Write your code here
  return word.split('').reduce((acc, curr, i) => {
    if (curr === curr.toUpperCase()) {
      acc.push(i);
    }
    return acc;
  }, []);
};

assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6], 'Input: "CodEWaRs"');
assert.deepEqual(capitals('aAbB'), [1, 3], 'Input: "aAbB"');
assert.deepEqual(capitals('AAA'), [0, 1, 2], 'Input: "AAA"');
assert.deepEqual(capitals(''), [], 'Input: ""');
