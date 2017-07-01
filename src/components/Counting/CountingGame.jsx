import React from 'react';
import { Container, Row } from 'reactstrap';

import Numbers from './Numbers/Numbers.jsx';
import Controls from './Controls/Controls.jsx';
import Stars from './Stars/Stars.jsx';
import AnswerStatus from './answerStatus.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

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
        this.setState((prevState, props) => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * props.maxNumber),
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
            answerStatus: prevState.selectedNumber === prevState.randomNumberOfStars ? AnswerStatus.CORRECT : AnswerStatus.WRONG
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

export default CountingGame;