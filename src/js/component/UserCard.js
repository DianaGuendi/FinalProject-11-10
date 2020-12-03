import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import mit from "../../img/mit.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function UserCard(props) {
	const { store, actions } = useContext(Context);
	let quotes = actions.getQuotes();

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-8">
					<div className="col-md-4">
						<img src={mit} className="card-img" alt="..." />
					</div>{" "}
					<div className="card-body" />
					<h5 className="card-title">User Name: {props.student.name}</h5>
					<p className="card-text">
						Student ID:
						{props.student.id}
					</p>
					<p className="card-text">
						Quotes:
						{quotes[props.student.companyID - 1].zipcode}
					</p>
					<Link
						className="btn btn-info"
						// to={`/Profile/${props.index}`}
						to={{
							pathname: "/Profile/" + props.student.id
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
	student: PropTypes.object
};
