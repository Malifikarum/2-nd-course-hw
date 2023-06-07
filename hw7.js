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
function getRandomArr(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(getRandomArr(7, 13));

//Задание 8
let myDate = new Date();
console.log(myDate);

//Задание 9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + days73;
let daysLate73 = new Date(searchDate);

console.log(daysLate73);

//Альтернатива:
let search73Date = currentDate.getDate() + 73;
let daysLate73Date = new Date();
daysLate73Date.setDate(search73Date);
console.log(daysLate73Date);

//Задание 10
let myDateRU = new Date();
function dateIs(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    let fullDate = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}
    
Время: ${date.getHours()}:${minute}:${second}`;

    return fullDate;
}

console.log(dateIs(myDateRU));

//Задание 11
function gameWords() {
    let arrGameWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    arrGameWords = arrGameWords.sort(() => Math.random() - 0.5);
    
    alert(arrGameWords);

    let answer1 = prompt('Чему равнялся первый элемент массива?');
    let answer2 = prompt('Чему равнялся последний элемент массива?');

    if (answer1.toLowerCase() === arrGameWords[0].toLowerCase() && answer2.toLowerCase() === arrGameWords[arrGameWords.length - 1].toLowerCase()) {
        result =  ('Поздравляю, Вы угадали оба элемента!');
    }
    else if (answer1.toLowerCase() === arrGameWords[0].toLowerCase() || answer2.toLowerCase() === arrGameWords[arrGameWords.length - 1].toLowerCase()) {
        result = ('Вы были близки к победе!');
    }
    else {
        result = ('Вы ответили не верно');
    }
    return result;
}