import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import AnswerStatus from '../answerStatus.js';

const controlsStyle = {
    position: 'relative',
    top: '40%',
    transform: 'translateY(-50%)'
};

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
            <div style={controlsStyle}>
                {getCheckAnswerButton()}
                <br/><br/>
                <Button color="warning" onClick={props.redraw}>
                    <FontAwesome name="refresh"></FontAwesome>
                </Button>
            </div>
        </Col>
    );
}

export default Controls;