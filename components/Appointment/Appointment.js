import React, { useEffect, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import cimg from "/public/images/contact-img.jpg";
import Services from "../../api/service.js";
import Image from "next/image";
import axios from "axios";

const Appointment = (props) => {
	const [slice, setSlice] = useState([0, 0]);
	const [showMenu, setShowMenu] = useState(false);
	const [showError, setShowError] = useState(true);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [service, setService] = useState("Choose a service");
	const [message, setMessage] = useState("");
	// const [submitted, setSubmitted] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();

		// console.log("------------Details------------")
		// console.log(name)
		// console.log(email)
		// console.log(phone)
		// console.log(service)
		// console.log(message)

		if (name === "") return;
		if (email === "") return;
		if (phone === "") return;
		if (message === "") return;
		if (service === "Choose a service") return;

		console.log("Sending");
		let data = {
			name,
			email,
			phone,
			service,
			message,
		};
		let tempData = data;
		tempData.type = "APPOINTMENT"
		axios.post('../api/sendEmail', tempData).then(response => {
			//console.error(response)
			alert("Form successfully submitted. We will get in touch with you shortly!");
			// todo show success
			setName("");
			setPhone("");
			setService("");
			setEmail("");
			setMessage("");
		}).catch(error => {
			console.error(error)
			alert("Form submission failed. Please try again later.");
			// todo show error
		});
		/*await fetch("/api/sendEmail/", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, *!/!*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response received");
			console.log(res);
			if (res.status === 200) {
				setName("");
				setPhone("");
				setService("");
				setEmail("");
				setMessage("");
				console.log("Response succeeded!");
			} else {
				console.log("Response failed!");
			}
		});*/
	};

	const trimInput = (val) => {
		// console.log(val)
		return val.trim();
	};

	const [forms, setForms] = useState({
		name: "",
		email: "",
		subject: "",
		phone: "",
		message: "",
	});
	const [validator] = useState(
		new SimpleReactValidator({
			className: "errorMessage",
		})
	);
	const changeHandler = (e) => {
		console.log("target name: " + e.target.name);
		console.log("target value: " + e.target.value);
		setForms({ ...forms, [e.target.name]: e.target.value });
		if (validator.allValid()) {
			validator.hideMessages();
		} else {
			validator.showMessages();
		}
	};

	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	if (validator.allValid()) {
	// 		validator.hideMessages();
	// 		setForms({
	// 			name: "",
	// 			email: "",
	// 			subject: "",
	// 			phone: "",
	// 			message: "",
	// 		});
	// 	} else {
	// 		validator.showMessages();
	// 	}
	// };

	// console.table(props);

	useEffect(() => {
		if (props.scrollValue) {
			console.log("Scroll value: " + props.scrollValue);
			const element = document.getElementById("scrollDestination");
			const title = document.getElementById("appointmentTitle");
			console.log(title);
			title.style.opacity = "1";
			title.style.transform = "translateX(0px)";
			title.style.transition = "0s";

			console.log("in scroll function");
			// setTimeout(() => {
			let topOffset = 150;
			if (window.innerWidth <= 375) {
				topOffset = 155;
			} else if (window.innerWidth <= 390) {
				topOffset = 230;
			} else if (window.innerWidth <= 414) {
				topOffset = 250;
			} else if (window.innerWidth <= 430) {
				topOffset = 265;
			} else if (window.innerWidth <= 1024) {
				topOffset = 325;
			}

			const topPos =
				element.getBoundingClientRect().top + window.scrollY - topOffset;
			window.scrollTo({ top: topPos, behavior: "smooth" });
			props.setScroll(false);
			// }, 250);
		}
	}, [props]);

	const handleClick = (start, end, topVal) => {
		const subMenu = document.getElementById("sub-menu");
		setSlice([start, end]);
		subMenu.style.top = topVal + "px";
	};

	const toggleMenu = () => {
		const mainMenu = document.getElementById("main-menu");
		if (showMenu) {
			setShowMenu(false);
			mainMenu.style.display = "none";
			handleClick(0, 0);
		} else {
			setShowMenu(true);
			mainMenu.style.display = "block";
		}
	};

	const handleServiceSelection = (selectedService) => {
		// console.log(selectedService);
		setService(selectedService);
		setShowError(false);
	};

	return (
		<section className="wpo-contact-section section-padding">
			<div id="scrollDestination"></div>
			<div className="container">
				<div className="wpo-contact-section-wrapper">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 col-12">
							<div className="wpo-contact-form-area">
								<div className="wpo-section-title-s2" id="appointmentTitle">
									<h2>Make An Appointment</h2>
								</div>
								<form
									onSubmit={(e) => handleSubmit(e)}
									className="contact-validation-active"
								>
									<div className="row">
										{/* NAME */}
										<div className="col col-lg-6 col-12">
											<div className="form-field">
												<input
													className="form-control"
													value={name}
													type="text"
													name="name"
													onBlur={(e) => changeHandler(e)}
													onChange={(val) => {
														setName(val.target.value);
													}}
													placeholder="Your Name"
												/>
											</div>
											{validator.message(
												"name",
												forms.name,
												"required|alpha_space"
											)}
										</div>

										{/* EMAIL */}
										<div className="col col-lg-6 col-12">
											<div className="form-field">
												<input
													className="form-control"
													value={email}
													type="email"
													name="email"
													onBlur={(e) => changeHandler(e)}
													onChange={(val) => {
														setEmail(trimInput(val.target.value));
													}}
													placeholder="Your Email"
												/>
												{validator.message(
													"email",
													forms.email,
													"required|email"
												)}
											</div>
										</div>

										{/* PHONE */}
										<div className="col col-lg-6 col-12">
											<div className="form-field">
												<input
													className="form-control"
													value={phone}
													type="phone"
													name="phone"
													onBlur={(e) => changeHandler(e)}
													onChange={(val) => {
														setPhone(trimInput(val.target.value));
													}}
													placeholder="Your phone"
												/>
												{validator.message(
													"phone",
													forms.phone,
													"required|phone"
												)}
											</div>
										</div>

										{/* SERVICE */}
										<div className="col col-lg-6 col-12">
											<div className="form-field">
												<div
													className="form-control"
													id="service-dropdown"
													onClick={toggleMenu}
													onMouseLeave={() => handleClick(0, 0)}
												>
													{service}
													<div className="main-menu" id="main-menu">
														<p onMouseEnter={() => handleClick(0, 9, 50)}>
															Residential
														</p>
														<p onMouseEnter={() => handleClick(9, 16, 85)}>
															Commercial
														</p>
														<p onMouseEnter={() => handleClick(16, 24, 120)}>
															Industrial
														</p>
														<p onMouseEnter={() => handleClick(24, 32, 155)}>
															Institutional
														</p>
													</div>
													<div
														className="sub-menu"
														id="sub-menu"
														onMouseLeave={() => handleClick(0, 0)}
													>
														{Services.slice(slice[0], slice[1]).map(
															(service, srv) => (
																<option
																	key={srv}
																	onBlur={(e) => changeHandler(e)}
																	onClick={() =>
																		handleServiceSelection(service.sTitle)
																	}
																	id="service-option"
																>
																	{service.sTitle}
																</option>
															)
														)}
													</div>
												</div>

												{/* <select
													className="form-control"
													onBlur={(e) => changeHandler(e)}
													onChange={(val) => {
														setService(trimInput(val.target.value));
													}}
													value={service}
													type="text"
													name="subject"
												>
													<option disabled value="">
														Choose a service
													</option>
													<option onMouseEnter={() => handleClick(9, 16, 85)}>
														Residential
													</option>
													<option onMouseEnter={() => handleClick(9, 16, 85)}>
														Commercial
													</option>
													<option onMouseEnter={() => handleClick(16, 24, 120)}>
														Industrial
													</option>
													<option onMouseEnter={() => handleClick(24, 32, 155)}>
														Institutional
													</option>
												</select> */}

												{showError ? (
													validator.message(
														"subject",
														forms.subject,
														"required|alpha_space"
													)
												) : (
													<></>
												)}
											</div>
										</div>
					
										{/* MESSAGE */}
										<div className="col fullwidth col-lg-12 ">
											<textarea
												className="form-control"
												onBlur={(e) => changeHandler(e)}
												onChange={(val) => {
													setMessage(val.target.value);
												}}
												value={message}
												type="text"
												name="message"
												placeholder="Message"
											></textarea>
											{validator.message("message", forms.message, "required")}
										</div>
									</div>

									<div className="submit-area">
										<button type="submit" className="theme-btn">
											<i
												className="fa fa-angle-double-right"
												aria-hidden="true"
											></i>{" "}
											Submit Now
										</button>
									</div>
								</form>
								<div className="border-style"></div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="wpo-contact-img">
								<Image src={cimg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
