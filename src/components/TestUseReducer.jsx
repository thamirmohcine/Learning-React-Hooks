import React, { useReducer, useState } from 'react'

const ACTION = {
    INCREASE : "increase",
    DECREASE : "decrease",
}

const initialState = {count : 0}

const Reducer = (state, action) => {

    switch(action.type){
        case ACTION.INCREASE:
            return {count: state.count + 1};
        case ACTION.DECREASE:
            return {count : state.count - 1};
        default:
            return state;
    }
}

const TestUseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const IncreaseCount = () => {
        dispatch({type : ACTION.INCREASE})
    }

    const  DecreaseCount = () => {
        dispatch({type : ACTION.DECREASE})
    }

    return (
    <div>
        <h1>Testing UseReducer()</h1>
        <h2>Count : {state.count}</h2>
        <button onClick={IncreaseCount}>IncreaseCount</button>
        <button onClick={DecreaseCount}>DecreaseCount</button>
    </div>
  )
}

export default TestUseReducer
