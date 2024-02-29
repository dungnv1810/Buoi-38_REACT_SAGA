import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from "./rootReducer"
import rootSada from "./ManageUser/Saga"
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSada)
export default store