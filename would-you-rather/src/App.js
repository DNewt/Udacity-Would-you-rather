import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';

class App extends Component {
  render() {
    return (
      <div className="center">
        <Login />
        <Register />

      </div>
    );
  }
}

export default App;
