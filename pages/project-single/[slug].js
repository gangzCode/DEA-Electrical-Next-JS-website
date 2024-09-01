import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer/Footer.js'
import Image from 'next/image';
import axios from "axios";
import {toast} from "react-toastify";
import {Box, CircularProgress} from "@mui/material";
import Slider from "react-slick";

const ServiceSinglePage = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState();

    useEffect(() => {
        if (router.isReady) {
            setLoading(true);
            let id = router.query.slug;
            axios.get('/api/projects', {params: {fetchProject: id}}).then(response => {
                setProject(response.data);
                setLoading(false);
            }).catch(error => {
                console.error(error);
                toast.error('An error occurred while retrieving project.');
                setLoading(false);
            });
        } else {
            setLoading(true);
        }
    }, [router.isReady]);

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={ project ? `${project?.title}` : '' } pagesub={'Project'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    {project?.images && <Slider {...settings}>
                                        {project?.images?.map((image, index) => (
                                            <div key={index}>
                                                {project?.images && <Image src={image} width={1000} height={1000} alt=""/>}
                                            </div>
                                        ))}
                                    </Slider>}
                                </div>
                                {loading &&
                                    <Box w={1} pb={5} textAlign="center">
                                        <CircularProgress/>
                                    </Box>
                                }
                                <div className="wpo-project-details-list">
                                    <div className="row">
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Client Name</span>
                                                <h2>{project?.clientName}</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>{project?.value}</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Date</span>
                                                <h2>{project?.date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{project?.title}</h2>
                                        <p>{project?.description}</p>
                                        {/* <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p> */}
                                        {/* <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={projectDetails?.spImg1} alt="" /></li>
                                                <li><Image src={projectDetails?.spImg2} alt="" /></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>Our work process</h2>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-lamp"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Quality We Ensure</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn&apos;t.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-medal"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Experienced Workers</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn&apos;t.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-trophy"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Modern Equipment Use</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn&apos;t.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                               {/*  <Benefits /> */}
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
