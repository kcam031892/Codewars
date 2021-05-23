// v => km/hr
// h => v * t - 0.5*g*t*t
// g => 9.81 m/s**2
function maxBall(v) {
  // meter per secs
  const meterPerSecs = 3.6;
  // gravity
  const gravity = 9.81;
  const maxHeightInTenthOfSecs = 10 / meterPerSecs / gravity;
  
  return Math.round(v *maxHeightInTenthOfSecs);
}

console.log(maxBall(15), 10);
console.log(maxBall(45), 13);
console.log(maxBall(99), 28);
// console.log(maxBall(85), 24);
