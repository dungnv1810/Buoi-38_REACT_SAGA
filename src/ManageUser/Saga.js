import {
    call, // Call các function bất đồng bộ 
    all, // Thực hiện tất cả các tác vụ bất đồng bộ 
    put, // Dispatch một action lên phía reducer
    delay, // Tạm dừng trong một khoảng thời gian nhất định <=> setimeout
    takeEvery, // Lắng nghe tất cả các action (có cùng type) khi được dispatch
    takeLatest, // Chỉ lắng nghe một action cuối cùng trong tất cả các action có cùng type khi được dispatch
} from 'redux-saga/effects';

import {GET_LIST_USER, GET_ADD_USER, GET_DELETE_USER, GET_EDIT_USER} from './Constants';
import {getListUserApi, getAddUserApi, getDeleteUserApi, getEditUserApi} from './Services';
import {getListUserSuccess, getListUserDetail, addUserSuccess, deleteUserSuccess, editUserSuccess} from './Action';

function* getListUserProcess(params) {
    try{
        const response = yield call(getListUserApi);
        if(response.status === 200){
            yield delay(3000)
            yield put(getListUserSuccess(response.data))
        }else{
            getListUserDetail()
        }
    }catch(err){
        getListUserDetail()
    }
}
function* watchGetListUser(){
    yield takeLatest(GET_LIST_USER, getListUserProcess)
}



function* getAddUserProcess(params) {
    try{
        const user = params.payload
        const response = yield call(getAddUserApi, user);
        if(response.status === 200 || response.status === 201){
            yield put(addUserSuccess(response.data))
        }
    }catch(err){
        
    }
}
function* watchAddUser(){
    yield takeLatest(GET_ADD_USER, getAddUserProcess)
}


function* getDeleteUserProcess(params) {
    const user = params.payload
    const response = yield call(getDeleteUserApi, user)
    if(response.status === 200 || response.status === 201){
        yield put(deleteUserSuccess(response.data))
    }
}
function* watchDeleteUser(){
    yield takeLatest(GET_DELETE_USER, getDeleteUserProcess)
}


function* getEditUserProcess(params) {
    try{
        const user = params.payload
        console.log("user =", user)
        const userId = params.payload.id
        console.log("userId", userId)
        const response = yield call(getEditUserApi, userId, user)
        console.log("Response Edit in saga =", response)
        if(response.status === 200 || response.status === 201){
            yield put(editUserSuccess(response.data))
        }
    }catch(err){
        
    }
}
function* watchEditUser(){
    yield takeLatest(GET_EDIT_USER, getEditUserProcess)
}

function* watchAll(){
    yield all([
        watchGetListUser(),
        watchAddUser(),
        watchDeleteUser(),
        watchEditUser()
    ])
}
export default watchAll;