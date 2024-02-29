import {combineReducers} from "redux";
import counterDeducer from "./Counter/Reducer";
import todosreducer from "./TodoList/Reducer";
import manageUser from "./ManageUser/Reducer";
const rootReducer = combineReducers({
    counter: counterDeducer,
    todo: todosreducer,
    manage: manageUser
});
export default rootReducer