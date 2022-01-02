function createPhoneNumber(numbers) {
  return numbers
    .join('')
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})/g, '($1) $2-$3');
}
function createPhoneNumber(numbers) {
  // join the numbers into a string.
  // using regex group every 3 digits
  // then replace it to '(numbers) numbers-numbers' format.
  // return it.
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{3})/g, '($1) $2-$3')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
