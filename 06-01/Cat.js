// Let's make a Cat constructor!
function Cat(name,weight) {
  this.name = name;
  this.weight = weight;
}

Object.defineProperty(Cat,'averageWeight', {
  value: function averageWeight() {
    return 20;
  }
})

 fluffy = new Cat('fluffy', 15);
 garfield = new Cat('garfield', 25);

 

console.log(fluffy.weight, 15);
console.log(fluffy instanceof Cat, true);
console.log(fluffy.averageWeight, undefined);
console.log(typeof Cat.averageWeight, "function");
console.log(Cat.averageWeight(), 20);