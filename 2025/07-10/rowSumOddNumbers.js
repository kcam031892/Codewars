function rowSumOddNumbers(n) {
  // TODO
  let rows = [];
  for (let i = 0; i <= n; i++) {
    let cols = [];
    for (let j = 1; j <= i + 1; j++) {
      console.log(i + j * 2);
      cols.push(i + j * 2);
    }
    rows.push(cols);
  }

  console.log(rows);

  // return rows[n];
  // .map((_, i) => i * 2 + 1)
  // .reduce((sum, n) => (sum += n), 0);
  // .reduce((sum, n) => (sum += n), 0);
}

// assert.strictEqual(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(3), 74088);
