let resultSpan = document.querySelector("#result-details");
let userInput = prompt(
	"Enter up to 3 numbers in a comma seperated format",
	"0, 0, 0"
);

// split, trim and parse the user string input into an array of numbers
function splitNCheckUsrString(str) {
	let nArr = str.split(",");
	// if the user entered up to 3 numbers, trim spaces and parse the numbers then return arr
	if (nArr.length <= 3) {
		return nArr.map((element) => {
			console.log(element);
			element.trim();
			return element === "" ? 0 : parseInt(element);
		});
	} else {
		// if more than 3, alert the user and return 0
		console.log(nArr.length);
		alert("You entered more than 3 numbers");
		return [0];
	}
}

// sum numbers if a number of the 3 is not found it will be already intialized with 0
function sumNums(a = 0, b = 0, c = 0) {
	return a + b + c;
}

// call the functions
let numbersArr = splitNCheckUsrString(userInput);
let result = sumNums(...numbersArr);

//display on screen
resultSpan.innerHTML = `Here's your result: ${result}`;
