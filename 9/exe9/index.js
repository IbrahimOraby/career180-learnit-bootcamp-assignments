// 8- use Set to remove duplicate values from a list and use has and delete to adjust the Set

// use Set to remove duplicate values from a list
const numArr = [10, 20, 10, 30, 15, 15, 35, 60, 10];

function getUniqueNums(arr) {
	const uniqueSet = new Set(arr);
	return [...uniqueSet];
}

console.log(getUniqueNums(numArr)); // [ 10, 20, 30, 15, 35, 60 ]

// 9- referring the point 8 convert Set to array and use push and pop instead of has and delete
const editSet = new Set(numArr);
console.log(editSet); // Set(6) { 10, 20, 30, 15, 35, 60 }

let editArr = [...editSet];

editArr.pop();
console.log(editArr); // [ 10, 20, 30, 15, 35 ]

editArr.push(40);
console.log(editArr); // [ 10, 20, 30, 15, 35, 40 ]
