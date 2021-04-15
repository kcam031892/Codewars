function multiplicationTable(size) {
  let result = [];
  for (let i = 1; i <= size; i++) {
    const arr = [];

    for (let j = 1; j <= size; j++) {
      arr.push(j * i);
    }
    result.push(arr);
  }
  return result;
}
function multiplicationTable(size) {
  return Array.from({ length: size }).map((_, i) => Array.from({ length: size }).map((_, j) => (i + 1) * (j + 1)));
}
// function multiplicationTable(size) {
//   return Array.from({ length: size })
//     .map((_, i) => i)
//     .reduce();
// }
console.log(multiplicationTable(3));
