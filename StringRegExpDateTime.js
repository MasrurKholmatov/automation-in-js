// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let someString = "ahb acb aeb aeeb adcb axeb";
let matchFromSomeString = /a.b/g;
let resForString = someString.match(matchFromSomeString);
console.log(resForString);

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let numberString = "2 + 3 223 2223";
let myRegex = /[2]\s[+]\s[3]/g;
let resForNumber = numberString.match(myRegex);
console.log(resForNumber);

// Get the day, month and year of the current date and output it to the console separately
const date = new Date();
console.log(date.getDate());
console.log(date.toLocaleString('default', { month: 'short' }));
console.log(date.getFullYear());