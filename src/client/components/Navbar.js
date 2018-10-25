import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
class Navbar extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"}><Button>Home</Button></Link>
                    <Link to={"/create-question"}><Button>New Question</Button></Link>
                    <Link to={"/leaderboard"}><Button>Leader Board</Button></Link>
                    <p>{this.props.loggedInUser && this.props.loggedInUser.name}</p>
                </Toolbar>
            </AppBar>            
        )
    }
}

export default Navbar;