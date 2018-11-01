import React, {Component} from 'react'

import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {_saveQuestionAnswer} from '../../_DATA'
import {getQuestion} from '../actions/questions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Question extends Component {


    componentWillReceiveProps(nextProps) {
        if(nextProps.error) {
            this.props.history.push("/invalidpoll")
        }
    }
    

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
                <Button variant="contained" color="secondary" onClick={() => {this.handleClick('optionOne')}}>{this.props.question.optionOne.text}</Button>
                <br/>
                or
                <br/>
                <Button variant="contained" color="primary" onClick={() => {this.handleClick('optionTwo')}}>{this.props.question.optionTwo.text}</Button>
            </div>    
        )
    }

    renderAnswered () {
        var totalVotes = this.props.question.optionOne.votes.concat(this.props.question.optionTwo.votes).length
        var optionOneVotes = this.props.question.optionOne.votes.length
        var optionTwoVotes = this.props.question.optionTwo.votes.length
        return (
            <div>
                {
                    this.renderAvatar(this.props.users[this.props.question.author].avatarURL)
                }

                {this.props.question &&
                    <div>
                        <h2>{this.props.question.author} asks:</h2>

                        <p>{this.props.question.optionOne.text} or {this.props.question.optionTwo.text}</p>

                        <p>{optionOneVotes} answered {this.props.question.optionOne.text} ( {(optionOneVotes/totalVotes * 100).toFixed(2)}%)</p>
                        <p>{optionTwoVotes} answered {this.props.question.optionTwo.text} ( {(optionTwoVotes/totalVotes * 100).toFixed(2)}%)</p>

                        {this.props.question.optionOne.votes.map((id, key) => {
                           return (id === this.props.loggedInUser.id) ? <p key={key}>You voted for option one</p> :  null
                        })}
                        {this.props.question.optionTwo.votes.map((id, key) => {
                            return (id === this.props.loggedInUser.id) ? <p key={key}>You voted for option two</p> : null
                        })}
                    </div>
                }
            </div>  
        )
    }

    checkAnswered() {
        var votes = this.props.question.optionOne.votes.concat(this.props.question.optionTwo.votes)
        return votes.indexOf(this.props.loggedInUser.id) > -1
    }

    render () {
        if (!this.props.question || !this.props.loggedInUser) {
            return <div/>
        } else {
            var answered = this.checkAnswered()
            return (
                <div className="question">
                <Card>
                    <CardContent>
                        {/* <Typography className={styles.title} color="textSecondary" gutterBottom> */}
                        Would you rather?
                        {/* </Typography> */}
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
        loggedInUser: state.users.loggedInUser,
        error: state.questions.error
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