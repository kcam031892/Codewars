// Return the output array, and ignore all non-op characters
function parse(data) {
  let total = 0;
  const result = [];
  const map = {
    i: () => (total += 1),
    d: () => (total -= 1),
    s: () => total = total ** 2,
    o: () => result.push(total)
  };

  for (const item of data) {
    if(map[item]) {
      map[item]();
    }
  }

  return result;

}


function parse(data) {
  const result = [];
  [...data].reduce((acc,curr) => {
    if(curr === 'i') acc++;
    if(curr === 'd') acc--;
    if(curr === 's') acc = Math.pow(acc,2)
    if(curr === 'o') result.push(acc)
    return acc;
  },[]);
  return result;

}

console.log(parse('iiisdoso'), [8, 64]);
console.log(parse('iiisxxxdoso'), [8, 64]);
