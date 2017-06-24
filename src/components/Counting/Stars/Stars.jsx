import React from 'react';
import { Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

function Stars(props) {
    let stars = [...Array(props.numberOfStars).keys()]
                    .map(x => <FontAwesome name="star" key={x}></FontAwesome>);

    return (
        <Col>
            {stars}
        </Col>
    );
}

export default Stars;