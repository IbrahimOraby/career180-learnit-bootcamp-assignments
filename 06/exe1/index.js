function countVowels(str) {
	const regex = /[aeiou]/gi
	let matchResult = str.match(regex)

	if (matchResult === null) {
		return "Your string has 0 vowels"
	} else {
		return `Your string has ${matchResult.length} vowels`
	}
}

let userStrInput = prompt(
	"Please Enter a string here, and I will count how many vowels are in it"
)
alert(countVowels(userStrInput))
