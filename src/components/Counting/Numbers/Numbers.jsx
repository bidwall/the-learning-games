import React from 'react';
import { Button, Col } from 'reactstrap';

function Numbers(props) {
    const isActive = (number) => {
        return props.selectedNumber === number;
    };
    
    let selection = [...Array(props.maxNumber).keys()]
                    .map(x => <Button  key={x+1} 
                                    outline color="info"
                                    active={isActive(x+1)}
                                    onClick={() => props.selected(x+1)}>
                                {x+1}
                              </Button>
                        );

    return (
        <Col>
            {selection}
        </Col>
    );
}

export default Numbers;