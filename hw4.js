//Задание 1
for (i = 0; i < 2; i++) {
    console.log('Привет');
}
//Задание 2
for (i = 1; i <= 5; i++) {
    console.log(i);
}
//Задание 3
for (i = 7; i <= 22; i++) {
    console.log(i);
}
//Задание 4
const worker = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let man in worker) {
    console.log(`${man} - зарплата ${worker[man]} долларов`);
}
//Задание 5
let num = 0;
let n = 1000;
for (; n > 50; n = n / 2) {
    console.log(n);
    num++;
    if (n/2 < 50){
        break;
    }
}
console.log(`Финальное число - ${n}
Количество итераций - ${num}`);
//Задание 6
let fri = 2;
for(; fri<=31;fri = fri+7){
    console.log(`Сегодня пятнимца, ${fri}-е число. Необходимо подготовить отчет.`)
}