function solution(input, markers) {
  const regex = new RegExp(`(\\s*(${markers[0]}|${markers[1] === '$' ? '\\$' : markers[1]})([^\n])*)`, 'g');
  return input.replace(regex, '');
}
function solution(input, markers) {
  const regex = new RegExp(`(\\s*[${markers.join('|')}]([^\n)]*))`, 'g');
  return input.replace(regex, '');
}
console.log(
  solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']),
  'apples, plums\npears\noranges'
);
console.log(solution('a #b\nc\nd $e f g', ['#', '$']), 'Q\nu\ne');
//
