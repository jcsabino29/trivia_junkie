import React, { useEffect, useState, useRef} from 'react';
import { Box, Card, CardHeader, CardContent, Button, CssBaseline, Divider, Container, FormControl, InputLabel, Input, FormHelperText, Typography} from '@mui/material';

import Header from '../Header/Header';
import List from '../List/List.jsx';
import User from '../User/User.jsx';
import getTriviaData from '../../api';

function shuffle(array) {
    let temp_arr = [];
    let indices = [0, 1, 2, 3]
    let randomIndex = 0;
    let i = 0;

    //console.log("Actual array: " + array);
    while (indices.length != 0) {
        randomIndex = (Math.floor(Math.random() * 100)) % indices.length;
        temp_arr = temp_arr.concat(array[indices[randomIndex]]);
        indices.splice(randomIndex, 1); //Remove the element
        i++;
    }

    return temp_arr;
}

const Login = () => {

    return (
        <>
            <CssBaseline />
            <Header/>
            <CssBaseline />
                <Container maxWidth="sm">
                    <Card xs={12} md={12} sx={{mt: 10, height: '30vh'}} >
                        <CardHeader title="Log in" sx={{width: '100%', height: '7vh', display: 'flex', textAlign: 'left', ml: 1}}/>
                        <Divider />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input disableUnderline={true} tabindex="1" style={{width: '100%', position: 'absolute'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel type="password" tabindex="2" htmlFor="my-input">Password</InputLabel>
                                <Input disableUnderline={true} style={{width: '100%', position: 'absolute'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>

                            <Button variant="text" style={{backgroundColor: "blue"}} sx={{mt: 2, ml: 2, height: '2vh'}}> 
                                <Typography variant="priamry">Forgot password</Typography>
                            </Button>

                    </Card>
                </Container>
        </>
    );
}

export default Login;