export default function reducer(
    state ={

    }, action) {
        switch(action.type) {
            case 'GOT_QUESTIONS':
                return {...state, questions: action.questions}
            default:
                return state
        }
    }
