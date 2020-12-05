import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function QuoteCard(props) {
	const { store, actions } = useContext(Context);
	let quotes = actions.getQuotes();

	return (
		<div className="card border-dark col-12">
			<div className="card-header">
				Quote #:
				{props.index}
			</div>
			<div className="card-body text-dark">
				<div className="quotes row">
					<h1 className="card-titleQ col-3">
						Length:
						{props.quotes.cLength}
					</h1>
					<h1 className="card-titleQ col-3">
						Width:
						{props.quotes.Width}
					</h1>
					<h1 className="card-titleQ col-3">
						Height:
						{props.quotes.Height}
					</h1>
					<h1 className="card-titleQ col-3">
						Weight:
						{props.quotes.Weight}
					</h1>
				</div>

				<div className="quotes row">
					<h1 className="card-titleQ col-3">{props.quotes.Address}</h1>
					<h1 className="card-titleQ col-3">{props.quotes.City}</h1>
					<h1 className="card-titleQ col-3">{props.quotes.state}</h1>
					<h1 className="card-titleQ col-3">{props.quotes.zipcode}</h1>
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
