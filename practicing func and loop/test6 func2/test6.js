'use strict'

function getTimeFromMinutes(minutesInTotal) { //makes hours and minutes from only minutes
    if(typeof(minutesInTotal) !== 'number' || minutesInTotal < 0 || !Number.isInteger(minutesInTotal)) { // !Nubmer.isInteger() - it is NOT a round number
        return 'wrong time :(';
    } else {
        let hours = Math.floor(minutesInTotal / 60); // Math.floor - rounds a number down to the nearest integer
        let minutes = minutesInTotal % 60; // % - gives you the rest form dividing a number

        let hourStr;
    
        switch(hours) { // switch example to get a right ending in hour or hours
            case 0:
            case 1:
                hourStr = 'hour';
                break;
            default:
                hourStr = 'hours';
        }

        return `Time is ${hours} ${hourStr} and ${minutes} minutes`;
    }
}

console.log(getTimeFromMinutes(50));

function getTimeFromMinutes(minutesTotal) { // another example
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(180));

function findMaxNumber(a, b, c, d) { // function finds the max number between all the four numbers and returns it and if it is not a number it returns 0
    if(typeof(a, b, c, d) !== 'number' || a === null || b === null || c === null || d ===null) {
        return 0;
    } else if(a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else if (d > a && d > b && d > c) {
        return d;
    }
}

console.log(findMaxNumber(5, 111, 9));

function findMaxNumber(a, b ,c, d) { // the same example with Math.max()
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
 console.log(findMaxNumber(1, 2, 3));