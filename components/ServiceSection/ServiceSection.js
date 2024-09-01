import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Residential from "./Residential";
import Commercial from "./Commercial";
import Industrial from "./Industrial";
import Institutional from "./Institutional";

const ServiceSectionS2 = () => {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	// Function to check if element is in the viewport
	function isInViewport(element) {
		const rect = element.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) 
			&&
			rect.right <= 
			  (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function handleScroll() {
		const title1 = document.querySelectorAll(".wpo-section-title");
		const title2 = document.querySelectorAll(".wpo-section-title-s2");

		const titles = [...title1, ...title2];

		titles.forEach((title) => {
			if (isInViewport(title)) {
				title.classList.add("visible");
			}
			//  else {
			// 	title.classList.remove("visible");
			// }
		});
		// window.removeEventListener("scroll", handleScroll);
	}

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", handleScroll);
	}

	if (typeof document !== "undefined") {
		document.addEventListener("DOMContentLoaded", handleScroll);
	}

	return (
		<section className="wpo-service-section section-padding">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-5">
						<div className="wpo-section-title-s2">
							<h2>What do we do?</h2>
							<p>
								Discover our versatile offerings, from installations to
								maintenance, ensuring efficiency, safety, and reliability for
								all your electrical needs.
							</p>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="wpo-service-tabs">
							<Nav tabs>
								<NavItem>
									<NavLink
										className={`theme-btn ${classnames({
											active: activeTab === "1",
										})}`}
										onClick={() => {
											toggle("1");
										}}
									>
										<i className="ti-home"></i> Residential
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink
										className={`theme-btn ${classnames({
											active: activeTab === "2",
										})}`}
										onClick={() => {
											toggle("2");
										}}
									>
										<i className="ti-light-bulb"></i> Commercial
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink
										className={`theme-btn ${classnames({
											active: activeTab === "3",
										})}`}
										onClick={() => {
											toggle("3");
										}}
									>
										<i className="ti-plug"></i> Industrial
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={`theme-btn ${classnames({
											active: activeTab === "4",
										})}`}
										onClick={() => {
											toggle("4");
										}}
									>
										<i className="ti-desktop"></i> Institutional
									</NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
				</div>

				<TabContent activeTab={activeTab}>
					<TabPane tabId="1">
						<Residential />
					</TabPane>
					<TabPane tabId="2">
						<Commercial />
					</TabPane>
					<TabPane tabId="3">
						<Industrial/>
					</TabPane>
					<TabPane tabId="4">
						<Institutional/>
					</TabPane>
				</TabContent>
			</div>
		</section>
	);
};

export default ServiceSectionS2;
