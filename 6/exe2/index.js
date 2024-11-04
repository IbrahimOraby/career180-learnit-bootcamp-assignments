let employeesNamesUsrInput = prompt(
	"Please enter names of employees in a comma separated format."
)
let employeesSalriesUsrInput = prompt(
	"Please enter the salaries of the employees in a comma separated format"
)
let employeesNameList = splitAndTrim(employeesNamesUsrInput)
let employeesSalriesList = splitAndTrim(employeesSalriesUsrInput)
let btnELe = document.getElementById("search-btn")

function splitAndTrim(str) {
	return str.split(",").map((item) => item.trim())
}

function dataEnterCheck(namesArr, salariesArr) {
	if (namesArr.length !== salariesArr.length) {
		alert("Error: The count doesn't match")
		btnELe.style.display = "none"
		return false
	}
	return true
}

function displayEmployees(namesArr, salariesArr) {
	let employeesInfoEle = document.getElementById("employees-info")

	for (let i = 0; i < namesArr.length; i++) {
		let pEle = document.createElement("p")
		pEle.innerHTML = `Name: ${namesArr[i]}, Salary: ${salariesArr[i]}$`
		pEle.classList.add("col-4", "text-center")
		employeesInfoEle.appendChild(pEle)
	}
}

function displayHighestSalary(namesArr, salariesArr) {
	const maxValue = Math.max(...salariesArr)
	const maxIndex = salariesArr.indexOf(maxValue.toString())
	console.log(maxValue.toString())
	console.log(salariesArr)
	console.log(maxIndex)

	let highestSalaryELe = document.getElementById("highest-salary")
	let pEle = document.createElement("p")

	pEle.innerHTML = `Highest salary goes for ${namesArr[maxIndex]} with ${salariesArr[maxIndex]}$.`
	pEle.style.color = "red"
	highestSalaryELe.appendChild(pEle)
}

function searchEmployee(namesArr, salariesArr) {
	let searchResult = document.getElementById("search-result")
	let userSearchInput = prompt("Please enter the name you want to search for")

	//caseinsensetivity
	let userSearchInputLowered = userSearchInput.toLowerCase()
	let loweredArr = namesArr.map((e) => e.toLowerCase())
	searchInputIndex = loweredArr.indexOf(userSearchInputLowered)

	if (searchInputIndex >= 0) {
		searchResult.innerHTML = `You searched for: ${namesArr[searchInputIndex]} and their salary is ${salariesArr[searchInputIndex]}$`
	} else {
		searchResult.innerHTML = "Sorry, This name is not found"
	}
}

if (dataEnterCheck(employeesNameList, employeesSalriesList)) {
	displayEmployees(employeesNameList, employeesSalriesList)
	displayHighestSalary(employeesNameList, employeesSalriesList)
	btnELe.addEventListener("click", () =>
		searchEmployee(employeesNameList, employeesSalriesList)
	)
}
