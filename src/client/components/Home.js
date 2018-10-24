import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
import {getUsers} from '../actions/users'
import {connect} from 'react-redux'
import Question from './Question';

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
    }

    renderQuestions(answered) {

        var questionsFiltered = this.props.questions.filter(question => {
            if (answered === 0) {
                console.log("----------------------")
                console.log(question.optionOne.votes)
                console.log(this.props.loggedInUser)
                return !question.optionOne.votes.includes(this.props.loggedInUser.id) && !question.optionTwo.votes.includes(this.props.loggedInUser.id)            
            } else {
                return question.optionOne.votes.includes(this.props.loggedInUser.id) || question.optionTwo.votes.includes(this.props.loggedInUser.id)
            }
        })
        return (
            questionsFiltered.map((question, index) => {
                return <Question question={question} users={this.props.users}/>
            })
        )
    }

    render() {
        console.log(this.state.answered)
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
        users: state.users.users
    }
}

const mapDispatchToProps = {
    getQuestions,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);