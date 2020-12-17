// import React from "react";
// import emailjs from "emailjs-com";

// export default function ContactUs() {
// 	function sendEmail(e) {
// 		e.preventDefault();

// 		emailjs.sendForm("service_z1203zc", "template_a4850ao", e.target, "user_OaT8pAYPS5zxkpK0KMNFJ").then(
// 			result => {
// 				console.log(result.text);
// 			},
// 			error => {
// 				console.log(error.text);
// 			}
// 		);
// 	}

// 	return (
// 		<div className="container">
// 			<hr className="featurette-divider" />

// 			<h1 className="quote-title" id="request-quote">
// 				Submit your quote:
// 			</h1>
// 			<form className="contact-form" onSubmit={sendEmail}>
// 				<label>Name</label>
// 				<input type="text" name="to_name" />
// 				<label>Email</label>
// 				<input type="email" name="from_name" />
// 				<label>Length</label>
// 				<input type="number" name="Length" />
// 				<label>Width</label>
// 				<input type="number" name="Width" />
// 				<label>Height</label>
// 				<input type="number" name="Height" />
// 				<label>Weight(Lbs)</label>
// 				<input type="number" name="Weight" />
// 				<label>Address</label>
// 				<input type="text" name="Address" />
// 				<label>City</label>
// 				<input type="text" name="City" />
// 				<label>State</label>
// 				<input type="text" name="State" />
// 				<label>Zipcode</label>
// 				<input type="number" name="Zipcode" />

// 				<input type="submit" value="Send" />
// 			</form>
// 		</div>
// 	);
// }
