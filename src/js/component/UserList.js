import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard.js";
import { RegisterForm } from "./RegisterForm.js";
import { Context } from "../store/appContext";

export function UserList() {
	const { store, actions } = useContext(Context);
	let test = "";

	console.log(actions.getStudents());

	if (store.students.length == 0) {
		test = "nothing to show";
	} else {
		test = (
			<div className="row">
				{store.students.map((student, index) => (
					<UserCard key={index} student={student} />
				))}
				{/* <h1> User List</h1> */}
			</div>
		);
	}

	// const AddStudent = value => {
	// 	const newList = [...students, { name: value, registered: false }];
	// 	setStudents(newList);
	// };
	return (
		<div>
			<div className="row">
				<RegisterForm />
				<p>Register fom will go here</p>
			</div>
			{test}
			{/* <div className="row">
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
			</div> */}
		</div>
	);
}
