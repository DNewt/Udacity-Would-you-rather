import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './client/components/Login'
import Home from './client/components/Home'
class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  login(user) {
    this.setState({user: user}, () => {console.log(this.state.user)})
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? 
          <Home/>
        : 
          <SignIn login={this.login.bind(this)}/>        
        }
      </div>
    );
  }
}

export default App;
