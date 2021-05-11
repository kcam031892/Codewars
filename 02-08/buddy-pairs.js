function buddy(start, limit) {
  // initialize result as empty array;
  const result = [];
  // Iterate throught start until limit.
  for (let i = start; i <= limit; i++) {
    // get the sum of the divisor of i and store it to m.
    const m = divSum(i);
    // get the sum of the divisor of n and store it to n.
    const n = divSum(m);
    // if n is equal i
    if (n === i) {
      // if m is greater than n
      if (m > n) {
        // push n,m to the result
        result.push(n);
        result.push(m);
        // break the loop
        break;
      }
    }
  }

  return result.length > 0 ? result : 'Nothing';
}
function buddy(start, limit) {
  // Iterate throught start until limit.
  for (let i = start; i <= limit; i++) {
    // get the sum of the divisor of i and store it to m.
    const m = divSum(i);
    // get the sum of the divisor of n and store it to n.
    const n = divSum(m);
    // if n is equal i and m is greater than n
    if (n === i && m > n) {
      // return m,n
      return [n, m];
    }
  }
  // return Nothing
  return 'Nothing';
}

function divSum(n) {
  let sum = 0;
  if (n === 1) return sum;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        sum += i;
      } else {
        sum += i + n / i;
      }
    }
  }
  return sum;
}
console.log(divSum(8892));
console.log(buddy(23, 4669), [48, 75]);
// console.log(buddy(4952, 6539), [5775, 6128]);
console.log(buddy(12169, 18658), [1050, 1925]);
// console.log(buddy(2382, 3679), 'Nothing');
