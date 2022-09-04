import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Mode = "dark" | "light";

interface ModeState {
  mode: Mode;
}

const initialState: ModeState = {
  mode: "light"
}

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    }
  }
});

export const modeReducer = modeSlice.reducer;
export const { setMode } = modeSlice.actions;