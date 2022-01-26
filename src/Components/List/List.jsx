import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, Button, FormControl, Stack, Card, CardContent, CardHeader, Input } from '@material-ui/core';

import useStyles from './styles';
import { fontWeight } from '@mui/system';

const List = ({questions, difficulty, type, setUserAnswer}) => {
    const classes = useStyles();
    const [choices, setChoices] = useState([]);
    const answer = [];
    console.log({questions});


    return (
        <Grid container style={{marginTop: 20, display: 'flex', justifyContent: 'center'}} >
            <Grid item>
                {questions?.map((question, i) => (
                    setChoices(questions[i].incorrect_answers.concat(questions[i].correct_answer)),
                    console.log("Answer: " + choices),

                    
                    <Card sx={{maxWidth: 345}} style={{marginTop: 20}}> 
                        <CardHeader title={decodeURIComponent(questions[i].category)} />
                        <CardContent> 
                            <Typography variant="subtitle1"> {decodeURIComponent(questions[i].question)}  </Typography>
                        </CardContent>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="my-input">Answer</InputLabel>
                            <Input id="answer" aria-describedby="my-helper-text" onChange={(answer) => setUserAnswer(answer)} />
                        </FormControl>
                        <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', marginBottom: 20}} >
                            <Grid item > 
                                <Button color="primary" variant="outlined" style={{borderColor: 'black', borderWidth: 2}}>Contained</Button>
                            </Grid>
                            <Grid item> 
                                <Button color="primary" variant="outlined" style={{borderColor: 'black', borderWidth: 2}}>Contained</Button>
                            </Grid>
                            <Grid item> 
                                <Button color="primary" variant="outlined" style={{borderColor: 'black', borderWidth: 2}}>Contained</Button>
                            </Grid>
                            <Grid item> 
                                <Button color="primary" variant="outlined" style={{borderColor: 'black', borderWidth: 2}}>Contained</Button>
                            </Grid>
                        </Grid>
                    </Card> 
                ))}
            </Grid>
        </Grid>
    );
}

export default List;