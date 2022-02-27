import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent, Button, CssBaseline, Divider, Container, FormControl, InputLabel, Input, FormHelperText} from '@mui/material';
import UserDataService from "../../services/user";

import useStyles from './styles';
import Header from '../Header/Header';

const SignUp = ({isLogin, setLogin}) => {
    const classes = useStyles();
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email_address, setEmailAddress] = useState('');

    const saveUser = () => {
        var newUser = {
            fullName: fullName,
            username: username,
            password: password,
            email_address: email_address,
        }

        UserDataService.findUser(email_address, username)
            .then((res) => {
                console.log("The find user: " + res.data);
            })
            .catch(e => {
                console.log("Error finding user: " + {e});
            })

        //const {data: { data }} = axios.get(url);
        console.log("THE EMAIL: " + email_address + " USERNAE: " + username);

        UserDataService.createUser(newUser)
            .then((res) => {
                setLogin(true)
                console.log(res.data);
            })
            .catch(e => {
                console.log(newUser);
                console.log("Error saving user: " + {e});
            })
    }

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Card xs={12} md={12} sx={{mt: 10, height: '45vh'}} >
                        <CardHeader title="Create Account" sx={{width: '100%', height: '7vh', display: 'flex', textAlign: 'left', ml: 1}}/>
                        <Divider />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Full name</InputLabel>
                                <Input name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div> </div> 
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input id="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="email_address" value={email_address} onChange={(e) => setEmailAddress(e.target.value)}disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                    </Card>
                    <Button sx={{mt: 2}} variant="contained" onClick={() => saveUser(fullName, username, password, email_address)}> Submit </Button>
                </Container>
            </React.Fragment>
        </>
    );
}

export default SignUp;