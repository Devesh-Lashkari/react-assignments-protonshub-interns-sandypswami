import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import "./Random.css";

function Random() {
	// eslint-disable-next-line
	const [endresult, setEndresult] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2500);
	}, []);

	var axios = require("axios");
	var data = "";
	useEffect(() => {
		var config = {
			method: "get",
			url: `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=B8dJIaa4UjHIwELqA19kIbAxy5YMnmDIVIlxhWBS`,
			headers: {},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(
					typeof response.data.near_earth_objects[
						Math.floor(Math.random() * 20)
					]
				);
				console.log(Math.floor(Math.random() * 20));
				setEndresult(
					response.data.near_earth_objects[Math.floor(Math.random() * 20)]
				);
			})
			.catch(function (error) {
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
					<div>
						<div className="back__home">
							<Link to="/">
								<HomeIcon />
								<p>Back to home</p>
							</Link>
						</div>
						<div className="result__page">
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
					</div>
				</div>
			)}
		</div>
	);
}

export default Random;
