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
          <h2>Welcome to the Learning Games</h2>
        </div>
        <p className="App-intro">
          It all starts from <code>src/App.js</code>, have a look and follow the trail...
        </p>
        <NumbersGame></NumbersGame>
      </div>
    );
  }
}

export default App;
