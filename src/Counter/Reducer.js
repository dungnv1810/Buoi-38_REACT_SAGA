import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT,
    HANDLE_INCREMENT_WITH_PAYLOAD,
    HANDLE_DECREMENT_WITH_PAYLOAD,
    HANDLE_ONMUNTIPLY_WITH_PAYLOAD
} from "./Constent";

const initialState = {
    counter: 0
}

const counterDeducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_INCREMENT: {
            return{
                ...state,
                counter: state.counter + 1
            }
        }
        case HANDLE_DECREMENT: {
            return{
                ...state,
                counter: state.counter - 1
            }
        }
        case HANDLE_INCREMENT_WITH_PAYLOAD: {
            const payload = action.payload
            return{
                ...state,
                counter: state.counter + payload
            }
        }
        case HANDLE_DECREMENT_WITH_PAYLOAD: {
            const payload = action.payload
            return{
                ...state,
                counter: state.counter - payload
            }
        }
        case HANDLE_ONMUNTIPLY_WITH_PAYLOAD: {
            const payload = action.payload
            return{
                ...state,
                counter: state.counter * payload
            }
        }
        default:
        return state
    }
}
export default counterDeducer