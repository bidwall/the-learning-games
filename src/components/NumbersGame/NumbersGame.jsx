import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

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
                <Selection maxSelection={maxNumberOfStars}></Selection>
                <Control></Control>
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
                    .map(x => x +1);
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