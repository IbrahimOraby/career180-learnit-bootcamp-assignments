function randNumGenerator() {
	return Math.floor(Math.random() * 6) + 1
}

while (true) {
	let userConfirmation = confirm("Do you want to generate a random number?")
	if (!userConfirmation) {
		break
	}
	alert(randNumGenerator())
}
