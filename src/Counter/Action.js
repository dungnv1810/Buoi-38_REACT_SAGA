import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT,
    HANDLE_INCREMENT_WITH_PAYLOAD,
    HANDLE_DECREMENT_WITH_PAYLOAD,
    HANDLE_ONMUNTIPLY_WITH_PAYLOAD
} from "./Constent";

export const increment = (payload) => {
    return{
        type: HANDLE_INCREMENT,
        payload: payload
    }
}

export const decrement = (payload) => {
    return{
        type: HANDLE_DECREMENT,
        payload: payload
    }
}

export const incrementWithPayload = (payload) => {
    return{
        type: HANDLE_INCREMENT_WITH_PAYLOAD,
        payload: payload
    }
}

export const decrementWithPayload = (payload) => {
    return{
        type: HANDLE_DECREMENT_WITH_PAYLOAD,
        payload: payload
    }
}

export const muntiply = (payload) => {
    return{
        type: HANDLE_ONMUNTIPLY_WITH_PAYLOAD,
        payload: payload
    }
}
