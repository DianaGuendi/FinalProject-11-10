import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit1.png";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export const Navbart = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="container-fluid">
			<div className="login-but row">
				<Button className="login-button" variant="primary" onClick={handleShow}>
					Login
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<InputGroup className="userlog mb-3">
						<FormControl placeholder="username" />
					</InputGroup>
					<InputGroup className="userlog mb-3">
						<FormControl placeholder="password" />
					</InputGroup>
					{/* <Modal.Body>Woohoo</Modal.Body> */}
					<Modal.Footer>
						<Button className="login-button" variant="primary" onClick={handleClose}>
							Login
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			<div className="logomit">
				<img id="logo" src={mitlog} />
			</div>
			<div className="info-nav ">
				<div className="phones">
					<i className="fas fa-phone col-1" />
					<div className="col-11">
						<p className="card-info">305-902-1999</p>
					</div>
				</div>
				<br />
				<div className="email">
					<i className="far fa-envelope col-1" />
					<div>
						<a href="mailto: alozano@mitlg.com" className="card-info col-11">
							alozano@mitlg.com
						</a>
					</div>
				</div>
			</div>

			<Navbar collapseOnSelect expand="lg ">
				<Navbar.Toggle aria-controls="responsive-navbar-nav ml-auto" />
				<Navbar.Collapse id="responsive-navbar-nav ml-auto">
					<Nav className="mr-auto">
						<Nav.Link id="navlink" href="/">
							Home
						</Nav.Link>
						<Nav.Link id="navlink" href="/About">
							About
						</Nav.Link>
						<Nav.Link id="navlink" href="/Services">
							Services
						</Nav.Link>
						<Nav.Link id="navlink" href="/Tracking">
							Tracking
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
