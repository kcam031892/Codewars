function digital_root(n) {
  // while n is greater than 9
  while(n > 9) {
    // add all digits and assign it to n
    n = [...String(n)].map(Number).reduce((acc,curr) => acc + curr);
  
  }
  // if n is less than 9 return.
  return n;
}


console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
