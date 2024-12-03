import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPostDetails } from "./postsSlice";

export default function PostDetails() {
	let params = useParams();
	const dispatch = useDispatch();

	const postDetails = useSelector((state) => state.postsData.postDetails);

	useEffect(() => {
		dispatch(fetchPostDetails(params.id));
	}, []);

	return (
		<div>
			{postDetails ? (
				<>
					<div className="container">
						<div className="row text-center my-4">
							<div className="col-12 pb-4">
								<p>Id: {postDetails.id}</p>
							</div>
							<div className="col-12 pb-4">
								<h2>Title: {postDetails.title}</h2>
							</div>
							<div className="col-12 pb-4">
								<p>Body: {postDetails.body}</p>
							</div>
							<div className="col-12 pb-4">
								<p>User Id: {postDetails.userId}</p>
							</div>
						</div>
					</div>
				</>
			) : (
				<div>No post found</div>
			)}
		</div>
	);
}
