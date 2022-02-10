import * as React from "react";
import { Box, Card, CardHeader, CardContent, Button, CssBaseline, Divider, Container, FormControl, InputLabel, Input, FormHelperText} from '@mui/material';

import useStyles from './styles';
import Header from '../Header/Header';

const SignUp = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Card xs={12} md={12} sx={{mt: 10, height: '47vh'}} >
                        <CardHeader title="Create Account" sx={{width: '100%', height: '7vh', display: 'flex', textAlign: 'left', ml: 1}}/>
                        <Divider />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Full name</InputLabel>
                                <Input disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                <Input disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                        <div />
                        <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                            <Card variant="outlined" sx={{width: '90%'}}>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input disableUnderline={true} style={{width: '100%'}} sx={{ml: 1.5}} id="my-input" aria-describedby="my-helper-text" />
                            </Card>
                        </FormControl>
                    </Card>
                </Container>
            </React.Fragment>
        </>
    );
}

export default SignUp;