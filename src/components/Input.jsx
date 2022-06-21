import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addSlots } from "../actions/index";
import { Link } from "react-router-dom";
import "./Input.css";

function Input() {
	const [InputSearch, setInputSearch] = useState("");
	const dispatch = useDispatch();

	return (
		<div className="input__box">
			<h1>Parking Slot System</h1>
			<div className="input__field">
				<TextField
					id="outlined-basic"
					label="Number of Parking Slots"
					variant="outlined"
					className="header__input"
					type="number"
					onChange={(e) => setInputSearch(e.target.value)}
					value={InputSearch}
				/>
				<Link to="/slots">
					<Button
						variant="contained"
						onClick={() => dispatch(addSlots(InputSearch))}
						className="header__button"
					>
						Submit
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Input;
