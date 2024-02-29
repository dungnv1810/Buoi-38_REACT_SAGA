import {
    HANDLE_ADD_USER,
    HANDLE_DELETE_USER,
    HANDLE_EDIT_USER,
    HANDLE_SEARCH_USER
} from './Constant'

export const addUserTodo = (payload) => {
    return{
        type: HANDLE_ADD_USER,
        payload: payload
    }
}

export const deleteUserTodo = (payload) => {
    return{
        type: HANDLE_DELETE_USER,
        payload: payload
    }
}

export const editUserTodo = (payload) => {
    return{
        type: HANDLE_EDIT_USER,
        payload: payload
    }
}

export const searchUserTodo = (payload) => {
    return{
        type: HANDLE_SEARCH_USER,
        payload: payload
    }
}