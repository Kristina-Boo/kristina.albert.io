//Домашка 3
//Задание 1
let password = 'пароль';
let key = prompt('Введите пароль');
if (key === password) {
    console.log ('Пароль ввден верно');
} else {
    console.log ('Пароль введен неправильно');
}
//Задание 2
let c = prompt('Введите число от 0 до 10');
if (c >= 1 && c <= 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}
//Задание 3
let d = prompt('Введите число');
let e = prompt('Введите число');
if (d > 100 || e > 100) {
    console.log ('верно');
} else {
    console.log ('неверно');
}
//Задание 4 Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 
//5, а не строка '23'.
let a = '2';
let b = '3';
a = parseInt(a);
b = parseInt(b);
alert(a + b);


// Задание 5 Почему выводится только ввели что-то не то?

let monthNumber = prompt ('Введите порядковый номер месяца ')
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      console.log ("Зима");
      break;
    case 3:
    case 4:
    case 5:
      console.log ("Весна");
      break;
    case 6:
    case 7:
    case 8:
      console.log ("Лето");
      break;
    case 9:
    case 10:
    case 11:
      console.log ("Осень");
      break;
    // default: monthNumber > 12;
    //   console.log ("Ввели что-то не то");    
  }


//Задание 5 то что получилось
var day = prompt("Введите номер месяца");
switch (day) {
   case '1':
      console.log('Зима');
      break;
      case '2':
      console.log('Зима');
      break;
      case '12':
      console.log('Зима');
      break;
      case '3':
      console.log('Весна');
      break;
      case '4':
      console.log('Весна');
      break;
      case '5':
      console.log('Весна');
      break;
      case '6':
      console.log('Лето');
      break;
      case '7':
      console.log('Лето');
      break;
      case '8':
      console.log('Лето');
      break;
      case '9':
      console.log('Осень');
      break;
      case '10':
      console.log('Осень');
      break;
      case '11':
      console.log('Осень');
      break;
   default:
      console.log('ввели что-то не то');
}

//Дополнительные задания
//Задание 1
let n = prompt('Пожалуйста, введите любое число');










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