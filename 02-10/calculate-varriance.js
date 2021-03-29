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
