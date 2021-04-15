function cakes(recipe, available) {
  const numCanMake = {};

  for (const key in recipe) {
    if (!available[key]) return 0;
    const compute = Math.floor(available[key] / recipe[key]);
    numCanMake[key] = compute;
  }
  return Math.min(...Object.values(numCanMake));
}
function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map((key) => Math.floor(available[key] / recipe[key]) || 0));
}
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }), 2);
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));
