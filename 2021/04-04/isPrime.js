function isPrime(num) {
  if (num < 0) return false;
  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i < sqrtNum + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(73), true, '73 is prime');
// console.log(isPrime(75), false, '75 is not prime');
