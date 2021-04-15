function uniqueInOrder(iterable) {
  const result = [];
  for (let i = 0; i < iterable.length; i++) {
    console.log(result[result.length - 1]);
    if (result[result.length - 1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }
  return result;
}
function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => iterable[i - 1] !== a);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
