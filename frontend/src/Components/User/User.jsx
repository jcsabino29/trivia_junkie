import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import userImg from '../../img/Portrait_Placeholder.png';

const Score = ({userScore}) => {
    return (
        <Card style={{margin: 50, display: 'flex', justifyContent: 'center', width:'50%'}}>
            <Card.Img variant="top" src={userImg} />
            <Card.Body>
            <Card.Title>Pablo Sanchez</Card.Title>
            <Card.Text>
                <text style={{fontWeight: 'bold'}}> Total Points: </text> {(userScore.toString() == 'NaN' ? 0 : userScore)}
                <Card.Text>
                    <text style={{fontWeight: 'bold'}}> Level: </text> Beginner
                </Card.Text>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>
    );
}

export default Score;