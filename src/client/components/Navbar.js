import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button'

class Navbar extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Button>New Question</Button>
                    <Button>Leader Board</Button>
                </Toolbar>
            </AppBar>            
        )
    }
}

export default Navbar;