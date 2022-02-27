import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import Button from '@mui/material/Button';

import useStyles from './styles';

const Header = (currentPage, setCurrentPage) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">
                    Trivia Junkie
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;