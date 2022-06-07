import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function Header(props) {
	const [InputSearch, setInputSearch] = useState("");
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
						alt="pokemon"
						className="header__logo"
					/>
				</Link>
			</div>

			<div className="header__input">
				<TextField
					id="outlined-basic"
					label="Search Here..."
					variant="outlined"
					className="header__input"
					type="text"
					onChange={(e) => setInputSearch(e.target.value)}
					value={InputSearch}
					fullWidth
				/>

				<Link to={`/search/${InputSearch}`}>
					<SearchIcon
						className="header__inputbutton"
						onClick={() => props.changeWord(InputSearch)}
					/>
				</Link>
			</div>

			<div className="header__icons">
				<Avatar
					alt="Sandeep Swami"
					src="https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=465&quality=45&auto=format&fit=max&dpr=2&s=e77237d5d7a176cf8eb80bea053a8274"
				/>
			</div>
		</div>
	);
}

export default Header;
