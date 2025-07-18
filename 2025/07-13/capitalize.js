// function capitalize(s) {
//   const arr = s.split('');
//   const evenCapitalize = arr.map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v)).join('');
//   const oddCapitalize = arr.map((v, i) => (i % 2 === 1 ? v.toUpperCase() : v)).join('');
//   return [evenCapitalize, oddCapitalize];
// }

assert.deepEqual(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
