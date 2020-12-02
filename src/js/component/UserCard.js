import React from "react";
import PropTypes from "prop-types";
import mit from "../../img/mit.jpg";
import { Link } from "react-router-dom";

export function UserCard(props) {
	let registerBtn = "Register User";
	let btnClass = "btn-success";
	if (props.student.registered == true) {
		registerBtn = "Unregister User";
		btnClass = "btn-danger";
	}

	console.log(props.student);

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-8">
					<div className="col-md-4">
						<img src={mit} className="card-img" alt="..." />
					</div>{" "}
					<div className="card-body" />
					<h5 className="card-title">{props.student.name}</h5>
					<p className="card-text">
						Student ID:
						{props.index}
					</p>
					<p className="card-text" style={{ color: props.student.registered ? "green" : "red" }}>
						Registered:
						{props.student.registered.toString()}
					</p>
					<button className={"btn " + btnClass} onClick={() => props.register(props.index)}>
						{registerBtn}
					</button>
					<Link
						className="btn btn-info"
						// to={`/Profile/${props.index}`}
						to={{
							pathname: "/Profile/" + props.index,
							student: props.student
						}}>
						View Profile
					</Link>
				</div>
			</div>
		</div>
	);
}
UserCard.propTypes = {
	index: PropTypes.number,
	// name: PropTypes.string,
	// registered: PropTypes.bool,
	register: PropTypes.func,
	student: PropTypes.object
};
