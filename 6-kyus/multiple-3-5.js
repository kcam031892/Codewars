function solution(number) {
  return Array.from({ length: number })
    .map((_, i) => (i % 5 === 0 ? i : i % 3 === 0 ? i : 0))
    .reduce((total, num) => total + num);
}

console.log(solution(10), 23);
