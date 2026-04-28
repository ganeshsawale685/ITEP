import React from 'react'
import { useSelector } from 'react-redux'
import First from './components/First';
import Second from './components/Second';


const App = () => {
  
  const {m1,m2} = useSelector((state)=> state.messages);
  const {counter,evenCounter,oddCounter} = useSelector((state)=>state.counters)
  console.log(m1)
  return (
    <>
    <h1>App Component</h1>
    <div>
      <h3>Counter :{counter}</h3>
      <h3>Even-Counter:{evenCounter}</h3>
      <h3>Odd-Counter:{oddCounter}</h3>
      
    </div>
    <hr />
    <First/>
    <hr />
    <Second/>
    </>
  )
}

export default App