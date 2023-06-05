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
const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

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
const userNumb = prompt('Введите любое число от 1 до 10');

