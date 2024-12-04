let lightBtn = document.getElementById("light-btn")
let lightImg = document.getElementById("light-img")
let stateCheck = true

function lightSwitchClick() {
	if (stateCheck) {
		lightImg.setAttribute("src", "./assets/imgs/on.jpeg")
		lightBtn.innerHTML = "Turn off"
		lightBtn.classList.add("btn-outline-dark")
		lightBtn.classList.remove("btn-outline-warning")
		stateCheck = false
	} else {
		lightImg.setAttribute("src", "./assets/imgs/off.jpeg")
		lightBtn.innerHTML = "Turn on"
		lightBtn.classList.add("btn-outline-warning")
		lightBtn.classList.remove("btn-outline-dark")
		stateCheck = true
	}
}

lightBtn.addEventListener("click", lightSwitchClick)
