function score(dice) {
  const scoreList = {
    3: (a) => {
      const temp = {
        1: 1000,
        6: 600,
        5: 500,
        4: 400,
        3: 300,
        2: 200,
      };
      return temp[a];
    },
    1: (a) => {
      const temp = {
        1: 100,
        5: 50,
      };
      return temp[a];
    },
  };
  const dict = dice.reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});

  let score = 0;
  for (let key in dict) {
    if (dict[key] >= 3) {
      score += scoreList[3](key);
      const remaining = dict[key] % 3;
      if (remaining > 0) {
        score += scoreList[1](key) ? scoreList[1](key) * remaining : 0;
      }
    } else {
      score += scoreList[1](key) ? scoreList[1](key) * dict[key] : 0;
    }
  }

  return score;
}

console.log(score([2, 4, 4, 5, 4]), 'Should be 450');
// console.log(score([4, 4, 4, 3, 3]), 'Should be 400');
// console.log(score([2, 3, 4, 6, 2]), 'Should be 0 :-(');
