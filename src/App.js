import { React } from "react";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
