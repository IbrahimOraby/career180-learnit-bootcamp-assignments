import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import PostDetails from "./features/posts/PostDetails";

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/post/:id" element={<PostDetails />} />
					<Route path="*" element={"not found"} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
