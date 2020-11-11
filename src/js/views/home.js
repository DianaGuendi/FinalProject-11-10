import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import MainBody from "../component/MainBody";

export function Home() {
	return (
		<div className="container">
			<div id="carouselExampleIndicators" className="carousel slide row" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					<li data-target="#carouselExampleIndicators" data-slide-to="3" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="https://images.pexels.com/photos/3999659/pexels-photo-3999659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Third slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images.pexels.com/photos/3821385/pexels-photo-3821385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Fourt slide"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>

			<div className="text-center mt-5 row">
				<MainBody />
			</div>
		</div>
	);
}
