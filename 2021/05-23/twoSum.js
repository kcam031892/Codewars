function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length;i++) {
    for(let j = 0; j < numbers.length;j++) {
      if(i !== j) {
        const total = numbers[i] + numbers[j];
        if(total === target) {
          return [i,j]
        }
      }
    }
  }
}


function twoSum(numbers, target) {
  const seen = new Map();
  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(seen.has(target - number)) {
      return [seen.get(target-number),i]
    }
    seen.set(number,i)
  }

}

function twoSum(numbers, target) {
  const seen = {};
  for(let i = 0; i < numbers.length;i++) {
    const num = numbers[i];
    if(seen[target - num]) {
      return [seen[target-num] - 1,i]
    }
    seen[num] = i + 1
  }


}

console.log(twoSum([1,2,3], 4), [0,2]);
// console.log(twoSum([1234,5678,9012], 14690),[1,2]);
// console.log(twoSum([2,2,3], 4),[0,1]);
// console.log(twoSum([845, 692, 592, 368, 375, 463, 641, 271, 653, 914], 1116),[0,1]);
// console.log(twoSum([580, 769, 671, 703, 530, 844, 771, 575, 54, 668], 1615),[0,1]);