import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Context } from "../store/appContext";

export function Tracking() {
	const { store, actions } = useContext(Context);

	return (
		<div className="tracking-container">
			<hr className="tracking-divider" />
			<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
				<h1 className="display-4">Track Your Cargo</h1>
			</div>
			<div className="container-main row">
				<div className="container-airlines col-7">
					<div className="buttons">
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">Latam Cargo</h5>
								<a
									href="https://www.latamcargo.com/en/e-tracking"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
						<div className="buttons">
							<div className="card-tracking text-center col-sm">
								<div className="card-body">
									<h5 className="card-title">Tampa Cargo</h5>

									<a
										href="http://www.aviancacargo.com/index.aspx"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary">
										Track
									</a>
								</div>
							</div>
							<div className="card-tracking text-center col-sm">
								<div className="card-body">
									<h5 className="card-title">TC Cargo</h5>

									<a
										href="http://transcaribbean.cargolink.aero/cargolinktracking/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary">
										Track
									</a>
								</div>
							</div>
							<div className="card-tracking text-center col-sm">
								<div className="card-body">
									<h5 className="card-title">DHL</h5>

									<a
										href="https://www.dhl.com/content/g0/en/logistics/customer_resource_area/freight_tracking_and_applications/air_freight_tracking.html"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary">
										Track
									</a>
								</div>
							</div>
							<div className="card-tracking text-center col-sm">
								<div className="card-body">
									<h5 className="card-title">UPS</h5>

									<a
										href="https://aircargo.ups.com/en-US/Tracking"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary">
										Track
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="icon-title col-5">
					<i className="fas fa-plane-departure" />
					<p className="airline">Airlines</p>
				</div>
			</div>
			<br />

			<div className="container-Trucking row">
				<div className="icon-title col-5">
					<i className="fas fa-truck-moving" />
					<p className="trucking">Trucking</p>
				</div>
				<div className="container-trucking col-7">
					<div className="buttons">
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">UPS Freight</h5>

								<a
									href="https://www.upsfreight.com/ltl/apps/home/"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">R&L</h5>

								<a
									href="https://www.rlcarriers.com/freight/shipping/shipment-tracing"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">XPO Logistics</h5>

								<a
									href="https://app.ltl.xpo.com/appjs/tracking/search"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">FedEx Freight</h5>

								<a
									href="http://www.fedexfreight.fedex.com/ca_english/tracking/"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
						<div className="card-tracking text-center col-sm">
							<div className="card-body">
								<h5 className="card-title">Central Transport</h5>

								<a
									href="http://www.centraltransportint.com/Confirm/Trace.aspx?"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Track
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr className="tracking-divider" />

			<div>
				<p>{store.tracking}</p>
			</div>
		</div>
	);
}

export default Tracking;
