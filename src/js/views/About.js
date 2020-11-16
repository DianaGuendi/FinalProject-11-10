import React from "react";

export function About() {
	return (
		<div className="about-text">
			<div className="container marketing">
				{/* <!-- START THE FEATURETTES --> */}

				<hr className="featurette-divider" />

				<div className="main-cont col-12">
					<div className="row featurette">
						<div className="col-sm-7">
							<br />

							<h2 className="featurette-heading">About Us</h2>
							<p className="lead">
								At MIT Logistics INC, the client is our best need. We use our network to help customers
								manage their goods most efficiently throughout their supply chains. At the top of our
								value proposition is an intense customer service culture that connects our team
								worldwide. Our people focus on finding new ways to help our customers succeed, while
								becoming continuously more efficient ourselves.{" "}
							</p>
						</div>
						<div className="col-sm-5">
							<img
								className="container-fluid"
								src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
								alt="Girl in a jacket"
							/>
						</div>
					</div>
				</div>
				<hr className="featurette-divider" />
			</div>
		</div>
	);
}
