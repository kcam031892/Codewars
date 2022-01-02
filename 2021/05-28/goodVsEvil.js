function goodVsEvil(good, evil) {
  const goodWorth = [1, 2, 3, 3, 4, 10];
  const goodArmy = good.split(' ').map((a, i) => +a * goodWorth[i]);
  const goodCount = goodArmy.reduce((a,b) => a + b,0)
  console.log(goodCount);

  const evilWorth = [1, 2, 2, 2, 3, 5, 10];
  const evilArmy = evil.split(' ').map((a,i) => +a * evilWorth[i]);;
  const evilCount = evilArmy.reduce((a,b) => a + b , 0);


  return goodCount > evilCount ? 'Battle Result: Good triumphs over Evil' :  evilCount > goodCount ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field';
}
function goodVsEvil(good, evil) {
  const getWorth = (army,worth) => {
    return army.split(' ').reduce((acc,curr,idx) => {
      const w = +curr * worth[idx]
      return acc + w;
    },0)

  }

  const goodArmy = getWorth(good,[1, 2, 3, 3, 4, 10])
  const evilArmy = getWorth(evil,[1, 2, 2, 2, 3, 5, 10])
  console.log(evilArmy);


  return goodArmy > evilArmy ? 'Battle Result: Good triumphs over Evil' :  evilArmy > goodArmy ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field';
}

// console.log( goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
console.log( goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win' );
// console.log( goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie' );
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Good should win');
// console.log(
//   goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'),
//   'Should be a tie'
// );
