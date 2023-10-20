'use strict';

function saySomething(text) {
    console.log(text);
}
saySomething('Hello!');


const usdCurr = 40;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    return result * discount;
}

const res = convert (1000, usdCurr);
console.log(promotion(res));
 

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 

function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Vlad'));

//2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

function returnNeighboringNumbers(num) {
   let arr = [];
   arr[0] = num - 1;
   arr[1] = num;
   arr[2] = num + 1;
   return arr;
}

console.log(returnNeighboringNumbers(5));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
//(Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
//После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) { // if type of times is not number or times is equal or less than 0 it returns num
        return num;
    }

    let str = ''; // place to put our string

    for (let i = 1; i <= times; i++) { // new variable that equals 1 and loop will stop when it is equal to times
        if (i === times) {
            str += `${num * i}`; //its for the last times to be without '---'
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`; // its for the first times
            // it is the same as:
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));