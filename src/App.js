import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './client/components/Login'
import Home from './client/components/Home'
import Navbar from './client/components/Navbar'
import Leaderboard from './client/components/Leaderboard'
import CreateQuestion from './client/components/CreateQuestion'
import Question from './client/components/Question'
import {connect} from 'react-redux'
import {login} from './client/actions/users'

import {Switch, Route, withRouter} from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  login(user) {
    this.props.login(user)
    // this.setState({user: user}, () => {console.log(this.state.user)})
  }

  render() {

    return (
      <div className="App">
        
        <Navbar loggedInUser={this.props.loggedInUser}/>
        <div className="Container">
      
          {this.props.loggedInUser ? 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/leaderboard" component={Leaderboard}/>
              <Route exact path="/create-question" component={CreateQuestion} />
              <Route exact path="/questions/:id" component={Question} />
            </Switch>
          : 
            <SignIn login={this.login.bind(this)}/>  
                  
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.users.loggedInUser
  }
}

const mapDispatchToProps = {
  login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
