String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, (letterAfterSpace) => letterAfterSpace.toUpperCase());
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
