import React from 'react';

function NumbersGame() {
    return (
        <div>
            <h1>Numbers</h1>
            <Stars></Stars>
            <Selection></Selection>
            <Controls></Controls>
        </div>        
    );
}

function Stars() {
    return <p>Stars</p>;
}

function Selection() {
    return <p>Selection</p>;
}

function Controls() {
    return <p>Controls</p>;
}

export default NumbersGame;