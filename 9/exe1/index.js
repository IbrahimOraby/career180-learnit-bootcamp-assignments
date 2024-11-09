// 1- Write a function greet that takes a name and a greeting. If no greeting is provided, use "Hello" by default.

function greet(name, greeting = "Hello") {
	return `${greeting}, ${name}`;
}

let userNameInput = prompt("Please enter a name");
let userGreetingInput = prompt("Please enter a greeting");

let greeting = greet(userNameInput);
alert(greeting);
