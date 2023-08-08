import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BlockState = {
  value: number;
};

const initialState = {
  value: 0,
} as BlockState;

export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = blocksSlice.actions;
export default blocksSlice.reducer;
