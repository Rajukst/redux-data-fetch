import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPost", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const initialState = {
  isloading: false,
  posts: [],
  error: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isloading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isloading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});
export default postSlice.reducer;
