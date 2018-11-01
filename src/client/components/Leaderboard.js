import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/users'
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
      width: 90,
      height: 90,
    },
    bigAvatar: {
      width: 50,
      height: 50,
    },
    card: {
        minWidth: 275,
        margin: 100
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      button: {
        margin: "10%",
      },
      input: {
        display: 'none',
      },
  };


class Leaderboard extends Component {

    renderUser (user, key) {
        
        var userAnswers = Object.keys(user.answers)
        let score = user.questions.length + userAnswers.length
        return(
            <div className="question" key={key}>
                <Card>
                    <CardContent>
                        {/* <Typography className={styles.title} color="textSecondary" gutterBottom> */}
                        <div>
                            <Avatar
                                alt="Adelle Charles"
                                src={user.avatarURL}
                                className={classNames(styles.avatar, styles.bigAvatar)}
                            />
                        </div>
                        <div>
                            Name: {user.name}
                            <br/>
                            Questions asked: {user.questions.length}
                            <br/>
                            Questions answered: {userAnswers.length}
                        </div>
                        <div>
                            Score: {score}
                        </div>
                        {/* </Typography> */}


                    </CardContent>
                </Card>
            </div>
        )
    }

    compareUser(userA, userB) {
        return (Object.keys(userB.answers).length + userB.questions.length) - (Object.keys(userA.answers).length + userA.questions.length)
    }

    render() {
        this.props.getUsers();
        var users = []
        for (var key in this.props.users) {
            users.push(this.props.users[key])
        }
        
        return (
            <div>
                {users.sort(this.compareUser).map((user, key) => {return this.renderUser(user, key)})}
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