//return the winner's army as string, 'Draw' or 'Peace'
function battleCodes(armyLetters, armyNumbers) {
  console.log(armyLetters, armyNumbers);
  const letterDigits = armyLetters.split('').map((c) => c.charCodeAt(0) - 96);
  const numbersDigits = armyNumbers.split('').map((c) => +c);

  while (numbersDigits.length > 0 && letterDigits.length > 0) {
    const temp = numbersDigits[0];
    numbersDigits[0] = numbersDigits[0] - letterDigits[letterDigits.length - 1];
    letterDigits[letterDigits.length - 1] = letterDigits[letterDigits.length - 1] - temp;
    letterDigits[letterDigits.length - 2] = letterDigits[letterDigits.length - 2] - temp;

    if (numbersDigits[0] <= 0) numbersDigits.shift();
    if (letterDigits[letterDigits.length - 2] <= 0) letterDigits.pop();
    if (letterDigits[letterDigits.length - 1] <= 0) letterDigits.pop();
  }
  console.log(letterDigits);

  if (numbersDigits.length > 0) return numbersDigits.join('');
  if (letterDigits.length > 0) return letterDigits.map((n) => String.fromCharCode(n + 96)).join('');
  if (letterDigits.length === 0 && numbersDigits.length === 0) return 'Draw';
  if (letterDigits.length === 0 || numbersDigits.length === 0) return 'Peace';
}

console.log(battleCodes('xtmkfwjw', '51479674'), 'Peace');
// let arr = [1, 2, 3];
// arr.splice(arr.length - 2, 1);
// console.log(arr);
