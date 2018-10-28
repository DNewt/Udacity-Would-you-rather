export default function reducer(
    state ={
        users: null
    }, action) {
        switch(action.type) {
            case 'GOT_USERS':
                return {...state, users: action.data}
            case 'LOGGED_IN':
                return {...state, loggedInUser: action.data}
            case 'LOGGED_OUT':
                return {...state, loggedInUser: null}    
            default:
                return state
        }
    }
