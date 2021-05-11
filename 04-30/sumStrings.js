function sumStrings(a, b) {

  return BigInt(+a + +b) + '';
}
function toPlainString(num) {
  return ('' + +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/, function (a, b, c, d, e) {
    return e < 0 ? b + '0.' + Array(1 - e - c.length).join(0) + c + d : b + c + d + Array(e - d.length + 1).join(0);
  });
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
