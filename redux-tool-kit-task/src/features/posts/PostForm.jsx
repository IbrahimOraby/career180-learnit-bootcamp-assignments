import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PostsForm() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			title: "",
			body: ""
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(3, "Title must be at least 3 characters.")
				.max(50, "Title must be 50 characters or less")
				.required("Required"),
			body: Yup.string()
				.min(20, "Body must be at least 20 characters.")
				.max(500, "Body must be 500 characters or less")
				.required("Required")
		}),
		onSubmit: (values, { resetForm }) => {
			// dispatch action
			dispatch(addPost(values)).then(() => {
				toast.success("Post added successfully");

				//reset form
				resetForm();
			});
		}
	});

	const handleValidation = () => {
		if (Object.keys(formik.errors).length > 0) {
			toast.warning(
				"Please check the form again and make sure everything is right!"
			);
		} else {
			formik.handleSubmit(); // Submit if no errors
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="add-post-form">
				<input
					id="title"
					name="title"
					type="text"
					className="form-control mb-2"
					placeholder="Title"
					value={formik.values.title}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.title && formik.errors.title ? (
					<p className="text-danger">{formik.errors.title}</p>
				) : null}
				<textarea
					id="body"
					name="body"
					className="form-control mb-2"
					placeholder="Body"
					rows="4"
					value={formik.values.body}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.body && formik.errors.body ? (
					<p className="text-danger">{formik.errors.body}</p>
				) : null}
				<button
					type="submit"
					className="btn btn-success"
					onClick={handleValidation}
				>
					<FontAwesomeIcon icon={faPlus} /> Add Post
				</button>
			</div>
		</form>
	);
}
