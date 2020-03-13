'use strict';
const number = process.argv[2] || 0;
let num = 0;
for(let i=1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);