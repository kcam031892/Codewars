function ensureQuestion(s) {
  return /\?$/.test(s) ? s : s + '?';
}

console.log(ensureQuestion(''), '?', "Expected: '?'");
console.log(ensureQuestion('Yes'), 'Yes?', "Expected: '?'");
console.log(ensureQuestion('No?'), 'No?', "Expected: '?'");
