let word = "SCRIPT";

let part1_substr = word.substr(0, 3); 
let part2_substr = word.substr(3, 3);  

console.log("Using substr():");
console.log("Part 1: " + part1_substr);  
console.log("Part 2: " + part2_substr);  

let part1_substring = word.substring(0, 3);  
let part2_substring = word.substring(3, 6);  

console.log("\nUsing substring():");
console.log("Part 1: " + part1_substring); 
console.log("Part 2: " + part2_substring);  
