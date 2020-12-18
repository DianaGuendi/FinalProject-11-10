import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_z1203zc", "template_a4850ao", e.target, "user_OaT8pAYPS5zxkpK0KMNFJ").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	}

	return (
		<div className="container">
			<hr className="featurette-divider" />

			<h1 className="quote-title" id="request-quote">
				Submit your quote:
			</h1>
			<form className="contact-form" onSubmit={sendEmail}>
				<div className="format">
					<label className="col-1">Name: </label>
					<input className="address" type="text" name="to_name" />
				</div>
				<div className="format">
					<label className="col-1">Email: </label>
					<input className="format-email" type="email" name="from_name" />
				</div>
				<div className="format">
					<label className="col-1">Length: </label>
					<input className="dimensions" type="number" name="Length" />
					<label className="col-1">Width: </label>
					<input className="dimensions" type="number" name="Width" />
					<label className="col-1">Height: </label>
					<input className="dimensions" type="number" name="Height" />
					<label className="adjust col-1">Weight(Lbs): </label>
					<input className="dimensions" type="number" name="Weight" />
				</div>
				<div className="format">
					<label className="col-1">Address: </label>
					<input className="address" type="text" name="Address" />
				</div>
				<div className="format">
					<label className="col-1">City: </label>
					<input className="dimensions" type="text" name="City" />
					<label className="col-1">State: </label>
					<input className="dimensions" type="text" name="State" />
					<label className="adjustz col-1">Zipcode: </label>
					<input className="dimensions" type="number" name="Zipcode" />
				</div>
				<br />
				<div className="form-buttom row">
					<input className="btn-warning col-1" type="submit" value="Send" />
				</div>
			</form>
			<hr className="featurette-divider" />
		</div>
	);
}
