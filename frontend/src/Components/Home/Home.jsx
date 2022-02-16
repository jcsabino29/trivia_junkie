import React, { useEffect, useState, useRef} from 'react';
import { CssBaseline, Grid, Button } from '@material-ui/core';

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

const Home = () => {
    const [category, setCategory] = useState('General Knowledge');
    const [difficulty, setDifficulty] = useState('easy');
    const [questions, setQuestions] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [correct_answer, setCorrectAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState('');
    const [questionPoints, setQuestionPoints] = useState('');
    const [userScore, setUserScore] = useState(1000);
    const [choices, setChoices] = useState([]);
    const [isGameOver, setGameOver]  = useState(false);
    const [show, setShow] = useState(false);

    const ref = useRef(null);

    //User answer acts as a confirmation
    useEffect(() => {
        getTriviaData(category, difficulty).then((results) => {
            //setGameOver(false);
            setChoices(shuffle(results[0].incorrect_answers.concat(results[0].correct_answer)));
            setQuestions(results);
            setUserAnswer(userAnswer);
            if (results[0].difficulty == 'easy') {
                setQuestionPoints(100);
            } else if (results[0].difficulty == 'medium') {
                setQuestionPoints(300);
            } else { 
                setQuestionPoints(500);
            }

            if (userScore <= 0) {
                setGameOver(true);
                if (isGameOver) {
                    
                } else {
                    setUserScore(1000);
                }
            } else { console.log("USER SCORE NOT <= 0"); }
        })
    }, [userAnswer, userScore, isGameOver]);


    return (
        <>
            <CssBaseline />
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                    <User userScore={userScore} />
                    </Grid>
                        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} ref={ref}> 
                            <List
                                questions={questions}
                                setUserAnswer={setUserAnswer}
                                userAnswer={userAnswer}
                                isCorrect={isCorrect}
                                setIsCorrect={setIsCorrect}
                                correct_answer={correct_answer}
                                setCorrectAnswer={setCorrectAnswer}
                                questionPoints={questionPoints}
                                choices={choices}
                                setUserScore={setUserScore}
                                userScore={userScore}
                            />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;