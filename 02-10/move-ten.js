function moveTen(s) {
  // initialize a variable result
  let result = '';
  // iterate through s
  for (const char of s) {
    // get the character code of the character and store it to charCode
    const charCode = char.charCodeAt(0);
    // add 10 to charCode and store it to newCharCode
    let newCode = charCode + 10;
    // if newCharCode is greater than 122
    if (newCode > 122) {
      // subtract newCode to 122 and add 96
      newCode = newCode - 122 + 96;
    }
    // convert it back to string and push it to the result.
    result += String.fromCharCode(newCode);
  }
  // return result.
  return result;
}
function moveTen(s) {
  // create variable result
  let result = '';
  // iterate each s
  for (const c of s) {
    // get the code of the string
    const charCode = c.charCodeAt(0);
    // add + 10 to it
    // then convert it to a character
    let newCode = charCode + 10;

    if (newCode > 122) {
      newCode = newCode - 122 + 96;
    }
    const newChar = String.fromCharCode(newCode);

    result += newChar;
  }
  console.log('a'.charCodeAt(0));
  return result;
}
function moveTen(s) {
  return s
    .split('')
    .map((c) =>
      c.charCodeAt(0) + 10 > 122 ? String.fromCharCode(c.charCodeAt(0) - 16) : String.fromCharCode(c.charCodeAt(0) + 10)
    )
    .join('');
}
console.log(moveTen('testcase'), 'docdmkco');
// console.log(moveTen('codewars'), 'mynogkbc');
// console.log(moveTen('exampletesthere'), 'ohkwzvodocdrobo');
