"use strict";
let fname;
fname = 'Paweł';
let newname = fname;
console.log(newname);
let numList = [1, 2, 3];
let result = numList.reduce((a, b) => a + b);
console.log(result);
let c = 0 /* Color.Red */;
let swapNumbers;
function swapNums(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNums(10, 20);
console.log(swapNumbers);
swapNumbers[0];
console.log(swapNumbers);
