import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"Counter-Slice",
    initialState:{
        counter:100,
        evenCounter:0,
        oddCounter:1
    },
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter = state.counter+1
        },
        evenIncrementCounter:(state,action)=>{
            state.evenCounter = state.evenCounter+2
        },
        oddIncrementCounter:(state,action)=>{
            state.oddCounter = state.oddCounter+1
        },
        incrementAll:(state,action)=>{
          let value =  action.payload.input.current.value*1
          state.counter = state.counter+value
           state.evenCounter = state.evenCounter+value
             state.oddCounter = state.oddCounter+value
        }

    }
  
})

export const {incrementCounter,evenIncrementCounter,oddIncrementCounter,incrementAll} = slice.actions
export default slice.reducer