// src/store/features/users/userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";

const initialState = {
  userList: [],
  status: "idle",
  error: null,
  show: false
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (err) {
    throw err; 
  }
});


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showUsers (state) {
      state.show = !state.show
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload; 
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const {showUsers} = usersSlice.actions
export default usersSlice.reducer;
