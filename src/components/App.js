import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import CountingGame from './NumbersGame/NumbersGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Learning Games</h2>                  
        </div>
        <CountingGame maxNumber={10}></CountingGame>
      </div>
    );
  }
}

export default App;