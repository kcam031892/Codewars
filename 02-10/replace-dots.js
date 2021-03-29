var replaceDots = function (str) {
  return str.replace(/\./g, '-');
};

console.log(replaceDots('one.two.three'), 'one-two-three', 'Sorry, try again :-(');
