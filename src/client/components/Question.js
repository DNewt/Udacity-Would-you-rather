import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
import {_saveQuestionAnswer} from '../../_DATA'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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



class Question extends Component {

    handleClick(ans){
        let answer = {
            authedUser: this.props.loggedInUser.id,
            qid: this.props.question.id,
            answer: ans
        }
        _saveQuestionAnswer(answer).then(() => {
            this.props.getQuestions()
        })
    }

    renderAvatar(ava){
        console.log(ava)
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
    
    render() {
        return (
            <div className="question">
                <Card className={styles.card}>
                    <CardContent>
                        <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Would you rather?
                        </Typography>
                        <div>
                            {Object.keys(this.props.users).map((key) => {
                                return (this.props.question.author == this.props.users[key].id  ? this.renderAvatar(this.props.users[key].avatarURL) : console.log("nope"))
                            })}

                            {this.props.question.author} asks:
                            <br/>
                            <Button variant="contained" color="secondary" className={styles.button} onClick={() => {this.handleClick('optionOne')}}>{this.props.question.optionOne.text}</Button>
                            <br/>
                            or
                            <br/>
                            <Button variant="contained" color="primary" className={styles.button} onClick={() => {this.handleClick('optionTwo')}}>{this.props.question.optionTwo.text}</Button>
                        </div> 
                        
                    </CardContent>
                </Card>
            </div>
            

 
        )
    }
}

export default (Question);