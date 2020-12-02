import React from "react";
import mit from "../../img/mit.jpg";
import { useParams, useLocation, useHistory } from "react-router-dom";

export function Profile() {
	let params = useParams();
	let student = useLocation().student;
	let status = student.registered ? "Registered" : "Not Registered";
	let history = useHistory();
	console.log(student);
	return (
		<div>
			<h3>User Name: {student.name}</h3>
			<h3>User Status: {status}</h3>
			<p> User Id: {params.id}</p>
			<button onClick={() => history.goBack()}>Go back</button>
		</div>
	);
}
