import React, { useReducer } from 'react'
import reducer,{initialState} from './reducer';

const UseReducerExample = () => {
    const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <>
            <br />
            <br />
            <h1>
                useReducer Example
            </h1>
            Count:{state.count}
            <br />
            <br />
            <button onClick={()=>{dispatch({type:'increment'})}}>Add</button>
            <button onClick={()=>{dispatch({type:'decrement'})}}>Decrease</button>
        </>
    )
}

export default UseReducerExample