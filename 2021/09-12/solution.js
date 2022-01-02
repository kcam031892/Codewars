// function solution(str, ending) {
//   return str.endsWith(ending);
// }
function solution(str, ending) {
  return str.substring(str.length - ending.length) === ending;
}

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
