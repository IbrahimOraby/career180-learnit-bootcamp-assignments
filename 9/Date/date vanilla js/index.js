const today = new Date();
const todayTimeStamp = Math.floor(today.getTime() / 1000.0);

console.log(today); //Sun Nov 10 2024 21:04:06 GMT+0200
console.log(todayTimeStamp); //1731264465 - timestamp
console.log(Date.now()); // 1731268837047

const aMonthAgo = new Date(2024, 9, 10);
console.log(aMonthAgo); //Thu Oct 10 2024 00:00:00 GMT+0300

const userBirthday = new Date(2000, 2, 30, 23, 15, 10, 0);
console.log(userBirthday); //Thu Mar 30 2000 23:15:10 GMT+0200
console.log(new Date("2000-03-30T23:15:10")); //Thu Mar 30 2000 23:15:10 GMT+0200  same

console.log(userBirthday.getFullYear()); //2000
console.log(userBirthday.getMonth()); //2
console.log(userBirthday.getDay()); // 4, day of the week  4 == Thursday
console.log(userBirthday.getDate()); //30

///////////*************/////////////

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const stringDate = String(date).slice(4, 15);

console.log(`Current Day: ${day}, ${month}, ${year}`); //Current Day: 10, 11, 2024
console.log(stringDate); //Nov 10 2024

///////////*************///////////// toJSON(), toLocaleDateString()

console.log(new Date().toJSON()); //2024-11-10T19:41:50.081Z
console.log(new Date().toJSON().slice(0, 10)); //2024-11-10

console.log(new Date().toLocaleDateString()); //11/10/2024
console.log(new Date().toLocaleDateString("ar-EG")); //١٠/١١/٢٠٢٤
console.log(new Date().toLocaleTimeString("ar-EG")); // ٩:٥٣:٣٥ م

///////////*************/////////////

let startDate = new Date(2022, 2, 15);
let endDate = Date.now();

dateDifferenceDays = Math.floor((endDate - startDate) / 86400000);

console.log(`The difference between the dates are ${dateDifferenceDays} days.`);

let options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
};

console.log(new Intl.DateTimeFormat("ar-EG", options).format(startDate)); // specified options الثلاثاء، ١٥ مارس ٢٠٢٢  .....default options ١٥/٣/٢٠٢٢ similar to localeDateString()
