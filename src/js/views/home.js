import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import MainBody from "../component/MainBody";
import { Carousel } from "react-bootstrap";

export function Home() {
	return (
		<div className="container">
			<div className="Carousel-container">
				<Carousel>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100 d-none d-md-block"
							src="https://images.pexels.com/photos/3999659/pexels-photo-3999659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className="d-block w-100 d-none d-md-block"
							src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 d-none d-md-block"
							src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="text-center mt-5 row">
				<MainBody />
			</div>
		</div>
	);
}
