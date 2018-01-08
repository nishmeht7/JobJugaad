import React, { Component } from 'react';
import Root from './containers/Root/Root.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to JobJugaad</h1>
        </header>
        <Root />
      </div>
    );
  }
}

export default App;
