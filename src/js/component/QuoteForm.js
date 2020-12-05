import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function QuoteForm(props) {
	const [cLength, setcLenght] = useState("");
	const [Width, setWidth] = useState("");
	const [Heigth, setHeigth] = useState("");
	const [Weight, setWeight] = useState("");
	const [Address, setAddress] = useState("");
	const [City, setCity] = useState("");
	const [state, setstate] = useState("");
	const [zipcode, setzipcode] = useState("");

	const { store, actions } = useContext(Context);

	let handleSubmit = e => {
		e.preventDefault();
		// if (!value) {
		// 	alert("form cannot be empty");
		// 	return;
		// }
		actions.addQuote(cLength, Width, Heigth, Weight, Address, City, state, zipcode);

		// props.addStudent(value);

		setcLenght("");
		setWidth("");
		setHeigth("");
		setWeight("");
		setAddress("");
		setCity("");
		setstate("");
		setzipcode("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Add New Quote</h2>

				<input
					type="number"
					className="input"
					value={cLength}
					placeholder="Length"
					required
					onChange={e => setcLenght(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={Width}
					placeholder="Width"
					required
					onChange={e => setWidth(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={Heigth}
					placeholder="Height"
					required
					onChange={e => setHeigth(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={Weight}
					placeholder="Weight Lbs"
					required
					onChange={e => setWeight(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					value={Address}
					placeholder="Address"
					required
					onChange={e => setAddress(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					value={City}
					placeholder="City"
					required
					onChange={e => setCity(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					value={state}
					placeholder="state"
					required
					onChange={e => setstate(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={zipcode}
					placeholder="Zipcode"
					required
					onChange={e => setzipcode(e.target.value)}
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
