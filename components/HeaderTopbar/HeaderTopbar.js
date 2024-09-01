import React, { useEffect, useState } from "react";
import Link from "next/link";

const HeaderTopbar = () => {
	const [scroll, setScroll] = useState(0);

	const handleScroll = () => setScroll(document.documentElement.scrollTop);

	useEffect(() => {
		const topbar = document.getElementById("topInfoBar");
		window.addEventListener("scroll", handleScroll);
		if (scroll > 40) {
			// topbar.style.maxHeight = "0px"
			topbar.style.display = "none"
		} else {
			// topbar.style.maxHeight = "90px"
			topbar.style.display = "block"
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scroll]);

	return (
		<div className="topbar" id="topInfoBar">
			<div className="container">
				<div className="row">
					<div className="col col-lg-7 col-md-5 col-sm-12 col-12">
						<div className="contact-intro">
							<ul>
								<li>
									<i className="fi ti-location-pin"></i>Toronto, ON, Canada,
									M4G 2E9
								</li>
							</ul>
						</div>
					</div>
					<div className="col col-lg-5 col-md-7 col-sm-12 col-12">
						<div className="contact-info">
							<ul>
								<li>
									<Link href="/contact">Support</Link>
								</li>
								<li>
									<Link href="/terms">Terms & Conditions</Link>
								</li>
								{/* <li className="lan-sec">
									<select name="" id="">
										<option value="">English</option>
										<option value="">Spain</option>
										<option value="">France</option>
										<option value="">Italy</option>
									</select>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTopbar;
