// 8- use Set to remove duplicate values from a list and use has and delete to adjust the Set

// use Set to remove duplicate values from a list
const numArr = [10, 20, 10, 30, 15, 15, 35, 60, 10];

function getUniqueNums(arr) {
	const uniqueSet = new Set(arr);
	return [...uniqueSet];
}

console.log(getUniqueNums(numArr)); // [ 10, 20, 30, 15, 35, 60 ]

// use has and delete to adjust the set
const editSet = new Set(numArr);

console.log(editSet.has(10)); // true
console.log(editSet.has(80)); // false

editSet.delete(10);
console.log(editSet.has(10)); // false

console.log([...editSet]); // [ 20, 30, 15, 35, 60 ]
