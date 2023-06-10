import { createSlice } from '@reduxjs/toolkit'
// create counter slice
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers:{
        
    }
})

// selector
// actions
export const {} = counterSlice.actions

// reducers
export default counterSlice.reducer