let mainContainer = document.getElementById("main-container")
let productsInfoContainer = document.createElement("div")

productsInfoContainer.classList.add("d-flex", "flex-column", "text-capitalize")
mainContainer.appendChild(productsInfoContainer)

// *if we used only one product*

// var product = {
// 	name: "Crusader Kings 3",
// 	price: 40,
// 	// discount: this.price * 0.3
// 	discount: 12,
// 	category: "Strategy - Video Game "
// }

// function displayProductInfo(obj) {
// 	for (let key in obj) {
// 		let span = document.createElement("span")
// 		span.innerHTML = `${key}: ${obj[key]}`
// 		productInfoContainer.appendChild(span)
// 	}
// 	displayTotalPrice(product)
// }

// // idk why i would need a loop to display total price if i only got one array
// function displayTotalPrice(obj) {
// 	let p = document.createElement("p")
// 	p.innerHTML = `The total price is ${obj.price - obj.discount}$`
// 	mainContainer.appendChild(p)
// }

// displayProductInfo(product)

// *array of products*

let productsList = [
	{
		name: "Doom Eternal",
		price: `${60}$`,
		discount: `${10}$`,
		category: "FPS - Video Game"
	},
	{
		name: "Stardew Valley",
		price: `${20}$`,
		discount: `${7}$`,
		category: "Farm Sim - Video Game"
	},
	{
		name: "Crusader Kings 3",
		price: `${40}$`,
		discount: `${12}$`,
		category: "Strategy - Video Game "
	}
]

function displayTotalPrice(arr) {
	let totalPrice = 0
	let totalDiscount = 0
	for (let i = 0; i < arr.length; i++) {
		for (let key in arr[i]) {
			totalPrice += parseInt(arr[i].price)
			totalDiscount += parseInt(arr[i].discount)
			break
		}
	}
	console.log({ totalPrice, totalDiscount })
	let p = document.createElement("p")
	p.innerHTML = `The total price for all the products: ${
		totalPrice - totalDiscount
	}$`
	p.classList.add("fs-4", "text-danger-emphasis", "fw-bold", "mt-4")
	productsInfoContainer.appendChild(p)
}

function displayProductsInfo(arr) {
	for (let i = 0; i < arr.length; i++) {
		let p = document.createElement("p")
		p.classList.add("d-flex", "flex-column")
		productsInfoContainer.appendChild(p)
		for (let key in arr[i]) {
			let span = document.createElement("span")
			span.innerHTML = `${[key]}: ${arr[i][key]}`
			p.appendChild(span)
		}
	}
	displayTotalPrice(productsList)
}

displayProductsInfo(productsList)
