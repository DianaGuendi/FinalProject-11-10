import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import rigobaby from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export function MainBody() {
	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-sm">
					<Card myIcon="fas fa-plane-departure" myTittle="Air Transportation" />
					<br />
					<Link to="/Services.js" className="btn btn-primary">
						Find out more!
					</Link>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-ship" myTittle=" Ocean Transportation" />
					<br />
					<Link to="/Services.js#air-trans" className="btn btn-primary">
						Find out more!
					</Link>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-truck-moving" myTittle="Land Transportation" />
					<br />
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-warehouse" myTittle="Warehouse Services" />
					<br />
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
export default MainBody;
