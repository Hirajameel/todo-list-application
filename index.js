#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magentaBright.bold("\n \t Wellcome to Enjoy Code With Hira - TODO-LIST APP\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("Enter Your New Task :"),
        },
    ]);
    todolist.push(addTask.task);
    console.log(chalk.blueBright(`${addTask.task} Task added in TODO-LIST Successfully`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright("Do you want to add new more task ?"),
            default: "false",
        },
    ]);
    conditions = addMoreTask.addmore;
}
console.log("your updated TODO-LIST:", todolist);
