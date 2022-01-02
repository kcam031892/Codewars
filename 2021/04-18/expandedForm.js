function expandedForm(num) {
  let result = [];
  let numbers = String(num).split('');
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i].padEnd(numbers.length - i, '0'));
  }
  return result.filter((c) => c > 0).join(' + ');
}
function expandedForm(num) {
  return String(num)
    .split('')
    .reduce((a, b, i, arr) => a.concat(b.padEnd(arr.length - i, '0')), [])
    .filter((c) => c > 0)
    .join(' + ');
}

// console.log(expandedForm(12), '10 + 2');
// console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
