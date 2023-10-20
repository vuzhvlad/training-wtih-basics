'use strict'

function fib(num) { //fibonachi #29
    if(typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) { // checking if it is not a number, equal/less than 0 and is not round number
        return 'error';
    }

    let fibNum = ''; //main str
    let first = 0; //first num
    let second = 1;  //sec num

    for(let i = 0; i < num; i++) {
        if(i + 1 === num) { // for the last number to be without space in the end
            fibNum += `${first}`;
        } else {             // numbers with space after each other
            fibNum += `${first}`;
            fibNum += ' ';
        }

        // formula for fibb numbers with loop third equals first and second 
        let third = first + second;
        first = second; // every loop numbers go further so first equals second and
        second = third; // second equals third and it always prints first which is already a right number for the next cycle of loop
    }
    return fibNum
}

console.log(fib(11));