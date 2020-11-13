import React from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit.jpg";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

export const Navbart = () => {
	return (
		<div className="navbar-main">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<img id="logo" src={mitlog} />
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
