function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((n) => Number(n) ** 2)
    .join('');
}
function squareDigits(num) {
  // convert num to string array and store it to arrNum.
  const arrNum = [...String(num)];
  // initialize a result as empty array.
  const result = [];
  // iterate through arrNum.
  for (let i = 0; i < arrNum.length; i++) {
    // squared the element.
    const el = arrNum[i] ** 2;
    // push to result.
    result.push(el);
  }
  // join the result, convert back to number and  return it.
  return Number(result.join(''));
}

console.log(squareDigits(9119), 811181);

// 000000000000000000000000000110
// 000000000000000000000000011000
