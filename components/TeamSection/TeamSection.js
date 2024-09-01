import React from "react";
import Link from "next/link";
import Team from "../../api/team";
import Image from "next/image";

// const ClickHandler = () => {
// 	window.scrollTo(10, 0);
// };

const TeamSection = (props) => {
	return (
		<section className="wpo-team-section section-padding">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-5">
						<div className="wpo-section-title">
							<h2>Expert Electricians</h2>
							<p>
								It was popularised in the with the release desktop publishing
								software like versions.
							</p>
						</div>
					</div>
				</div>
				<div className="wpo-team-wrap">
					<div className="row">
						{Team.map((team, aitem) => (
							<div className="col col-lg-6 col-md-12 col-12" key={aitem}>
								<div className="wpo-team-item">
									<div className="wpo-team-img">
										<Image src={team.tImg} alt="" />
									</div>
									<div className="wpo-team-text">
										<span>{team.title}</span>
										<h2>
											<Link
												// onClick={ClickHandler}
												href="/team-single/[slug]"
												as={`/team-single/${team.slug}`}
											>
												{team.name}
											</Link>
										</h2>
										<div className="social">
											<ul>
												<li>
													<Link href="/">
														<i className="ti-pinterest"></i>
													</Link>
												</li>
												<li>
													<Link href="/">
														<i className="ti-twitter-alt"></i>
													</Link>
												</li>
												<li>
													<Link href="/">
														<i className="ti-skype"></i>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
