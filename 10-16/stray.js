function stray(numbers) {
  let num;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      num = numbers[i + 1];
    }
  }
  return num;
}

console.log(stray([1, 1, 2]), 2);
