// Домашка 5

//Задание 1
function minNumber(a, b) {
    if (a < b) {
      return a;
    } 
    else if (a = b) {
      return a;
    }
    else {
      return b;
    }
}
// let rezult = minNumber(8, 4)
// console.log(rezult);
let rezult = minNumber(6, 6)
console.log(rezult);

//Задание 2
function isEven(a) {
    if (a % 2 === 0){
        return 'Число чётное'
    }
    else {
        return 'Число нечётное'
    }   
}
console.log(isEven(33));
console.log(isEven(42));

const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечётное';
console.log(isOdd(33));
console.log(isOdd(42));


// Задание 3
function square(number) {
    console.log(number ** 2); 
}
square(5);
const up = (n) => n ** 2;
console.log(up(5));


//Задание 4
function checkAge() {
    let age = +(prompt('Сколько вам лет?'));
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    }

    else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    }
    
    else{
        alert('Добро пожаловать!'); 
    }
}
checkAge();

// Задание 5
// Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:

// Проверяет, являются ли переданные параметры корректными числами.
// Подсказка: используйте преобразование типов и 
// isNaN().

// Если нет — возвращает строку 
// 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то возвращает произведение данных чисел.
function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } 
    else {
        return a * b;    
    }
}
console.log(multiplyNumbers(25, 3));



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
function cubeNumber() {
let num = prompt('Введите число')
    if (isNaN(num)) {
    alert('Переданный параметр не является числом');
    }
    else {
    return ('${num} в кубе равняется ${n ** 3}');
    }
}
console.log(cubeNumber(4));

// Задание 7
// Создайте два объекта, circle1 и circle2, каждый из 
// которых имеет свойство radius.
// Оба объекта должны иметь:
// Метод getArea, который возвращает площадь круга, 
// вычисляемую через радиус.
// Метод getPerimeter, который возвращает периметр
// окружности.
function getArea(radius) {
    return (Math.PI * this.radius ** 2);
    }
function getPerimeter(radius) {
    return (2 * Math.PI * this.radius);
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    r: 8,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetPerimeter());



//Тенировка this
function getRectangleArea() {
    return this.width * this.height;
 }
 function getRectanglePerimeter() {
    return this.width * 2 + this.height * 2;
 }
const square1 = {
    width: 22,
    height: 11,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
const square2 = {
    width: 47,
    height: 12,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
console.log(square1.getArea());
console.log(square1.getPerimeter());
console.log(square2.getArea());
console.log(square2.getPerimeter());



//Задание из функции-  методы объектов
const user = {
    name: "Вова",
    age: "38",
    city: "Бильбао",
    getInfo() {
        return `Пользователь ${user.name}, возраст ${user.age} проживает в городе ${user.city}`;
    }
}    
console.log(user.getInfo());