//Conditional Statements and Data Types
let str = 'a';
let bool = true;
let num = 7;

console.log('string + boolean: ' + str + bool, 'string + number: ' + str + num, 'number + boolean: ' + num + bool);

console.log('string * boolean: ' + str * bool, 'string * number: ' + str * num, 'number * boolean: ' + num * bool);

console.log('string / boolean: ' + str / bool, 'string / number: ' + str / num, 'number / boolean: ' + num / bool);

bool = Number(bool);
console.log(typeof bool);

num = String(num);
console.log(typeof num);

str = Boolean(str);
console.log(typeof str);