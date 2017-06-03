import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import NumbersGame from './NumbersGame/NumbersGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Learning Games</h2>                  
        </div>
        <NumbersGame></NumbersGame>
      </div>
    );
  }
}

export default App;
