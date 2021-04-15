function rot13(str) {
  const inputs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const ouputs = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
  return str.split('').map((c) => {
    if (inputs.includes(c)) {
      return ouputs[inputs.indexOf(c)];
    }
    return c;
  });
}

console.log(rot13('EBG13 rknzcyr.'));
