import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import rigobaby from "../../img/rigo-baby.jpg";

export function MainBody() {
	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-sm">
					<Card myIcon="fas fa-plane-departure" myTittle="Air Transportation" />
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-ship" myTittle=" Ocean Transportation" />
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-truck-moving" myTittle="Land Transportation" />
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-warehouse" myTittle="Warehouse Services" />
				</div>
			</div>
		</div>
	);
}
export default MainBody;
