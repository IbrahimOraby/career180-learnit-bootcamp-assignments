const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const productDetailsElm = document.querySelector("#products-details");

const titleElm = document.querySelector("#title");
const descriptionElm = document.querySelector("#description");
const saveChangesBtn = document.querySelector("#save-changes-btn");

const titleErrElm = document.querySelector("#titleErr");
const descriptionErrElm = document.querySelector("#descriptionErr");

const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");

if (typeof productId === "number") {
	//fetch api
	async function fetchPostsList() {
		try {
			const data = await axios.get(
				`https://dummyjson.com/products/${productId}`
			);
			productDetailsElm.innerHTML = "";
			const productDetails = data.data;
			displayProductDetails(productDetails);
		} catch (error) {
			console.log("Error fetching posts", error);
		}
	}

	//display on screen
	function displayProductDetails(product) {
		//container
		let productContainer = document.createElement("div");
		// productContainer.classList.add("product-detail-container");
		productDetailsElm.appendChild(productContainer);

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
		productContainer.appendChild(description);

		//price
		let price = document.createElement("p");
		price.innerText = `Price: $${product.price}`;
		productContainer.appendChild(price);

		//rating
		let rating = document.createElement("p");
		rating.innerText = `Rating: $${product.rating}`;
		productContainer.appendChild(rating);

		//gallery
		let productGallery = document.createElement("div");
		let galleryTitle = document.createElement("h4");
		galleryTitle.innerText = "Gallery";
		productGallery.appendChild(galleryTitle);
		for (i in product.images) {
			let galleryImg = document.createElement("img");
			galleryImg.src = product.images[i];
			galleryImg.style.width = "15%";
			productGallery.appendChild(galleryImg);
		}
		productContainer.appendChild(productGallery);
	}

	// updating server
	saveChangesBtn.addEventListener("click", handleSubmit);

	function handleSubmit(e) {
		e.preventDefault();

		const isFormValid = formvalidate();
		if (isFormValid) {
			titleElm.innerText = "";
			descriptionElm.innerText = "";
			titleElm.style.borderColor = "lightgray";
			descriptionElm.style.borderColor = "lightgray";

			async function updateProduct() {
				try {
					const data = await axios.put(
						`https://dummyjson.com/products/${productId}`,
						{
							title: titleElm.value,
							description: descriptionElm.value
						}
					);
					console.log(data);
				} catch (error) {
					console.log("Error fetching posts", error);
				}
			}
			updateProduct();
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

	//delete from server

	confirmDeleteBtn.addEventListener("click", handleDelete);

	function handleDelete(e) {
		async function deleteProduct() {
			try {
				const data = await axios.delete(
					`https://dummyjson.com/products/${productId}`
				);
				console.log(data);
			} catch (error) {
				console.log("Error fetching posts", error);
			}
		}
		deleteProduct();
	}

	fetchPostsList();
} else {
	console.log("error");
}
