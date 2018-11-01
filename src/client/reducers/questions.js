
export default function reducer(
    state ={
        questions: []
    }, action) {
        switch(action.type) {
            case 'GOT_QUESTIONS':
                return {...state, questions: action.data}
            case 'GOT_QUESTION':
                return {...state, question: action.data}
            case 'CLEARED_QUESTION':
                return {...state, question: null}
            case 'INVALID_QUESTION':
                return {...state, error: action.error}
            default:
                return state
        }
    }
