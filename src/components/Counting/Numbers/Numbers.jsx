import React from 'react';
import { Button, Col } from 'reactstrap';

function Numbers(props) {
    const isActive = (number) => {
        return props.selectedNumber === number;
    };
    
    const NumberButton = (number) => {
        <Button  key={number} outline color="info" active={isActive(number)} onClick={() => props.selected(number)}>number</Button>
    };

    let selection = [...Array(props.maxNumber).keys()]
                    .map(x => <NumberButton item={x+1} />);

    return (
        <Col>
            {selection}
        </Col>
    );
}

export default Numbers;