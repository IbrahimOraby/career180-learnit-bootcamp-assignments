let timerDivElm = document.querySelector("#timer");
let timerBtn = document.querySelector("#timer-btn");
function countingSecs() {
	let counter = 0;
	console.log("clicked");

	let intervalID = setInterval(() => {
		counter++;
		timerDivElm.innerHTML = counter;
	}, 800);

	console.log(intervalID);
}

timerBtn.addEventListener("click", countingSecs);
