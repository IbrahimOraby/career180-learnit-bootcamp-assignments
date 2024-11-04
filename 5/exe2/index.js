let userNamesArr = []
for (let i = 0; i <= 4; i++) {
	let userNamesInput = prompt(
		`Would you please enter the names? (You got ${5 - i} names left)`
	)
	userNamesArr.push(userNamesInput)
}

let userSearchInput = prompt(
	"Would you please enter a name to search for inside the list?"
)

function searchArr(name, arr) {
	let nameFound = arr.find((e) => e === name)
	let nameIndex = arr.indexOf(name)

	if (nameFound) {
		switch (nameIndex) {
			case 0:
				return "Founded and the name's order is first "
			case 1:
				return "Founded and the name's order is second "
			case 2:
				return "Founded and the name's order is third "
			case 3:
				return "Founded and the name's order is fourth "
			case 4:
				return "Founded and the name's order is fifth "
		}
	} else {
		return "Sadly, the name is not found"
	}
}

alert(searchArr(userSearchInput, userNamesArr))
