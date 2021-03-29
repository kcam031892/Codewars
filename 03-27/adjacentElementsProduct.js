// function adjacentElementsProduct(array) {
//   let result = -Infinity;
//   for (let i = 0; i < array.length - 1; i++) {
//     const product = array[i] * array[i + 1];
//     result = Math.max(result, product);
//   }
//   return result;
// }

const adjacentElementsProduct = (array) => Math.max(...array.map((n, i) => n * array[i - 1]).splice(1));

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
