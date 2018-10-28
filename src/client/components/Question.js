import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {_saveQuestionAnswer} from '../../_DATA'
import {Link} from 'react-router-dom'
import {getQuestion} from '../actions/questions'
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'

class Question extends Component {

    componentDidMount() {
        var id = window.location.pathname.split("/").pop()
        this.props.getQuestion(id)
    }

    handleClick(ans){
        
        let answer = {
            authedUser: this.props.loggedInUser.id,
            qid: this.props.question.id,
            answer: ans
        }
        _saveQuestionAnswer(answer).then(() => {
            this.props.getQuestion(this.props.question.id)
            this.props.history.push('/')
        })
    }

    renderAvatar(ava){
        return (
            <div>
                <Avatar
                    alt="Adelle Charles"
                    src={ava}
                    className={classNames(styles.avatar, styles.bigAvatar)}
                />
            </div>
        )
    }

    renderUnanswered () {
        return (
            <div>
                {
                    this.renderAvatar(this.props.users[this.props.question.author].avatarURL)
                }

                {this.props.question && this.props.question.author} asks:
                <br/>
                <Button variant="contained" color="secondary" className={styles.button} onClick={() => {this.handleClick('optionOne')}}>{this.props.question.optionOne.text}</Button>
                <br/>
                or
                <br/>
                <Button variant="contained" color="primary" className={styles.button} onClick={() => {this.handleClick('optionTwo')}}>{this.props.question.optionTwo.text}</Button>
            </div>    
        )
    }

    renderAnswered () {
        return (
            <div>
                {
                    this.renderAvatar(this.props.users[this.props.question.author].avatarURL)
                }

                {this.props.question &&
                    <div>
                        {this.props.question.author} asks:
                        {this.props.question.optionOne.text} or {this.props.question.optionTwo.text}
                    </div>
                }
            </div>  
        )
    }

    checkAnswered() {
        return Object.keys(this.props.loggedInUser.answers).indexOf(this.props.question.id) > -1
    }

    render () {
        if (!this.props.question || !this.props.loggedInUser) {
            return <div/>
        } else {
            var answered = this.checkAnswered()
            return (
                <div className="question">
                <Card className={styles.card}>
                    <CardContent>
                        <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Would you rather?
                        </Typography>
                        {  answered ? this.renderAnswered() : this.renderUnanswered()
                        }
                    </CardContent>
                </Card>
            </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        question: state.questions.question,
        users: state.users.users,
        loggedInUser: state.users.loggedInUser
    }
}

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
      width: 90,
      height: 90,
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

const mapDispatchToProps = {
    getQuestion
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Question));