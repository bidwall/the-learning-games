import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

function NumbersGame() {
    return (
        <Container>
            <br/>
            <h4>Numbers</h4>
            <hr />
            <Row>
                <Stars numberOfStars={10}></Stars>
                <Selection></Selection>
                <Control></Control>
            </Row>        
        </Container>        
    );
}

function Stars(props) {
    const numberOfStars = props.numberOfStars;
    
    let stars = [];    
    for (let index = 0; index < numberOfStars; index++) {
        stars.push(<FontAwesome name="star"></FontAwesome>);
    }

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