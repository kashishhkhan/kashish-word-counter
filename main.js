#! /usr/bin/env node
// This line is called a shebang, and it tells the OS to run it with node.js
// Import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant "answers" and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to console
console.log(words);
// Print the word count of the sentence to console
console.log(`Your sentence word count is ${words.length}`);
