import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Scrollbar = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 0 ? setShowScroll(true) : setShowScroll(false);
		};

		window.addEventListener("scroll", handleScroll);

		// clean up event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return showScroll ? (
		<div className="col-lg-12">
			<div className="header-menu">
				<ul className="smothscroll">
					<li>
						<AnchorLink href="#__next">
							<i className="ti-arrow-up"></i>
						</AnchorLink>
					</li>
				</ul>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Scrollbar;
