function elevatorDistance(array) {
  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      result += array[i] - array[i + 1];
    } else {
      result += array[i + 1] - array[i];
    }
  }
  return result;
}
function elevatorDistance(array) {
  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    result += Math.abs(array[i] - array[i + 1]);
  }
  return result;
}
function elevatorDistance(array) {
  return array.slice(1).reduce((total, num, i) => {
    total += Math.abs(num - array[i]);
    console.log(num);
    console.log(total);
    return total;
  }, 0);
  // return array.slice(1).reduce((s, n, i) => s + Math.abs(n - array[i]), 0);
}

// 2 5 8 => 9
console.log(elevatorDistance([5, 2, 8]), 9);
// console.log(elevatorDistance([1, 2, 3]), 2);
// console.log(elevatorDistance([7, 1, 7, 1]), 18);
