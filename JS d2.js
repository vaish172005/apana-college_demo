let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
console.log("Addition:", addition);  // 10 + 5 = 15

let subtraction = num1 - num2;
console.log("Subtraction:", subtraction);  // 10 - 5 = 5

let multiplication = num1 * num2;
console.log("Multiplication:", multiplication);  // 10 * 5 = 50

let remainder = num1 % num2;
console.log("Remainder:", remainder);  // 10 % 5 = 0

let division = num1 / num2;
console.log("Division:", division);  // 10 / 5 = 2

let square = num1 * num1;
console.log("Square of num1:", square);  // 10 * 10 = 100


num1 += num2;  
console.log("After Addition Assignment (num1 += num2):", num1);  

console.log("After Subtraction Assignment (num1 -= num2):", num1);  

num1 *= num2;  
console.log("After Multiplication Assignment (num1 *= num2):", num1);  
num1 %= num2;  
console.log("After Remainder Assignment (num1 %= num2):", num1);  

num1 /= num2; 
console.log("After Division Assignment (num1 /= num2):", num1);  

num1 = 10;  
num1 *= num1;  
console.log("Square using Assignment (num1 *= num1):", num1); 
