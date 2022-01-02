function generateRange(min, max, step){
  const result = [];
  let i = min;
  while(i <= max) {
    result.push(i);
    i += step;

  }

  return result;

}


function generateRange(min,max,step) {
  return min > max ? [] : [min,...generateRange(min + step, max,step)];
}
function generateRange(min,max,step) {
  if(min > max) return [];
  return [min,...generateRange(min + step,max,step)]
}


console.log(generateRange(2, 10, 2), [2,4,6,8,10]);