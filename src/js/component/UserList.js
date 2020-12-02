import React, { useState } from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard.js";
import { RegisterForm } from "./RegisterForm.js";
export function UserList() {
	const [students, setStudents] = useState([
		{ name: "Daniel", registered: true },
		{ name: "Andres", registered: true },
		{ name: "Diana", registered: false }
	]);
	let test = "";
	if (students.length == 0) {
		test = "nothing to show";
	} else {
		test = (
			<div className="row">
				{students.map((student, index) => (
					<UserCard
						key={index}
						index={index}
						name={student.name}
						registered={student.registered}
						register={RegisterStudent}
					/>
				))}
			</div>
		);
	}
	// its a copy to all list...
	const RegisterStudent = idx => {
		const newList = [...students];
		newList[idx].registered = !newList[idx].registered;
		setStudents(newList);
	};
	const AddStudent = value => {
		const newList = [...students, { name: value, registered: false }];
		setStudents(newList);
	};
	return (
		<div>
			<div className="row">
				<RegisterForm addStudent={AddStudent} />
			</div>
			<div className="row">
				{students.map((student, index) => (
					<UserCard
						key={index}
						index={index}
						// name={student.name}
						// registered={student.registered}
						register={RegisterStudent}
						student={student}
					/>
				))}
			</div>
		</div>
	);
}
