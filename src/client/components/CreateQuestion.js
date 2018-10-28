import React, {Component} from 'react'
import {createQuestion} from '../actions/questions'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"


class CreateQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            optionOne: "",
            optionTwo: ""
        }
    }

    onSubmit() {
        var question = {
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: this.props.loggedInUser.id
        }
        this.props.createQuestion(question)
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <h1>Create New Question</h1>
                <p>Would you rather...</p>
                <TextField 
                    value={this.state.optionOne}
                    onChange={(e) => {this.setState({optionOne: e.target.value})}}
                />
                <p>OR</p>
                <TextField 
                    value={this.state.optionTwo}
                    onChange={(e) => {this.setState({optionTwo: e.target.value})}}
                />
                <Button onClick={() => {this.onSubmit()}}>Submit</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.users.loggedInUser
    }    
}

const mapDispatchToProps = {
    createQuestion
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateQuestion);