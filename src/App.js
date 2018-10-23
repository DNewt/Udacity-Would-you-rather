import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './client/components/Login'
import Home from './client/components/Home'
import Navbar from './client/components/Navbar'
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
        <Navbar user={this.state.user}/>
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
