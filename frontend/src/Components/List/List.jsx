import React, { useState, useEffect } from 'react';
import {Grid, Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'

import useStyles from './styles';

const List = ({questions, difficulty, setUserAnswer, userAnswer, questionPoints, choices, userScore, setUserScore}) => {
    const classes = useStyles();
    const [choice_value, setChoiceValue] = useState('');
    const [isAnswerClicked, setAnswerClicked] = useState(false);
    let userChoice = '';
    let correct_answer = '';

    const confirmed = (correct_answer) => {
        //isAnswerClicked = true;
        setChoiceValue('');
        setUserAnswer(choice_value);
        console.log("The user answer: " + userAnswer + " the choice value: " + choice_value);
        (decodeURIComponent(correct_answer) === decodeURIComponent(choice_value)) ? console.log("YOU ARE CORRECT") : console.log("YOU ARE WRONG");
        console.log("Before adding: " + questionPoints + " User score: " + userScore);
        (decodeURIComponent(correct_answer) === decodeURIComponent(choice_value)) ? setUserScore(Number(userScore) + Number(questionPoints)) :  setUserScore(Number(userScore) - Number(questionPoints));
        console.log("The user score: " + userScore);
    }

    useEffect(() => {
        userChoice = {choice_value};
    }, [choice_value]);

    const choose_variant = (correct_answer, choice_value) => {
        if (isAnswerClicked) {
            if ((decodeURIComponent(correct_answer) === decodeURIComponent(choice_value))) {
                return "success";
            } else {
                return "danger";
            }
        } else {
            return "outline-dark";
        }
    }

    return (
        <Grid container style={{marginTop: 20, display: 'flex', justifyContent:'center', marginLeft: 30, width: '100%'}} >
            {questions?.map((question, i) => (
                <Grid item id="1">
                    <Card key={question} style={{marginTop: 20, marginRight: '100px'}}> 
                        <Card.Header> 
                            <Typography variant="h5" style={{fontWeight: 'bold'}}> {decodeURIComponent(questions[i].category)}  
                                <text style={{display: 'inline', justifyContent: 'right'}}> for {questionPoints} </text>
                            </Typography>
                        </Card.Header> 
                        <Card.Text style={{margin: 20}}> 
                            <Typography variant="subtitle1" style={{fontWeight: 'bold'}}> {decodeURIComponent(questions[i].question)}  </Typography>
                        </Card.Text>

                        {(question.type === "multiple") ? (
                            correct_answer = question.correct_answer,
                            console.log("The correct answer : " + correct_answer),

                            <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', marginBottom: 20, marginRight: 30}} >
                                <Grid item id={i}>
                                    <ToggleButton variant={choose_variant()} value={choices[0]} onClick={(e) => setChoiceValue(choices[0])} className={classes.button}> {decodeURIComponent(choices[0])} </ToggleButton>
                                    <ToggleButton variant="outline-dark" value={choices[1]} onClick={(e) => setChoiceValue(choices[1])} className={classes.button}> {decodeURIComponent(choices[1])} </ToggleButton>
                                    <ToggleButton variant="outline-dark" value={choices[2]} onClick={(e) => setChoiceValue(choices[2])} className={classes.button}> {decodeURIComponent(choices[2])} </ToggleButton>
                                    <ToggleButton variant="outline-dark" value={choices[3]} onClick={(e) => setChoiceValue(choices[3])} className={classes.button}> {decodeURIComponent(choices[3])} </ToggleButton>
                                </Grid>
                            </Grid>
                            ) : (
                                <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', marginBottom: 20}} >
                                    <Grid item id={i}>
                                        <ToggleButton variant={choose_variant()} value={true} onClick={(e) => setChoiceValue(true)} className={classes.button}> True </ToggleButton>
                                        <ToggleButton variant={choose_variant()} value={false} onClick={(e) => setChoiceValue(false)} className={classes.button}> False </ToggleButton>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Card>,
                    <Button variant="primary" disabled={(choice_value) === '' ? true: false } onClick={() => confirmed(correct_answer)} style={{marginTop: 10}}> Submit </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default List;