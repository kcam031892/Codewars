function solution(str) {
  // initialize result to array
  const result = [];
  // convert string to array
  const strArr = str.split('');
  // iterate array in reverse order
  for (let i = strArr.length - 1; i >= 0; i--) {
    // push element to result
    result.push(strArr[i]);
  }

  // join the result and return it
  return result.join('');
}

function solution(s) {
  return s.split('').reverse().join('');
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');
