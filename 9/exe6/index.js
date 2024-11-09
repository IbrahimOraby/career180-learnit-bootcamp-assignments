// const person = {
// 	name: "Alice",
// 	age: 25,
// 	city: "Wonderland"
// 	};
// 	- use object destructure to store each value in separate variable
// 	- change variable names to be different than the property name

const person = {
	name: "Alice",
	age: 25,
	city: "Wonderland"
};

const { name: personName, age: personAge, city: personCity } = person;

console.log(`${personName} ${personAge} ${personCity}`);

console.log(person);
