function cockroachSpeed(s) {
  // calculate coachroad speed km to cm
  return Math.floor(s * 27.7777778);
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);
console.log(cockroachSpeed(1.175409478180656), 0);
