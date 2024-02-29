import {createSelector} from 'reselect'
import {initialState} from './Reducer'
// Bước 1: Select theo cấp độ reducer
// (state) là của store, state.manage là state truy vấn đến reducer trong reduser có các trường  
// bản chất nó là một function, nó trae về cho chúng ta một reduser mà chúng ta muốn truy vấn
const selectManageUserReducer = (state) => state.manage 
const selectCounterReducer = (state) => state.counter 
// Bước 2: Select theo từng trường của reduser
// trong này có 2 tham số 
// - Tham số thứ nhất là một cái reducer mà muốn lấy ra
// - Là một function, function là là một tham số 
// State là của state Reducer
export const selectListUser = createSelector(
    selectManageUserReducer,
    state => state.listUser
) 
export const selectIsLoading = createSelector(
    selectManageUserReducer,
    state => state.isLoading
)

export const selectCounter = createSelector(
    selectCounterReducer,
    state => state.counter
)