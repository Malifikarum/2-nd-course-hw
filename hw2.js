// 1 задание
let a = 10;
alert(a);
a = 20;
alert(a);
// 2 задание
const iphone1 = 2007;
alert(iphone1);
// 3 задание
const creatorName = 'Брендон Айк (Brendon Eich)';
alert(creatorName);
// 4 задание
let number1 = 10;
let number2 = 2;
alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);
// 5 задание
let result = number2**5;
alert(result);
// 6 задание
a = 9;
let b = 2;
alert(a % b);
// 7 задание
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// 8 задание
let age = prompt('Сколько тебе лет?');
alert(age);
// 9 задание
let user = {
    name: 'Саша',
    age: 27,
    isAdmin: true
}
// 9.1 задание
user['city of residence'] = 'Орел';
// 9.2 задание
user.age = 28;
// 9.3 задание
delete user['city of residence'];
// 9.4 задание
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
// 10 задание
let userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);
