import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Numbers from './Numbers/Numbers.jsx'

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

const AnswerStatus = {
    NONE: 0,
    CORRECT: 1,
    WRONG: 2
}

function Controls(props) {
    const getCheckAnswerButton = () => {
        let isDisabled = props.selectedNumber === 0;

        switch (props.answerStatus) {
            case AnswerStatus.CORRECT: return (
                <Button color="success">
                    <FontAwesome name="check"></FontAwesome>
                </Button>
                );                
            case AnswerStatus.WRONG: return (
                <Button color="danger"  onClick={props.checkAnswer}>
                    <FontAwesome name="times"></FontAwesome>
                </Button>
                );
            case AnswerStatus.NONE:
            default: return (
                <Button color="info" onClick={props.checkAnswer} disabled={isDisabled}>
                    <FontAwesome name="calculator"></FontAwesome>
                </Button>
                );
        }
    }

    return (
        <Col>
            {getCheckAnswerButton()}
            <br/><br/>
            <Button color="warning" onClick={props.redraw}>
                <FontAwesome name="refresh"></FontAwesome>
            </Button>
        </Col>
    );
}

export default CountingGame;