import React from "react";
import Input from "./components/Input";
import Slots from "./components/Slots";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path="/slots"
						element={
							<div className="app__page">
								<Slots />
							</div>
						}
					></Route>
					<Route
						path="/"
						element={
							<div className="app__page">
								<Input />
							</div>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
