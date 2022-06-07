import React, { useState, useEffect } from "react";
import "./Pokemon.css";

function Pokemon(props) {
	const [endresult, setEndresult] = useState([]);
	var axios = require("axios");
	var data = "";

	useEffect(() => {
		var config = {
			method: "get",
			url: `https://pokeapi.co/api/v2/pokemon/${props.input}`,
			headers: {},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response));
				setEndresult(JSON.stringify(response));
			})
			.catch(function (error) {
				setEndresult(
					"Sorry No results for this pokemon, It's an invalid pokemon"
				);
				console.log(error);
			});
		// eslint-disable-next-line
	}, [props.input]);
	return (
		<div className="pokemon">
			<h2>Search results for "{props.input}"</h2>
			<div>{endresult}</div>
		</div>
	);
}

export default Pokemon;
