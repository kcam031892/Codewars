function alphabetPosition(text) {
  console.log(text);
  return text
    .toLowerCase()
    .split('')
    .map((c) => {
      if (/[a-z]/.test(c)) {
        return c.charCodeAt(0) - 96;
      }
      return false;
    })
    .filter(Boolean)
    .join(' ');
}
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((c) => /[a-z]/.test(c))
    .map((c) => c.charCodeAt(0) - 96)
    .join(' ');
}
function alphabetPosition(text) {
  return (text.toLowerCase().match(/[a-z]/g) || []).map((c) => c.charCodeAt(0) - 96).join(' ');
}

// console.log(alphabetPosition(']'), '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
console.log(alphabetPosition(''), '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20');
