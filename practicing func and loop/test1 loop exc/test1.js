const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i < data.length; i++) {
    if(typeof data[i] === 'string') {
        data[i] += " - done";
  } else { 
        data[i] = data[i] * 2;
    }
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
 
for(let i = 0; i < data.length; i++) {
    result[i] = data[data.length - 1 - i];
};

console.log(result);

const lines = 5;
let result = '';


for(let i = 0; i < lines; i++) {
    for(let j = 0; j < lines - i; j++) {
        result += ' ';
        
    }
    for(let k = 0; k < 2 * i + 1; k++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

/*  
-----*
----***
---*****
--*******
-*********
*/