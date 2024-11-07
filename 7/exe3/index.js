let body = document.getElementsByTagName("body")
let darkLightBtn = document.getElementById("dark-light-btn")
let deafaultTheme, savedTheme

darkLightBtn.addEventListener("click", setThemeToLocalStorage)

//display color theme on screen and btn text as well
function setThemeOnScreen(color) {
	if (color === "light") {
		body[0].classList.add(`light-theme`)
		body[0].classList.remove(`dark-theme`)
		darkLightBtn.innerHTML = "Dark"
	} else {
		body[0].classList.add(`dark-theme`)
		body[0].classList.remove(`light-theme`)
		darkLightBtn.innerHTML = "Light"
	}
}

// on load if there is no theme, then set it to 'light'. At the End Display it on screen
window.onload = function checkDefaultTheme() {
	if (!localStorage.getItem("theme")) {
		deafaultTheme = "light"
		localStorage.setItem("theme", deafaultTheme)
	}
	savedTheme = localStorage.getItem("theme")
	setThemeOnScreen(savedTheme)
}

// onClick if the savedTheme in localStorage is a certain color, then change it to the other one. At the End Display it on screen
function setThemeToLocalStorage() {
	if (savedTheme === "dark") {
		localStorage.setItem("theme", "light")
	} else if (savedTheme === "light") {
		localStorage.setItem("theme", "dark")
	}
	savedTheme = localStorage.getItem("theme")
	setThemeOnScreen(savedTheme)
}
