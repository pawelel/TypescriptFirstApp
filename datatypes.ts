let fname: string;
fname = 'Paweł';

let newname = fname;
console.log(newname);

let numList = [1,2,3];
let result = numList.reduce((a, b) => a + b);
console.log(result);

const enum Color {
     Red, Green, Blue }
let c: Color = Color.Red;

let swapNumbers: [number,number];

function swapNums(num1:number, num2:number): [number, number]{
    return [num2, num1]
}

swapNumbers = swapNums(10,20);
console.log(swapNumbers);

swapNumbers[0];

console.log(swapNumbers);

