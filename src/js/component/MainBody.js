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
					<a href="/Services#air-trans" className="btn btn-primary">
						Find out more!
					</a>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-ship" myTittle=" Ocean Transportation" />
					<br />
					<a href="/Services#ocean-trans" className="btn btn-primary">
						Find out more!
					</a>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-truck-moving" myTittle="Land Transportation" />
					<br />
					<a href="/Services#land-trans" className="btn btn-primary">
						Find out more!
					</a>
				</div>
				<div className="col-sm">
					<Card myIcon="fas fa-warehouse" myTittle="Warehouse Services" />
					<br />
					<a href="/Services#warehouse-serv" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
export default MainBody;
