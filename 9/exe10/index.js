// 10- use includes and startsWith and endsWith to check if something in string or array [try on both of them]

//str
userName = "Ibrahim Mohamed Oraby";

console.log(userName.includes("Mohamed Oraby")); //true

console.log(userName.startsWith("Ibrahim")); //true

console.log(userName.endsWith("Oraby")); //true
console.log(userName.endsWith("Galal")); //false

//arr
usersIds = [112, 408, 124, 178, 365];

console.log(usersIds.includes("400")); //false
console.log(usersIds.includes(408)); //true

console.log(usersIds[0] === 112); //true
console.log(usersIds[usersIds.length - 1] === 365); //true
