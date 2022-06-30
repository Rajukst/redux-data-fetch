import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isloading: false,
    photos: [],
    error: null
}

export const fetchPosts= createAsyncThunk("photos/fetchPost", async()=>{
    const result= await axios.get('https://jsonplaceholder.typicode.com/photos')
    return result.data;
})

export const photoSlicer= createSlice({
    name: 'photos',
    initialState,
   extraReducers:(builders)=>{
    builders.addCase(fetchPosts.pending, (state)=>{
        state.isloading= true;
    });
    builders.addCase(fetchPosts.fulfilled, (state, action)=>{
        state.isloading= false;
        state.photos= action.payload;
        state.error= null;
    });
    builders.addCase(fetchPosts.rejected, (state, action)=>{
        state.isloading= false;
        state.photos= [];
        state.error= action.error.message;
    });
   }
});

export default photoSlicer.reducer;