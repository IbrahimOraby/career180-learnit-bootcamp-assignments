let ulEle = document.createElement("ul")
let studentsListSection = document.getElementById("studentsList")
let userNamesArr = []

for (let i = 0; i < 5; i++) {
	let liEle = document.createElement("li")
	let userPrompt = prompt(
		`Please enter the students names. (There's still ${5 - i} names left)`
	)
	userNamesArr[i] = userPrompt
	liEle.innerHTML = `${userNamesArr[i]}`
	ulEle.appendChild(liEle)
}
// console.log(ulEle)
studentsListSection.appendChild(ulEle)
