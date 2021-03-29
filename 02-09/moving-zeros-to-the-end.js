var moveZeros = function (arr) {
  // create variable result
  let result = [];
  // iterate through array
  // create variable counter that will count how many zeros
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    // if element is not equal to zero
    if (arr[i] !== 0) {
      // push it to result
      result.push(arr[i]);
    } else {
      // increment counter
      counter++;
    }
  }

  // iterate counter
  for (let i = 0; i < counter; i++) {
    // add zero to result
    result.push(0);
  }

  return result;
  // return arr
};

var moveZeros = function (arr) {
  return arr.filter((n) => n !== 0).concat(arr.filter((n) => n === 0));
};

console.log(moveZeros(['a', 0, 'b', 'c', 'd', 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));
