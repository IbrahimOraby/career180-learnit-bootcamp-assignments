//Format Dates
const newDate = moment().format("MMMM Do YYYY, HH:mm:ss a, dddd");

console.log(newDate);
console.log(moment().format("[Today is] dddd"));

//Relative Time
let timeDifference = moment("20240101", "YYYYMMDD").fromNow(); //time from the start of the year
console.log(timeDifference);
console.log(moment("2024-01-01").fromNow());

let timeRelativeToDayEnd = moment().endOf("day").fromNow(); // time is left up untill the end of the day
console.log(timeRelativeToDayEnd);
console.log(moment().startOf("hour").fromNow()); // minutes that had passed in the hour we are currently in

//from X
var firstDate = moment("2020-02-02");
var secondDate = moment("2022-08-10");
console.log(firstDate.from(secondDate)); //3 years ago ...estimate time
// Calendar Time
console.log(moment().add(1, "days").format("[Tomorrow is] dddd")); //tomorrow which is monday
console.log(moment().subtract(1, "days").format("dddd")); // yesterday which is saturday
console.log(moment().subtract(2, "hours").format("hh:mm:ss a")); //08:57:56 pm two hours ago

let nextMonth = moment().add(1, "month");
console.log(nextMonth.format("MMMM")); //december

//Durations
console.log(moment.duration(nextMonth - moment()).asDays()); // 30 days

//toString
console.log(moment().toString()); // "Sun Nov 10 2024 23:10:45 GMT+0200"

//isBefore
console.log(moment("2024-01-05").isBefore("2024-01-07")); //true
console.log(moment("2024-01-05").isSame("2024-01-07")); //false
console.log(moment("2024-01-05").isSameOrBefore("2024-01-07")); //true

//isBetween
let courseStart = moment("2024-10-04");
let courseEnd = moment("2024-12-04");

console.log(moment().isBetween(courseStart, courseEnd)); //true
