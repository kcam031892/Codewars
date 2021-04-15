function findTheNumberPlate(customerID) {
  let numbers = 1;
  console.log('z'.charCodeAt(0));
  let firstLetter = 97;
  let secondLetter = 97;
  let thirdLetter = 97;

  while (customerID > 0) {
    numbers++;
    if (numbers >= 1000) {
      firstLetter++;
      numbers = 1;
    }
    if (firstLetter > 122) {
      firstLetter = 97;
      secondLetter++;
      numbers = 1;
    }
    if (secondLetter > 122) {
      secondLetter = 97;
      thirdLetter++;
      number = 1;
    }

    customerID--;
  }

  return `${String.fromCharCode(firstLetter)}${String.fromCharCode(secondLetter)}${String.fromCharCode(
    thirdLetter
  )}${String(numbers).padStart(3, '0')}`;
}

function findTheNumberPlate(ID) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = String((ID % 999) + 1).padStart(3, '0');
  const letters =
    alphabet[Math.floor((ID / 999) % 26)] +
    alphabet[Math.floor((ID / 999 / 26) % 26)] +
    alphabet[Math.floor((ID / 999 / 26 ** 2) % 26)];

  return letters + numbers;
}

console.log(findTheNumberPlate(17558423), 'zzz999');
console.log(findTheNumberPlate(234567), 'aja802');
