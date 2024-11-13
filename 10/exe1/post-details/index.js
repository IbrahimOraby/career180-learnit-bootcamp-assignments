let postDetailsSecElm = document.querySelector("#post-details");

const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));

if (typeof postId === "number") {
	async function fetchPostsDetails() {
		const data = await axios.get("https://jsonplaceholder.typicode.com/posts", {
			params: {
				id: postId
			}
		});
		const postDetails = data.data[0];
		console.log(postDetails);
		displayPostDetails(postDetails);
	}

	function displayPostDetails(post) {
		let postContainer = document.createElement("div");
		postContainer.style.border = "1px solid black";
		postDetailsSecElm.appendChild(postContainer);

		let h3 = document.createElement("h3");
		h3.innerText = `Title: ${post.title}`;
		postContainer.appendChild(h3);

		let bodyP = document.createElement("p");
		bodyP.innerText = `Body: ${post.body}`;
		postContainer.appendChild(bodyP);

		let userIdP = document.createElement("p");
		userIdP.innerText = `User Id: ${post.userId}`;
		postContainer.appendChild(userIdP);
	}

	fetchPostsDetails().catch((err) => console.log("Error fetching posts", err));
} else {
	console.log("Error fetching the id");
}
