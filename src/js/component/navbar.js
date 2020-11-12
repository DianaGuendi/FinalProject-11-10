import React from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit.jpg";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

export const Navbart = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
				<img id="logo" src={mitlog} />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/About.js">About</Nav.Link>
						<Nav.Link href="/Services">Services</Nav.Link>
						<Nav.Link href="/Tracking">Tracking</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					{/* <Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav> */}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
