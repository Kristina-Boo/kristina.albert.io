// Домашка 5
//Игра "Угадай число"

// function gameNumber(){
//     let userAnswer;
//     userAnswer = Number (prompt('Угадай число от 1 до 100'));
//     const number = Math. floor (Math.random () * 100) + 1;
//     while (userAnswer !== number) 
//        if (userAnswer < number) {
//         alert(`Не угадал, больше. Попробуй еще!`);
//         userAnswer = Number (prompt('Угадай число от 1 до 100'));
//         }
//        else if (userAnswer > number) {
//         alert(`Не угадал, меньше. Вот-вот получится!`);
//         userAnswer = Number (prompt('Угадай число от 1 до 100'));
//         }
//     alert ("Угадал, молодец!!!");
// }

//Задание 1
// function minNumber(a, b) {
//     if (a < b) {
//       return a;
//     } 
//     else if (a = b) {
//       return a;
//     }
//     else {
//       return b;
//     }
// }
// // let rezult = minNumber(8, 4)
// // console.log(rezult);
// let rezult = minNumber(6, 6)
// console.log(rezult);

//Задание 2
// function even(a) {
//     if (a % 2 === 0){
//         return 'Число чётное'
//     }
//     else {
//         return 'Число нечётное'
//     }   
// }
// let rezult = even(33);
// console.log(rezult);

// задание 3
//Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
// function square(num) {
//     console.log(num * num);
// }
// square(5);

//Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — так, чтобы потом это значение можно было использовать.
// function square (num) {
//     return (num * num)
// }
// let rezult = square(33);
// console.log(rezult);

//Задание 4
// function checkAge() {
//     let age = Number (prompt('Сколько вам лет?'));
    
//     if (age < 0) {
//         console.log('Вы ввели неправильное значение');
//     }

//     else if (age >= 0 && age <= 12) {
//         console.log('Привет, друг!');
//     }
    
//     else{
//         console.log('Добро пожаловать!'); 
//     }
// }
// checkAge();

// Задание 5
// Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:

// Проверяет, являются ли переданные параметры корректными числами.
// Подсказка: используйте преобразование типов и 
// isNaN().

// Если нет — возвращает строку 
// 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то возвращает произведение данных чисел.
// function multiplyNumbers(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } 
//     else {
//         const result = a * b;
//         return result;
//     }
// }

// // Пример использования функции
// let result = multiplyNumbers('15', '23');
// console.log("Результат умножения:", result); // Вывод в консоль: Результат умножения: 15


// Задание 6
// Напишите функцию, которая выполняет следующий алгоритм:

// Запрашивает у пользователя число.
// Проверяет, является ли введенное значение числом.
// Если значение не является числом, возвращает строку 
// 'Переданный параметр не является числом'
// .
// Если значение является числом, возвращает строку 
// 'n в кубе равняется <получившееся значение>'
// , где 
// n
//  — введенное число, а 
// <получившееся значение>
//  — число, возведенное в куб.
// Проверьте работу функции с числами от 
// 0
//  до 
// 10
// .
// function cubeNumber() {
// let num = prompt('Введите число')
//     if (isNaN(num)) {
//     alert('Переданный параметр не является числом');
//     }
//     else {
//     const rezult = num ** 3;
//     alert(rezult);
//     }
// }
// cubeNumber();

// Задание 7
// Создайте два объекта, circle1 и circle2, каждый из 
// которых имеет свойство radius.
// Оба объекта должны иметь:
// Метод getArea, который возвращает площадь круга, 
// вычисляемую через радиус.
// Метод getPerimeter, который возвращает периметр
// окружности.

// const circle1 = {
//     r: 6,
//     function getArea(r) {
//         let pie_value = Math.PI;
//         return (pie_value * r * r);
//     }

//     function getPerimeter(r) {
//         let pie_value = Math.PI;
//         return (2 * pie_value * r);
//     }
// }
// console.log(`площадь круга ${getArea}, длина окружности ${getPerimeter}`);

const circle2 = {
    r: 8,
    function getArea(r) {
        let pie_value = Math.PI;
        return (pie_value * r * r);
      }
    function getPerimeter(r) {
        let pie_value = Math.PI;
        return (2 * pie_value * r);
      }
}
console.log(`площадь круга ${getArea}, длина окружности ${getPerimeter}`);


function getArea(r) {
    let pie_value = Math.PI;
    return (pie_value * r * r);
  }
function getPerimeter(r) {
    let pie_value = Math.PI;
    return (2 * pie_value * r);
  }
  // Driver code 
  let r, Area;
  r = 5;
  
  // Function calling 
  Area = getArea(r);
  Perimeter = getPerimeter(r)
  
  // displaying the area 
  console.log("Площадь круга1 " + Area);


//Тенировка this
// function getRectangleArea() {
//     return this.width * this.height;
//  }
//  function getRectanglePerimeter() {
//     return this.width * 2 + this.height * 2;
//  }
// const square1 = {
//     width: 22,
//     height: 11,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }
// const square2 = {
//     width: 47,
//     height: 12,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }
// console.log(square1.getArea());
// console.log(square1.getPerimeter());
// console.log(square2.getArea());
// console.log(square2.getPerimeter());



//Задание из функции-  методы объектов
// const user = {
//     name: "Вова",
//     age: "38",
//     city: "Бильбао",
//     getInfo() {
//         return `Пользователь ${user.name}, возраст ${user.age} проживает в городе ${user.city}`;
//     }
// }    
// console.log(user.getInfo());





// //Домашка 4
// //Задание 1
// let hi = 0
// do {console.log('Привет');
//     hi++; 
// } while (hi < 2);


// for (let i = 0; i < 2; i++) {
//     console.log('Привет');
    
// }


