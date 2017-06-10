import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './numbersGame.css';

class NumbersGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                randomNumberOfStars: 1 + Math.floor(Math.random() * this.props.maxNumber)
        };
    }
    

    redraw = (event) => {
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * this.props.maxNumber)
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
                    <Redraw redraw={this.redraw}></Redraw>
                    <Numbers maxNumber={this.props.maxNumber}></Numbers>
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

function Redraw(props) {
    return (
        <Col>
            <Button color="info" onClick={props.redraw}>
                <FontAwesome name="refresh"></FontAwesome>
            </Button>
        </Col>
    );
}

function Numbers(props) {
    let selection = [...Array(props.maxNumber).keys()]
                    .map(x => <span className="selection" key={x+1}>{x+1}</span>);

    return (
        <Col>
            {selection}
        </Col>
    );
}

export default NumbersGame;