import { createSlice } from "@reduxjs/toolkit";

export type ThemeStateType = {
  darkMode: boolean;
};
const initialState: ThemeStateType = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    switchTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
