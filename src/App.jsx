import React, { useState } from "react";
import "./App.css";

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		phone: "",
		cityName: "",
		stateName: "",
		countryName: "",
	});

	const [data, setData] = useState([]);

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sets(true);
		const newdata = { ...values, id: new Date().getTime().toString() };
		console.log(newdata.firstName + " " + newdata.lastName);
		setData([...data, newdata]);
		setValues({
			firstName: "",
			lastName: "",
			email: "",
			address: "",
			phone: "",
			cityName: "",
			stateName: "",
			countryName: "",
		});
	};
	const [s, sets] = useState(false);
	const condition = `${s ? "form__table" : "table__hidden"}`;

	return (
		<div className="app">
			<h1>🎇 Form</h1>
			<form action="" onSubmit={handleSubmit}>
				<div className="formInput">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						name="firstName"
						value={values.firstName}
						onChange={handleInput}
						id="firstname"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						name="lastName"
						value={values.lastName}
						onChange={handleInput}
						id="lastname"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						name="email"
						value={values.email}
						onChange={handleInput}
						id="email"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="address">Address:</label>
					<input
						type="text"
						name="address"
						value={values.address}
						onChange={handleInput}
						id="address"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="phone">Enter your phone number:</label>
					<input
						type="tel"
						name="phone"
						value={values.phone}
						onChange={handleInput}
						id="phone"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="cityName">City:</label>
					<input
						type="text"
						name="cityName"
						value={values.cityName}
						onChange={handleInput}
						id="cityName"
						required={true}
					/>
				</div>
				<div className="formInput">
					<label htmlFor="stateName">State:</label>
					<input
						type="text"
						name="stateName"
						value={values.stateName}
						onChange={handleInput}
						id="state"
						required={true}
					/>
				</div>

				<div className="formInput">
					<label htmlFor="countryName">Country:</label>
					<input
						type="text"
						name="countryName"
						value={values.countryName}
						onChange={handleInput}
						id="countryName"
						required={true}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>
				<table className={condition}>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>City Name</th>
						<th>State Name</th>
						<th>Country Name</th>
					</tr>

					{data.map((curr, index) => (
						<tr data-index={index} key={curr.id}>
							<td>{curr.firstName}</td>
							<td>{curr.lastName}</td>
							<td>{curr.email}</td>
							<td>{curr.address}</td>
							<td>{curr.phone}</td>
							<td>{curr.cityName}</td>
							<td>{curr.stateName}</td>
							<td>{curr.countryName}</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}

export default App;
