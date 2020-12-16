import React from "react";

export function Services() {
	return (
		<div className="container marketing">
			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7">
					<h2 className="featurette-heading" id="air-trans">
						Air Transportation
					</h2>
					<p className="lead">
						Through our international partner network, MIT LOGISTICS INC offers air freight services to most
						locations around the world. We pride ourselves on our ability to help everyone -- from
						first-time shippers to our established air import and export customers.
					</p>
				</div>
				<div className="col-md-5">
					<img
						className="image-about"
						src="https://cdn.pixabay.com/photo/2017/04/08/22/04/airplane-2214497__340.jpg"
						alt="Air cargo"
					/>
				</div>
			</div>

			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading" id="ocean-trans">
						Ocean Transportation
					</h2>
					<p className="lead">
						At MIT LOGISTICS INC we get your ocean freight where it needs to go as quickly and economically
						as possible. Working a network of shipping lines, we leverage our vast industry experience to
						get you the best ocean freight rates
					</p>
				</div>
				<div className="col-md-5 order-md-1">
					<img
						className="image-about"
						src="https://cdn.pixabay.com/photo/2019/04/28/15/18/container-ship-on-the-sea-4163424__340.jpg"
						alt="ocean cargo"
					/>
				</div>
			</div>

			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7">
					<h2 className="featurette-heading" id="land-trans">
						Land Transportation
					</h2>
					<p className="lead">
						A simple domestic inland can be the best option for your cargo to move across the US or even
						just across the county. We coordinate the pickup, track the shipment, and ensure it is delivered
						the last mile to its final destination. When we handle all the details of your shipment, you
						have a guarantee of great service.
					</p>
				</div>
				<div className="col-md-5">
					<img
						className="image-about"
						src="https://cdn.pixabay.com/photo/2014/04/24/16/40/truck-331499__340.jpg"
						alt="Trucking"
					/>
				</div>
			</div>
			<hr className="featurette-divider" />
			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading" id="warehouse-serv">
						Warehouse Services
					</h2>
					<p className="lead">
						We take pride in catering to a broad range of clientele. Our warehousing service is
						comprehensive, reliable and flexible which is essential to accompany our clients in their
						objective of commercializing their products . Building a sustainable logistics model we are
						focused on not only increasing efficiency, but cutting down costs.
					</p>
				</div>

				<div className="col-md-5 order-md-1">
					<img
						className="image-about"
						src="https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201__340.jpg"
						alt="Warehouse"
					/>
				</div>
			</div>

			<hr className="featurette-divider" />

			{/* <!-- /END THE FEATURETTES --> */}
		</div>
	);
}

export default Services;
