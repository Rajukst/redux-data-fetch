import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers:{
        increment: state=>{
            state.count+=1
        },
        deccrement: state=>{
            state.count-=1
        },
        reset: state=>{
            state.count=0
        },
        increseAmount:(state, action)=>{
                state.count= state.count+action.payload
        },
        decreseAmount: (state, action)=>{
            state.count= state.count-action.payload
        }
    }
})
export default counterSlice.reducer;
export const {increment, deccrement, increseAmount, decreseAmount, reset}= counterSlice.actions;