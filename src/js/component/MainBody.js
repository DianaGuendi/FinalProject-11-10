import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import rigobaby from "../../img/rigo-baby.jpg";

export function MainBody() {
	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3999659/pexels-photo-3999659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Air Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Ocean Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Land Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3821385/pexels-photo-3821385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Warehouse Services"
					/>
				</div>
			</div>
		</div>
	);
}
export default MainBody;
