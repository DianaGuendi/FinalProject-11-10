import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function RegisterForm(props) {
	const [name, setName] = useState("");
	const [course, setCourse] = useState("");

	const { store, actions } = useContext(Context);

	let handleSubmit = e => {
		e.preventDefault();
		// if (!value) {
		// 	alert("form cannot be empty");
		// 	return;
		// }
		actions.addStudent(name, course);

		// props.addStudent(value);
		setName("");
		setCourse("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Register New User</h2>
				<input
					type="text"
					className="input"
					value={name}
					placeholder="User Name"
					required
					onChange={e => setName(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={course}
					placeholder="CompanyID"
					required
					onChange={e => setCourse(e.target.value)}
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
