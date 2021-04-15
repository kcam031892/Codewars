function towerBuilder(nFloors) {
  let result = [];
  let t = 1;
  for (let i = nFloors; i > 0; i--, t += 2) {
    console.log(i);
    let str = ' '.repeat(i - 1);
    str += '*'.repeat(t);
    str += ' '.repeat(i - 1);
    result.push(str);
  }
  return result;
}
function towerBuilder(nFloors) {
  return Array.from({ length: nFloors }).map((_, i) => {
    return ' '.repeat(nFloors - i - 1) + '*'.repeat(i + i + 1) + ' '.repeat(nFloors - i - 1);
  });
}
// console.log(towerBuilder(1), ['*']);
// console.log(towerBuilder(2), [' * ', '***']);
console.log(towerBuilder(3), ['  *  ', ' *** ', '*****']);
