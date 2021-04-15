function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (!str[i + 1]) {
      result.push(str[i] + '_');
    } else {
      result.push(str[i] + str[i + 1]);
    }
  }
  return result;
}
console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
console.log(solution(''), []);
