// v => km/hr
// h => v * t - 0.5*g*t*t
// g => 9.81 m/s**2
function maxBall(v) {
  const meterPerSecs = 3.6;
  const gravity = 9.81;
  const maxHeightInTenthOfSecs = 10 / meterPerSecs / gravity;

  return gravity;
}

console.log(maxBall(15), 10);
// console.log(maxBall(45), 13);
// console.log(maxBall(99), 28);
// console.log(maxBall(85), 24);
