import { sub } from "date-fns";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TPost } from "../types";

const initialState: TPost[] = [
  {
    id: "1",
    title: "This is 1st Title",
    description: "This is 1st Content",
    userId: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
  {
    id: "2",
    title: "This is 2nd Title",
    description: "This is 2nd Content",
    userId: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<TPost>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
            },
          },
        };
      },
    },
    addReaction: (
      state,
      action: PayloadAction<{
        postId: string;
        reaction: "thumbsUp" | "thumbsDown";
      }>
    ) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: { posts: TPost[] }) => state.posts;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
