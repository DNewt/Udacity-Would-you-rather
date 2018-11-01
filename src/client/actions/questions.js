import {_getQuestions, _saveQuestion} from '../../_DATA'

export function getQuestions(user) {
    return dispatch => {
        _getQuestions().then(results => {
            dispatch({
                type: 'GOT_QUESTIONS',
                data: results
            })
        }).catch(err => {
        })
    }
}

export function getQuestion(id) {
    return dispatch => {
        _getQuestions().then(results => {
            if(results[id]) {
                dispatch({
                    type: 'GOT_QUESTION',
                    data: results[id]
                })
            } else {
                dispatch({
                    type: 'INVALID_QUESTION',
                    error: "Failed to find question"
                })
            }
        })
    }
}

export function createQuestion(question) {
    return dispatch => {
        _saveQuestion(question).then(results => {

        })
    }
}

export function clearQuestion() {
    return dispatch => {
        dispatch({
            type: 'CLEARED_QUESTION'
        })
    }
}