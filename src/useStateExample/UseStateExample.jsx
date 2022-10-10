import React from 'react'
import { useState } from 'react';

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useState Example</h1>
      Count:{count}
      <br />
      <br />

      <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>Add</button>
      <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>Decrease</button>
    </>
  )
}


export default UseStateExample