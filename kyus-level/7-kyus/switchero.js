// switch the position of a and b
function switcheroo(x) {
  // initialize variable result
  const result = [];
  // convert string to array
  const arrOfString = x.split('');
  // iterate through characters
  for (let i = 0; i < arrOfString.length; i++) {
    const char = arrOfString[i];
    // if character is a change it to b and push it to result
    if (char === 'a') {
      result.push('b');
      // else if character is b change it to a and push it to result
    } else if (char === 'b') {
      result.push('a');
      // otherwise push it to result
    } else {
      result.push(char);
    }
  }

  // convert result to string
  // return result
  return result.join('');
}
// switch the position of a and b
function switcheroo(x) {
  return x.split('').map((a) => a === 'a' ? 'b' : a === 'b' ? 'a' : a).join('');
}

function switcheroo(x) {
  return x.replace(/[ab]/g, (v) => v === 'a' ? 'b' : 'a');
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
