import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost, updatePost } from "./postsSlice";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";
import UpdatePostModal from "../../Components/Modal/UpdatePostModal";

const PostsList = () => {
	const [showModal, setShowModal] = useState(false);
	const [currentPost, setCurrentPost] = useState(null);
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.postsData.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	const handlePostDelete = (postId) => {
		// dispatch action
		dispatch(deletePost(postId)).then(() => {
			toast.error(`Post with id:${postId} is deleted`);
		});
	};

	const handleShowModal = (post) => {
		// dispatch action
		setCurrentPost(post);
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="posts-container">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{posts &&
								posts.map((post) => (
									<div className="card post-item" key={post.id}>
										<div className="card-body">
											<Link
												to={`/post/${post.id}`}
												key={post.id}
												className="posts-link"
											>
												<h5>
													{post.id} - {post.title}
												</h5>
												<p className="card-text mb-2 ">{post.body}</p>
											</Link>
											<div className="postControlButtons">
												<button
													className="btn btn-primary"
													onClick={() => {
														handleShowModal(post);
													}}
												>
													<FontAwesomeIcon icon={faEdit} /> Update
												</button>
												<button
													className="btn btn-danger"
													onClick={() => {
														handlePostDelete(post.id);
													}}
												>
													<FontAwesomeIcon icon={faTrash} /> Delete
												</button>
											</div>
										</div>
									</div>
								))}
						</div>

						<div className="col-lg-4">
							<PostForm></PostForm>
						</div>
					</div>
				</div>
			</div>
			<UpdatePostModal
				showModal={showModal}
				handleCloseModal={handleCloseModal}
				handleShowModal={handleShowModal}
				currentPost={currentPost}
			/>
			<ToastContainer />
		</>
	);
};

export default PostsList;
