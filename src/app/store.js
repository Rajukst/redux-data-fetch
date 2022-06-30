import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "../features/counter/counterSlice"
import postReducer from "../features/posts/postSlice"
const store= configureStore({
    reducer:{
        counter: reducerSlice,
        posts: postReducer
    }
})

export default store;