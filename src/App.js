import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TabBar from './Components/TabBar/TabBar';
import List from './Components/List/List.jsx';

import getTriviaData from './api';

const App = () => {
    const [category, setCategory] = useState('General Knowledge');
    const [difficulty, setDifficulty] = useState([]);
    const [type, setType] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
        
    }, [userAnswer]);

    useEffect(() => {
        getTriviaData(category, difficulty, type).then((results) => {
            setQuestions(results);
            
        })
    }, [category, difficulty, type]);

    return (
        <>
            <CssBaseline />
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 30}}> 
                    <List
                        questions={questions}
                        difficulty={difficulty}
                        type={type}
                        setUserAnswer={setUserAnswer}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;