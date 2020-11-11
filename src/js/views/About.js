import React from "react";

export function About() {
	return (
		<div classNameName="titleAbout">
			{/* <h1> This is about pageeeeiie </h1>
			<p> New View</p> */}

			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="https://placeimg.com/1080/500/animals" alt="First slide" />
						<div className="carousel-caption d-none d-md-block">
							<h5>My Caption Title (1st Image)</h5>
							<p>The whole caption will only show up if the screen is at least medium size.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://placeimg.com/1080/500/arch" alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://placeimg.com/1080/500/nature" alt="Third slide" />
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
		</div>
	);
}
