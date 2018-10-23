
export default function reducer(
    state ={
        questions: []
    }, action) {
        switch(action.type) {
            case 'GOT_QUESTIONS':
                console.log(action.data)
                return {...state, questions: action.data}
            default:
                return state
        }
    }
