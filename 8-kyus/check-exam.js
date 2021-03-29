function checkExam(array1, array2) {
  // initialize result = 0
  let result = 0;
  // iterate array1
  for (let i = 0; i < array1.length; i++) {
    // if array1 element is equal to array2 element
    if (array1[i] === array2[i]) {
      // add result + 4
      result += 4;
    } else if (array2[i] !== '') {
      // otherwise
      // result -1
      result--;
    }
  }
  // return result
  return result > 0 ? result : 0;
}
function checkExam(array1, array2) {
  const reducer = (total, c, i) => {
    if (c === array2[i]) {
      total += 4;
    } else if (array2[i] !== '') {
      total--;
    }
    return total;
  };
  const result = array1.reduce(reducer, 0);
  return result > 0 ? result : 0;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
