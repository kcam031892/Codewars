function longest(s1, s2) {
  let result = [];
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const longestStr = Math.max(s1Arr.length, s2Arr.length);
  for (let i = 0; i < longestStr; i++) {
    if (!result.includes(s1[i]) && s1[i]) {
      result.push(s1[i]);
    }
    if (!result.includes(s2[i]) && s2[i]) {
      result.push(s2[i]);
    }
  }
  return result.sort((a, b) => a.localeCompare(b)).join('');
}
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
console.log(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
