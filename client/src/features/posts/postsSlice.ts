import { createSlice } from "@reduxjs/toolkit";
import { TPost } from "../types";

const initialState: TPost[] = [
  { id: 1, title: "This is 1st Title", description: "This is 1st Content" },
  { id: 2, title: "This is 2nd Title", description: "This is 2nd Content" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state: { posts: TPost[] }) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
