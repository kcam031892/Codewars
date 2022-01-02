function guessGifts(wishlist, presents) {
  return [...new Set(wishlist.filter(item => presents.some((a) => item.clatters === a.clatters &&  a.size === item.size && a.weight === item.weight)).map(item => item.name))];
}


const whishlist = [
  {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "mini puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"},
  {name: "card game", size: "small", clatters: "no", weight: "light"}
];
const presents =  [
  {size: "medium", clatters: "a bit", weight: "medium"},
  {size: "small", clatters: "yes", weight: "light"}
];
const result = ['toy car', 'mini puzzle'];
console.log(guessGifts(whishlist,presents))


