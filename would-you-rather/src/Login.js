import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class Login extends Component {
  render() {
    return (
      <div>
        <div><Input placeholder="Name">Enter Name here</Input></div> 
        <div><Input placeholder="Login">Enter Password here</Input></div>
        <Button>Login</Button>
      </div>
    );
  }
}

export default Login;
