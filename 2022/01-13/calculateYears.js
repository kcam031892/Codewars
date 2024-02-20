function calculateYears(principal, interest, tax, desired) {
  let years = 1;
  let sum = principal;

  while (sum <= desired) {
    const computedInterest = sum * interest * years;
    const computedTax = computedInterest * tax;
    const totalAmount = computedInterest - computedTax;

    sum += totalAmount;
    console.log(sum);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
// console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
// console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);
