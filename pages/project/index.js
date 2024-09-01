import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import {Box, CircularProgress} from "@mui/material";
import axios from "axios";
import {toast} from "react-toastify";
import Image from "next/image";
import {useRouter} from "next/router";


const ProjectPage = () => {

    const router = useRouter();

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
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/>

            <section className="wpo-project-section section-padding" style={{paddingBottom: '20px'}}>
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
                    {loading ? (
                        <Box w={1} textAlign="center" mb={5}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                        <Grid container justifyContent={"space-around"} mb={3} spacing={{xs: 2, md: 3}}
                              columns={{xs: 4, sm: 8, md: 12}} sx={{paddingX: {md: 3}}}>
                            {projects?.map((project, index) => (
                                <Grid item xs={3} key={project._id} mb={8}>
                                    <Card sx={{
                                        boxShadow: 3,
                                        cursor: 'pointer',
                                        transition: 'box-shadow 0.3s',
                                        '&:hover': {
                                            boxShadow: 5,
                                        },
                                    }} onClick={() => {
                                        router.push(`/project-single/${project._id}`)
                                    }}>
                                        <CardMedia>
                                            <Image
                                                className="img-responsive"
                                                height={700}
                                                width={700}
                                                style={{objectFit: "cover"}}
                                                src={project.thumbnail}
                                                alt=""
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="h5" component="div" mt={1}>
                                                {project.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
