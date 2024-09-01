import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const Contactpage = () => {

	const ClickHandler = () => {
		window.scrollTo({
			top: 0,
			left: 10,
			behavior: "smooth",
		});
	};

	return (
		<section className="wpo-contact-pg-section section-padding">
			<div className="container">
				<div className="row">
					<div className="col col-lg-10 offset-lg-1">
						<div className="office-info">
							<div className="row">
								<div className="col col-xl-4 col-lg-6 col-md-6 col-12">
									<div className="office-info-item">
										<div className="office-info-icon">
											<div className="icon">
												<i className="fi flaticon-placeholder"></i>
											</div>
										</div>
										<div className="office-info-text">
											<h2>Address</h2>
											<p>Toronto, ON, Canada, M4G 2E9</p>
										</div>
									</div>
								</div>
								<div className="col col-xl-4 col-lg-6 col-md-6 col-12">
									<div className="office-info-item">
										<div className="office-info-icon">
											<div className="icon">
												<i className="fi flaticon-email"></i>
											</div>
										</div>
										<div className="office-info-text">
											<h2>Email Us</h2>
											<a
												className="email-link"
												href="mailto:info@deaelectical.ca"
											>
												info@deaelectical.ca
											</a>
											{/* <p>helloyou@gmail.com</p> */}
										</div>
									</div>
								</div>
								<div className="col col-xl-4 col-lg-6 col-md-6 col-12">
									<div className="office-info-item">
										<div className="office-info-icon">
											<div className="icon">
												<i className="fi flaticon-phone-call"></i>
											</div>
										</div>
										<div className="office-info-text">
											<h2>Call Now</h2>
											<a
												href="tel:+1 647 250 7594"
												className="phone-link">
													+1 647 250 7594
											</a>	
											{/* <p>+1 800 123 654 987</p> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="wpo-contact-title">
							<h2>Have A Question Or Need Assistance? </h2>
							{<p>
								Have a question or need assistance? Whether you&apos;re seeking more information about our services, want to schedule an appointment, or have a specific inquiry, we&apos;re here to help.  Get in touch with us today!
							</p>}
						</div>
						<div className="wpo-contact-form-area">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
			<section className="wpo-contact-map-section">
				<div className="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.011673609086!2d-79.36800843741486!3d43.71030647097892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccd96d05e05f%3A0xe9a76c5e4edd4d23!2sEast%20York%2C%20ON%20M4G%202E9%2C%20Canada!5e0!3m2!1sen!2slk!4v1708623185637!5m2!1sen!2slk"></iframe>
				</div>
			</section>
		</section>
	);
};

export default Contactpage;
