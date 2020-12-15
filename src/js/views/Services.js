import React from "react";

export function Services() {
	return (
		<div className="container marketing">
			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7">
					<h2 className="featurette-heading">Air Freight</h2>
					<p className="lead">
						Through our international partner network, MIT LOGISTICS INC offers air freight services to most
						locations around the world. We pride ourselves on our ability to help everyone -- from
						first-time shippers to our established air import and export customers.
					</p>
				</div>
				<div className="col-md-5">
					<svg
						className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
						width="500"
						height="500"
						xmlns="https://images.pexels.com/photos/249581/pexels-photo-249581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
						role="img"
						aria-label="Placeholder: 500x500">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" />
						<text x="50%" y="50%" fill="#aaa" dy=".3em">
							500x500
						</text>
					</svg>
				</div>
			</div>

			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading">Ocean Freight</h2>
					<p className="lead">
						At MIT LOGISTICS INC we get your ocean freight where it needs to go as quickly and economically
						as possible. Working a network of shipping lines, we leverage our vast industry experience to
						get you the best ocean freight rates
					</p>
				</div>
				<div className="col-md-5 order-md-1">
					<svg
						className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
						width="500"
						height="500"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
						role="img"
						aria-label="Placeholder: 500x500">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" />
						<text x="50%" y="50%" fill="#aaa" dy=".3em">
							500x500
						</text>
					</svg>
				</div>
			</div>

			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7">
					<h2 className="featurette-heading">Land Freight Services</h2>
					<p className="lead">
						A simple domestic inland can be the best option for your cargo to move across the US or even
						just across the county. We coordinate the pickup, track the shipment, and ensure it is delivered
						the last mile to its final destination. When we handle all the details of your shipment, you
						have a guarantee of great service.
					</p>
				</div>
				<div className="col-md-5">
					<svg
						className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
						width="500"
						height="500"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
						role="img"
						aria-label="Placeholder: 500x500">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" />
						<text x="50%" y="50%" fill="#aaa" dy=".3em">
							500x500
						</text>
					</svg>
				</div>
			</div>

			<hr className="featurette-divider" />

			{/* <!-- /END THE FEATURETTES --> */}
		</div>
	);
}

export default Services;
