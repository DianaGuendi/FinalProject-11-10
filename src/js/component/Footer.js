import React from "react";

export function Footer() {
	return (
		<div className="container-footer">
			<div className="footer row">
				<div className="card-info col-5">
					<div className="card-body">
						<div className="address">
							<i className="fas fa-map-marker-alt col-1" />
							<div className="col-11">
								<p className="card-info">5065 NW 74th Ave Unit #7</p>
								<p className="card-info">Miami, Fl 33166, USA</p>
							</div>
						</div>
						<br />
						<div className="phones">
							<i className="fas fa-phone col-1" />
							<div className="col-11">
								<p className="card-info">PH: 305-902-1999</p>
								<p href="#" className="card-info ">
									Mobile: 786-214-0223
								</p>
							</div>
						</div>
						<br />
						<div className="email">
							<i className="far fa-envelope col-1" />
							<div>
								<a href="mailto: alozano@mitlg.com" className="card-info col-11">
									alozano@mitlg.com
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="buttom-fotter col-2">
					<a href="/Quotes#request-quote" className="btn btn-warning">
						Request a Quote!
					</a>
				</div>
				<div className="map row col-5">
					<p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5117467857535!2d-80.31875538589509!3d25.819677283610435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ba2e9e3115d1%3A0x7f3ecd18d0ebbe2c!2s5065%20NW%2074th%20Ave%20%237%2C%20Miami%2C%20FL%2033166!5e0!3m2!1sen!2sus!4v1608151434641!5m2!1sen!2sus"
							width="200"
							height="auto"
							// frameborder="0"
							// style={{"border:0;"}}
							// allowfullscreen=""
							aria-hidden="false"
							// tabindex="0"
						/>
					</p>
				</div>
			</div>

			<div id="copyr" className="copyrights row">
				<footer>M.I.T Logistics INC © Copyright All rights reserved 2020</footer>
			</div>
		</div>
	);
}
