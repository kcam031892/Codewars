function snail(array) {
  const result = [];
  while (array.length > 0) {
    result.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    result.push(...(array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
}
function snail(array) {
  const result = [];
  while (array.length > 0) {
    result.push(...array.shift());
    array.map((c) => result.push(c.pop()));
    array.reverse().map((c) => c.reverse());
    console.log(array);
  }
  console.log(result);
  return result;
}
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ])[(1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13)]
);
