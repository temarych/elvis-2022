import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "en" | "uk";

interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: "en"
}

const languageSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    }
  }
});

export const languageReducer = languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;