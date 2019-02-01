import React, { Component } from 'react';
import logo from './logo.svg';
import ReactGiphy from 'react-giphy'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactGiphy search="happy birthday" />
      </div>
    );
  }
}

export default App;
