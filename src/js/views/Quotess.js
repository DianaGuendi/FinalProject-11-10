import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
	Modal,
	Button,
	InputGroup,
	FormGroup,
	FormFeedback,
	FormControl,
	Form,
	Col,
	Label,
	Input
} from "react-bootstrap";

class ContactForm extends Component {
	state = {
		name: "",
		email: "",
		Length: "",
		Width: "",
		Height: "",
		Weight: "",
		Address: "",
		City: "",
		State: "",
		Zipcode: ""
	};
	handleSubmit(e) {
		e.preventDefault();

		const { name, email, Length, Width, Height, Weight, Address, City, State, Zipcode } = this.state;
		let templateParams = {
			from_name: email,
			to_name: "alozano@mitlg.com",
			subject: subject,
			message_html: message
		};
		emailjs.send("outlook", "template_05jcv3w", templateParams, "user_OaT8pAYPS5zxkpK0KMNFJ");
		this.resetForm();
	}
	resetForm() {
		this.setState({
			name: "",
			email: "",
			Length: "",
			Width: "",
			Height: "",
			Weight: "",
			Address: "",
			City: "",
			State: "",
			Zipcode: ""
		});
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value });
	};
	render() {
		return (
			<>
				<div>
					<h1 className="p-heading1">Send new Quote</h1>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormGroup controlId="formBasicEmail">
							<Label className="text-muted">Email address</Label>
							<Input
								type="email"
								name="email"
								value={this.state.email}
								className="text-primary"
								onChange={this.handleChange.bind(this, "email")}
								placeholder="Enter email"
							/>
						</FormGroup>
						<FormGroup controlId="formBasicName">
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
						</FormGroup>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<hr className="featurette-divider" />
				</div>
			</>
		);
	}
}
export default ContactForm;
