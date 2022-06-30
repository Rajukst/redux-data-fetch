import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "../features/counter/counterSlice"
import postReducer from "../features/posts/postSlice";
import photoReducer from "../features/PhotoSlice/photoSlice"
import todosReducer from "../features/todos/totosSlice";
const store= configureStore({
    reducer:{
        counter: reducerSlice,
        posts: postReducer,
        photos: photoReducer,
        todo: todosReducer
    }
})

export default store;