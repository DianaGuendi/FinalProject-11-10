import React, { useContext } from "react";
import mit from "../../img/mit.jpg";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";
import { QuoteForm } from "../component/QuoteForm";
import { QuoteCard } from "../component/QuoteCard";
import PropTypes from "prop-types";

export function Profile() {
	const { store, actions } = useContext(Context);
	console.log(store);

	// let params = useParams();
	let history = useHistory();
	let currentUser = store.currentUser;
	// let student = actions.getStudent(params.id);
	// let quote = actions.getQuote(student.companyID);
	let userQuotes = actions.getQuotesByUser(currentUser);
	console.log(userQuotes);
	let content = "User not found";
	if (currentUser !== "") {
		content = (
			<div>
				<h3>User Email: {currentUser}</h3>
				{/* <p> User Id: {student.id}</p> */}
				{/* <p>Quotes: {quote.Address}</p> */}
				<button onClick={() => history.goBack()}>Go back</button>
			</div>
		);
	}
	return (
		<div className="profile-content">
			{content}
			{/* <h1>Profile: {currentUser}</h1> */}
			<QuoteForm />
			{/* <QuoteCard quotes={store.quotes[0]} /> */}
			<br />
			<hr className="featurette-form" />

			{userQuotes.map((quote, index) => (
				<QuoteCard key={index} quotes={quote} />
			))}
			{/* <hr className="featurette-form" /> */}
		</div>
	);
}
