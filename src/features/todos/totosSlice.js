import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isloading: false,
    todos: [],
    error: null
};

export const fetchTodos= createAsyncThunk("todos/fetchTodo", async()=>{
    const res= await axios.get ("https://jsonplaceholder.typicode.com/todos");
    return res.data;
})

 export const todosSlice= createSlice({
    name: 'todo',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.isloading= true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.isloading= false;
            state.todo= action.payload;
            state.error= null;
        });
        builder.addCase(fetchTodos.rejected, (state, action)=>{
            state.isloading= false;
            state.todo= [];
            state.error= action.error.message;
        });

    }
});

export default todosSlice.reducer;