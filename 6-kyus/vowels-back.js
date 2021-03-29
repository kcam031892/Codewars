function vowelBack(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[aiou]/.test(char)) {
      if (char === 'a') {
        result.push(122);
      } else {
        result.push(char.charCodeAt(0) - 4);
      }
    } else if (/[co]/.test(char)) {
      result.push(char.charCodeAt(0) - 1);
    } else if (/[de]/.test(char)) {
      result.push(char.charCodeAt(0) - 3);
    } else {
      result.push(char.charCodeAt(0));
    }
  }
  return result.map((c) => String.fromCharCode(c));
}

console.log(vowelBack('testcase'), 'tabtbvba');
// console.log(vowelBack('codewars'), 'bnaafvab');
// console.log(vowelBack('exampletesthere'), 'agvvyuatabtqaaa');
