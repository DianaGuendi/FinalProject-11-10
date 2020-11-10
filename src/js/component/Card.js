import React from "react";
import PropTypes from "prop-types";
export function Card(props) {
	console.log(props.myPicture);

	return (
		<div className="card">
			<img className="card-img-top" src={props.myPicture} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title justify center">{props.myTittle}</h5>
				<p className="card-text">
					{
						"Some quick example text to build on the card title and make up the bulk's of the card's content. This is an example of how the card will be render on our website."
					}
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	myTittle: PropTypes.string,
	myPicture: PropTypes.string // this is the path of the image, not the image itself so the type is string
};
export default Card;
