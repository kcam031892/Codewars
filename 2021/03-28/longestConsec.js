function longestConsec(strarr, k) {
  let longest = '';
  const arr = [];
  for (let i = 0; k > 0 && i < strarr.length - k; i++) {
    const t = strarr.slice(i, i + k);
    const str = t.join('');
    arr.push(str);
    if (longest.length < str.length) {
      longest = str;
    }
  }
  console.log(arr);
  return longest;
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta');
// console.log(
//   longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1),
//   'oocccffuucccjjjkkkjyyyeehh'
// );
// console.log(longestConsec([], 3), '');
// console.log(
//   longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2),
//   'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
// );
// console.log(
//   longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
//   'wlwsasphmxxowiaxujylentrklctozmymu'
// );
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '');
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz');
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '');
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '');
