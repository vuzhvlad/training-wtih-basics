'use strict'

let vlad = 'VlAd';
vlad.toLowerCase();

console.log(vlad); // give VlAd to console, as a result you have to save this data to a variable.

let fruits = 'Some fruits';

console.log(fruits.indexOf('vlad')); // logs '-1' to console because it cannot find this element 
console.log(fruits.indexOf('fruits')); // logs '5' to console(it is where this element starts) 


const log = 'Hello World';

console.log(log.slice(6, 11)); // logs 'World' to console because it slices the element inside of those indexes starts at 6 ends at 11
console.log(log.slice(6)); // the same

console.log(log.substring(6, 11)); // the same


const num = 12.2;

console.log(Math.round(num)); // okruglit' number

const test = '12px';
console.log(parseInt(test)); // makes string into a number with rounded number 12
console.log(parseFloat(test)); // makes string into a number wtihout rounded number 12.2







