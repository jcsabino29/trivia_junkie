import React, {Component} from "react";
import { Box, Card, CardHeader, CardContent, Button, CssBaseline, Divider, Container, FormControl, InputLabel, Input, FormHelperText} from '@mui/material';


import useStyles from './styles';
import Header from '../Header/Header';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            fullname: '',
            password: '',
            email_address: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onChangeFullname(e) {
        this.setState({
            fullname: e.target.value,
        })
    }


    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }


    onChangeEmailAddress(e) {
        this.setState({
            email_address: e.target.value,
        })
    }

    onSubmit= (e) => {
        e.preventDefault();

        const newUser = {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            email_address: this.state.email_address,
            points: Number(1000),
        }
        console.log(newUser);
    }


    render() {
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
                            <FormControl sx={{width: '100%', mt: 3, ml: 2}} required={true}>
                                    <Button onClick={this.onSubmit} type="submit" variant="contained" htmlFor="my-input">Submit</Button>
                            </FormControl>
                        </Card>
                    </Container>
                </React.Fragment>
            </>
        );
    }
}