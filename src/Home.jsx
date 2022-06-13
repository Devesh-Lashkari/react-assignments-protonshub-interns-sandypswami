import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Home.css";
import searchContext from "./context/searchContext";

function Home() {
	const [InputSearch, setInputSearch] = useState("");
	const context = useContext(searchContext);
	// eslint-disable-next-line
	const { s, sets } = context;

	sets(InputSearch);

	return (
		<div className="body">
			<div className="content-section">
				<div className="content-wrapper">
					<img
						className="logo-img"
						src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/03/04/23480.jpg"
						alt="Nasa Asteroid"
					/>
					<div className="search-bar">
						<input
							id="search-input"
							className="search-input"
							placeholder="Enter Asteroid ID"
							type="text"
							onChange={(e) => setInputSearch(e.target.value)}
							value={InputSearch}
						/>
					</div>
					<div className="search-btns">
						<Link to="/search">
							<Button variant="contained" disabled={!InputSearch}>
								Search
							</Button>
						</Link>
						<Link to="/random">
							<Button variant="contained">Random</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
