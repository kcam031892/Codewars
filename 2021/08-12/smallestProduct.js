function smallestProduct(arr) {
  return Math.min(...arr.reduce((acc,curr) => {
    const result = curr.reduce((a,b) => a * b ,1);
    return [...acc,result];
  },[]))
}

function smallestProduct(arr) {
  return Math.min(...arr.map((i) => i.reduce((a,b) =>  a * b,1)));
}



console.log(smallestProduct([[3,2],[1,2,1],[7,8]]), 2 );
  
