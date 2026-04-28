import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice';
import MessageSlice from './MessageSlice';

const store = configureStore({
    reducer:{
        counters:CounterSlice,
        messages:MessageSlice
    }
})

export default store;
