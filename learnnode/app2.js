

import readline from "readline-sync";

console.log(" Hey there! Let's have a quick friendly chat.\n");

let name = readline.question("1. What's your name? ");
let age = readline.questionInt("2. How old are you? ");
let city = readline.question("3. Which city or town are you from? ");
let occupation = readline.question("4. What do you do (study/work)? ");
let hobby = readline.question("5. What's your favorite hobby? ");
let food = readline.question("6. What's your favorite food? ");
let movie = readline.question("7. What's a movie or show you love rewatching? ");
let music = readline.question("8. What kind of music do you enjoy? ");
let book = readline.question("9. Do you like reading books? (yes/no) ");
let dream = readline.question("10. What's your dream job or goal in life? ");
let pet = readline.question("11. Do you have any pets? (yes/no) ");
let sport = readline.question("12. Do you play or follow any sport? ");
let travel = readline.question("13. What's one place you'd love to visit someday? ");
let morning = readline.question("14. Are you a morning person or a night owl? ");
let coffee = readline.question("15. Tea or coffee? ");
let coding = readline.question("16. Do you like coding? (yes/no) ");
let language = readline.question("17. What programming language do you find most fun? ");
let friends = readline.question("18. Do you enjoy spending time with friends or being alone more? ");
let dreamDay = readline.question("19. What would a perfect day look like for you? ");
let feeling = readline.question("20. How are you feeling right now? ");

console.log("\n--- Summary ---");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Occupation: ${occupation}`);
console.log(`Hobby: ${hobby}`);
console.log(`Favorite Food: ${food}`);
console.log(`Favorite Movie/Show: ${movie}`);
console.log(`Music Taste: ${music}`);
console.log(`Dream Job/Goal: ${dream}`);
console.log(`Dream Travel Spot: ${travel}`);
console.log(`Prefers: ${coffee}`);
console.log(`Favorite Language: ${language}`);
console.log(`Perfect Day: ${dreamDay}`);
console.log(`Current Mood: ${feeling}`);


if (book.toLowerCase() === "yes") {
    console.log(" Nice! Reading keeps your mind sharp.");
} else {
    console.log(" No worries! Everyone has their own way to relax.");
}

if (pet.toLowerCase() === "yes") {
    console.log(" Awesome! Pets make life so much happier.");
} else {
    console.log(" Maybe someday you'll get one!");
}

if (coding.toLowerCase() === "yes") {
    console.log(" That’s great! Coding can be so satisfying, right?");
} else {
    console.log(" That’s okay! It’s not for everyone.");
}

if (morning.toLowerCase().includes("night")) {
    console.log(" Night owls are the creative kind!");
} else {
    console.log(" Early birds get the worm, huh?");
}

if (age < 18) {
    console.log(" You’re still young — enjoy learning and exploring!");
} else if (age >= 18 && age <= 30) {
    console.log(" Perfect age to build dreams and chase goals!");
} else {
    console.log(" You’ve got experience and wisdom — that’s powerful!");
}

console.log("\nThanks for sharing, " + name + "!  It was nice chatting with you.\n");
