const productslistElm = document.querySelector("#products-list");
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const titleElm = document.querySelector("#title");
const descriptionElm = document.querySelector("#description");
const saveChangesBtn = document.querySelector("#save-changes-btn");

const titleErrElm = document.querySelector("#titleErr");
const descriptionErrElm = document.querySelector("#descriptionErr");

let page = 1;
const limit = 10;
let searchedVal = "";

searchBtn.addEventListener("click", handleSearch);
nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);

saveChangesBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	const isFormValid = formvalidate();
	if (isFormValid) {
		titleElm.innerText = "";
		descriptionElm.innerText = "";
		titleElm.style.borderColor = "lightgray";
		descriptionElm.style.borderColor = "lightgray";

		async function submitProduct() {
			try {
				const data = await axios.post("https://dummyjson.com/products/add", {
					title: titleElm.value,
					description: descriptionElm.value
				});
				console.log(data);
			} catch (error) {
				console.log("Error fetching posts", error);
			}
		}
		submitProduct();
	}
}

function formvalidate() {
	let isValid = true;
	// title validations
	if (!titleElm.value) {
		isValid = false;
		titleErrElm.innerText = "Title is rqeuired";
		titleElm.style.border = "1px solid red";
		titleErrElm.style.color = "red";
	} else if (titleElm.value.length < 4) {
		isValid = false;
		titleErrElm.innerText = "Title must be larger than 4 chars";
		titleElm.style.borderColor = "red";
		titleErrElm.style.color = "red";
	} else if (titleElm.value && titleElm.value.length >= 10) {
		//pass
		isValid = true;
		titleElm.style.borderColor = "lightgray";
		titleErrElm.innerText = "";
	}

	// descriotion validation
	if (!descriptionElm.value) {
		isValid = false;
		descriptionErrElm.innerText = "Description is required";
		descriptionElm.style.borderColor = "red";
		descriptionErrElm.style.color = "red";
	} else if (descriptionElm.value.length < 15) {
		isValid = false;
		descriptionErrElm.innerText = "Title must be larger than 15 chars";
		descriptionElm.style.borderColor = "red";
		descriptionErrElm.style.color = "red";
	} else if (descriptionElm.value && descriptionElm.value.length >= 15) {
		isValid = true;
		descriptionElm.style.borderColor = "lightgray";
		descriptionErrElm.innerText = "";
	}
	return isValid;
}

function handleSearch() {
	searchedVal = searchBar.value.trim();
	console.log("Searched Value:", searchedVal);
	page = 1;
	fetchPostsList();
}

// communi. with api
async function fetchPostsList() {
	try {
		const data = await axios.get(
			`https://dummyjson.com/products/search?q=${searchedVal}`,
			{
				params: {
					limit: limit,
					skip: (page - 1) * limit
				}
			}
		);
		productslistElm.innerHTML = "";
		const productsList = data.data.products;

		for (let i in productsList) {
			displayProducts(productsList[i]);
		}
	} catch (error) {
		console.log("Error fetching posts", error);
	}
}

//displaying on screen
function displayProducts(product) {
	//product link <a>
	let productLink = document.createElement("a");
	productLink.href = `../product-details/index.html?id=${product.id}`;
	productLink.classList.add("col-lg-6");
	productslistElm.appendChild(productLink);

	//container
	let productContainer = document.createElement("div");
	productContainer.classList.add("product-detail-container");
	productLink.appendChild(productContainer);

	//thumbnail
	let productThumbnail = document.createElement("img");
	productThumbnail.src = product.thumbnail;
	productContainer.appendChild(productThumbnail);

	//title
	let title = document.createElement("h2");
	title.innerText = product.title;
	productContainer.appendChild(title);

	//description
	let description = document.createElement("p");
	description.innerText = product.description;
	description.classList.add("product-description");
	productContainer.appendChild(description);

	//price
	let price = document.createElement("p");
	price.innerText = `Price: $${product.price}`;
	productContainer.appendChild(price);
}

// pagination
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth" // Optional: to make the scroll smooth
	});
}

function nextPage() {
	page++;
	fetchPostsList().catch((err) => console.log("Error fetching posts", err));
	scrollToTop();
}

function prevPage() {
	if (page > 1) {
		page--;
		fetchPostsList().catch((err) => console.log("Error fetching posts", err));
		scrollToTop();
	}
	scrollToTop();
}

fetchPostsList();
