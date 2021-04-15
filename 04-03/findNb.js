function findNb(m) {
  let sum = 0;
  let n = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
