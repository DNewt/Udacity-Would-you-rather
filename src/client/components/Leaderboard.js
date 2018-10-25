import React, {Component} from 'react'

import {connect} from 'react-redux'
import {getUsers} from '../actions/users'

class Leaderboard extends Component {

    renderUser (user) {
        return(
            <div>
                {user.name}
            </div>
        )
    }

    compareUser(userA, userB) {
        return (Object.keys(userB.answers).length + userB.questions.length) - (Object.keys(userA.answers).length + userA.questions.length)
    }

    render() {
        var users = []
        for (var key in this.props.users) {
            users.push(this.props.users[key])
        }
        
        return (
            <div>
                {users.sort(this.compareUser).map(user => {return this.renderUser(user)})}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (Leaderboard);