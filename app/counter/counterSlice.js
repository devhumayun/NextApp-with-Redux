import { createSlice } from '@reduxjs/toolkit'
// create counter slice
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers:{
        increment: (state,action) => {
            state.count ++
        },
        decrement: (state,action) => {
            state.count --
        }
    }
})

// selector
export const counterSelector = (state) => state.counter;
// actions
export const {increment, decrement} = counterSlice.actions

// reducers
export default counterSlice.reducer