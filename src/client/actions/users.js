import {_getUsers} from '../../_DATA'

export function login(user) {
    return dispatch => {
        dispatch({
            type: 'LOGGED_IN',
            data: user
        })
    }
}

export function logout() {
    return dispatch => {
        dispatch({
            type: 'LOGGED_OUT'
        })
    }
}


export function getUsers() {
    return dispatch => {
        _getUsers().then(results => {
            console.log(results)
            dispatch({
                type: 'GOT_USERS',
                data: results
            })
        }).catch(err => {
            console.log(err)
        })
    }
}