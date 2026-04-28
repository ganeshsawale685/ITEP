import React from 'react'
import { useSelector } from 'react-redux'

const First = () => {

      const {counter,evenCounter,oddCounter} = useSelector((state)=>state.counters)
  return (
    <>
    <h1>First Component</h1>
    <h3>Counter :{counter}</h3>
      <h3>Even-Counter:{evenCounter}</h3>
      <h3>Odd-Counter:{oddCounter}</h3>
    </>
  )
}

export default First