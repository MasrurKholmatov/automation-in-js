// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const arrayOfMovieNames = ["Konstantine", "Shrek", "The lord of the rings", "Matrix", "Harry Potter", "The lion king"];
arrayOfMovieNames.forEach(name => console.log(name));

// Given an array of car manufacturers, convert the array to a string and back to an array
const carManufacturers = ["BMW", "Opel", "Audi", "Mazda"];
let arrToStr = carManufacturers.toString();
console.log(arrToStr);
let strToArr = arrToStr.split();
console.log(strToArr);

// Given an array of the names of your friends, add the words hello to each element of the array
const arrOfFriends = ["Rachel", "Monica", "Phoebe", "Joe", "Chandler", "Ross"];
let addHello = arrOfFriends.map(i => "Hello " + i);
console.log(addHello);

// Convert numeric array to Boolean
const arrOfNumbers = [2, 4, 6];
let convertToBoolean = Boolean(arrOfNumbers);
console.log(convertToBoolean);

// Sort the array [1,6,7,8,3,4,5,6] in descending order
const notSortedArr = [1, 6, 7, 8, 3, 4, 5, 6];

function sortDescArr(a, b) {
    return a - b;
}
let sortedArray = notSortedArr.sort(sortDescArr);
console.log(sortedArray);

// Filter array [1,6,7,8,3,4,5,6] by value> 3
const filterArray = [1, 6, 7, 8, 3, 4, 5, 6];
let filteredArr = filterArray.filter(i => i > 3);
console.log(filteredArr);

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function elemntOfArray(arr, arrElement) {
    let emptyArr = [];
    for (let i = 0; i < arr; i++) {
        emptyArr.push(i);
    }
    let reversedArray = emptyArr.reverse();
    // let found = emptyArr.indexOf(arrElement);
    // console.log(found);
    return reversedArray.indexOf(arrElement);
}
console.log(elemntOfArray(7, 1))

// Implement a loop that will print the number 'a' until it is less than 10
let a = 12;
while (a > 10) {
    a--;
    console.log(a);
}

// Implement a loop that prints prime numbers to the console
let i = 2;
while (i < 7) {
    let isPrimeNumber = true;
    let k = 2;
    while (k < i) {
        if (i % k == 0) {
            isPrimeNumber = false;
        }
        k++;
    }

    if (isPrimeNumber) {
        console.log(i + " is prime");
    } else {
        console.log(i + " is not prime");
    }
    i++;
}

// Implement a loop that prints odd numbers to the console
for (let j = 1; j < 8; j++) {
    isOdd = true;
    if (j % 2 !== 0) {
        isOdd = false;
    }
    if (isOdd) {
        console.log(j + " is not odd");
    } else {
        console.log(j + " is odd");
    }
}