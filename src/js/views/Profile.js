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

	let params = useParams();
	let history = useHistory();
	let student = actions.getStudent(params.id);
	// let quote = actions.getQuote(student.companyID);
	let userQuotes = actions.getQuotesByUser(params.id);
	console.log(student);
	let content = "User not found";
	if (Object.keys(student).length !== 0) {
		content = (
			<div>
				<h3>User Name: {student.name}</h3>
				<p> User Id: {student.id}</p>
				{/* <p>Quotes: {quote.Address}</p> */}
				<button onClick={() => history.goBack()}>Go back</button>
			</div>
		);
	}
	return (
		<div>
			{content}

			<QuoteForm />
			{/* <QuoteCard quotes={store.quotes[0]} /> */}
			{userQuotes.map((quote, index) => (
				<QuoteCard key={index} quotes={quote} />
			))}
		</div>
	);
}
