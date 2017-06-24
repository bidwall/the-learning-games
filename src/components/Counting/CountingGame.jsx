import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Numbers from './Numbers/Numbers.jsx';
import Controls from './Controls/Controls.jsx';
import AnswerStatus from './answerStatus.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './countingGame.css';

class CountingGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                randomNumberOfStars: 1 + Math.floor(Math.random() * this.props.maxNumber),
                selectedNumber: 0,
                answerStatus: AnswerStatus.NONE
        };
    }
    
    redraw = () => {
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * this.props.maxNumber),
            selectedNumber: 0,
            answerStatus: AnswerStatus.NONE
        }));
    }

    selected = (number) => {        
        this.setState(prevState => ({
            selectedNumber: number
        }));
    }

    checkAnswer = () => {        
        this.setState(prevState => ({
            answerStatus: this.state.selectedNumber === this.state.randomNumberOfStars ? AnswerStatus.CORRECT : AnswerStatus.WRONG
        }));
    }

    render() {        
        return(
            <Container>
                <br/>
                <h4>Numbers</h4>
                <hr />
                <Row>
                    <Stars numberOfStars={this.state.randomNumberOfStars}></Stars>
                    <Controls redraw={this.redraw} checkAnswer={this.checkAnswer} answerStatus={this.state.answerStatus} selectedNumber={this.state.selectedNumber}></Controls>
                    <Numbers maxNumber={this.props.maxNumber} selectedNumber={this.state.selectedNumber} selected={this.selected}></Numbers>
                </Row>
            </Container>
        );
    };
}

function Stars(props) {
    let stars = [...Array(props.numberOfStars).keys()]
                    .map(x => <FontAwesome name="star" key={x}></FontAwesome>);

    return (
        <Col>
            {stars}
        </Col>
    );
}

export default CountingGame;