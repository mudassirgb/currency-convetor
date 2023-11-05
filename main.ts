
import inquirer from "inquirer";
import chalk from "chalk"
let greeting = chalk.bgGreen("WELCOME TO CURRENCY CONVERTOR");
console.log(greeting);
let conversion = {
    "PKR": {
        "USD":0.0044,
        "GBP": 0.0037,
        "PKR":1
   },
   "GBP":{
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
            
   },
   "USD":{
        "PKR":225.50,
        "GBP": 0.83,
        "USD":1
        
           }

}; 
const answer:  {
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount: number
}=  await inquirer.prompt ([{
    type: "list",
    name: "from",
    choices: ["PKR", "USD", "GBP"],
    message: "Please select your Currency"
},
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Please select your Currency converted"
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your conversion amount"

    }

]);
const {from, to , amount} = answer
if (from && to && amount){
    let result = conversion[to][from]* amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}else{
    console.log("Invalid Input")
};