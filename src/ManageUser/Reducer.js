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

export const initialState = {
    isLoading: false,
    listUser: [],
    error: {},
}
const manageUser = (state= initialState, action) => {
    switch(action.type){
        case GET_LIST_USER: {
            return {
                ...state,
                isLoading:true
            }
        } 
        case GET_LIST_USER_SUCCESS: {
            return {
                ...state,
                listUser: action.payload,
                isLoading: false
            }
        }
        case GET_LIST_USER_DETAIL: {
            return {
                ...state,
                isLoading: false
            }
        }


        case GET_ADD_USER: {
            return state
        } 
        case GET_ADD_USER_SUCCESS: {
            const user = action.payload
            const newUser = {
                ...user
            }
            console.log("newUser =", newUser)
            const newListUser = [newUser, ...state.listUser]
            return {
                ...state,
                listUser: newListUser
            }
        }
        case GET_ADD_USER_DETAIL: {
            return state
        }

        case GET_DELETE_USER: {
            console.log("=== Delete User ===", action)
            return state
        }
        case GET_DELETE_USER_SUCCESS: {
            const user = action.payload
            console.log("=== User ===", user)
            const newListUser = state.listUser.filter(item => item.id !== user.id)
            console.log("newListUser = ", newListUser)
            return {
                ...state,
                listUser: newListUser
            }
        }
        case GET_DELETE_USER_DETAIL: {
            return state
        }


        case GET_EDIT_USER: {
            return state
        } 
        case GET_EDIT_USER_SUCCESS: {
            const todo = action.payload
            const newListUser = state.listUser.map(item => {
                if(item.id === todo.id){
                    return{
                        ...item,
                        ...todo
                    }
                }
                return item
            })
            return {
                ...state,
                listUser: newListUser
            }
        }
        case GET_EDIT_USER_DETAIL: {
            return state
        }
        default:
            return state
    }
}
export default manageUser; 