import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import mitlog from "../../img/mit1.png";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export const Navbart = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [show1, setShow1] = useState(false);
	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);
	//================LogIn==================================
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
	//=================SignUP=================================
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
			location.replace("/Profile");
		} catch (error) {
			alert(error);
		}
	}, []);
	//=================LogOut=================================
	const handleLogOut = useCallback(async event => {
		firebase
			.auth()
			.signOut()
			.then(function() {
				// Sign-out successful.
				location.replace("/Home");
			})
			.catch(function(error) {
				// An error happened.
			});
	}, []);

	return (
		<div className="container-fluid">
			<div className="logoinfolog row">
				<div className="logomit col-3">
					<img id="logo" src={mitlog} />
				</div>
				<div className="info-nav col-2">
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
					<Button className="mbtns" variant="primary" onClick={handleShow} data-modal="modal1">
						Log-In
					</Button>
					<Modal show={show} onHide={handleClose} id="modal1">
						<Modal.Header closeButton>
							<Modal.Title>Login</Modal.Title>
						</Modal.Header>
						<form id="login-form" onSubmit={handleLogin}>
							<div className="input-field">
								<label htmlFor="login-email">Email address</label>
								<input name="email" id="txtEmail" type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<label htmlFor="login-password">Your password</label>
								<input name="password" id="txtPassword" type="password" placeholder="Password" />
							</div>
							<button className="btn btn-action" id="btnLogin">
								LogIn
							</button>
						</form>
					</Modal>

					{/* ++++++++++++++SignUp++++++++++++++++++++++++++++++++++++++++++++++++++ */}
					<div className="SignUp-but">
						<Button className="mbtns" variant="primary" onClick={handleShow1} data-modal="modal2">
							SignUp
						</Button>
						<Modal show={show1} onHide={handleClose1} id="modal2">
							<Modal.Header closeButton>
								<Modal.Title>SignUp</Modal.Title>
							</Modal.Header>
							<form id="SignUp-form" onSubmit={handleSignUp}>
								<div className="input-field">
									<label htmlFor="login-email">Email address</label>
									<input name="email" id="txtEmail" type="email" placeholder="Email" />
								</div>
								<div className="input-field">
									<label htmlFor="login-password">Your password</label>
									<input name="password" id="txtPassword" type="password" placeholder="Password" />
								</div>
								<button className="btn btn-warning" id="btnSignUp">
									SignUp
								</button>
							</form>
						</Modal>
					</div>

					<div className="SignUp-but">
						<Button className="mbtns" variant="primary" onClick={handleLogOut}>
							LogOut
						</Button>
					</div>
				</div>
				<div className="navbar-alig col-12">
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
		</div>
	);
};
