import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch Posts data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
});

// adding new post
export const addPost = createAsyncThunk("posts/addPost", async (postInfo) => {
	const response = await axios.post(
		"https://jsonplaceholder.typicode.com/posts",
		postInfo
	);
	return response.data;
});

// deleting a post
export const deletePost = createAsyncThunk(
	"posts/deletePost",
	async (postId) => {
		const response = await axios.delete(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		return { id: postId };
	}
);

// update a post
export const updatePost = createAsyncThunk(
	"posts/updatePost",
	async (postId, updatedData) => {
		const response = await axios.patch(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
			updatedData
		);
		return response.data;
	}
);

// fetching post details
export const fetchPostDetails = createAsyncThunk(
	"posts/fetchPostDetails",
	async (postId) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		return response.data;
	}
);
