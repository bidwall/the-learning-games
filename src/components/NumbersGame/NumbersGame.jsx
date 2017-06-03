import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

function NumbersGame() {
    return (
        <Container>
            <br/>
            <h2>Numbers</h2>
            <hr />
            <Row>
                <Star></Star>
                <Selection></Selection>
                <Control></Control>
            </Row>        
        </Container>        
    );
}

function Star() {
    return (
        <Col>            
            <FontAwesome name="star"></FontAwesome>
            <FontAwesome name="star"></FontAwesome>
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

Container.propTypes = {
  fluid:  PropTypes.bool
}

export default NumbersGame;