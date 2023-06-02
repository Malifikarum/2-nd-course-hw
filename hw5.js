//Задание 1
const comparison = (a, b) => {
    let result;

    if (a < b) {
        result = a;
    }
    else {
        result = b;
    }
    return result;
}
console.log(comparison(3, 6));

//Задание 2
const userNumber = (a) => {
    let result = a % 2;

    if (result === 0) {
        alert('Число четное');
    }
    else {
        alert('Число нечетное');
    }
}

userNumber(3);

//Задание 3
function square(a) {
    console.log(a ** 2);
}

square(3);

const square2 = (a) => a ** 2;

alert(square2(4));

//Задание 4
function userAge(a) {
    a = prompt('Сколько вам лет?');
    if (a < 0) {
        alert('Вы ввели неправильное значение');
    }
    else if (a >= 0 && a <= 12) {
        alert('Привет, друг!');
    }
    else if (a >= 13) {
        alert('Добро пожаловать!');
    }
    else {
        alert('Это даже не число, чудик -_-');
    }
}

userAge();

//Задание 5
function multNumbers(a, b) {
    a = prompt('Введите первое число');
    b = prompt('Введите второе число');

    if (isNaN(a) || isNaN(b)) {
        console.log('Одно или оба значения не являются числом');
    }
    else {
        return (a * b);
    }
}

console.log(multNumbers());

//Задание 6

function cube(a) {
    // a = prompt('Введите число'); Закомментировано ради самостоятельной проверки через цикл.

    if (isNaN(a)) {
        console.log('Переданный параметр не является числом');
    }
    else {
        let result = a ** 3;
        console.log(`${a} в кубе равняется ${result}`);
    }
}

// cube(); Закомментировано ради самостоятельной проверки через цикл.

let i = 0;
while (i >= 0 && i <= 10) {
    cube(i);
    i++;
}

//Задание 7
const circle1 = {
    radius: 5,
    getArea() {
        let area = Math.PI * this.radius ** 2;
        return area;
    },
    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
}

const circle2 = {
    radius: 7,
    getArea() {
        let area = Math.PI * this.radius ** 2;
        return area;
    },
    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8

function season(monthNumber) {
    monthNumber = prompt('Введите номер месяца');

    if (monthNumber === 12 || monthNumber >= 1 && monthNumber <= 2) {
        result = ('Зима');
    }
    else if (monthNumber >= 3 && monthNumber <= 5) {
        result = ('Весна');
    }
    else if (monthNumber >= 6 && monthNumber <= 8) {
        result = ('Лето');
    }
    else if (monthNumber >= 9 && monthNumber <= 11) {
        result = ('Осень');
    }
    else {
        result = ('Вы ввели что-то не то');
    }

    return result;
}

console.log(season());