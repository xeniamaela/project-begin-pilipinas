import React from "react";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../assests/images/landing/pic1.png";
import Pic2 from "../../assests/images/landing/pic2.png";
import Pic3 from "../../assests/images/landing/pic3.png";

export default function Landing() {
	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src={Pic1} alt="First slide" />
				<Carousel.Caption>
					<h5>First slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Pic2} alt="Second slide" />
				<Carousel.Caption>
					<h5>Second slide label</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Pic3} alt="Third slide" />
				<Carousel.Caption>
					<h5>Third slide label</h5>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
