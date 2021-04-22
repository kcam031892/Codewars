function toUnderscore(string) {
  return typeof string === 'number'
    ? String(string)
    : string
        .match(/([A-Z][a-z]+)/g)
        .map((c) => c.toLowerCase())
        .join('_');
}
function toUnderscore(string) {
  return ('' + string).replace(/([^A-Z])([A-Z])/g, '$1_$2').toLowerCase();
}
//  returns test_controller
console.log(toUnderscore('TestController'));

// returns movies_and_books
console.log(toUnderscore('MoviesAndBooks'));

// returns app7_test
console.log(toUnderscore('App7Test'));

// returns "1"
console.log(toUnderscore(1));
