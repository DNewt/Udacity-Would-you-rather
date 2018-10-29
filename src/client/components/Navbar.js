import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {logout} from '../actions/users'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'

class Navbar extends Component {

    handleClick(){
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"}><Button>Home</Button></Link>
                    <Link to={"/add"}><Button>New Question</Button></Link>
                    <Link to={"/leaderboard"}><Button>Leader Board</Button></Link>
                    <p>{this.props.loggedInUser && this.props.loggedInUser.name}</p>
                    {this.props.loggedInUser && <Button onClick={() => {this.handleClick()}} >Log Out</Button>}
                </Toolbar>
            </AppBar>            
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.users.loggedInUser
    }
}

const mapDispatchToProps = {
    logout
  }
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Navbar));