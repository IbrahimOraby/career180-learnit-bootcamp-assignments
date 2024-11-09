// 4- Use filter to create an array containing only the even numbers from [1, 2, 3, 4, 5, 6, 7, 8,10]

function filterEvenArr(arr) {
	return arr.filter((ele) => ele % 2 === 0);
}

let userArr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const evenArr = filterEvenArr(userArr);

console.log(evenArr);