// //Задание 2 Выведите в консоль цифры от 1 до 5.
// let i = 1;
// do {
//    console.log(i);
//    i++;
// } while(i <= 5);

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// //Задание 3 Выведите в консоль числа от 7 до 22.
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }

// // Задание 4
// // Есть объект (назовем его obj), который содержит следующие пары ключ-значение:
// // "Коля" : '200'
// // "Вася" : '300'
// // "Петя" : '400'
// // Эти пары представляют собой имена сотрудников и их зарплаты в долларах. Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.
// const obj = {
//    "Коля" : '200',
//    "Вася" : '300',
//    "Петя" : '400' 
// }
// for (const key in obj) {
//   console.log(`${key} - ${obj[key]}`);
// }
// // Задание 5
// // Дано число 
// // n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50.

// // Определите, какое число получится в результате.
// // Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную 
// // num.
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n /= 2;
//     console.log(n); 
//     num++  
// }
// console.log(`Количество циклов: ${num}`);
// //Задание 6
// let dayFriday = 6;
// let allDay = 31;
// for (let i = dayFriday; i <= allDay; i += 7) {
//     console.log(`Сегодня пятница ${i}-е число, отправь отчет`);
// }

// //Дополнительные задания
// //Задание 1
// let k = 100;
// let iter = 0;
// while (k >= 0) {
//     k -= 7;
//     console.log(k);
//     iter++
// }
// console.log(`Количество циклов: ${iter}`);

// //Задание 2


// //Домашка 3
// //Задание 1
// // let password = 'пароль';
// // let key = prompt('Введите пароль');
// // if (key === password) {
// //     console.log ('Пароль ввден верно');
// // } else {
// //     console.log ('Пароль введен неправильно');
// // }
// //Задание 2
// // let c = prompt('Введите число от 0 до 10');
// // if (c >= 1 && c <= 10) {
// //     console.log ('Верно');
// // } else {
// //     console.log ('Неверно');
// // }
// //Задание 3
// // let d = prompt('Введите число');
// // let e = prompt('Введите число');
// // if (d > 100 || e > 100) {
// //     console.log ('верно');
// // } else {
// //     console.log ('неверно');
// // }
// //Задание 4 Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 
// //5, а не строка '23'.
// // let a = '2';
// // let b = '3';
// // a = parseInt(a);
// // b = parseInt(b);
// // alert(a + b);


// // Задание 5 Почему выводится только ввели что-то не то?

// // let monthNumber = prompt ('Введите порядковый номер месяца ')
// // switch (monthNumber) {
// //     case 1:
// //     case 2:
// //     case 12:
// //       console.log ("Зима");
// //       break;
// //     case 3:
// //     case 4:
// //     case 5:
// //       console.log ("Весна");
// //       break;
// //     case 6:
// //     case 7:
// //     case 8:
// //       console.log ("Лето");
// //       break;
// //     case 9:
// //     case 10:
// //     case 11:
// //       console.log ("Осень");
// //       break;
// //     // default: monthNumber > 12;
// //     //   console.log ("Ввели что-то не то");    
// //   }


// //Задание 5 то что получилось
// // var day = prompt("Введите номер месяца");
// // switch (day) {
// //    case '1':
// //       console.log('Зима');
// //       break;
// //       case '2':
// //       console.log('Зима');
// //       break;
// //       case '12':
// //       console.log('Зима');
// //       break;
// //       case '3':
// //       console.log('Весна');
// //       break;
// //       case '4':
// //       console.log('Весна');
// //       break;
// //       case '5':
// //       console.log('Весна');
// //       break;
// //       case '6':
// //       console.log('Лето');
// //       break;
// //       case '7':
// //       console.log('Лето');
// //       break;
// //       case '8':
// //       console.log('Лето');
// //       break;
// //       case '9':
// //       console.log('Осень');
// //       break;
// //       case '10':
// //       console.log('Осень');
// //       break;
// //       case '11':
// //       console.log('Осень');
// //       break;
// //    default:
// //       console.log('ввели что-то не то');
// // }

// //Дополнительные задания
// //Задание 1
// // let n = prompt('Пожалуйста, введите любое число');










// //Домашка 2
// // let a = 20;
// // alert(a);
// // const date = 2007;
// // alert('Год выхода первого iPhone - '+ date);
// // const creatorJs = 'Brendan Eich';
// // alert('Создатель JS - '+ creatorJs);
// // let a = 10;
// // let b = 2;
// // let sum = a + b;
// // alert  ('сумма A и B: '+ sum);
// // let multi = a * b;
// // alert  ('Результат умножения A и B: '+ multi);
// // let division = a / b;
// // alert  ('Результат деления A на B: '+ division);
// // let subtraction = a - b;
// // alert  ('Результат вычитания B от A: '+ subtraction);
// // let rezult = 2 ** 5;
// // alert(rezult);
// // let a = 9;
// // let b = 2;
// // let rezult = a % b;
// // alert('Остаток от деления A на B: '+ rezult);
// // let num = 1;
// // num += 5;
// // num -= 3;
// // num *= 7;
// // num /= 3;
// // num++;
// // num--;
// // alert(num);
// // let age = Number (prompt('Сколько вам лет?'));
// // alert('Количество полных лет - ' + age);
// // const user = {
// //     name: String('Вася'),
// //     age: Number(35),
// //     isAdmin: Boolean(1) 
// // }
// // const name = prompt("Как вас зовут?");
// // alert(`Привет, ${name}!`);
// // let number = Number(prompt('Напиши любое число'));
// // let rezult = number * 2;
// // alert(`Умножаем на 2 и получаем ${rezult}`);
// // let rezult1 = rezult + 10;
// // alert(`Прибавляем к ${rezult} 10 и получаем ${rezult1}`);
