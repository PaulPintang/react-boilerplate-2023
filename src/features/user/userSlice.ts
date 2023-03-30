import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInterface } from "../../interfaces/user.interface";

interface UserState {
  users: UserInterface[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchAllUsers = createAsyncThunk<
  UserInterface[],
  undefined,
  { rejectValue: string }
>("user/fetchAllUsers", async (_, thunkAPI) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    return users.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong!";
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
