//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => {
    return a.age - b.age;
}));

//Задание 2
function isPositive(number) {
    if (number > 0){
        return number;
    }
}
function isMale(human) {
    if (human.gender === 'male') {
        return human;
    }
}
function filter(array, ruleFunction) {
const output = [];
for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
        output.push(ruleFunction(array[i]));
    }
}
return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const arrPeople = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(arrPeople, isMale));

//Задание 3
function timerDate(gap, deadline) {
    let nowDate = new Date;
    console.log(nowDate);

    const interval = setInterval(() => {
        nowDate = new Date;
        console.log(nowDate);
    }, gap * 1000);
    
    setTimeout(() => {
        clearInterval(interval);
        console.log(`${deadline} секунд прошло`);
    }, deadline * 1000);  
}

timerDate(3, 30);

//Задание 4
function delayForSecond1(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond1(function () {
  console.log('Привет, Глеб!');
});

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {
        cb(); 
        }
    }, 1000);
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Иван'));  //Сменил имя для наглядности в console
