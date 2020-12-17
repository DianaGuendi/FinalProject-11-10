import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import PropTypes from "prop-types";

import { About } from "./views/About";
import { Home } from "./views/home";
import { Services } from "./views/Services";
import { Tracking } from "./views/Tracking";

// import injectContext from "./store/appContext";
import { Navbart } from "./component/navbar";
import { Footer } from "./component/Footer";
import { MainBody } from "./component/MainBody";
import { Quotes } from "./views/Quote1";
import ContactForm from "./views/Quotes.js";
import { Profile } from "./views/Profile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Navbart />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/About">
						<About />
					</Route>
					<Route exact path="/Services">
						<Services />
					</Route>
					<Route path="/Tracking">
						<Tracking />
					</Route>
					<Route path="/Quotes">
						<ContactForm />
					</Route>
					<Route path="/Profile">
						<Profile />
					</Route>
				</Switch>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

// // Obtener elementos
// const txtEmail = document.getElementById("txtEmail");
// const txtPassword = document.getElementById("txtPassword");
// const btnLogin = document.getElementById("btnLogin");
// const btnSignUp = document.getElementById("btnSignUp");
// const btnLogout = document.getElementById("btnSignUp");

// // Añadir Evento login
// btnLogin.addEventListener("click", e => {
// 	//Obtener email y pass
// 	const email = txtEmail.value;
// 	const pass = txtPassword.value;
// 	const auth = firebase.auth();
// 	// Sign in
// 	// const promise = auth.signInWithEmailAndPassword(email, pass);
// 	// promise.catch(e => console.log(e.message));
// 	auth.signInWithEmailAndPassword(email, pass).then(function(result) {
// 		alert("you are in");
// 	});
// });

// // event
// btnSignUp.addEventListener("click", e => {
// 	// email y pass
// 	// email is email
// 	const email = txtEmail.value;
// 	const pass = txtPassword.value;
// 	const auth = firebase.auth();
// 	// Sign in
// 	const promise = auth.createUserWithEmailAndPassword(email, pass);

// 	promise.catch(e => console.log(e.message));
// });

// btnLogout.addEventListener("click", e => {
// 	firebase.auth().signOut();
// });

// // Añadir un listener en tiempo real
// firebase.auth().onAuthStateChanged(firebaseUser => {
// 	if (firebaseUser) {
// 		console.log(firebaseUser.email);
// 		// btnLogout.classList.remove("hide");
// 	} else {
// 		console.log("no log");
// 		// btnLogout.classList.add("hide");
// 	}
// });
