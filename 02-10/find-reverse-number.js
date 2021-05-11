function findReverseNumber(n) {
  return palindrome(n).pop();
}

function palindrome(n) {
  const temp = Array.from({ length: n }).map((_, i) => {
    if (i.toString() === i.toString().split('').reverse().join('')) {
      return i;
    }
  });
  return temp;
}
console.log(palindrome(100));

console.log(findReverseNumber(1), 0);
console.log(findReverseNumber(2), 1);
console.log(findReverseNumber(100), 909);
