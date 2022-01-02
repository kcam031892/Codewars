function replaceDots(str) {
  // find all the . and replace it to -
  return str.replace(/\./g, '-');
}

console.log(replaceDots('one.two.three'), 'one-two-three', 'Sorry, try again :-(');
