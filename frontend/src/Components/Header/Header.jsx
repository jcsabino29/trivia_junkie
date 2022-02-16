import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import Button from '@mui/material/Button';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">
                    Trivia Junkie
                </Typography>
                <Box display="flex">
                    { /* <AutoComplete> */ }
                        <div className={classes.search}>
                            <Button variant="primary"> Log in </Button>
                        </div>
                        <div className={classes.search}>
                            <Button variant="primary"> Sign up </Button>
                        </div>
                    { /* </AutoComplete> */ }
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;