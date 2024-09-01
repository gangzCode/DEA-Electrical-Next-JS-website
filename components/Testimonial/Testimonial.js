import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "/public/images/testimonials/ts1.jpg";
import ts2 from "/public/images/testimonials/ts2.jpg";
import ts3 from "/public/images/testimonials/ts3.jpg";
import Image from "next/image";

const settings_content = {
	dots: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
};

const settings_images = {
	fade: true,
	dots: false,
	arrows: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
};

const testimonial = [
	{
		Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
		Title: "Robert William",
		Sub: "CEO & Founder",
		Img: ts1,
	},
	{
		Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
		Title: "Ken Jefferson",
		Sub: "CEO & Founder",
		Img: ts2,
	},
	{
		Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
		Title: "Charlene Miller",
		Sub: "CEO & Founder",
		Img: ts3,
	},
];

const Testimonial = () => {
	return (
		<section className="wpo-testimonials-section section-padding">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-5">
						<div className="wpo-section-title">
							<h2>What Clients Say?</h2>
							<p>
								Gain insights from testimonials reflecting client experiences,
								highlighting our dedication and professionalism.
							</p>
						</div>
					</div>
				</div>

				<div className="wpo-testimonials-wrap">
					<div className="row align-items-center">
						<div className="col-lg-5 col-12">
							<div className="wpo-testimonials-img">
								<Slider {...settings_images}>
									{testimonial.map((tesmnl, tsm) => (
										<Image src={tesmnl.Img} alt="" key={tsm} />
									))}
								</Slider>
							</div>
						</div>

						<div className="col-lg-7 col-12">
							<div className="wpo-testimonials-text">
								<div className="quote">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
								</div>
								<div className="wpo-testimonials-slide owl-carousel">
									<Slider {...settings_content}>
										{testimonial.map((tesmnl, tsm) => (
											<div className="wpo-testimonials-slide-item" key={tsm}>
												<p>{tesmnl.Des}</p>
												<h5>{tesmnl.Title}</h5>
												<span>{tesmnl.Sub}</span>
											</div>
										))}
									</Slider>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
