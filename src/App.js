import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Movilib from "./components/Movilib";
import FidelleTech from "./components/FidelleTech";
import Triveho from "./components/Triveho";
import Cinch from "./components/Cinch";
import Lia from "./components/Lia";
import MyPortfolio from "./components/MyPortfolio";

//script function

export function AddLibrary(urlOfTheLibrary) {
	const script = document.createElement("script");
	script.src = urlOfTheLibrary;
	script.async = true;
	document.body.appendChild(script);
}

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/movilib" element={<Movilib />} />
					<Route path="/fidelle-tech" element={<FidelleTech />} />
					<Route path="/triveho" element={<Triveho />} />
					<Route path="/cinch" element={<Cinch />} />
					<Route path="/lia-sa" element={<Lia />} />
					<Route path="/myPortfolio" element={<MyPortfolio />} />
				</Routes>
			</Router>

			{AddLibrary("./assets/js/main.js")}
		</div>
	);
}

export default App;
