
function divisibleBy(numbers, divisor) {
  // initialize a result as empty array
  const result = [];
  // iterate through number
  for(let i = 0 ;i < numbers.length; i++) {
    // if element mod divisor is equal to zero
    if(numbers[i] % divisor === 0) {
      // add element  to result.
      result.push(numbers[i]);

    }

  }
  // return the result.
  return result;
}
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1, 3, 5], 2), []);
