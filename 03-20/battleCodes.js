function battleCodes(armyLetters, armyNumbers) {
  // Convert letters into its number power.
  const lettersValue = convertLettersToNumbersArray(armyLetters);
  // Converts number into array.
  const numbersValue = armyNumbers.split('').map(Number);
  // If lettersValue is empty or numbers value is empty return peace.
  if (lettersValue.length <= 0 && numbersValue.length <= 0) {
    return 'Peace';
  }
  // Loop until lettersValue and numbersValue is empty
  while (lettersValue.length > 0 && numbersValue.length > 0) {
    // Get the value of attacker from numbersValue
    const numberAttacker = numbersValue[0];
    // get the value of attacker from lettersValue
    const letterAttacker = lettersValue[lettersValue.length - 1];

    // defender positions.
    const posNumberDefender = 0;
    const posLetterDefender1 = lettersValue.length - 1;
    const posLetterDefender2 = lettersValue.length - 2;

    // attack numbers value at position 0
    numbersValue[posNumberDefender] -= letterAttacker;
    // attack letters value at end
    lettersValue[posLetterDefender1] -= numberAttacker;
    // attack letters value at before end
    lettersValue[posLetterDefender2] -= numberAttacker;
    // remove elements
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
  // Return.
  return lettersValue.length <= 0 && numbersValue.length <= 0
    ? 'Draw'
    : lettersValue.length > 0
    ? toLetters(lettersValue)
    : numbersValue.join('');
}

// Convert letters into numbers
function convertLettersToNumbersArray(letters) {
  return letters.split('').map((letter) => letter.charCodeAt(0) - 96);
}
// convert numbers to letters.
function toLetters(arr) {
  return arr.map((a) => String.fromCharCode(a + 96)).join('');
}
console.log(battleCodes('abc', '12'), 'Peace');
console.log(toLetters([1, 2, 3]));
