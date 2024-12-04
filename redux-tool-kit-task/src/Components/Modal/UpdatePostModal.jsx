import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UpdatePostModal({
	showModal,
	handleCloseModal,
	currentPost,
	handleChangeData,
	handleUpdatePost
}) {
	const handleChange = (e) => ({
		...currentPost,
		title: e.target.value
	});
	return (
		<>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="add-post-form">
							<input
								id="title"
								name="title"
								type="text"
								className="form-control mb-2"
								placeholder="Title"
								value={currentPost.title}
								onChange={(e) => {
									handleChangeData({ ...currentPost, title: e.target.value });
								}}
							/>
							<textarea
								id="body"
								name="body"
								className="form-control mb-2"
								placeholder="Body"
								rows="4"
								value={currentPost.body}
								onChange={(e) => {
									handleChangeData({ ...currentPost, body: e.target.value });
								}}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
					<Button variant="primary" onClick={handleUpdatePost}>
						Update Post
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
