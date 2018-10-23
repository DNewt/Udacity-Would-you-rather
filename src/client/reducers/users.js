export default function reducer(
    state ={
        users: []
    }, action) {
        switch(action.type) {
            case 'GOT_USERS':
                return {...state, users: action.data}
            default:
                return state
        }
    }
