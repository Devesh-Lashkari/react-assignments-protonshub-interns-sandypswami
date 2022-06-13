import React, { useState } from "react";
import SearchContext from "./searchContext";

const SearchState = (props) => {
	const [s, sets] = useState("");
	return (
		<SearchContext.Provider value={{ s, sets }}>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchState;
