function recover(str) {
  const numberObj = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
  };
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    for (const key in numberObj) {
    }
  }

  return arr;
}

console.log(recover('NEO'), '1');
// console.log(recover('ONETWO'), '12');
// console.log(recover('TWWTONE'), '21');
// console.log(recover('ZYX'), 'No digits found');
// console.log(recover('ONENO'), '11');
// console.log(recover('NEOTWONEINEIGHTOWSVEEN'), '12219827');
