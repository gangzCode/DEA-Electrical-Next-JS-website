import React from "react";
import Services from "../../api/service";
import Link from "next/link";
import Image from "next/image";

const ServiceSidebar = (props) => {
	const SubmitHandler = (e) => {
		e.preventDefault();
	};

	// const ClickHandler = () =>{
	//     window.scrollTo(10, 0);
	//  }

	return (
		<div className="col-lg-4 col-md-8">
			<div className="wpo-single-sidebar">
				<div className="wpo-service-widget widget">
					<h2>All Services</h2>
					<ul>
						{Services.slice(0, 6).map((service, Sitem) => (
							<li key={Sitem}>
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
				{/* <div className="wpo-newsletter-widget widget">
					<h2>Newsletter</h2>
					<p>Join 100 Sabscribers!</p>
					<form className="form" onSubmit={SubmitHandler}>
						<input type="email" placeholder="Email Address" required />
						<button type="submit">Sign Up</button>
					</form>
					<span>
						By signing up you agree to our Privecy Policy
					</span>
				</div> */}
				{/* <div className="wpo-instagram-widget widget">
					<h2>Instagram Shot</h2>
					<ul>
						{Services.slice(0, 6).map((service, Sitem) => (
							<li key={Sitem}>
								<Image src={service.sImg} alt="" />
							</li>
						))}
					</ul>
				</div> */}
				<div className="wpo-contact-widget widget">
					<h2>
						How We Can <br /> Help You!
					</h2>
					<p>
					Have a question or need assistance? Whether you&apos;re seeking more information about our services, want to schedule an appointment, or have a specific inquiry, we&apos;re here to help.  Get in touch with us today!{" "}
					</p>
					<Link href="/contact">Contact Us</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceSidebar;
