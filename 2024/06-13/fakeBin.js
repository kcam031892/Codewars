// function fakeBin(x) {
//   return x.split('').map((x) => Number(x) < 5 ? 0 : 1).join('')

// }

function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d > 5 ? 0 : 1));
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
