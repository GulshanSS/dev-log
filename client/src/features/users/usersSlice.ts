import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types";

const initialState: TUser[] = [
  {
    id: "1",
    name: "Gulshan S",
  },
  {
    id: "2",
    name: "Raksha A",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: { users: TUser[] }) => state.users;

export default usersSlice.reducer;
