let vegetables = ["Carrot", "Potato", "Cucumber", "Tomato"];

vegetables.push("Broccoli");
console.log("After PUSH:", vegetables); 

let poppedVegetable = vegetables.pop();
console.log("After POP:", vegetables); 
console.log("Popped Vegetable:", poppedVegetable); 

let shiftedVegetable = vegetables.shift();
console.log("After SHIFT:", vegetables); 
console.log("Shifted Vegetable:", shiftedVegetable); 

vegetables.unshift("Spinach");
console.log("After UNSHIFT:", vegetables); 
