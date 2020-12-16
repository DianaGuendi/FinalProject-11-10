import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit1.png";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export const Navbart = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//COPYT THIS
	const handleLogin = useCallback(async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
			location.replace("/Profile");
		} catch (error) {
			alert(error);
		}
	}, []);

	return (
		<div className="container-fluid">
			<div className="logoinfolog row">
				<div className="logomit col-3">
					<img id="logo" src={mitlog} />
				</div>
				<div className="info-nav col-3">
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
				<div className="info-nav col-3">
					<a href="/Quotes#request-quote" className="btn btn-warning">
						Request a Quote!
					</a>
				</div>
				{/* codigo de login =======================================================*/}
				<div className="login-but col-3">
					<Button className="login-button" variant="primary" onClick={handleShow}>
						Login
					</Button>

					<Modal show={show} onHide={handleClose} className="modal">
						<Modal.Header closeButton>
							<Modal.Title>Login</Modal.Title>
						</Modal.Header>
						<form id="login-form" onSubmit={handleLogin}>
							<div className="input-field">
								<label htmlFor="login-email">Email address</label>
								{/* <input type="email" id="txtEmail" required /> */}
								<input name="email" id="txtEmail" type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<label htmlFor="login-password">Your password</label>
								<input name="password" id="txtPassword" type="password" placeholder="Password" />
								{/* <input type="password" id="txtPassword" required /> */}
							</div>
							<button className="btn btn-action" id="btnLogin">
								Login
							</button>
							<button className="btn btn-action" id="btnSignUp">
								SignUp
							</button>
							<button className="btn btn-action" id="btnLogout">
								Logout
							</button>
						</form>
					</Modal>
				</div>
			</div>
			<div className="navbar-alig">
				<Navbar collapseOnSelect expand="lg ">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav ">
						<Nav className="justify-content-center">
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
							<Nav.Link id="navlink" href="/Quotes">
								Quotes
							</Nav.Link>
							{/* <Nav.Link id="navlink" href="#" data-target="modal-login">
								Login
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

//   <!-- LOGIN MODAL -->
{
	/* <div id="modal-login" className="modal">
	<div className="modal-content">
		<h4>Login</h4>
		<br />
		<form id="login-form">
			<div className="input-field">
				<input type="email" id="login-email" required />
				<label htmlFor="login-email">Email address</label>
			</div>
			<div className="input-field">
				<input type="password" id="login-password" required />
				<label htmlFor="login-password">Your password</label>
			</div>
			<button className="btn yellow darken-2 z-depth-0">Login</button>
		</form>
	</div>
</div>; */
}
