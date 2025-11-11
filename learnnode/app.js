// const readline = require("readline-sync") // before 2025
import readline from "readline-sync" // after 2025

let fullName= readline.question("What is your Name ?  ")
console.log(`my name is ${fullName}`);

let age = readline.questionInt("what's your age :  ")
console.log(`my age is ${age}`);

if (age > 100){
   console.log("Invaild age");
}

let email = readline.questionEMail("Enter you email ID :  ")
console.log(`my email is ${email}`);

let phone = readline.question("Enter your phone number")
console.log(`my phone number is ${phone}`);

let college = readline.question("Enter your college..")
console.log(`my college is ${college}`);

