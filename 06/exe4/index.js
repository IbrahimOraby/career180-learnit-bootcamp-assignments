let ulEle = document.createElement("ul")
let studentsListSection = document.getElementById("studentsList")
let userNamesArr = []

for (let i = 0; i < 5; i++) {
	let liEle = document.createElement("li")
	let userPrompt = prompt("Please enter the students names.")
	userNamesArr[i] = userPrompt
	liEle.innerHTML = `${userNamesArr[i]}`
	ulEle.appendChild(liEle)
}
studentsListSection.appendChild(ulEle)

//exe 4

let userSearchPrompt = prompt("Please enter a name for us to search for.")
let resultDiv = document.getElementById("result")

function searchStudents(arr, name) {
	let pELe = document.createElement("p")
	resultDiv.appendChild(pELe)
	let reusltIndex = arr.indexOf(name)
	if (reusltIndex >= 0) {
		pELe.innerHTML = `Founded and its index is ${reusltIndex}`
		pELe.style.color = "green"
	} else {
		pELe.innerHTML = "Not founded"
		pELe.style.color = "red"
	}
}

searchStudents(userNamesArr, userSearchPrompt)
