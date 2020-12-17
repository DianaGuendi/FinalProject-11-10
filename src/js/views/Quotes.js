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
				<input type="hidden" name="contact_number" />
				<label>Name</label>
				<input type="text" name="to_name" />
				<label>Email</label>
				<input type="email" name="from_name" />
				<label>Length</label>
				<input type="number" name="Length" />
				<label>Width</label>
				<input type="number" name="Width" />
				<label>Height</label>
				<input type="number" name="Height" />
				<label>Weight(Lbs)</label>
				<input type="number" name="Weight" />
				<label>Address</label>
				<input type="text" name="Address" />
				<label>City</label>
				<input type="text" name="City" />
				<label>State</label>
				<input type="text" name="State" />
				<label>Zipcode</label>
				<input type="number" name="Zipcode" />

				<input type="submit" value="Send" />
			</form>
		</div>
	);
}

// import React, { Component } from "react";
// import * as emailjs from "emailjs-com";
// import Layout from "../../js/layout";

// import {
// 	Modal,
// 	Button,
// 	InputGroup,
// 	FormGroup,
// 	FormFeedback,
// 	FormControl,
// 	Form,
// 	Col,
// 	Label,
// 	Input
// } from "react-bootstrap";

// class ContactForm extends Component {
// 	state = {
// 		name: "",
// 		email: "",
// 		Length: "",
// 		Width: "",
// 		Height: "",
// 		Weight: "",
// 		Address: "",
// 		City: "",
// 		State: "",
// 		Zipcode: ""
// 	};
// 	handleSubmit(e) {
// 		e.preventDefault();

// 		const { name, email, Length, Width, Height, Weight, Address, City, State, Zipcode } = this.state;
// 		let templateParams = {
// 			from_name: email,
// 			to_name: "alozano@mitlg.com",
// 			subject: subject,
// 			message_html: message
// 		};
// 		emailjs.send("outlook", "template_05jcv3w", templateParams, "user_OaT8pAYPS5zxkpK0KMNFJ");
// 		this.resetForm();
// 	}
// 	resetForm() {
// 		this.setState({
// 			name: "",
// 			email: "",
// 			Length: "",
// 			Width: "",
// 			Height: "",
// 			Weight: "",
// 			Address: "",
// 			City: "",
// 			State: "",
// 			Zipcode: ""
// 		});
// 	}
// 	handleChange = (param, e) => {
// 		this.setState({ [param]: e.target.value });
// 	};
// 	render() {
// 		return (

// 				<Layout>
// 					<h1 className="p-heading1">Send new Quote</h1>
// 					<Form onSubmit={this.handleSubmit.bind(this)}>
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Label className="text-muted"> Email address</Form.Label>
// 							<Input
// 								type="email"
// 								name="email"
// 								value={this.state.email}
// 								className="text-primary"
// 								onChange={this.handleChange.bind(this, "email")}
// 								placeholder="Enter email"
// 							/>
// 						</Form.Group>
{
	/* <FormGroup controlId="formBasicName">
							<Label className="text-muted">Name</Label>
							<Input
								type="text"
								name="name"
								value={this.state.name}
								className="text-primary"
								onChange={this.handleChange.bind(this, "name")}
								placeholder="Name"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicLength">
							<Label className="text-muted">Length</Label>
							<Input
								type="text"
								name="Length"
								className="text-primary"
								value={this.state.Length}
								onChange={this.handleChange.bind(this, "Length")}
								placeholder="Length"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicWidth">
							<Label className="text-muted">Width</Label>
							<Input
								type="text"
								name="Width"
								className="text-primary"
								value={this.state.Width}
								onChange={this.handleChange.bind(this, "Width")}
								placeholder="Width"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicHeight">
							<Label className="text-muted">Height</Label>
							<Input
								type="text"
								name="Height"
								className="text-primary"
								value={this.state.Height}
								onChange={this.handleChange.bind(this, "Height")}
								placeholder="Height"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicWeight">
							<Label className="text-muted">Weight</Label>
							<Input
								type="text"
								name="Weight"
								className="text-primary"
								value={this.state.Weight}
								onChange={this.handleChange.bind(this, "Weight")}
								placeholder="Weight (Lbs)"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicAddress">
							<Label className="text-muted">Address</Label>
							<Input
								type="text"
								name="Address"
								className="text-primary"
								value={this.state.Address}
								onChange={this.handleChange.bind(this, "Address")}
								placeholder="Address"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicCity">
							<Label className="text-muted">City</Label>
							<Input
								type="text"
								name="City"
								className="text-primary"
								value={this.state.City}
								onChange={this.handleChange.bind(this, "City")}
								placeholder="City"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicState">
							<Label className="text-muted">State</Label>
							<Input
								type="text"
								name="State"
								className="text-primary"
								value={this.state.State}
								onChange={this.handleChange.bind(this, "State")}
								placeholder="State"
							/>
						</FormGroup>
						<FormGroup controlId="formBasiZipcode">
							<Label className="text-muted">Zipcode</Label>
							<Input
								type="textarea"
								name="Zipcode"
								className="text-primary"
								value={this.state.Zipcode}
								onChange={this.handleChange.bind(this, "Zipcode")}
								placeholder="Zipcode"
							/>
						</FormGroup> */
}
{
	/* <Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<hr className="featurette-divider" />
				</Layout>
			
		);
	}
}
export default ContactForm; */
}
