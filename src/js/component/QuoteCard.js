import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function QuoteCard(props) {
	const { store, actions } = useContext(Context);
	let quotes = actions.getQuotes();

	return (
		<div className="card border-dark col-12">
			<div className=" quote-main">
				<div className="card-header">
					Quote #:
					{props.quotes.index}
				</div>
				<div className="card-body text-dark">
					<div className="quotes row">
						<h1 className="card-titleQ col-3">
							Length:
							{props.quotes.clength}
						</h1>
						<h1 className="card-titleQ col-3">
							Width:
							{props.quotes.width}
						</h1>
						<h1 className="card-titleQ col-3">
							Height:
							{props.quotes.height}
						</h1>
						<h1 className="card-titleQ col-3">
							Weight:
							{props.quotes.weight}
						</h1>
					</div>

					<div className="quotes row">
						<h1 className="card-titleQ col-3">Address: {props.quotes.address}</h1>
						<h1 className="card-titleQ col-3">City: {props.quotes.city}</h1>
						<h1 className="card-titleQ col-3">State: {props.quotes.state}</h1>
						<h1 className="card-titleQ col-3">Zipcode: {props.quotes.zipcode}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
QuoteCard.propTypes = {
	student: PropTypes.object,
	index: PropTypes.number,
	zipcode: PropTypes.number,
	Length: PropTypes.number,
	Width: PropTypes.number,
	Height: PropTypes.number,
	Weight: PropTypes.number,
	Address: PropTypes.string,
	City: PropTypes.string,
	state: PropTypes.string,
	quotes: PropTypes.object
};
