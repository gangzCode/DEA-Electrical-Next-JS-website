import React from "react";
import abimg from "/public/images/about.jpg";
import sign from "/public/images/signeture.png";
import Image from "next/image";

const About = (props) => {
	return (
		<section className="wpo-about-section section-padding">
			<div className="container">
				<div className="wpo-about-section-wrapper">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12 col-12">
							<div className="wpo-about-img">
								<Image src={abimg} alt="" />
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-12">
							<div className="wpo-about-content">
								<div className="wpo-section-title-s2">
									<h2>Over 25+ Years Experience In Electrical Services</h2>
								</div>
								<div className="wpo-about-content-inner">
									<p>
										Our team of licensed and qualified electricians has over 25
										years of experience. We can tackle any job from electrical
										upgrades to entire home lighting systems for residential,
										commercial and industrial environments. We are committed to
										providing top-notch solutions tailored to your unique needs.
									</p>
									<p>
										With years of experience along with commitment to excellence
										and safety, we strive to exceed your expectations with every
										project. Please call us for a no-obligation quote; we
										guarantee you won&apos;t be disappointed.
									</p>
									<div className="signeture">
										<h4>Fred Gjini</h4>
										<p>DEA Electrical, CEO</p>
										{/* <span>
											<Image src={sign} alt="" />
										</span> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
