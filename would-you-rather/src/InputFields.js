import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class InputFields extends Component {
  render() {
    return (
      <div>
        <div><Input placeholder="Name">Enter Name here</Input></div> 
        <div><Input placeholder="Login">Enter Password here</Input></div>
      </div>
    );
  }
}

export default InputFields;