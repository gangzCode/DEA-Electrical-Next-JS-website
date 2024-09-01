import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import {useRouter} from "next/router";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import {Box} from "@mui/material";

const LoginPage = (props) => {

    const router = useRouter();

    useEffect(() => {
        axios.get('./api/get_session').then(response => {
            if (response.data && response.data.username && response.data.username.trim() !== "") {
                router.push('/admin_dashboard');
            }
        }).catch(error => {
            console.error('Error retrieving session', error);
            toast.error('An error occurred while retrieving session');
        });
    });

    const [value, setValue] = useState({
        username: '', password: '', remember: false,
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
            axios.post('./api/login_endpoint', {
                username: value.username, password: value.password
            }).then(response => {
                if (response.data.success && response.data.success === true) {
                    router.push('/admin_dashboard');
                } else {
                    response.data.message ? toast.error(response.data.message) : toast.error('An error occurred during login');
                }
            }).catch(error => {
                if (error.response.status === 401) {
                    error.response.data.message ? toast.error(error.response.data.message) : toast.error('An error occurred during login');
                } else {
                    // Handle login error here
                    console.error('Login error', error);
                    toast.error('An error occurred during login');
                }
            });
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    return (
        <>
            <Box position={"absolute"} top={0} left={0} w={1} padding={1}>
                <Image src={Logo} height={80} alt=""/>
            </Box>
            <Grid className="loginWrapper">
                <Grid className="loginForm">
                    <h2>Sign In</h2>
                    <p>Sign in to your account</p>
                    <form onSubmit={submitForm}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="E-mail"
                                    value={value.username}
                                    variant="outlined"
                                    name="username"
                                    label="Username"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('username', value.username, 'required')}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="Password"
                                    value={value.password}
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('password', value.password, 'required')}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid className="formAction">
                                    <div style={{color: "#246fea", fontSize: '13px', cursor: 'pointer'}}
                                         onClick={() => toast.warn('This feature is not available for security reasons. ' + 'Please contact system administrator')}>
                                        Forgot Password?
                                    </div>
                                </Grid>
                                <Grid className="formFooter">
                                    <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <footer className="wpo-site-footer" style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
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
            </footer>
        </>
    )
};

export default LoginPage;
