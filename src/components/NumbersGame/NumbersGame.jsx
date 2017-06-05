import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './numbersGame.css';

function NumbersGame() {
    const maxNumberOfStars = 10;
    const randomNumberOfStars = 1 + Math.floor(Math.random() * maxNumberOfStars);

    return (
        <Container>
            <br/>
            <h4>Numbers</h4>
            <hr />
            <Row>
                <Stars numberOfStars={randomNumberOfStars}></Stars>                
                <Control></Control>
                <Selection maxSelection={maxNumberOfStars}></Selection>
            </Row>        
        </Container>        
    );
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

function Selection(props) {
    let selection = [...Array(props.maxSelection).keys()]
                    .map(x => <span className="selection" key={x+1}>{x+1}</span>);

    return (
        <Col>
            {selection}
        </Col>
    );
}

function Control() {
    return (
        <Col>
            <p>Control</p>
        </Col>
    );
}

export default NumbersGame;