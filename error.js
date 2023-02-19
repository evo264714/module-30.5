//* Not in JS that frequently: range error
const numbers = [3, 4, 5, 8];
// console.log(numbers[25]);

//* You should not do this 
numbers.length = 2;
// console.log(numbers);
// console.log(numbers.length);

//* This is a reference error
// console.log(money);
let money = 80;

//* This is a syntax error
// for(let i = 0; i < 5 i++){

// }
// if(numbers.length >/ 2){

// }

//* This is a Type Error
let student = {};
console.log(student.address.city);