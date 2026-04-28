import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { evenIncrementCounter, incrementAll, incrementCounter, oddIncrementCounter } from '../redux-config/CounterSlice'

const Second = () => {
     const {counter,evenCounter,oddCounter} = useSelector((state)=>state.counters)
     const dispatch = useDispatch()
     const input = useRef()
  return (
    <>
    <h1>Second Component</h1><h3>Counter :{counter}</h3>
      <h3>Even-Counter:{evenCounter}</h3>
      <h3>Odd-Counter:{oddCounter}</h3>
    <button onClick={()=>dispatch(incrementCounter())}>Counter-Increment</button>
    <button onClick={()=>dispatch(evenIncrementCounter())}>Even-Counter-Increment</button>
    <button onClick={()=>dispatch(oddIncrementCounter())}>Odd-Counter-Increment</button>
    <br />
    <div>
        <input ref={input} type="text" name="" id="" /><br />
        <button onClick={()=>dispatch(incrementAll({input}))}>Increment All</button>
    </div>
    </>
  )
}

export default Second