for(let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


let result = '';
const length = 10;

for (i = 1; i < length; i ++) {

    for (j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

let i = 5;
while(i < 11) {
    console.log(i);
    i++
};

let j = 5;
do {
    console.log(j);
    j++;
} while(j < 11);

for(i = 20; i > 9; i--) {
    if( i === 13) {
        break;
    }
    console.log(i);
};

for(i = 2; i < 12;  i += 2) {
    if(i === 12) {
        break;
    }
    console.log(i);
};

let k = 2;
while(k <= 16) {
    k++;
    if(k % 2 === 0) {
        continue;
    } else if (k === 17) {
        break;
    } else {
        console.log(k);
    }
    
};

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
};

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for(k = 0; k < 6; k++) {
        arrayOfNumbers[k] = k + 5;
     
    };
    // Не трогаем
    return arrayOfNumbers;
}

console.log(fifthTask());