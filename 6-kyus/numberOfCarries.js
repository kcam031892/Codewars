function numberOfCarries(a, b) {
  const arr1 = a.toString().split('');
  const arr2 = b.toString().split('');
  while (arr1.length < arr2.length) arr1.unshift(0);
  while (arr2.length < arr1.length) arr2.unshift(0);

  let result = 0;
  let carry = 0;
  for (let i = arr1.length - 1; i >= 0; i--) {
    const num1 = +arr1[i];
    const num2 = +arr2[i];

    let total = num1 + num2 + carry;

    if (total > 9) {
      result++;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  return result;
}
// console.log(numberOfCarries(543, 3456), 0);

// console.log(numberOfCarries(1927, 6426), 2);

console.log(numberOfCarries(9999, 1), 4);

// console.log(numberOfCarries(1234, 5678), 2);
