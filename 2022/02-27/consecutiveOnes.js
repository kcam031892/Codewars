function consecutiveOnes(nums) {
  let result = 0,
    counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 1) {
      counter++;
    } else {
      result = Math.max(result, counter);
      counter = 0;
    }
  }
  return Math.max(result, counter);
}

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);
console.log(consecutiveOnes([1, 1, 0, 0, 1]), 2);
console.log(consecutiveOnes([1, 1, 1, 1, 1]), 5);
console.log(consecutiveOnes([0, 0, 0, 0, 0]), 0);
console.log(consecutiveOnes([0, 0, 0, 0, 1]), 1);
