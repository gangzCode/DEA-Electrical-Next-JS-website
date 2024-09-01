import React from "react";
import Services from "../../api/service";
import Link from "next/link";
import Image from "next/image";

// const ClickHandler = () => {
// 	window.scrollTo(10, 0);
// };

const Commercial = () => {
	return (
		<div className="wpo-service-wrap wpo-service-slide">
			<div className="row">
				{Services.slice(9, 16).map((service, srv) => (
					<div className="col-lg-4 col-md-6 col-12" key={srv}>
						<div className="wpo-service-item">
							<div className="wpo-service-icon">
								<div className="icon">
									<Image src={service.sIcon} alt="" />
								</div>
							</div>

							<div className="wpo-service-text">
								<h2>
									<Link
										// onClick={ClickHandler}
										href="/service-single/[slug]"
										as={`/service-single/${service.slug}`}
									>
										{service.sTitle}
									</Link>
								</h2>
								<p>{service.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Commercial;
