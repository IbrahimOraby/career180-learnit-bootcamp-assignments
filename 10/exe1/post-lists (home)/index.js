// Lab
// list request: https://jsonplaceholder.typicode.com/posts
// details request : ttps://jsonplaceholder.typicode.com/posts/{id}
// 1-use axios to get posts list
// 2- display posts on screen (using document.createElement)
// 3- each post should be clickable
// 4- clicking on a post should redirects to another page [html page with
// another js file]
// 5- in the new screen [post details screen ], should display post details
// (make the second request)
// display as much data as you can from the response in each screen

let postsSectionElm = document.querySelector("#posts-section");

async function fetchPostsList() {
	try {
		const data = await axios.get("https://jsonplaceholder.typicode.com/posts", {
			params: {}
		});
		const postsList = data.data;
		for (let i in postsList) {
			displayPosts(postsList[i]);
		}
	} catch (error) {
		console.log("Error fetching posts", error);
	}
}

function displayPosts(post) {
	let postLink = document.createElement("a");
	postLink.classList.add("col-md-6", "col-lg-4");
	postsSectionElm.appendChild(postLink);
	postLink.href = `../post-details/index.html?id=${post.id}`;

	let postContainer = document.createElement("div");
	postContainer.classList.add("post-container");
	postLink.appendChild(postContainer);

	let h3 = document.createElement("h3");
	h3.innerText = post.title;
	postContainer.appendChild(h3);

	let p = document.createElement("p");
	p.innerText = post.body;
	postContainer.appendChild(p);
}

fetchPostsList();
