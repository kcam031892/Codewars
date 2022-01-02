String.prototype.camelCase = function () {
  return this.split(' ')
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.substring(1))
    .join('');
};
String.prototype.camelCase = function () {
  return this.replace(/(\b(\w))/g, (a) => a.toUpperCase()).replace(/\s/g, '');
};

console.log('test case'.camelCase(), 'TestCase');
console.log('camel case method'.camelCase(), 'CamelCaseMethod');
console.log('say hello '.camelCase(), 'SayHello');
console.log(' camel case word'.camelCase(), 'CamelCaseWord');
console.log(''.camelCase(), '');
