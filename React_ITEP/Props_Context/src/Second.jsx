import React, { useContext } from 'react'
import { Context } from './App'

const Second = () => {
    const {counter,setCounter} = useContext(Context)
  return (
    <>
        <h1>Counter : {counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>Increment</button>

    </>
  )
}

export default Second
