function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let total = 0;
    for (let j = 0; j < m; j++) {
      total += s[i + j];
    }
    if (total === d) {
      result++;
    }
  }
  console.log(result);
}

const d = 1;
const m = 4;
const s = [4];
console.log(birthday(s, d, m));
