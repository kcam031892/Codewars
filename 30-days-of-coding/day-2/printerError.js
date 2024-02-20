function printerError(s) {
  // your code

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) > 109) {
      count++;
    }
  }
  return `${count}/${s.length}`;
}

function printerError(s) {
  return s.replace(/[a-m]/gi, '').length + '/' + s.length;
}

var s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');
