import {_getQuestions, _saveQuestion} from '../../_DATA'

export function getQuestions(user) {
    return dispatch => {
        _getQuestions().then(results => {
            console.log(results)
            dispatch({
                type: 'GOT_QUESTIONS',
                data: results
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export function getQuestion(id) {
    return dispatch => {
        _getQuestions().then(results => {
            dispatch({
                type: 'GOT_QUESTION',
                data: results[id]
            })
        })
    }
}

export function createQuestion(question) {
    return dispatch => {
        _saveQuestion(question).then(results => {
            console.log(results)
        })
    }
}