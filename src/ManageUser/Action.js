import {
    GET_LIST_USER,
    GET_LIST_USER_SUCCESS,
    GET_LIST_USER_DETAIL,
    GET_ADD_USER,
    GET_ADD_USER_SUCCESS,
    GET_ADD_USER_DETAIL,
    GET_DELETE_USER,
    GET_DELETE_USER_SUCCESS,
    GET_DELETE_USER_DETAIL,
    GET_EDIT_USER,
    GET_EDIT_USER_SUCCESS,
    GET_EDIT_USER_DETAIL

} from './Constants.js';


export const getListUser = () => {
    return{
        type: GET_LIST_USER
    }
}
export const getListUserSuccess = (payload) => {
    return{
        type: GET_LIST_USER_SUCCESS,
        payload: payload
    }
}
export const getListUserDetail = (payload) => {
    return{
        type: GET_LIST_USER_DETAIL,
        payload: payload
    }
}

export const addUser = (payload) => {
    return{
        type: GET_ADD_USER,
        payload
    }
}
export const addUserSuccess = (payload) => {
    return{
        type: GET_ADD_USER_SUCCESS,
        payload: payload
    }
}
export const addUserDetail = (payload) => {
    return{
        type: GET_ADD_USER_DETAIL,
        payload: payload
    }
}

export const deleteUser = (payload) => {
    return{
        type: GET_DELETE_USER,
        payload: payload
    }
}
export const deleteUserSuccess = (payload) => {
    return{
        type: GET_DELETE_USER_SUCCESS,
        payload: payload
    }
}
export const deleteUserDetail = (payload) => {
    return{
        type: GET_DELETE_USER_DETAIL,
        payload: payload
    }
}

export const editUser = (payload) => {
    return{
        type: GET_EDIT_USER,
        payload: payload
    }
}
export const editUserSuccess = (payload) => {
    return{
        type: GET_EDIT_USER_SUCCESS,
        payload: payload
    }
}
export const editUserDetail = (payload) => {
    return{
        type: GET_EDIT_USER_DETAIL,
        payload: payload
    }
}