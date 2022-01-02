function LCS(x, y) {
  const strArray1 = x.split('');
  const strArray2 = y.split('');
  const result = [];
  for (let i = 0; i < strArray2.length; i++) {
    const char = strArray2[i];
    if (strArray1.includes(char)) {
      const indexToRemove = strArray1.indexOf(char);
      strArray1.splice(0, indexToRemove + 1);
      result.push(char);
    }
  }
  return result.join('');
}
function LCS(x, y) {
  const strArray1 = x.split('');
  const strArray2 = y.split('');
  return strArray2
    .filter((c) => {
      if (strArray1.includes(c)) {
        const indexToRemove = strArray1.indexOf(c) + 1;
        strArray1.splice(0, indexToRemove);
        return c;
      }
    })
    .join('');
}
console.log(LCS('a', 'b'), '');
console.log(LCS('abcdef', 'abc'), 'abc');
console.log(LCS('132535365 ', '123456789'), 'abc');
console.log(LCS('finaltest  ', 'zzzfinallyzzz'), 'abc');
console.log(LCS('anothertest   ', 'notatest'), 'abc');
