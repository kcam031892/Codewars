function inverseSlice(items, a, b) {
  // copy items in arr.
  let arr = [...items];
  arr = arr.slice(0, a).concat(arr.slice(b));
  // return items.
  return arr;
}
// function inverseSlice(items, a, b) {
//   //  remove items in array from a to b
//   items.splice(a, b - a);

//   // return items.
//   return items;
// }
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
console.log(
  inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13),
  ['Intuition', 'is', 'a', 'poor', 'guide']
);
