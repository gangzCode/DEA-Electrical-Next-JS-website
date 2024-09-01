import React from "react";
import Link from "next/link";
import Logo from "../../public/images/footer-logo.png";
import Services from "../../api/service";
import Image from "next/image";

// const ClickHandler = () => {
// 	window.scrollTo(10, 0);
// };

const SubmitHandler = (e) => {
	e.preventDefault();
};

const Footer = (props) => {
	return (
		<footer className="wpo-site-footer">
			<div className="wpo-upper-footer">
				<div className="container">
					<div className="row">
						<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="widget about-widget">
								<div className="logo widget-title">
									<Image src={Logo} alt="blog" />
								</div>
								<p>
									Whether you&apos;re building your dream home, upgrading your office
									space, or enhancing your industrial facility, trust DEA to
									bring your electrical and lighting visions to life swiftly at
									an affordable price point.
								</p>
								{/* <p>Many desktop publishing packages now use uncover many.</p> */}
							</div>
						</div>
						<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="widget link-widget">
								<div className="widget-title">
									<h3>Quick Link</h3>
								</div>
								<ul>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/service-s2">Service</Link>
									</li>
									{/* <li>
										<button href="#" onClick={props.scrollToAppointment}>
											Appointment
										</button>
									</li> */}
									<li>
										<Link href="/contact">Contact Us </Link>
									</li>
									<li>
										<Link href="/project">Projects</Link>
									</li>
									<li>
										<Link href="/terms">Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="widget join-widget">
								<div className="widget-title">
									<h3>Newsletter</h3>
								</div>
								<p>
									Now use Lorem Ipsum their default a search for uncover many.
								</p>
								<form onSubmit={SubmitHandler}>
									<input
										type="email"
										placeholder="support@gmail.com"
										required
									/>
									<button type="submit">
										Send Now <i className="ti-arrow-right"></i>
									</button>
								</form>
							</div>
						</div> */}

						<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="widget link-widget">
								<div className="widget-title">
									<h3>Services</h3>
								</div>
								<ul>
									{Services.slice(0, 6).map((service, srv) => (
										<li key={srv}>
											<Link
												// onClick={ClickHandler}
												href="/service-single/[slug]"
												as={`/service-single/${service.slug}`}
											>
												{service.sTitle}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wpo-lower-footer">
				<div className="container">
					<div className="row">
						<div className="col col-xs-12">
							<p className="copyright">
								{" "}
								DEA Electrical Copyright 2024. Developed by{" "}
								<Link href={"https://www.codeinis.io/"} target="_blank">
									Codeinis.io
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
