//Домашка 4
//Задание 1
let hi = 0
do {console.log('Привет');
    hi++; 
} while (hi < 2);


for (let i = 0; i < 2; i++) {
    console.log('Привет');
    
}


//Задание 2 Выведите в консоль цифры от 1 до 5.
let i = 1;
do {
   console.log(i);
   i++;
} while(i <= 5);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3 Выведите в консоль числа от 7 до 22.
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
// Есть объект (назовем его obj), который содержит следующие пары ключ-значение:
// "Коля" : '200'
// "Вася" : '300'
// "Петя" : '400'
// Эти пары представляют собой имена сотрудников и их зарплаты в долларах. Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.
const obj = {
   "Коля" : '200',
   "Вася" : '300',
   "Петя" : '400' 
}
for (const key in obj) {
  console.log(`${key} - ${obj[key]}`);
}
// Задание 5
// Дано число 
// n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50.

// Определите, какое число получится в результате.
// Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную 
// num.
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n); 
    num++  
}
console.log(`Количество циклов: ${num}`);
//Задание 6
let dayFriday = 6;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница ${i}-е число, отправь отчет`);
}

//Дополнительные задания
//Задание 1
let k = 100;
let iter = 0;
while (k >= 0) {
    k -= 7;
    console.log(k);
    iter++
}
console.log(`Количество циклов: ${iter}`);

//Задание 2


//Домашка 3
//Задание 1
// let password = 'пароль';
// let key = prompt('Введите пароль');
// if (key === password) {
//     console.log ('Пароль ввден верно');
// } else {
//     console.log ('Пароль введен неправильно');
// }
//Задание 2
// let c = prompt('Введите число от 0 до 10');
// if (c >= 1 && c <= 10) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }
//Задание 3
// let d = prompt('Введите число');
// let e = prompt('Введите число');
// if (d > 100 || e > 100) {
//     console.log ('верно');
// } else {
//     console.log ('неверно');
// }
//Задание 4 Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 
//5, а не строка '23'.
// let a = '2';
// let b = '3';
// a = parseInt(a);
// b = parseInt(b);
// alert(a + b);


// Задание 5 Почему выводится только ввели что-то не то?

// let monthNumber = prompt ('Введите порядковый номер месяца ')
// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//       console.log ("Зима");
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log ("Весна");
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log ("Лето");
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log ("Осень");
//       break;
//     // default: monthNumber > 12;
//     //   console.log ("Ввели что-то не то");    
//   }


//Задание 5 то что получилось
// var day = prompt("Введите номер месяца");
// switch (day) {
//    case '1':
//       console.log('Зима');
//       break;
//       case '2':
//       console.log('Зима');
//       break;
//       case '12':
//       console.log('Зима');
//       break;
//       case '3':
//       console.log('Весна');
//       break;
//       case '4':
//       console.log('Весна');
//       break;
//       case '5':
//       console.log('Весна');
//       break;
//       case '6':
//       console.log('Лето');
//       break;
//       case '7':
//       console.log('Лето');
//       break;
//       case '8':
//       console.log('Лето');
//       break;
//       case '9':
//       console.log('Осень');
//       break;
//       case '10':
//       console.log('Осень');
//       break;
//       case '11':
//       console.log('Осень');
//       break;
//    default:
//       console.log('ввели что-то не то');
// }

//Дополнительные задания
//Задание 1
// let n = prompt('Пожалуйста, введите любое число');










//Домашка 2
// let a = 20;
// alert(a);
// const date = 2007;
// alert('Год выхода первого iPhone - '+ date);
// const creatorJs = 'Brendan Eich';
// alert('Создатель JS - '+ creatorJs);
// let a = 10;
// let b = 2;
// let sum = a + b;
// alert  ('сумма A и B: '+ sum);
// let multi = a * b;
// alert  ('Результат умножения A и B: '+ multi);
// let division = a / b;
// alert  ('Результат деления A на B: '+ division);
// let subtraction = a - b;
// alert  ('Результат вычитания B от A: '+ subtraction);
// let rezult = 2 ** 5;
// alert(rezult);
// let a = 9;
// let b = 2;
// let rezult = a % b;
// alert('Остаток от деления A на B: '+ rezult);
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);
// let age = Number (prompt('Сколько вам лет?'));
// alert('Количество полных лет - ' + age);
// const user = {
//     name: String('Вася'),
//     age: Number(35),
//     isAdmin: Boolean(1) 
// }
// const name = prompt("Как вас зовут?");
// alert(`Привет, ${name}!`);
// let number = Number(prompt('Напиши любое число'));
// let rezult = number * 2;
// alert(`Умножаем на 2 и получаем ${rezult}`);
// let rezult1 = rezult + 10;
// alert(`Прибавляем к ${rezult} 10 и получаем ${rezult1}`);
