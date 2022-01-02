function matrixMultiplication(a, b){
  const x = rotateMatrixB(b)
  console.log(x);

  /*
      [2,1]
      [3,1]
    ------------------------------
      [1,2]
      [3,2]
  */

  for(let i = 0; i < a.length;i++) {
    let total = 0;
    let total2 = 0;
    let c = 0;
    for(let j = 0; j < a[i].length;j++) {
      total += a[i][j] * x[i][j]
      total2 += a[i][j] * x[x.length - 1-i][j]

    }
    console.log(total,total2);
  }
}

function rotateMatrixB(arr) {
  const result = [];
  for(let i = 0 ; i < arr.length;i++) {
    const temp = [];
    for(let j = 0;j < arr[i].length;j++) {
      temp.push(arr[j][i]);
    }
    result.push(temp)
  }
  return result;
}

console.log(matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]]),[[5, 4], [11, 8]]);







/*


[1,2]
[3,2]


[3,2]
[1,1]
*/