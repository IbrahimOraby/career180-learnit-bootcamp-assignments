let arrayPrintDiv = document.querySelector("#array-print");

// • Create a recursive function stringLength(str) that returns the length of a string without using the .length property.
function stringLength(str) {
	if (str === "") {
		return 0;
	}
	return 1 + stringLength(str.slice(1));
}

// • Write a recursive function findMax(arr) that returns the maximum number in an array.
function findMax(arr) {
	if (arr.length === 1) {
		return arr[0];
	}

	return arr[0] > findMax(arr.slice(1)) ? arr[0] : findMax(arr.slice(1));
}

// • Create a recursive function printArray(arr) that prints each element of an array.
function printArray(arr, index = 0) {
	if (arr.length === index) {
		return;
	}
	// print on the page
	// let p = document.createElement("p");
	// p.innerHTML = `${arr[index]}`;
	// arrayPrintDiv.append(p);
	console.log(arr[index]);

	printArray(arr, index + 1);
}

// • Create a recursive function countUp(n) that prints the numbers from 1 to n.
function countUp(n, base = 1) {
	if (base > n) {
		return;
	}
	console.log(base);

	countUp(n, base + 1);
}

// • Write a recursive function isPalindrome(str) that checks if a string str is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
	if (str.length === 1) {
		return true;
	} else if (str.length === 2) {
		return str[0] === str[1];
	} else if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, -1));
	} else {
		return false;
	}
}

let userStr = "Che";
let strLengthResult = stringLength(userStr);
console.log(`String length ${userStr}: ${strLengthResult}`);

let userArr = [2, 1, 4, 3, 8, 5];
let findMaxResult = findMax(userArr);
console.log(`Array length [${userArr}]: ${findMaxResult}`);

printArray(userArr);

countUp(6);

let userPalindromeWord = "racecar";
console.log(
	`isPalindrome ${userPalindromeWord}: ${isPalindrome(userPalindromeWord)}`
);
