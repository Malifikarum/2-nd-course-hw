//Задание 1
const arrNumb = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumb.length; i++) {

    console.log(arrNumb[i]);

    if (arrNumb[i] === 10) {
        break;
    }
}

//Задание 2
console.log(arrNumb.indexOf(4));

//Задание 3
const arrNumb2 = [1, 3, 5, 10, 20];

console.log(arrNumb2.join(' '));

//Задание 4
// const arr = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1);
	}
}

for (let arrIn of arr) {
    for (let element of arrIn) {
        console.log(element);
    }
}

//Задание 5
const arrNumb3 = [1, 1, 1];

arrNumb3.push(2, 2, 2);
console.log(arrNumb3);

//Задание 6
const arrMix = [9, 8, 7, 'a', 6, 5];

arrMix.sort();
arrMix.pop();
console.log(arrMix);

//Задание 7
const arrNumb4 = [9, 8, 7, 6, 5];
const userNumb = Number(prompt('Введите любое число от 1 до 10'));

if (arrNumb4.includes(userNumb)) {
    console.log(`Число ${userNumb} присутствует в данном массиве`);
}
else {
    console.log(`Числа ${userNumb} в данном массиве нет`);
}

//Задание 8
const testText = 'abcdef';

arrString = testText.split('');
arrString.reverse();
console.log(arrString.join(''));

//Задание 9 
const arrTotal = [
    [1, 2, 3],
    [4, 5, 6]
];
// console.log(arrTotal[0].concat(arrTotal[1]));
console.log(arrTotal.flat());

//Задание 10
const arrNumb5 = [1, 6, 4, 8];

for (i = 0; i < arrNumb5.length; i++) {
    if (i + 1 === arrNumb5.length) {
        console.log(arrNumb5[i]);
        break;
    }
    console.log(arrNumb5[i] + arrNumb5[i + 1]);
}

//Задание 11
const arrNumb6 = [1, 6, 4, 8];
const arrNumb6Square = arrNumb6.map(el => el ** 2);

console.log(arrNumb6Square);

//Задание 12
const arrWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];

function getLengthWords(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].length;
    }
    return array;
}
console.log(getLengthWords(arrWords));

//Задание 13
const arrMixNumber1 = [-1, 0, 5, -10, 56];
const arrMixNumber2 = [-25, 25, 0, -1000, -2];

function filterPositive(array) {
    const arrResult = [];
    let el = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arrResult[el] = array[i];
            el++;
        }        
    }
    return arrResult;
}
console.log(filterPositive(arrMixNumber2));