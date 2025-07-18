var number = function (array) {
  return array.reduce((acc, curr) => {
    if (typeof curr === 'string') {
      const startingNumber = curr.toLowerCase().charCodeAt() - 96;
      const result = `${startingNumber}: ${curr}`;
      return [...acc, result];
    }
  }, []);
};

console.log(number([]), [], 'Empty array should return empty array');
console.log(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c']);
