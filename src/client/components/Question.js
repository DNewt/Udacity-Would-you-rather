import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 60,
      height: 60,
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
        
        let hi = "https://cdn.britannica.com/67/197567-131-1645A26E.jpg"
        
        return (
            
            <div>
                {this.props.users.map((user) => {
                    return (this.props.question.author == user.id  ? this.renderAvatar(user.avatarURL) : console.log("nope"))
                })}

                {this.props.question.author} asks:
                <p>{this.props.question.optionOne.text}</p>
                or
                <p>{this.props.question.optionTwo.text}</p>
            </div>
 
        )
    }
}

export default (Question);