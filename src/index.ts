// import { greet } from "./greetings";
const greeting = require('./greetings')

function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
}

sayHello("Node.js");

greeting("Shubham")