function incrementString(strng) {
  const string = (strng.match(/([a-z])/gi) || []).join('');
  const numbers = (strng.match(/[0-9]/g) || []).join('');
  return string + String(+numbers + 1).padStart(numbers.length, '0');
}
function incrementString(strng) {
  return strng.replace(/([0-8]?)(9*)$/, function (s, d, ns) {
    return +d + 1 + ns.replace(/9/g, '0');
  });
}
console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar99'), 'foobar100');
console.log(incrementString('foobar099'), 'foobar100');
console.log(incrementString(''), '1');
