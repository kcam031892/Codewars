function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/g.test(pin);
}

console.log(validatePIN('1'), false, "Wrong output for '1'");
console.log(validatePIN('12'), false, "Wrong output for '12'");
console.log(validatePIN('123'), false, "Wrong output for '123'");
console.log(validatePIN('1234'), true, "Wrong output for '1234'");
console.log(validatePIN('0000'), true, "Wrong output for '0000'");
console.log(validatePIN('1111'), true, "Wrong output for '1111'");
