var prompt = require('prompt-sync')();
// console.log("hey");
let hour = prompt("enter hour");
if(hour>12)
{
    console.log("allowed");
}else
{
    console.log("not");
}
