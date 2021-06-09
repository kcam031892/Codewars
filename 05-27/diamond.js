function diamond(n){
  if(n % 2 === 0 || n <= 0) return null;
  let str = '';
  for(let i = 1, j  = n - 2; i <= n;i+= 2,j -= 2 ) {
    if(i !== n) {
      console.log(j);
      str += ' '.repeat(j )  + '*'.repeat(i) + '\n'

    }else {
      str += '*'.repeat(i) + '\n'
    }
  }
  for(let i = n - 2,j = 1; i >= 0;i -= 2,j++ ) {
    if(i !== n) {
      console.log(j);
      str += ' '.repeat(j )  + '*'.repeat(i) + '\n'

    }else {
      str += '*'.repeat(i)
    }

  }
  console.log(str);
  return str;
}
// console.log(''.repeat(3));

// console.log(diamond(1), "*\n")
console.log(diamond(3), " *\n***\n *\n")
// console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n")
// console.log(diamond(2), null)
// console.log(diamond(0), 
// console.log(diamond(-3), null)null)