import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const TabBar = ({difficulty, setDifficulty, type, setType}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel>Difficulty</InputLabel>
                <Select value={type} onChange={(e) => {setDifficulty(e.target.value)}}>
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => {setType(e.target.value)}}>
                    <MenuItem value="multiple_choice">Multiple Choice</MenuItem>
                    <MenuItem value="true_false">True or False</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default TabBar;