import React, { useState } from "react";
import Header from "./Header";
import Pokemon from "./Pokemon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	const [Search, setSearch] = useState();
	return (
		<div className="App">
			<Router>
				<Header changeWord={(Search) => setSearch(Search)} />
				{console.log(Search)}
				<Routes>
					<Route
						exact
						path="/search/:searchTerm"
						element={
							<div className="app__page">
								<Pokemon input={Search} />
							</div>
						}
					></Route>
					<Route
						path="/"
						element={
							<div className="app__page">
								<h1>Search Pokemon 🐾</h1>
							</div>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
