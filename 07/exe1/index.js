let mainContainer = document.getElementById("main-container")
let userInfoContainer = document.createElement("p")
userInfoContainer.classList.add("d-flex", "flex-column")
mainContainer.appendChild(userInfoContainer)

let userObj = {
	name: "Ibrahim",
	age: "24",
	track: "ui",
	userBio: function () {
		return `My name is${this.name} I'm ${this.age} years old, I study ${this.track}`
	}
}

function displayUserInfo(obj) {
	for (let key in obj) {
		if (typeof obj[key] !== "function") {
			let span = document.createElement("span")
			span.innerHTML = `${key}: ${obj[key]}`
			userInfoContainer.appendChild(span)
		} else {
			continue
		}
	}
}

displayUserInfo(userObj)
