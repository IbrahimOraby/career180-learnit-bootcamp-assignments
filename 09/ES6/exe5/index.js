// write a function that takes 2 params (list, comaprisonUumber) filters out numbers less than the given number

function filterGreaterOrEqual(list, comparisonUumber) {
	return list.filter((num) => num >= comparisonUumber);
}

let filteredArr = filterGreaterOrEqual([2, 5, 6, 3, 1, 10, 11, 7, 4], 6);

console.log(filteredArr);
