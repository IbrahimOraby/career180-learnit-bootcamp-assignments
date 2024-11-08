let userNames = ["Amir", "Ibrahim", "Nada", "Osama"];

// function modifyArr(arr) {
// 	let modifiedArr = [];

// 	for (let i in arr) {
// 		modifiedArr.push(arr[i].toLowerCase());
// 	}
// 	return modifiedArr;
// }

// console.log(modifyArr(names));
// console.log(names);

//bonus - custom formatting

function toLowerCaseFormat(arr) {
	let modifiedArr = [];

	for (let i in arr) {
		modifiedArr.push(arr[i].toLowerCase());
	}

	return modifiedArr;
}

function toUpperCaseFormat(arr) {
	let modifiedArr = [];

	for (let i in arr) {
		modifiedArr.push(arr[i].toUpperCase());
	}

	return modifiedArr;
}

function capitalizeFormat(arr) {
	let modifiedArr = [];

	for (let i in arr) {
		modifiedArr.push(
			arr[i].charAt(0).toUpperCase() + str.slice(1).toLowerCase()
		);
	}

	return modifiedArr;
}

function formattingFunc(userChoice, userArr) {
	switch (userChoice) {
		case "1":
			return toLowerCaseFormat(userArr);
		case "2":
			return toUpperCaseFormat(userArr);
		case "3":
			return capitalizeFormat(userArr);
		case "4":
			customFormatting(userArr);
			break;
		default:
			alert("Invalid choice will result for Lower Case format to be applied");
			return toLowerCaseFormat(userArr);
	}
}

function customFormatting(userChoice, userArr) {
	let modifiedArr = [];
	alert("You will chose any type of formatting to each element");

	for (i in userArr) {
		alert(
			`Porceed to select which type of style you will apply to this element: [ ${userArr[i]} ]`
		);
		userChoice = prompt(
			`Enter the number for each style: (1.Lower Case, 2.Upper Case, 3.Capitalize)`
		);

		switch (userChoice) {
			case "1":
				modifiedArr.push(userArr[i].toLowerCase());
				break;
			case "2":
				modifiedArr.push(userArr[i].toUpperCase());
				break;
			case "3":
				modifiedArr.push(
					userArr[i].charAt(0).toUpperCase() + userArr[i].slice(1).toLowerCase()
				);
				break;
			default:
				alert("Invalid choice will result for Lower Case format to be applied");
				console.log(userChoice);
				modifiedArr.push(userArr[i]);
		}
	}

	return modifiedArr;
}

function splitAndTrim(str) {
	return str.split(",").map((item) => item.trim());
}

let userArrInput = prompt(
	"Please enter list name in a comma separated format."
);
userArrInput = splitAndTrim(userArrInput);

alert(
	"Note: all the styles will be applied on all elements except for 'Custom'."
);

let userFormatChoice = prompt(
	`Enter the number for the style you want: (1.Lower Case, 2.Upper Case, 3.Capitalize 4.Custom)`
);

let userOutput = customFormatting(userFormatChoice, userArrInput);
alert(userOutput);
