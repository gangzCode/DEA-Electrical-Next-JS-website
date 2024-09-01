import React from "react";
import Link from "next/link";
import VideoModal from "../ModalVideo/VideoModal";

import simg1 from "/public/images/slider/sq.jpg";
import Image from "next/image";

const Hero = (props) => {
	return (
		<section className="wpo-hero-section-1">
			<div className="container">
				<div className="row">
					<div className="col col-xs-5 col-lg-5 col-12">
						<div className="wpo-hero-section-text">
							<div className="wpo-hero-title">
								<h2>Looking for a reliable electrician?</h2>
							</div>
							<div className="wpo-hero-subtitle">
								<p>
									At DEA Electrical Service, we can assist with all the
									electrical and lighting requirements for your residential,
									commercial and industrial properties.
								</p>
							</div>
							<div className="btns">
								<button
									href="#"
									className="theme-btn"
									onClick={props.scrollToAppointment}
								>
									<i
										className="fa fa-angle-double-right"
										aria-hidden="true"
									></i>{" "}
									Make an appointment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="right-vec">
				<div className="right-img">
					<div className="r-img">
						<Image src={simg1} alt="hero" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
