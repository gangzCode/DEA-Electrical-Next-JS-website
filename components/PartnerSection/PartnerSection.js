import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "/public/images/partners/circuitry.svg";
import pimg2 from "/public/images/partners/connector-lines-and-circle.svg";
import pimg3 from "/public/images/partners/electrical-resistance.svg";
import pimg4 from "/public/images/partners/electrical-service.svg";
import pimg5 from "/public/images/partners/electrical-tower.svg";
import pimg6 from "/public/images/partners/plugs-connection.svg";
import Image from "next/image";

const partners = [
	{
		pImg: pimg1,
	},
	{
		pImg: pimg2,
	},
	{
		pImg: pimg3,
	},
	{
		pImg: pimg4,
	},
	{
		pImg: pimg5,
	},
	{
		pImg: pimg6,
	},
];

const settings = {
	dots: false,
	arrows: false,
	speed: 1000,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const PartnerSection = (props) => {
	return (
		<section className={`wpo-partners-section ${props.tNone}`}>
			<div className="container">
				<div className="row">
					<div className="col col-xs-12">
						<div className="partner-grids partners-slider owl-carousel">
							<Slider {...settings}>
								{partners.map((partner, pitem) => (
									<div className="grid" key={pitem}>
										<Image src={partner.pImg} alt="" />
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartnerSection;
