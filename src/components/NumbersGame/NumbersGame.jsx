import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

function NumbersGame() {
    const randomNumberOfStars = 1 + Math.floor(Math.random()*10);

    return (
        <Container>
            <br/>
            <h4>Numbers</h4>
            <hr />
            <Row>
                <Stars numberOfStars={randomNumberOfStars}></Stars>
                <Selection></Selection>
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

function Selection() {
    return (
        <Col>
            <p>Selection</p>
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