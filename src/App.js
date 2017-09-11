import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar" />
        <div className="App-header">
          <h2>My First React App</h2>
        </div>
        <p className="App-intro">
          My First React App
        </p>
      </div>
    );
  }
}

export default App;
