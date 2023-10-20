let result = '';

function thirdResult(num, times) {
    if(typeof(num) !== 'number' || num <= 0) {
        return result += num;
    } 
    
    if(typeof(num) === 'number' && num > 0) {
        for(let i = 1; i <= times; i++) {
            if(times === i) {
                result += num * times;
                break;
            
            } else {
                result += num * i + '---';
            }
        }
    } 
}

thirdResult('gfgf', 12);
console.log(result);

let pyramid = '';
const height = 5;

for(let i = 1; i < height; i++) {
    for(let j = 1; j < height - i; j++) {
        pyramid += '-';
    }
    for(let k = 0; k < i * 2 - 1; k++) {
    pyramid += '*';
    }
    pyramid += '\n';
}

console.log(pyramid);
//repeated how to build pyramid(didnt work out form the first try)