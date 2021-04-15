function square(n, p = 2) {
  // return n to its square
  if (p === 0) {
    return 1;
  } else {
    return n * square(n, p - 1);
  }
}

console.log(square(3), 9);
