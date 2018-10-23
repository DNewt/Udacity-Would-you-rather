import React, {Component} from 'react'
import {getQuestions} from '../actions/questions'
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
                return question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0            
            } else {
                return question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0
            }
        })
        return (
            questionsFiltered.map((question, index) => {
                return <Question question={question} />
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
        questions: state.questions.questions
    }
}

const mapDispatchToProps = {
    getQuestions
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);