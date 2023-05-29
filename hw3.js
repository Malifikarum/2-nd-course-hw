//Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
let resultPassword = password === userPassword ? 'Пароль введен верно' : 'Пароль введен неправильно';
console.log (resultPassword);

//Задание 2
let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Не верно');
}

//Задание 3
let d = 98;
let e = 113;
if (d > 100 || e > 100){
    console.log('Верно');
}
else {
    console.log('Не верно');
}

//Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
console.log(a + b);

//Задание 5
let monthNumber = 13;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;    
    case 9:
    case 10:
    case 11:
    console.log('Осень');
    break;
    default: console.log('Такого месяца не существует');
        break;
}

//Задание 6
//Макет, адаптив и эффекты наведения созданы.

//Задание 7
let x = prompt('Пожалуйста, введите любое число');
let newX;
if (x = Number(x)){
    newX = x;
}
else{
    console.log('Вы ввели не число');
}

if (newX % 2 === 0){
    console.log('Число четное');
}
else if(newX % 2 === 1) {
    console.log('Число нечетное');
}

//Задание 8
let clientOS = 1;
if (clientOS === 0){
    console.log('Установите версию приложения для iOS по ссылке');
}
else if(clientOS === 1){
    console.log('Установите версию приложения для Android по ссылке');
}

//Задание 9
let clientDeviceYear = 2015;
if (clientDeviceYear >= 2015 && clientOS === 0){
    console.log('Установите версию приложения для iOS по ссылке');
}
else if (clientDeviceYear < 2015 && clientOS === 0){
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}
else if (clientDeviceYear >= 2015 && clientOS === 1){
    console.log('Установите версию приложения для Android по ссылке');
}
else if (clientDeviceYear < 2015 && clientOS === 1){
    console.log('Установите облегченную версию приложения для Android по ссылке');
}
