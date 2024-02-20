function sumOfIntegersInString(s) {
  return s
    .match(/[0-9]*/g)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfIntegersInString('Dogs are our best friends.'), 16);
console.log(sumOfIntegersInString('h3ll0w0rld'), 3);
