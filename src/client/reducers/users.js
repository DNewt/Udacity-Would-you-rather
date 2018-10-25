export default function reducer(
    state ={
        users: null
    }, action) {
        switch(action.type) {
            case 'GOT_USERS':
                console.log(action.data)
                return {...state, users: action.data}
            case 'LOGGED_IN':
                return {...state, loggedInUser: action.data}
            default:
                return state
        }
    }
