let userStrInput = prompt(
	"Write a sentence, and I will count how many words are in it?"
)

function countWords(str) {
	return `You sentence has... ${str.split(" ").length} words.`
}

alert(countWords(userStrInput))

// without using split
//
// function countWords(str) {
// 	let counter = 0
// 	for (let i = 0; i <= str.length - 1; i++) {
// 		if (str[i] === " ") {
// 			counter++
// 		}
// 	}
// 	return `You sentence has... ${counter + 1} words.`
// }
