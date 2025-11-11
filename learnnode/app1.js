import readline from "readline-sync"

let name = readline.question("Enter your name: ");
let age = readline.questionInt("Enter your age: ");
let code = readline.question("Do you like coding? [y/n]: ")

console.log("\n--- Summary ---");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

if (code == "y"){
    console.log("Likes coding : Yes");
} else {
    console.log("Likes coding: No");
}

