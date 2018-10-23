import {_getQuestions} from '../../_DATA'

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