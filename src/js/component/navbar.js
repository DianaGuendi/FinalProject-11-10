import React from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit.jpg";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

export const Navbart = () => {
	return (
		<div className="navbar-main">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<img id="logo" src={mitlog} />

				<div className="nphones row">
					<div className="col-1" />
					<i className="fas fa-phone col-1" />
					<div className="col-10">
						<p className="card-info">305-902-1999</p>
					</div>
					<div className="email col-2">
						<i className="far fa-envelope col-10" />
						<div>
							<a href="mailto: alozano@mitlg.com" className="card-info col-11">
								alozano@mitlg.com
							</a>
						</div>
					</div>
				</div>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/About">About</Nav.Link>
						<Nav.Link href="/Services">Services</Nav.Link>
						<Nav.Link href="/Tracking">Tracking</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
