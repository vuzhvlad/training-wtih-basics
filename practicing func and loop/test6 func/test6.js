'use strict'

function calculateVolumeArea(num) {
    let a;
    let b;
    if(typeof(num) === 'number' & num >= 1 ) {
        a = 6 * (num * num);
        b = num * num * num;
        console.log(`Square of cube is: ${b} and Surface area is: ${a}.`);
    } else {
        console.log("error");
    }
}

calculateVolumeArea('123');
//function for square of cube and surface area of cube

//the same function in another way
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) { // if it is not a number, it is less than 0 and it is not a round number
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(num) { // function to find your room
    if(typeof(num) === 'number' && num >= 1 && num <= 36) {
        for(let i = 1; i <= 36; i++) {
            if(i >= 1 && i <= 4 && num >= 1 && num <= 4) {
                console.log('Your room is number: 1');
                break;
            } else if(i >= 5 && i <= 8 && num >= 5 && num <= 8) {
                console.log('Your room is number: 2');
                break;
            } else if(i >= 9 && i <= 12 && num >= 9 && num <= 12) {
                console.log('Your room is number: 3');
                break;
            } else if(i >= 13 && i <= 16 && num >= 13 && num <= 16) {
                console.log('Your room is number: 4');
                break;
            } else if(i >= 17 && i <= 20 && num >= 17 && num <= 20) {
                console.log('Your room is number: 5');
                break;
            } else if(i >= 21 && i <= 24 && num >= 21 && num <= 24) {
                console.log('Your room is number: 6');
                break;
            } else if(i >= 25 && i <= 28 && num >= 25 && num <= 28) {
                console.log('Your room is number: 7');
                break;
            } else if(i >= 29 && i <= 32 && num >= 29 && num <= 32) {
                console.log('Your room is number: 8');
                break;
            } else if(i >= 33 & i <= 36 && num >= 33 && num <= 36) {
                console.log('Your room is number: 9');
                break;
            } 
        }
    } else {
        console.log('Check your number again.');
    }
}

getCoupeNumber(37);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4); // rounds a number rounded UP to the nearest integer
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(33));
