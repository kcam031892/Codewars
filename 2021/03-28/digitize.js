function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  //code here
  let numArr = [];

  while (n > 0) {
    console.log(n % 10);
    numArr.push(n % 10);

    n = Math.floor(n / 10);
    console.log(n);
  }

  return numArr;
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);
