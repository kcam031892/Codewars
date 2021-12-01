function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let months = 0,
    total = startPriceOld;
  while (total < startPriceNew) {
    total += savingperMonth;
    total -= (startPriceOld * percentLossByMonth) / 100;
    startPriceNew -= (startPriceNew * percentLossByMonth) / 100;
    startPriceOld -= (startPriceOld * percentLossByMonth) / 100;
    months++;
    months % 2 !== 0 ? (percentLossByMonth += 0.5) : percentLossByMonth;
  }
  return [months, Math.round(total - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
console.log(nbMonths(12000, 8000, 1000, 1.5), [0, 4000]);
