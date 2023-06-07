//Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
const arrAnimals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let serch = 'к';

function searchStart(array, string) {
    const arrResult = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(string.toLowerCase())) {
            arrResult.push(element);
        }     
    });
    return arrResult;       
}

console.log(searchStart(arrAnimals, serch));

//Задание 3
let x = 32.58884;
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));

//Задание 4
const arrNumbs = [52, 53, 49, 77, 21, 32];

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

console.log(getMaxOfArray(arrNumbs));
console.log(getMinOfArray(arrNumbs));

//Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(getRandomInt(1, 10));

//Задание 6
function getRandomArrNumbers(maxValue) {
    const arrRandom = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        arrRandom.push(Math.round(Math.random() * maxValue));        
    }
    return arrRandom;
}

console.log(getRandomArrNumbers(7));

//Задание 7
