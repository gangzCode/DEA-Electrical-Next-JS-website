import React from "react";
import Header from "../header/Header";

export default function Navbar(props) {
	const [scroll, setScroll] = React.useState(0);

	const handleScroll = () => setScroll(document.documentElement.scrollTop);

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// const className = scroll > 46 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar animated fadeInDown active";

	return (
		<div className={"fixed-navbar animated fadeInDown active"}>
			<Header hclass={props.hclass} Logo={props.Logo} />
		</div>
	);
}
