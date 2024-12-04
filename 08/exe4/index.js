const timerDivElm = document.querySelector("#timer");
const timerBtn = document.querySelector("#timer-btn");

let counter = 0;
let intervalId = null; // to track the state of which the timer is running or not

function countingSecs() {
	if (intervalId === null) {
		//start timer
		intervalId = setInterval(() => {
			counter++;
			timerDivElm.innerHTML = counter;
		}, 1000);
		timerBtn.innerHTML = "Stop";
	} else {
		//stop timer
		clearInterval(intervalId);
		intervalId = null;
		timerBtn.innerHTML = "Start";
	}
}

timerBtn.addEventListener("click", countingSecs);
