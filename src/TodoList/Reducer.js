import { v4 as uuidv4 } from 'uuid';
import {
    HANDLE_ADD_USER,
    HANDLE_DELETE_USER,
    HANDLE_EDIT_USER,
    HANDLE_SEARCH_USER
} from './Constant'

const initialState = {
    todos: [],
}

const todosreducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_ADD_USER: {
            console.log("Action = ", action)
            const todo = action.payload
            console.log("todo", todo)
            const newtodo = {
                id: uuidv4(),
                ...todo
            }
            console.log("Newtodo= ", newtodo)
            const newtodos = [
                ...state.todos,
                newtodo
            ]
            return {
                ...state,
                todos: newtodos
            }
        }
        case HANDLE_DELETE_USER: {
            console.log("Id = ", action)
            const newTodos = state.todos.filter(item => item.id !== action.payload)
            return {
                ...state,
                todos: newTodos
            }
        }
        case HANDLE_EDIT_USER: {
            console.log("Edit = ", action)
            const todo = action.payload
            const newTodos = state.todos.map(item => {
                if(item.id === todo.id){
                    return{
                        ...item,
                        ...todo
                    }
                }
                return item;
            })
            return {
                ...state,
                todos: newTodos
            }
        }
        
        case HANDLE_SEARCH_USER: {
            return {
                
            }
        }
        default:
            return state
    }
}
export default todosreducer;