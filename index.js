#! /usr/bin/env node 
import inquirer from "inquirer";
// 1) computer will genersate a randam number   - Done
// 2) User input for guessing number -Done
// 3) compare user input with computer genersated number and show resuilt - Done
const randamNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randamNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
