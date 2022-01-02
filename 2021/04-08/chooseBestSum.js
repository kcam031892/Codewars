function chooseBestSum(t, k, ls) {
  let maxSum = 0;
  for (let i = 0; i < ls.length; i++) {
    let temp = ls[i];
    console.log(ls[i]);
    for (let j = i; j < ls.length; j++) {
      console.log(j);
      console.log(ls[j]);
      temp += ls[i];
    }
    console.log(temp);
  }
}

var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts), 163);
