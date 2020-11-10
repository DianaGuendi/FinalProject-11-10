import React from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit.jpg";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar fixed-top mr-auto navbar-expand-lg  ">
				<img id="logo" src={mitlog} />
				<button
					className="navbar-toggler "
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon bg-dark" />
				</button>
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<Link className="nav-item nav-link active" to="/">
							Home
							<span className="sr-only">(current)</span>
						</Link>
						<Link className="nav-item nav-link" to="/About">
							About
						</Link>
						<Link className="nav-item nav-link" to="/Services">
							Services
						</Link>
						<Link className="nav-item nav-link" to="/Tracking">
							Tracking
						</Link>
						<Link className="nav-item nav-link" to="/Contact">
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
