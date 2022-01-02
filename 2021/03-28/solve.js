function solve(stones) {
  let count = 0;
  for (let i = 1; i <= stones.length; i++) {
    console.log(stones[i], stones[i - 1]);
    if (stones[i] === stones[i - 1]) {
      count++;
    }
  }
  return count;
}
console.log(solve('RRGGBB'), 3);
// console.log(solve('RGBRGB'), 0);
// console.log(solve('BGRBBGGBRRR'), 4);
// console.log(solve('GBBBGGRRGRB'), 4);
// console.log(solve('GBRGGRBBBBRRGGGB'), 7);
