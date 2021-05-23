function battleCodes(armyLetters, armyNumbers) {
  const lettersValue = convertLettersToNumbersArray(armyLetters);
  const numbersValue = armyNumbers.split('').map(Number);
  if (lettersValue.length <= 0 && numbersValue.length <= 0) {
    return 'Peace';
  }
  while (lettersValue.length > 0 && numbersValue.length > 0) {
    const numberAttacker = numbersValue[0];
    const letterAttacker = lettersValue[lettersValue.length - 1];
    const posNumberDefender = 0;
    const posLetterDefender1 = lettersValue.length - 1;
    const posLetterDefender2 = lettersValue.length - 2;
    numbersValue[posNumberDefender] -= letterAttacker;
    lettersValue[posLetterDefender1] -= numberAttacker;
    lettersValue[posLetterDefender2] -= numberAttacker;

    if (numbersValue[posNumberDefender] <= 0) {
      numbersValue.shift();
    }
    if (lettersValue[posLetterDefender1] <= 0) {
      lettersValue.pop();
    }
    if (lettersValue[posLetterDefender2] <= 0) {
      lettersValue.splice(posLetterDefender2, 1);
    }
  }

  return lettersValue.length <= 0 && numbersValue.length <= 0
    ? 'Draw'
    : lettersValue.length > 0
    ? toLetters(lettersValue)
    : numbersValue.join('');
}
function convertLettersToNumbersArray(letters) {
  return letters.split('').map((letter) => letter.charCodeAt(0) - 96);
}
function toLetters(arr) {
  return arr.map((a) => String.fromCharCode(a + 96)).join('');
}
// console.log(typeof convertLettersToNumbersArray('a'));

// console.log(battleCodes('xtmkfwjw', '51479674'), 'Peace');
console.log(battleCodes('abc', '12'), 'Peace');

console.log(toLetters([1, 2, 3]));
