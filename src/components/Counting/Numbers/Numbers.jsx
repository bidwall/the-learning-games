import React from 'react';
import { Button, Col } from 'reactstrap';

const buttonStyle = {
    margin : '10px',
    width: '50px'
};

function Numbers(props) {
    const isActive = (number) => {
        return props.selectedNumber === number;
    };
    
    const numberButton = (number) => {        
        return (
        <Button key={number}
                outline color="info"
                active={isActive(number)}
                onClick={() => props.selected(number)}
                style={buttonStyle}>
            {number}
        </Button>);
    };

    let selection = [...Array(props.maxNumber).keys()]
                    .map(x => numberButton(x+1));

    return (
        <Col>
            {selection}
        </Col>
    );
}

export default Numbers;