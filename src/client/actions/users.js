import {_getUsers} from '../../_DATA'

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