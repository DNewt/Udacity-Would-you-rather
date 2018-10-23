import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  };


class Question extends Component {

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
    
    render() {
              
        return (
            <div className="question">
                <Card className={styles.card}>
                    <CardContent>
                        <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Would you rather?
                        </Typography>
                        <div>
                            {this.props.users.map((user) => {
                                return (this.props.question.author == user.id  ? this.renderAvatar(user.avatarURL) : console.log("nope"))
                            })}

                            {this.props.question.author} asks:
                            <button>{this.props.question.optionOne.text}</button>
                            or
                            <button>{this.props.question.optionTwo.text}</button>
                        </div> 
                        
                    </CardContent>
                </Card>
            </div>
            

 
        )
    }
}

export default (Question);