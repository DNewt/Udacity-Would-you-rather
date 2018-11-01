import React, {Component} from 'react'
import {getQuestions, clearQuestion} from '../actions/questions'
import {getUsers} from '../actions/users'
import {connect} from 'react-redux'
import QuestionCard from './QuestionCard';

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            answered: 0
        }
    }

    componentDidMount() {
        this.props.getQuestions()
        this.props.clearQuestion()
    }

    sortQuestions(questions) {
        return questions.sort(this.compareQuestion)
    }

    compareQuestion(questionA, questionB) {
        return questionA.timestamp < questionB.timestamp
    }

    renderQuestions(answered) {

        var questions = []
        for (var key in this.props.questions) {
            questions.push(this.props.questions[key])
        }
        var questions = this.sortQuestions(questions)

        var questionsFiltered = Object.keys(questions).filter(key => {
            var question = questions[key]
            if (answered === 0) {
                return !question.optionOne.votes.includes(this.props.loggedInUser.id) && !question.optionTwo.votes.includes(this.props.loggedInUser.id)            
            } else {
                return question.optionOne.votes.includes(this.props.loggedInUser.id) || question.optionTwo.votes.includes(this.props.loggedInUser.id)
            }
        })
        return (
            questionsFiltered.map((question, index) => {
                return <QuestionCard key={index} getQuestions={this.props.getQuestions.bind(this)} question={questions[question]} loggedInUser={this.props.loggedInUser}/>
            })
        )
    }

    render() {

        return (
            <div>
                <Tabs value={this.state.answered} onChange={(e, v) => {this.setState({answered: v})}}>
                    <Tab label="Unanswered"/>
                    <Tab label="Answered"/>
                </Tabs>
                {this.renderQuestions(this.state.answered)}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions,
        users: state.users.users,
        loggedInUser: state.users.loggedInUser
    }
}

const mapDispatchToProps = {
    clearQuestion,
    getQuestions,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);