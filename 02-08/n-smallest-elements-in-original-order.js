function firstNSmallest(array, n) {
  // get the smallest numbers in array and store it in smallest array
  const sorted = array.slice();
  sorted.sort((a, b) => a - b);
  const smallest = [];
  // const sorted = [...array].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length && i < n; i++) {
    smallest.push(sorted[i]);
  }

  // create a result is empty array
  const result = [];
  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    // create number variable and store element of the array
    const number = array[i];
    // if the number is not in the smallest
    if (smallest.includes(number)) {
      // remove the element in array
      result.push(number);
      smallest.splice(smallest.indexOf(number), 1);
    }
  }

  return result;
  // return the array
}
// function firstNSmallest(array, n) {
//   var a = array.slice();
//   var small = [];
//   var result = [];

//   a.sort((a, b) => a - b);

//   for (var i = 0; i < a.length && i < n; i++) {
//     small.push(a[i]);
//   }
//   console.log(small);

//   for (var i = 0; i < array.length; i++) {
//     if (small.includes(array[i])) {
//       result.push(array[i]);
//       small.splice(small.indexOf(array[i]), 1);
//     }
//   }

//   return result;
// }

console.log(firstNSmallest([1, 2, 3, 4, 5], 3), [1, 2, 3]);
// console.log(firstNSmallest([5, 3, 4, 3, 2, 1, 1], 4), [3, 2, 1, 1]);
// console.log(firstNSmallest([1, 2, 3, 1, 2], 3), [1, 2, 1]);
// console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);
// console.log(firstNSmallest([1, 2, 3, 4, 5], 0), []);
// console.log(firstNSmallest([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
// console.log(firstNSmallest([1, 2, 3, 4, 2], 4), [1, 2, 3, 2]);
// console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 2), [2, 1]);
// console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 3), [2, 1, 2]);
// console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 4), [2, 1, 2, 2]);
