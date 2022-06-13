import React, { useEffect, useState, useContext } from "react";
import searchContext from "./context/searchContext";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BoxLoading } from "react-loadingg";
import "./Result.css";

function Result() {
	// eslint-disable-next-line
	const [endresult, setEndresult] = useState({});
	const [outcome, setOutcome] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);
	var axios = require("axios");
	var data = "";
	const context = useContext(searchContext);
	// eslint-disable-next-line
	const { s, sets } = context;
	useEffect(() => {
		var config = {
			method: "get",
			url: `https://api.nasa.gov/neo/rest/v1/neo/${s}?api_key=B8dJIaa4UjHIwELqA19kIbAxy5YMnmDIVIlxhWBS`,
			headers: {},
			data: data,
		};
		axios(config)
			.then(function (response) {
				setOutcome(true);
				setEndresult(response.data);
			})
			.catch(function (error) {
				setOutcome(false);
				console.log(error);
			});
		// eslint-disable-next-line
	}, []);
	return (
		<div className="body">
			{loading ? (
				<BoxLoading />
			) : (
				<div>
					<div className="back__home">
						<Link to="/">
							<HomeIcon />
							<p>Back to home</p>
						</Link>
					</div>
					<div className="result__page">
						{outcome ? (
							<div>
								<h1>Name : {endresult.name}</h1>
								<p>
									NASA JPL URL :{" "}
									<a href={endresult.nasa_jpl_url}>{endresult.nasa_jpl_url}</a>
								</p>

								{endresult.is_potentially_hazardous_asteroid ? (
									<p>It is a potentially hazardous asteroid</p>
								) : (
									<p>It is not a potentially hazardous asteroid</p>
								)}
							</div>
						) : (
							<div className="error-message">
								<h1>Sorry you entered Invalid Asteroid ID</h1>
								<p>Go to home page or Search Random Asteroid</p>
								<Link to="/random">
									<Button variant="contained">Random ID</Button>
								</Link>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Result;
