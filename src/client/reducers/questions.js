
export default function reducer(
    state ={
        questions: []
    }, action) {
        switch(action.type) {
            case 'GOT_QUESTIONS':
                return {...state, questions: action.data}
            case 'GOT_QUESTION':
                return {...state, question: action.data}
            default:
                return state
        }
    }
