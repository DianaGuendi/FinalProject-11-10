import React from "react";

export function Footer() {
	return (
		<div className="footer row">
			<div className="card-info col-4">
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
			<div className="copyrights col-4">
				<footer>M.I.T Logistics INC © Copyright All rights reserved 2020</footer>
			</div>
		</div>
	);
}
