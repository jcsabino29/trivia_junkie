import React, {useEffect} from 'react';
import {Typography} from '@material-ui/core';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import useStyles from './styles';

const Answer = ({userAnswer, setUserAnswer, actualAnswer, questionPoints, difficulty, currentUserPoints, isCorrect, isAnswerClicked, setIsCorrect, correct_answer}) => {
    const classes = useStyles();

    const confirmed = () => {
        isAnswerClicked = false;
        setUserAnswer("The Answer: " + userAnswer);
        console.log({userAnswer});
        (correct_answer == userAnswer) ? setIsCorrect(isCorrect) :  setIsCorrect(!isCorrect);
    }

    return (
        <>
            <Card
                bg='light'
                text='light'
                style={{ width: '18rem', marginTop: 40}}
                className="mb-2"
            >
                <Card.Header style={{color: 'black'}}>Points: {questionPoints} </Card.Header>
                <Card.Body>
                <Card.Title style={{color: 'black'}}> Difficulty: {difficulty} </Card.Title>
                <Card.Text style={{color: 'black'}}>
                    Answer: {decodeURIComponent(userAnswer)}
                </Card.Text>
                </Card.Body>
            </Card>
            <Button variant="primary" disabled={console.log("clicked to do ")} onClick={() => confirmed()}> Submit </Button>

        </>
    );
}


export default Answer;