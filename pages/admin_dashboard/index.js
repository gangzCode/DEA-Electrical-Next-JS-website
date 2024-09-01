import React, {Fragment, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
    Alert,
    Avatar,
    Box, CircularProgress,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SimpleReactValidator from "simple-react-validator";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const LoginPage = (props) => {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [rows, setRow] = useState([]);
    const [imgCount, setImgCount] = useState(1);
    const [userCreationModal, setUserCreationModal] = useState(false);
    const [updatingProject, setUpdatingProject] = useState(false);
    const [loading, setLoading] = useState(false);

    // Function to handle image upload
    const handleImageUpload = (event, isThumb, pos = -1) => {
        const file = event.target.files[0];
        if (file && file.type === 'image/jpeg') {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (isThumb) {
                    let data = value;
                    data.thumbnail = reader.result
                    setValue({})
                    setTimeout(() => {
                        setValue(data);
                    })
                } else {
                    if (pos === -1) {
                        let count = imgCount;
                        setImgCount(count + 1);
                        let data = value;
                        data['image_' + count] = reader.result
                        setValue({})
                        setTimeout(() => {
                            setValue(data);
                        })
                    } else {
                        setImgCount(pos + 1);
                        let data = value;
                        data['image_' + pos] = reader.result
                        setValue({})
                        setTimeout(() => {
                            setValue(data);
                        })
                    }

                }
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            toast.error('Only JPG files are allowed!');
            event.target.value = null;
        }
    };

    const loadProjectForEdit = async (projectId) => {
        setUpdatingProject(true);
        setUserCreationModal(true);
        setLoading(true);
        let project;
        try {
            project = (await axios.get('/api/projects', {params: {fetchProject: projectId}})).data;
            setLoading(false);
        } catch (e) {
            console.error(error);
            toast.error('An error occurred while retrieving project.');
            setLoading(false);
            return;
        }
        setImgCount(1);
        for (const [index, image] of project.images.entries()) {
            let imageData = await axios.get(image, {responseType: 'blob'});
            const blob = imageData.data;
            const file = new File([blob], 'image.jpg', {type: 'image/jpeg'});
            const syntheticEvent = {
                target: {
                    files: [file],
                },
            };
            handleImageUpload(syntheticEvent, false, (index + 1));
        }
        axios.get(project.thumbnail, {responseType: 'blob'})
            .then(response => {
                const blob = response.data;
                const file = new File([blob], 'thumbnail.jpg', {type: 'image/jpeg'});
                const syntheticEvent = {
                    target: {
                        files: [file],
                    },
                };
                handleImageUpload(syntheticEvent, true);
                let data = value;
                data._id = project._id
                data.title = project.title
                data.clientName = project.clientName
                data.value = project.value
                data.date = project.date
                data.description = project.description
                setValue({});
                setTimeout(() => {
                    setValue(data);
                })
            }).catch(error => {
            console.error(error)
            toast.error('Error fetching file from server');
        });
        /*axios.get(project.image, {responseType: 'blob'})
            .then(response => {
                const blob = response.data;
                const file = new File([blob], 'image.jpg', {type: 'image/jpeg'});
                const syntheticEvent = {
                    target: {
                        files: [file],
                    },
                };


            }).catch(error => {
            console.error(error)
            toast.error('Error fetching file from server');
        });*/
    };

    useEffect(() => {
        axios.get('./api/get_session').then(response => {
            if (!response.data || !response.data.username || response.data.username.trim() === "") {
                toast.warn('Please login!');
                router.push('/admin_login');
            } else {
                setUsername(response.data.username);
                getExistingProjects();
            }
        }).catch(error => {
            console.error(error);
            toast.error('An error occurred while retrieving session');
            router.push('/admin_login');
        });
    }, []);

    const getExistingProjects = () => {
        axios.get('./api/projects', {params: {isAdmin: true}}).then(response => {
            setRow(response.data);
        }).catch(error => {
            console.error(error);
            toast.error('An error occurred while retrieving projects');
        });
    }

    const logout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            axios.get('./api/logout')
                .then(response => {
                    router.push('/admin_login');
                })
                .catch(error => {
                    console.error(error);
                    toast.error('An error occurred while logging out');
                });
        }
    }

    const deleteProject = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this item?');
        if (confirmDelete) {
            axios.post('./api/projects', {}, {params: {deleteProject: id}}).then(response => {
                toast.success("Project deleted successfully!");
                getExistingProjects();
            }).catch(error => {
                console.error(error)
                toast.error("Error occurred while deleting project!")
            });
        }
    }

    const createUserModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        maxHeight: '90vh',
        overflowY: 'auto'
    };

    const [value, setValue] = useState({
        title: "",
        clientName: "",
        value: "",
        date: "",
        description: "",
        thumbnail: null,
        image_1: null,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            let data = value;
            let images = [];
            for (let x = 1; x <= imgCount; x++) {
                if (data['image_' + x]) {
                    images.push(data['image_' + x]);
                    delete data['image_' + x];
                }
            }
            data.images = images;
            console.log("Update", updatingProject);
            console.log("Data", data);
            if (updatingProject) {
                axios.post('./api/projects', data, {params: {updateProject: value._id}}).then(response => {
                    toast.success("Project updated successfully!");
                    clearAndCloseModal();
                    getExistingProjects();
                }).catch(error => {
                    console.error(error)
                    toast.error("Error occurred while updating project!")
                });
            } else {
                axios.post('./api/projects', data).then(response => {
                    toast.success("Project Created Successfully");
                    clearAndCloseModal();
                    getExistingProjects();
                }).catch(error => {
                    console.error(error)
                    toast.error("Error occurred while creating project!")
                });
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    }

    const clearAndCloseModal = () => {
        setUserCreationModal(false);
        setImgCount(1);
        setValue({
            title: "",
            clientName: "",
            value: "",
            date: "",
            description: "",
            thumbnail: null,
            image_1: null,
        });
    }

    const deleteImage = (deleteIndex) => {
        let data = value;
        setValue({})
        setTimeout(() => {
            let deleted = false;
            for (let x = 1; x <= imgCount; x++) {
                if ((deleteIndex + 1) === (x) && data['image_' + x]) {
                    deleted = true;
                }
                if (deleted && data['image_' + x]) {
                    if (data['image_' + (x + 1)]) {
                        data['image_' + x] = data['image_' + (x + 1)];
                    } else {
                        delete data['image_' + x];
                    }
                }
            }
            console.error(data);
            setImgCount((imgCount - 1));
            setValue(data);
        })
    }

    const ElementGenerator = ({count}) => {
        const elementArray = Array.from({length: count}, (_, index) => index);

        const elements = elementArray.map((index) => (
            <Grid key={index} item xs={2} textAlign="center">
                {
                    value['image_' + (index + 1)] &&
                    <>
                        <Box
                            component="img"
                            sx={{
                                height: 130,
                                borderRadius: 2,
                                marginBottom: 1
                            }}
                            src={value['image_' + (index + 1)]}
                        />
                        {
                            count !== 1 &&
                            <>
                                <br/>
                                <Button variant="contained" size="small" color="error"
                                        onClick={() => deleteImage(index)}>
                                    Delete
                                </Button>
                            </>
                        }
                    </>
                }
                {
                    (!value['image_' + (index + 1)]) &&
                    <Grid item xs={12} pt={5}>
                        <input
                            accept="image/jpeg"
                            id="contained-button-file"
                            type="file"
                            name="image_1"
                            style={{display: 'none'}}
                            onChange={($event) => handleImageUpload($event, false)}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" size="small" component="span">
                                Upload Image {(index + 1)}
                            </Button>
                        </label>
                        {validator.message('image_1', value.image_1, 'required')}
                    </Grid>
                }
            </Grid>
        ));
        return <>{elements}</>;
    };

    return (
        <>
            {username && username.trim() !== "" ? (
                <>
                    <Box minHeight={"100vh"} width={1} display={"flex"} flexDirection={"column"}>
                        <Grid display={"flex"} flexGrow={0} container w={1} height={60} bgcolor="#13287e" color="white">
                            <Grid item xs={6} display="flex" alignItems="center">
                                <Box px={2} bgcolor={'white'} height={1} display="flex" alignItems="center"
                                     borderBottom={'1px solid #13287e'}>
                                    <Image src={Logo} height={40} alt=""/>
                                </Box>
                                <Box pl={2}>Admin Dashboard</Box>
                            </Grid>
                            <Grid item xs={6} display="flex" alignItems="center" fontWeight="bold" pr={3}
                                  justifyContent={"end"}>
                                Welcome, {username}
                                <Button variant="contained" color="info" sx={{marginLeft: 2}}
                                        onClick={logout}>Logout</Button>
                            </Grid>
                        </Grid>
                        <Grid display={"flex"} flexDirection={"column"} flexGrow={1} p={5}>
                            <Grid container w={1} justifyContent="end" pb={1}>
                                <Button variant="contained" color="primary" size="small"
                                        onClick={() => {
                                            validator.hideMessages();
                                            setUpdatingProject(false);
                                            setUserCreationModal(true);
                                        }}>
                                    Create Project
                                </Button>
                            </Grid>
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Title</TableCell>
                                            <TableCell align="center">Thumbnail</TableCell>
                                            <TableCell>Client Name</TableCell>
                                            <TableCell align="right">Value</TableCell>
                                            <TableCell align="right">Date</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                   {/*  <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row._id}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell>
                                                    <Box w={1} display={"flex"} justifyContent={"center"}>
                                                        <Avatar
                                                            src={row.thumbnail}
                                                            sx={{width: 60, height: 60}}
                                                            variant="square"
                                                        />
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Box w={1} display={"flex"} justifyContent={"center"}>
                                                        <Avatar
                                                            src={row.images[0]}
                                                            sx={{width: 60, height: 60}}
                                                            variant="square"
                                                        />
                                                    </Box>
                                                </TableCell>
                                                <TableCell>{row.clientName}</TableCell>
                                                <TableCell align="right">{row.value}</TableCell>
                                                <TableCell align="right">{row.date}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained" color="info" sx={{mr: 1}} size="small"
                                                            onClick={() => loadProjectForEdit(row._id)}>EDIT</Button>
                                                    <Button variant="contained" color="error" size="small"
                                                            onClick={() => deleteProject(row._id)}>DELETE</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody> */}
                                    <TableBody>
                                        {rows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((row) => (
                                            <TableRow
                                                key={row._id}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell>
                                                    <Box w={1} display={"flex"} justifyContent={"center"}>
                                                        <Avatar
                                                            src={row.thumbnail}
                                                            sx={{width: 60, height: 60}}
                                                            variant="square"
                                                        />
                                                    </Box>
                                                </TableCell>
                                                <TableCell>{row.clientName}</TableCell>
                                                <TableCell align="right">{row.value}</TableCell>
                                                <TableCell align="right">{row.date}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained" color="info" sx={{mr: 1}} size="small"
                                                            onClick={() => loadProjectForEdit(row._id)}>EDIT</Button>
                                                    <Button variant="contained" color="error" size="small"
                                                            onClick={() => deleteProject(row._id)}>DELETE</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid display={"flex"} flexGrow={0} className="wpo-site-footer" justifyContent={"center"}>
                            <div className="wpo-lower-footer">
                                <div className="container">
                                    <div className="row" style={{padding: '10px'}}>
                                        <div className="col col-xs-12">
                                            <p className="copyright">
                                                {" "}
                                                DEA Electrical Copyright 2024. Developed by{" "}
                                                <Link href={"https://www.codeinis.io/"} target="_blank">
                                                    Codeinis.io
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Box>

                    <Modal open={userCreationModal}>
                        <Box sx={createUserModalStyle}>
                            <h2>Create Project</h2>
                            {
                                loading ? (
                                    <Box w={1} textAlign="center">
                                        <CircularProgress/>
                                    </Box>
                                ) : (
                                    <>
                                        <Alert severity="info">All information will be displayed as it is.</Alert>
                                        <form onSubmit={submitForm}>
                                            <Grid container spacing={3} mt="3px">
                                                <Grid item xs={6}>
                                                    <TextField
                                                        className="inputOutline"
                                                        fullWidth
                                                        placeholder="Project Title"
                                                        value={value.title}
                                                        variant="outlined"
                                                        name="title"
                                                        label="Project Title"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                    />
                                                    {validator.message('title', value.title, 'required')}
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        className="inputOutline"
                                                        fullWidth
                                                        placeholder="Cleint Name"
                                                        value={value.clientName}
                                                        variant="outlined"
                                                        name="clientName"
                                                        label="Cleint Name"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                    />
                                                    {validator.message('clientName', value.clientName, 'required')}
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        className="inputOutline"
                                                        fullWidth
                                                        placeholder="$1000.00"
                                                        value={value.value}
                                                        variant="outlined"
                                                        name="value"
                                                        label="Project Value"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                    />
                                                    {validator.message('value', value.value, 'required')}
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        className="inputOutline"
                                                        fullWidth
                                                        placeholder="25 Dec 2023"
                                                        value={value.date}
                                                        variant="outlined"
                                                        name="date"
                                                        label="Project Date"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                    />
                                                    {validator.message('date', value.date, 'required')}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        multiline={true}
                                                        className="inputOutline"
                                                        fullWidth
                                                        placeholder="Project Description"
                                                        value={value.description}
                                                        variant="outlined"
                                                        name="description"
                                                        label="Project Description"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                    />
                                                    {validator.message('description', value.description, 'required')}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Alert severity="info">It is recommended to compress images
                                                        before
                                                        upload
                                                        and
                                                        use JPG files.</Alert>
                                                </Grid>
                                                <Grid item xs={3} textAlign="center">
                                                    {value.thumbnail ?
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                height: 130,
                                                                borderRadius: 2,
                                                                marginBottom: 1
                                                            }}
                                                            src={value.thumbnail}
                                                        /> :
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                height: 130,
                                                                width: 150,
                                                                borderRadius: 2,
                                                                backgroundColor: "#B8B8B8",
                                                                marginBottom: 1
                                                            }}
                                                        />
                                                    }
                                                    <input
                                                        accept="image/jpeg"
                                                        id="contained-button-thumbnail"
                                                        type="file"
                                                        name="thumbnail"
                                                        style={{display: 'none'}}
                                                        onChange={($event) => handleImageUpload($event, true)}
                                                    />
                                                    <br/>
                                                    <label htmlFor="contained-button-thumbnail">
                                                        <Button variant="contained" size="small"
                                                                component="span">
                                                            Upload Thumbnail
                                                        </Button>
                                                    </label>
                                                    {validator.message('thumbnail', value.thumbnail, 'required')}
                                                </Grid>
                                                {
                                                    <ElementGenerator count={imgCount}/>
                                                }
                                                <Grid item xs={12} textAlign={"center"}>
                                                    <Button variant="contained" color="error" type="button"
                                                            sx={{mr: 1}}
                                                            onClick={clearAndCloseModal}>Close</Button>
                                                    <Button variant="contained"
                                                            type="submit">{updatingProject ? 'Update Project' : 'Create Project'}</Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </>
                                )
                            }
                        </Box>
                    </Modal>
                </>
            ) : (
                <Grid className="loginWrapper">
                    <Grid className="loginForm" textAlign="center">
                        Loading Please Wait
                    </Grid>
                </Grid>
            )}
        </>
    );

};

export default LoginPage;
