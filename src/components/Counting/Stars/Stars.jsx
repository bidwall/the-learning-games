import React from 'react';
import { Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const starStyle = {
    margin: '0.5em',
    'font-size': '28px'
};

function Stars(props) {
    let stars = [...Array(props.numberOfStars).keys()]
                    .map(x => <FontAwesome name="star" key={x} style={starStyle}></FontAwesome>);

    return (
        <Col>
            {stars}
        </Col>
    );
}

export default Stars;