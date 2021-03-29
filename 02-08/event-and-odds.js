function evensAndOdds(num) {
  if (num % 2 === 0) {
    // if number is even convert to binary
    return num.toString(2);
  } else {
    // if number is odd convert to hex
    return num.toString(16);
  }
}

function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
function evensAndOdds(num) {
  return num.toString(num % 2 === 0 ? 2 : 16);
}
function evensAndOdds(num) {
  return num.toString([2, 16][num % 2]);
}

console.log(evensAndOdds(2), '10');
console.log(evensAndOdds(13), 'd');
