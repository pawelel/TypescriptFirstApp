"use strict";
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(1, 2));
function add(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, ...[1, 2, 3]));
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5]));
