import React, { Component } from 'react';
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
import InvalidPoll from './client/components/InvalidPoll';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentWillReceiveProps(nextProps) {
    // if (JSON.stringify(this.props.loggedInUser) !== JSON.stringify(nextProps.loggedInUser)) {
    //   this.props.history.push("/")
    // }
  }

  login(user) {
    this.props.login(user)
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
              <Route exact path="/add" component={CreateQuestion} />
              <Route exact path="/questions/:id" component={Question} />
              <Route exact path="/invalidpoll" component={InvalidPoll} />
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
