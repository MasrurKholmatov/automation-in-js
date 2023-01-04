// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'
// Add the power property to the car object, which is a function and displays the engine power to the console
let car = {
    color: "black",
};

car.color = "green";
car.power = function () {
    car.engine = 1800;
    console.log(car.engine);
};

car.power();


//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function sumOfFruits(pearsNumber, applesNumber) {
    return pearsNumber + applesNumber;
};

let result = sumOfFruits(4, 3);
console.log(result);


//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
function checkPaymentTerminalName(userName) {
    const savedUserName = "Masrur";

    if (userName == savedUserName) {
        console.log("Hello " + savedUserName);
    } else {
        console.log("There is no such name!");
    };
};

checkPaymentTerminalName("Masrur");


//Write a function for calculating the type of argument and type output to the console
function calcTypeOfArgument(firstArg, secondArg) {
    console.log(typeof (firstArg + secondArg));
    console.log(typeof (firstArg * secondArg));
    console.log(typeof (firstArg - secondArg));
    console.log(typeof (firstArg / secondArg));
};

calcTypeOfArgument(1, "2");


// Write a function that determines whether a number is prime or not
function isPrimeNumber(firstArg) {
    let primeNum = true;
    for (let i = 2; i < firstArg; i++) {
        if (firstArg % i == 0) {
            primeNum = false;
        }
    }
    return primeNum;
};

console.log(isPrimeNumber(3));