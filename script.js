// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const phoneInput = document.querySelector("#phone");
const cityNameInput = document.querySelector("#city");
const stateNameInput = document.querySelector("#state");
const countryNameInput = document.querySelector("#country");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Name";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Email";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Address";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Contact no";
let heading_5 = document.createElement("th");
heading_5.innerHTML = "City";
let heading_6 = document.createElement("th");
heading_6.innerHTML = "State";
let heading_7 = document.createElement("th");
heading_7.innerHTML = "Country";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
thead.appendChild(row_1);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if (
		firstName.value === "" ||
		lastName.value === "" ||
		emailInput.value === "" ||
		addressInput.value === "" ||
		phoneInput.value === "" ||
		cityNameInput.value === "" ||
		stateNameInput.value === "" ||
		countryNameInput.value === ""
	) {
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 6000);
	} else {
		console.log(`First Name: ${firstName.value}`);
		console.log(`Last Name: ${lastName.value}`);
		let row_2 = document.createElement("tr");
		let row_2_data_1 = document.createElement("td");
		row_2_data_1.innerHTML = firstName.value + " " + lastName.value;
		let row_2_data_2 = document.createElement("td");
		row_2_data_2.innerHTML = emailInput.value;
		let row_2_data_3 = document.createElement("td");
		row_2_data_3.innerHTML = addressInput.value;
		let row_2_data_4 = document.createElement("td");
		row_2_data_4.innerHTML = phoneInput.value;
		let row_2_data_5 = document.createElement("td");
		row_2_data_5.innerHTML = cityNameInput.value;
		let row_2_data_6 = document.createElement("td");
		row_2_data_6.innerHTML = stateNameInput.value;
		let row_2_data_7 = document.createElement("td");
		row_2_data_7.innerHTML = countryNameInput.value;

		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		row_2.appendChild(row_2_data_6);
		row_2.appendChild(row_2_data_7);
		tbody.appendChild(row_2);

		// Clear fields
		firstName.value === "";
		lastName.value === "";
		emailInput.value === "";
		addressInput.value === "";
		phoneInput.value === "";
		cityNameInput.value === "";
		stateNameInput.value === "";
		countryNameInput.value === "";
	}
}
