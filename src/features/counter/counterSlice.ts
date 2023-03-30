import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // reset value if user logged out
    builder.addCase("auth/logout", (state) => {
      state.value = 0;
    });
  },
});

export const { reset, increment, decrement, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
