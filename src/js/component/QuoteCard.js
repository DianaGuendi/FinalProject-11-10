import React from "react";
import PropTypes from "prop-types";

export function QuoteCard(props) {
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
						{props.Length}
					</h1>
					<h1 className="card-titleQ col-3">
						Width:
						{props.Width}
					</h1>
					<h1 className="card-titleQ col-3">
						Height:
						{props.Height}
					</h1>
					<h1 className="card-titleQ col-3">
						Weight:
						{props.Weight}
					</h1>
				</div>

				<div className="quotes row">
					<h1 className="card-titleQ col-3">{props.Address}</h1>
					<h1 className="card-titleQ col-3">{props.City}</h1>
					<h1 className="card-titleQ col-3">{props.state}</h1>
					<h1 className="card-titleQ col-3">{props.zipcode}</h1>
				</div>
			</div>
		</div>
	);
}
QuoteCard.propTypes = {
	index: PropTypes.number,
	zipcode: PropTypes.number,
	Length: PropTypes.number,
	Width: PropTypes.number,
	Height: PropTypes.number,
	Weight: PropTypes.number,
	Address: PropTypes.string,
	City: PropTypes.string,
	state: PropTypes.string
};
export default QuoteCard;
