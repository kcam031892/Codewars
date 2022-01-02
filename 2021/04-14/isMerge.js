function isMerge(s, part1, part2) {
  let obj = {};
  let result = [];
  for (const c of part1) {
    obj[c] = ++obj[c] || 1;
  }
  for (const c of part2) {
    obj[c] = ++obj[c] || 1;
  }

  for (const c of s) {
    if (obj[c]) {
      result.push(c);
      obj[c]--;
    }
  }
  const rem = Object.values(obj).filter((c) => c >= 1);
  return s === result.join('') && rem.length === 0;
}
function isMerge(s, a, b) {
  if (a === '') return s === b;
  if (b === '') return s === a;
  return (a[0] === s[0] && isMerge(s.slice(1), a.slice(1), b)) || (b[0] === s[0] && isMerge(s.slice(1), a, b.slice(1)));
}

console.log(isMerge('codewars', 'code', 'warss'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars'));

// codewars | cdw | oears
// c === c true
// odewars | dw | oears
// o === d false
// o === o true
// dewars | dw | ears
// d === d true
// ewars | w | ears
// e == w false
// e == e true
// wars | w | ars
// w === w true
// ars | | ars
//
