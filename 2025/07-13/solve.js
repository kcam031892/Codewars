function solve(s) {
  const upperCase = [...s].filter((i) => i === i.toUpperCase()).join('');
  return upperCase.length > s.length - upperCase.length ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve('code'), 'code');
console.log(solve('CODe'), 'CODE');
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
