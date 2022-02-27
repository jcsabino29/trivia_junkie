import React, {useEffect, useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import Button from '@mui/material/Button';

import Home from './Components/Home/Home.jsx';
import LogIn from './Components/Login/Login.jsx';
import SignUp from './Components/Sign-Up/Sign-Up.jsx';
import Header from './Components/Header/Header.jsx';
import useStyles from './Components/Header/styles';

const App = () => {
    const [isLogin, setLogin] = useState(false);
    const classes = useStyles();
    var {login} = String("Log in");
    
    useEffect(() => {
      login="Log out";
      //<Link to={'/'}></Link>
    }, [isLogin]);

    return (
      <>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Button variant="outlined" sx={{color: 'white'}} href="/"> 
                   <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}> Trivia Junkie </Typography>
                </Button> 
            </Toolbar>
        </AppBar>

        
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/sign-up" element={<SignUp isLogin={isLogin} setLogin={setLogin} />} />
      </Routes>
      </>
    );
}

export default App;