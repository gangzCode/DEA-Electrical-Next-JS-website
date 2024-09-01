import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Scrollbar from "../components/scrollbar/scrollbar";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import WorkSection from "../components/WorkSection/WorkSection";
import Appointment from "../components/Appointment/Appointment";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import TeamSection from "../components/TeamSection/TeamSection";
import Testimonial from "../components/Testimonial/Testimonial";
import BlogSection from "../components/BlogSection/BlogSection.js";
import PartnerSection from "../components/PartnerSection/PartnerSection";
import Footer from "../components/footer/Footer.js";
import ReactGA from "react-ga4";

ReactGA.initialize("G-QR9YDEKT1X");

ReactGA.send({ hitType: "pageview", page: "/", });

// ACTIVE
const HomePage = () => {
	const [scroll, setScroll] = useState(false);

	// const appointmentRef = useRef(null);

	const scrollToAppointment = () => {
		// appointmentRef.current.scrollIntoView({ behavior: 'smooth' , block: 'start'});
		console.log("Main works");
		setScroll(true);
		console.log("Scroll: " + scroll);
	};

	return (
		<Fragment>
			<Navbar />
			<Hero scrollToAppointment={scrollToAppointment} />
			<ServiceSection />
			<WorkSection />

			<Appointment scrollValue={scroll} setScroll={setScroll} />
			<ProjectSection />
			{/* <TeamSection /> */}
			{/* <Testimonial /> */}
			{/* <BlogSection /> */}
			<PartnerSection />
			<Footer scrollToAppointment={scrollToAppointment} />
			<Scrollbar />
		</Fragment>
	);
};
export default HomePage;
