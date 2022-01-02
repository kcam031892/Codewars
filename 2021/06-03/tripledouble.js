function tripledouble(num1, num2) {
 const triple =  String(num1).match(/(\d{1})\1{2,}/g);
 const double = String(num2).match(/(\d{1})\1{1,}/g);

 if(!triple || !double)  {
   return 0
 }

 return triple.some(a => double.some((b) => a[0] === b[0])) ? 1 : 0



  
}

console.log(tripledouble(237782889333 , 685192298), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);
