import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'

const ReduxExample = () => {
    const dispatch = useDispatch()
    const count=useSelector((state)=> state.count)
    return (
        <>
            <br />
            <br />
            <h1>
                useRedux Example
            </h1>
            Count:{count.count}
            <br />
            <br />
            <button onClick={()=>{dispatch({type:'increment'})}}>Add</button>
            <button onClick={()=>{dispatch({type:'decrement'})}}>Decrease</button>

        </>
    )
}

export default ReduxExample