import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TPost } from "../types";

const initialState: TPost[] = [
  { id: "1", title: "This is 1st Title", description: "This is 1st Content" },
  { id: "2", title: "This is 2nd Title", description: "This is 2nd Content" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<TPost>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: { posts: TPost[] }) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
