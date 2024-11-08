let targetElm = document.querySelector("#target");

let growBtn = document.querySelector("#grow-btn");
let shrinkBtn = document.querySelector("#shrink-btn");
let fadeoutBtn = document.querySelector("#fadeout-btn");
let fadeinBtn = document.querySelector("#fadein-btn");

// to prevent the user from shrinking Or fadingIn the div while it's still at the initial values
shrinkBtn.disabled = true;
fadeinBtn.disabled = true;

function targetGrow() {
	let widthHeightIncreasingVal = targetElm.offsetWidth;

	let intervalId = setInterval(() => {
		widthHeightIncreasingVal += 10;
		targetElm.style.width = widthHeightIncreasingVal + `px`;
		targetElm.style.height = widthHeightIncreasingVal + `px`;

		if (widthHeightIncreasingVal >= 500) {
			console.log(targetElm.offsetWidth);
			shrinkBtn.disabled = false;
			clearInterval(intervalId);
		}
	}, 100);
}

function targetShrink() {
	let widthHeightDecreasingVal = targetElm.offsetWidth;

	let intervalId = setInterval(() => {
		widthHeightDecreasingVal -= 10;
		targetElm.style.width = widthHeightDecreasingVal + `px`;
		targetElm.style.height = widthHeightDecreasingVal + `px`;

		if (widthHeightDecreasingVal <= 50) {
			clearInterval(intervalId);
			shrinkBtn.disabled = true;
		}
	}, 100);
}

function targetFadeout() {
	let fadeoutOpacity = 1;

	let intervalId = setInterval(() => {
		fadeoutOpacity -= 0.1;
		targetElm.style.opacity = fadeoutOpacity;

		if (targetElm.style.opacity <= 0.1) {
			clearInterval(intervalId);
			fadeinBtn.disabled = false;
		}
	}, 100);
}

function targetFadein() {
	let fadeinOpacity = 0;

	let intervalId = setInterval(() => {
		fadeinOpacity += 0.1;
		targetElm.style.opacity = fadeinOpacity;

		if (targetElm.style.opacity >= 1) {
			clearInterval(intervalId);
			fadeinBtn.disabled = true;
		}
	}, 100);
}

growBtn.addEventListener("click", targetGrow);
shrinkBtn.addEventListener("click", targetShrink);
fadeoutBtn.addEventListener("click", targetFadeout);
fadeinBtn.addEventListener("click", targetFadein);
