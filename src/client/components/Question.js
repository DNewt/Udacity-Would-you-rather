import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
import {connect} from 'react-redux'

class Question extends Component {

    render() {
        console.log(this.props.question)
        return (
            <div>
                {this.props.question.author} asks:
                <p>{this.props.question.optionOne.text}</p>
                or
                <p>{this.props.question.optionTwo.text}</p>
            </div>
 
        )
    }
}

export default (Question);