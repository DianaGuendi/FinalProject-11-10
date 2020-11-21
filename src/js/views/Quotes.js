import React from "react";
import { Modal, Button, InputGroup, FormControl, Form, Col } from "react-bootstrap";

export function Quotes() {
	return (
		<div className="container">
			<hr className="featurette-divider" />
			<div className="Quotes-form">
				<Form>
					<Form.Group controlId="exampleForm.SelectCustom">
						<Form.Label>Type of Cargo</Form.Label>
						<Form.Control as="select" custom>
							<option>General Cargo</option>
							<option>Hazmat</option>
						</Form.Control>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control type="string" placeholder="Name" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Phone</Form.Label>
							<Form.Control type="number" placeholder="Phone" />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Length</Form.Label>
							<Form.Control type="number" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Width</Form.Label>
							<Form.Control type="number" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Height</Form.Label>
							<Form.Control type="number" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Weight(Lbs)</Form.Label>
							<Form.Control type="number" />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder="1234 Main St" />
					</Form.Group>

					<Form.Group controlId="formGridAddress2">
						<Form.Label>Address 2</Form.Label>
						<Form.Control placeholder="Suite, Unit" />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control />
						</Form.Group>
					</Form.Row>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
			<hr className="featurette-divider" />
		</div>
	);
}

export default Quotes;
