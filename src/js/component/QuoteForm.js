import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function QuoteForm(props) {
	const [clength, setcLenght] = useState("");
	const [width, setWidth] = useState("");
	const [heigth, setHeigth] = useState("");
	const [weight, setWeight] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setstate] = useState("");
	const [zipcode, setzipcode] = useState("");
	const [userEmail, setuserEmail] = useState("");

	const { store, actions } = useContext(Context);

	let handleSubmit = e => {
		e.preventDefault();
		// if (!value) {
		// 	alert("form cannot be empty");
		// 	return;
		// }
		actions.addQuote(clength, width, heigth, weight, address, city, state, zipcode, userEmail);

		// props.addStudent(value);

		setcLenght("");
		setWidth("");
		setHeigth("");
		setWeight("");
		setAddress("");
		setCity("");
		setstate("");
		setzipcode("");
		setuserEmail("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Add New Quote</h2>
				<br />
				<hr className="featurette-form" />
				<div className="UserEmail">
					<input
						type="email"
						className="input"
						value={userEmail}
						placeholder="User Email"
						required
						onChange={e => setuserEmail(e.target.value)}
					/>
				</div>
				<br />
				<div className="dimensions-login">
					<input
						type="number"
						className="input"
						value={clength}
						placeholder="Length"
						required
						onChange={e => setcLenght(e.target.value)}
					/>

					<input
						type="number"
						className="input"
						value={width}
						placeholder="Width"
						required
						onChange={e => setWidth(e.target.value)}
					/>
					<input
						type="number"
						className="input"
						value={heigth}
						placeholder="Height"
						required
						onChange={e => setHeigth(e.target.value)}
					/>
					<input
						type="number"
						className="input"
						value={weight}
						placeholder="Weight Lbs"
						required
						onChange={e => setWeight(e.target.value)}
					/>
				</div>
				<br />
				<input
					type="text"
					className="input"
					value={address}
					placeholder="Address"
					required
					onChange={e => setAddress(e.target.value)}
				/>
				<input
					type="text"
					className="input"
					value={city}
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
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
