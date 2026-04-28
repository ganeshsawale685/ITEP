import React from 'react'
import First from './First'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

const App = () => {
  const [counter,setCounter]=useState(100)
  return (
    <div>
      <h1>App Component (Parent Component)</h1>
      <hr />
      <Context.Provider value={{counter,setCounter}}>
          <First/>
      </Context.Provider>
   
    </div>
  )
}

export default App
