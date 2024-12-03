import { createSlice } from "@reduxjs/toolkit";
import {
	fetchPosts,
	addPost,
	deletePost,
	fetchPostDetails,
	updatePost
} from "../../network/postsApis";
export const postsSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [],
		status: "idle",
		error: null,
		loading: false,
		postDetails: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.posts = action.payload;
			})
			.addCase(addPost.fulfilled, (state, action) => {
				state.posts.push(action.payload);
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.posts = state.posts.filter(
					(post) => post.id !== action.payload.id
				);
			})
			.addCase(fetchPostDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.postDetails = action.payload;
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				const postIndex = state.posts.findIndex(
					(post) => post.id === action.payload.id
				);

				if (postIndex !== -1) {
					state.posts[postIndex] = action.payload;
				}
			});
	}
});
export { fetchPosts, addPost, deletePost, fetchPostDetails, updatePost };
export default postsSlice.reducer;
