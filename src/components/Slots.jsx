import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import "./Slots.css";
import DateTimePicker from "react-datetime-picker";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { occupy, payment } from "../actions/index";
import TextField from "@mui/material/TextField";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

function Slots() {
	const slots = useSelector((state) => state.slotReducers.slots);
	const totalbox = useSelector((state) => state.slotReducers.total);
	const abox = useSelector((state) => state.slotReducers.available);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [openExit, setOpenExit] = useState(false);
	const handleOpenExit = () => setOpenExit(true);
	const handleCloseExit = () => setOpenExit(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, onChange] = useState(new Date());
	const [carid, setcarid] = useState("");
	const [charge, setcharge] = useState(0);
	const [message, setmessage] = useState("");
	const [currentID, setcurrentID] = useState("");
	function checkout() {
		var axios = require("axios");
		var data = JSON.stringify({
			"car-registration": slots[currentID].occupiedby,
			charge: charge,
		});

		var config = {
			method: "post",
			url: "https://httpstat.us/200",
			headers: {
				"Content-Type": "application/json",
				Cookie:
					"ARRAffinity=5162f4bb98bf019d0483857b81758b5c8f21049f7cefe9401f81586695993fcb; ARRAffinitySameSite=5162f4bb98bf019d0483857b81758b5c8f21049f7cefe9401f81586695993fcb",
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
		dispatch(payment(currentID));
		handleCloseExit();
	}
	function checkcharges(e) {
		let prevtime = slots[e].starttime;

		let currtime = new Date();
		console.log(currtime);
		var prevDate = new Date(prevtime);
		console.log(prevDate);
		var firstDateInSeconds = prevDate.getTime() / 1000;
		var secondDateInSeconds = currtime.getTime() / 1000;
		var difference = Math.abs(firstDateInSeconds - secondDateInSeconds);
		console.log(difference);
		setcharge(10);
		if (difference < 60) {
			setmessage(difference + " seconds");
		} else if (difference < 3600) {
			setmessage(Math.floor(difference / 60) + " minutes");
		} else {
			setmessage(Math.floor(difference / 3600) + " hours");
			if (Math.floor(difference / 3600) > 2) {
				setcharge(10 + 10 * (Math.floor(difference / 3600) - 2));
			}
		}
		console.log(charge);
	}
	console.log(slots);
	return (
		<div>
			<div className="slot_buttons">
				<Button
					variant="contained"
					color="primary"
					onClick={handleOpen}
					className="btnone"
				>
					Book your Space+
				</Button>
				<Button variant="contained" color="primary" className="btnone">
					Total Available Space {abox}
				</Button>
				<Button variant="contained" color="primary" className="btnone">
					Total Space {totalbox}
				</Button>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h1>New Car Registration</h1>
					<TextField
						id="outlined-basic"
						label="Car ID"
						variant="outlined"
						value={carid}
						onChange={(e) => setcarid(e.target.value)}
					/>
					<DateTimePicker onChange={onChange} value={value} />
					<Button
						onClick={() => {
							dispatch(occupy({ starttime: value, occupiedby: carid }));
							handleClose();
							setcarid("");
							onChange(new Date());
						}}
					>
						Submit
					</Button>
				</Box>
			</Modal>
			<Modal
				open={openExit}
				onClose={handleCloseExit}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h1>Your time is {message}</h1>
					<p>Your charge is {charge}</p>
					<Button
						onClick={() => {
							handleCloseExit();
							checkout(currentID);
						}}
					>
						Pay
					</Button>
					<Button onClick={() => handleCloseExit()}>Cancel</Button>
				</Box>
			</Modal>
			<div className="slot__container">
				{slots.map((slot) => {
					return (
						<div key={slot.id} className="card__box">
							{/* <Card className="slot__card" sx={{ minWidth: 375 }}>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									{slot.data}
								</Typography>
								{slot.occupied && (
									<Button
										onClick={() => {
											handleOpenExit();
											checkcharges(slot.id);
											setcurrentID(slot.id);
										}}
									>
										Exit
									</Button>
								)}
							</Card> */}
							<div className="final__box">
								<h1>PSB {slot.data}</h1>
								<h4>
									{slot.occupied
										? "Currently Unavailable"
										: "Currently available"}
								</h4>
								{slot.occupied && (
									<Button
										variant="contained"
										onClick={() => {
											handleOpenExit();
											checkcharges(slot.id);
											setcurrentID(slot.id);
										}}
									>
										Exit
									</Button>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Slots;
