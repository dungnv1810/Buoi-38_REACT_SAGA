import React from "react";
import {connect} from "react-redux"
import {increment, decrement, incrementWithPayload, decrementWithPayload, muntiply} from "./Action";
import {selectCounter} from '../ManageUser/Selectors'
import './style.css'
const Counter = (props) => {
    const { 
        OnclickIncrement, 
        OnclickDecrement, 
        OnclickIncrementWithPayload, 
        OnclickDecrementWithPayload, 
        OnclickMultiply, counter} = props;
    const hendleOnclickIncrement = () => {
        OnclickIncrement()
    }
    const hendleOnclickDecrement = () => {
        OnclickDecrement()
    }
    const onclickIncrementWithPayload = (payload) => {
        OnclickIncrementWithPayload(payload)
    }
    const onclickDecrementWithPayload = (payload) => {
        OnclickDecrementWithPayload(payload)
    }
    const onMultiply = (payload) => {
        OnclickMultiply(payload)
    }
    return(
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={hendleOnclickIncrement}>Increment + </button>
            <button onClick={hendleOnclickDecrement}>Decrement - </button>
            <button onClick={()=>onclickIncrementWithPayload(5)}>+5</button>
            <button onClick={()=>onclickDecrementWithPayload(5)}>-5</button>
            <button onClick={()=>onMultiply(2)}>x2</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        counter: selectCounter(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        OnclickIncrement: () => dispatch(increment()),
        OnclickDecrement: () => dispatch(decrement()),
        OnclickIncrementWithPayload: (data) => dispatch(incrementWithPayload(data)),
        OnclickDecrementWithPayload: (data) => dispatch(decrementWithPayload(data)),
        OnclickMultiply: (data) => dispatch(muntiply(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)