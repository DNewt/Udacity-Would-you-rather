import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import InputFields from './InputFields.js';

class App extends Component {
  render() {
    return (
      <div className="center">
        <InputFields />
        <Login />
        <Register />
       

      </div>
    );
  }
}

export default App;
