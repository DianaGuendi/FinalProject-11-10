import React, { useState } from "react";
import PropTypes from "prop-types";

export function RegisterForm(props) {
	const [value, setValue] = useState("");
	let handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			alert("form cannot be empty");
			return;
		}
		console.log(value);
		props.addStudent(value);
		setValue("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Register New User</h2>
				<input
					type="text"
					className="input"
					value={value}
					placeholder="User Name"
					onChange={e => setValue(e.target.value)}
				/>
			</form>
		</div>
	);
}
RegisterForm.propTypes = {
	addStudent: PropTypes.func
};
