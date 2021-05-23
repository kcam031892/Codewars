function wave(str){
  // initialize a variable result.
  const result = [];
  // iterate through str.
  for(let i = 0; i < str.length; i++) {
    // turns str to array
    const letters = [...str];
    // check if current element is letter 
    if(/[a-z]/gi.test(letters[i])) {
      // turn current element into uppercase
      letters[i] = letters[i].toUpperCase();
      // push it to result and join them
      result.push(letters.join(''));
    }
  }
  // return result.
  return result
}
function wave(str){
  return [...str].reduce((acc,curr,idx) => {
    if(/[a-z]/gi.test(curr)) {    
      acc.push((str.slice(0,idx) + curr.toUpperCase() + str.slice(idx + 1)))
    }
    return acc;

  },[])
}


console.log(wave(' gap '));