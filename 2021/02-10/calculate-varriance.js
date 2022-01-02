function variance(numbers) {
  // get the mean  by adding all the numbers and divide it by length.
  let  mean = 0;
  for(let i = 0 ; i < numbers.length; i++) {
    mean += numbers[i];
  }
  mean = mean / numbers.length;
  // Get the variance by adding a number - the mean and power of 2 and divide it by length of the numbers.
   let result = 0;
  for(let i = 0 ; i < numbers.length;i++) {
    result += Math.pow(numbers[i] - mean,2);
  }
  return result / numbers.length;
} 

var variance = function (numbers) {
  let mean = numbers.reduce((sum, num) => sum + num) / numbers.length;
  return (
    numbers.reduce((sum, num) => {
      sum += Math.pow(num - mean, 2);
      console.log(sum);
      return sum;
    }, 0) / numbers.length
  );
};
var variance = function (numbers) {
  let mean = numbers.reduce((sum, num) => sum + num) / numbers.length;
  return numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;
};

var numbers1 = [-10, 0, 10, 20, 30];
console.log(variance(numbers1).toFixed(4), '200.0000', 'Variance for the first example set is not correct');
