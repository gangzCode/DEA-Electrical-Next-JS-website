import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "../../api/project";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import {Box, CircularProgress} from "@mui/material";
import axios from "axios";
import {toast} from "react-toastify";

const settings = {
	dots: false,
	arrows: true,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

// const ClickHandler = () => {
// 	window.scrollTo(10, 0);
// };

const ProjectSection = () => {

	const [loading, setLoading] = useState(false);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios.get('./api/projects').then(response => {
			setProjects(response.data);
			setLoading(false);
		}).catch(error => {
			console.error(error);
			toast.error('An error occurred while retrieving projects.');
			setLoading(false);
		});
	}, []);

	return (
		<section className="wpo-project-section section-padding">
			<div className="container-fluid">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-5">
						<div className="wpo-section-title">
							<h2>Our Projects</h2>
							<p>
								Browse our extensive catalog of completed projects, showcasing
								our commitment to excellence and innovation.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="wpo-project-slider">
                            {loading ? (
                                <Box w={1} textAlign="center">
                                    <CircularProgress/>
                                </Box>
                            ) : (
                                <Slider {...settings}>
                                    {projects.map((project, prj) => (
                                        <div className="item" key={project._id}>
                                            <div className="single-work" style={{position: "relative"}}>
                                                <Image
                                                    className="img-responsive"
													height={700}
													width={700}
													style={{objectFit: "cover"}}
                                                    src={project.thumbnail}
                                                    alt=""
                                                />
                                                <div className="hover_layer">
                                                    <div className="info">
                                                        <h3>
                                                            <Link
                                                                // onClick={ClickHandler}
                                                                href="/project-single/[slug]"
                                                                as={`/project-single/${project._id}`}
                                                            >
                                                                {project.title}
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                    <div className="details-btn">
                                                        <Link
                                                            className="project-btn"
                                                            // onClick={ClickHandler}
                                                            href="/project-single/[slug]"
                                                            as={`/project-single/${project._id}`}
                                                        >
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            )}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
