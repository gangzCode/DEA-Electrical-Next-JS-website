import React from "react";

import wImg1 from "/public/images/work/electrical-img-1.jpg";
import wImg2 from "/public/images/work/electrical-img-2.jpg";
import wImg3 from "/public/images/work/electrical-img-3.jpg";
import Image from "next/image";

const WorkSection = (props) => {
	return (
		<section className="wpo-work-section section-padding">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-5">
						<div className="wpo-section-title">
							<h2>How It Works</h2>
							<p>
								Skip the hassle and book your electrical services online with
								ease! Experience the convenience of efficient, affordable and
								fast solutions to your electrical/lighting requirements.
							</p>
						</div>
					</div>
				</div>
				<div className="wpo-work-wrap">
					<div className="row">
						<div className="col col-lg-4 col-md-6 col-12">
							<div className="circle">
								<div className="foreground">
									<div className="image">
										<Image src={wImg1} alt="" />
									</div>
									<div className="text">
										<h2>Easy Online Scheduling</h2>
									</div>
								</div>

								<div className="background">1</div>
							</div>

							{/* <div className="wpo-work-item">
								<div className="wpo-work-img">
									<Image src={wImg3} alt="" />
								</div>
								<div className="wpo-work-text">
									<h2>Easy Online Shopping</h2>
								</div>
								<div className="visible-text">
									<span>1</span>
								</div>
							</div> */}
						</div>

						<div className="col col-lg-4 col-md-6 col-12">
							<div className="circle">
								<div className="foreground">
									<div className="image">
										<Image src={wImg2} alt="" />
									</div>
									<div className="text">
										<h2>Efficient And Fast Services</h2>
									</div>
								</div>

								<div className="background">2</div>
							</div>

							{/* <div className="wpo-work-item">
								<div className="wpo-work-text">
									<h2>
										Get Efficient <br /> Service
									</h2>
								</div>
								<div className="visible-text">
									<span>2</span>
								</div>
								<div className="wpo-work-img">
									<Image src={wImg2} alt="" />
								</div>
							</div> */}
						</div>

						<div className="col col-lg-4 col-md-6 col-12">
							<div className="circle">
								<div className="foreground">
									<div className="image">
										<Image src={wImg3} alt="" />
									</div>
									<div className="text">
										<h2>Affordable Pricing</h2>
									</div>
								</div>

								<div className="background">3</div>
							</div>

							{/* <div className="wpo-work-item">
								<div className="wpo-work-img">
									<Image src={wImg3} alt="" />
								</div>
								<div className="wpo-work-text">
									<h2>Enjoy Happy Cleanliness</h2>
								</div>
								<div className="visible-text">
									<span>3</span>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkSection;
