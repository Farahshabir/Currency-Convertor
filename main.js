#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let currencyConversation = {
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0033,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.27,
        "GBP": 1,
        "PKR": 351.16,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.5,
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: `${chalk.yellowBright.bold(`What currency do you want to convert from?`)}`,
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: `${chalk.greenBright.bold(`What currency do you want to convert to?`)}`,
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: `${chalk.magentaBright.bold(`How much currency do you want to convert?`)}`,
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencyConversation[from][to] * amount;
    console.log(`${chalk.bold.whiteBright.bgCyanBright(`Your conversion from`)}  ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid conversion");
}
