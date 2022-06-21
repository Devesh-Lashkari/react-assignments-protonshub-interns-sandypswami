export const addSlots = (data) => {
	return {
		type: "ADD_SLOTS",
		payload: data,
	};
};

export const occupy = ({ starttime, occupiedby }) => {
	return {
		type: "OCCUPY",
		payload: {
			starttime: starttime,
			occupiedby: occupiedby,
		},
	};
};
export const payment = (currentID) => {
	return {
		type: "PAYMENT",
		payload: currentID,
	};
};
