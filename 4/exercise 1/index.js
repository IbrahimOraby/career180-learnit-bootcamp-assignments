// Task 1

let userFirstName = prompt("Would you please enter your first name?")
let userLastName = prompt("And your last name?")

alert(`Welcome, ${userFirstName} ${userLastName}`)

let userAge = prompt("What about your age?")

if (1 < userAge && userAge <= 10) {
	console.log("Oh you are just a kid")
} else if (11 < userAge && userAge <= 18) {
	alert("Hello, teenager")
} else if (19 < userAge && userAge <= 50) {
	alert("You are a grown up")
} else if (userAge > 50) {
	alert("You are old")
}
