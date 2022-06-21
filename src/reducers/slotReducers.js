const initialData = {
	slots: [],
	total: 0,
	available: 0,
};

const slotReducers = (state = initialData, action) => {
	switch (action.type) {
		case "ADD_SLOTS":
			let s = [];
			for (let i = 0; i < action.payload; i++) {
				s.push({
					id: i,
					data: i,
					occupied: false,
					occupiedBy: "",
					starttime: "",
				});
			}

			return {
				slots: s,
				total: action.payload,
				available: action.payload,
			};
		case "OCCUPY":
			let r = Math.floor(Math.random() * state.slots.length);
			while (state.slots[r].occupied) {
				r = Math.floor(Math.random() * state.slots.length);
			}
			const { starttime, occupiedby } = action.payload;
			return {
				...state,

				slots: state.slots.map((content, i) =>
					i === r
						? {
								...content,
								occupied: true,
								starttime: starttime.toISOString(),
								occupiedBy: occupiedby,
						  }
						: content
				),
				available: state.available - 1,
			};
		case "PAYMENT":
			let x = action.payload;
			return {
				...state,

				slots: state.slots.map((content, i) =>
					i === x
						? {
								...content,
								occupied: false,
								starttime: "",
								occupiedBy: "",
						  }
						: content
				),
				available: state.available + 1,
			};
		default:
			return state;
	}
};

export default slotReducers;
