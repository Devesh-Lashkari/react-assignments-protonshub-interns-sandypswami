import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Random from "./Random";
import Searchstate from "./context/SearchState";

function App() {
	return (
		<Searchstate>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<div>
								<Home />
							</div>
						}
					></Route>
					<Route
						path="/search"
						element={
							<div>
								<Result />
							</div>
						}
					></Route>
					<Route
						path="/random"
						element={
							<div>
								<Random />
							</div>
						}
					></Route>
				</Routes>
			</Router>
		</Searchstate>
	);
}

export default App;
