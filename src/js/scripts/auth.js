import React from "react";
import ReactDOM from "react-dom"

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
	e.preventDefault();
	// get user info
	const email = loginForm["login-email"].value;
	const password = loginForm["login-password"].value;
	console.log(email, password);
});
