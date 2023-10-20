'use strict';

// Pyramid in two loops
const lines = 5;
const largestWidth = 2 * lines - 1;

for (let i = 0; i < lines; i++) {
  let line = "";

  for (let j = 0; j < largestWidth; j++) {
    if (j < lines - i - 1 || j >= lines + i) {
      line += " "; 
    } else {
      line += "*"; 
    }
  }

  console.log(line);
}


const lines = 5;
let result = '';

for(let i = 0; i < lines; i++) {
    for(let j = 0; j < lines - i; j++) {
        result += ' ';
    }
for(let j = 0; j < 2 * i + 1; j++) {
    result += '*';
}
result += '\n';
}
console.log(result);


const lines = 5;

for(let i = 0; i < lines; i++) {
    let line = '';

    for(let j = 0; j <= lines + i; j++) {
        if (j < lines - i - 1) {
            line += "-";
        } else if (j < lines - i + 2 * i) {
            line += "*";
        }
    }
    console.log(line);
}


