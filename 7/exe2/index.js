let mainContainer = document.getElementById("main-container")
let productInfoContainer = document.createElement("p")

productInfoContainer.classList.add("d-flex", "flex-column", "text-capitalize")
mainContainer.appendChild(productInfoContainer)

var product = {
	name: "Crusader Kings 3",
	price: 40,
	// discount: this.price * 0.3  ..............  wanted to use it like this but wasn't apple to access props using (this keyword) cuz it refers to window obj.
	discount: 12,
	category: "Strategy - Video Game "
}

function displayProductInfo(obj) {
	for (let key in obj) {
		let span = document.createElement("span")
		span.innerHTML = `${key}: ${obj[key]}`
		productInfoContainer.appendChild(span)
	}
	displayTotalPrice(product)
}

// idk why i would need a loop to display total price if i only got one array
function displayTotalPrice(obj) {
	let p = document.createElement("p")
	p.innerHTML = `The total price is ${obj.price - obj.discount}$`
	mainContainer.appendChild(p)
}

displayProductInfo(product)
